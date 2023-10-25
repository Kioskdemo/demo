import Link from "next/link";
import React from "react";

interface InputNumberProps {
  name: string;
  placeholder: string;
  link: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  name,
  placeholder,
  link,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 text-[50px] mt-[100px]">
      <input
        name={name}
        placeholder={placeholder}
        className="h-[100px] w-[700px] text-center rounded-2xl bg-gray-200"
      />

      <Link href={link}>
        <button className="w-[500px] h-[100px] bg-[#335F96] rounded-2xl text-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]">
          Confirm
        </button>
      </Link>
    </div>
  );
};

export default InputNumber;
