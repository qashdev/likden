import Link from "next/link";

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
          className="w-100 px-4 py-2 bg-gray-100 rounded-full focus:outline-none"
        />
      </div>

      {/* RIGHT: Links */}
      <ul className="flex items-center gap-6 text-sm font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/my_network">My Network</Link></li>
        <li><Link href="/jobs">Jobs</Link></li>
        <li><Link href="/messages">Messages</Link></li>
        <li><Link href="/notifications">Notifications</Link></li>
        <li><Link href="/me">Me</Link></li>
        <li><Link href="/for_business">For Business</Link></li>
        <li><Link href="/advertise">Advertise</Link></li>

      </ul>

    </nav>
  );
}

export default Navbar;