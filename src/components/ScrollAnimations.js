"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const animatedTweens = [];
    const isEveningMadrasahPage = pathname === "/courses/evening-madrasah";
    const isWorkshopsPage = pathname === "/courses/workshops";
    const isKidsAdmissionsLandingPage = pathname === "/kids-islamic-admissions";
    const isFastRevealPage = isEveningMadrasahPage || isWorkshopsPage || isKidsAdmissionsLandingPage;
    const revealStart = isFastRevealPage ? "top 95%" : "top 88%";

    // GSAP scroll reveals (.r, .r-left, .r-right)
    const rEls = gsap.utils.toArray(".r");
    rEls.forEach((el, i) => {
      const tween = gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: revealStart,
            toggleActions: "play none none none",
          },
          delay: isFastRevealPage ? 0 : (i % 3) * 0.07,
        }
      );
      animatedTweens.push(tween);
    });

    const rLeftEls = gsap.utils.toArray(".r-left");
    rLeftEls.forEach((el, i) => {
      const tween = gsap.fromTo(
        el,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: revealStart,
            toggleActions: "play none none none",
          },
          delay: isFastRevealPage ? 0 : (i % 3) * 0.07,
        }
      );
      animatedTweens.push(tween);
    });

    const rRightEls = gsap.utils.toArray(".r-right");
    rRightEls.forEach((el, i) => {
      const tween = gsap.fromTo(
        el,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: revealStart,
            toggleActions: "play none none none",
          },
          delay: isFastRevealPage ? 0 : (i % 3) * 0.07,
        }
      );
      animatedTweens.push(tween);
    });

    // IntersectionObserver for .fade-up, .fade-left, .fade-right
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            fadeObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document
      .querySelectorAll(".fade-up,.fade-left,.fade-right")
      .forEach((el) => fadeObserver.observe(el));

    // Counter animations
    document.querySelectorAll(".counter").forEach((el) => {
      const t = parseInt(el.dataset.t, 10);
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(
            { v: 0 },
            {
              v: t,
              duration: 2,
              ease: "power2.out",
              onUpdate: function () {
                el.textContent = Math.round(this.targets()[0].v);
              },
            }
          ),
      });
    });

    // Calligraphy parallax
    const calEl = document.getElementById("heroCalligraphy");
    if (calEl) {
      const tween = gsap.to(calEl, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      animatedTweens.push(tween);
    }

    ScrollTrigger.refresh();

    return () => {
      animatedTweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });

      document
        .querySelectorAll(".r,.r-left,.r-right")
        .forEach((el) => {
          el.style.opacity = "";
          el.style.transform = "";
        });

      fadeObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
