/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardBackspace } from "react-icons/md";
import Modal from "@/app/Component/Modal";
import ModalGcash from "@/app/Component/ModalGcash";

const Page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // modalGcash

  const [isModalOpenGcash, setIsModalOpenGcash] = useState(false);

  const openModalGcash = () => {
    setIsModalOpenGcash(true);
  };

  const closeModalGcash = () => {
    setIsModalOpenGcash(false);
  };

  return (
    <div>
      <header className="shadow-[0px_23px_15px_-10px_rgba(0,0,0,0.4)]">
        <div className="justify-center align-center flex p-[50px] mt-[80px]">
          <h1 className="text-[55px] font-bold pb-[50px]">Payment Type</h1>
        </div>
      </header>
      <main className="bgtax-image flex flex-col w-full">
        <Link
          className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
          href={"/pay-property/pay-property-form/payment-info"}
        >
          <MdKeyboardBackspace size={40} className="text-[#335F96]" />
          <p>Back</p>
        </Link>
        <div className="flex text-[40px] items-center flex-col mt-[250px] mb-[400px]">
          <h1 className="font-bold uppercase">Choose Preferred payment type</h1>
          <div className="flex gap-20 pt-5">
            <button
              onClick={openModalGcash}
              className="bg-white w-[250px] h-[250px] flex items-center text-center justify-center rounded-2xl shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
            >
              <Image
                src="/globe-gcash.png"
                alt="Cebu Logo"
                width={200}
                height={200}
                quality={100}
              />
            </button>

            {/* MODAL GCASH */}

            <ModalGcash isOpen={isModalOpenGcash} onClose={closeModalGcash}>
              <form className="flex flex-col items-center gap-5">
                <div className="">
                  <Image
                    src={"/gcash-qr.png"}
                    alt={""}
                    height={100}
                    width={300}
                    quality={100}
                  ></Image>
                </div>
                <h1 className="text-red-500 text-[40px] text-center">
                  Step on how to pay using Gacash:
                </h1>
                <ul className="text-[30px]">
                  <li>1. Open your Gcash and scan the Code.</li>
                  <li>2. Pay the exact amount</li>
                  <li>3. Wait for the confirmation</li>
                </ul>
                <Link href={"/menu"}>
                  <button className="flex items-center justify-center bg-[#335F96] w-[200px] h-[70px] text-white rounded-2xl">
                    Confirm
                  </button>
                </Link>
              </form>
            </ModalGcash>

            <button
              onClick={openModal}
              className="bg-white w-[250px] h-[250px] flex items-center text-center justify-center rounded-2xl shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
            >
              <Image
                src="/cashier-logo.png"
                alt="Cebu Logo"
                width={200}
                height={200}
                quality={100}
              />
            </button>

            {/* MODAL CASHIER */}

            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <form className="flex flex-col items-center gap-5">
                <label htmlFor="" className="flex flex-col items-center">
                  Counter No.
                  <input
                    size={10}
                    name="firstName"
                    placeholder="C-001"
                    className="h-[100px] bg-gray-100 p-5  border-2 border-black rounded"
                  />
                </label>
                <label htmlFor="" className="flex flex-col items-center">
                  Queue No.
                  <input
                    size={10}
                    name="firstName"
                    placeholder="Q-001"
                    className="h-[100px] bg-gray-100 p-5  border-2 border-black rounded"
                  />
                </label>
                <h1 className="text-red-500 text-[20px] text-center">
                  Press Confirm to Print Ticket
                </h1>
                <Link href={"/menu"}>
                  <button className="flex items-center justify-center bg-[#335F96] w-[200px] h-[70px] text-white rounded-2xl">
                    Confirm
                  </button>
                </Link>
              </form>
            </Modal>
          </div>
          <div className="flex gap-52 pt-10 font-bold">
            <h1>Gcash</h1>
            <h1>Cashier</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
