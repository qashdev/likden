import Posting from "./posting";
import Myfeed from "./myfeed";

function Feed() {
  return (
    <div className="flex flex-col gap-4 flex-1 w-full max-w-full md:max-w-2xl mx-auto">
      
      {/* POST BOX */}
      <Posting />

      {/* POSTS */}
      <Myfeed />

    </div>
  );
}

export default Feed;