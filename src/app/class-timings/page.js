import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const metadata = {
  title: "Class Timings | An-Nafa Academy",
  description:
    "View the live online class schedule at An-Nafa Academy for Kids Evening Madrasah, Sisters and Brothers classes, Hifdh and Tasheeh Tilawah.",
};

const KIDS_BATCHES = [
  { name: "Batch 1", time: "06:00 PM – 07:00 PM (IST)" },
  { name: "Batch 2", time: "05:00 PM – 06:00 PM (IST)" },
  { name: "Batch 3", time: "07:00 PM – 08:00 PM (IST)" },
];

const NEW_BATCHES = [
  { name: "Batch 4", time: "06:00 PM – 07:00 PM (IST)" },
  { name: "Batch 5", time: "07:00 PM – 08:00 PM (IST)" },
];

const OTHER_PROGRAMS = [
  {
    title: "Islamic Classes for Sisters",
    batches: [{ name: "Batch 1", time: "07:30 PM – 08:30 PM (IST)" }],
  },
  {
    title: "Islamic Classes for Brothers",
    batches: [{ name: "Batch 1", time: "09:00 PM – 10:00 PM / 10:30 PM (IST)" }],
  },
  {
    title: "Hifdh Program (Sisters)",
    batches: [{ name: "Batch 1", time: "07:00 PM – 08:00 PM (IST)" }],
    note: "Classes conducted 5 days per week (Saturday – Thursday).",
  },
  {
    title: "Tasheeh Tilawah Classes (Sisters)",
    batches: [{ name: "Batch 1", time: "11:30 AM – 12:30 PM (IST)" }],
  },
];

function TimingCard({ name, time }) {
  return (
    <div className="km-detail-card r">
      <div className="km-detail-label">{name}</div>
      <div className="km-detail-value">{time}</div>
    </div>
  );
}

export default function ClassTimings() {
  return (
    <>
      <section className="ab-hero" aria-label="Class Timings">
        <div className="ab-hero-bg-ar" aria-hidden="true">أَوْقَات</div>
        <div className="container ab-hero-inner">
          <div className="cp-hero-line"></div>
          <span className="s-label fade-up">Class Timings</span>
          <h1 className="km-hero-title fade-up stagger-1">
            Live Online<br /><em>Class Schedule</em>
          </h1>
          <p className="cp-hero-body fade-up stagger-2">
            All classes at An-Nafa Academy are conducted online through live interactive sessions.
            Students attend classes from the comfort of their homes while learning directly with
            qualified teachers.
          </p>
          <p className="cp-hero-body fade-up stagger-3" style={{ marginTop: 0 }}>
            Below are the current class timings for different programs.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Kids Evening Madrasah timings" style={{ background: "var(--cream)" }}>
        <div className="container">
          <span className="s-label r-left">Kids Program</span>
          <h2 className="km-section-title r-left">
            Kids Evening<br /><em>Madrasah</em>
          </h2>
          <p className="s-body r-left" style={{ marginBottom: "20px" }}>
            Classes are conducted from Monday to Thursday.
          </p>

          <div className="km-details-cards" style={{ marginTop: 0, marginBottom: "22px" }}>
            {KIDS_BATCHES.map((batch) => (
              <TimingCard key={batch.name} name={batch.name} time={batch.time} />
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(24px,3vw,32px)", color: "var(--ink)", marginBottom: "14px" }}>
            New Batches
          </h3>
          <div className="km-details-cards" style={{ marginTop: 0 }}>
            {NEW_BATCHES.map((batch) => (
              <TimingCard key={batch.name} name={batch.name} time={batch.time} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Other program timings" style={{ background: "var(--white)" }}>
        <div className="container" style={{ display: "grid", gap: "18px" }}>
          {OTHER_PROGRAMS.map((program) => (
            <div key={program.title} style={{ border: "1px solid var(--sand3)", background: "var(--white)", padding: "clamp(22px,3vw,30px)" }}>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(24px,3vw,32px)", color: "var(--ink)", marginBottom: "14px", lineHeight: 1.15 }}>
                {program.title}
              </h3>
              <div className="km-details-cards" style={{ marginTop: 0 }}>
                {program.batches.map((batch) => (
                  <TimingCard key={`${program.title}-${batch.name}`} name={batch.name} time={batch.time} />
                ))}
              </div>
              {program.note && (
                <p className="s-body" style={{ marginTop: "12px" }}>
                  {program.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-label="Important note" style={{ background: "var(--ink)" }}>
        <div className="container" style={{ maxWidth: "920px" }}>
          <span className="s-label r-left">Important Note</span>
          <h2 className="km-section-title r-left" style={{ color: "var(--white)" }}>
            Latest Schedule &<br /><em>Batch Availability</em>
          </h2>
          <p className="s-body r-left" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "830px" }}>
            Class timings may vary depending on batch availability and student requirements. Parents
            and students can contact the academy on WhatsApp for the latest schedule and available
            batches.
          </p>

          <a
            href="https://wa.me/917829950311"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa r-left"
            style={{ marginTop: "26px", width: "fit-content" }}
          >
            <WhatsAppIcon />
            Contact on WhatsApp (+91 78299 50311)
          </a>
        </div>
      </section>
    </>
  );
}
