"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Select from "../Component/Select";
import ReactDOMServer, {
  renderToStaticMarkup,
  renderToString,
} from "react-dom/server";
import { ComponentToPrint } from "../PrintableContent";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

const LandingPage = () => {
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );

  const componentRef = useRef(null);

  const handlePopupPrint = () => {
    const printWindow = window.open("", "", "width=1,height=1");

    if (printWindow) {
      const content = (
        <div>
          <ComponentToPrint />
        </div>
      );
      printWindow.document.write(ReactDOMServer.renderToString(content));
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
    } else {
      alert("Pop-up window blocked. Please allow pop-ups for printing.");
    }
  };

  return (
    <>
      <div className="relative">
        <header className="shadow-[0px_23px_15px_-10px_rgba(0,0,0,0.4)]">
          <div className="justify-center align-center flex p-[50px] mt-[80px]">
            <h1 className="text-[55px] font-bold pb-[50px]">Queueiing</h1>
          </div>
        </header>
        <main className="flex flex-col justify-center w-full bgqueue-image">
          <div className="h-[10px]">
            <div className="text-center">
              <ul className="text-[45px] font-bold p-32 relative">
                <li className="bg-[#335F96] shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)] rounded-2xl relative m-[40px] p-[30px] ">
                  <Select
                    options={options}
                    value={value}
                    onChange={(o) => setValue(o)}
                  />
                </li>

                <li className="bg-[#335F96] text-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)] rounded-2xl m-[40px] p-[35px]">
                  Counter No. <span>001</span>
                </li>
                <li className="bg-[#335F96] text-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)] rounded-2xl m-[40px] p-[35px]">
                  Queue No. <span>001</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="capitalize text-center mt-[50rem]">
            <Link href={"#"}>
              <button
                onClick={handlePopupPrint}
                className="text-[70px] font-bold text-white bg-[#31D84C] rounded-2xl px-40 py-5 shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]"
              >
                Print
              </button>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default LandingPage;
