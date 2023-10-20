import React from "react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <main className="relative h-[1920px] flex flex-col justify-center">
      <div className=" absolute -z-10 w-full">
        <Image
          src="/bg-image.png"
          alt="Background image"
          quality={100}
          width={5000}
          height={1410}
          className="opacity-50 object-cover h-[1920px]"
        />
      </div>
      <div className="w-full gap-36 ">
        <div className=" py-5 px-5 my-10 text-center ">
          <h1 className="text-[88px] font-bold leading-none">
            Experience ease of doing business with the government
          </h1>
          <p className="text-3xl">
            Over 50 local government units participating all over the
            Philippines
          </p>
        </div>
        <div className="capitalize  m-auto py-5 px-5 my-10 text-center">
          <Link href={"/menu"}>
            <button className="text-[70px] font-bold text-[#335F96] animate-bounce">
              Tap to start
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
