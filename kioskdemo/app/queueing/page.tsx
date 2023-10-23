/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Select from "../Component/Select";
import ReactDOMServer, {
  renderToStaticMarkup,
  renderToString,
} from "react-dom/server";
import { ComponentToPrint } from "../PrintableContent";
import { MdKeyboardBackspace } from "react-icons/md";

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
    const printWindow = window.open("", "", "width=800,height=400");

    if (printWindow) {
      const content = (
        <div>
          <ComponentToPrint />
        </div>
      );
      const customStyle = `
        body {
          font-size: 12px;
        }
        img {
          height: 100px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        @media print {
          .no-print {
            display: none;
          }
          @page {
            size: auto;
            margin: 0;
          }
          @page :first {
            margin-top: 0;
          }
          @page :left {
            margin-left: 0px;
          }
          @page :right {
            margin-right: 0;
          }
        }
      `;
      printWindow.document.write(`
        <html>
        <head>
          <style>${customStyle}</style>
        </head>
        <body>
        <img src="/Qr.png" alt="" />
          ${ReactDOMServer.renderToString(content)}
        </body>
        </html>
      `);
      printWindow.document.querySelectorAll(".no-print").forEach((element) => {
        element.classList.add("hidden-on-print");
      });
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
      <img className="hidden" src="/Qr.png" alt="" />
      <div className="relative">
        <header className="shadow-[0px_23px_15px_-10px_rgba(0,0,0,0.9)]">
          <div className="justify-center align-center flex p-[50px] mt-[80px]">
            <h1 className="text-[55px] font-bold pb-[50px]">
              What would you like to do?
            </h1>
          </div>
        </header>
        <main className="flex flex-col justify-center w-full bgqueue-image">
          <div className="h-[50px]">
            <Link
              className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
              href={"/menu"}
            >
              <MdKeyboardBackspace size={40} className="text-[#335F96]" />
              <p>Back</p>
            </Link>
            <div className="text-center">
              <ul className="text-[45px] font-bold px-28 pt-5 relative">
                <li className="bg-[#335F96] shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)] rounded-2xl relative m-[40px] p-[30px] ">
                  <Select
                    options={options}
                    value={value}
                    onChange={(o) => setValue(o)}
                  />
                </li>

                {/* <li className="bg-gray-200 px-[25rem] py-[23rem] absolute bottom-[-20px] right-[160px]"></li> */}
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
            <Link href={"/menu"}>
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
