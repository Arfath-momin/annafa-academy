"use client";

import { useState, useEffect, useRef } from "react";

const WA_NUMBER = "917829950311";
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

const waLink = (msg) => `${WA_BASE}?text=${encodeURIComponent(msg)}`;

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18, flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const GEO_PATTERN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cg fill='none' stroke='rgba(184%2C130%2C15%2C0.08)' stroke-width='0.6'%3E%3Cpolygon points='50,5 91,27.5 91,72.5 50,95 9,72.5 9,27.5'/%3E%3Cpolygon points='50,18 80,34 80,66 50,82 20,66 20,34'/%3E%3Cpolygon points='50,31 69,41.5 69,58.5 50,69 31,58.5 31,41.5'/%3E%3C/g%3E%3C/svg%3E")`;

// ─── Tokens ───────────────────────────────────────────────────────────────────
const T = {
  ink: "#0e1117",
  ink2: "#161b26",
  sand: "#f7f3eb",
  sand2: "#ece7dc",
  sand3: "#ddd7c9",
  green: "#1a5c3a",
  green2: "#22784d",
  greenBg: "#edf5ef",
  gold: "#b8820f",
  goldBg: "#fdf6e3",
  muted: "#5c5955",
  muted2: "#8e8a84",
  white: "#ffffff",
  waGreen: "#25d366",
};

const fonts = {
  serif: "var(--serif)",
  arabic: "var(--arabic)",
  body: "var(--body)",
  sans: "var(--sans)",
};

const PAGE_X = "clamp(20px, 4vw, 48px)";
const HERO_Y_TOP = "clamp(130px, 16vw, 200px)";
const HERO_Y_BOTTOM = "clamp(80px, 10vw, 130px)";

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useFadeIn(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold, rootMargin: "0px 0px -32px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useCounter(target, duration = 1800) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = null;
        const step = (ts) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          setVal(Math.floor(p * target));
          if (p < 1) requestAnimationFrame(step);
          else setVal(target);
        };
        requestAnimationFrame(step);
        obs.unobserve(el);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return [ref, val];
}

// ─── Shared Components ────────────────────────────────────────────────────────
function GoogleFonts() {
  return (
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Literata:ital,opsz,wght@0,7..72,300;0,7..72,400;1,7..72,300&family=Amiri:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
  );
}

function Eyebrow({ children, light = false, center = false }) {
  return (
    <div style={{
      fontFamily: fonts.sans, fontSize: 10, fontWeight: 600,
      letterSpacing: "3px", textTransform: "uppercase",
      color: T.gold, marginBottom: 12,
      display: "flex", alignItems: "center",
      gap: 10, justifyContent: center ? "center" : "flex-start",
    }}>
      <span style={{ width: 14, height: 1.5, background: T.gold, borderRadius: 1, flexShrink: 0, display: "block" }} />
      {children}
    </div>
  );
}

function SectionHeading({ children, light = false, style = {} }) {
  return (
    <h2 style={{
      fontFamily: fonts.serif,
      fontSize: "clamp(28px, 4vw, 44px)",
      color: light ? T.white : T.ink,
      lineHeight: 1.05, letterSpacing: "-0.5px",
      marginBottom: 14, ...style,
    }}>
      {children}
    </h2>
  );
}

