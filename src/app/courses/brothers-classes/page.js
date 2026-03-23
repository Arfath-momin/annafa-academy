import FaqSection from "@/components/FaqSection";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const metadata = {
  title: "Islamic Classes for Brothers | Learn Islam Online | An-Nafa Academy",
  description:
    "Join authentic Islamic classes for brothers at An-Nafa Academy. Study Qur'an, Aqeedah, Fiqh, Seerah and Islamic knowledge through live interactive online classes.",
  keywords: [
    "islamic classes for brothers",
    "learn islam online for men",
    "online islamic courses for men",
    "quran classes for brothers",
    "islamic studies for men",
  ],
};

const SUBJECTS = [
  {
    title: "Qur’an Nazeera",
    body: "Students improve their Qur’an recitation and reading with proper pronunciation.",
  },
  {
    title: "Hifdh",
    body: "Memorization of selected portions of the Qur’an according to the student’s ability.",
  },
  {
    title: "Aqeedah",
    body: "Understanding the correct Islamic beliefs and foundations of faith.",
  },
  {
    title: "Fiqh",
    body: "Learning the rulings related to worship and daily Islamic practices.",
  },
  {
    title: "Seerah",
    body: "Studying the life and character of Prophet Muhammad ﷺ.",
  },
  {
    title: "Qur’ani Malumat",
    body: "Learning the meanings and brief explanations of Qur’anic verses.",
  },
  {
    title: "Adaab and Sunnah Acts",
    body: "Understanding Islamic manners and daily Sunnah practices.",
  },
  {
    title: "Duas",
    body: "Learning important supplications used in everyday life.",
  },
  {
    title: "Stories of the Prophets",
    body: "Lessons and guidance from the lives of the Prophets.",
  },
];

const BENEFITS = [
  {
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.883v6.234a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
    title: "Live Interactive Classes",
    body: "Every class is conducted live so students can interact with teachers and ask questions during lessons.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Qualified Teachers",
    body: "Classes are taught by qualified teachers with authentic Islamic knowledge and a focus on correct methodology.",
  },
  {
    icon: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11",
    title: "Structured Curriculum",
    body: "Lessons follow a clear and progressive syllabus to help students build knowledge step by step.",
  },
  {
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    title: "Ask Questions Freely",
    body: "Students are encouraged to ask questions and seek clarification so they truly understand what they are learning.",
  },
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    title: "Learn From Home",
    body: "Attend classes comfortably from anywhere through our online learning platform.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Supportive Learning Environment",
    body: "A structured and respectful environment where brothers can focus on learning and growing in their Islamic knowledge.",
  },
];

const SUITABLE_FOR = [
  "Beginners who want to learn the basics of Islam.",
  "Brothers seeking structured Islamic education",
  "Students who want to improve their understanding of the Qur’an and Sunnah.",
  "Muslims who want to strengthen their faith and Islamic knowledge.",
];

const BROTHERS_FAQ = [
  {
    q: "Are the classes conducted live?",
    a: "Yes. All classes are live so students can interact with teachers and ask questions.",
    keywords: "live recorded online interactive",
  },
  {
    q: "Do I need previous Islamic knowledge to join?",
    a: "No. Beginners can join and gradually build their understanding through structured lessons.",
    keywords: "prior knowledge beginner zero start",
  },
  {
    q: "What subjects are taught in the classes?",
    a: "Subjects include Qur’an Nazeera, Aqeedah, Fiqh, Seerah, Qur’ani Malumat, Duas, Adaab and stories of the Prophets.",
    keywords: "topics curriculum subjects covered",
  },
  {
    q: "How can I enroll in the classes?",
    a: "You can contact us on WhatsApp and our team will guide you through the admission process.",
    keywords: "how join enroll sign up register",
  },
];

function Check() {
  return (
    <div className="check-icon" aria-hidden="true">
      <svg viewBox="0 0 10 10">
        <polyline points="1.5,5 4,7.5 8.5,2.5" />
      </svg>
    </div>
  );
}

