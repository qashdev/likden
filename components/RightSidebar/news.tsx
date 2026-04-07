import { Info } from "lucide-react";

function News() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-black text-sm">LinkedIn News</h2>
        <Info className="text-blue-500" size={18} />
      </div>

      <h3 className="text-xs font-semibold text-gray-500 mb-2">
        Top stories
      </h3>

      {/* ITEM */}
      <div className="mb-3 cursor-pointer hover:bg-gray-100 p-1 rounded-md transition">
        <p className="text-sm font-semibold text-gray-800 leading-snug">
          Indian startups raise $10 billion in FY26
        </p>
        <span className="text-xs text-gray-500">
          2h ago • 1755 readers
        </span>
      </div>

      {/* ITEM */}
      <div className="mb-3 cursor-pointer hover:bg-gray-100 p-1 rounded-md transition">
        <p className="text-sm font-semibold text-gray-800 leading-snug">
          NASA's historic Artemis II moon mission
        </p>
        <span className="text-xs text-gray-500">
          2h ago • 1755 readers
        </span>
      </div>

      {/* ITEM */}
      <div className="mb-3 cursor-pointer hover:bg-gray-100 p-1 rounded-md transition">
        <p className="text-sm font-semibold text-gray-800 leading-snug">
          Smaller IT firms look beyond US for growth
        </p>
        <span className="text-xs text-gray-500">
          2h ago • 1755 readers
        </span>
      </div>

      {/* ITEM */}
      <div className="mb-3 cursor-pointer hover:bg-gray-100 p-1 rounded-md transition">
        <p className="text-sm font-semibold text-gray-800 leading-snug">
          Jet fuel price doubles, LPG rate goes up
        </p>
        <span className="text-xs text-gray-500">
          2h ago • 1755 readers
        </span>
      </div>

      {/* ITEM */}
      <div className="cursor-pointer hover:bg-gray-100 p-1 rounded-md transition">
        <p className="text-sm font-semibold text-gray-800 leading-snug">
          Rupee's fall sharpest among Asian currencies
        </p>
        <span className="text-xs text-gray-500">
          2h ago • 1755 readers
        </span>
      </div>

    </div>
  );
}

export default News;