function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function BtnWa({ href, children, style = {} }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        background: T.waGreen, color: T.white,
        fontFamily: fonts.sans, fontSize: 14, fontWeight: 600,
        padding: "14px 24px", borderRadius: 14, border: "none",
        textDecoration: "none", cursor: "pointer",
        transition: "background 0.2s, transform 0.2s",
        ...style,
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "#22c55e"; e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = T.waGreen; e.currentTarget.style.transform = "none"; }}
    >
      {WA_ICON}
      {children}
    </a>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav({ formRef }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrolled ? "rgba(247,243,235,0.97)" : "rgba(247,243,235,0.95)",
      borderBottom: `1px solid ${T.sand3}`,
      backdropFilter: "blur(16px)",
      padding: "14px 24px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      transition: "box-shadow 0.3s",
      boxShadow: scrolled ? "0 2px 16px rgba(14,17,23,0.06)" : "none",
    }}>
      <div>
        <div style={{ fontFamily: fonts.serif, fontSize: 18, color: T.ink, lineHeight: 1 }}>
          An-Nafa Academy
        </div>
        <div style={{ fontFamily: fonts.arabic, fontSize: 11, color: T.gold, direction: "rtl", marginTop: 2 }}>
          أكاديمية النافع
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{
          background: T.green, color: T.white,
          fontFamily: fonts.sans, fontSize: 11, fontWeight: 600,
          padding: "6px 14px", borderRadius: 100, letterSpacing: "0.5px",
        }}>
          Admissions Open
        </span>
        <button
          onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
          style={{
            fontFamily: fonts.sans, fontSize: 13, fontWeight: 500,
            background: "none", border: `1.5px solid ${T.sand3}`,
            color: T.muted, padding: "8px 16px", borderRadius: 8,
            cursor: "pointer", display: "none",
          }}
        >
          Enroll ↓
        </button>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ formRef }) {
  return (
    <section style={{
      background: T.ink,
      padding: `${HERO_Y_TOP} ${PAGE_X} ${HERO_Y_BOTTOM}`,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: GEO_PATTERN, backgroundSize: "100px 100px",
      }} />
      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <Eyebrow>Evening Madrasah · Ages 4–10</Eyebrow>
        </FadeIn>
        <FadeIn delay={0.07}>
          <h1 style={{
            fontFamily: fonts.serif,
            fontSize: "clamp(38px, 7vw, 72px)",
            color: T.white, lineHeight: 1.0,
            letterSpacing: "-1.5px", marginBottom: 10,
          }}>
            Give your child<br />
            an <em style={{ color: "#c9a53a", fontStyle: "italic" }}>Islamic</em> foundation.
          </h1>
        </FadeIn>
        <FadeIn delay={0.14}>
          <span style={{
            fontFamily: fonts.arabic, fontSize: 20,
            color: "rgba(184,130,15,0.35)", direction: "rtl",
            marginBottom: 24, display: "block",
          }}>
            اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
          </span>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{
            fontFamily: fonts.body, fontSize: 16, fontWeight: 300,
            color: "rgba(255,255,255,0.5)", lineHeight: 1.8,
            maxWidth: 520, marginBottom: 36,
          }}>
            Live online Islamic classes for children aged 4–10. Qur'an, Islamic knowledge and good character — taught by qualified teachers from the comfort of home.
          </p>
        </FadeIn>
        <FadeIn delay={0.26}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <BtnWa href={waLink("As-salamu alaykum, I would like to enroll my child in the Evening Madrasah.")}>
              Enroll on WhatsApp
            </BtnWa>
            <button
              onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.14)",
                fontFamily: fonts.sans, fontSize: 14, fontWeight: 500,
                padding: "14px 24px", borderRadius: 14, cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.11)"; e.currentTarget.style.color = T.white; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
            >
              Fill Admission Form ↓
            </button>
          </div>
        </FadeIn>
        <FadeIn delay={0.32}>
          <div style={{
            display: "flex", gap: 20, marginTop: 36, paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.06)", flexWrap: "wrap",
          }}>
            {["Live classes only", "Qualified teachers", "Free trial available", "Small groups"].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: fonts.sans, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", flexShrink: 0, display: "block" }} />
                {t}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section style={{ background: T.white, padding: `72px ${PAGE_X}` }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <FadeIn><Eyebrow>About the Program</Eyebrow></FadeIn>
        <FadeIn delay={0.07}>
          <SectionHeading>
            Evening Madrasah<br />for <em style={{ fontStyle: "italic", color: T.green }}>Kids</em>
          </SectionHeading>
        </FadeIn>
        <FadeIn delay={0.13}>
          <p style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 300, color: T.muted, lineHeight: 1.8, marginBottom: 16 }}>
            The Evening Madrasah at An-Nafa Academy is specially designed for children between the ages of 4 and 10. The program introduces essential Islamic knowledge in a way that is engaging, easy to understand and suitable for young learners.
          </p>
          <p style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 300, color: T.muted, lineHeight: 1.8 }}>
            Our goal is to nurture love for Allah, the Qur'an and the teachings of the Prophet ﷺ while helping children develop strong Islamic character and manners. Children learn in a supportive environment guided by qualified teachers who focus on both knowledge and tarbiyyah.
          </p>
          <div style={{
            borderLeft: `3px solid ${T.gold}`, marginTop: 28, padding: "16px 20px",
            background: T.goldBg, borderRadius: "0 8px 8px 0",
            fontFamily: fonts.arabic, fontSize: 18, color: T.gold,
            direction: "rtl", fontStyle: "italic",
          }}>
            مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Curriculum ───────────────────────────────────────────────────────────────
