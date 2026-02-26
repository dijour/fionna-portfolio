"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTransition } from "./TransitionContext";

interface ProjectHeroProps {
  title: string;
  heroImage: string;
}

export function ProjectHero({ title, heroImage }: ProjectHeroProps) {
  const { phase, transitionType } = useTransition();
  const [titleVisible, setTitleVisible] = useState(false);

  const cameFromExpand =
    transitionType === "project-expand" && phase !== "idle";

  useEffect(() => {
    if (cameFromExpand) {
      // Wait for the overlay to start fading, then animate title in
      const timer = setTimeout(() => {
        setTitleVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      // Direct navigation or page refresh — show immediately
      setTitleVisible(true);
    }
  }, [cameFromExpand]);

  // Also make visible when transition fully ends
  useEffect(() => {
    if (phase === "idle") {
      setTitleVisible(true);
    }
  }, [phase]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505]">
      {/* Background image */}
      <Image
        src={heroImage}
        alt={title}
        fill
        priority
        className="object-cover opacity-50"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />

      {/* Title — animates in from below */}
      <div
        className="absolute inset-x-0 bottom-0 px-5 pb-12 md:px-10 md:pb-16 lg:pb-20"
        style={{
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? "translateY(0)" : "translateY(40px)",
          transition:
            "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <h1 className="text-[56px] leading-[0.95] font-black tracking-[-0.06em] uppercase text-white md:text-[100px] lg:text-[140px]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
