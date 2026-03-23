import FaqSection from "@/components/FaqSection";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const metadata = {
  title: "Islamic Workshops & Lectures Online | An-Nafa Academy",
  description:
    "Join beneficial Islamic workshops and lectures conducted by An-Nafa Academy. Learn authentic Islamic knowledge through live online sessions based on Qur’an and Sunnah.",
  keywords: [
    "islamic workshops online",
    "islamic lectures online",
    "online islamic seminars",
    "learn islam online workshop",
    "islamic learning sessions",
  ],
};

const WORKSHOP_TYPES = [
  "📖 Understanding the Qur’an",
  "📚 Seerah of the Prophet ﷺ",
  "🕌 Islamic Manners & Character",
  "📜 Lessons from Hadith",
  "💡 Strengthening Imaan",
  "📘 Islamic Knowledge Essentials",
];

const WHY_ATTEND = [
  {
    title: "Live Interactive Sessions",
    body: "Students can attend live sessions and benefit directly from teachers.",
  },
  {
    title: "Authentic Islamic Knowledge",
    body: "All workshops are based on Qur’an and authentic Sunnah.",
  },
  {
    title: "Practical Learning",
    body: "Sessions focus on topics that help Muslims apply Islamic teachings in daily life.",
  },
  {
    title: "Open to Everyone",
    body: "Workshops are suitable for students, parents and anyone seeking beneficial knowledge.",
  },
];

const UPCOMING_WORKSHOPS = [];

const PAST_WORKSHOPS = [
  "Ramadan Workshop",
  "Islamic Manners for Kids",
  "Seerah Series",
  "Tajweed Improvement Session",
];

const WORKSHOP_GALLERY = [
  "Workshop Highlights",
  "Lecture Sessions",
  "Student Participation",
  "Knowledge Circles",
];

const WHO_SHOULD_ATTEND = [
  "Students who want to learn Islamic knowledge",
  "Parents who want beneficial programs for their children",
  "Muslims who want to strengthen their understanding of Islam",
  "Anyone seeking authentic Islamic guidance",
];

const JOIN_STEPS = [
  "Message us on WhatsApp",
  "Get workshop details",
  "Register for the session",
  "Attend the live workshop",
];

const WORKSHOP_FAQ = [
  {
    q: "Are workshops live or recorded?",
    a: "Workshops are conducted live so participants can benefit directly and interact during the session.",
    keywords: "live recorded workshop sessions",
  },
  {
    q: "How long are workshops?",
    a: "Workshop duration varies by topic, and full timing details are shared before registration.",
    keywords: "duration timing length",
  },
  {
    q: "Who can attend the workshops?",
    a: "Workshops are open to students, parents, and anyone seeking beneficial Islamic knowledge.",
    keywords: "who can attend audience",
  },
  {
    q: "How can I register?",
    a: "You can register by messaging us on WhatsApp and our team will guide you with the next steps.",
    keywords: "register signup whatsapp",
  },
];

