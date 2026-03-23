"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function RouteLoader() {
  const pathname = usePathname();
  const firstRender = useRef(true);
  const pendingNavigation = useRef(false);
  const visibleStartedAt = useRef(0);
  const showTimerRef = useRef(null);
  const hideTimerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onLinkClick = (event) => {
      const anchor = event.target?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (!href) return;
      if (anchor.target === "_blank") return;
      if (href.startsWith("#")) return;
      if (href.startsWith("mailto:")) return;
      if (href.startsWith("tel:")) return;

      let targetUrl;
      try {
        targetUrl = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (targetUrl.origin !== window.location.origin) return;

      const currentPath = window.location.pathname + window.location.search;
      const nextPath = targetUrl.pathname + targetUrl.search;
      if (currentPath === nextPath) return;

      if (showTimerRef.current) clearTimeout(showTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

      pendingNavigation.current = true;

      // Show loader only if navigation feels slow.
      showTimerRef.current = setTimeout(() => {
        if (!pendingNavigation.current) return;
        visibleStartedAt.current = Date.now();
        setVisible(true);
      }, 260);
    };

    document.addEventListener("click", onLinkClick, true);

    return () => {
      document.removeEventListener("click", onLinkClick, true);
      if (showTimerRef.current) clearTimeout(showTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (showTimerRef.current) {
      clearTimeout(showTimerRef.current);
      showTimerRef.current = null;
    }

    const wasPending = pendingNavigation.current;
    pendingNavigation.current = false;

    if (!visible || !wasPending) {
      setVisible(false);
      return;
    }

    const elapsed = Date.now() - visibleStartedAt.current;
    const minVisible = 420;
    const remaining = Math.max(0, minVisible - elapsed);

    hideTimerRef.current = setTimeout(() => {
      setVisible(false);
    }, remaining);

    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [pathname, visible]);

  if (!visible) return null;

  return (
    <div className="route-loader" aria-hidden="true">
      <div className="route-loader-brand">
        <Image
          src="/logo-arabic-white.png"
          alt="An-Nafa Academy"
          width={150}
          height={150}
          priority
        />
      </div>
    </div>
  );
}
