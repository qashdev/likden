function Mypage() {
  return (
    <div className="bg-white p-2 rounded-xl shadow-sm text-black text-xs font-semibold text-black">
      <h2 className="font-bold text-lg text-gray-800 mb-5">My Page (3)</h2>
      <div className="flex items-center gap-2">
      <img src="/icons/006.jpg" alt="profile" className="w-6 h-6 rounded-full" />
        <h1 className="font-semibold text-md mb-5"> The Graduate School of Behavioral Health Sciences</h1>
        </div>

        <p className="text-md mb-5">Activity</p>
       
        <div className="flex items-center gap-2">
        <img src="/icons/005.jpg" alt="profile" className="w-5 h-5 mb-5 rounded-full" />
        <h1 className="font-bold text-md">Better Physiology Ltd </h1>
        </div>
       
        <p className="text-md mb-5">Activity</p>

       <div className="flex items-center gap-2">
       <img src="/icons/004.jpg" alt="profile" className="w-7 h-7  rounded-full" />
       <h1 className="font-bold text-md mb-5">Himotech Global PVT. LTD </h1>
        </div>
        <p className="text-md">Activity</p>
        
    </div>
  );
}

export default Mypage;