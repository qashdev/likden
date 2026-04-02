import Profile from "./profile";
import Analytics from "./analytics";
import Mypage from "./mypage";

function leftsidebar() {
  return (
    <div className="grid gap-12 w-full bg-gray-100 p-2 rounded-xl shadow-sm">
      
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