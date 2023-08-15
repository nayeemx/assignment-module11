"use client";

import React from "react";
import blogData from "../../Data/blogData.json";
import { useSearchParams } from "next/navigation";

const page = ({ params }) => {
  console.log(params);

  const post = blogData.find((p) => p.id === parseInt(params.slug));

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="w-full h-screen bg-slate-700">
      <main className="text-center">
        <span className="text-slate-200 font-bold text-6xl shadow-lg">
          this is post page
        </span>
        <section>
          <div className=" text-white grid place-items-center  mt-[200px]">
        <div className=" ">
          <h1 className=" text-orange-800 font-bold text-3xl">{post.Title}</h1>
          <p className=" mt-[30px] text-orange-400 font-semibold text-2xl">
            {post.Content}
          </p>
          <p className=" mt-[70px]  text-orange-300 font-normal text-xl">
            Date: {post.Date}
          </p>
        </div>
      </div>
        </section>
      </main>
    </div>
  );
};

export default page;
