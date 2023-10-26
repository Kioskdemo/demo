import React, { ReactNode } from "react";

interface CategoryQueProps {
  iconImg: ReactNode;
  text: string;
}

const CategoryQue: React.FC<CategoryQueProps> = ({ iconImg, text }) => {
  return (
    <div className="w-[180px] h-[180px] bg-white rounded-[25%] text-[#335F96] shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)] border border-[#335F96] flex justify-center items-center">
      <div className="flex items-center flex-col p-5 gap-3 ">
        <div className="">{iconImg}</div>
        <span className="text-[17px] text-black">{text}</span>
      </div>
    </div>
  );
};

export default CategoryQue;
