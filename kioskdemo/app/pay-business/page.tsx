'use client'
import Link from "next/link";
import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import { MdKeyboardBackspace } from "react-icons/md";
import CustomKeyboard from '../Functions/CustomKeyboard';

export default function Page() {
  const [inputValue, setInputValue] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const keyboardContainerRef = useRef<HTMLDivElement | null>(null);
  const inputFieldRef = useRef<HTMLInputElement | null>(null);

  const handleKeyClick = (key: string) => {
    if (key === 'CLEAR') {
      setInputValue('');
    } else if (key === 'Del') {
      const cursorPosition = inputFieldRef.current?.selectionStart || 0;
      if (cursorPosition > 0) {
        const updatedValue =
          inputValue.slice(0, cursorPosition - 1) + inputValue.slice(cursorPosition);
        setInputValue(updatedValue);
        setCursorPosition(cursorPosition - 1);
      }
    } else {
      const cursorPosition = inputFieldRef.current?.selectionStart || 0;
      const updatedValue =
        inputValue.slice(0, cursorPosition) + key + inputValue.slice(cursorPosition);
      setInputValue(updatedValue);
      setCursorPosition(cursorPosition + 1);
    }
  };


  const setCursorPosition = (position: number) => {
    if (inputFieldRef.current) {
      // Delay focusing to ensure it maintains cursor position
      setTimeout(() => {
        if (inputFieldRef.current) {
          inputFieldRef.current.selectionStart = position;
          inputFieldRef.current.selectionEnd = position;
          inputFieldRef.current.focus();
        }
      }, 0);
    }
  };

  const handleTextInputFocus = () => {
    setKeyboardVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isKeyboardVisible &&
        keyboardContainerRef.current &&
        !keyboardContainerRef.current.contains(event.target as Node) &&
        inputFieldRef.current &&
        !inputFieldRef.current.contains(event.target as Node)
      ) {
        setKeyboardVisible(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isKeyboardVisible]);

  return (
    <div>
      <header className="shadow-[0px_23px_15px_-10px_rgba(0,0,0,0.4)]">
        <div className="justify-center align-center flex p-[50px] mt-[80px]">
          <h1 className="text-[55px] font-bold pb-[50px]">Pay Business</h1>
        </div>
      </header>
      <main className="flex flex-col justify-center w-full bgpaybusiness-image mt-[50px]">
        <Link
          className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
          href={"/menu"}
        >
          <MdKeyboardBackspace size={40} className="text-[#335F96]" />
          <p>Back</p>
        </Link>
        <div className="flex flex-col justify-center items-center gap-10 text-[50px] mt-[100px]">
          <input
            onFocus={handleTextInputFocus}
            value={inputValue}
            name="firstName"
            placeholder="Enter Your BIN"
            className="h-[100px] w-[700px] text-center rounded-2xl bg-gray-200"
            ref={inputFieldRef}
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
        <div className={`keyboard-container ${isKeyboardVisible ? 'visible' : ''}`} ref={keyboardContainerRef}>
          <CustomKeyboard handleKeyClick={handleKeyClick} />
        </div>
      </main>
    </div>
  );
}
