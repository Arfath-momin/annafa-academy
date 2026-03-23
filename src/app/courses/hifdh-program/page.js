import FaqSection from "@/components/FaqSection";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const metadata = {
  title: "Online Hifdh Program for Sisters | Memorize Qur'an Online | An-Nafa Academy",
  description:
    "Join the online Hifdh program for sisters at An-Nafa Academy. Memorize the Qur\u2019an with proper tajweed, structured memorization plans and teacher guidance through live classes.",
  keywords: [
    "online hifdh program",
    "memorize quran online",
    "hifdh classes for sisters",
    "quran memorization online",
    "learn hifdh online",
  ],
};

const INCLUDES = [
  "Structured Qur\u2019an memorization plan",
  "Small group classes (approximately 8–10 students)",
  "Three days dedicated to new memorization (Sabaq)",
  "Two days focused on revision of previously memorized portions",
  "Individual recitation to the teacher",
  "Tajweed and pronunciation correction",
  "Hifdh Journal provided to track memorization progress",
  "Memorization according to each student’s ability",
];

const BENEFITS = [
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Qualified Teacher Guidance",
    body: "Students are guided by qualified teachers who supervise memorization, provide correction and ensure consistent progress.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Structured System",
    body: "A clear memorization schedule balances new memorization with regular revision to build a solid and lasting foundation.",
  },
  {
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.883v6.234a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
    title: "Live Recitation Sessions",
    body: "Students recite directly to the teacher during live sessions and receive immediate correction of tajweed and pronunciation.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    title: "Regular Revision",
    body: "Dedicated revision sessions ensure that previously memorized portions remain strong and firmly retained over time.",
  },
  {
    icon: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
    title: "Supportive Environment",
    body: "A respectful and encouraging environment designed for sisters to focus on this noble journey with comfort and confidence.",
  },
  {
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    title: "Lifelong Connection",
    body: "The Hifdh journey builds a deep, lasting bond with the words of Allah that remains with the student throughout their life.",
  },
];

const SUITABLE_FOR = [
  "Sisters who aspire to memorize the Qur’an",
  "Students who are able to read the Qur’an",
  "Individuals seeking structured memorization guidance",
  "Students willing to dedicate time for memorization and revision",
];

