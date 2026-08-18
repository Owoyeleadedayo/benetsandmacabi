"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const ROLES = [
  "Hosts & Hostesses",
  "Event Coordinators",
  "Trainees / Interns",
  "Experienced Event Managers",
  "Artisans / Decor Crew",
  "Other",
];

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset form when closed
      setForm({ fullName: "", email: "", phone: "", role: "", message: "" });
      setStatus("idle");
      setErrorMsg("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!form.fullName.trim() || !form.email.trim() || !form.role) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || "Failed to submit application.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(msg);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        {/* Header */}
        <div className="bg-[#0071B3] px-6 py-5 flex items-start justify-between">
          <div>
            <h2 className="text-white text-2xl font-bold">Apply Now</h2>
            <p className="text-blue-100 text-sm mt-1">Join the Makabis &amp; Benet team</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-white/70 hover:text-white transition-colors mt-1 cursor-pointer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {status === "success" ? (
            /* Success state */
            <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
              <CheckCircle size={56} className="text-[#0071B3]" />
              <h3 className="text-xl font-bold text-gray-800">Application Sent!</h3>
              <p className="text-gray-500 max-w-xs">
                Thank you for applying. We&apos;ll review your application and get back to you
                soon.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2 bg-[#0071B3] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700" htmlFor="apply-fullName">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="apply-fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Adebayo Okafor"
                  disabled={status === "loading"}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0071B3] transition-shadow placeholder:text-gray-400 disabled:opacity-60"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700" htmlFor="apply-email">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="apply-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  disabled={status === "loading"}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0071B3] transition-shadow placeholder:text-gray-400 disabled:opacity-60"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700" htmlFor="apply-phone">
                  Phone Number
                </label>
                <input
                  id="apply-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  disabled={status === "loading"}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0071B3] transition-shadow placeholder:text-gray-400 disabled:opacity-60"
                />
              </div>

              {/* Role */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700" htmlFor="apply-role">
                  Role Applying For <span className="text-red-500">*</span>
                </label>
                <select
                  id="apply-role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0071B3] transition-shadow bg-white disabled:opacity-60"
                >
                  <option value="">Select a role…</option>
                  {ROLES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700" htmlFor="apply-message">
                  Cover Note <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  id="apply-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us a little about yourself and why you'd like to join…"
                  disabled={status === "loading"}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0071B3] transition-shadow placeholder:text-gray-400 resize-none disabled:opacity-60"
                />
              </div>

              {/* Error message */}
              {errorMsg && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center justify-center gap-2 bg-[#0071B3] text-white font-bold py-3 rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all mt-1 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Submit Application
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
