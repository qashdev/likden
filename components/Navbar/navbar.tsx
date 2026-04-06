"use client";

import { useState } from "react";
import { FaBars, FaHome, FaUserFriends, FaBriefcase, FaCommentDots, FaBell, FaTh, FaBullhorn } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white px-4 md:px-6 py-3 shadow-md">

      {/* LEFT (Hamburger + Logo) */}
      <div className="flex items-center gap-3">
        
        {/* Hamburger (mobile only) */}
        <div className="text-black md:hidden">
          <FaBars
            className="text-xl cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>

        {/* Logo */}
        <img
          src="/icons/OIP.jpg"
          alt="logo"
          className="w-10 h-10"
        />
      </div>

      {/* CENTER (Search) */}
      <div className="flex-1 mx-4 max-w-xl">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 bg-gray-100 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* RIGHT (Desktop only) */}
      <div className="hidden md:flex items-center gap-8 text-gray-600">

        <div className="flex flex-col items-center text-xs hover:text-black cursor-pointer">
          <FaHome className="text-xl" />
          <span>Home</span>
        </div>

        <div className="flex flex-col items-center text-xs hover:text-black cursor-pointer">
          <FaUserFriends className="text-xl" />
          <span>My Network</span>
        </div>

        <div className="flex flex-col items-center text-xs hover:text-black cursor-pointer">
          <FaBriefcase className="text-xl" />
          <span>Jobs</span>
        </div>

        <div className="flex flex-col items-center text-xs hover:text-black cursor-pointer">
          <FaCommentDots className="text-xl" />
          <span>Messaging</span>
        </div>

        <div className="flex flex-col items-center text-xs relative hover:text-black cursor-pointer">
          <FaBell className="text-xl" />
          <span>Notifications</span>
          <span className="absolute -top-1 right-1 bg-red-500 text-white text-[10px] px-1 rounded-full">
            22
          </span>
        </div>

        <div className="flex flex-col items-center text-xs hover:text-black cursor-pointer">
          <img
            src="/icons/001.jpg"
            alt="profile"
            className="w-6 h-6 rounded-full object-cover"
          />
          <span>Me</span>
        </div>

        <div className="flex flex-col items-center text-xs hover:text-black cursor-pointer">
          <FaTh className="text-xl" />
          <div className="flex items-center gap-1">
            <span>For Business</span>
            <span className="text-[10px]">▼</span>
          </div>
        </div>

        <div className="flex flex-col items-center text-xs hover:text-black cursor-pointer">
          <FaBullhorn className="text-xl" />
          <span>Advertise</span>
        </div>

      </div>

      {/* 🔥 MOBILE MENU */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Sidebar */}
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