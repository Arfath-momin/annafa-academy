import FaqSection from "@/components/FaqSection";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const metadata = {
  title: "Islamic Classes for Sisters | Learn Islam Online | An-Nafa Academy",
  description:
    "Join authentic Islamic classes for sisters at An-Nafa Academy. Learn Qur'an, Aqeedah, Fiqh, Seerah and Islamic knowledge through live online classes in a comfortable environment.",
  keywords: [
    "islamic classes for sisters",
    "online islamic classes for women",
    "learn islam online for women",
    "quran classes for sisters",
    "islamic studies for women",
  ],
};

const SUBJECTS = [
  {
    title: "Aqeedah",
    body: "Understanding the correct Islamic beliefs and foundations of faith.",
  },
  {
    title: "Fiqh",
    body: "Learning the rulings related to worship and daily Islamic practices.",
  },
  {
    title: "Hadith",
    body: "Studying important sayings and teachings of Prophet Muhammad ﷺ.",
  },
  {
    title: "Islamic History",
    body: "Learning lessons from the lives of the Prophets and early Muslims.",
  },
  {
    title: "Qur’an Nazeera",
    body: "Improving Qur’an reading with correct pronunciation.",
  },
  {
    title: "Basic Hifdh",
    body: "Memorizing selected portions of the Qur’an according to ability.",
  },
];

const BENEFITS = [
  {
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.883v6.234a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
    title: "Live Interactive Classes",
    body: "Every class is conducted live so students can learn directly from the teacher and ask questions during the session.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Qualified Female Teachers",
    body: "Our teachers are selected based on their knowledge, qualifications, and adherence to the correct Islamic methodology.",
  },
  {
    icon: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
    title: "Comfortable Learning Environment",
    body: "A respectful and supportive environment where sisters can learn with confidence.",
  },
  {
    icon: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11",
    title: "Structured Curriculum",
    body: "Lessons follow a well-organized syllabus to ensure students gain knowledge step by step.",
  },
  {
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    title: "Authentic Islamic Teachings",
    body: "The curriculum is based on the Qur’an and authentic Hadith according to the understanding of the Salaf-us-Saliheen.",
  },
  {
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    title: "Learn From Home",
    body: "Attend classes comfortably from home through our online learning platform.",
  },
];

const SUITABLE_FOR = [
  "Beginners who want to learn the basics of Islam.",
  "Sisters who want to strengthen their understanding of the Deen.",
  "Women seeking structured Islamic education.",
  "Students who want to learn authentic Islamic teachings.",
];

