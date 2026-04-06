import Profile from "./profile";
import Analytics from "./analytics";
import Mypage from "./mypage";

function leftsidebar() {
  return (
    <div className=" grid gap-3 w-full bg-[#F4F2EE] p-2 rounded-xl">
      
      {/* LEFT */}
      <div className="col-span-3">
        <Profile />
      </div>

      {/* CENTER */}
      <div className="col-span-3">
              <Analytics />
      </div>

      {/* RIGHT */}
      <div className="col-span-3">
        <Mypage />
      </div>

    </div>
  );
}

export default leftsidebar;