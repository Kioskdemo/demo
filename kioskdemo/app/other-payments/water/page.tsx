import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

export default function page() {
  return (
    <div>
      <header className="shadow-[0px_23px_15px_-10px_rgba(0,0,0,0.4)]">
        <div className="justify-center align-center flex p-[50px] mt-[80px]">
          <h1 className="text-[55px] font-bold pb-[50px]">Water Bill</h1>
        </div>
      </header>
      <main className="bgtax-image flex flex-col justify-center w-full ">
        <Link
          className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
          href={"/other-payments"}
        >
          <MdKeyboardBackspace size={40} className="text-[#335F96]" />
          <p>Back</p>
        </Link>
        <div className="flex flex-col justify-center items-center gap-20 text-[50px] my-[300px]">
          <input
            name="firstName"
            placeholder="Account No."
            className="h-[100px] w-[700px] text-center rounded-2xl bg-gray-200"
          />

          <Link href={"/other-payments/water/payment-info"}>
            <button className="w-[500px] h-[100px] bg-[#335F96] rounded-2xl text-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]">
              Confirm
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
