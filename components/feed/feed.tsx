import Posting from "./posting";
import Myfeed from "./myfeed";

function Feed() {
  return (
    <div className="flex flex-col gap-4">
      
      {/* POST BOX */}
      <Posting />

      {/* POSTS */}
      <Myfeed />

    </div>
  );
}

export default Feed;