import { FaHome } from "react-icons/fa";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Feed from "../feed/feed";
import RightSidebar from "../RightSidebar/RightSidebar";

function MainLayout() {
  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      
      {/* LEFT */}
      <div className="col-span-3">
        <LeftSidebar />
      </div>

      {/* CENTER */}
      <div className="col-span-6">
        <Feed />
      </div>

      {/* RIGHT */}
      <div className="col-span-3">
        <RightSidebar />
      </div>

    </div>
  );
}

export default MainLayout;