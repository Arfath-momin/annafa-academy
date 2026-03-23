export const metadata = {
  title: "Our Teachers | An-Nafa Academy",
  description: "Meet the qualified teachers at An-Nafa Academy who deliver authentic Islamic education to students across all programs.",
};

const TEACHER_CARDS = [
  {
    name: "Ustadh Ahmad Rahmani",
    specialization: "Kids Evening Madrasah Teacher",
    program: "Specialized in Qur'an reading and Islamic studies for children",
  },
  {
    name: "Ustadha Maryam Siddiqua",
    specialization: "Sisters Islamic Studies Teacher",
    program: "Specialized in Aqeedah, Fiqh and Seerah classes for sisters",
  },
  {
    name: "Ustadha Hafsa Kareem",
    specialization: "Hifdh Program Teacher",
    program: "Specialized in memorization plans, revision and tajweed correction",
  },
  {
    name: "Ustadh Salman Nadwi",
    specialization: "Brothers Islamic Classes Teacher",
    program: "Specialized in Islamic studies and practical daily life guidance",
  },
];

export default function Teachers() {
  return (
    <>
      <section className="ab-hero" aria-label="Our Teachers">
        <div className="ab-hero-bg-ar" aria-hidden="true">مُعَلِّم</div>
        <div className="container ab-hero-inner">
          <div className="cp-hero-line"></div>
          <span className="s-label fade-up">Our Teachers</span>
          <h1 className="km-hero-title fade-up stagger-1">
            Qualified and<br /><em>Dedicated Teachers</em>
          </h1>
          <p className="cp-hero-body fade-up stagger-2">
            At An-Nafa Academy, our teachers play a vital role in guiding students on their journey
            of learning the Deen. All teachers are selected carefully based on their knowledge,
            qualifications and commitment to authentic Islamic teachings.
          </p>
          <p className="cp-hero-body fade-up stagger-3" style={{ marginTop: 0 }}>
            We ensure that our teachers adhere to the correct Aqeedah and the authentic Manhaj of
            Ahle-Sunnah wa-Jama'a. Their teaching approach focuses on helping students understand
            Islamic knowledge clearly while nurturing love for the Qur’an and the Sunnah.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Experienced and Supportive Educators" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "920px" }}>
          <span className="s-label r-left">Experienced Educators</span>
          <h2 className="km-section-title r-left">
            Experienced and<br /><em>Supportive Educators</em>
          </h2>
          <p className="s-body r-left">
            Our teachers are trained and experienced in teaching students of different age groups.
            Special attention is given to teaching children in a way that is engaging, patient and
            suitable for their level of understanding.
          </p>
          <p className="s-body r-left" style={{ marginTop: "14px" }}>
            Teachers provide individual guidance, listen carefully to students and encourage them
            throughout their learning journey.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Focus on Knowledge and Tarbiyyah" style={{ background: "var(--cream)" }}>
        <div className="container" style={{ maxWidth: "920px" }}>
          <span className="s-label r-left">Our Focus</span>
          <h2 className="km-section-title r-left">
            Focus on Knowledge<br /><em>and Tarbiyyah</em>
          </h2>
          <p className="s-body r-left">
            At An-Nafa Academy, teaching is not limited to academic learning. Our teachers also
            focus on tarbiyyah (character development), helping students develop good manners,
            Islamic values and love for practicing Islam in their daily lives.
          </p>
          <p className="s-body r-left" style={{ marginTop: "14px" }}>
            Through their dedication and sincere efforts, our teachers aim to help students grow in
            both knowledge and character.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Teacher cards" style={{ background: "var(--white)" }}>
        <div className="container">
          <span className="s-label r-left">Our Team</span>
          <h2 className="km-section-title r-left">
            Teacher<br /><em>Profiles</em>
          </h2>

          <div className="sc-benefits-grid" style={{ marginTop: "20px" }}>
            {TEACHER_CARDS.map((teacher) => (
              <div key={teacher.name} className="sc-benefit-card r">
                <h3 className="sc-benefit-title" style={{ marginBottom: "6px" }}>{teacher.name}</h3>
                <p className="sc-benefit-body" style={{ color: "var(--gold)", fontWeight: 600, marginBottom: "8px" }}>
                  {teacher.specialization}
                </p>
                <p className="sc-benefit-body">{teacher.program}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Our commitment" style={{ background: "var(--ink)" }}>
        <div className="container" style={{ maxWidth: "920px" }}>
          <span className="s-label r-left">Our Commitment</span>
          <h2 className="km-section-title r-left" style={{ color: "var(--white)" }}>
            A Supportive Learning<br /><em>Environment</em>
          </h2>
          <p className="s-body r-left" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "820px" }}>
            We continuously strive to maintain a learning environment where students feel supported
            and motivated to seek beneficial knowledge. Our teachers are always present to guide
            students, answer questions and help them progress steadily in their studies.
          </p>
        </div>
      </section>
    </>
  );
}
