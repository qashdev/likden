import News from "./news";

function rightsidebar() {
  return (
    <div className="grid gap-12 w-full bg-gray-100 rounded-xl">
      
      {/* LEFT */}
      <div className="col-span-3">
        <News/>
      </div>

    </div>
  );
}

export default rightsidebar;