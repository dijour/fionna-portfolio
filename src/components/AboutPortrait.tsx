"use client";

import Image from "next/image";

export function AboutPortrait() {
  return (
    <div className="about-portrait-wrapper">
      {/* Animated gradient background */}
      <div className="about-gradient-bg">
        <div className="about-gradient-blob about-gradient-blob-1" />
        <div className="about-gradient-blob about-gradient-blob-2" />
        <div className="about-gradient-blob about-gradient-blob-3" />
      </div>

      {/* Portrait image clipped to circle */}
      <div className="about-portrait-image">
        <Image
          src="/images/about-portrait.png"
          alt="Portrait"
          fill
          sizes="(max-width: 768px) 80vw, 400px"
          className="object-cover"
          priority={false}
        />
      </div>
    </div>
  );
}
