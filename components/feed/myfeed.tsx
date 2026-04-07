import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoSend } from "react-icons/io5";

function Myfeed() {
  return (
    <div className="flex flex-col gap-4">

      {[1,2,3].map((_, index) => (
        <div key={index} className="bg-white w-full max-w-xl mx-auto p-4 rounded-xl shadow-sm text-black">

          {/* HEADER */}
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <img src="/icons/hr.jpg" className="w-10 h-10 rounded-full" />

              <div>
                <h2 className="font-semibold text-sm">HR avira</h2>
                <p className="text-xs text-gray-500">
                  88 followers • 1 day ago
                </p>
              </div>
            </div>

            <span className="text-blue-600 font-semibold text-sm cursor-pointer">
              + Follow
            </span>
          </div>

          {/* CONTENT */}
          <div className="mt-3 text-sm leading-relaxed space-y-2">
            <p>🚀 We’re Hiring: <span className="font-semibold">Data Analyst</span></p>

            <p>We are looking for a Data Analyst skilled in:</p>

            <ul className="list-disc ml-5 space-y-1">
              <li>SQL</li>
              <li>Excel</li>
              <li>Power BI / Tableau</li>
              <li>Dashboard Reporting</li>
            </ul>

            <p>📍 Location: Remote</p>
            <p>💼 Type: Part time</p>

            <p>Be the bridge between development and operations 🚀</p>

            <p>
              💬 Comment your email ID — our team will share the assignment link within 24 hours!
            </p>

            <p className="text-blue-600">
              #Hiring #DataAnalyst #RemoteJobs
            </p>
          </div>

          {/* ACTION BAR */}
          <div className="flex justify-between mt-4 border-t pt-2 text-gray-600 text-sm">

            <div className="flex flex-1 justify-center items-center gap-2 cursor-pointer hover:text-blue-500">
              <FaRegThumbsUp />
              <span>Like</span>
            </div>

            <div className="flex flex-1 justify-center items-center gap-2 cursor-pointer hover:text-blue-500">
              <FaRegCommentDots />
              <span>Comment</span>
            </div>

            <div className="flex flex-1 justify-center items-center gap-2 cursor-pointer hover:text-blue-500">
              <BiRepost />
              <span>Repost</span>
            </div>

            <div className="flex flex-1 justify-center items-center gap-2 cursor-pointer hover:text-blue-500">
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