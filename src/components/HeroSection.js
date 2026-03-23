"use client";

import { useState, useEffect, useCallback } from "react";
import gsap from "gsap";

const COURSES = {
  child: {
    title: "Programs for your child",
    sub: "Evening Madrasah builds strong Islamic foundations",
    options: [
      {
        icon: "🌙",
        name: "Evening Madrasah",
        tag: "Ages 4–10 · Full program",
        msg: "Evening%20Madrasah%20for%20my%20child",
      },
    ],
  },
  sister: {
    title: "Classes for sisters",
    sub: "Choose what you'd like to focus on",
    options: [
      {
        icon: "📖",
        name: "Islamic Studies & Fiqh",
        tag: "Live · Female teachers",
        msg: "Islamic%20Studies%20for%20Sisters",
      },
      {
        icon: "🕌",
        name: "Hifdh (Memorisation)",
        tag: "At your own pace",
        msg: "Hifdh%20Classes%20for%20Sisters",
      },
      {
        icon: "🎙️",
        name: "Tasheeh Tilawah",
        tag: "Correct your recitation",
        msg: "Tasheeh%20Tilawah",
      },
      {
        icon: "✨",
        name: "Not sure — advise me",
        tag: "Tell us about yourself",
        msg: "Sisters%20Classes%20-%20Please%20advise",
      },
    ],
  },
  brother: {
    title: "Classes for brothers",
    sub: "Choose what you'd like to focus on",
    options: [
      {
        icon: "📖",
        name: "Islamic Studies & Aqeedah",
        tag: "Live · Structured",
        msg: "Islamic%20Studies%20for%20Brothers",
      },
      {
        icon: "🎙️",
        name: "Tasheeh Tilawah",
        tag: "Correct your recitation",
        msg: "Tasheeh%20Tilawah",
      },
      {
        icon: "✨",
        name: "Not sure — advise me",
        tag: "Tell us about yourself",
        msg: "Brothers%20Classes%20-%20Please%20advise",
      },
    ],
  },
};

const PATH_LABELS = {
  child: "For my child",
  sister: "For myself (sister)",
  brother: "For myself (brother)",
};

