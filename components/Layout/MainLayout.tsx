import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Feed from "../feed/feed";
import RightSidebar from "../RightSidebar/RightSidebar";

function MainLayout() {
  return (
    <div className="bg-[#F4F2EE] min-h-screen">

      {/* 🔥 CENTERED CONTAINER */}
      <div className="max-w-6xl mx-auto px-2 md:px-4 bg-[#F4F2EE]">

        <div className="grid grid-cols-12 gap-4 py-4">
          
          {/* LEFT */}
          <div className="hidden md:block md:col-span-3">
            <LeftSidebar />
          </div>

          {/* CENTER */}
          <div className="col-span-12 md:col-span-6 w-full">
            <Feed />
          </div>

          {/* RIGHT */}
          <div className="hidden md:block md:col-span-3">
            <RightSidebar />
          </div>

        </div>

      </div>

    </div>
  );
}

export default MainLayout;