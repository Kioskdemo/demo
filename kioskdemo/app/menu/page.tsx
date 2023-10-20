import Link from "next/link";
import React from "react";
import { BsTicketDetailed } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineOtherHouses } from "react-icons/md";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <header className="shadow-[0px_23px_15px_-10px_rgba(0,0,0,0.9)]">
        <div className="justify-center align-center flex p-[50px] mt-[80px]">
          <h1 className="text-[55px] font-bold pb-[50px]">What would you like to do?</h1>
        </div>
      </header>
      <main className="flex flex-col justify-center w-full bgmenu-image mt-[50px]">
        <ul className="text-[40px] m-[25px] font-bold">
        <Link href={"/queueing"} className="text-[#335F96]">
          <li className="border-2 bg-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)] rounded-2xl flex items-center flex-col p-[34px] m-[30px]">
            <div className="flex flex-row gap-5 ml-[-150px]">
              <BsTicketDetailed size={150} className="mr-[45px] ml-[20px]" />
              <div className="flex flex-col ">
                
                  Queue Number
                
                <p className="text-[20px]">Lorem  dolor sit amet</p>
              </div>
            </div>
          </li>
          </Link>
          <Link href={"/queueing"} className="text-[#335F96]">
          <li className="border-2 bg-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)] rounded-2xl flex items-center flex-col p-[34px] m-[30px]">
            <div className="flex flex-row gap-5 ml-[-150px]">
              <GiPayMoney size={150} className="mr-[45px] ml-[20px]" />
              <div className="flex flex-col ">
                
                  Queue Number
                
                <p className="text-[20px]">Lorem  dolor sit amet consectetur</p>
              </div>
            </div>
          </li>
          </Link>
          <Link href={"/queueing"} className="text-[#335F96]">
          <li className="border-2 bg-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)] rounded-2xl flex items-center flex-col p-[34px] m-[30px]">
            <div className="flex flex-row gap-5 ml-[-150px]">
              <BsBuildings size={150} className="mr-[45px] ml-[20px]" />
              <div className="flex flex-col ">
                
                  Queue Number
                
                <p className="text-[20px]">Lorem  dolor sit amet consectetur.</p>
              </div>
            </div>
          </li>
          </Link>
          <Link href={"/queueing"} className="text-[#335F96]">
          <li className="border-2 bg-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)] rounded-2xl flex items-center flex-col p-[34px] m-[30px]">
            <div className="flex flex-row gap-5 ml-[-150px]">
              <MdOutlineOtherHouses size={150} className="mr-[45px] ml-[20px]" />
              <div className="flex flex-col ">
                
                  Queue Number
                
                <p className="text-[20px]">Lorem  dolor sit amet consectetur.</p>
              </div>
            </div>
          </li>
          </Link>
        </ul>
      </main>
    </div>
  );
}
