"use client";

import { TransitionLink } from "./TransitionLink";

interface ProjectNavProps {
  prevProject?: { slug: string; title: string } | null;
  nextProject?: { slug: string; title: string } | null;
}

export function ProjectNav({ prevProject, nextProject }: ProjectNavProps) {
  if (!prevProject && !nextProject) return null;

  return (
    <section className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-12 md:py-16">
        <div className="flex items-center justify-between gap-8">
          {/* Previous */}
          {prevProject ? (
            <TransitionLink
              href={`/works/${prevProject.slug}`}
              className="group flex items-center gap-2 text-left max-w-[45%] hover:text-[#09f] transition-colors"
            >
              <span className="shrink-0 text-lg leading-none">&larr;</span>
              <span className="text-sm font-semibold uppercase tracking-wide leading-snug">
                {prevProject.title}
              </span>
            </TransitionLink>
          ) : (
            <div />
          )}

          {/* Next */}
          {nextProject ? (
            <TransitionLink
              href={`/works/${nextProject.slug}`}
              className="group flex items-center gap-2 text-right max-w-[45%] ml-auto hover:text-[#09f] transition-colors"
            >
              <span className="text-sm font-semibold uppercase tracking-wide leading-snug">
                {nextProject.title}
              </span>
              <span className="shrink-0 text-lg leading-none">&rarr;</span>
            </TransitionLink>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
