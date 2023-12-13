"use client";
import React, { useState } from "react";
import images from "../../assets/img-slide";

const Carrousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen h-screen relative">
      <div
        className="max-w-screen h-screen bg-center bg-no-repeat bg-cover duration-500"
        style={{
          backgroundImage: `url(${images[index].url})`,
        }}
      />
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="relative">
      <Carrousel />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white uppercase">
            Astillero Alpha
          </h1>
          <h2 className="text-2xl font-semibold text-white uppercase">
            Creado por Gianluca Cianchi
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
