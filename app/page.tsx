"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/layout/MainContent";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY + window.scrollY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <main
      className="relative min-h-screen bg-[#0f172a]"
      style={{
        backgroundImage: `
    radial-gradient(
      700px at ${mousePosition.x}px ${mousePosition.y}px,
      rgba(100,255,218,.18),
      transparent 50%
    ),
    linear-gradient(rgba(100,255,218,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(100,255,218,.04) 1px, transparent 1px)
  `,
        backgroundSize: "auto, 50px 50px, 50px 50px",
      }}
    >
      <div className="mx-auto w-full max-w-[1150px] px-8 ">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-12">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </main>
  );
}