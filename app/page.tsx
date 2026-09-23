"use client";

import React, { useState } from "react";
import {
  Server,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Award,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
  Activity,
  Sparkles,
  Copy,
  Check,
  Terminal,
  Workflow,
  ChevronRight,
  Code2,
} from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const certifications = [
    {
      name: "AWS Certified AI Practitioner",
      authority: "Amazon Web Services (AWS)",
      period: "Nov 2025 – Nov 2028",
      credentialId: "f97e5074af764303a609fd82866c5e0d",
      url: "https://aws.amazon.com/verification",
      badgeType: "AI / Cloud",
    },
    {
      name: "Google Cloud Certified Generative AI Leader",
      authority: "Google Cloud",
      period: "Nov 2025 – Nov 2028",
      credentialId: "a3f13837c17e498a84f3e43cbbfc60a8",
      url: "https://www.credly.com/badges/7f3f6022-de0d-4373-9fe3-7d31362c2414",
      badgeType: "GenAI",
    },
    {
      name: "GitHub Copilot Certified",
      authority: "Microsoft",
      period: "Oct 2025 – Oct 2027",
      credentialId: "35C5B90CBB8EE53C",
      url: "https://learn.microsoft.com/en-us/users/siddharthsharma-4805/transcript",
      badgeType: "AI Tools",
    },
    {
      name: "Google Cloud Certified Cloud Digital Leader",
      authority: "Google Cloud",
      period: "Nov 2025 – Nov 2028",
      credentialId: "8d908a6f405949e4b8bdcaca964275ce",
      url: "https://www.credly.com/badges/d1e17e43-13ea-4cf3-8dc8-9e368020241b",
      badgeType: "Cloud",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      authority: "Amazon Web Services (AWS)",
      period: "Nov 2022 – Aug 2028",
      credentialId: "W9KYJNFCREQE1JGH",
      url: "https://aws.amazon.com/verification",
      badgeType: "Cloud",
    },
  ];

  const featuredWork = [
    {
      title: "Autonomous Self-Healing Middleware Pipelines",
      organization: "HCLTech",
      role: "Senior Consultant",
      summary:
        "Designed and implemented autonomous self-healing scripts and automated CI/CD pipelines using Python, Shell, and Jenkins.",
      impact: "Eliminated manual environment resets and slashed operational toil by 45%.",
      technologies: ["Python", "Jenkins", "Bash Scripting", "CI/CD", "AWS", "GCP"],
      category: "Automation",
    },
    {
      title: "Zero-Downtime Enterprise WebSphere Migration",
      organization: "Capgemini",
      role: "Associate Consultant",
      summary:
        "Led high-stakes migration projects for critical enterprise applications from IBM WebSphere v8 legacy to high-performance v9.0.5 containerized platforms.",
      impact: "Executed zero-downtime cutover across multi-tiered enterprise production environments.",
      technologies: ["IBM WebSphere", "Linux Admin", "Containerization", "Performance Tuning"],
      category: "Architecture",
    },
    {
      title: "Real-Time Telemetry & Proactive Anomaly Detection",
      organization: "HCLTech",
      role: "Senior Consultant",
      summary:
        "Architected telemetry pipelines and continuous observability dashboards using Splunk and Grafana with automated alert thresholds.",
      impact: "Transformed production support from reactive crisis response into proactive anomaly detection.",
      technologies: ["Splunk", "Grafana", "Observability", "SRE", "Alerting Engine"],
      category: "SRE & Telemetry",
    },
    {
      title: "Agentic AI & MCP Framework Integration",
      organization: "Enterprise R&D / HCLTech",
      role: "Senior Architect",
      summary:
        "Spearheaded the secure integration of Agentic AI pipelines, LLM workflows, and Model Context Protocol (MCP) data channels into legacy middleware stacks.",
      impact: "Ensured strict enterprise data governance, lineage tracing, and high-throughput reliability.",
      technologies: ["Agentic AI", "Model Context Protocol (MCP)", "AWS Bedrock", "Prompt Architecture"],
      category: "Agentic AI",
    },
    {
      title: "Enterprise Security Re-Architecture & IAM Hardening",
      organization: "Capgemini",
      role: "Associate Consultant",
      summary:
        "Re-architected and hardened system security layers, deploying robust SSL/TLS certificate configurations and Object Lock protocols.",
      impact: "Eliminated vulnerabilities across critical object storage assets and enforced strict IAM boundaries.",
      technologies: ["SSL/TLS", "IAM Policy", "Object Lock", "Security Governance"],
      category: "Security",
    },
  ];

  const skillGroups = [
    {
      name: "Cloud & Infrastructure",
      items: [
        "Amazon Web Services (AWS)",
        "Google Cloud Platform (GCP)",
        "Amazon EC2 & Lambda",
        "Linux System Administration",
        "High Availability Systems",
        "Disaster Recovery (DR)",
      ],
    },
    {
      name: "Middleware & Integration",
      items: [
        "IBM WebSphere Application Server",
        "TIBCO BusinessWorks & EMS",
        "TIBCO iProcess",
        "JBoss Application Server",
        "API Gateways",
        "AS400 Administration",
      ],
    },
    {
      name: "Automation & Platform Ops",
      items: [
        "Python (Automation & Scripting)",
        "Jenkins CI/CD Pipelines",
        "Shell & Bash Scripting",
        "Infrastructure Automation",
        "GitHub & Version Control",
        "Self-Healing Runbooks",
      ],
    },
    {
      name: "Agentic AI & Modern Tools",
      items: [
        "Agentic AI Frameworks",
        "Model Context Protocol (MCP)",
        "AWS Bedrock",
        "GitHub Copilot & Context Crafting",
        "Prompt Engineering",
        "Foundation Models",
      ],
    },
    {
      name: "SRE & Observability",
      items: [
        "Splunk Telemetry",
        "Grafana Observability",
        "Root Cause Analysis (RCA)",
        "Incident & Change Management",
        "ITIL / ITSM Frameworks",
        "Production Support (24/7)",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f5]">
      {/* Subtle Background Lighting */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/[0.04] blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] h-[600px] w-[600px] rounded-full bg-sky-500/[0.03] blur-[140px]" />
      </div>

      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#09090b]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 font-mono text-sm font-semibold text-emerald-400 group-hover:border-emerald-500/50 transition">
              SS
            </span>
            <span className="font-semibold tracking-tight text-white hover:text-emerald-400 transition">
              Siddharth Sharma
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Featured Work</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#certifications" className="hover:text-white transition">Certifications</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/siddharth-sharma-86646679//"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-emerald-500/40 hover:text-white transition"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-3.5 w-3.5 text-emerald-400" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-24">
        {/* HERO SECTION */}
        <section className="relative pt-6 sm:pt-12">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for Enterprise Architecture &amp; Platform Engineering
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Architecting self-healing enterprise platforms &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                  Agentic AI pipelines.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl">
                Senior Middleware &amp; Platform Architect with over a decade in Linux Platform
                Operations, Enterprise Middleware, and Cloud Infrastructure—shifting legacy systems
                from manual toil into automated, high-availability runtime environments.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/10 active:scale-[0.98]"
                >
                  <Workflow className="h-4 w-4" />
                  View Featured Work
                </a>
                <a
                  href="https://www.linkedin.com/in/siddharth-sharma-86646679//"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white hover:border-emerald-500/30 hover:bg-white/[0.08] transition active:scale-[0.98]"
                >
                  <LinkedinIcon className="h-4 w-4 text-emerald-400" />
                  LinkedIn Profile
                  <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
                </a>
                <a
                  href="mailto:sudd1593@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:border-white/20 transition active:scale-[0.98]"
                >
                  <Mail className="h-4 w-4 text-zinc-400" />
                  Email Me
                </a>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-sm space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="space-y-0.5">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono">Location</span>
                  <div className="text-sm font-medium text-white flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                    Delhi, India
                  </div>
                </div>
                <div className="space-y-0.5 text-right">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono">Current Role</span>
                  <div className="text-sm font-medium text-emerald-400">Senior Consultant</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Current Organization</div>
                    <div className="text-sm font-medium text-white">HCLTech</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Certifications</div>
                    <div className="text-sm font-medium text-white">AWS &amp; GCP AI Practitioner</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Education</div>
                    <div className="text-sm font-medium text-white">BTech (2011 – 2015)</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <div className="text-xs text-zinc-400 font-mono">DIRECT CONTACT</div>
                <div className="mt-2 flex items-center justify-between text-xs text-zinc-300">
                  <span className="truncate">sudd1593@gmail.com</span>
                  <button
                    onClick={() => copyToClipboard("sudd1593@gmail.com", "email")}
                    className="inline-flex items-center gap-1 rounded bg-white/5 px-2 py-1 hover:bg-emerald-500/20 hover:text-emerald-400 transition"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                    <span>{copiedEmail ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Highlights Grid */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-xl border border-white/5 bg-zinc-900/40 p-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">10+</div>
              <div className="text-xs text-zinc-400 mt-1">Years Enterprise Experience</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-zinc-900/40 p-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">45%</div>
              <div className="text-xs text-zinc-400 mt-1">Operational Toil Reduction</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-zinc-900/40 p-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">0</div>
              <div className="text-xs text-zinc-400 mt-1">Downtime Cutover Record</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-zinc-900/40 p-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">5</div>
              <div className="text-xs text-zinc-400 mt-1">Cloud &amp; AI Certifications</div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="space-y-6 pt-6">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-emerald-400" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              About &amp; Core Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-5 text-zinc-300 text-base leading-relaxed">
              <p>
                I design self-healing platform architectures that transition legacy enterprise
                infrastructure from high-latency manual toil into automated, cloud-native runtime
                environments.
              </p>
              <p>
                For the past decade, I have operated in the trenches of Middleware Administration,
                Linux Platform Operations, and Platform Engineering—learning exactly how architectures
                break, and how to build them so they don’t.
              </p>
              <p>
                I find the complex integration puzzles where legacy systems refuse to communicate
                with modern cloud applications, and I build the immutable architectural bridges to make
                them communicate seamlessly.
              </p>
            </div>

            <div className="md:col-span-5 space-y-4">
              {/* Executional Principle Card */}
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                  <Workflow className="h-4 w-4" />
                  <span>Executional Principle</span>
                </div>
                <p className="text-sm text-zinc-300 leading-normal">
                  “I automate manual overhead out of the runtime environment. If a repetitive
                  operational chore takes 20 minutes of manual toil, my immediate script target is to build a
                  Python workflow or Jenkins pipeline to safely execute it in 4 seconds.”
                </p>
              </div>

              {/* Current Sprint Card */}
              <div className="rounded-2xl border border-sky-500/20 bg-sky-950/10 p-5 space-y-2">
                <div className="flex items-center gap-2 text-sky-400 text-sm font-semibold">
                  <Sparkles className="h-4 w-4" />
                  <span>Current Sprint</span>
                </div>
                <p className="text-sm text-zinc-300 leading-normal">
                  Deep inside an intensive AWS Generative AI Developer track—focusing on integrating
                  multi-agent orchestration loops, real-time behavioral telemetry, and Model Context
                  Protocol (MCP) frameworks into enterprise platform layers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section id="experience" className="space-y-8 pt-6">
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-emerald-400" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Work Experience
            </h2>
          </div>

          <div className="space-y-8 border-l border-zinc-800 ml-3 pl-6 sm:pl-8">
            {/* Role 1: HCLTech */}
            <div className="relative space-y-4">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-[#09090b]"></span>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white">Senior Consultant</h3>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                    Jul 2019 – Present
                  </span>
                </div>
                <div className="text-sm text-zinc-400 flex items-center gap-2 mt-1">
                  <span className="font-semibold text-zinc-200">HCLTech</span>
                  <span>•</span>
                  <span>Noida, India</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-zinc-300 text-sm leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Engineered and automated end-to-end middleware provisioning and deployment infrastructure across enterprise cloud ecosystems (AWS/GCP), successfully migrating legacy application architectures into modern containerized environments.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Designed and implemented autonomous self-healing scripts and CI/CD pipelines using Python, Shell scripting, and Jenkins, completely eliminating manual environment resets and cutting operational toil by 45%.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Architected telemetry and continuous observability dashboards (Splunk/Grafana), setting up real-time alerting systems that transformed production support teams from a reactive crisis state to proactive anomaly detection.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Spearheaded the secure integration of Agentic AI pipelines and large language model (LLM) workflows into legacy core middleware frameworks, ensuring strict data governance, lineage tracing, and high-throughput reliability.
                  </span>
                </li>
              </ul>
            </div>

            {/* Role 2: Capgemini */}
            <div className="relative space-y-4 pt-6">
              <span className="absolute -left-[31px] sm:-left-[39px] top-7.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-600 ring-4 ring-[#09090b]"></span>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white">Associate Consultant</h3>
                  <span className="rounded-full bg-zinc-800 px-3 py-1 font-mono text-xs text-zinc-400 border border-zinc-700">
                    Aug 2015 – Oct 2018
                  </span>
                </div>
                <div className="text-sm text-zinc-400 flex items-center gap-2 mt-1">
                  <span className="font-semibold text-zinc-200">Capgemini Pvt Ltd</span>
                  <span>•</span>
                  <span>Airoli, Navi Mumbai, India</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-zinc-300 text-sm leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span>
                    Led high-stakes migration projects for critical enterprise applications from IBM WebSphere legacy versions (v8) to high-performance v9.0.5 containerized platforms, ensuring zero-downtime cutovers.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span>
                    Owned root-cause analysis (RCA) and system optimization for complex, multi-tiered infrastructure stacks, successfully isolating performance bottlenecks under high-volume load spikes.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span>
                    Re-architected and hardened system security layers, deploying robust SSL/TLS certificate configurations, strict IAM permission boundaries, and Object Lock protocols to eliminate vulnerabilities across critical object storage assets.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span>
                    Managed global 24/7 production support bridges, translating complex system errors into actionable, rapid resolution pathways while mentoring junior engineers on advanced Linux administration and automated logging diagnostics.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FEATURED WORK & PROJECTS SECTION */}
        <section id="projects" className="space-y-6 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Workflow className="h-5 w-5 text-emerald-400" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Featured Work &amp; Architecture Projects
              </h2>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              REAL ENTERPRISE CASE STUDIES
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredWork.map((project, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-900/50 p-6 hover:border-emerald-500/40 hover:bg-zinc-900/80 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-white/5 px-2.5 py-1 text-xs font-mono text-emerald-400 border border-white/10">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {project.organization}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3">
                    <div className="text-xs font-semibold text-emerald-400">Impact Result:</div>
                    <div className="text-xs text-zinc-200 mt-0.5">{project.impact}</div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-md bg-white/[0.04] px-2 py-0.5 text-xs text-zinc-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS MATRIX SECTION */}
        <section id="skills" className="space-y-6 pt-6">
          <div className="flex items-center gap-2">
            <Cpu className="h-5 w-5 text-emerald-400" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Skills &amp; Technical Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5 space-y-4 hover:border-emerald-500/30 transition"
              >
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <h3 className="font-semibold text-white text-base">{group.name}</h3>
                </div>

                <ul className="space-y-2">
                  {group.items.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center gap-2 text-sm text-zinc-300"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-emerald-400/70 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-emerald-400" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Certifications &amp; Credentials
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400">OFFICIALLY VERIFIED</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5 flex flex-col justify-between hover:border-emerald-500/30 transition"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[11px] font-mono font-medium text-emerald-400 border border-emerald-500/20">
                      {cert.badgeType}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">{cert.period}</span>
                  </div>

                  <h3 className="text-base font-bold text-white">{cert.name}</h3>
                  <div className="text-xs text-zinc-400">{cert.authority}</div>

                  <div className="rounded-lg bg-black/40 p-2 text-[11px] font-mono text-zinc-400 border border-white/5 break-all">
                    <span className="text-zinc-400">ID: </span>
                    <span className="text-zinc-300">{cert.credentialId}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Education Card */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-900/40 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-emerald-400">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Bachelor of Technology (BTech)</h3>
                <p className="text-sm text-zinc-400">IEET, Baddi</p>
              </div>
            </div>
            <div className="font-mono text-xs text-zinc-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 self-start sm:self-auto">
              2011 – 2015
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="space-y-6 pt-6">
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                <Mail className="h-3.5 w-3.5" />
                Let&apos;s Connect
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to optimize your platform infrastructure?
              </h2>

              <p className="text-base text-zinc-300 leading-relaxed">
                Whether you want to discuss eliminating manual operational toil, building
                self-healing middleware pipelines, or integrating Agentic AI into enterprise
                platforms, let&apos;s connect.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="mailto:sudd1593@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
                >
                  <Mail className="h-4 w-4" />
                  Send an Email
                </a>

                <a
                  href="https://www.linkedin.com/in/siddharth-sharma-86646679//"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-emerald-500/40 transition active:scale-[0.98]"
                >
                  <LinkedinIcon className="h-4 w-4 text-emerald-400" />
                  Connect on LinkedIn
                  <ArrowUpRight className="h-4 w-4 text-zinc-400" />
                </a>

                <a
                  href="https://github.com/siddharthsharma-4805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-zinc-300 hover:text-white hover:border-white/20 transition active:scale-[0.98]"
                >
                  <GithubIcon className="h-4 w-4 text-zinc-400" />
                  GitHub Profile
                  <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-400">
                <div className="space-y-1">
                  <div className="text-zinc-400 font-mono">DIRECT EMAIL</div>
                  <button
                    onClick={() => copyToClipboard("sudd1593@gmail.com", "email")}
                    className="text-white hover:text-emerald-400 flex items-center gap-1.5 font-medium transition"
                  >
                    <span>sudd1593@gmail.com</span>
                    {copiedEmail ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3 text-zinc-400" />}
                  </button>
                </div>

                <div className="space-y-1">
                  <div className="text-zinc-400 font-mono">PHONE</div>
                  <button
                    onClick={() => copyToClipboard("+91 97365 07557", "phone")}
                    className="text-white hover:text-emerald-400 flex items-center gap-1.5 font-medium transition"
                  >
                    <span>+91 97365 07557</span>
                    {copiedPhone ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3 text-zinc-400" />}
                  </button>
                </div>

                <div className="space-y-1">
                  <div className="text-zinc-400 font-mono">LOCATION</div>
                  <div className="text-white font-medium">Delhi, India</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-white/10 bg-zinc-950 py-10 text-xs text-zinc-400">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} Siddharth Sharma. Built with Next.js &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/siddharth-sharma-86646679//"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/siddharthsharma-4805"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              GitHub
            </a>
            <a href="mailto:sudd1593@gmail.com" className="hover:text-emerald-400 transition">
              sudd1593@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
