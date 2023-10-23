import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

export default function page() {
  return (
    <div>
      <header className="shadow-[0px_23px_15px_-10px_rgba(0,0,0,0.4)]">
        <div className="justify-center align-center flex p-[50px] mt-[80px]">
          <h1 className="text-[55px] font-bold pb-[50px]">Payment Info</h1>
        </div>
      </header>
      <main className="bgtax-image flex flex-col w-full">
        <Link
          className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
          href={"/pay-business/pay-business-form"}
        >
          <MdKeyboardBackspace size={40} className="text-[#335F96]" />
          <p>Back</p>
        </Link>
        <div className="flex justify-center flex-col text-[40px]">
          <form action="">
            <div className="flex p-5 gap-5 justify-center flex-col">
              <label htmlFor="" className="flex flex-col">
                PAID BY
                <input
                  size={15}
                  name="firstName"
                  placeholder="BIN No."
                  className="h-[100px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
              <label htmlFor="" className="flex flex-col">
                PAYER ADDRESS
                <input
                  size={15}
                  name="firstName"
                  placeholder="Renewal"
                  className="h-[100px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
              <label htmlFor="" className="flex flex-col">
                PARTICULARS
                <input
                  size={15}
                  name="firstName"
                  placeholder="Renewal"
                  className="h-[100px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
            </div>
            <div className="flex p-5 gap-5 justify-between">
              <label htmlFor="" className="flex flex-col">
                PARTICULARS
                <input
                  size={12}
                  name="firstName"
                  placeholder="BIN No."
                  className="h-[100px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
              <label htmlFor="" className="flex flex-col">
                AMOUNT
                <input
                  size={12}
                  name="firstName"
                  placeholder="Renewal"
                  className="h-[100px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
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
              href={"/pay-business/pay-business-form/payment-info/payment-type"}
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
