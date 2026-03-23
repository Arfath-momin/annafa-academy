import FaqSection from "@/components/FaqSection";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const metadata = {
  title: "Online Islamic Courses | Kids, Sisters & Quran Classes | An-Nafa Academy",
  description:
    "Explore authentic Islamic courses at An-Nafa Academy including kids madrasah, sisters classes, Quran learning, Hifdh and Islamic studies taught through live online classes.",
  keywords: [
    "online islamic courses",
    "kids islamic classes online",
    "quran classes online",
    "islamic classes for sisters",
    "islamic classes for brothers",
    "learn quran online",
  ],
};

const COURSES = [
  {
    num: "01",
    cat: "Children's Program",
    title: "Evening Madrasah\nfor Kids",
    titleEm: "for Kids",
    age: "Age 4–10",
    waMsg: "Evening%20Madrasah%20for%20my%20child",
    ctaLabel: "Enroll Your Child",
    img: "https://images.pexels.com/photos/8471826/pexels-photo-8471826.jpeg?auto=compress&cs=tinysrgb&w=900",
    imgAlt: "Child engaged in Islamic learning",
    desc: "Our Evening Madrasah for Kids is designed to introduce young children to Islamic knowledge in a structured and engaging environment. The program focuses on nurturing a love for Islam while building strong foundations in Qur'an recitation, Islamic studies and good manners.",
    list: [
      "Qaida and Qur'an reading",
      "Basic Hifdh of short Surahs",
      "Islamic studies fundamentals",
      "Morning and evening adhkar",
      "Stories from the Qur'an and Seerah",
      "Islamic manners and etiquette",
    ],
    extra: "Classes are interactive and specially designed for young learners with patient and trained teachers who understand how to teach children effectively.",
    bg: "sand-bg",
    reverse: false,
  },
  {
    num: "02",
    cat: "Sisters",
    title: "Islamic Classes\nfor Sisters",
    titleEm: "for Sisters",
    waMsg: "Islamic%20Classes%20for%20Sisters",
    ctaLabel: "Join Sisters Classes",
    img: "https://images.pexels.com/photos/6173657/pexels-photo-6173657.jpeg?auto=compress&cs=tinysrgb&w=900",
    imgAlt: "Sisters learning Islamic studies",
    desc: "Our Islamic classes for sisters provide a comfortable and welcoming environment for women who want to learn the Deen and strengthen their Islamic knowledge. These classes focus on essential topics that help Muslim women practice Islam with understanding and confidence.",
    list: [
      "Aqeedah (Islamic beliefs)",
      "Fiqh of daily life",
      "Tafsir and Qur'an understanding",
      "Seerah of the Prophet ﷺ",
      "Islamic character and personal development",
    ],
    extra: "Classes are conducted in a respectful and supportive environment that encourages learning and growth.",
    bg: "light-bg",
    reverse: true,
  },
  {
    num: "03",
    cat: "Brothers",
    title: "Islamic Classes\nfor Brothers",
    titleEm: "for Brothers",
    waMsg: "Islamic%20Classes%20for%20Brothers",
    ctaLabel: "Join Brothers Classes",
    img: "https://images.pexels.com/photos/7249213/pexels-photo-7249213.jpeg?auto=compress&cs=tinysrgb&w=900",
    imgAlt: "Brothers in Islamic study",
    desc: "Our brothers classes provide structured Islamic learning for men who want to strengthen their understanding of Islam and practice their faith with knowledge and clarity. These classes focus on authentic Islamic teachings and practical application in everyday life.",
    list: [
      "Qur'an recitation and understanding",
      "Hadith studies",
      "Aqeedah and Islamic beliefs",
      "Fiqh of worship and daily life",
      "Lessons from the Seerah",
    ],
    extra: null,
    bg: "sand-bg",
    reverse: false,
  },
  {
    num: "04",
    cat: "Memorisation",
    title: "Hifdh Classes\nfor Sisters",
    titleEm: "for Sisters",
    waMsg: "Hifdh%20Classes%20for%20Sisters",
    ctaLabel: "Start Hifdh Journey",
    img: "https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=900",
    imgAlt: "Qur'an memorisation",
    desc: "The Hifdh program is designed for sisters who wish to memorize the Qur'an with proper guidance and discipline. Students follow a structured memorization plan and receive regular revision sessions to strengthen their memorization.",
    list: [
      "Structured Qur'an memorization plan",
      "Tajweed correction",
      "Regular revision sessions",
      "Individual teacher guidance",
    ],
    extra: null,
    bg: "light-bg",
    reverse: true,
  },
  {
    num: "05",
    cat: "Recitation",
    title: "Tasheeh\nTilawah Classes",
    titleEm: "Tilawah Classes",
    waMsg: "Tasheeh%20Tilawah",
    ctaLabel: "Improve Your Recitation",
    img: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=900",
    imgAlt: "Qur'an recitation correction",
    desc: "Tasheeh Tilawah classes focus on improving Qur'an recitation and correcting mistakes in tajweed. These classes are ideal for students who already know how to read Qur'an but want to improve their fluency and pronunciation.",
    list: [
      "Correct tajweed rules",
      "Proper pronunciation of Arabic letters",
      "Recitation improvement",
      "Mistake correction with teacher guidance",
    ],
    extra: null,
    bg: "sand-bg",
    reverse: false,
  },
  {
    num: "06",
    cat: "Ongoing",
    title: "Islamic Workshops\n& Lectures",
    titleEm: "& Lectures",
    waMsg: "Workshops%20and%20Lectures",
    ctaLabel: "Explore Workshops",
    img: "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=900",
    imgAlt: "Islamic workshop and lecture",
    desc: "An-Nafa Academy regularly organizes Islamic workshops and lectures that focus on important topics related to faith, family life and personal development. These sessions help students stay connected to Islamic knowledge and strengthen their relationship with Allah.",
    list: [
      "Strengthening faith and spirituality",
      "Parenting in Islam",
      "Understanding Islamic character",
      "Building good habits in daily life",
    ],
    extra: null,
    bg: "light-bg",
    reverse: true,
  },
];

