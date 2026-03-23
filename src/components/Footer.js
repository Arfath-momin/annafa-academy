import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div>
            <Link href="/" className="footer-brand-logo-wrap" aria-label="An-Nafa Academy home">
              <Image
                src="/logo-arabic-white.png"
                alt="An-Nafa Academy"
                width={120}
                height={120}
                className="footer-brand-logo"
              />
            </Link>
            <p className="footer-about" style={{ maxWidth: "320px", marginTop: "4px" }}>
              Authentic Islamic learning through live online classes for students in India and GULF.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/annafa.academy?igsh=MW4ya3Njb3RkNWoyZg==&utm_source=ig_contact_invite"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
              <a
                href="https://chat.whatsapp.com/LLC9OvxSso33YO97txj2TP"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="WhatsApp Announcement"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://t.me/annafa_academy"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Telegram"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M21.5 4.5 3.8 11.4c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 1.8 5.7c.2.6.1.8.8.8.5 0 .8-.2 1.1-.5l2.7-2.6 5.5 4.1c1 .6 1.8.3 2-.9L23.9 6c.3-1.5-.6-2.1-2.4-1.5Z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@an-nafaacademy?si=J3-HTV3KK7BhjRa8"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22.5 7.2a2.7 2.7 0 0 0-1.9-1.9C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.6.5A2.7 2.7 0 0 0 1.5 7.2C1 8.9 1 12 1 12s0 3.1.5 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8Z" />
                  <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
            <a
              href="https://wa.me/917829950311"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-wa-link"
            >
              <WhatsAppIcon size={14} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-col-head">Quick Links</div>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/class-timings">Class Timings</Link></li>
              <li><Link href="/curriculum">Curriculum</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/kids-islamic-admissions">Kids Admissions 2026</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <div className="footer-col-head">Courses</div>
            <ul className="footer-links">
              <li><Link href="/courses/evening-madrasah">Evening Madrasah</Link></li>
              <li><Link href="/courses/sisters-classes">Sisters&#39; Classes</Link></li>
              <li><Link href="/courses/brothers-classes">Brothers&#39; Classes</Link></li>
              <li><Link href="/courses/hifdh-program">Hifdh Program</Link></li>
              <li><Link href="/courses/tasheeh-tilawah">Tasheeh Tilawah</Link></li>
              <li><Link href="/courses/workshops">Workshops</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-head">Contact</div>
            <div className="footer-contact-line">
              <svg className="footer-contact-icon" viewBox="0 0 24 24">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <circle cx="12" cy="17" r="1" />
              </svg>
              <div className="footer-contact-line-text">
                <a href="https://wa.me/917829950311" target="_blank" rel="noopener noreferrer">
                  +91 78299 50311
                </a>
                <br />
                <small style={{ color: "rgba(255,255,255,0.18)" }}>Primary · WhatsApp</small>
              </div>
            </div>
            <div className="footer-contact-line">
              <svg className="footer-contact-icon" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <div className="footer-contact-line-text">
                <a href="tel:+918618218769">+91 86182 18769</a>
                <br />
                <small style={{ color: "rgba(255,255,255,0.18)" }}>Secondary</small>
              </div>
            </div>
            <div className="footer-contact-line">
              <svg className="footer-contact-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
              <div className="footer-contact-line-text">
                Online classes · India and GULF
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © {new Date().getFullYear()}{" "}
            <Link href="/">An-Nafa Academy</Link>. All rights reserved.
          </div>
          <div className="footer-hadith">
            طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
          </div>
        </div>
      </div>
    </footer>
  );
}
