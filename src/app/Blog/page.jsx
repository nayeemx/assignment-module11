"use client";

import React from "react";
import blogData from "../Data/blogData.json";
import Link from "next/link";
const page = () => {
  return (
    <div className="w-full h-screen bg-slate-700">
      <main className="text-center">
        <span className="text-slate-200 font-bold text-6xl shadow-lg">
          this is blog page
        </span>
        <section className="">
          <ul className="grid place-content-center justify-end  gap-5   mt-24  mr-[600px]">
            {blogData.map((post) => (
              <li className=" " key={post.id}>
                <Link
                  className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6   font-semibold  text-2xl hover:text-purple-800"
                  href={`/Post/${post.id}`}
                >
                  {post.Title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default page;
