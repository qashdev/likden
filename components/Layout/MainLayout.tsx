import { FaHome } from "react-icons/fa";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Feed from "../feed/feed";
import RightSidebar from "../RightSidebar/RightSidebar";

function MainLayout() {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 bg-[#F4F2EE]">
      
      {/* LEFT */}
      
      <div className="col-span-3 hidden md:block">
        <LeftSidebar />
      </div>

      {/* CENTER */}
      <div className="col-span-12 md:col-span-6 w-full max-w-full md:max-w-2xl mx-auto">
        <Feed />
      </div>

      {/* RIGHT */}
      <div className="col-span-3 hidden md:block">
        <RightSidebar />
      </div>

    </div>
  );
}

export default MainLayout;