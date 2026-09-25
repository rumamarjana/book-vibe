import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="px-4 py-12 md:py-20">
      <div className="container mx-auto overflow-hidden rounded-[32px] border border-black/10 bg-gradient-to-br from-green-50 via-white to-emerald-50 shadow-lg">
        
        <div className="grid items-center gap-10 px-6 py-10 md:grid-cols-2 md:px-12 lg:px-16">
          
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              📚 Explore Your Next Read
            </span>

            <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Books to freshen up your{" "}
              <span className="text-green-600">bookshelf</span>
            </h2>

            <p className="max-w-lg text-base leading-7 text-gray-600 md:text-lg">
              Discover amazing books, explore new stories, and find your next
              favorite read from our collection.
            </p>

            <button className="rounded-xl bg-green-600 px-7 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-lg">
              View The List →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transition duration-500 hover:scale-105">
              <Image
                src={bannerImg}
                alt="Books collection"
                width={500}
                height={500}
                className="h-auto w-full max-w-md object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
