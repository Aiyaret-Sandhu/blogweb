import React from "react";
import { BsSendFill } from "react-icons/bs";
import { AiFillFacebook, AiFillHome, AiFillInfoCircle, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare, FaShareSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full flex m-auto text-white min-h-[200px] p-4 mt-12"  style={{
      backgroundColor: "rgba(0,20,0,0.9)"
    }}>
      <div className="container m-auto grid grid-cols-3 md:grid-cols-1 md:space-y-8">
      <div className=" space-y-2">
            <h2 className=" text-2xl font-medium"> Quick Links </h2>
            <div className=" flex items-center gap-3">
              <AiFillHome size={20} />
              <p>Home</p>
            </div>
            <div className=" flex items-center gap-3">
              <FaShareSquare size={20} />
              <p>Posts</p>
            </div>
            <div className=" flex items-center gap-3">
              <AiFillInfoCircle size={20} />
              <p>About</p>
            </div>
          </div>
        <div className=" flex items-center md:items-start  justify-center  flex-col gap-3 space-y-2">
          <h2 className=" text-2xl font-medium"> Subscribe</h2>
          <div className=" flex flex-row justify-center md:justify-start gap-2 w-full">
            <input
              placeholder="Your email "
              className=" w-[70%] p-1 px-2 text-black rounded-sm"
              type="email"
            />
            <button className=" border p-2 rounded-sm">
              <BsSendFill />
            </button>
          </div>
        </div>
        <div className=" flex items-center md:items-start  flex-col gap-3">
          <div className=" space-y-2">
            <h2 className=" text-2xl font-medium"> Socials</h2>
            <div className=" flex items-center gap-3">
              <AiFillFacebook size={24} />
              <p>Facebook</p>
            </div>
            <div className=" flex items-center gap-3">
              <AiFillTwitterSquare size={24} />
              <p>Twitter</p>
            </div>
            <div className=" flex items-center gap-3">
              <FaInstagramSquare size={24} />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