const HIFDH_FAQ = [
  {
    q: "Do I need to know how to read Qur\u2019an before joining?",
    a: "Yes. Students should be able to read the Qur’an before beginning the memorization program.",
    keywords: "reading ability prerequisite qaida before joining",
  },
  {
    q: "Are the classes live?",
    a: "Yes. All sessions are conducted live so students can recite directly to the teacher.",
    keywords: "live online recorded interactive",
  },
  {
    q: "How long does the memorization process take?",
    a: "The duration varies depending on the student’s ability and consistency in memorization and revision.",
    keywords: "duration how long time complete finish",
  },
  {
    q: "How can I join the Hifdh program?",
    a: "You can contact us on WhatsApp and our team will guide you through the enrollment process.",
    keywords: "join enroll sign up register how",
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

export default function HifdhProgram() {
  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <section className="hf-hero" aria-label="Online Hifdh Program for Sisters">
        <div className="hf-hero-bg-ar" aria-hidden="true">حِفْظ</div>
        <div className="container hf-hero-inner">
          <div className="cp-hero-line"></div>
          <span className="s-label fade-up">For Sisters · Live Classes</span>
          <h1 className="km-hero-title fade-up stagger-1">
            Online Hifdh<br />Program for <em>Sisters</em>
          </h1>
          <p className="cp-hero-body fade-up stagger-2">
            The Hifdh Program at An-Nafa Academy is designed for sisters who wish to memorize the
            Qur'an under proper supervision and guidance. Our program provides a structured
            environment where students can memorize the Qur’an step by step while maintaining strong
            revision and correct recitation.
          </p>
          <p className="cp-hero-body fade-up stagger-3" style={{ marginTop: 0 }}>
            Through regular recitation sessions with the teacher, students receive guidance,
            correction and encouragement throughout their memorization journey. The program aims to
            help students build a strong and lasting connection with the Book of Allah.
          </p>
          <a
            href="https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20enquire%20about%20the%20Hifdh%20Program."
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

      {/* ═══ ABOUT THE PROGRAM ═══ */}
      <section className="section hf-about" aria-label="About the Hifdh Program">
        <div className="container">
          <div className="hf-about-grid">
            <div>
              <span className="s-label r-left">The Program</span>
              <h2 className="km-section-title r-left">
                About the<br /><em>Hifdh Program</em>
              </h2>
              <p className="s-body r-left">
                Memorizing the Qur’an is a noble goal and a great blessing. Our Hifdh program
                provides a structured system that helps students progress gradually while maintaining
                strong revision and correct pronunciation.
              </p>
              <p className="s-body r-left" style={{ marginTop: "16px" }}>
                Classes are conducted in small groups so that every student receives proper attention
                and guidance from the teacher.
              </p>
            </div>
            <div>
              <span className="s-label r-left" style={{ marginBottom: "16px" }}>What the Program Includes</span>
              <ul className="km-curr-list" aria-label="What the program includes">
                {INCLUDES.map((item) => (
                  <li key={item} className="km-curr-item r">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SPLIT VISUAL ═══ */}
      <div className="sc-split-visual" aria-hidden="true">
        <img
          src="/Images/crown_woman.png"
          alt="Hifdh Qur'an memorization"
          loading="lazy"
        />
        <div className="sc-split-overlay"></div>
        <div className="sc-split-caption">
          <span className="sc-split-ar">حَافِظُ الْقُرْآن</span>
          <span className="sc-split-sub">The Guardian of the Qur&apos;an</span>
        </div>
      </div>

      {/* ═══ BENEFITS ═══ */}
      <section className="section sc-why" aria-label="Benefits of joining the Hifdh Program">
        <div className="container">
          <div className="sc-why-header">
            <div>
              <span className="s-label r-left">Why Join</span>
              <h2 className="km-section-title r-left">
                Benefits of Joining<br /><em>the Hifdh Program</em>
              </h2>
            </div>
            <p className="s-body r-right" style={{ paddingTop: 8 }}>
              Memorizing the Qur’an requires dedication, consistency and proper guidance. Our program
              is designed to support students throughout their memorization journey while ensuring
              that memorization remains accurate and well maintained.
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
      <section className="section sc-who" aria-label="Who can join the Hifdh Program">
        <div className="container">
          <div className="sc-who-grid">
            <div>
              <span className="s-label fade-up">Open To</span>
              <h2 className="km-section-title fade-up stagger-1" style={{ color: "var(--white)" }}>
                Who Can Join<br /><em>the Hifdh Program</em>
              </h2>
              <p className="sc-who-body fade-up stagger-2">
                The Hifdh program is open to sisters who are committed to memorizing the Qur’an and
                maintaining consistency in their memorization.
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
      <section className="section sc-how" aria-label="How the online Hifdh classes work">
        <div className="container">
          <div className="sc-how-header">
            <span className="s-label r-left">The Process</span>
            <h2 className="km-section-title r-left" style={{ color: "var(--ink)", marginBottom: 0 }}>
              How Our Online<br /><em>Classes Work</em>
            </h2>
          </div>
          <div className="sc-how-content">
            <p className="sc-how-body r">
              Our Hifdh classes are conducted live online so students can recite directly to the
              teacher and receive immediate correction. This allows teachers to guide students through
              memorization while ensuring correct recitation and pronunciation.
            </p>
          </div>
          <div className="sc-how-steps">
            {[
              { n: "01", t: "Contact Us on WhatsApp", b: "Message our team on WhatsApp to enquire about the Hifdh program and available batches." },
              { n: "02", t: "Assessment Session", b: "A short recitation assessment helps the teacher understand your current level." },
              { n: "03", t: "Begin Memorization", b: "Start memorizing with structured sabaq and scheduled recitation sessions." },
              { n: "04", t: "Maintain Revision", b: "Students continue regular revision along with new memorization to strengthen retention." },
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

      {/* ═══ IMPORTANCE OF HIFDH ═══ */}
      <section className="section hf-importance" aria-label="Importance of memorizing the Qur'an">
        <div className="container">
          <div className="hf-importance-inner">
            <div className="hf-importance-ar" aria-hidden="true">
              حَافِظُوا<br />عَلَى<br />الْقُرْآن
            </div>
            <div className="hf-importance-text">
              <span className="s-label fade-up">Its Virtue</span>
              <h2 className="km-section-title fade-up stagger-1" style={{ color: "var(--white)" }}>
                Importance of<br /><em>Memorizing the Qur&#39;an</em>
              </h2>
              <p className="hf-importance-body fade-up stagger-2">
                Memorizing the Qur’an is one of the most virtuous acts in Islam. The Qur’an is the
                guidance for mankind, and committing it to memory is a great honor and responsibility.
              </p>
              <p className="hf-importance-body fade-up stagger-3">
                Students who embark on the journey of Hifdh develop a strong connection with the
                words of Allah and gain immense reward and blessings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FaqSection data={HIFDH_FAQ} />

      {/* ═══ FINAL CTA ═══ */}
      <section className="km-cta" aria-label="Begin your Qur'an memorization journey">
        <div className="km-cta-bg-ar" aria-hidden="true">حِفْظ</div>
        <div className="km-cta-overlay"></div>
        <div className="container km-cta-inner">
          <span className="s-label r" style={{ justifyContent: "center" }}>Begin Today</span>
          <h2 className="km-cta-title r">
            Begin Your Qur&#39;an<br /><em>Memorization Journey</em>
          </h2>
          <p className="km-cta-desc r">
            Take the step toward memorizing the Book of Allah with proper guidance and structured
            learning. Contact us on WhatsApp to learn more about the Hifdh program and begin your
            journey.
          </p>
          <a
            href="https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20enquire%20about%20the%20Hifdh%20Program."
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
