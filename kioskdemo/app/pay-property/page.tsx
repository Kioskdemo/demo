import React from "react";

export default function page() {
  return (
    <div>
      <header className="shadow-[0px_23px_15px_-10px_rgba(0,0,0,0.4)]">
        <div className="justify-center align-center flex p-[50px] mt-[80px]">
          <h1 className="text-[55px] font-bold pb-[50px]">Pay Property</h1>
        </div>
      </header>
      <main className="bgtax-image flex flex-col justify-center w-full mt-[50px]">
        <div className="flex flex-col justify-center items-center gap-20 text-[50px] my-[300px]">
          <input
            name="firstName"
            placeholder="Enter Your BIN"
            className="h-[100px] w-[700px] text-center rounded-2xl bg-gray-200"
          />
          <button className="w-[500px] h-[100px] bg-[#335F96] rounded-2xl text-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]">
            Confirm
          </button>
        </div>
      </main>
    </div>
  );
}
