import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const metadata = {
  title:
    "Online Evening Madrasah for Kids | Islamic Classes for Children | An-Nafa Academy",
  description:
    "Enroll your child in An-Nafa Academy’s Evening Madrasah program for kids aged 4–10. Live online Islamic classes covering Qur’an reading, Islamic studies, adhkar, and character development.",
  keywords: [
    "online madrasah for kids",
    "kids islamic classes online",
    "quran classes for kids",
    "islamic education for children",
    "learn quran online for kids",
  ],
};

const SUBJECTS = [
  {
    title: "Qaida",
    body: "Children learn the Arabic alphabet and pronunciation, enabling them to read the Qur’an correctly.",
  },
  {
    title: "Basic Hifdh",
    body: "Students memorize short surahs and selected verses from the Qur’an while strengthening their recitation.",
  },
  {
    title: "Arabic Learning",
    body: "Basic Arabic lessons help students understand Islamic terminology and improve Qur’an reading.",
  },
  {
    title: "Islamic Studies",
    body: "Children learn fundamental Islamic teachings including beliefs, acts of worship, and Islamic values.",
  },
];

const ADDITIONAL_LEARNING = [
  "Morning and evening adhkar",
  "Stories from the Qur’an and the life of Prophet Muhammad ﷺ",
  "Islamic manners and character development",
  "Understanding the pillars of Islam and Eeman",
];

const BOOK_TOPICS = [
  "Daily supplications",
  "Morning and evening adhkar",
  "Tawheed and the Names of Allah",
  "Pillars of Islam and Pillars of Eeman",
  "Stories from the Qur’an",
  "Ahadees and Seerah of Prophet Muhammad ﷺ",
  "Islamic manners and Sunnah acts",
  "Lessons from the Qur’an",
];

const TEACHING_FEATURES = [
  "Live interactive classes",
  "Small group learning environment",
  "Individual attention for every child",
  "Daily revision of lessons",
  "Weekly tests and learning activities",
  "Educational quizzes and puzzles",
  "Competitions with rewards to motivate students",
  "Special focus on tarbiyyah and character building",
];

const BENEFITS = [
  "Children develop love for the Qur’an",
  "Students learn essential Islamic knowledge",
  "Islamic values and manners are taught from an early age",
  "Classes encourage participation and curiosity",
  "Teachers guide students with patience and care",
];

const BATCHES = ["5:00 PM – 6:00 PM", "6:00 PM – 7:00 PM", "7:00 PM – 8:00 PM"];

