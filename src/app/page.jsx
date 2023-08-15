import Link from "next/link";

const page = () => {
  return (
    <div className=" w-full h-screen bg-slate-700">
      <main className="text-center">
        <span className="text-slate-200 font-bold text-6xl shadow-lg">
          Welcome To my Home Page
        </span>

        <div className="grid place-content-center">
          <Link
            className="py-8 px-8 mt-[100px] max-w-sm mx-auto  bg-white rounded-xl shadow-lg 
            space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 
            font-semibold  text-2xl hover:text-purple-800  
            focus:outline-none focus:ring-2  focus:ring-emerald-900 focus:ring-offset-2"
            href={"/Blog"}
          >
            Go To My Blog Page
          </Link>
        </div>
      </main>
    </div>
  );
};

export default page;
