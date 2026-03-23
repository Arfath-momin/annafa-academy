"use client";

import { useState } from "react";

const FAQ_DATA = [
  {
    q: "Are the classes live or pre-recorded?",
    a: "All our classes are live and interactive. Students engage directly with their teacher in real time — there are no pre-recorded lessons. Questions are answered, progress is monitored, and every student receives proper individual attention.",
    keywords: "are the classes live pre-recorded",
  },
  {
    q: "What age is the kids program for?",
    a: "Our Evening Madrasah is designed for children aged 4 to 10. The curriculum is age-appropriate, engaging, and carefully structured to build a strong Islamic foundation — taught by teachers with specific experience working with young learners.",
    keywords: "age kids children program",
  },
  {
    q: "Do you offer a free trial class?",
    a: "Yes. We welcome trial classes so you can experience the quality of teaching before enrolling. Simply message us on WhatsApp and we will arrange a suitable time for you — no commitment required.",
    keywords: "trial free class try before enroll",
  },
  {
    q: "How do I enroll?",
    a: "Simply message us on WhatsApp at +91 78299 50311. Our team responds quickly, will understand your needs, and guide you to the most suitable course. The process is simple — no lengthy forms or complicated steps.",
    keywords: "how enroll join sign up register",
  },
  {
    q: "I'm a complete beginner — is that okay?",
    a: "Absolutely. We welcome complete beginners across all our courses. Whether you are starting from scratch or looking to deepen existing knowledge, we have a course suited to your level and goals.",
    keywords: "beginner absolute zero no knowledge start",
  },
  {
    q: "What are the class timings?",
    a: "Class timings are flexible and discussed when you enroll. We try to accommodate different time zones and schedules — contact us on WhatsApp with your availability and we will find a suitable slot.",
    keywords: "timings schedule time class when flexible",
  },
  {
    q: "Are the sisters' classes taught by female teachers?",
    a: "Yes. All classes for sisters are taught exclusively by qualified female teachers. We take this seriously — sisters can learn in a fully appropriate and comfortable environment.",
    keywords: "female teacher sisters privacy women",
  },
];

export default function FaqSection({ data = FAQ_DATA }) {
  const [openIndex, setOpenIndex] = useState(-1);
  const [search, setSearch] = useState("");

  const filtered = data.filter((item) => {
    if (!search.trim()) return true;
    const text = (item.keywords + " " + item.q).toLowerCase();
    return text.includes(search.toLowerCase().trim());
  });

  const toggleFaq = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section id="faq" className="section" aria-label="Frequently asked questions">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-sticky">
            <span className="s-label fade-up">Common Questions</span>
            <h2 className="s-title fade-up stagger-1" style={{ color: "var(--ink)" }}>
              Common
              <br />
              <em>Questions</em>
            </h2>
            <p className="s-body fade-up stagger-2" style={{ marginBottom: 0 }}>
              Can&#39;t find what you&#39;re looking for? Message us directly.
            </p>
            <div className="faq-search-wrap fade-up stagger-3">
              <div className="faq-search-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <input
                type="search"
                className="faq-search"
                placeholder="Search questions…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search frequently asked questions"
              />
            </div>
            {filtered.length === 0 && (
              <div className="no-results" style={{ display: "block" }}>
                No questions match your search.
              </div>
            )}
            <a
              href="https://wa.me/917829950311"
              target="_blank"
              rel="noopener noreferrer"
              className="faq-wa-link fade-up stagger-4"
            >
              Ask on WhatsApp
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="faq-items fade-right">
            {filtered.map((item, i) => (
              <div
                key={item.q}
                className={`faq-item${openIndex === i ? " open" : ""}`}
              >
                <button
                  className="faq-q"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openIndex === i}
                >
                  {item.q}
                  <div className="faq-q-icon">+</div>
                </button>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
