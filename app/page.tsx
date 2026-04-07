import MainLayout from "@/components/Layout/MainLayout";
export default function Home() {
  return (
    <div className="flex  items-center justify-center min-h-screen bg-[#F4F2EE]">
       <MainLayout />;
      {/* <div className="flex items-center pr-10  gap-4">
        <h1 className="text-xl font-bold">Logo</h1>

        <input
          type="text"
          placeholder="post here ..."
          className="w-64 px-8 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
       </div>
         */}
    </div>
  );
}