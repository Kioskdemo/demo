import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <header className="shadow-[0px_23px_15px_-10px_rgba(0,0,0,0.4)]">
        <div className="justify-center align-center flex p-[50px] mt-[80px]">
          <h1 className="text-[55px] font-bold pb-[50px]">Pay Business</h1>
        </div>
      </header>
      <main className="flex flex-col justify-center w-full bgpaybusiness-image mt-[50px]">
        <div className="flex flex-col justify-center items-center gap-10 text-[50px] mt-[100px]">
          <input
            name="firstName"
            placeholder="Enter Your BIN"
            className="h-[100px] w-[700px] text-center rounded-2xl bg-gray-200"
          />

          <Link href={"/pay-business/pay-business-form"}>
            <button className="w-[500px] h-[100px] bg-[#335F96] rounded-2xl text-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]">
              Confirm
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 py-[50px] text-[50px] relative">
          <span className="w-[250px] h-[3px] bg-black absolute top-[85px] left-[100px]"></span>
          OR
          <span className="w-[250px] h-[3px] bg-black absolute top-[85px] right-[100px]"></span>
          <div>
            <h1>Scan QR code</h1>
          </div>
          <div>
            <Image src={"/example-qr.webp"} alt={""} height={300} width={300} />
          </div>
        </div>
      </main>
    </div>
  );
}
