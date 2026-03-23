"use client";

import { useState } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WA_NUMBER = "917829950311";
const WA_BASE = `https://wa.me/${WA_NUMBER}`;
const waLink = (msg) => `${WA_BASE}?text=${encodeURIComponent(msg)}`;

const BATCH_OPTIONS = [
  { value: "", label: "Select preference" },
  { value: "morning", label: "Morning (before school)" },
  { value: "evening-early", label: "Evening (5–6 PM)" },
  { value: "evening-late", label: "Evening (6–8 PM)" },
  { value: "weekend", label: "Weekend only" },
  { value: "flexible", label: "Flexible / advise me" },
];

const SELECT_ARROW = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235c5955' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`;

function getInputStyle(hasError, isFocused) {
  return {
    fontSize: 14,
    color: "var(--ink)",
    background: hasError ? "#fff8f8" : isFocused ? "#ffffff" : "var(--sand)",
    border: `1.5px solid ${hasError ? "#c0392b" : isFocused ? "var(--green)" : "var(--sand3)"}`,
    borderRadius: 8,
    padding: "12px 14px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s, background 0.2s",
    appearance: "none",
    fontFamily: "inherit",
  };
}

function Field({ label, required, error, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <label style={{ fontSize: 12, fontWeight: 600, color: "var(--ink)", letterSpacing: "0.3px" }}>
        {label}
        {required && <span style={{ color: "var(--green)", marginLeft: 2 }}>*</span>}
      </label>
      {children}
      {error && (
        <span style={{ fontSize: 11, color: "#c0392b" }}>{error}</span>
      )}
    </div>
  );
}

