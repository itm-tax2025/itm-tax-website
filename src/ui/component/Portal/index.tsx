// Portal.tsx
import { createPortal } from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import "./Portal.scss";

export interface PortalProps {
  children: React.ReactNode;
  /** CSS selector for the target. Defaults to '#portal-root'. */
  selector?: string;
  /** Direct container if you don't want to use a selector. */
  container?: HTMLElement | null;
}

const canUseDOM =
  typeof window !== "undefined" && !!window.document?.createElement;

export default function Portal({
  children,
  selector = "#portal-root",
  container,
}: PortalProps) {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current && canUseDOM) elRef.current = document.createElement("div");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!canUseDOM) return;
    const target =
      container ??
      (selector
        ? document.querySelector<HTMLElement>(selector)
        : document.body);

    if (!target) {
      throw new Error(`Portal target not found for selector: ${selector}`);
    }

    const el = elRef.current!;
    target.appendChild(el);
    setMounted(true);

    return () => {
      setMounted(false);
      target.removeChild(el);
    };
  }, [selector, container]);

  if (!mounted || !canUseDOM || !elRef.current) return null;
  return createPortal(children, elRef.current);
}
