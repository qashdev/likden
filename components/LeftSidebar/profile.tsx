function Profile() {
  return (

    
    <div className="bg-white relative shadow-sm text-black text-xs w-full rounded-xl">
      <div className="relative Flex items-center justify-center ">
      <img src="/icons/003.jpg" alt="background" className="flex items-center justify-center w-full h-17 object-cover rounded-t-xl Flex items-center justify-center " />
      <img src="/icons/002.jpg" alt="profile" className="w-20 h-20 rounded-full absolute top-10 left-5.5 " />
      </div>
      <div className="mt-10  pl-4 py-4 " >
      <h1 className="font-semibold  text-lg">QASIR KHAN </h1>
      <p className="text-sm-sm">Full Stack Developer | Building Fast, Scalable, User-Focused Web ...</p>
      <p className="text-sm-sm-sm text-gray-600 pt-1">Delhi, India</p>
      <div className="flex items-center gap-1 pt-2 ">
      <img src="/icons/004.jpg" alt="profile" className="w-5 h-5 rounded-full" />
      <p className="text font-semibold ">Himotech Global PVT. LTD </p>
      </div>
      </div>
    </div>
  );
}

export default Profile;