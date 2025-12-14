"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <section id="hero">
      {/* ==================================================================================
          PART 1: THE NAVIGATION (Added Back)
         ================================================================================== */}

      {/* MOBILE TOP BAR (Visible on Phone Only) */}
      <div className="md:hidden flex items-center justify-between px-6 py-6 fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
            <Rocket className="w-4 h-4 text-black" />
          </div>
          <span className="font-bold text-white tracking-wide">nftblaize</span>
        </div>
        <button onClick={() => setIsOpen(true)} className="text-white">
          <Menu size={28} />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY (Opens when clicked) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center space-y-8 md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>
          <a
            href="#work"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-mono text-white"
          >
            work
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-mono text-white"
          >
            skills
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-mono text-white"
          >
            contact me
          </a>
        </div>
      )}

      {/* PC NAVBAR (Visible on Computer Only) */}
      <nav className="hidden md:flex justify-end gap-12  px-12 py-10 fixed top-0 right-0 z-50 mix-blend-difference text-white">
        <a
          href="#work"
          className="font-bold hover:text-gray-300 transition-colors"
        >
          Work
        </a>
        <a
          href="#skills"
          className="font-bold hover:text-gray-300 transition-colors"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="font-bold hover:text-gray-300 transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* ==================================================================================
          PART 2: THE HERO CONTENT (Your Perfect Code)
         ================================================================================== */}

      {/* MOBILE CONTENT (Visible on Phone Only) */}
      <div className="md:hidden flex flex-col justify-center  min-h-[85vh] px-6 pt-24 ">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold leading-tight tracking-tighter text-white">
            Hello. I am <br />
            <span className="">nftblaize</span>
          </h1>
           <h2 className="text-xl font-bold text-white items-center">
            Web3 Fullstack Developer
          </h2>
          
          <p className="text-gray-400 text-sm max-w-xs items-center justify-between">
            Building beautiful and functional dApps.
          </p>
        </div>
        <div>
          
          <div className="space-y-9 " style={{ paddingTop:'100px'}}>
           
            <p className="text-gray-500 text-xs font-mono">
              {date
                ? date.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Loading..."}
            </p>

            <a
              href="#work"
              className="inline-block bg-white text-black px-8 py-1 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors"
            >
              Available for Work
            </a>
          </div>
        </div>
      </div>

      {/* PC CONTENT (Visible on Computer Only) - EXACT PC CODE PRESERVED */}
      <div className="hidden md:block">
        <h1
          className="text-[6rem] font-bold leading-[1.1] left-8"
          style={{ paddingLeft: "20px" }}
        >
          Hello.
          <br />I am Nftblaize
        </h1>

        <div className="min-h-screen flex items-center px-9 relative -mt-32">
          <div className="absolute right-90 top-40 gap-6 ">
            <span className="text-4xl">⇘</span>
            <p className=""> Fullstack</p>
            <p className="">Solidity Dev</p>
            <p className="">Blockchain</p>
          </div>

          <div className="absolute bottom-30 left-16">
            <div className="border border-white/40 px-3 py-2 inline-flex items-center gap-3 backdrop-blur-sm">
              <h2 className="text-4xl font-extrabold text-transparent [-webkit-text-stroke:1px_white] tracking-tighter leading-none select-none">
                {date ? date.getDate() : ""}
              </h2>

              <div className="flex flex-col justify-center">
                <p className="text-white  font-bold leading-none ">
                  {date ? date.toLocaleString("en-US", { month: "short" }) : ""}
                </p>
              </div>
            </div>
            <p className="text-[10px] text-white/70 uppercase mt-1 font-medium ">
              <span className="text-3xl ">.</span> available for work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
