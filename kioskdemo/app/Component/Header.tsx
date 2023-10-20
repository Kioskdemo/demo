import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className=" h-52 w-full shadow-xl flex items-center text-center justify-center ">
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
