import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const metadata = {
  title: "About An-Nafa Academy | Authentic Islamic Education Online",
  description:
    "Learn about An-Nafa Academy, an online Islamic learning platform dedicated to providing authentic Islamic education based on the Qur'an and authentic Sunnah.",
  keywords: [
    "about an nafa academy",
    "online islamic academy",
    "authentic islamic education",
    "learn islam online",
    "islamic learning platform",
  ],
};

const METHODOLOGY = [
  "Teachings based on the Qur\u2019an and authentic Hadith",
  "Following the methodology of the Salaf-us-Saliheen",
  "Focus on authentic Islamic scholarship",
  "Emphasis on character and tarbiyyah",
  "Balanced approach to knowledge and practice",
];

const HIGHLIGHTS = [
  {
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    title: "Authentic Curriculum",
    body: "Every subject is grounded in the Qur\u2019an and authentic Sunnah, following the methodology of the righteous predecessors.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Qualified Teachers",
    body: "Our teachers hold authentic Islamic knowledge and bring experience and dedication to every class they conduct.",
  },
  {
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.883v6.234a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
    title: "Live Interactive Classes",
    body: "All sessions are taught live, allowing students to ask questions and receive real-time guidance from their teacher.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "For Kids and Adults",
    body: "Programs are designed for children in evening madrasah as well as adult brothers and sisters seeking structured Islamic learning.",
  },
  {
    icon: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11",
    title: "Structured Lessons",
    body: "Our curriculum is organised into clear, progressive stages so students build their knowledge step by step.",
  },
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Character and Tarbiyyah",
    body: "Beyond information, we focus on nurturing sincerity, good character and a genuine love for the Deen in every student.",
  },
];

