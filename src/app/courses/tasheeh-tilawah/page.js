import FaqSection from "@/components/FaqSection";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const metadata = {
  title: "Tasheeh Tilawah | Qur'an Recitation Improvement | An-Nafa Academy",
  description:
    "Improve your Qur'an recitation with Tasheeh Tilawah classes at An-Nafa Academy. Correct your tajweed and pronunciation with qualified teachers online.",
  keywords: [
    "tasheeh tilawah",
    "quran recitation correction",
    "tajweed correction classes",
    "quran reading improvement",
    "online quran recitation classes for sisters",
  ],
};

const INCLUDES = [
  "Individual recitation to the teacher",
  "Correction of tajweed mistakes",
  "Guidance on proper pronunciation of Arabic letters",
  "Improving fluency in Qur’an reading",
  "Consistent recitation practice",
  "Small group classes (around 8–10 students)",
];

const BENEFITS = [
  {
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.883v6.234a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
    title: "Live Recitation Sessions",
    body: "Students recite directly to the teacher during live classes and receive immediate correction and guidance.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Qualified Teacher Guidance",
    body: "Teachers listen carefully to each student’s recitation and help correct mistakes in pronunciation and tajweed.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Small Class Groups",
    body: "Classes are conducted in small groups so that every student receives proper attention and time to recite.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Gradual Improvement",
    body: "With consistent recitation and correction, students gradually develop stronger fluency and accuracy.",
  },
  {
    icon: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
    title: "Comfortable Learning Environment",
    body: "Classes are conducted in a respectful and supportive environment designed for sisters to focus on improving their Qur’an recitation.",
  },
];

const SUITABLE_FOR = [
  "Students who want to improve their Qur’an recitation",
  "Sisters who want to correct tajweed mistakes",
  "Students who can read Qur’an but want to improve fluency",
  "Individuals seeking guided recitation practice",
];

