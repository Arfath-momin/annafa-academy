export const metadata = {
  title: "Curriculum | An-Nafa Academy",
  description: "Explore the Islamic curriculum at An-Nafa Academy. Our structured programs cover Qur'an, Aqeedah, Fiqh, Seerah and more.",
};

const KIDS_CURRICULUM = [
  "Qaida and Qur’an reading",
  "Memorization of short surahs",
  "Basic Islamic studies",
  "Morning and evening adhkar",
  "Stories from the Qur’an and Seerah",
  "Islamic manners and character development",
];

const ISLAMIC_CLASSES_CURRICULUM = [
  "Aqeedah (Islamic beliefs)",
  "Fiqh of worship and daily life",
  "Hadith studies",
  "Seerah of the Prophet ﷺ",
  "Islamic history",
  "Understanding Qur’anic meanings",
];

const HIFDH_PROGRAM = [
  "Structured memorization plan",
  "Daily memorization targets",
  "Regular revision sessions",
  "Teacher supervision and correction",
  "Monitoring student progress",
];

const TASHEEH_TILAWAH = [
  "Correct pronunciation of Arabic letters",
  "Application of tajweed rules",
  "Fluent Qur’an recitation",
  "Individual recitation and correction",
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

function CurriculumList({ title, items }) {
  return (
    <div style={{ background: "var(--white)", border: "1px solid var(--sand3)", padding: "clamp(24px,3vw,34px)" }}>
      <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(24px,3vw,32px)", color: "var(--ink)", marginBottom: "12px", lineHeight: 1.15 }}>
        {title}
      </h3>
      <ul className="km-curr-list" aria-label={title}>
        {items.map((item) => (
          <li key={item} className="km-curr-item r" style={{ marginBottom: 0 }}>
            <Check />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Curriculum() {
  return (
    <>
      <section className="ab-hero" aria-label="Curriculum">
        <div className="ab-hero-bg-ar" aria-hidden="true">مَنْهَج</div>
        <div className="container ab-hero-inner">
          <div className="cp-hero-line"></div>
          <span className="s-label fade-up">Curriculum</span>
          <h1 className="km-hero-title fade-up stagger-1">
            Our Learning<br /><em>Approach</em>
          </h1>
          <p className="cp-hero-body fade-up stagger-2">
            At An-Nafa Academy, our curriculum is designed to help students develop a strong
            understanding of Islam through authentic knowledge based on the Qur’an and the Sunnah.
            Our lessons focus on building both knowledge and character while helping students develop
            a meaningful connection with their Deen.
          </p>
          <p className="cp-hero-body fade-up stagger-3" style={{ marginTop: 0 }}>
            The curriculum is structured to suit different age groups and learning levels, ensuring
            that students learn gradually and clearly with proper guidance from qualified teachers.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Detailed curriculum" style={{ background: "var(--cream)" }}>
        <div className="container" style={{ display: "grid", gap: "18px" }}>
          <CurriculumList title="Kids Evening Madrasah Curriculum" items={KIDS_CURRICULUM} />
          <CurriculumList
            title="Islamic Classes Curriculum (Brothers & Sisters)"
            items={ISLAMIC_CLASSES_CURRICULUM}
          />
          <CurriculumList title="Hifdh Program" items={HIFDH_PROGRAM} />
          <CurriculumList title="Tasheeh Tilawah Classes" items={TASHEEH_TILAWAH} />
        </div>
      </section>

      <section className="section" aria-label="Learning with authentic sources" style={{ background: "var(--ink)" }}>
        <div className="container" style={{ maxWidth: "920px" }}>
          <span className="s-label r-left">Authenticity</span>
          <h2 className="km-section-title r-left" style={{ color: "var(--white)" }}>
            Learning with<br /><em>Authentic Sources</em>
          </h2>
          <p className="s-body r-left" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "820px" }}>
            All subjects at An-Nafa Academy are taught based on authentic Islamic teachings derived
            from the Qur’an and the Sunnah according to the understanding of the
            Salaf-us-Saliheen.
          </p>
          <p className="s-body r-left" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "820px", marginTop: "14px" }}>
            Our goal is to ensure that students gain beneficial knowledge that strengthens their
            faith, understanding and practice of Islam.
          </p>
        </div>
      </section>
    </>
  );
}
