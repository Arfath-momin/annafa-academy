import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "An-Nafa Academy | Authentic Islamic Education Online",
  description:
    "An-Nafa Academy provides authentic Islamic education online through live interactive classes for kids and adults based on the Qur'an and authentic Sunnah.",
  openGraph: {
    title: "An-Nafa Academy | Authentic Islamic Education Online",
    description:
      "Learn the Deen from home. Live classes built upon the Qur'an and authentic Sunnah.",
  },
};

/* ── Star SVG helper ── */
function Star() {
  return (
    <svg className="t-star" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function FiveStars() {
  return (
    <div className="t-stars">
      <Star /><Star /><Star /><Star /><Star />
    </div>
  );
}

/* ── Check icon helper ── */
function Check() {
  return (
    <div className="check-icon" aria-hidden="true">
      <svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5" /></svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <HeroSection />

      {/* ═══ MARQUEE ═══ */}
      <Marquee />

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="testimonials" className="section">
        <div className="container">
          <div className="testimonials-header">
            <span className="s-label r">What Parents Say</span>
            <h2 className="testimonials-title r">Words from Our<br /><em>Community</em></h2>
          </div>
          <div className="t-grid">
            <div className="t-card r">
              <div className="t-avatar">U</div>
              <div className="t-quote">&ldquo;</div>
              <p className="t-text">Alhamdulillah my children love the classes and are learning happily. The teachers are so kind and patient. My son now recites his duas every morning without being reminded.</p>
              <div className="t-name">Umm Ibrahim</div>
              <div className="t-role">Parent · Evening Madrasah</div>
              <FiveStars />
            </div>
            <div className="t-card r">
              <div className="t-avatar">M</div>
              <div className="t-quote">&ldquo;</div>
              <p className="t-text">The sisters&#39; class is incredibly well-structured. I&#39;ve learned more in a few months than years of self-study. The teacher explains with such clarity and patience — a true blessing.</p>
              <div className="t-name">Sister Mariam</div>
              <div className="t-role">Islamic Classes · Sisters</div>
              <FiveStars />
            </div>
            <div className="t-card r">
              <div className="t-avatar">A</div>
              <div className="t-quote">&ldquo;</div>
              <p className="t-text">My son&#39;s Qur&#39;an recitation has improved massively. The tasheeh classes are focused and the teacher gives personalised corrections every session. JazakAllahu khayran.</p>
              <div className="t-name">Abu Yusuf</div>
              <div className="t-role">Parent · Tasheeh Tilawah</div>
              <FiveStars />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT / OUR FOUNDATION ═══ */}
      <section id="trust" className="section" style={{ padding: 0 }}>
        <div className="trust-layout">
          <div className="trust-left">
            <div className="trust-left-bg-text">النافع</div>
            <div className="trust-left-pattern"></div>
            <img
              src="/Images/Boy-reading-Quran-with-golden-glow.png"
              alt=""
              className="trust-left-boy-img"
              aria-hidden="true"
            />
            <span className="s-label r-left">Our Foundation</span>
            <h2 className="trust-heading r-left">
              Knowledge that<br /><strong>illuminates</strong><br />the heart.
            </h2>
            <p className="trust-body r-left">Every class at An-Nafa Academy is grounded in the Qur&#39;an and authentic Sunnah. We don&#39;t just teach information — we build a relationship with the Deen.</p>
          </div>
          <div className="trust-right">
            <div className="trust-card r">
              <div className="trust-icon-wrap">
                <svg className="icon-svg" viewBox="0 0 24 24">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div>
                <div className="trust-card-title">Authentic Knowledge</div>
                <p className="trust-card-text">Grounded in Qur&#39;an and authentic Hadith, taught with the methodology of the Salaf.</p>
              </div>
            </div>
            <div className="trust-card r">
              <div className="trust-icon-wrap">
                <svg className="icon-svg" viewBox="0 0 24 24">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <div className="trust-card-title">Qualified Teachers</div>
                <p className="trust-card-text">Experienced educators trained in authentic Islamic sciences with patience and care.</p>
              </div>
            </div>
            <div className="trust-card r">
              <div className="trust-icon-wrap">
                <svg className="icon-svg" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="15" height="14" rx="2" />
                  <path d="m22 7-5 5 5 5V7z" />
                </svg>
              </div>
              <div>
                <div className="trust-card-title">Live Interactive Classes</div>
                <p className="trust-card-text">Real-time engagement. Your questions answered. Your progress monitored, every session.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY PARENTS CHOOSE US ═══ */}
      <section id="why" className="section">
        <div className="container">
          <div className="why-bg-num">08</div>
          <div className="why-header">
            <div>
              <span className="s-label r-left">Why An-Nafa</span>
              <h2 className="why-title r-left">Why Students<br />& Parents<br />Choose <em>Us</em></h2>
            </div>
            <p className="why-intro r-right">A learning environment built with intention — not just for information, but for closeness to Allah, good character, and love of the Deen.</p>
          </div>
          <div className="why-grid">
            {[
              { icon: <path d="M15 10l4.553-2.069A1 1 0 0121 8.883v6.234a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />, n: "01", text: "Live interactive classes — not pre-recorded content" },
              { icon: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></>, n: "02", text: "Learn comfortably from your own home, anywhere in the world" },
              { icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />, n: "03", text: "Qualified teachers with authentic Islamic methodology" },
              { icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>, n: "04", text: "Specially trained, patient teachers for young children" },
              { icon: <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></>, n: "05", text: "Individual attention in small, focused class settings" },
              { icon: <><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></>, n: "06", text: "Weekly tests, revision activities, and structured progression" },
              { icon: <><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" /><path d="M15 7a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M12 2l.894 2.447A1 1 0 0013.838 5h2.587a1 1 0 01.588 1.809l-2.094 1.522a1 1 0 00-.363 1.118L15.447 12" /></>, n: "07", text: "Competitions, rewards, and a motivating learning community" },
              { icon: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />, n: "08", text: "Deep focus on tarbiyyah and building good Islamic character" },
            ].map((item) => (
              <div className="why-item r" key={item.n}>
                <svg className="why-item-icon" viewBox="0 0 24 24" fill="none" stroke="rgba(183,152,61,0.5)" strokeWidth="1.5">{item.icon}</svg>
                <div className="why-n">{item.n}</div>
                <div className="why-text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHILDREN'S PROGRAM ═══ */}
      <section id="kids" aria-label="Children's Evening Madrasah program">
        <div className="kids-split">
          <div className="kids-visual">
            <img src="/Images/kids-madrasa-home.png" alt="Children learning in evening madrasah" loading="lazy" />
            <div className="kids-overlay" aria-hidden="true"></div>
            <div className="kids-age-badge" aria-label="Ages 4 to 10">
              <span>4–10</span>
              Years old
            </div>
          </div>
          <div className="kids-content">
            <p className="s-eyebrow fade-up">Children&#39;s Program</p>
            <h2 className="kids-title fade-up stagger-1">Evening Madrasah<br />for <em>Young Learners</em></h2>
            <p className="kids-desc fade-up stagger-2">A structured, engaging online program that builds Islamic foundations in your child — Qur&#39;an, character, knowledge, and love of the Deen. Taught by teachers trained specifically to work with young children.</p>
            <ul className="kids-curriculum fade-up stagger-3" aria-label="Curriculum includes">
              <li><Check />Qaida &amp; Qur&#39;an reading</li>
              <li><Check />Basic Hifdh (memorisation)</li>
              <li><Check />Islamic studies &amp; fiqh basics</li>
              <li><Check />Morning &amp; evening adhkar</li>
              <li><Check />Stories from Qur&#39;an &amp; Seerah</li>
              <li><Check />Islamic manners &amp; etiquette</li>
            </ul>
            <a href="https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20enquire%20about%20the%20Evening%20Madrasah%20for%20my%20child." target="_blank" rel="noopener noreferrer" className="btn-wa fade-up stagger-4" style={{ width: "fit-content" }}>
              Enquire about Kids Program
            </a>
          </div>
        </div>
      </section>

      {/* ═══ ALL COURSES ═══ */}
      <section id="courses" className="section">
        <div className="container">
          <div className="courses-header">
            <div>
              <span className="s-label r-left">What We Offer</span>
              <h2 className="courses-title r-left">Our <em>Courses</em></h2>
            </div>
            <p className="courses-subtitle r-right">From foundational Qur&#39;an to in-depth Islamic sciences — a course for every learner, every age.</p>
          </div>
          <div className="courses-track-wrap">
            <div className="courses-track">
              {[
                { img: "/Images/home-course-grid/1.png", alt: "Evening Madrasah", tag: "Ages 4–10", num: "01", cat: "Children&#39;s Program", name: "Evening Madrasah for Kids", desc: "A structured program for young Muslims — Qur&#39;an, Islamic studies, tarbiyyah and more.", href: "https://wa.me/917829950311" },
                { img: "/Images/home-course-grid/2.png", alt: "Sisters Classes", tag: "Sisters", num: "02", cat: "Sisters", name: "Islamic Classes for Sisters", desc: "Fiqh, aqeedah, Qur&#39;an, and Seerah taught by qualified female teachers.", href: "https://wa.me/917829950311" },
                { img: "/Images/home-course-grid/3.png", alt: "Brothers Classes", tag: "Brothers", num: "03", cat: "Brothers", name: "Islamic Classes for Brothers", desc: "Comprehensive Islamic education for brothers seeking authentic knowledge.", href: "https://wa.me/917829950311" },
                { img: "/Images/home-course-grid/4.png", alt: "Hifdh", tag: "Memorisation", num: "04", cat: "Memorisation", name: "Hifdh Classes for Sisters", desc: "Structured Qur&#39;an memorisation with dedicated revision and tajweed correction.", href: "https://wa.me/917829950311" },
                { img: "/Images/home-course-grid/5.png", alt: "Tasheeh", tag: "Recitation", num: "05", cat: "Recitation", name: "Tasheeh Tilawah Classes", desc: "Correct your Qur&#39;anic recitation with focused tajweed and personalised feedback.", href: "https://wa.me/917829950311" },
                { img: "/Images/home-course-grid/6.png", alt: "Workshops", tag: "Ongoing", num: "06", cat: "Ongoing", name: "Workshops & Lectures", desc: "Periodic in-depth workshops and open lectures covering key Islamic topics.", href: "https://wa.me/917829950311" },
              ].map((c) => (
                <div className="course-card r" key={c.num}>
                  <div className="course-img-wrap">
                    <img src={c.img} alt={c.alt} loading="lazy" />
                    <div className="course-img-overlay"></div>
                    <div className="course-img-tag">{c.tag}</div>
                    <div className="course-num">{c.num}</div>
                  </div>
                  <div className="course-body">
                    <span className="course-tag" dangerouslySetInnerHTML={{ __html: c.cat }} />
                    <h3 className="course-name">{c.name}</h3>
                    <p className="course-desc" dangerouslySetInnerHTML={{ __html: c.desc }} />
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="course-arrow">Enquire Now →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GROWING STATS ═══ */}
      <section id="stats">
        <div className="stats-inner">
          <div className="stats-label-col">
            <div className="stats-label-bg">النافع</div>
            <span className="s-label r" style={{ color: "var(--gold)" }}>Alhamdulillah</span>
            <h2 className="stats-label-title r">A Growing<br /><strong>Learning<br />Community</strong></h2>
          </div>
          <div className="stats-numbers">
            <div className="stat-block r">
              <svg className="stat-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(10,15,26,0.4)" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
              <div className="stat-big"><span className="counter" data-t="900">0</span><sup>+</sup></div>
              <div className="stat-lbl">Community Members</div>
            </div>
            <div className="stat-block r">
              <svg className="stat-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(10,15,26,0.4)" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
              <div className="stat-big"><span className="counter" data-t="500">0</span><sup>+</sup></div>
              <div className="stat-lbl">Students Covered</div>
            </div>
            <div className="stat-block r">
              <svg className="stat-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(10,15,26,0.4)" strokeWidth="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>
              <div className="stat-big"><span className="counter" data-t="100">0</span><sup>+</sup></div>
              <div className="stat-lbl">Active Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FaqSection />

      {/* ═══ CTA ═══ */}
      <section id="cta" style={{ padding: 0 }}>
        <div className="cta-layout">
          <div className="cta-img-col">
            <img src="/Images/start your journey.png" alt="Start your learning journey" loading="lazy" />
            <div className="cta-img-overlay"></div>
          </div>
          <div className="cta-text-col">
            <div className="cta-ghost-text">تعلّم</div>
            <span className="s-label r" style={{ color: "var(--gold)" }}>Begin Today</span>
            <h2 className="cta-title r">Start Your<br /><em>Learning</em><br />Journey Today</h2>
            <p className="cta-sub r">Message us on WhatsApp and our team will guide you to the right course for you or your child.</p>
            <a href="https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20learn%20more%20about%20An-Nafa%20Academy." target="_blank" rel="noopener noreferrer" className="btn-wa r" style={{ width: "fit-content" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Message on WhatsApp
            </a>
            <div className="cta-contacts">
              <div className="cta-contact-card">
                <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="17" r="1" /></svg>
                <div className="cta-contact-info">
                  <div className="cta-contact-label">Primary · WhatsApp</div>
                  <div className="cta-contact-value"><a href="https://wa.me/917829950311" target="_blank" rel="noopener noreferrer">+91 78299 50311</a></div>
                </div>
              </div>
              <div className="cta-contact-card">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                <div className="cta-contact-info">
                  <div className="cta-contact-label">Secondary</div>
                  <div className="cta-contact-value"><a href="tel:+918618218769">+91 86182 18769</a></div>
                </div>
              </div>
              <div className="cta-contact-card">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
                <div className="cta-contact-info">
                  <div className="cta-contact-label">Availability</div>
                  <div className="cta-contact-value">Online Classes · India and GULF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
