"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* 图片部分 */}
        <div className="col-span-12 sm:col-span-4 place-self-center mt-4 lg:mt-0 mr-5">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mx-auto">
            <Image
              src="/images/hero-image.png"
              alt="hero image "
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-4/6"
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* 文字部分 */}
        <div className="col-span-12 sm:col-span-7 place-self-center text-center sm:text-left ml-8">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Maya",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "UX|UI Developer",
                1000,
                "Data Analyst",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-[12px] sm:text-[12px] lg:text-[14px] leading-relaxed tracking-wide max-w-2xl mx-auto font-bold">
            A full-stack web developer passionate about turning ideas into
            real-world experiences.
            <span className="block mt-2 ">
              Explore my projects to see how I bring creative ideas to life.
            </span>
          </p>

          <div className="mt-6">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              {" "}
              Hire Me{" "}
            </button>
            <a
              href="/maya-resume.pdf"
              download
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 block text-center">
              <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
