import { ethers } from "ethers";
import React, { useState } from "react";
import {
  contractABI,
  contractByteCode,
  ETHContractAddress,
  polygonContractAddress,
  ShardeumContractAddress,
} from "../Constants/Constants";

function Deploy() {
  const [name, setName] = useState("Payment Gateway");
  const [value, setValue] = useState();
  const m = [];

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const deployContract = async () => {
    const factory = new ethers.ContractFactory(
      contractABI,
      contractByteCode,
      signer
    );
    const contract = await factory.deploy([
      "0x5a1899faff22a2b3ea0294d86cd1be6269931ef1",
      "0x0F71B2a7898EE371b8D1fDc9352dC9cbBC18294e",
    ]);
    // const contract = await factory.deploy();
    console.log("address- ", contract.address);
    window.alert(`contract depolyed at ${contract.address}`);
  };

  function GetName(e) {
    setName(e.target.value);
  }

  function getDropDown() {
    console.log(m);
  }

  const handleChange = (e) => {
    m.push(e.target.value);
    // setValue.push[e.target.value];
  };

  const getInitialState = () => {
    const value = "ETH";
    return value;
  };

  //  ########## EPNS ########
  // const getData = async ()=> {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     var name = await provider.lookupAddress(account);
  //     console.log("name",name)

  //     var address = await provider.resolveName('adityak.eth');
  //     console.log("address", address)

  //     var balance = await provider.getBalance('adityak.eth');
  //     console.log("balance",balance.toString())

  //     // const resolver = await provider.getResolver('adityak.eth');
  //     // console.log("resolver", resolver)
  //     // const contentHash = await resolver.getContentHash();
  //     // console.log("contentHash",contentHash)
  //     // const btcAddress = await resolver.getAddress(0);
  //     // console.log("btcAddress",btcAddress)
  //     // const dogeAddress = await resolver.getAddress(3);
  //     // console.log("dogeAddress",dogeAddress)
  //     // const email = await resolver.getText("email");
  //     // console.log("email", email)

  return (
    <div className="text-center h-auto bg-black pt-10 text-white font-semibold items-center justify-between ">
      <div className="">
        <h1 className="border-b-4 pb-3 justify-start items-start ml-[-10%] max-w-[35%] border-b-[#40f0f8] text-2xl ">
          Deploy
        </h1>

        <br />
        <br />

        <div className=" w-full text-center items-center justify-center flex">
          <label className=" mx-3 " for="cars">
            Select Blockchain:
          </label>

          <select
            className="  dropdown-toggle
          px-6
          py-2.5
          hover:cursor-pointer
          bg-[#00ADB5]
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          active:bg-[#175f64df] active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap"
            name="chains"
            id="chains"
            size="1"
          >
            <option className="dropdown-item" value="ETH-Goerli">
              ETH-Goerli
            </option>
            <option value="Shardeum">Shardeum</option>
            <option value="Polygon">Polygon</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <br />
        <br />

        <div className="flex items-center gap-5 justify-center ">
          <label for="cars items-center text-center justify-center">
            Select Tokens:
          </label>

          <div class=" text-black">
            {/* <select
              id="select-role"
              name="roles[]"
              multiple
              placeholder="Select roles..."
              autocomplete="off"
              className=" form-multiselect rounded-sm cursor-pointer focus:outline-none"
            > */}
            {/* <option data-count="2" value="USDT">
                USDT
              </option>
              <option data-count="23" value="ETH">
                ETH
              </option>
              <option data-count="433" value="MATIC">
                MATIC
              </option>
              <option data-count="45" value="SHM">
                SHM
              </option>
              <option data-count="476" value="fETH">
                fETH
              </option>
              <option data-count="78" value="Other">
                Other
              </option>
            </select> */}
            <select onChange={handleChange}
              name="make"
              placeholder="Select Tokens"
              className="selectpicker"
              multiple
              data-live="true"
            >
              <option data-count="2" value="USDT">
                TFIL
              </option>
              <option data-count="2" value="USDT">
                USDT
              </option>
              <option data-count="23" value="ETH">
                ETH
              </option>
              <option data-count="433" value="MATIC">
                MATIC
              </option>
              <option data-count="45" value="SHM">
                SHM
              </option>
              <option data-count="78" value="Other">
                Other
              </option>
            </select>
          </div>
        </div>

        <div className="flex ml-[6%] justify-center gap-4 items-center mt-10">
          <h4 className="">Contract-Name: </h4>
          <input
            className=" rounded-lg p-1 border-gray-500"
            type="text"
            placeholder="Contract Name"
            onChange={GetName}
          />
        </div>

        <br />
        <br />

        <button
          className="-full p-4 bg-gradient-to-r from-[#00acb54a] to-[#40f0f8] hover:bg-[#40f0f8]  rounded-xl text-xl font-bold text-white mx-4"
          onClick={deployContract}
        >
          Deploy Contract
        </button>
   
      </div>
    </div>
  );
}

export default Deploy;
