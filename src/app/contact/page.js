import FaqSection from "@/components/FaqSection";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ContactEnquiryForm from "@/components/ContactEnquiryForm";

export const metadata = {
  title: "Contact An-Nafa Academy | Enquire About Islamic Classes Online",
  description:
    "Contact An-Nafa Academy to enquire about our online Islamic classes for kids, sisters and brothers. Message us on WhatsApp to learn more about our programs.",
  keywords: [
    "contact an nafa academy",
    "islamic classes enquiry",
    "online islamic academy contact",
    "quran classes enquiry",
    "islamic learning contact",
  ],
};

const CONTACTS = [
  {
    role: "An-Nafa Academy Admin",
    phone: "+91 78299 50311",
    wa: "https://wa.me/917829950311",
    ar: "إِدَارَة",
  },
  {
    role: "Arabic HOD",
    phone: "+91 86182 18769",
    wa: "https://wa.me/918618218769",
    ar: "عَرَبِيّ",
  },
];

const PROGRAMS = [
  "Evening Madrasah for Kids",
  "Islamic Classes for Sisters",
  "Islamic Classes for Brothers",
  "Hifdh Classes",
  "Qur\u2019an Recitation Improvement (Tasheeh Tilawah)",
  "Islamic Workshops and Lectures",
];

const CONTACT_FAQ = [
  {
    q: "How do I enroll in a course?",
    a: "You can enroll by messaging us on WhatsApp. Our team will guide you through the available programs and enrollment process.",
    keywords: "enroll join sign up register how",
  },
  {
    q: "Do you offer classes for beginners?",
    a: "Yes. Our programs are designed for students at different levels, including beginners who want to start learning the basics of Islam.",
    keywords: "beginner zero start no knowledge",
  },
  {
    q: "Are the classes conducted online?",
    a: "Yes. All our classes are conducted online through live interactive sessions where students can communicate directly with the teacher.",
    keywords: "online live recorded how classes",
  },
  {
    q: "How will I know the class schedule?",
    a: "Once you contact us on WhatsApp, our team will share the available class timings and help you choose the most suitable schedule.",
    keywords: "schedule timing timetable when classes",
  },
];

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .95h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <section
        className="ct-hero"
        aria-label="Contact An-Nafa Academy"
        style={{ padding: "clamp(105px, 13vw, 155px) 0 clamp(56px, 8vw, 90px)" }}
      >
        <div className="ct-hero-bg-ar" aria-hidden="true">تَوَاصَل</div>
        <div className="container ct-hero-inner">
          <div className="cp-hero-line"></div>
          <span className="s-label fade-up">Get In Touch</span>
          <h1 className="km-hero-title fade-up stagger-1" style={{ fontSize: "clamp(34px, 5.3vw, 58px)", marginBottom: "12px" }}>
            Contact<br /><em>An-Nafa Academy</em>
          </h1>
          <p className="cp-hero-body fade-up stagger-2" style={{ fontSize: "15px", lineHeight: 1.75, maxWidth: "560px" }}>
            Have questions about classes or admissions? Message us on WhatsApp and our team will
            guide you to the right program quickly.
          </p>
        </div>
      </section>

      {/* ═══ CONTACT INFORMATION ═══ */}
      <section className="section ct-info" aria-label="Contact information">
        <div className="container">
          <div className="ct-info-header">
            <span className="s-label r-left">Reach Us</span>
            <h2 className="km-section-title r-left">
              Contact<br /><em>Information</em>
            </h2>
          </div>
          <div className="ct-cards">
            {CONTACTS.map((c) => (
              <a
                key={c.role}
                href={c.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="ct-card r"
                aria-label={`WhatsApp ${c.role}`}
              >
                <div className="ct-card-ar" aria-hidden="true">{c.ar}</div>
                <div className="ct-card-body">
                  <span className="ct-card-role">{c.role}</span>
                  <div className="ct-card-phone">
                    <PhoneIcon />
                    <span>{c.phone}</span>
                  </div>
                  <div className="ct-card-wa">
                    <WhatsAppIcon size={16} />
                    <span>Message on WhatsApp</span>
                  </div>
                </div>
              </a>
            ))}
            <div className="ct-card ct-card--email r">
              <div className="ct-card-ar" aria-hidden="true">بَرِيد</div>
              <div className="ct-card-body">
                <span className="ct-card-role">Email</span>
                <div className="ct-card-phone">
                  <MailIcon />
                  <a href="mailto:info@annafa.academy" className="ct-email-link">info@annafa.academy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SEND ENQUIRY ═══ */}
      <section className="section ct-enquiry" aria-label="Send us an enquiry">
        <div className="container">
          <div className="ct-enquiry-grid">
            <div>
              <span className="s-label r-left">Enquire Now</span>
              <h2 className="km-section-title r-left">
                Send Us<br /><em>an Enquiry</em>
              </h2>
              <p className="s-body r-left">
                If you have questions about our courses, schedules or enrollment process, simply
                send us a message on WhatsApp. Our team will respond and help you select the most
                suitable program.
              </p>
              <ContactEnquiryForm />
            </div>
            <div className="ct-enquiry-visual r-right" aria-hidden="true">
              <div className="ct-enquiry-ar">سُؤَال</div>
              <div className="ct-enquiry-sub">Ask · Learn · Grow</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHO SHOULD CONTACT US ═══ */}
      <section className="section ab-programs" aria-label="Who should contact us">
        <div className="container">
          <div className="sc-who-grid">
            <div>
              <span className="s-label fade-up">Programs Available</span>
              <h2 className="km-section-title fade-up stagger-1" style={{ color: "var(--white)" }}>
                Who Should<br /><em>Contact Us</em>
              </h2>
              <p className="sc-who-body fade-up stagger-2">
                You can contact us if you are interested in any of the following programs. Our team
                will help you identify the right course and guide you through the enrollment process.
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

      {/* ═══ FAQ ═══ */}
      <FaqSection data={CONTACT_FAQ} />

      {/* ═══ FINAL CTA ═══ */}
      <section className="km-cta" aria-label="Start your learning journey">
        <div className="km-cta-bg-ar" aria-hidden="true">ابْدَأْ</div>
        <div className="km-cta-overlay"></div>
        <div className="container km-cta-inner">
          <span className="s-label r" style={{ justifyContent: "center" }}>Begin Today</span>
          <h2 className="km-cta-title r">
            Start Your Learning<br />Journey <em>Today</em>
          </h2>
          <p className="km-cta-desc r">
            Message us on WhatsApp and our team will help you get started with authentic Islamic
            learning at An-Nafa Academy.
          </p>
          <a
            href="https://wa.me/917829950311"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa r"
            style={{ margin: "0 auto" }}
          >
            <WhatsAppIcon />
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