const PROGRAMS = [
  "Evening Madrasah for Kids",
  "Islamic Classes for Sisters",
  "Islamic Classes for Brothers",
  "Hifdh Programs",
  "Qur\u2019an Recitation Improvement (Tasheeh Tilawah)",
  "Islamic Workshops and Lectures",
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

export default function AboutPage() {
  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <section className="ab-hero" aria-label="About An-Nafa Academy">
        <div className="ab-hero-bg-ar" aria-hidden="true">النَّفَع</div>
        <div className="container ab-hero-inner">
          <div className="cp-hero-line"></div>
          <span className="s-label fade-up">Online Islamic Learning Platform</span>
          <h1 className="km-hero-title fade-up stagger-1">
            About<br /><em>An-Nafa Academy</em>
          </h1>
          <p className="cp-hero-body fade-up stagger-2">
            An-Nafa Academy is an online Islamic learning platform dedicated to providing authentic
            Islamic education for students of all age groups. Our mission is to make beneficial
            Islamic knowledge accessible to everyone through structured and engaging online classes.
          </p>
          <p className="cp-hero-body fade-up stagger-3" style={{ marginTop: 0 }}>
            Through live interactive sessions, students are able to learn the Deen from the comfort
            of their homes while benefiting from qualified teachers and a supportive learning
            environment.
          </p>
        </div>
      </section>

      {/* ═══ MISSION + MOTTO ═══ */}
      <section className="section ab-mission" aria-label="Our mission">
        <div className="container">
          <div className="ab-mission-grid">
            <div className="ab-mission-main">
              <span className="s-label r-left">Our Mission</span>
              <h2 className="km-section-title r-left">
                Transforming Lives Through<br /><em>Islamic Education</em>
              </h2>
              <p className="s-body r-left">
                Our mission is to transform lives through accessible and authentic Islamic education.
                We aim to help students develop a strong understanding of Islam while nurturing good
                character, sincerity and love for the Deen.
              </p>
              <p className="s-body r-left" style={{ marginTop: "16px" }}>
                By using modern online learning methods, we make it possible for students from
                different places to access structured Islamic education that is rooted in authentic
                sources.
              </p>
            </div>
            <div className="ab-motto-card r-right">
              <div className="ab-motto-ar" aria-hidden="true">النَّفَع</div>
              <span className="s-label" style={{ justifyContent: "flex-start" }}>Our Motto</span>
              <p className="ab-motto-text">
                Transforming lives through<br /><em>E-learning.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ METHODOLOGY ═══ */}
      <section className="section ab-method" aria-label="Our teaching methodology">
        <div className="container">
          <div className="ab-method-grid">
            <div>
              <span className="s-label r-left">Methodology</span>
              <h2 className="km-section-title r-left">
                Our Teaching<br /><em>Methodology</em>
              </h2>
              <p className="s-body r-left">
                At An-Nafa Academy, our teachings are based upon the Qur&#39;an and authentic books of
                Hadith. We follow the methodology of the Salaf-us-Saliheen (the righteous
                predecessors) and strive to present Islamic knowledge in a clear and authentic manner.
              </p>
              <p className="s-body r-left" style={{ marginTop: "16px" }}>
                Our goal is not only to provide information but also to help students understand how
                to practice Islam correctly in their daily lives.
              </p>
            </div>
            <ul className="km-curr-list ab-method-list" aria-label="Key principles">
              {METHODOLOGY.map((item) => (
                <li key={item} className="km-curr-item r">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ WHAT MAKES US DIFFERENT ═══ */}
      <section className="section ab-diff" aria-label="What makes An-Nafa Academy different">
        <div className="container">
          <div className="sc-why-header">
            <div>
              <span className="s-label r-left">Why An-Nafa</span>
              <h2 className="km-section-title r-left">
                What Makes An-Nafa<br /><em>Academy Different</em>
              </h2>
            </div>
            <p className="s-body r-right" style={{ paddingTop: 8 }}>
              Many people today are searching for reliable sources of Islamic knowledge. At An-Nafa
              Academy, we aim to provide a learning environment where students can study authentic
              Islamic teachings with clarity and confidence.
            </p>
          </div>
          <div className="sc-benefits-grid">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="sc-benefit-card r">
                <div className="sc-benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={h.icon} />
                  </svg>
                </div>
                <h3 className="sc-benefit-title">{h.title}</h3>
                <p className="sc-benefit-body">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LEARNING APPROACH ═══ */}
      <section className="section ab-approach" aria-label="Our learning approach">
        <div className="container">
          <div className="ab-approach-grid">
            <div className="ab-approach-text">
              <span className="s-label r-left">Our Approach</span>
              <h2 className="km-section-title r-left">
                Our Learning<br /><em>Approach</em>
              </h2>
              <p className="s-body r-left">
                We believe that Islamic education should be accessible, structured and engaging. Our
                online classes allow students to learn comfortably from their homes while still
                benefiting from teacher guidance and interactive lessons.
              </p>
              <p className="s-body r-left" style={{ marginTop: "16px" }}>
                Through live sessions, students are able to ask questions, clarify doubts and develop
                a deeper understanding of Islamic teachings.
              </p>
            </div>
            <div className="ab-approach-visual r-right" aria-hidden="true">
              <div className="ab-approach-ar">تَعَلَّمْ</div>
              <div className="ab-approach-sub">Learn &middot; Grow &middot; Practice</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROGRAMS ═══ */}
      <section className="section ab-programs" aria-label="Who our programs are for">
        <div className="container">
          <div className="sc-who-grid">
            <div>
              <span className="s-label fade-up">For Everyone</span>
              <h2 className="km-section-title fade-up stagger-1" style={{ color: "var(--white)" }}>
                Who Our Programs<br /><em>Are For</em>
              </h2>
              <p className="sc-who-body fade-up stagger-2">
                An-Nafa Academy offers programs designed for different groups of learners. Whether
                you are enrolling your child or seeking personal Islamic education, we have a
                structured program suited to your needs.
              </p>
            </div>
            <div className="sc-who-cards">
              {PROGRAMS.map((item, i) => (
                <div key={item} className="sc-who-card fade-up" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <div className="sc-who-card-num">{String(i + 1).padStart(2, "0")}</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VISION ═══ */}
      <section className="section ab-vision" aria-label="Our vision">
        <div className="container ab-vision-inner">
          <span className="s-label r" style={{ justifyContent: "center" }}>Our Vision</span>
          <h2 className="km-section-title ab-vision-title r">
            Building a Community of<br /><em>Knowledge and Practice</em>
          </h2>
          <p className="ab-vision-body r">
            Our vision is to help Muslims strengthen their connection with Allah by providing access
            to authentic Islamic knowledge. We aim to build a community of learners who are committed
            to understanding and practicing Islam correctly.
          </p>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="km-cta" aria-label="Begin your Islamic learning journey">
        <div className="km-cta-bg-ar" aria-hidden="true">ابْدَأْ</div>
        <div className="km-cta-overlay"></div>
        <div className="container km-cta-inner">
          <span className="s-label r" style={{ justifyContent: "center" }}>Begin Today</span>
          <h2 className="km-cta-title r">
            Begin Your Journey of<br />Islamic <em>Learning</em>
          </h2>
          <p className="km-cta-desc r">
            Whether you want your child to start learning the Qur&#39;an or you want to deepen your own
            understanding of Islam, An-Nafa Academy is here to support your learning journey.
          </p>
          <a
            href="https://wa.me/917829950311"
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
