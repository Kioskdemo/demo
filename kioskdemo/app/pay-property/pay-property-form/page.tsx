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
          <h1 className="text-[55px] font-bold pb-[50px]">Pay Property Form</h1>
        </div>
      </header>
      <main className="bgtax-image flex flex-col w-full ">
        <Link
          className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
          href={"/pay-property"}
        >
          <MdKeyboardBackspace size={40} className="text-[#335F96]" />
          <p>Back</p>
        </Link>
        <div className="grid justify-center flex-col text-[35px]">
          <form action="">
            <div className="grid grid-cols-2 grid-flow-col p-5">
              <label htmlFor="">
                ARP/TD NO.
                <input
                  size={18}
                  name="name"
                  placeholder="2023-140019-0190"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
              <label htmlFor="">
                Property Identification No.
                <input
                  size={19}
                  name="name"
                  placeholder="2023-140019-0190"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
            </div>
            <div className="p-5 grid">
              <label htmlFor="">Owner</label>
              <input
                size={10}
                name="name"
                placeholder="Name"
                className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
              />
            </div>
            <div className="p-5 grid">
              <label htmlFor="" className="">
                Address
              </label>
              <input
                size={10}
                name="name"
                placeholder="full address"
                className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
              />
            </div>
            <div className="grid grid-cols-2 grid-flow-col p-5 ">
              <label htmlFor="">
                OCT/TCT/CLOA No.
                <input
                  size={18}
                  name="name"
                  placeholder="TCT T-12345"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
              <label htmlFor="">
                Lot No.
                <input
                  size={19}
                  name="name"
                  placeholder="LOT 4005"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
            </div>
            <div className="grid grid-cols-2 grid-flow-col p-5 ">
              <label htmlFor="">
                Municipal Assessor
                <input
                  size={18}
                  name="name"
                  placeholder="Fullname"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
              <label htmlFor="">
                Provincial Assessor
                <input
                  size={19}
                  name="firstName"
                  placeholder="Fullname"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
            </div>
          </form>
          <div className="flex justify-around pt-10 bg-[#ffffff75] text-white">
            <Link
              href={"/menu"}
              className="bg-[#d3010cee] rounded-2xl py-5 px-16 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
            >
              Cancel
            </Link>
            <Link
              href={"/pay-property/pay-property-form/payment-info"}
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
