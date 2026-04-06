import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoSend } from "react-icons/io5";

function Myfeed() {
  return (
    <div className="flex flex-col gap-4">

      {[1,2,3,4,5].map((_, index) => (
        <div key={index} className="bg-white w-fit p-4 rounded-xl shadow-sm text-black">
          
          {/* HEADER */}
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img src="/icons/hr.jpg" alt="profile" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <h2 className="font-bold">HR avira</h2>
                <p className="text-sm text-gray-500">88 followers</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
            </div>

            <h1 className="text-blue-500 font-semibold cursor-pointer">
              + Follow
            </h1>
          </div>

          {/* CONTENT */}
          <p className="mt-3">
            🚀 We’re Hiring: Data Analyst <br /><br />
            We are looking for a Data Analyst skilled in:<br />
            ✔ SQL<br />
            ✔ Excel<br />
            ✔ Power BI / Tableau<br />
            ✔ Dashboard Reporting<br /><br />
            📍 Location: Remote<br />
            💼 Type: Part time<br /><br />
            Be the bridge between development and operations 🚀<br /><br />
            💬 Comment your email ID - our team will share the assignment link within 24 hours!<br /><br />
            #Hiring #DataAnalyst #RemoteJobs
          </p>

          <h1 className="mt-2">someone see</h1>

          {/* ACTION BAR */}
          <div className="flex justify-between mt-4 border-t pt-2 text-gray-600">
            
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
              <FaRegThumbsUp />
              <span>Like</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
              <FaRegCommentDots />
              <span>Comment</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
              <BiRepost />
              <span>Repost</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
              <IoSend />
              <span>Send</span>
            </div>

          </div>

        </div>
      ))}

    </div>
  );
}

export default Myfeed;