export default function AdmissionsFormSection() {
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    location: "",
    whatsapp: "",
    batchTime: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((err) => ({ ...err, [k]: "" }));
  };

  const validate = () => {
    const e = {};
    if (form.parentName.trim().length < 2) e.parentName = "Please enter your name.";
    if (form.childName.trim().length < 2) e.childName = "Please enter your child's name.";
    if (!form.childAge) e.childAge = "Please select your child's age.";
    if (form.location.trim().length < 2) e.location = "Please enter your location.";
    if (form.whatsapp.trim().length < 7) e.whatsapp = "Please enter a valid WhatsApp number.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1000);
  };

  if (submitted) {
    return (
      <section className="section" style={{ background: "var(--sand)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            width: 64, height: 64, borderRadius: "50%",
            background: "var(--green-pale)", border: "2px solid var(--green)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 20px", fontSize: 26, color: "var(--green)",
          }}>
            ✓
          </div>
          <h2 style={{
            fontFamily: "var(--serif)", fontSize: 36,
            color: "var(--ink)", marginBottom: 12, letterSpacing: "-0.5px",
          }}>
            JazakAllahu Khayran
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.8, marginBottom: 28 }}>
            We have received your application. Our team will contact you on WhatsApp within 24 hours
            with available batch times and next steps.
          </p>
          <a
            href={waLink("As-salamu alaykum, I just submitted an admission form for my child at An-Nafa Academy.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            style={{ margin: "0 auto", width: "fit-content" }}
          >
            <WhatsAppIcon />
            Also message us on WhatsApp
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ background: "var(--sand)", padding: "72px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <span className="s-label r-left">Enroll Your Child</span>
        <h2 className="km-section-title r-left" style={{ marginBottom: 14 }}>
          Fill the<br /><em>Admission Form</em>
        </h2>
        <p className="s-body r-left">
          Our team will contact you with available batches and program details within 24 hours.
        </p>

        <div style={{
          background: "#ffffff", border: "1px solid var(--sand3)",
          borderRadius: 18, padding: "40px",
          boxShadow: "0 2px 24px rgba(14,17,23,0.06)", marginTop: 32,
        }}>
          <form onSubmit={handleSubmit} noValidate>
            {/* Row 1: Parent Name + Child Name */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 18, marginBottom: 18,
            }}>
              <Field label="Parent Name" required error={errors.parentName}>
                <input
                  type="text"
                  value={form.parentName}
                  onChange={set("parentName")}
                  placeholder="Your full name"
                  style={getInputStyle(!!errors.parentName, focused === "parentName")}
                  onFocus={() => setFocused("parentName")}
                  onBlur={() => setFocused(null)}
                />
              </Field>
              <Field label="Child's Name" required error={errors.childName}>
                <input
                  type="text"
                  value={form.childName}
                  onChange={set("childName")}
                  placeholder="Child's full name"
                  style={getInputStyle(!!errors.childName, focused === "childName")}
                  onFocus={() => setFocused("childName")}
                  onBlur={() => setFocused(null)}
                />
              </Field>
            </div>

            {/* Row 2: Child Age + Country/City */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 18, marginBottom: 18,
            }}>
              <Field label="Child's Age" required error={errors.childAge}>
                <select
                  value={form.childAge}
                  onChange={set("childAge")}
                  style={{
                    ...getInputStyle(!!errors.childAge, focused === "childAge"),
                    backgroundImage: SELECT_ARROW,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    paddingRight: 36,
                    cursor: "pointer",
                  }}
                  onFocus={() => setFocused("childAge")}
                  onBlur={() => setFocused(null)}
                >
                  <option value="">Select age</option>
                  {[4, 5, 6, 7, 8, 9, 10].map((a) => (
                    <option key={a} value={a}>{a} years</option>
                  ))}
                </select>
              </Field>
              <Field label="Country / City" required error={errors.location}>
                <input
                  type="text"
                  value={form.location}
                  onChange={set("location")}
                  placeholder="e.g. Dubai, UAE"
                  style={getInputStyle(!!errors.location, focused === "location")}
                  onFocus={() => setFocused("location")}
                  onBlur={() => setFocused(null)}
                />
              </Field>
            </div>

            {/* Row 3: WhatsApp + Batch Time */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 18, marginBottom: 18,
            }}>
              <Field label="WhatsApp Number" required error={errors.whatsapp}>
                <input
                  type="tel"
                  value={form.whatsapp}
                  onChange={set("whatsapp")}
                  placeholder="+91 98765 43210"
                  style={getInputStyle(!!errors.whatsapp, focused === "whatsapp")}
                  onFocus={() => setFocused("whatsapp")}
                  onBlur={() => setFocused(null)}
                />
              </Field>
              <Field label="Preferred Batch Time">
                <select
                  value={form.batchTime}
                  onChange={set("batchTime")}
                  style={{
                    ...getInputStyle(false, focused === "batchTime"),
                    backgroundImage: SELECT_ARROW,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    paddingRight: 36,
                    cursor: "pointer",
                  }}
                  onFocus={() => setFocused("batchTime")}
                  onBlur={() => setFocused(null)}
                >
                  {BATCH_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </Field>
            </div>

            {/* Notes */}
            <div style={{ marginBottom: 24 }}>
              <Field label="Additional Notes">
                <textarea
                  value={form.notes}
                  onChange={set("notes")}
                  placeholder="Any specific requirements or questions for our team…"
                  style={{
                    ...getInputStyle(false, focused === "notes"),
                    resize: "vertical",
                    minHeight: 90,
                  }}
                  onFocus={() => setFocused("notes")}
                  onBlur={() => setFocused(null)}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={submitting}
              style={{
                width: "100%",
                padding: "16px",
                background: submitting ? "var(--muted2)" : "var(--green)",
                color: "#ffffff",
                border: "none",
                borderRadius: 14,
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "inherit",
                cursor: submitting ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.background = "var(--green2)"; }}
              onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.background = "var(--green)"; }}
            >
              {submitting ? (
                "Submitting…"
              ) : (
                <>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22l-4-9-9-4z" />
                  </svg>
                  Submit Admission
                </>
              )}
            </button>
            <p style={{
              textAlign: "center", marginTop: 14, fontSize: 12,
              color: "var(--muted2)", lineHeight: 1.6,
            }}>
              Your information is kept private and used only to contact you about enrollment.
            </p>
          </form>
        </div>

        {/* WhatsApp Alternative */}
        <div style={{
          background: "var(--green-pale)", border: "1.5px dashed rgba(26,92,58,0.25)",
          borderRadius: 14, padding: "24px", display: "flex",
          alignItems: "center", gap: 20, marginTop: 28,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "#25d366", display: "flex",
            alignItems: "center", justifyContent: "center",
            flexShrink: 0, color: "#ffffff",
          }}>
            <WhatsAppIcon />
          </div>
          <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.5 }}>
            <strong style={{ color: "var(--ink)", display: "block", fontSize: 15, marginBottom: 2 }}>
              Prefer WhatsApp?
            </strong>
            Message us directly and our team will guide you through the admission process.{" "}
            <a
              href={waLink("As-salamu alaykum, I would like to enroll my child in the Evening Madrasah.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--green)", fontWeight: 600 }}
            >
              Message us now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
