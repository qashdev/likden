import Posting from "./posting";
import Myfeed from "./myfeed";

function Feed() {
  return (
    <div className="flex flex-col gap-4 flex-1 w-full max-w-full md:max-w-2xl mx-auto">
      
      {/* POST BOX */}
      <Posting />
   
      <div className="flex items-center text-sm text-gray-600">
        
        <div className="flex-1 h-px bg-gray-300"></div>

        <span>Sort by:</span>

        <span className="font-semibold text-black cursor-pointer">
          Top ▼
        </span>

      </div>

      {/* POSTS */}
      <Myfeed />

    </div>
  );
}

export default Feed;