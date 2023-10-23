import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdKeyboardBackspace } from "react-icons/md";

export default function page() {
  return (
    <div>
      <header className="shadow-[0px_23px_15px_-10px_rgba(0,0,0,0.4)]">
        <div className="justify-center align-center flex p-[50px] mt-[80px]">
          <h1 className="text-[55px] font-bold pb-[50px]">Payment Type</h1>
        </div>
      </header>
      <main className="bgtax-image flex flex-col w-full">
        <Link
          className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
          href={"/pay-business/pay-business-form/payment-info"}
        >
          <MdKeyboardBackspace size={40} className="text-[#335F96]" />
          <p>Back</p>
        </Link>
        <div className="flex text-[40px] items-center flex-col mt-[250px] mb-[400px]">
          <h1 className="font-bold uppercase">Choose Preferred payment type</h1>
          <div className="flex gap-20 pt-5">
            <button className="bg-white w-[250px] h-[250px] flex items-center text-center justify-center rounded-2xl shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]">
              <Image
                src="/globe-gcash.png"
                alt="Cebu Logo"
                width={200}
                height={200}
                quality={100}
              />
            </button>

            <button className="bg-white w-[250px] h-[250px] flex items-center text-center justify-center rounded-2xl shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]">
              <Image
                src="/cashier-logo.png"
                alt="Cebu Logo"
                width={200}
                height={200}
                quality={100}
              />
            </button>
          </div>
          <div className="flex gap-52 pt-10 font-bold">
            <h1>Gcash</h1>
            <h1>Cashier</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
