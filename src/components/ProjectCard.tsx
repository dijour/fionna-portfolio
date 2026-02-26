"use client";

import Image from "next/image";
import { useRef, useCallback } from "react";
import { useTransition } from "./TransitionContext";

interface ProjectCardProps {
  slug: string;
  title: string;
  thumbnail: string;
}

export function ProjectCard({ slug, title, thumbnail }: ProjectCardProps) {
  const { navigate } = useTransition();
  const imageRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    const rect = imageRef.current?.getBoundingClientRect();

    if (rect) {
      navigate(`/works/${slug}`, {
        type: "project-expand",
        projectData: { rect, thumbnail },
      });
    } else {
      navigate(`/works/${slug}`, { type: "fade" });
    }
  }, [navigate, slug, thumbnail]);

  return (
    <div onClick={handleClick} className="project-card group block cursor-pointer">
      <div
        ref={imageRef}
        className="relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-100"
      >
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="project-card-image object-cover"
        />
      </div>
      <h3 className="mt-4 text-base font-semibold tracking-tight md:mt-5 md:text-lg">
        {title}
      </h3>
    </div>
  );
}