const COURSES_FAQ = [
  {
    q: "Are the classes live or recorded?",
    a: "All our classes are conducted live so students can interact directly with teachers. Live classes provide better understanding, engagement and the ability to ask questions.",
    keywords: "live recorded online",
  },
  {
    q: "What age is the kids program for?",
    a: "Our Evening Madrasah program is designed for children between the ages of 4 and 10. The lessons are structured to match the learning style and attention span of young learners.",
    keywords: "age kids children program",
  },
  {
    q: "Do you offer trial classes?",
    a: "Yes. You can contact us on WhatsApp to inquire about trial sessions and learn more about our courses before enrolling.",
    keywords: "trial free class try before",
  },
  {
    q: "How can I enroll in a course?",
    a: "Enrollment is simple. You can message us on WhatsApp and our team will guide you through the available courses and help you select the most suitable program.",
    keywords: "how enroll join sign up register",
  },
  {
    q: "Are beginners welcome?",
    a: "Yes. Our classes are suitable for beginners as well as students who already have some background in Islamic learning.",
    keywords: "beginner zero experience start",
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

export default function Courses() {
  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <section className="cp-hero" aria-label="Courses page">
        <div className="cp-hero-bg-ar" aria-hidden="true">الدُّرُوس</div>
        <div className="container cp-hero-inner">
          <div className="cp-hero-line" aria-hidden="true"></div>
          <span className="s-label fade-up">What We Offer</span>
          <h1 className="cp-hero-title fade-up stagger-1">
            Online Islamic Courses<br />
            at An-Nafa <em>Academy</em>
          </h1>
          <p className="cp-hero-body fade-up stagger-2">
            An-Nafa Academy offers authentic Islamic education through live online classes designed for both
            children and adults. Our courses are built upon the Qur&#39;an and authentic Sunnah and are taught
            by qualified teachers who focus on both knowledge and character development. Whether you want your
            child to begin their journey in Islamic learning or you want to deepen your own understanding of
            the Deen, our structured programs provide a supportive environment for learning.
          </p>
        </div>
      </section>

      {/* ═══ OVERVIEW ═══ */}
      <section className="cp-overview" aria-label="Our Islamic Courses overview">
        <div className="container">
          <div className="cp-overview-grid">
            <div>
              <span className="s-label r-left">Our Islamic Courses</span>
              <h2 className="cp-overview-title r-left">
                Our <em>Islamic</em><br />Courses
              </h2>
            </div>
            <p className="cp-overview-body r-right">
              We provide structured Islamic programs for different age groups and learning goals. Each course
              is designed to make Islamic learning accessible, engaging and beneficial while maintaining a
              strong focus on authentic knowledge and good character.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ COURSE SECTIONS ═══ */}
      {COURSES.map((course) => (
        <section
          key={course.num}
          className={`cp-course-section ${course.bg}`}
          aria-label={course.cat}
        >
          <div className={`cp-course-split${course.reverse ? " reverse" : ""}`}>
            <div className="cp-course-img">
              <img src={course.img} alt={course.imgAlt} loading="lazy" />
              <div className="cp-course-img-num" aria-hidden="true">{course.num}</div>
            </div>
            <div className="cp-course-content">
              <div className="cp-course-cat fade-up">{course.cat}</div>
              <h2 className="cp-course-title fade-up stagger-1">
                {course.title.split("\n").map((line, i) =>
                  line === course.titleEm ? (
                    <span key={i}><em>{line}</em></span>
                  ) : (
                    <span key={i}>{line}<br /></span>
                  )
                )}
              </h2>
              <p className="cp-course-desc fade-up stagger-2">{course.desc}</p>
              <ul className="cp-course-list fade-up stagger-3" aria-label="What students learn">
                {course.list.map((item) => (
                  <li key={item}><Check />{item}</li>
                ))}
              </ul>
              {course.extra && (
                <p className="cp-course-desc fade-up stagger-4" style={{ marginTop: 0 }}>
                  {course.extra}
                </p>
              )}
              <a
                href={`https://wa.me/917829950311?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20enquire%20about%20${course.waMsg}%20at%20An-Nafa%20Academy.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa fade-up stagger-4"
                style={{ width: "fit-content" }}
              >
                <WhatsAppIcon />
                {course.ctaLabel}
              </a>
            </div>
          </div>
        </section>
      ))}

      {/* ═══ FAQ ═══ */}
      <FaqSection data={COURSES_FAQ} />

      {/* ═══ FINAL CTA ═══ */}
      <section className="cp-cta" aria-label="Start learning">
        <div className="cp-cta-bg-ar" aria-hidden="true">تعلّم</div>
        <div className="container cp-cta-inner">
          <span className="s-label r" style={{ justifyContent: "center" }}>Begin Today</span>
          <h2 className="cp-cta-title r">
            Start Learning<br />the <em>Deen</em> Today
          </h2>
          <p className="cp-cta-desc r">
            Message us on WhatsApp and our team will guide you to the right course for you or your child.
            We will help you choose the program that best suits your learning goals.
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
