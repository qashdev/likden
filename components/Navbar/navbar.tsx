import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaTh } from "react-icons/fa";        
import { FaBullhorn } from "react-icons/fa";  

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-3 shadow-md">
      
      {/* LEFT: Logo */}
      <img src="/icons/OIP.jpg" alt="profile" className="w-10 h-10" />

      {/* CENTER: Search */}
      <div className="flex-1 mx-6 max-w-xl">
        <input
          type="text"
          placeholder="Search..."
          className="w-100 px-4 py-2 bg-white rounded-full focus:outline-none border border-gray-600 focus:border-blue-500 text-black"
        />
      </div>

      {/* RIGHT: Links
      <ul className="flex items-center  p-6 text-sm font-medium text-gray-700 space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/my_network">My Network</Link></li>
        <li><Link href="/jobs">Jobs</Link></li>
        <li><Link href="/messages">Messages</Link></li>
        <li><Link href="/notifications">Notifications</Link></li>
        <li><Link href="/me">Me</Link></li>
        <li><Link href="/for_business">For Business</Link></li>
        <li><Link href="/advertise">Advertise</Link></li>

      </ul> */}

      <div className="flex items-center gap-8 text-gray-600">

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
  <div className="flex flex-col items-center text-xs relative hover:text-black cursor-pointer">
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

    </nav>
  );
}

export default Navbar;