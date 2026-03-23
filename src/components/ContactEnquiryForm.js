"use client";

import { useState } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const COURSES = [
  "",
  "Evening Madrasah for Kids",
  "Islamic Classes for Sisters",
  "Islamic Classes for Brothers",
  "Hifdh Program",
  "Tasheeh Tilawah",
  "Islamic Workshops",
];

const INPUT_STYLE = {
  width: "100%",
  border: "1px solid var(--sand3)",
  borderRadius: "10px",
  background: "var(--white)",
  padding: "12px 14px",
  fontFamily: "var(--body)",
  fontSize: "14px",
  color: "var(--ink)",
  outline: "none",
};

export default function ContactEnquiryForm() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    if (!name || !whatsapp) return;

    const text = [
      "As-salamu alaykum, I would like to enquire.",
      "",
      `Name: ${name || "-"}`,
      `WhatsApp: ${whatsapp || "-"}`,
      `Course: ${course || "Not specified"}`,
      `Message: ${message || "-"}`,
    ].join("\n");

    const url = `https://wa.me/917829950311?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "22px", display: "grid", gap: "12px" }}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={INPUT_STYLE}
        required
      />

      <input
        type="tel"
        placeholder="Your WhatsApp Number"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        style={INPUT_STYLE}
        required
      />

      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        style={INPUT_STYLE}
      >
        <option value="">Select Course (optional)</option>
        {COURSES.filter(Boolean).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        style={{ ...INPUT_STYLE, resize: "vertical" }}
      />

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button
          type="submit"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            background: "var(--gold)",
            color: "var(--ink)",
            border: "1px solid var(--gold)",
            borderRadius: "10px",
            padding: "12px 18px",
            fontFamily: "var(--sans)",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "filter 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = "brightness(0.95)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "none";
          }}
        >
          Submit Enquiry
        </button>

        <button
          type="button"
          onClick={handleWhatsApp}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            background: "#25d366",
            color: "#ffffff",
            border: "1px solid #25d366",
            borderRadius: "10px",
            padding: "12px 18px",
            fontFamily: "var(--sans)",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "filter 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = "brightness(0.92)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "none";
          }}
        >
          <WhatsAppIcon />
          WhatsApp Us
        </button>
      </div>

      {submitted && (
        <p style={{ margin: 0, fontFamily: "var(--body)", fontSize: "12px", color: "var(--green)" }}>
          Enquiry submitted. For faster response, click WhatsApp Us.
        </p>
      )}
    </form>
  );
}
