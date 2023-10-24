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
          <h1 className="text-[55px] font-bold pb-[50px]">Cedula Form</h1>
        </div>
      </header>
      <main className="bgtax-image flex flex-col w-full ">
        <Link
          className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
          href={"/other-payments"}
        >
          <MdKeyboardBackspace size={40} className="text-[#335F96]" />
          <p>Back</p>
        </Link>
        <div className="text-[35px] flex flex-col">
          <form action="s">
            <div className="flex p-5">
              <label htmlFor="" className="basis-1/2">
                Last Name
                <input
                  size={8}
                  name="name"
                  placeholder="Type here"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
              <label htmlFor="" className="basis-1/2">
                First Name
                <input
                  size={8}
                  name="name"
                  placeholder="Type here"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
              <label htmlFor="" className="basis-1/4">
                MI
                <input
                  size={1}
                  name="name"
                  placeholder="Mi"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
            </div>
            <div className="flex flex-col p-5">
              <label htmlFor="" className="">
                Place of Birth
              </label>
              <input
                size={8}
                name="name"
                placeholder="Type here"
                className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
              />
            </div>
            <div className="flex p-5">
              <label htmlFor="" className="basis-1/2">
                Birthdate
                <input
                  size={13}
                  name="name"
                  placeholder="Type here"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
              <label htmlFor="" className="basis-1/2">
                Nationality
                <input
                  size={14}
                  name="name"
                  placeholder="Type here"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
            </div>
            <div className="flex p-5">
              <label htmlFor="" className="basis-1/2">
                Citizenship
                <input
                  size={8}
                  name="name"
                  placeholder="Type here"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
              <label htmlFor="" className="basis-1/2">
                Civil Status
                <input
                  size={8}
                  name="name"
                  placeholder="Type here"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
              <label htmlFor="" className="basis-1/4">
                Sex
                <input
                  size={1}
                  name="name"
                  placeholder="M/F"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
            </div>
            <div className="flex flex-col p-5">
              <label htmlFor="" className="">
                Permanent Address
              </label>
              <input
                size={8}
                name="name"
                placeholder="Type here"
                className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
              />
            </div>
            <div className="flex p-5">
              <label htmlFor="" className="basis-1/2">
                Tel No.
                <input
                  size={13}
                  name="name"
                  placeholder="Type here"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
              <label htmlFor="" className="basis-1/2">
                Mobile No.
                <input
                  size={14}
                  name="name"
                  placeholder="Type here"
                  className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </label>
            </div>
            <div className="flex flex-col p-5">
              <label htmlFor="" className="">
                Occupation
              </label>
              <input
                size={8}
                name="name"
                placeholder="Type here"
                className=" rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
              />
            </div>
          </form>
          <div className="flex justify-around pt-5 ] text-white">
            <Link
              href={"/menu"}
              className="bg-[#d3010cee] rounded-2xl py-5 px-16 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
            >
              Cancel
            </Link>
            <Link
              href={"/other-payments/cedula/payment-info"}
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