export default function BrothersClasses() {
  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <section className="sc-hero" aria-label="Islamic classes for brothers">
        <div className="sc-hero-bg-ar" aria-hidden="true">أَخٌ</div>
        <div className="container sc-hero-inner">
          <div className="cp-hero-line"></div>
          <span className="s-label fade-up">For Brothers · Qualified Teachers</span>
          <h1 className="km-hero-title fade-up stagger-1">
            Islamic Classes<br />
            for <em>Brothers</em>
          </h1>
          <p className="cp-hero-body fade-up stagger-2">
            An-Nafa Academy offers structured Islamic classes for brothers who want to strengthen their
            understanding of Islam and practice their faith with knowledge and clarity.
          </p>
          <p className="cp-hero-body fade-up" style={{ marginTop: 16 }}>
            Our classes follow the authentic Manhaj of Ahle-Sunnah wa-Jama’ah and are built upon the
            Qur’an and authentic teachings of the Prophet ﷺ. The program helps students develop a
            strong understanding of Islamic beliefs, worship, and character through structured and
            guided learning.
          </p>
          <a
            href="https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20enquire%20about%20the%20Islamic%20Classes%20for%20Brothers."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa fade-up stagger-3"
            style={{ width: "fit-content", marginTop: "12px" }}
          >
            <WhatsAppIcon />
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      {/* ═══ SUBJECTS COVERED ═══ */}
      <section className="section sc-learn" aria-label="Subjects covered in the classes">
        <div className="container">
          <div className="km-learn-grid">
            <div className="km-learn-text">
              <span className="s-label r-left">Curriculum</span>
              <h2 className="km-section-title r-left">
                Subjects Covered<br /><em>in the Classes</em>
              </h2>
              <p className="s-body r-left">
                Our brothers classes focus on essential Islamic knowledge that helps students develop a
                clear understanding of the Deen and apply Islamic teachings in daily life.
              </p>
            </div>
            <ul className="km-curr-list" aria-label="Topics studied">
              {SUBJECTS.map((item) => (
                <li key={item.title} className="km-curr-item r">
                  <Check />
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <strong style={{ color: "var(--ink)", fontFamily: "var(--serif)", fontSize: "16px", fontWeight: 700 }}>
                      {item.title}
                    </strong>
                    <span>{item.body}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ SPLIT VISUAL ═══ */}
      <div className="sc-split-visual" aria-hidden="true">
        <img
          src="/Images/islamic_brother.jpg"
          alt="Brothers studying Islamic knowledge"
          loading="lazy"
        />
        <div className="sc-split-overlay"></div>
        <div className="sc-split-caption">
          <span className="sc-split-ar">بِالْعِلْم</span>
          <span className="sc-split-sub">Through Knowledge</span>
        </div>
      </div>

      {/* ═══ BENEFITS ═══ */}
      <section className="section sc-why" aria-label="Benefits of joining brothers classes">
        <div className="container">
          <div className="sc-why-header">
            <div>
              <span className="s-label r-left">Why An-Nafa</span>
              <h2 className="km-section-title r-left">
                Benefits of Joining<br /><em>Our Brothers Classes</em>
              </h2>
            </div>
            <p className="s-body r-right" style={{ paddingTop: 8 }}>
              Learning Islam through authentic sources is essential for every Muslim. Our classes are
              designed to provide structured Islamic education while helping students strengthen their
              faith and understanding.
            </p>
          </div>
          <div className="sc-benefits-grid">
            {BENEFITS.map((b) => (
              <div key={b.title} className="sc-benefit-card r">
                <div className="sc-benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={b.icon} />
                  </svg>
                </div>
                <h3 className="sc-benefit-title">{b.title}</h3>
                <p className="sc-benefit-body">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHO SHOULD JOIN ═══ */}
      <section className="section sc-who" aria-label="Who should join these classes">
        <div className="container">
          <div className="sc-who-grid">
            <div>
              <span className="s-label fade-up">Open To All</span>
              <h2 className="km-section-title fade-up stagger-1" style={{ color: "var(--white)" }}>
                Who Should Join<br /><em>These Classes</em>
              </h2>
              <p className="sc-who-body fade-up stagger-2">
                Our brothers classes are suitable for men who want to improve their understanding of
                Islam and improve their religious practice.
              </p>
            </div>
            <div className="sc-who-cards">
              {SUITABLE_FOR.map((item, i) => (
                <div key={item} className="sc-who-card fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="sc-who-card-num">{String(i + 1).padStart(2, "0")}</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="section sc-how" aria-label="How the online classes work">
        <div className="container">
          <div className="sc-how-header">
            <span className="s-label r-left">The Process</span>
            <h2 className="km-section-title r-left" style={{ color: "var(--ink)", marginBottom: 0 }}>
              How Our Online<br /><em>Classes Work</em>
            </h2>
          </div>
          <div className="sc-how-content">
            <p className="sc-how-body r">
              Classes are conducted live through online sessions where students can interact directly
              with teachers. This allows participants to ask questions, discuss important topics, and
              benefit from guided learning.
            </p>
          </div>
          <div className="sc-how-steps">
            {[
              { n: "01", t: "Message Us on WhatsApp", b: "Contact our team on WhatsApp and we will guide you regarding the available classes and batches." },
              { n: "02", t: "Trial Class Available", b: "Attend a trial class to understand the teaching style and structure of the program." },
              { n: "03", t: "Join Live Classes", b: "Attend the scheduled live sessions and participate in the lessons." },
              { n: "04", t: "Grow in Knowledge", b: "Continue learning through structured lessons and strengthen your understanding of the Deen." },
            ].map((s) => (
              <div key={s.n} className="km-how-card r">
                <div className="km-how-num">{s.n}</div>
                <h3 className="km-how-title">{s.t}</h3>
                <p className="km-how-body">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FaqSection data={BROTHERS_FAQ} />

      {/* ═══ FINAL CTA ═══ */}
      <section className="km-cta" aria-label="Start learning the Deen today">
        <div className="km-cta-bg-ar" aria-hidden="true">تَعَلَّمْ</div>
        <div className="km-cta-overlay"></div>
        <div className="container km-cta-inner">
          <span className="s-label r" style={{ justifyContent: "center" }}>Begin Today</span>
          <h2 className="km-cta-title r">
            Start Learning<br />the Deen <em>Today</em>
          </h2>
          <p className="km-cta-desc r">
            Strengthen your understanding of Islam through authentic knowledge and structured learning.
            Contact us on WhatsApp and our team will guide you to join the brothers classes.
          </p>
          <a
            href="https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20enquire%20about%20the%20Islamic%20Classes%20for%20Brothers."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa r"
            style={{ margin: "0 auto" }}
          >
            <WhatsAppIcon />
            Enquire on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
