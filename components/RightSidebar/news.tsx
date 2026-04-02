import { Info } from 'lucide-react';
function news() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
    <div className="flex items-center justify-between mb-2">
      <h2 className="font-bold">LINKEDIN NEWS</h2>
      <Info className="text-blue-500" size={20} />
    </div>
      <h1 className="text-sm font-bold text-gray-600">Top stories</h1>
   
        <h1 className="font-semibold">Indian startups raise $10 billion in FY26</h1>
        <p className="text-sm text-gray-600">2h ago - 1755 readers</p>
            <h1 className="font-semibold">NASA's historic Artemis II moon mission </h1>
                <p className="text-sm text-gray-600">2h ago - 1755 readers</p>
        <h1 className="font-semibold">Smaller IT firms look beyond US for growth</h1>
                <p className="text-sm text-gray-600">2h ago - 1755 readers</p>
        <h1 className="font-semibold">Jet fuel price doubles, LPG rate goes up</h1>
                <p className="text-sm text-gray-600">2h ago - 1755 readers</p>
                        <h1 className="font-semibold">Rupee's fall sharpest among Asian currencies</h1>
                <p className="text-sm text-gray-600">2h ago - 1755 readers</p>

    </div>
  );
}

export default news;