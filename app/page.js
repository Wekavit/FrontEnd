"use client";
import React from "react";
import Logo from "../assets/logo/logo.png"
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      {/* main landing page section  */}
      <div className="w-full h-auto flex flex-col bg-transparent">    
        {/* the hero section  */}
        <div className="w-full h-auto flex flex-col bg-hero-color">
          {/* navbar section  */}
          <div className="w-full h-auto flex flex-row p-3 bg-transparent">
             <Image
                src={Logo}
                width={50}
                height={50}
                alt="Picture of the author"
             />
          </div>
        </div>

      </div>
    </main>
  );
}
