import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

export default function page() {
  return (
    <div>
      <header className="text-[20px]">
        <div className="flex justify-between px-10 pt-10 gap-5">
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              1
            </div>
            <span>Enter BIN</span>
          </div>

          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              2
            </div>
            <span>View Information</span>
          </div>
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              3
            </div>
            <span>Confirm Payment</span>
          </div>
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              4
            </div>
            <span>Payment Type</span>
          </div>
        </div>
      </header>
      <main className="bgtax-image flex flex-col w-full">
        <Link
          className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
          href={"/pay-property/pay-property-form"}
        >
          <MdKeyboardBackspace size={40} className="text-[#335F96]" />
          <p>Back</p>
        </Link>
        <div className="flex justify-center flex-col text-[40px]">
          <form action="" className="text-[30px] p-8">
            <div className="flex flex-col">
              <label htmlFor="">Paid By</label>
              <input
                size={5}
                name=""
                placeholder="Type here"
                className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Payer Address</label>
              <input
                size={5}
                name=""
                placeholder="Type here"
                className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Particulars</label>
              <input
                size={5}
                name=""
                placeholder="Type here"
                className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
              />
            </div>
            <div className="flex justify-center gap-5">
              <div className="flex flex-col basis-1/2">
                <label htmlFor="">Particulars</label>
                <input
                  size={5}
                  name=""
                  placeholder="Type here"
                  className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </div>
              <div className="flex flex-col basis-1/2">
                <label htmlFor="">Amount</label>
                <input
                  size={5}
                  name=""
                  placeholder="Type here"
                  className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
          </form>
          <div className="flex justify-around pt-20 text-white">
            <Link
              href={"/menu"}
              className="bg-[#d3010cee] rounded-2xl py-5 px-16 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
            >
              Cancel
            </Link>
            <Link
              href={"/pay-property/pay-property-form/payment-info/payment-type"}
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