export default function EveningMadrasahPage() {
  return (
    <>
      <section className="km-hero" aria-label="Evening Madrasah for Kids">
        <div className="km-hero-bg-ar" aria-hidden="true">مَدْرَسَة</div>
        <div className="container km-hero-inner">
          <div className="cp-hero-line"></div>
          <span className="s-label fade-up">Kids Program · Ages 4–10</span>
          <h1 className="km-hero-title fade-up stagger-1">
            Evening Madrasah for Kids (Age 4–10)
          </h1>
        </div>
      </section>

      <section className="section km-learn" aria-label="Introduction">
        <div className="container">
          <div className="km-learn-grid" style={{ alignItems: "stretch" }}>
            <div className="km-learn-text" style={{ height: "100%", justifyContent: "center" }}>
              <span className="s-label r-left">Introduction</span>
              <h2 className="km-section-title r-left">
                Nurturing Young Hearts with<br /><em>Authentic Islamic Knowledge</em>
              </h2>
              <p className="s-body r-left">
                The Evening Madrasah program at An-Nafa Academy is designed to nurture young minds with authentic Islamic knowledge from an early age. Our structured program helps children learn their Deen while developing good character, manners, and love for Islam.
              </p>
              <p className="s-body r-left" style={{ marginTop: "16px" }}>
                Through live interactive classes and a well-designed curriculum, students are guided step-by-step in learning Qur’an reading, essential Islamic knowledge, daily supplications, and important values that shape their Islamic identity.
              </p>
            </div>
            <div className="cp-course-img img-placeholder-wrap r" style={{ minHeight: 340 }}>
              <img
                src="/Images/evening%20madrasah/kid_with_book_in_madrasa_mosque.jpg"
                alt="Kid with book in madrasa mosque"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--ink)" }} aria-label="Why this program matters">
        <div className="container">
          <div className="why-header">
            <div>
              <span className="s-label r-left">Why This Program Matters</span>
              <h2 className="why-title r-left">Building a Strong Islamic<br />Foundation for <em>Children</em></h2>
            </div>
            <p className="why-intro r-right">
              Teaching children about Islam at a young age helps them grow with strong faith and understanding of their religion. When children learn the Qur’an, understand Islamic values, and develop good character early in life, they become confident Muslims who carry these values throughout their lives.
              <br /><br />
              Our Evening Madrasah program aims to guide children with beneficial knowledge that nurtures both their minds and their hearts.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Curriculum of the Evening Madrasah">
        <div className="container">
          <span className="s-label r-left">What Children Will Learn</span>
          <h2 className="km-section-title" style={{ color: "var(--white)" }}>
            Curriculum of the <em style={{ color: "var(--white)", fontWeight: 600 }}>Evening Madrasah</em>
          </h2>
          <p className="s-body r-left" style={{ maxWidth: 760 }}>
            Our curriculum is carefully designed to help children learn essential Islamic knowledge step by step in a structured and engaging environment.
          </p>

          <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", background: "var(--sand3)" }}>
            {SUBJECTS.map((subject) => (
              <div key={subject.title} className="sc-benefit-card r">
                <h3 className="sc-benefit-title">{subject.title}</h3>
                <p className="sc-benefit-body">{subject.body}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 44, borderTop: "1px solid var(--sand3)", paddingTop: 36 }}>
            <span className="s-label r-left">Additional Learning</span>
            <ul className="km-curr-list" aria-label="Additional learning topics">
              {ADDITIONAL_LEARNING.map((item) => (
                <li key={item} className="km-curr-item r">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section sc-how" aria-label="Academy Islamic books">
        <div className="container">
          <div className="sc-how-content" style={{ display: "flex", gap: 60, alignItems: "stretch", flexWrap: "wrap" }}>
            <div className="r" style={{ flex: "1 1 420px", display: "flex", flexDirection: "column" }}>
              <span className="s-label r-left">Our Academy Islamic Books</span>
              <h2 className="km-section-title r-left" style={{ color: "var(--ink)", marginBottom: 0 }}>
                Academy-Designed Islamic<br /><em>Learning Books</em>
              </h2>
              <p className="sc-how-body r" style={{ marginTop: 20 }}>
              An-Nafa Academy develops its own Islamic learning books designed to meet the educational needs of children at different stages.
              <br /><br />
              These books provide a structured and engaging syllabus that helps students understand important Islamic concepts clearly. Currently these books are provided to students in digital PDF format.
            </p>
            </div>
            <div className="cp-course-img r" style={{ minHeight: 280, flex: "1 1 420px" }}>
              <img
                src="/Images/evening%20madrasah/kids_books.jpg"
                alt="Our Academy Islamic Books"
                loading="lazy"
              />
            </div>
          </div>

          <h3 className="km-how-title r" style={{ marginBottom: 16 }}>Topics Covered in the Books</h3>
          <div className="km-why-grid">
            {BOOK_TOPICS.map((topic, index) => (
              <div key={topic} className="km-why-item r">
                <div className="km-why-num">{String(index + 1).padStart(2, "0")}</div>
                <div className="km-why-text">{topic}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Our teaching approach">
        <div className="container">
          <span className="s-label r-left">Our Teaching Approach</span>
          <h2 className="km-section-title" style={{ color: "var(--white)" }}>
            An Engaging and Structured<br /><em style={{ color: "var(--white)", fontWeight: 600 }}>Learning Environment</em>
          </h2>

          <div className="km-why-grid" style={{ marginTop: 28 }}>
            {TEACHING_FEATURES.map((feature, index) => (
              <div className="km-why-item r" key={feature}>
                <div className="km-why-num">{String(index + 1).padStart(2, "0")}</div>
                <div className="km-why-text">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="km-benefits section" aria-label="Benefits for children">
        <div className="container km-benefits-grid">
          <div className="km-benefits-content">
            <span className="s-label r-left">Benefits for Children</span>
            <h2 className="km-section-title white r-left">
              Benefits of the Evening<br /><em>Madrasah Program</em>
            </h2>
            <div className="km-benefits-stats">
              {BENEFITS.map((item) => (
                <div key={item} className="km-benefits-stat r">
                  <div className="km-benefits-stat-dot"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="cp-course-img img-placeholder-wrap r" style={{ minHeight: 320 }}>
            <img
              src="/Images/evening%20madrasah/kids_reading_quran.png"
              alt="Kids reading Quran"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section" aria-label="Class timings">
        <div className="container">
          <span className="s-label r-left">Class Timings</span>
          <h2 className="km-section-title" style={{ color: "var(--white)" }}>Available Class <em style={{ color: "var(--white)", fontWeight: 600 }}>Timings</em></h2>
          <p className="s-body r-left" style={{ maxWidth: 760 }}>
            Evening Madrasah classes are scheduled in the evening so that children can attend comfortably after school.
          </p>

          <div className="km-details-cards" style={{ marginTop: 30 }}>
            {BATCHES.map((batch) => (
              <div key={batch} className="km-detail-card r">
                <div className="km-detail-label">Example Batch</div>
                <div className="km-detail-value">{batch}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sc-how" aria-label="Free trial class">
        <div className="container">
          <div className="sc-how-header">
            <div>
              <span className="s-label r-left">Free Trial Class</span>
              <h2 className="km-section-title r-left" style={{ color: "var(--ink)", marginBottom: 0 }}>
                Try a <em>Free Trial Class</em>
              </h2>
            </div>
          </div>
          <div className="sc-how-content">
            <p className="sc-how-body r">
              Parents can request a free trial class to understand how the learning sessions are conducted and how their child can benefit from the program.
            </p>
            <a href="/admissions" className="btn-wa r" style={{ width: "fit-content", marginTop: 8 }}>
              Book Free Trial Class
            </a>
          </div>
        </div>
      </section>

      <section className="sc-how" style={{ padding: "clamp(36px,4vw,60px) 0 clamp(80px,10vw,160px)" }} aria-label="Admission process">
        <div className="container">
          <div className="sc-how-header">
            <div>
              <span className="s-label r-left">Admission Process</span>
              <h2 className="km-section-title r-left" style={{ color: "var(--ink)", marginBottom: 0 }}>
                How to Enroll <em>Your Child</em>
              </h2>
            </div>
          </div>
          <div className="sc-how-steps">
            {[
              {
                n: "01",
                t: "Fill Admission Form",
                b: "Fill out the online admission form on our website.",
              },
              {
                n: "02",
                t: "Confirmation Call",
                b: "An academy representative will contact you within 24 hours to confirm the details.",
              },
              {
                n: "03",
                t: "Registration & Payment",
                b: "Complete the registration and monthly fee payment.",
              },
              {
                n: "04",
                t: "Start Learning",
                b: "Your child will be added to the respective class group and can begin learning.",
              },
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

      <section className="km-cta" aria-label="Admissions open">
        <div className="km-cta-bg-ar" aria-hidden="true">مَدْرَسَة</div>
        <div className="km-cta-overlay"></div>
        <div className="container km-cta-inner">
          <span className="s-label r" style={{ justifyContent: "center" }}>Admissions Open</span>
          <h2 className="km-cta-title r">Admissions Open for <em>New Batches</em></h2>
          <p className="km-cta-desc r">
            Admissions are currently open for the upcoming batch of the Evening Madrasah program. Seats are limited to ensure proper attention for each student.
          </p>
          <a
            href="/admissions"
            className="btn-wa r"
            style={{ margin: "0 auto" }}
          >
            Enroll Your Child Today
          </a>
        </div>
      </section>
    </>
  );
}