const CURRICULUM = [
  "Qaida and Qur'an reading",
  "Memorisation of short surahs",
  "Basic Islamic studies",
  "Morning and evening adhkar",
  "Stories from the Qur'an & Seerah",
  "Islamic manners and character",
  "Love for Allah and the Prophet ﷺ",
];

function Curriculum() {
  return (
    <section style={{ background: T.sand, padding: `72px ${PAGE_X}` }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <FadeIn><Eyebrow>Curriculum</Eyebrow></FadeIn>
        <FadeIn delay={0.07}>
          <SectionHeading>
            What your child<br />will <em style={{ fontStyle: "italic", color: T.green }}>learn</em>
          </SectionHeading>
        </FadeIn>
        <FadeIn delay={0.13}>
          <p style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 300, color: T.muted, lineHeight: 1.8, marginBottom: 32 }}>
            The program covers essential Islamic learning that builds a strong foundation in the Deen from an early age.
          </p>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 1, background: T.sand3, border: `1px solid ${T.sand3}`,
            borderRadius: 14, overflow: "hidden",
          }}>
            {CURRICULUM.map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: 14,
                padding: "20px 22px", background: T.white,
                fontFamily: fonts.sans, fontSize: 14, color: T.ink,
                fontWeight: 400, lineHeight: 1.45,
              }}>
                <span style={{
                  width: 26, height: 26, borderRadius: "50%",
                  background: T.greenBg, border: `1.5px solid ${T.green}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: fonts.sans, fontSize: 11, fontWeight: 600, color: T.green,
                  flexShrink: 0, marginTop: 1,
                }}>
                  {i + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Why ──────────────────────────────────────────────────────────────────────
const WHY = [
  { n: "i", title: "Live Interactive Classes", body: "Children attend live sessions where they interact with teachers and actively participate — no pre-recordings." },
  { n: "ii", title: "Trained Teachers for Kids", body: "Our teachers are experienced in teaching young children and use engaging, age-appropriate methods." },
  { n: "iii", title: "Authentic Curriculum", body: "Lessons are based on the Qur'an and authentic Sunnah according to the understanding of the Salaf-us-Saliheen." },
  { n: "iv", title: "Small Class Groups", body: "Limited class sizes allow teachers to give proper individual attention to every student." },
  { n: "v", title: "Structured Learning", body: "Lessons follow a progressive structure so children build knowledge step by step with weekly tests." },
  { n: "vi", title: "Focus on Tarbiyyah", body: "We focus on nurturing good character, Islamic manners and genuine love for the Deen." },
];

function Why() {
  return (
    <section style={{ background: T.ink, padding: `72px ${PAGE_X}` }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn><Eyebrow>Why An-Nafa</Eyebrow></FadeIn>
        <FadeIn delay={0.07}>
          <SectionHeading light>
            Why parents trust<br />An-Nafa Academy
          </SectionHeading>
        </FadeIn>
        <FadeIn delay={0.13}>
          <p style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, marginBottom: 40 }}>
            Our classes combine authentic Islamic teachings with a supportive, structured environment designed specifically for young children.
          </p>
        </FadeIn>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 1, background: "rgba(255,255,255,0.06)",
          borderRadius: 14, overflow: "hidden",
        }}>
          {WHY.map((w, i) => (
            <FadeIn key={w.n} delay={i * 0.05}>
              <div style={{
                background: T.ink2, padding: "28px 26px",
                transition: "background 0.2s", cursor: "default",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#1d2435"}
                onMouseLeave={e => e.currentTarget.style.background = T.ink2}
              >
                <div style={{ fontFamily: fonts.serif, fontSize: 13, color: "rgba(184,130,15,0.4)", fontStyle: "italic", marginBottom: 12 }}>{w.n}</div>
                <div style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 600, color: T.white, marginBottom: 8 }}>{w.title}</div>
                <div style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.38)", lineHeight: 1.65 }}>{w.body}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Program Details ──────────────────────────────────────────────────────────
const DETAILS = [
  { label: "Age Group", value: "4 – 10 years" },
  { label: "Class Format", value: "Live Online Classes" },
  { label: "Learning Method", value: "Interactive teacher-student sessions" },
  { label: "Subjects Covered", value: "Qur'an, Islamic studies, adhkar, Seerah & manners" },
];

function ProgramDetails() {
  return (
    <section style={{ background: T.white, padding: `72px ${PAGE_X}` }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <FadeIn><Eyebrow>Program Details</Eyebrow></FadeIn>
        <FadeIn delay={0.07}>
          <SectionHeading>
            Program <em style={{ fontStyle: "italic", color: T.green }}>Details</em>
          </SectionHeading>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 32 }}>
          {DETAILS.map((d, i) => (
            <FadeIn key={d.label} delay={i * 0.07}>
              <div style={{
                background: T.sand, border: `1px solid ${T.sand3}`,
                borderRadius: 14, padding: "22px 22px",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: T.green }} />
                <div style={{ fontFamily: fonts.sans, fontSize: 10, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: T.muted2, marginBottom: 8 }}>{d.label}</div>
                <div style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 600, color: T.ink }}>{d.value}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Admission Form ───────────────────────────────────────────────────────────
const BATCH_OPTIONS = [
  { value: "", label: "Select preference" },
  { value: "morning", label: "Morning (before school)" },
  { value: "evening-early", label: "Evening (5–6 PM)" },
  { value: "evening-late", label: "Evening (6–8 PM)" },
  { value: "weekend", label: "Weekend only" },
  { value: "flexible", label: "Flexible / advise me" },
];

function Field({ label, required, error, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <label style={{ fontFamily: fonts.sans, fontSize: 12, fontWeight: 600, color: T.ink, letterSpacing: "0.3px" }}>
        {label}{required && <span style={{ color: T.green, marginLeft: 2 }}>*</span>}
      </label>
      {children}
      {error && (
        <span style={{ fontFamily: fonts.sans, fontSize: 11, color: "#c0392b" }}>{error}</span>
      )}
    </div>
  );
}

const inputStyle = (hasError) => ({
  fontFamily: fonts.sans, fontSize: 14, color: T.ink,
  background: hasError ? "#fff8f8" : T.sand,
  border: `1.5px solid ${hasError ? "#c0392b" : T.sand3}`,
  borderRadius: 8, padding: "12px 14px", outline: "none",
  width: "100%", transition: "border-color 0.2s, background 0.2s",
  appearance: "none",
});

function AdmissionForm({ sectionRef }) {
  const [form, setForm] = useState({
    parentName: "", childName: "", childAge: "",
    location: "", whatsapp: "", batchTime: "", notes: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((err) => ({ ...err, [k]: "" }));
  };

  const validate = () => {
    const e = {};
    if (form.parentName.trim().length < 2) e.parentName = "Please enter your name.";
    if (form.childName.trim().length < 2) e.childName = "Please enter your child's name.";
    if (!form.childAge) e.childAge = "Please select your child's age.";
    if (form.location.trim().length < 2) e.location = "Please enter your location.";
    if (form.whatsapp.trim().length < 7) e.whatsapp = "Please enter a valid WhatsApp number.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1000);
  };

  const focusStyle = (id) => focused === id ? { borderColor: T.green, background: T.white } : {};

  if (submitted) {
    return (
      <section ref={sectionRef} style={{ background: T.sand, padding: `72px ${PAGE_X}` }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            width: 64, height: 64, borderRadius: "50%",
            background: T.greenBg, border: `2px solid ${T.green}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 20px", fontSize: 26, color: T.green,
          }}>✓</div>
          <h2 style={{ fontFamily: fonts.serif, fontSize: 36, color: T.ink, marginBottom: 12, letterSpacing: "-0.5px" }}>JazakAllahu Khayran</h2>
          <p style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 300, color: T.muted, lineHeight: 1.8, marginBottom: 28 }}>
            We've received your application. Our team will contact you on WhatsApp within 24 hours with available batch times and next steps.
          </p>
          <BtnWa
            href={waLink("As-salamu alaykum, I just submitted an admission form for my child at An-Nafa Academy.")}
            style={{ margin: "0 auto" }}
          >
            Also message us on WhatsApp
          </BtnWa>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} style={{ background: T.sand, padding: `72px ${PAGE_X}` }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <FadeIn><Eyebrow>Enroll Your Child</Eyebrow></FadeIn>
        <FadeIn delay={0.07}>
          <SectionHeading>
            Fill the<br /><em style={{ fontStyle: "italic", color: T.green }}>admission form</em>
          </SectionHeading>
        </FadeIn>
        <FadeIn delay={0.13}>
          <p style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 300, color: T.muted, lineHeight: 1.8 }}>
            Our team will contact you with available batches and program details within 24 hours.
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div style={{
            background: T.white, border: `1px solid ${T.sand3}`,
            borderRadius: 18, padding: "40px 40px",
            boxShadow: "0 2px 24px rgba(14,17,23,0.06)", marginTop: 32,
          }}>
            <form onSubmit={handleSubmit} noValidate>
              {/* Row 1 */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 18, marginBottom: 18 }}>
                <Field label="Parent Name" required error={errors.parentName}>
                  <input
                    type="text" value={form.parentName} onChange={set("parentName")}
                    placeholder="Your full name"
                    style={{ ...inputStyle(!!errors.parentName), ...focusStyle("parentName") }}
                    onFocus={() => setFocused("parentName")} onBlur={() => setFocused(null)}
                  />
                </Field>
                <Field label="Child's Name" required error={errors.childName}>
                  <input
                    type="text" value={form.childName} onChange={set("childName")}
                    placeholder="Child's full name"
                    style={{ ...inputStyle(!!errors.childName), ...focusStyle("childName") }}
                    onFocus={() => setFocused("childName")} onBlur={() => setFocused(null)}
                  />
                </Field>
              </div>

              {/* Row 2 */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 18, marginBottom: 18 }}>
                <Field label="Child's Age" required error={errors.childAge}>
                  <select
                    value={form.childAge} onChange={set("childAge")}
                    style={{
                      ...inputStyle(!!errors.childAge), ...focusStyle("childAge"),
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235c5955' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center",
                      paddingRight: 36, cursor: "pointer",
                    }}
                    onFocus={() => setFocused("childAge")} onBlur={() => setFocused(null)}
                  >
                    <option value="">Select age</option>
                    {[4, 5, 6, 7, 8, 9, 10].map(a => <option key={a} value={a}>{a} years</option>)}
                  </select>
                </Field>
                <Field label="Country / City" required error={errors.location}>
                  <input
                    type="text" value={form.location} onChange={set("location")}
                    placeholder="e.g. Dubai, UAE"
                    style={{ ...inputStyle(!!errors.location), ...focusStyle("location") }}
                    onFocus={() => setFocused("location")} onBlur={() => setFocused(null)}
                  />
                </Field>
              </div>

              {/* Row 3 */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 18, marginBottom: 18 }}>
                <Field label="WhatsApp Number" required error={errors.whatsapp}>
                  <input
                    type="tel" value={form.whatsapp} onChange={set("whatsapp")}
                    placeholder="+91 98765 43210"
                    style={{ ...inputStyle(!!errors.whatsapp), ...focusStyle("whatsapp") }}
                    onFocus={() => setFocused("whatsapp")} onBlur={() => setFocused(null)}
                  />
                </Field>
                <Field label="Preferred Batch Time">
                  <select
                    value={form.batchTime} onChange={set("batchTime")}
                    style={{
                      ...inputStyle(false), ...focusStyle("batchTime"),
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235c5955' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center",
                      paddingRight: 36, cursor: "pointer",
                    }}
                    onFocus={() => setFocused("batchTime")} onBlur={() => setFocused(null)}
                  >
                    {BATCH_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </Field>
              </div>

              {/* Notes */}
              <div style={{ marginBottom: 24 }}>
                <Field label="Additional Notes">
                  <textarea
                    value={form.notes} onChange={set("notes")}
                    placeholder="Any specific requirements or questions for our team…"
                    style={{ ...inputStyle(false), ...focusStyle("notes"), resize: "vertical", minHeight: 90 }}
                    onFocus={() => setFocused("notes")} onBlur={() => setFocused(null)}
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: "100%", padding: "16px",
                  background: submitting ? T.muted2 : T.green,
                  color: T.white, border: "none", borderRadius: 14,
                  fontFamily: fonts.sans, fontSize: 15, fontWeight: 600,
                  cursor: submitting ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  transition: "background 0.2s, transform 0.15s",
                }}
                onMouseEnter={e => { if (!submitting) e.currentTarget.style.background = T.green2; }}
                onMouseLeave={e => { if (!submitting) e.currentTarget.style.background = T.green; }}
              >
                {submitting ? (
                  "Submitting…"
                ) : (
                  <>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13" /><path d="M22 2L15 22l-4-9-9-4z" />
                    </svg>
                    Submit Admission
                  </>
                )}
              </button>
              <p style={{ textAlign: "center", marginTop: 14, fontFamily: fonts.sans, fontSize: 12, color: T.muted2, lineHeight: 1.6 }}>
                Your information is kept private and used only to contact you about enrollment.
              </p>
            </form>
          </div>
        </FadeIn>

        {/* WA Alternative */}
        <FadeIn delay={0.22}>
          <div style={{
            background: T.greenBg, border: `1.5px dashed rgba(26,92,58,0.25)`,
            borderRadius: 14, padding: "24px", display: "flex",
            alignItems: "center", gap: 20, marginTop: 28,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%",
              background: T.waGreen, display: "flex",
              alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              {WA_ICON}
            </div>
            <div style={{ fontFamily: fonts.sans, fontSize: 14, color: T.muted, lineHeight: 1.5 }}>
              <strong style={{ color: T.ink, display: "block", fontSize: 15, marginBottom: 2 }}>Prefer WhatsApp?</strong>
              Message us directly and our team will guide you through the admission process.{" "}
              <a href={waLink("As-salamu alaykum, I would like to enroll my child in the Evening Madrasah.")} target="_blank" rel="noopener noreferrer" style={{ color: T.green, fontWeight: 600, textDecoration: "none" }}>
                Message us now →
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Limited Seats ────────────────────────────────────────────────────────────
function LimitedSeats() {
  const [pulse, setPulse] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setPulse(p => !p), 750);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ background: T.goldBg, padding: `72px ${PAGE_X}`, textAlign: "center" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <FadeIn>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: T.gold, color: T.ink,
            fontFamily: fonts.sans, fontSize: 11, fontWeight: 700,
            padding: "6px 16px", borderRadius: 100,
            letterSpacing: "1px", textTransform: "uppercase", marginBottom: 24,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: T.ink, display: "block", opacity: pulse ? 1 : 0.35, transition: "opacity 0.3s" }} />
            Limited Seats
          </div>
          <h2 style={{ fontFamily: fonts.serif, fontSize: "clamp(28px, 5vw, 44px)", color: T.ink, letterSpacing: "-0.5px", marginBottom: 14 }}>
            Seats are limited<br />in each batch
          </h2>
          <p style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 300, color: T.muted, lineHeight: 1.8, marginBottom: 28 }}>
            To ensure every child receives proper individual attention, each batch has a limited number of seats. We encourage parents to reserve a place early.
          </p>
          <BtnWa href={waLink("As-salamu alaykum, I would like to reserve a seat for my child in the Evening Madrasah.")} style={{ margin: "0 auto" }}>
            Reserve a Seat on WhatsApp
          </BtnWa>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: "What age group is this program for?", a: "The program is designed for children between the ages of 4 and 10. The curriculum is age-appropriate and taught by teachers with specific experience working with young learners." },
  { q: "Are the classes live?", a: "Yes, all classes are conducted live. Students interact directly with their teacher in real time — there are no pre-recorded lessons. Questions are answered and progress is monitored every session." },
  { q: "Do children need prior knowledge?", a: "No prior knowledge is required. The program welcomes complete beginners and starts with foundational learning — Qaida for those who cannot yet read Arabic." },
  { q: "How can I enroll my child?", a: "You can fill the admission form above or contact us directly on WhatsApp at +91 78299 50311. Our team will guide you through the process and arrange a suitable batch time." },
  { q: "Is there a free trial class?", a: "Yes. We welcome trial classes so you and your child can experience the quality of teaching before enrolling. Message us on WhatsApp to arrange a suitable time — no commitment required." },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section style={{ background: T.white, padding: `72px ${PAGE_X}` }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <FadeIn><Eyebrow>FAQ</Eyebrow></FadeIn>
        <FadeIn delay={0.07}>
          <SectionHeading>
            Common <em style={{ fontStyle: "italic", color: T.green }}>Questions</em>
          </SectionHeading>
        </FadeIn>
        <FadeIn delay={0.13}>
          <div>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${T.sand2}`, ...(i === 0 ? { borderTop: `1px solid ${T.sand2}` } : {}) }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between", padding: "20px 0",
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: fonts.sans, fontSize: 15, fontWeight: 500,
                    color: open === i ? T.green : T.ink,
                    textAlign: "left", gap: 16, transition: "color 0.2s",
                  }}
                >
                  {faq.q}
                  <span style={{
                    width: 26, height: 26, borderRadius: "50%",
                    border: `1.5px solid ${open === i ? T.green : T.sand3}`,
                    background: open === i ? T.green : "none",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: open === i ? T.white : T.muted2,
                    fontSize: 16, flexShrink: 0,
                    transform: open === i ? "rotate(45deg)" : "none",
                    transition: "all 0.3s",
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  fontFamily: fonts.body, fontSize: 14, fontWeight: 300,
                  color: T.muted, lineHeight: 1.8,
                  maxHeight: open === i ? 200 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.35s ease, padding 0.3s",
                  paddingBottom: open === i ? 20 : 0,
                }}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section style={{ background: T.ink, padding: `88px ${PAGE_X}`, position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: GEO_PATTERN, backgroundSize: "100px 100px",
      }} />
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <Eyebrow center>Begin Today</Eyebrow>
          <h2 style={{ fontFamily: fonts.serif, fontSize: "clamp(30px, 5vw, 54px)", color: T.white, letterSpacing: "-1px", lineHeight: 1.05, marginBottom: 14 }}>
            Start your child's<br />
            <em style={{ fontStyle: "italic", color: "#c9a53a" }}>Islamic journey</em> today.
          </h2>
          <p style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, marginBottom: 32 }}>
            Help your child build a strong connection with the Qur'an and Islamic teachings from an early age.
          </p>
          <BtnWa
            href={waLink("As-salamu alaykum, I would like to enroll my child in the Evening Madrasah at An-Nafa Academy.")}
            style={{ margin: "0 auto" }}
          >
            Enroll Your Child on WhatsApp
          </BtnWa>
          <span style={{ fontFamily: fonts.arabic, fontSize: 22, color: "rgba(184,130,15,0.2)", direction: "rtl", display: "block", marginTop: 28 }}>
            طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
          </span>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#05080f", padding: "24px", borderTop: "1px solid rgba(255,255,255,0.04)", textAlign: "center" }}>
      <p style={{ fontFamily: fonts.sans, fontSize: 12, color: "rgba(255,255,255,0.18)" }}>
        © 2025 <a href="#" style={{ color: T.gold, textDecoration: "none" }}>An-Nafa Academy</a> · أكاديمية النافع · All rights reserved.
      </p>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function AnNafaAdmissions() {
  const formRef = useRef(null);

  return (
    <>
      <div style={{ background: T.sand, minHeight: "100vh" }}>
        <Hero formRef={formRef} />
        <About />
        <Curriculum />
        <Why />
        <ProgramDetails />
        <AdmissionForm sectionRef={formRef} />
        <LimitedSeats />
        <FAQ />
        <FinalCTA />
      </div>
    </>
  );
}