import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className=" h-52 w-full shadow-[0px_23px_15px_-10px_rgba(0,0,0,0.3)] flex items-center text-center justify-center mt-[30px]">
      <nav className="">
        <Image
          src="/cebu-logo.png"
          alt="Cebu Logo"
          width={120}
          height={120}
          className=""
          quality={100}
        />
      </nav>
    </header>
  );
};

export default Header;
