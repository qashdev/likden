function Profile() {
  return (

    
    <div className="bg-white relative rounded-xl shadow-sm text-black text-xs ">
      <div className="relative">
      <img src="/icons/003.jpg" alt="profile" className="flex-fit full h-20 object-cover rounded-xl" />
      <img src="/icons/002.jpg" alt="profile" className="w-20 h-20 rounded-full absolute top-10 left-5.5 " />
      </div>
      <div className="mt-10 px-3 " >
      <h1 className="font-semibold mb-2 text-lg">QASIR KHAN </h1>
      <p className="text-sm">Full Stack Developer | Building Fast, Scalable, User-Focused Web Products | From Idea to Deployment</p>
      <p className="text-sm text-gray-600">Delhi, India</p>
      <div className="flex items-center gap-2">
      <img src="/icons/004.jpg" alt="profile" className="w-5 h-5 rounded-full" />
      <p className="text font-semibold ">Himotech Global PVT. LTD </p>
      </div>
      </div>
    </div>
  );
}

export default Profile;