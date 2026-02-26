"use client";

import Image from "next/image";
import { useTransition } from "./TransitionContext";

export function TransitionOverlay() {
  const { phase, transitionType, projectExpandData } = useTransition();

  const isActive = phase !== "idle";

  // ── Fade transitions (non-project navigation) ──
  if (transitionType === "fade" || !projectExpandData) {
    const showBlack = phase === "exit" || phase === "hold";
    return (
      <div
        className="fixed inset-0 z-[9998] bg-[#050505] pointer-events-none"
        style={{
          opacity: showBlack ? 1 : 0,
          transition:
            phase === "exit"
              ? "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              : "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    );
  }

  // ── Project-expand transitions ──
  // Phase: exit → image expands from card to fullscreen
  // Phase: hold → image stays fullscreen while page loads
  // Phase: enter → overlay fades out, revealing the page hero underneath
  const isExpanded = phase === "exit" || phase === "hold" || phase === "enter";
  const isRevealing = phase === "enter";

  return (
    <div
      className="fixed z-[9999] overflow-hidden pointer-events-none"
      style={{
        // Start at card position, animate to fullscreen
        top: isExpanded ? 0 : projectExpandData.rect.top,
        left: isExpanded ? 0 : projectExpandData.rect.left,
        width: isExpanded ? "100vw" : projectExpandData.rect.width,
        height: isExpanded ? "100vh" : projectExpandData.rect.height,
        borderRadius: isExpanded ? 0 : 2,
        opacity: isRevealing ? 0 : 1,
        transition: isRevealing
          ? "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
          : "top 0.65s cubic-bezier(0.65, 0, 0.35, 1), left 0.65s cubic-bezier(0.65, 0, 0.35, 1), width 0.65s cubic-bezier(0.65, 0, 0.35, 1), height 0.65s cubic-bezier(0.65, 0, 0.35, 1), border-radius 0.65s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Image
        src={projectExpandData.thumbnail}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      {/* Darken + gradient to match the hero page styling */}
      <div
        className="absolute inset-0 bg-[#050505]"
        style={{
          opacity: isExpanded ? 0.5 : 0,
          transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"
        style={{
          opacity: isExpanded ? 1 : 0,
          transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </div>
  );
}
