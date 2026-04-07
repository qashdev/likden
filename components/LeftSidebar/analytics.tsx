import { FaUser, FaBell, FaCog } from "react-icons/fa";
function Analytics() {
  return (
    <div className="gap-3 bg-white flex flex-col p-2 rounded-xl shadow-sm text-xs font-semibold text-black">
      <div className="flex justify-between items-center text-xs font-bold">
        <span className="text-gray-700">Profile visitors</span>
        <span className="text-blue-600">15</span>
      </div>
      <div className="flex justify-between items-center text-xs font-bold">
        <span className="text-gray-700">Post impressions</span>
        <span className="text-blue-600">18</span>
      </div>

    </div>
  );
}

export default Analytics;