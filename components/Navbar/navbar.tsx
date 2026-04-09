"use client";

import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaCommentDots,
  FaBell,
  FaTh,
  FaBullhorn,
  FaSearch,
} from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home"); // ✅ added

  return (
   <nav className="flex items-center justify-between bg-white py-2 shadow-sm sticky top-0 z-10 h-13 pt-2">

      <div className="max-w-6xl mx-auto flex-auto flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-1">
          <div className="md:hidden text-black">
            <FaBars
              className="text-xl cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>

          <img
            src="/icons/OIP.jpg"
            alt="logo"
            className="flex-fit h-8 object-cover"
          />
        </div>

        {/* CENTER */}
        {/* <div className="flex-1 mx-2 max-w-xl">
          <input
            type="text"
            placeholder="Search"
            className="w-85 px-2 py-1 bg-white text-gray-700 placeholder:text-gray-500 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div> */}
        <div className="flex-1 mx-2 max-w-xl">
        <div className="relative">

          {/* 🔍 Icon */}
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 text-sm" />

          {/* Input */}
          <input
            type="text"
            placeholder="Search"
            className="w-[70%] p-2 pl-9 pr-4 bg-white text-gray-700 placeholder:text-gray-500 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />

        </div>
      </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-7 text-gray-600">

          {/* Home */}
          <div
            onClick={() => setActive("home")}
            className={`flex flex-col items-center text-xs cursor-pointer 
              ${active === "home"
                ? "text-black border-b-2 border-black p-2"
                : "text-gray-600 hover:text-black"}
            `}
          >
            <FaHome className="text-xl" />
            <span>Home</span>
          </div>

          {/* Network */}
          <div
            onClick={() => setActive("network")}
            className={`flex flex-col items-center text-xs cursor-pointer 
              ${active === "network"
                ? "text-black border-b-2 border-black p-2"
                : "text-gray-600 hover:text-black"}
            `}
          >
            <FaUserFriends className="text-xl" />
            <span>My Network</span>
          </div>

          {/* Jobs */}
          <div
            onClick={() => setActive("jobs")}
            className={`flex flex-col items-center text-xs cursor-pointer 
              ${active === "jobs"
                ? "text-black border-b-2 border-black p-2"
                : "text-gray-600 hover:text-black"}
            `}
          >
            <FaBriefcase className="text-xl" />
            <span>Jobs</span>
          </div>

          {/* Messaging */}
          <div
            onClick={() => setActive("msg")}
            className={`flex flex-col items-center text-xs cursor-pointer 
              ${active === "msg"
                ? "text-black border-b-2 border-black p-2"
                : "text-gray-600 hover:text-black"}
            `}
          >
            <FaCommentDots className="text-xl" />
            <span>Messaging</span>
          </div>

          {/* Notifications */}
          <div
            onClick={() => setActive("notifications")}
            className={`flex flex-col items-center text-xs relative cursor-pointer 
              ${active === "notifications"
                ? "text-black border-b-2 border-black p-2"
                : "text-gray-600 hover:text-black"}
            `}
          >
            <FaBell className="text-xl" />
            <span>Notifications</span>
            <span className="absolute -top-1 right-4 bg-red-500 text-white text-[12px] px-1 rounded-full">
              7
            </span>
          </div>

          {/* Profile */}
          <div className="flex flex-col items-center text-xs hover:text-black cursor-pointer ">
            <img
              src="/icons/001.jpg"
              alt="profile"
              className="w-6 h-6 rounded-full object-cover"
            />
            <div className="flex items-center gap-1 ">
              <span>Me</span>
              <span className="text-[10px]">▼</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-13 w-px bg-gray-200"></div>

          {/* Business */}
          <div className="flex flex-col items-center text-xs hover:text-black cursor-pointer ">
            <FaTh className="text-xl" />
            <div className="flex items-center gap-1 ">
              <span>For Business</span>
              <span className="text-[10px]">▼</span>
            </div>
          </div>

          {/* Advertise */}
          <div className="flex flex-col items-center text-xs hover:text-black cursor-pointer ">
            <FaBullhorn className="text-xl" />
            <span>Advertise</span>
          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setOpen(false)}
          />

          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4 z-50">
            <button
              className="mb-4 text-black font-semibold"
              onClick={() => setOpen(false)}
            >
              Close ✕
            </button>

            <div className="flex flex-col gap-4 text-gray-700 text-sm">
              <span>Home</span>
              <span>My Network</span>
              <span>Jobs</span>
              <span>Messaging</span>
              <span>Notifications</span>
              <span>Me</span>
              <span>For Business</span>
              <span>Advertise</span>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;