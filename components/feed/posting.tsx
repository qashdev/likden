import { Image, Calendar, FileText } from "lucide-react";

function Posting() {
  return (
   <div className="flex flex-col bg-white p-4 rounded-xl shadow-sm gap-4">
      <div className="flex items-center  gap-4">
        <img src="/icons/002.jpg" alt="profile" className="w-10 h-10 rounded-full" />

        <input
          type="text"
          placeholder="post here ..."
          className="w-full px-12 py-2 border border-black rounded-full focus:outline-none"
        />
     </div>

     <div className="grid grid-cols-3 gap-4">
        {/* <div className="flex items-center gap-6">
        <h1 className="">someone see </h1>
        <h1 className="">someone see </h1>
        <h1 className="">someone see </h1>
// <div className="flex justify-between border-t pt-3 text-gray-600">
       </div> */}
      {/* Write Article */}
      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
        <Image className="text-orange-500" size={20} />
        <span>Media</span>  
        </div>
        
      {/* Write Article */}
           <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
        <Calendar className="text-orange-500" size={20} />
        <span>Event</span>  
        </div>

      {/* Write Article */}
     
      {/* <div className="flex-col gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg"> */}
      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
        <FileText className="text-orange-500" size={20} />
        <span>Write article</span>  
      </div>
        </div>
    </div>
  );
}
export default Posting;