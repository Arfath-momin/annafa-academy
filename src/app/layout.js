import { Playfair_Display, Amiri, Jost } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RouteLoader from "@/components/RouteLoader";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import ScrollAnimations from "@/components/ScrollAnimations";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata = {
  title: {
    default: "An-Nafa Academy | Authentic Islamic Education Online",
    template: "%s | An-Nafa Academy",
  },
  description:
    "An-Nafa Academy provides authentic Islamic education online through live interactive classes for kids and adults—rooted in Qur'an and authentic Sunnah. Enquire on WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="boot-loader-script" strategy="beforeInteractive">
          {`
            (function () {
              document.documentElement.classList.add('boot-loading');

              function finishBootLoader() {
                document.documentElement.classList.add('boot-loaded');
                window.setTimeout(function () {
                  var loader = document.getElementById('boot-loader');
                  if (loader) loader.style.display = 'none';
                }, 320);
              }

              if (document.readyState === 'complete') {
                finishBootLoader();
              } else {
                window.addEventListener('load', finishBootLoader, { once: true });
                window.setTimeout(finishBootLoader, 7000);
              }
            })();
          `}
        </Script>
      </head>
      <body
        className={`${playfair.variable} ${amiri.variable} ${jost.variable}`}
      >
        <div id="boot-loader" aria-hidden="true">
          <div className="boot-loader-brand">
            <img src="/logo-arabic-white.png" alt="An-Nafa Academy" />
          </div>
        </div>
        <RouteLoader />
        <CustomCursor />
        <Header />
        {children}
        <Footer />
        <WhatsAppBubble />
        <ScrollAnimations />
      </body>
    </html>
  );
}
