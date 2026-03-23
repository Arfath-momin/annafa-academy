"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const VISIT_KEY = "anNafaIntroSeenDate";
  const loaderRef = useRef(null);
  const arabicRef = useRef(null);
  const lineRef = useRef(null);
  const brandRef = useRef(null);
  const [mode, setMode] = useState("initial");

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const seenToday = window.localStorage.getItem(VISIT_KEY) === today;
    const nextMode = seenToday ? "brand" : "full";

    if (!seenToday) {
      window.localStorage.setItem(VISIT_KEY, today);
    }

    const timer = setTimeout(() => setMode(nextMode), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mode === "initial" || mode === "hidden") return;

    const arabic = arabicRef.current;
    const line = lineRef.current;
    const brand = brandRef.current;
    const loader = loaderRef.current;
    if (!loader) return;

    const complete = () => {
      setMode("hidden");
      onComplete?.();
    };

    const isFirstVisit = mode === "full";
    const hideDuration = isFirstVisit ? 0.55 : 0.35;
    let visibleTime = isFirstVisit ? 1650 : 650;
    const anims = [];

    if (isFirstVisit && arabic && line) {
      anims.push(
        gsap.fromTo(
          arabic,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        )
      );
      anims.push(
        gsap.fromTo(
          line,
          { width: 0, opacity: 0.35 },
          { width: 200, opacity: 1, duration: 1.05, delay: 0.2, ease: "power2.out" }
        )
      );
    } else if (brand) {
      anims.push(
        gsap.fromTo(
          brand,
          { opacity: 0, y: 12, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power2.out" }
        )
      );
      visibleTime = 650;
    }

    const hideTimer = setTimeout(() => {
      gsap.to(loader, {
        opacity: 0,
        duration: hideDuration,
        ease: "power2.in",
        onComplete: complete,
      });
    }, visibleTime);

    return () => {
      clearTimeout(hideTimer);
      anims.forEach((anim) => anim.kill());
    };
  }, [mode, onComplete]);

  if (mode === "hidden" || mode === "initial") return null;

  return (
    <div id="loader" ref={loaderRef}>
      {mode === "full" ? (
        <>
          <div className="loader-arabic" ref={arabicRef}>
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </div>
          <div className="loader-line" ref={lineRef}></div>
        </>
      ) : (
        <div className="loader-brand" ref={brandRef}>
          <Image
            src="/logo-arabic-white.png"
            alt="An-Nafa Academy"
            width={170}
            height={170}
            priority
          />
        </div>
      )}
    </div>
  );
}