const TASHEEH_FAQ = [
  {
    q: "Are the classes live or recorded?",
    a: "All classes are conducted live so students can recite directly to the teacher and receive correction.",
    keywords: "live recorded recitation correction",
  },
  {
    q: "Do I need to know how to read Qur’an before joining?",
    a: "Yes. Students should already know how to read the Qur’an before joining the Tasheeh Tilawah classes.",
    keywords: "read quran prerequisite before joining",
  },
  {
    q: "How many students are in each class?",
    a: "Classes usually consist of small groups of around 8 to 10 students to ensure individual attention.",
    keywords: "class size students group",
  },
  {
    q: "How can I enroll in the classes?",
    a: "You can message us on WhatsApp and our team will guide you through the enrollment process.",
    keywords: "enroll admission join",
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

export default function TasheehTilawah() {
  return (
    <>
      <section className="hf-hero" aria-label="Tasheeh Tilawah classes for sisters">
        <div className="hf-hero-bg-ar" aria-hidden="true">تَجْوِيد</div>
        <div className="container hf-hero-inner">
          <div className="cp-hero-line"></div>
          <span className="s-label fade-up">For Sisters · Live Qur'an Recitation Classes</span>
          <h1 className="km-hero-title fade-up stagger-1">
            Tasheeh Tilawah<br />Classes for <em>Sisters</em>
          </h1>
          <p className="cp-hero-body fade-up stagger-2">
            The Tasheeh Tilawah classes at An-Nafa Academy are designed for sisters who want to
            improve and correct their Qur’an recitation. Many students are able to read the Qur’an
            but may still struggle with proper pronunciation, tajweed rules, or fluency.
          </p>
          <p className="cp-hero-body fade-up" style={{ marginTop: 16 }}>
            These classes help students refine their recitation by reading directly to the teacher
            and receiving correction and guidance. The goal is to help students recite the Qur’an
            correctly and confidently while strengthening their connection with the words of Allah.
          </p>
          <a
            href="https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20enquire%20about%20the%20Tasheeh%20Tilawah%20classes."
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

      <section className="section hf-about" aria-label="About the Tasheeh Tilawah Classes">
        <div className="container">
          <div className="hf-about-grid">
            <div>
              <span className="s-label r-left">The Program</span>
              <h2 className="km-section-title r-left">
                About the<br /><em>Tasheeh Tilawah Classes</em>
              </h2>
              <p className="s-body r-left">
                Tasheeh Tilawah focuses on correcting and improving Qur’an recitation. Students recite
                individually to the teacher during live sessions so that mistakes can be identified and
                corrected immediately.
              </p>
              <p className="s-body r-left" style={{ marginTop: "16px" }}>
                Each class is conducted in small groups to ensure that every student receives personal
                attention and sufficient time to recite.
              </p>
              <p className="s-body r-left" style={{ marginTop: "16px" }}>
                Through consistent recitation practice and teacher guidance, students gradually improve
                their pronunciation, fluency and confidence when reading the Qur’an.
              </p>
            </div>
            <div>
              <span className="s-label r-left" style={{ marginBottom: "16px" }}>What the Classes Include</span>
              <ul className="km-curr-list" aria-label="What the classes include">
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

      <div className="sc-split-visual" aria-hidden="true">
        <img
          src="/Images/tajweed-qur-colorful.jpg"
          alt="Tajweed colorful Quran"
          loading="lazy"
        />
        <div className="sc-split-overlay"></div>
        <div className="sc-split-caption">
          <span className="sc-split-ar">تَجْوِيد</span>
          <span className="sc-split-sub">Correct Qur’an Recitation</span>
        </div>
      </div>

      <section className="section sc-why" aria-label="Benefits of joining Tasheeh Tilawah classes">
        <div className="container">
          <div className="sc-why-header">
            <div>
              <span className="s-label r-left">Why Join</span>
              <h2 className="km-section-title r-left">
                Benefits of Joining<br /><em>Tasheeh Tilawah Classes</em>
              </h2>
            </div>
            <p className="s-body r-right" style={{ paddingTop: 8 }}>
              Correct recitation of the Qur’an is essential for every Muslim. These classes help
              students improve their recitation while building confidence and accuracy in reading the
              Qur’an.
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

      <section className="section sc-who" aria-label="Who can join these classes">
        <div className="container">
          <div className="sc-who-grid">
            <div>
              <span className="s-label fade-up">Open To</span>
              <h2 className="km-section-title fade-up stagger-1" style={{ color: "var(--white)" }}>
                Who Can Join<br /><em>These Classes</em>
              </h2>
              <p className="sc-who-body fade-up stagger-2">
                The Tasheeh Tilawah classes are suitable for sisters who want to improve their Qur’an
                recitation and correct mistakes in pronunciation.
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
              Classes are conducted live online so students can recite directly to the teacher and
              receive correction during the session.
            </p>
            <p className="sc-how-body r" style={{ transitionDelay: "0.1s" }}>
              This allows teachers to guide students effectively while helping them improve their
              recitation through regular practice.
            </p>
          </div>
          <div className="sc-how-steps">
            {[
              { n: "01", t: "Message Us on WhatsApp", b: "Contact our team on WhatsApp to enquire about the Tasheeh Tilawah classes and available batches." },
              { n: "02", t: "Recitation Assessment", b: "The teacher may listen to a short recitation to understand the student’s current reading level." },
              { n: "03", t: "Join Live Classes", b: "Attend live sessions where students recite individually to the teacher." },
              { n: "04", t: "Improve Recitation", b: "Through consistent recitation practice and teacher guidance, students improve their Qur’an recitation and pronunciation." },
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

      <section className="section hf-importance" aria-label="The Importance of correct Qur'an recitation">
        <div className="container">
          <div className="hf-importance-inner">
            <div className="hf-importance-ar" aria-hidden="true">
              تِلَاوَة<br />صَحِيحَة
            </div>
            <div className="hf-importance-text">
              <span className="s-label fade-up">Its Importance</span>
              <h2 className="km-section-title fade-up stagger-1" style={{ color: "var(--white)" }}>
                The Importance of<br /><em>Correct Qur’an Recitation</em>
              </h2>
              <p className="hf-importance-body fade-up stagger-2">
                The Qur’an is the speech of Allah and should be recited with care and correctness.
                Learning to recite the Qur’an properly helps preserve the beauty and accuracy of its
                recitation.
              </p>
              <p className="hf-importance-body fade-up stagger-3">
                Through Tasheeh Tilawah classes, students refine their reading and strengthen their
                connection with the Qur’an while ensuring that the words of Allah are recited correctly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection data={TASHEEH_FAQ} />

      <section className="km-cta" aria-label="Improve your Qur’an recitation">
        <div className="km-cta-bg-ar" aria-hidden="true">تِلَاوَة</div>
        <div className="km-cta-overlay"></div>
        <div className="container km-cta-inner">
          <span className="s-label r" style={{ justifyContent: "center" }}>Begin Today</span>
          <h2 className="km-cta-title r">
            Improve Your<br /><em>Qur’an Recitation</em>
          </h2>
          <p className="km-cta-desc r">
            Take the step toward improving your Qur’an recitation with proper guidance and correction.
          </p>
          <p className="km-cta-desc r" style={{ marginTop: 10 }}>
            Message us on WhatsApp and our team will help you join the Tasheeh Tilawah classes.
          </p>
          <a
            href="https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20enquire%20about%20the%20Tasheeh%20Tilawah%20classes."
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
