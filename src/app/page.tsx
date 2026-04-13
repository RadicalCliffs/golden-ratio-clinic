"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowLeft,
  Shield,
  Clock,
  Heart,
  Phone,
  Mail,
  User,
  Menu,
  X,
  CheckCircle,
  AlertCircle,
  Info,
  Sparkles,
  Calendar,
  Stethoscope,
  Brain,
  Moon,
  Flame,
  Activity,
  ShieldCheck,
  ClipboardCheck,
  Video,
  Pill,
  CalendarCheck,
  Star,
  MapPin,
  ChevronDown,
  UserCheck,
} from "lucide-react";
import SmoothScroll from "@/components/shared/SmoothScroll";
import GoldenSpiral from "@/components/shared/GoldenSpiral";
import ScrollReveal, {
  ScrollRevealStagger,
} from "@/components/shared/ScrollReveal";
import NewsTicker from "@/components/shared/NewsTicker";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ═══════════════════════════════════════════════
   DESIGN VARIATION 1 — "MAXIMA"
   Inspired by maximatherapy.com
   Bold, warm, illustration-driven, interactive
   ═══════════════════════════════════════════════ */

const PHI = 1.618033988749895;

/* ─── Navigation ─── */

const navLinks = [
  { label: "How It Works", href: "#process" },
  { label: "Our Practice", href: "#services" },
  { label: "Eligibility", href: "#quiz" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Must Read", href: "/news" },
];

function MaximaNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0f08]/90 backdrop-blur-xl shadow-2xl py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke="#c4a44a"
                strokeWidth="1.5"
              />
              <circle
                cx="20"
                cy="20"
                r={18 / PHI}
                fill="none"
                stroke="#c4a44a"
                strokeWidth="1"
                opacity="0.6"
              />
              <circle
                cx="20"
                cy="20"
                r={18 / PHI / PHI}
                fill="#c4a44a"
                opacity="0.3"
              />
            </svg>
          </div>
          <div>
            <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-white tracking-tight">
              Golden Ratio
            </span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#c4a44a] -mt-0.5 font-medium">
              Clinics
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-[#c4a44a] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA cluster — always visible (mobile + desktop) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sign In — ghost button (always visible) */}
          <a
            href="/portal/login"
            className="hidden sm:inline-flex items-center px-4 py-2 text-[13px] font-semibold text-white border border-white/30 rounded-full hover:border-[#c4a44a] hover:text-[#c4a44a] transition-colors"
          >
            Sign In
          </a>
          {/* Sign Up — primary button (always visible, eye-catching gold) */}
          <a
            href="/portal/signup"
            className="inline-flex items-center flex-shrink-0 px-3 sm:px-5 py-1.5 sm:py-2.5 text-[11px] sm:text-[13px] font-bold text-[#0a0f08] bg-[#c4a44a] rounded-full hover:bg-[#d4b45a] hover:shadow-[0_0_24px_rgba(196,164,74,0.45)] transition-all duration-300 whitespace-nowrap"
          >
            Sign Up
          </a>
          {/* Mobile menu toggle (still inside cluster but rightmost) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white ml-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0f08]/95 backdrop-blur-xl border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 text-base font-medium text-white/80 hover:text-[#c4a44a] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="mt-4 py-3 px-6 bg-[#c4a44a] text-[#0a0f08] font-semibold text-center rounded-full"
            >
              Book Free Consult
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ─── */

function MaximaHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 60, clipPath: "inset(100% 0 0 0)" },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0 0 0)",
        duration: 1.2,
        ease: "power4.out",
      }
    )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 50%, #1a2516 0%, #0a0f08 60%, #050805 100%)",
      }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#c4a44a]/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#2a3a20]/30 rounded-full blur-[150px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(196,164,74,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(196,164,74,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-[61.8%_38.2%] gap-12 items-center">
          {/* Left — Content (golden ratio proportion) */}
          <div>
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c4a44a]/30 bg-[#c4a44a]/5 mb-8">
              <Shield className="w-4 h-4 text-[#c4a44a]" />
              <span className="text-xs font-medium text-[#c4a44a] uppercase tracking-wider">
                Australian-Registered Practitioners
              </span>
            </div>

            <h1
              ref={headingRef}
              className="font-[family-name:var(--font-display)] text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.05] text-white mb-8"
            >
              A gentler path
              <br />
              to feeling like{" "}
              <span className="italic text-[#c4a44a]">yourself</span>
            </h1>

            <p
              ref={subRef}
              className="text-xl lg:text-2xl text-white/75 leading-relaxed mb-12 max-w-xl"
              style={{ lineHeight: `${PHI}em` }}
            >
              Telehealth consultations with Australian-registered medical
              practitioners. Compassionate, considered care delivered around your time.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#booking"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#c4a44a] text-[#0a0f08] font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(196,164,74,0.4)]"
              >
                <span className="relative z-10">
                  Book Free Pre-Screening
                </span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-[#d4b45a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#quiz"
                className="inline-flex items-center gap-2 px-8 py-4 text-white/70 font-medium text-lg border border-white/20 rounded-full hover:border-[#c4a44a]/50 hover:text-white transition-all duration-300"
              >
                Check Eligibility
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8">
              {[
                { icon: Clock, text: "15-min consults" },
                { icon: Heart, text: "Nurse-led intake" },
                { icon: Shield, text: "100% confidential" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Golden Spiral Visual (38.2% of grid) */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative">
              <GoldenSpiral
                size={500}
                color="rgba(196, 164, 74, 0.35)"
                strokeWidth={1.5}
                animate
                interactive
                className="w-full h-auto max-w-[500px]"
              />
              {/* Floating card */}
              <div
                className="absolute top-[15%] right-[-5%] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl"
                style={{ animation: "maxFloat 6s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c4a44a]/20 flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-[#c4a44a]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Ahpra-Registered
                    </p>
                    <p className="text-xs text-white/80">Doctor-led care</p>
                  </div>
                </div>
              </div>
              <div
                className="absolute bottom-[20%] left-[-10%] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl"
                style={{
                  animation: "maxFloat 6s ease-in-out infinite 2s",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2a5a20]/30 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Australia-Wide
                    </p>
                    <p className="text-xs text-white/80">Telehealth service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/60 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#c4a44a]/50 to-transparent" />
      </div>
    </section>
  );
}

/* ─── Process / How It Works ─── */

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Free Pre-Screening Call",
    description:
      "Speak with one of our qualified nurses for a quick, confidential chat about your health history and goals.",
    time: "5–10 min",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Complete Your Intake",
    description:
      "We'll guide you through a simple online form covering your medical history and current medications.",
    time: "10–15 min",
  },
  {
    icon: Video,
    number: "03",
    title: "Doctor Consultation",
    description:
      "Meet with a TGA-authorised prescriber via telehealth to review your history and discuss options.",
    time: "15–20 min",
  },
  {
    icon: Pill,
    number: "04",
    title: "Prescription & Dispensing",
    description:
      "If appropriate, your doctor issues an e-prescription. Medication delivered to your door.",
    time: "1–3 days",
  },
  {
    icon: CalendarCheck,
    number: "05",
    title: "Ongoing Support",
    description:
      "Regular follow-ups to monitor progress and adjust your treatment plan. We're with you every step.",
    time: "Every 4–12 weeks",
  },
];

function MaximaProcess() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#c4a44a] mb-4 block">
              Your Journey
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-bold text-[#1a1f16] mb-6">
              Simple, supportive, designed{" "}
              <span className="italic text-[#5c6e4b]">around you</span>
            </h2>
            <p className="text-lg text-[#5a6153] leading-relaxed">
              From your first call to ongoing care, every step is guided by
              experienced health professionals.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c4a44a]/30 to-transparent" />

          <div className="space-y-6 lg:space-y-0">
            {steps.map((step, i) => (
              <ScrollReveal
                key={step.number}
                delay={i * 0.1}
                y={30}
              >
                <div className="relative lg:grid lg:grid-cols-2 lg:gap-20 lg:py-10">
                  <div
                    className={`${
                      i % 2 === 0 ? "" : "lg:col-start-2"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-3xl p-8 shadow-sm border border-[#e8ebe3]/60 hover:shadow-lg hover:border-[#c4a44a]/20 transition-all duration-500 ${
                        i % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
                      }`}
                    >
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c4a44a]/10 to-[#5c6e4b]/10 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-[#c4a44a]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-bold text-[#c4a44a] tracking-wider">
                              STEP {step.number}
                            </span>
                            <span className="text-xs text-[#8a917f] bg-[#f6f7f4] px-3 py-1 rounded-full">
                              {step.time}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-[#1a1f16] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-[#5a6153] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#c4a44a] items-center justify-center shadow-[0_0_20px_rgba(196,164,74,0.3)] z-10">
                    <span className="text-[#0a0f08] text-xs font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Our Practice ─── */

const conditions = [
  {
    icon: Stethoscope,
    title: "Doctor-Led Care",
    description:
      "Every consultation is conducted by an Australian-registered medical practitioner with current Ahpra registration.",
    color: "from-orange-500/10 to-red-500/5",
  },
  {
    icon: Heart,
    title: "Nurse-Led Intake",
    description:
      "Our registered nurses guide you through every step before your consultation, so you arrive prepared and at ease.",
    color: "from-purple-500/10 to-indigo-500/5",
  },
  {
    icon: Shield,
    title: "Strictly Confidential",
    description:
      "Your consultation, your records, and your information are protected under the Australian Privacy Principles.",
    color: "from-blue-500/10 to-indigo-500/5",
  },
  {
    icon: Video,
    title: "Telehealth Convenience",
    description:
      "All consultations are delivered via secure video or phone — from the comfort of your home, anywhere in Australia.",
    color: "from-teal-500/10 to-emerald-500/5",
  },
  {
    icon: Clock,
    title: "Considered & Unrushed",
    description:
      "We don't pack our schedules. Every patient gets the time they need to have a meaningful conversation with their doctor.",
    color: "from-rose-500/10 to-pink-500/5",
  },
  {
    icon: ShieldCheck,
    title: "Australia-Wide",
    description:
      "Our telehealth model means we can support patients across every state and territory.",
    color: "from-[#c4a44a]/10 to-[#5c6e4b]/5",
  },
];

function MaximaServices() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid lg:grid-cols-[38.2%_61.8%] gap-16 items-start mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#c4a44a] mb-4 block">
                Our Practice
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-bold text-[#1a1f16]">
                Patient-centred{" "}
                <span className="italic text-[#5c6e4b]">telehealth</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-lg text-[#5a6153] leading-relaxed">
                Our clinic offers consultations across a range of general
                health concerns. Each appointment is conducted with the same
                care and clinical rigour you&apos;d expect from any medical
                practice — with the convenience of telehealth.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollRevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
          {conditions.map((condition) => (
            <div
              key={condition.title}
              className="group relative bg-[#faf9f5] rounded-3xl p-8 border border-[#e8ebe3] hover:border-[#c4a44a]/30 transition-all duration-500 hover:shadow-lg cursor-default overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${condition.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#e8ebe3] flex items-center justify-center mb-6 group-hover:border-[#c4a44a]/30 transition-colors duration-300">
                  <condition.icon className="w-6 h-6 text-[#5c6e4b] group-hover:text-[#c4a44a] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1f16] mb-3">
                  {condition.title}
                </h3>
                <p className="text-[#5a6153] leading-relaxed text-sm">
                  {condition.description}
                </p>
              </div>
            </div>
          ))}
        </ScrollRevealStagger>

        {/* TGA notice */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 p-8 rounded-3xl bg-[#0a0f08] text-center max-w-3xl mx-auto">
            <ShieldCheck className="w-8 h-8 text-[#c4a44a] mx-auto mb-4" />
            <p className="text-sm text-white/60 leading-relaxed">
              <strong className="text-white">Regulatory notice:</strong>{" "}
              Golden Ratio Clinics is a regulated telehealth medical service
              operating in Australia. All consultations are conducted by
              Australian-registered medical practitioners holding current
              Ahpra registration. A consultation does not guarantee any
              specific clinical outcome.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Service Eligibility Guide ─── */

const questions = [
  {
    id: "age",
    question: "Are you 18 years of age or older?",
    subtext:
      "Our telehealth consultations are available to adults only, in line with Australian medical practice standards.",
    options: [
      { label: "Yes, I'm 18 or older", value: "yes", score: 1 },
      { label: "No, I'm under 18", value: "no", score: 0 },
    ],
  },
  {
    id: "location",
    question: "Are you currently located in Australia?",
    subtext:
      "Our practitioners are registered to practise in Australia and we can only provide consultations to patients located here.",
    options: [
      { label: "Yes, I'm in Australia", value: "yes", score: 1 },
      { label: "No, I'm outside Australia", value: "no", score: 0 },
    ],
  },
  {
    id: "history",
    question: "Have you previously consulted a doctor about your general health?",
    subtext:
      "It's helpful for our clinical team to know if you've had relevant medical appointments in the past.",
    options: [
      { label: "Yes, regularly", value: "regular", score: 2 },
      { label: "Yes, occasionally", value: "occasional", score: 1 },
      { label: "Not in recent years", value: "none", score: 1 },
    ],
  },
  {
    id: "ready",
    question: "Are you comfortable having a consultation by video or phone?",
    subtext:
      "Telehealth consultations are equivalent to in-person appointments under Australian law.",
    options: [
      { label: "Yes, I'm comfortable with telehealth", value: "yes", score: 2 },
      { label: "I'd prefer phone over video", value: "phone", score: 2 },
      { label: "I'm not sure", value: "unsure", score: 1 },
    ],
  },
  {
    id: "expectation",
    question: "What would you like to discuss with our doctor?",
    subtext:
      "Your answer helps our intake team prepare for your consultation. Your doctor will discuss your health in detail during the appointment.",
    options: [
      { label: "General wellbeing", value: "general", score: 1 },
      { label: "A long-standing health concern", value: "ongoing", score: 1 },
      { label: "A second opinion", value: "second", score: 1 },
      { label: "I'd rather discuss it with the doctor", value: "private", score: 1 },
    ],
  },
];

function MaximaQuiz() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [scores, setScores] = useState<Record<string, number>>({});

  const totalQuestions = questions.length;
  const progress = step >= 0 ? ((step + 1) / totalQuestions) * 100 : 0;

  const handleAnswer = (questionId: string, value: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setScores((prev) => ({ ...prev, [questionId]: score }));

    setTimeout(() => {
      if (step < totalQuestions - 1) setStep((s) => s + 1);
      else {
        setStep(totalQuestions);
        // Submit to API
        const totalScore = Object.values({ ...scores, [questionId]: score }).reduce((a, b) => a + b, 0);
        fetch("/api/quiz", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            answers: { ...answers, [questionId]: value },
            totalScore,
            resultCategory:
              totalScore >= 5
                ? "likely_eligible"
                : totalScore >= 3
                ? "possibly_eligible"
                : "not_eligible",
          }),
        }).catch(() => {});
      }
    }, 400);
  };

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const isLikelyEligible = totalScore >= 6;
  const isPossiblyEligible = totalScore >= 4 && totalScore < 6;

  return (
    <section id="quiz" className="py-24 lg:py-32 bg-[#f6f7f4]">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#c4a44a] mb-4 block">
              Is Our Service Right For You?
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-bold text-[#1a1f16] mb-5">
              Two minutes to{" "}
              <span className="italic text-[#5c6e4b]">find out</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="bg-white rounded-3xl shadow-xl border border-[#e8ebe3] overflow-hidden">
          {/* Progress */}
          {step >= 0 && step < totalQuestions && (
            <div className="h-1 bg-[#e8ebe3]">
              <div
                className="h-full bg-[#c4a44a] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          <div className="p-8 lg:p-12">
            {/* Intro */}
            {step === -1 && (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-3xl bg-[#c4a44a]/10 flex items-center justify-center mx-auto mb-8">
                  <Sparkles className="w-10 h-10 text-[#c4a44a]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a1f16] mb-4">
                  Service Eligibility Guide
                </h3>
                <p className="text-[#5a6153] mb-4 max-w-md mx-auto">
                  Five quick questions to help us understand if our telehealth
                  service is the right fit for you. This is not a medical
                  assessment.
                </p>
                <div className="inline-flex items-start gap-3 text-left p-5 rounded-2xl bg-[#faf9f5] border border-[#e8ebe3] mb-8 max-w-md">
                  <Info className="w-5 h-5 text-[#c4a44a] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#5a6153]">
                    <strong className="text-[#1a1f16]">Please note:</strong>{" "}
                    This is a general indication only, not a medical assessment.
                    A qualified doctor will make all clinical decisions.
                  </p>
                </div>
                <button
                  onClick={() => setStep(0)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#c4a44a] text-[#0a0f08] font-bold rounded-full hover:bg-[#d4b45a] transition-all duration-300"
                >
                  Start the Guide
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Questions */}
            {step >= 0 && step < totalQuestions && (
              <div key={step}>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm text-[#8a917f] font-medium">
                    Question {step + 1} of {totalQuestions}
                  </span>
                  {step > 0 && (
                    <button
                      onClick={() => setStep((s) => s - 1)}
                      className="flex items-center gap-1 text-sm text-[#5a6153] hover:text-[#1a1f16] transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-[#1a1f16] mb-2">
                  {questions[step].question}
                </h3>
                {questions[step].subtext && (
                  <p className="text-[#5a6153] mb-8">
                    {questions[step].subtext}
                  </p>
                )}

                <div className="space-y-3">
                  {questions[step].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() =>
                        handleAnswer(questions[step].id, option.value, option.score)
                      }
                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 hover:border-[#c4a44a] hover:bg-[#c4a44a]/5 ${
                        answers[questions[step].id] === option.value
                          ? "border-[#c4a44a] bg-[#c4a44a]/5"
                          : "border-[#e8ebe3] bg-white"
                      }`}
                    >
                      <span className="text-[#1a1f16] font-medium">
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {step === totalQuestions && (
              <div className="text-center py-6">
                {isLikelyEligible ? (
                  <>
                    <div className="w-20 h-20 rounded-full bg-[#5c6e4b]/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-[#5c6e4b]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a1f16] mb-4">
                      Our service may be a good fit
                    </h3>
                    <p className="text-[#5a6153] mb-4 max-w-md mx-auto">
                      Based on your answers, you appear to meet the eligibility
                      criteria for a consultation with our clinic. The next
                      step is a free pre-screening call with one of our
                      registered nurses.
                    </p>
                  </>
                ) : isPossiblyEligible ? (
                  <>
                    <div className="w-20 h-20 rounded-full bg-[#c4a44a]/10 flex items-center justify-center mx-auto mb-6">
                      <Info className="w-10 h-10 text-[#c4a44a]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a1f16] mb-4">
                      Let&apos;s have a chat
                    </h3>
                    <p className="text-[#5a6153] mb-4 max-w-md mx-auto">
                      Your situation may still be suitable. A free pre-screening
                      call will help clarify your options.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 rounded-full bg-[#e8ebe3] flex items-center justify-center mx-auto mb-6">
                      <AlertCircle className="w-10 h-10 text-[#8a917f]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a1f16] mb-4">
                      May not be the right fit right now
                    </h3>
                    <p className="text-[#5a6153] mb-4 max-w-md mx-auto">
                      Based on your responses, you may not currently meet the
                      general criteria. Everyone&apos;s situation is unique —
                      feel free to call us.
                    </p>
                  </>
                )}

                <div className="inline-flex items-start gap-2 text-left p-4 rounded-2xl bg-[#faf9f5] border border-[#e8ebe3] mb-8 max-w-md">
                  <Info className="w-5 h-5 text-[#c4a44a] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[#5a6153]">
                    This is a guide only, not a medical opinion. Eligibility is
                    determined by a qualified doctor during consultation.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#c4a44a] text-[#0a0f08] font-bold rounded-full"
                  >
                    Book Free Pre-Screening
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => {
                      setStep(-1);
                      setAnswers({});
                      setScores({});
                    }}
                    className="px-8 py-4 border border-[#e8ebe3] text-[#5a6153] font-medium rounded-full hover:border-[#c4a44a]/30 transition-colors"
                  >
                    Retake Guide
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */

const testimonials = [
  {
    name: "Sarah M.",
    location: "Brisbane, QLD",
    quote:
      "The team at Golden Ratio made me feel completely at ease. The process was seamless and the doctor genuinely listened to my concerns.",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Melbourne, VIC",
    quote:
      "After years of trying different medications, I finally found something that works. The ongoing support has been incredible.",
    rating: 5,
  },
  {
    name: "Linda K.",
    location: "Perth, WA",
    quote:
      "I was nervous about the process but the nursing team walked me through everything. So grateful I made the call.",
    rating: 5,
  },
];

function MaximaTestimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0f08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#c4a44a] mb-4 block">
              Patient Stories
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-bold text-white mb-5">
              Trusted by patients{" "}
              <span className="italic text-[#c4a44a]">Australia-wide</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollRevealStagger
          className="grid md:grid-cols-3 gap-6"
          stagger={0.15}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-[#c4a44a]/30 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#c4a44a] text-[#c4a44a]"
                  />
                ))}
              </div>
              <p className="text-white/70 leading-relaxed mb-8 text-lg italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-white/40 text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

/* ─── Booking Form ─── */

const timeSlots = [
  "9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM",
  "12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM",
  "3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM",
];

function MaximaBooking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    contactMethod: "phone",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        contactMethod: "phone",
        message: "",
        consent: false,
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Please try again.");
    }
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const inputClass =
    "w-full px-4 py-3.5 bg-[#faf9f5] border border-[#e8ebe3] rounded-xl text-[#1a1f16] focus:outline-none focus:border-[#c4a44a] focus:ring-2 focus:ring-[#c4a44a]/10 transition-all duration-200 placeholder:text-[#8a917f]";

  return (
    <section id="booking" className="py-24 lg:py-32 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[38.2%_61.8%] gap-16">
          {/* Left — Info */}
          <ScrollReveal>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#c4a44a] mb-4 block">
                Book Your Call
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-bold text-[#1a1f16] mb-6">
                Start with a{" "}
                <span className="italic text-[#5c6e4b]">free</span>{" "}
                pre-screening call
              </h2>
              <p className="text-lg text-[#5a6153] leading-relaxed mb-10">
                One of our friendly, qualified nurses will call you at a time
                that suits. It&apos;s confidential, free, and no obligation.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Clock, text: "A 5–10 minute phone call at your preferred time" },
                  { icon: User, text: "Friendly conversation with a registered nurse" },
                  { icon: Shield, text: "100% confidential — your info is protected" },
                  { icon: CheckCircle, text: "No cost, no pressure, no obligation" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c4a44a]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#c4a44a]" />
                    </div>
                    <p className="text-[#5a6153] pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal delay={0.2}>
            {status === "success" ? (
              <div className="bg-white rounded-3xl shadow-xl border border-[#e8ebe3] text-center py-16 px-8">
                <div className="w-20 h-20 rounded-full bg-[#5c6e4b]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-[#5c6e4b]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a1f16] mb-4">
                  Thank you!
                </h3>
                <p className="text-[#5a6153] max-w-md mx-auto mb-8">
                  Our nursing team will be in touch within one business day to
                  arrange your free pre-screening call.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-8 py-3 border border-[#e8ebe3] text-[#5a6153] font-medium rounded-full hover:border-[#c4a44a]/30 transition-colors"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-xl border border-[#e8ebe3] p-8 lg:p-10"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1f16] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1f16] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1f16] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1f16] mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="0412 345 678"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1f16] mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      required
                      min={minDate}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1f16] mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot} AEST
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact method */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-[#1a1f16] mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    {[
                      { value: "phone", label: "Phone Call" },
                      { value: "video", label: "Video Call" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                          formData.contactMethod === opt.value
                            ? "border-[#c4a44a] bg-[#c4a44a]/5"
                            : "border-[#e8ebe3] hover:border-[#c4a44a]/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="contactMethod"
                          value={opt.value}
                          checked={formData.contactMethod === opt.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="text-sm font-medium text-[#1a1f16]">
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#1a1f16] mb-2">
                    Anything you&apos;d like us to know? (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="E.g. a brief description of your condition"
                  />
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 mb-6 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-[#e8ebe3] text-[#c4a44a] focus:ring-[#c4a44a]"
                  />
                  <span className="text-sm text-[#5a6153] leading-relaxed">
                    I consent to Golden Ratio Clinics contacting me regarding my
                    enquiry. My information will be handled in accordance with
                    Australian Privacy Principles.
                  </span>
                </label>

                {/* Error */}
                {status === "error" && (
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-200 mb-4">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <p className="text-sm text-red-600">{errorMessage}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-[#c4a44a] text-[#0a0f08] font-bold text-lg rounded-full hover:bg-[#d4b45a] transition-all duration-300 disabled:opacity-50 hover:shadow-[0_0_30px_rgba(196,164,74,0.3)]"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Request My Free Call"
                  )}
                </button>

                <p className="text-xs text-[#8a917f] text-center mt-4">
                  Your data is encrypted and stored securely.
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */

function MaximaAbout() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[61.8%_38.2%] gap-16 items-center">
          <ScrollReveal>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#c4a44a] mb-4 block">
                About Us
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-bold text-[#1a1f16] mb-8">
                Healthcare rooted in{" "}
                <span className="italic text-[#5c6e4b]">balance</span>
              </h2>
              <p className="text-lg text-[#5a6153] leading-relaxed mb-6">
                Golden Ratio Clinics was founded on a simple belief: that
                everyone deserves access to compassionate, evidence-based
                healthcare. Our name reflects our approach — finding the
                perfect balance between science and empathy, tradition and
                innovation.
              </p>
              <p className="text-lg text-[#5a6153] leading-relaxed mb-10">
                We are a telehealth medical practice. Our clinical team is
                made up of Australian-registered medical practitioners and
                registered nurses, all of whom hold current Ahpra
                registration. Every consultation is held to the same standard
                as any other Australian medical appointment.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {[
                  { number: "100%", label: "Australian-registered" },
                  { number: "100%", label: "Ahpra-compliant" },
                  { number: "Australia", label: "Wide telehealth coverage" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl sm:text-3xl font-bold text-[#c4a44a] mb-1 whitespace-nowrap">
                      {stat.number}
                    </p>
                    <p className="text-[12px] sm:text-sm text-[#8a917f]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a2516] to-[#0a0f08] flex items-center justify-center">
                <GoldenSpiral
                  size={400}
                  color="rgba(196, 164, 74, 0.2)"
                  strokeWidth={1}
                  animate={false}
                  className="w-3/4 h-auto opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-[family-name:var(--font-display)] text-6xl italic mb-4" style={{ color: "rgba(196, 164, 74, 0.5)" }}>
                      φ
                    </p>
                    <p className="text-[#c4a44a]/80 font-[family-name:var(--font-display)] text-2xl italic">
                      φ = 1.618
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */

const faqs = [
  {
    q: "Who runs the consultations?",
    a: "Our consultations are conducted by Australian-registered medical practitioners holding current Ahpra registration. Your initial pre-screening call is conducted by a registered nurse on our clinical team.",
  },
  {
    q: "How much does a consultation cost?",
    a: "The initial pre-screening call with one of our nurses is free of charge. Doctor consultation fees are disclosed in full before any appointment is booked. We do not charge any consultation fees without your prior consent.",
  },
  {
    q: "Will I receive a prescription?",
    a: "We can't tell you that. The outcome of any consultation is determined by your doctor following clinical assessment. A consultation may or may not result in a prescription, and our clinic cannot guarantee any specific outcome before a doctor has met with you.",
  },
  {
    q: "Is this covered by Medicare or private health insurance?",
    a: "Currently our consultations are not covered by Medicare or most private health insurers. We will let you know the full out-of-pocket cost before any appointment is booked.",
  },
  {
    q: "How long does the process take?",
    a: "From your initial pre-screening call to your doctor consultation, most patients are seen within one week. Pre-screening calls are usually scheduled within one business day of your booking request.",
  },
  {
    q: "Is the consultation really 100% telehealth?",
    a: "Yes. Under Australian law, telehealth consultations are equivalent to in-person consultations. Our clinic conducts all appointments via secure video or phone call from anywhere in Australia.",
  },
];

function MaximaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#f6f7f4]">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#c4a44a] mb-4 block">
              FAQ
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-bold text-[#1a1f16]">
              Common{" "}
              <span className="italic text-[#5c6e4b]">questions</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-white rounded-2xl border border-[#e8ebe3] overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-[#1a1f16] font-semibold pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8a917f] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-[#5a6153] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─── */

function MaximaCTA() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0f08] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <GoldenSpiral
          size={1200}
          color="rgba(196, 164, 74, 0.3)"
          strokeWidth={1}
          animate={false}
          className="absolute -top-1/4 -right-1/4 w-[150%] h-auto"
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-6xl font-bold text-white mb-8">
            Ready to explore a{" "}
            <span className="italic text-[#c4a44a]">gentler path?</span>
          </h2>
          <p className="text-xl text-white/75 mb-12 max-w-2xl mx-auto">
            Start with a free, no-obligation pre-screening call. Our nursing
            team is here to help you understand your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#c4a44a] text-[#0a0f08] font-bold text-lg rounded-full hover:bg-[#d4b45a] transition-all duration-300 hover:shadow-[0_0_40px_rgba(196,164,74,0.4)]"
            >
              Book Your Free Call
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:1800000000"
              className="inline-flex items-center gap-2 px-10 py-5 text-white/70 font-medium text-lg border border-white/20 rounded-full hover:border-[#c4a44a]/50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              1800 GR CLINIC
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Footer ─── */

function MaximaFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050805] text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="#c4a44a" strokeWidth="1.5" />
                  <circle cx="20" cy="20" r={18 / PHI} fill="none" stroke="#c4a44a" strokeWidth="1" opacity="0.4" />
                </svg>
              </div>
              <div>
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-white">
                  Golden Ratio
                </span>
                <span className="block text-[8px] uppercase tracking-[0.2em] text-[#c4a44a]">
                  Clinics
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              A regulated telehealth medical service operating across Australia.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#c4a44a]/60">
              <Shield className="w-3.5 h-3.5" />
              <span>Australian-Registered Practitioners</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2.5">
              {[
                { label: "How It Works", href: "#process" },
                { label: "Our Practice", href: "#services" },
                { label: "Eligibility", href: "#quiz" },
                { label: "About", href: "#about" },
                { label: "FAQ", href: "#faq" },
                { label: "Must Read", href: "/news" },
                { label: "Book a Call", href: "#booking" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block text-sm hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a href="tel:1800000000" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                1800 GR CLINIC
              </a>
              <a href="mailto:hello@goldenratioclinics.com.au" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                hello@goldenratioclinics.com.au
              </a>
              <div className="flex items-center gap-2.5 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Australia-wide telehealth</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <nav className="space-y-2.5">
              <a href="/privacy" className="block text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="block text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="/complaints" className="block text-sm hover:text-white transition-colors">Complaints Process</a>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-xs text-center lg:text-left">
              &copy; {currentYear} Golden Ratio Clinics. All rights reserved.
            </p>
            <p className="text-xs text-center lg:text-right max-w-2xl leading-relaxed">
              <strong className="text-white/60">Medical Disclaimer:</strong>{" "}
              The information on this website is for general informational
              purposes only and does not constitute medical advice, diagnosis,
              or treatment. All clinical decisions are made by your doctor
              during your consultation. Golden Ratio Clinics operates as a
              regulated telehealth medical practice in Australia, in
              accordance with Australian therapeutic goods law and Ahpra
              prescribing guidance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════
   Main Page — Variation 1: Maxima
   ═══════════════════════════════════════════════ */

export default function MaximaVariation() {
  return (
    <SmoothScroll>
      <style jsx global>{`
        @keyframes maxFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes drawSpiral {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
      <MaximaNav />
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <NewsTicker
          label="Must Read"
          theme={{
            background: "#0a0f08",
            border: "rgba(196, 164, 74, 0.25)",
            text: "rgba(255, 255, 255, 0.9)",
            accent: "#c4a44a",
            separator: "rgba(196, 164, 74, 0.5)",
          }}
        />
      </div>
      <main className="pb-12">
        <MaximaHero />
        <MaximaProcess />
        <MaximaServices />
        <MaximaQuiz />
        {/* Testimonials removed for TGA compliance — patient testimonials about a regulated health service are prohibited under both the TGA Code and Health Practitioner Regulation National Law */}
        <MaximaBooking />
        <MaximaAbout />
        <MaximaFAQ />
        <MaximaCTA />
      </main>
      <MaximaFooter />
    </SmoothScroll>
  );
}
