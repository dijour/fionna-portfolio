"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  type ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";

type TransitionType = "fade" | "project-expand";
type Phase = "idle" | "exit" | "hold" | "enter";

interface ProjectExpandData {
  rect: DOMRect;
  thumbnail: string;
}

interface TransitionContextValue {
  phase: Phase;
  transitionType: TransitionType;
  projectExpandData: ProjectExpandData | null;
  navigate: (
    href: string,
    options?: { type?: TransitionType; projectData?: ProjectExpandData }
  ) => void;
}

const TransitionContext = createContext<TransitionContextValue>({
  phase: "idle",
  transitionType: "fade",
  projectExpandData: null,
  navigate: () => {},
});

export function useTransition() {
  return useContext(TransitionContext);
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const [transitionType, setTransitionType] = useState<TransitionType>("fade");
  const [projectExpandData, setProjectExpandData] =
    useState<ProjectExpandData | null>(null);
  const busy = useRef(false);
  const pendingHref = useRef<string | null>(null);

  // When pathname changes after navigation, move to "enter" phase
  useEffect(() => {
    if (!pendingHref.current) return;
    if (pathname !== pendingHref.current) return;

    // Page has navigated — scroll to top immediately
    window.scrollTo(0, 0);

    // Hold the overlay briefly so the page renders underneath
    const holdTimer = setTimeout(() => {
      setPhase("enter");

      // After the enter/reveal animation, go idle
      const enterDuration =
        transitionType === "project-expand" ? 800 : 500;
      const enterTimer = setTimeout(() => {
        setPhase("idle");
        setProjectExpandData(null);
        busy.current = false;
        pendingHref.current = null;
      }, enterDuration);

      return () => clearTimeout(enterTimer);
    }, 100);

    return () => clearTimeout(holdTimer);
  }, [pathname, transitionType]);

  const navigate = useCallback(
    (
      href: string,
      options?: { type?: TransitionType; projectData?: ProjectExpandData }
    ) => {
      if (busy.current) return;
      busy.current = true;

      const type = options?.type ?? "fade";
      setTransitionType(type);
      setProjectExpandData(options?.projectData ?? null);
      setPhase("exit");
      pendingHref.current = href;

      // Wait for exit animation to complete, then navigate
      const exitDuration = type === "project-expand" ? 650 : 400;

      setTimeout(() => {
        setPhase("hold");
        router.push(href);

        // Fallback if pathname doesn't change (e.g. same page)
        setTimeout(() => {
          if (busy.current) {
            window.scrollTo(0, 0);
            setPhase("idle");
            setProjectExpandData(null);
            busy.current = false;
            pendingHref.current = null;
          }
        }, 1500);
      }, exitDuration);
    },
    [router]
  );

  return (
    <TransitionContext.Provider
      value={{ phase, transitionType, projectExpandData, navigate }}
    >
      {children}
    </TransitionContext.Provider>
  );
}