const SISTERS_FAQ = [
  {
    q: "Are the classes live or recorded?",
    a: "All classes are conducted live so students can interact with the teacher and ask questions.",
    keywords: "live recorded online interactive",
  },
  {
    q: "Do I need prior knowledge to join?",
    a: "No. Beginners can join and gradually build their understanding through structured lessons.",
    keywords: "prior knowledge beginner zero start",
  },
  {
    q: "What subjects are taught in the classes?",
    a: "The classes include Aqeedah, Fiqh, Hadith, Islamic History, Qur’an reading and other essential Islamic topics.",
    keywords: "topics curriculum subjects covered",
  },
  {
    q: "How can I enroll in the classes?",
    a: "You can contact us on WhatsApp and our team will guide you through the enrollment process.",
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

export default function SistersClasses() {
  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <section className="sc-hero" aria-label="Islamic classes for sisters">
        <div className="sc-hero-bg-ar" aria-hidden="true">أُخْت</div>
        <div className="container sc-hero-inner">
          <div className="cp-hero-line"></div>
          <span className="s-label fade-up">For Sisters · Female Teachers</span>
          <h1 className="km-hero-title fade-up stagger-1">
            Islamic Classes<br />
            for <em>Sisters</em>
          </h1>
          <p className="cp-hero-body fade-up stagger-2">
            An-Nafa Academy offers authentic Islamic classes for sisters who want to deepen their
            understanding of Islam in a respectful and supportive learning environment.
          </p>
          <p className="cp-hero-body fade-up" style={{ marginTop: 16 }}>
            Our classes follow the authentic Manhaj of Ahle-Sunnah wa-Jama’ah and are built upon the
            Qur’an and authentic teachings of the Prophet ﷺ.
          </p>
          <p className="cp-hero-body fade-up" style={{ marginTop: 16 }}>
            The program is designed to help Muslim women strengthen their understanding of the Deen
            through structured learning, clear explanations, and regular guidance from qualified
            teachers.
          </p>
          <a
            href="https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20enquire%20about%20the%20Islamic%20Classes%20for%20Sisters."
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

      {/* ═══ WHAT YOU WILL LEARN ═══ */}
      <section className="section sc-learn" aria-label="What you will learn">
        <div className="container">
          <div className="km-learn-grid">
            <div className="km-learn-text">
              <span className="s-label r-left">Curriculum</span>
              <h2 className="km-section-title r-left">
                What You<br /><em>Will Learn</em>
              </h2>
              <p className="s-body r-left">
                Our sisters classes focus on essential Islamic knowledge that every Muslim woman should
                understand in order to practice Islam with clarity and confidence.
              </p>
            </div>
            <ul className="km-curr-list" aria-label="Subjects covered">
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
          src="/Images/islamic_sister.jpg"
          alt="Sisters learning Islamic studies"
          loading="lazy"
        />
        <div className="sc-split-overlay"></div>
        <div className="sc-split-caption">
          <span className="sc-split-ar">بِالْعِلْم</span>
          <span className="sc-split-sub">Through Knowledge</span>
        </div>
      </div>

      {/* ═══ WHY JOIN ═══ */}
      <section className="section sc-why" aria-label="Why join our sisters classes">
        <div className="container">
          <div className="sc-why-header">
            <div>
              <span className="s-label r-left">Why An-Nafa</span>
              <h2 className="km-section-title r-left">
                Why Join Our<br /><em>Sisters Classes</em>
              </h2>
            </div>
            <p className="s-body r-right" style={{ paddingTop: 8 }}>
              Seeking knowledge of the Deen is an important responsibility for every Muslim. Our classes
              provide a structured environment where sisters can learn authentic Islamic teachings while
              growing in their understanding and practice of Islam.
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

      {/* ═══ WHO CAN JOIN ═══ */}
      <section className="section sc-who" aria-label="Who can join">
        <div className="container">
          <div className="sc-who-grid">
            <div>
              <span className="s-label fade-up">Open To All</span>
              <h2 className="km-section-title fade-up stagger-1" style={{ color: "var(--white)" }}>
                Who Can Join<br /><em>These Classes</em>
              </h2>
              <p className="sc-who-body fade-up stagger-2">
                Our sisters classes are open to women who want to learn authentic Islamic knowledge
                regardless of their current level.
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
      <section className="section sc-how" aria-label="How our online classes work">
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
              with the teacher. This allows sisters to ask questions, participate in discussions, and
              receive guidance throughout the learning process.
            </p>
          </div>
          <div className="sc-how-steps">
            {[
              { n: "01", t: "Message Us on WhatsApp", b: "Contact our team on WhatsApp and we will guide you regarding the available batches and class details." },
              { n: "02", t: "Trial Class Available", b: "You may attend a trial class to understand the teaching style and structure of the program." },
              { n: "03", t: "Join Live Classes", b: "Attend the scheduled classes online and participate in the lessons." },
              { n: "04", t: "Grow in Knowledge", b: "Continue learning through structured lessons and develop a stronger understanding of Islam." },
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
      <FaqSection data={SISTERS_FAQ} />

      {/* ═══ FINAL CTA ═══ */}
      <section className="km-cta" aria-label="Begin your Islamic learning journey">
        <div className="km-cta-bg-ar" aria-hidden="true">تَعَلَّمِي</div>
        <div className="km-cta-overlay"></div>
        <div className="container km-cta-inner">
          <span className="s-label r" style={{ justifyContent: "center" }}>Begin Today</span>
          <h2 className="km-cta-title r">
            Begin Your Journey<br />of Islamic <em>Learning</em>
          </h2>
          <p className="km-cta-desc r">
            Take the first step toward learning authentic Islamic knowledge. Contact us on WhatsApp and
            our team will guide you to the appropriate class.
          </p>
          <a
            href="https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20enquire%20about%20the%20Islamic%20Classes%20for%20Sisters."
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
