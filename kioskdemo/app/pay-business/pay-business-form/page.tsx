/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

export default function page() {
  return (
    <div>
      <header className="shadow-[0px_23px_15px_-10px_rgba(0,0,0,0.4)]">
        <div className="justify-center align-center flex p-[50px] mt-[80px]">
          <h1 className="text-[55px] font-bold pb-[50px]">Pay Business Form</h1>
        </div>
      </header>
      <main className="bgtax-image flex flex-col w-full ">
        <Link
          className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
          href={"/pay-business"}
        >
          <MdKeyboardBackspace size={40} className="text-[#335F96]" />
          <p>Back</p>
        </Link>
        <div className="flex justify-center flex-col text-[40px]">
          <form action="">
            <div className="flex p-5 gap-5 justify-center">
              <label htmlFor="" className="flex flex-col">
                BIN
                <input
                  size={15}
                  name="firstName"
                  placeholder="BIN No."
                  className="h-[100px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
              <label htmlFor="" className="flex flex-col">
                TYPE
                <input
                  size={9}
                  name="firstName"
                  placeholder="Renewal"
                  className="h-[100px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
            </div>
            <div className="grid justify-center">
              <label htmlFor="" className="flex flex-col p-5">
                TRADE NAME
                <input
                  size={31}
                  name="firstName"
                  placeholder="Renewal"
                  className="h-[100px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
            </div>
            <div className="flex p-5 gap-5 justify-center">
              <label htmlFor="" className="flex flex-col">
                AMOUNT DUE
                <input
                  size={5}
                  name="firstName"
                  placeholder="BIN No."
                  className="h-[100px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
              <label htmlFor="" className="flex flex-col">
                YEAR
                <input
                  size={5}
                  name="firstName"
                  placeholder="Renewal"
                  className="h-[100px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
              <label htmlFor="" className="flex flex-col">
                QUARTER
                <input
                  size={5}
                  name="firstName"
                  placeholder="Renewal"
                  className="h-[100px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
            </div>
          </form>
          <div className="relative text-[30px] text-black flex justify-around bg-[#ffffff75]">
            <div className="absolute w-[700px] h-[3px] bg-black top-[50px]"></div>
            <div className="">
              <h1>Details</h1>
              <p>Sari-Sari Store</p>
              <p className="pl-[50px]">Business Tax</p>
              <p className="pl-[50px]">Mayor's Permit</p>
              <p>Sari-Sari Store</p>
              <p className="pl-[50px]">Business Tax</p>
              <p className="pl-[50px]">Mayor's Permit</p>
            </div>
            <div>
              <h1>Amount</h1>
              <p className="text-transparent">.</p>
              <p>1,500.00</p>
              <p>800.00</p>
              <p className="text-transparent">.</p>
              <p>1,500.00</p>
              <p>800.00</p>
            </div>
          </div>
          <div className="flex justify-around pt-10 bg-[#ffffff75] text-white">
            <Link
              href={"/menu"}
              className="bg-[#d3010cee] rounded-2xl py-5 px-16 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
            >
              Cancel
            </Link>
            <Link
              href={"/pay-business/pay-business-form/payment-info"}
              className="bg-[#335F96] rounded-2xl py-5 px-16 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
            >
              Confirm
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
