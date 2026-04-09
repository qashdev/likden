import Profile from "./profile";
import Analytics from "./analytics";
import Mypage from "./mypage";

function leftsidebar() {
  return (
    <div className=" grid w-[90%] bg-[#F4F2EE] rounded-xl gap-4 pt-2 ">
      
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