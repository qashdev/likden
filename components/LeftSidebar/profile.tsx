function Profile() {
  return (

    
    <div className="bg-white p-4 relative rounded-xl shadow-sm text-black text-xs ">
      <img src="/icons/003.jpg" alt="profile" className="flex-fit fullw-20 h-20 object-cover rounded-xl" />
      <img src="/icons/002.jpg" alt="profile" className="w-20 h-20 rounded-full absolute top-18 left-4 " />
      <div className="mt-15">
      <h2 className="font-bold mb-2">QASIR KHAN </h2>
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