export default function HeroSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPath, setSelectedPath] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedMsg, setSelectedMsg] = useState("");
  const [heroReady, setHeroReady] = useState(false);

  const startHero = useCallback(() => {
    setHeroReady(true);
    const tl = gsap.timeline();
    tl.from("#heroCalligraphy", { opacity: 0, x: 80, duration: 1.4, ease: "power3.out" })
      .from("#heroLabel", { opacity: 0, y: 16, duration: 0.7, ease: "power2.out" }, "-=0.8")
      .from("#heroTitle", { opacity: 0, y: 40, duration: 0.9, ease: "power3.out" }, "-=0.5")
      .from(".hero-ar", { opacity: 0, y: 16, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .from(".hero-question", { opacity: 0, y: 16, duration: 0.5, ease: "power2.out" }, "-=0.3")
      .from(".path-cards", { opacity: 0, y: 30, duration: 0.7, ease: "power2.out" }, "-=0.3")
      .from(".hero-proof", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" }, "-=0.2")
      .from(".step-nav", { opacity: 0, y: 10, duration: 0.4, ease: "power2.out" }, "-=0.6");
  }, []);

  useEffect(() => {
    if (!heroReady) {
      const timer = setTimeout(startHero, 350);
      return () => clearTimeout(timer);
    }
  }, [heroReady, startHero]);

  const choosePath = (path) => {
    setSelectedPath(path);
    setCurrentStep(2);
  };

  const chooseCourse = (msg, name) => {
    setSelectedCourse(name);
    setSelectedMsg(msg);
    setCurrentStep(3);
  };

  const goBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const courseData = COURSES[selectedPath];
  const waLink = `https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20enquire%20about%20${selectedMsg}%20at%20An-Nafa%20Academy.`;

  return (
    <section id="hero" aria-label="Hero — find your course">
      <div className="hero-geo" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-calligraphy" id="heroCalligraphy" aria-hidden="true">
        النافع
      </div>
      <div className="hero-orb" aria-hidden="true" />
      <div className="hero-inner">
        <div className="step-nav" aria-label="Step progress">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={`step-dot${currentStep === n ? " active" : ""}${currentStep > n ? " done" : ""}`}
              aria-label={`Step ${n} of 3`}
            />
          ))}
          {currentStep > 1 && (
            <button className="back-btn" onClick={goBack} aria-label="Go back">
              ← Back
            </button>
          )}
        </div>

        <div className={`hero-step${currentStep === 1 ? " active" : ""}`}>
          <div className="hero-label" id="heroLabel">
            Authentic Islamic Education · Live Classes · India and GULF
          </div>
          <h1 className="hero-title" id="heroTitle">
            Learn the <em>Deen</em><br />from home.
          </h1>
          <span className="hero-ar">اقْرَأْ بِاسْمِ رَبِّكَ</span>
          <p className="hero-question">
            <strong>Who are you looking for classes for?</strong>
          </p>
          <div className="path-cards">
            <button className="path-card" onClick={() => choosePath("child")}>
              <div className="path-icon green">🌙</div>
              <div className="path-label">My Child</div>
              <div className="path-sub">Ages 4–10 · Evening Madrasah</div>
            </button>
            <button className="path-card" onClick={() => choosePath("sister")}>
              <div className="path-icon gold">📖</div>
              <div className="path-label">Myself — Sister</div>
              <div className="path-sub">Qur&#39;an, Fiqh, Hifdh &amp; more</div>
            </button>
            <button className="path-card" onClick={() => choosePath("brother")}>
              <div className="path-icon blue">🕌</div>
              <div className="path-label">Myself — Brother</div>
              <div className="path-sub">Qur&#39;an, Aqeedah, Islamic studies</div>
            </button>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars">
              {["ة", "ف", "نَّ", "أ"].map((l) => (
                <div className="proof-avatar" key={l}>{l}</div>
              ))}
            </div>
            <div className="proof-text">
              Joined by <strong>900+ families</strong> in India and GULF
              <br />
              <span>
                All classes are <strong>live</strong> — no recordings, real teachers
              </span>
            </div>
          </div>
        </div>

        <div className={`hero-step${currentStep === 2 ? " active" : ""}`}>
          <h2 className="step2-title">{courseData?.title}</h2>
          <p className="step2-sub">{courseData?.sub}</p>
          <div className="course-options">
            {courseData?.options.map((o) => (
              <button
                key={o.name}
                className="course-opt"
                onClick={() => chooseCourse(o.msg, o.name)}
              >
                <div className="course-opt-info">
                  <div className="course-opt-icon">{o.icon}</div>
                  <div>
                    <div className="course-opt-name">{o.name}</div>
                    <div className="course-opt-tag">{o.tag}</div>
                  </div>
                </div>
                <div className="course-opt-arrow">→</div>
              </button>
            ))}
          </div>
        </div>

        <div className={`hero-step${currentStep === 3 ? " active" : ""}`}>
          <div className="step3-layout">
            <div>
              <h2 className="step3-title">
                Reserve your
                <br />
                free trial class
              </h2>
              <p className="step3-sub">
                Message us on WhatsApp — our team responds quickly and will
                arrange a trial at a time that works for you.
              </p>
              <div className="selected-summary">
                <div className="summary-row">
                  <div className="summary-check">✓</div>
                  <div className="summary-text">
                    <strong>{PATH_LABELS[selectedPath]}</strong>
                  </div>
                </div>
                <div className="summary-row">
                  <div className="summary-check">✓</div>
                  <div className="summary-text">
                    Course: <strong>{selectedCourse}</strong>
                  </div>
                </div>
                <div className="summary-row">
                  <div className="summary-check">✓</div>
                  <div className="summary-text">Free trial class available</div>
                </div>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-btn-big"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message on WhatsApp
              </a>
              <p className="trial-note">
                Free trial class · No commitment · Response within hours
              </p>
            </div>
            <div>
              <div className="trust-chips">
                {[
                  "Live classes only",
                  "Qualified teachers",
                  "Built on Qur'an & Sunnah",
                  "Small groups",
                  "Weekly tests",
                  "India and GULF · Online",
                ].map((chip) => (
                  <div className="trust-chip" key={chip}>
                    <div className="trust-chip-dot" />
                    {chip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
