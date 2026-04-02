import Posting from "./posting";
import Myfeed from "./myfeed";

// import Mypage from "./mypage";

function feed() {
  return (
    <div className="flex w-full flex flex-col gap-4 bg-gray-100 p-2 rounded-xl shadow-sm">
      
         {/* CENTER */}
      <div className="flex flex-col w-full ">
          <Posting />
      </div>

      {/* LEFT */}
      <div className="flex flex-col w-full ">
        <Myfeed />
      </div>


    </div>
  );
}

export default feed;