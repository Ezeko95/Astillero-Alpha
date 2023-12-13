"use client";
import React, { useState } from "react";
import images from "../../assets/img-slide";

const Carrousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div
        className="absolute inset-0 bg-cover bg-center duration-[2000ms]"
        style={{
          backgroundImage: `url(${images[index].url})`,
        }}
      />
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="relative h-screen overflow-hidden">
      <Carrousel />
      <div className="relative mt-20 flex items-start justify-center h-screen">
        <div className="flex flex-col items-center justify-center gap-y-[500px]">
          <img src="/logo-no-bg.png" alt="logo" />
          <a className="text-white bg-transparent border-2 border-white transition-transform duration-500 transform hover:bg-white hover:text-black hover:scale-110 hover:shadow-r-md px-5 py-2 rounded-md text-2xl inline-block">
            Contacto
          </a>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
