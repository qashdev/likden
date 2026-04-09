import Posting from "./posting";
import Myfeed from "./myfeed";

function Feed() {
  return (
    <div className="flex flex-col gap-1 flex-1 w-full max-w-full md:max-w-2xl mx-auto">
      
      {/* POST BOX */}
      <Posting />
   
      <div className="flex items-center text-sm text-gray-600">
        
        <div className="flex-1 h-px px-2 bg-gray-300 font-normal text-[10px] "></div>

        <span className="text-[12px]"
        >Sort by:</span>

        <span className="font-semibold text-black cursor-pointer text-[12px]">
          Top ▼
        </span>

      </div>

      {/* POSTS */}
      <Myfeed />

    </div>
  );
}

export default Feed;