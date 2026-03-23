"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const COURSES = [
  { href: "/courses/evening-madrasah", label: "Evening Madrasah" },
  { href: "/courses/sisters-classes",  label: "Sisters Classes" },
  { href: "/courses/brothers-classes", label: "Brothers Classes" },
  { href: "/courses/hifdh-program",    label: "Hifdh Program" },
  { href: "/courses/tasheeh-tilawah",  label: "Tasheeh Tilawah" },
  { href: "/courses/workshops",        label: "Workshops" },
];

const NAV_PRIMARY = [
  { href: "/kids-islamic-admissions", label: "Kids Admissions 2026" },
  { href: "/fees",          label: "Fees" },
  { href: "/teachers",      label: "Teachers" },
  { href: "/about",         label: "About" },
  { href: "/contact",       label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobCoursesOpen, setMobCoursesOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeMob = () => setMobileOpen(false);

  return (
    <>
      {/* Mobile Overlay */}
      <div className={`mobile-overlay${mobileOpen ? " open" : ""}`}>
        <button className="mobile-overlay-close" onClick={closeMob}>✕</button>

        <div className="mob-nav-scroll">
          <Link href="/" onClick={closeMob} className="mob-link">Home</Link>

          <button
            className="mob-link mob-courses-toggle"
            onClick={() => setMobCoursesOpen((o) => !o)}
          >
            Courses
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`mob-chevron${mobCoursesOpen ? " open" : ""}`}>
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {mobCoursesOpen && (
            <div className="mob-sub">
              {COURSES.map((c) => (
                <Link key={c.href} href={c.href} onClick={closeMob} className="mob-sub-link">
                  {c.label}
                </Link>
              ))}
            </div>
          )}

          {NAV_PRIMARY.map((n) => (
            <Link key={n.href} href={n.href} onClick={closeMob} className="mob-link">{n.label}</Link>
          ))}

          <a
            href="https://wa.me/917829950311"
            target="_blank"
            rel="noopener noreferrer"
            className="mob-link mob-wa"
            onClick={closeMob}
          >
            Enquire on WhatsApp →
          </a>
        </div>
      </div>

      {/* Nav */}
      <nav className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <Image
              src="/logo-arabic-white.png"
              alt="An-Nafa Academy"
              width={220}
              height={220}
              priority
              className="nav-logo-img"
            />
          </Link>

          <ul className="nav-links">
            {/* Courses dropdown */}
            <li className="nav-has-dropdown" ref={dropRef}>
              <button
                className="nav-dropdown-toggle"
                onClick={() => setCoursesOpen((o) => !o)}
                aria-expanded={coursesOpen}
              >
                Courses
                <svg width="9" height="5" viewBox="0 0 9 5" fill="none" className={`nav-chevron${coursesOpen ? " open" : ""}`}>
                  <path d="M1 1l3.5 3L8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {coursesOpen && (
                <ul className="nav-dropdown">
                  {COURSES.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} onClick={() => setCoursesOpen(false)}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link href="/kids-islamic-admissions">Kids Admissions 2026</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li>
              <a
                href="https://wa.me/917829950311"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
              >
                Enquire on WhatsApp
              </a>
            </li>
          </ul>

          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  );
}
