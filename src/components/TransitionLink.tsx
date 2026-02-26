"use client";

import Link from "next/link";
import { useTransition } from "./TransitionContext";
import type { ComponentProps } from "react";

type TransitionLinkProps = ComponentProps<typeof Link>;

export function TransitionLink({ href, onClick, children, ...props }: TransitionLinkProps) {
  const { navigate } = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const hrefStr = typeof href === "string" ? href : href.pathname ?? "/";

    // Let hash-only links be handled by smooth scroll
    if (hrefStr.startsWith("#") || (hrefStr.startsWith("/#") && window.location.pathname === "/")) {
      onClick?.(e);
      return;
    }

    // Let external links pass through
    if (hrefStr.startsWith("http") || hrefStr.startsWith("mailto:")) {
      onClick?.(e);
      return;
    }

    e.preventDefault();
    onClick?.(e);
    navigate(hrefStr, { type: "fade" });
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