export default function Workshops() {
  return (
    <>
      <section className="sc-hero" aria-label="Islamic workshops and lectures online">
        <div className="sc-hero-bg-ar" aria-hidden="true">وَرَشَات</div>
        <div className="container sc-hero-inner">
          <div className="cp-hero-line"></div>
          <span className="s-label fade-up">Live Workshops · Beneficial Lectures</span>
          <h1 className="km-hero-title fade-up">Islamic Workshops & Lectures Online</h1>
          <p className="cp-hero-body fade-up">
            An-Nafa Academy regularly conducts beneficial Islamic workshops, lectures and short courses
            that help students deepen their understanding of the Deen. These sessions cover important
            topics related to Qur'an, Islamic knowledge, character development and practical Islamic
            guidance.
          </p>
          <a
            href="https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20register%20for%20an%20Islamic%20workshop."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa fade-up"
            style={{ width: "fit-content", marginTop: "12px" }}
          >
            <WhatsAppIcon />
            Register on WhatsApp
          </a>
        </div>
      </section>

      <section className="section hf-about" aria-label="About our workshops">
        <div className="container">
          <div className="hf-about-grid">
            <div>
              <span className="s-label r-left">The Program</span>
              <h2 className="km-section-title r-left">About Our Workshops</h2>
              <p className="s-body r-left">
                Short courses and workshops provide an opportunity to learn important Islamic topics in
                a focused and practical way. These sessions are designed to benefit both beginners and
                students who already have some background in Islamic studies.
              </p>
              <p className="s-body r-left" style={{ marginTop: "16px" }}>
                Our workshops include live lectures, interactive sessions and guided learning that help
                students gain beneficial knowledge and strengthen their understanding of Islam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Types of workshops we conduct">
        <div className="container">
          <span className="s-label r-left">Types</span>
          <h2 className="km-section-title r-left" style={{ color: "var(--white)" }}>Types of Workshops We Conduct</h2>
          <div className="sc-benefits-grid" style={{ marginTop: 30 }}>
            {WORKSHOP_TYPES.map((topic) => (
              <div key={topic} className="sc-benefit-card r">
                <h3 className="sc-benefit-title">{topic}</h3>
                <p className="sc-benefit-body">
                  Topic-based workshop modules are flexible and may vary based on student needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sc-why" aria-label="Why attend our workshops">
        <div className="container">
          <div className="sc-why-header">
            <div>
              <span className="s-label r-left">Why Attend</span>
              <h2 className="km-section-title r-left">Why Attend Our Workshops</h2>
            </div>
          </div>
          <div className="sc-benefits-grid">
            {WHY_ATTEND.map((item) => (
              <div key={item.title} className="sc-benefit-card r">
                <h3 className="sc-benefit-title">{item.title}</h3>
                <p className="sc-benefit-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Upcoming workshops">
        <div className="container">
          <span className="s-label r-left">Upcoming</span>
          <h2 className="km-section-title r-left" style={{ color: "var(--white)" }}>Upcoming Workshops</h2>

          {UPCOMING_WORKSHOPS.length > 0 ? (
            <div className="sc-benefits-grid" style={{ marginTop: 30 }}>
              {UPCOMING_WORKSHOPS.map((workshop) => (
                <div key={workshop.title} className="sc-benefit-card r">
                  <h3 className="sc-benefit-title">{workshop.title}</h3>
                  <p className="sc-benefit-body"><strong>Date:</strong> {workshop.date}</p>
                  <p className="sc-benefit-body"><strong>Time:</strong> {workshop.time}</p>
                  <p className="sc-benefit-body"><strong>Instructor:</strong> {workshop.instructor}</p>
                  <p className="sc-benefit-body">{workshop.description}</p>
                  <a
                    href="https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20register%20for%20the%20upcoming%20workshop."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa"
                    style={{ width: "fit-content", marginTop: 14 }}
                  >
                    <WhatsAppIcon size={14} />
                    Register on WhatsApp
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ marginTop: 20 }}>
              <p className="s-body r-left">Upcoming workshops will be announced soon.</p>
              <p className="s-body r-left" style={{ marginTop: 8 }}>
                Join our WhatsApp to stay updated.
              </p>
              <a
                href="https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20please%20share%20upcoming%20workshop%20updates."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa r"
                style={{ width: "fit-content", marginTop: 16 }}
              >
                <WhatsAppIcon />
                Register on WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="section" aria-label="Our previous workshops">
        <div className="container">
          <span className="s-label r-left">Past Activities</span>
          <h2 className="km-section-title r-left" style={{ color: "var(--white)" }}>Our Previous Workshops</h2>
          <div className="km-why-grid" style={{ marginTop: 28 }}>
            {PAST_WORKSHOPS.map((item, index) => (
              <div key={item} className="km-why-item r">
                <div className="km-why-num">{String(index + 1).padStart(2, "0")}</div>
                <div className="km-why-text" style={{ fontSize: 15, color: "var(--ink)" }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Workshop gallery">
        <div className="container">
          <span className="s-label r-left">Gallery</span>
          <h2 className="km-section-title r-left" style={{ color: "var(--white)" }}>Workshop Gallery</h2>
          <div className="km-why-grid" style={{ marginTop: 28 }}>
            {WORKSHOP_GALLERY.map((item, index) => (
              <div key={item} className="km-why-item r">
                <div className="km-why-num">{String(index + 1).padStart(2, "0")}</div>
                <div className="km-why-text" style={{ fontSize: 15, color: "var(--ink)" }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sc-who" aria-label="Who should attend these workshops">
        <div className="container">
          <div className="sc-who-grid">
            <div>
              <span className="s-label fade-up">Who Should Attend</span>
              <h2 className="km-section-title fade-up stagger-1" style={{ color: "var(--white)" }}>
                Who Should Attend<br /><em>These Workshops</em>
              </h2>
            </div>
            <div className="sc-who-cards">
              {WHO_SHOULD_ATTEND.map((item, i) => (
                <div key={item} className="sc-who-card fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="sc-who-card-num">{String(i + 1).padStart(2, "0")}</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section sc-how" aria-label="How to join our workshops">
        <div className="container">
          <div className="sc-how-header">
            <span className="s-label r-left">How to Join</span>
            <h2 className="km-section-title r-left" style={{ color: "var(--ink)", marginBottom: 0 }}>
              How to Join Our Workshops
            </h2>
          </div>
          <div className="sc-how-steps">
            {JOIN_STEPS.map((step, index) => (
              <div key={step} className="km-how-card r">
                <div className="km-how-num">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="km-how-title">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection data={WORKSHOP_FAQ} />

      <section className="km-cta" aria-label="Join our next Islamic workshop">
        <div className="km-cta-bg-ar" aria-hidden="true">عِلْم</div>
        <div className="km-cta-overlay"></div>
        <div className="container km-cta-inner">
          <span className="s-label r" style={{ justifyContent: "center" }}>Begin Today</span>
          <h2 className="km-cta-title r">Join Our Next <em>Islamic Workshop</em></h2>
          <p className="km-cta-desc r">
            Beneficial knowledge brings barakah to our lives. Join our upcoming workshops and
            strengthen your understanding of Islam.
          </p>
          <a
            href="https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20register%20for%20the%20next%20Islamic%20workshop."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa r"
            style={{ margin: "0 auto" }}
          >
            <WhatsAppIcon />
            Register on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
