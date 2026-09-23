"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Mail,
  MapPin,
  Briefcase,
  ArrowUpRight,
  Sparkles,
  Copy,
  Check,
  Terminal,
  Workflow,
  Shield,
  Layers,
  Cpu,
  GraduationCap,
  Award,
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
      authority: "Amazon Web Services",
      period: "Nov 2025 – Nov 2028",
      credentialId: "f97e5074af764303a609fd82866c5e0d",
      url: "https://aws.amazon.com/verification",
      tag: "AI & ML",
    },
    {
      name: "Google Cloud Certified Generative AI Leader",
      authority: "Google Cloud",
      period: "Nov 2025 – Nov 2028",
      credentialId: "a3f13837c17e498a84f3e43cbbfc60a8",
      url: "https://www.credly.com/badges/7f3f6022-de0d-4373-9fe3-7d31362c2414",
      tag: "GenAI",
    },
    {
      name: "GitHub Copilot Certified",
      authority: "Microsoft",
      period: "Oct 2025 – Oct 2027",
      credentialId: "35C5B90CBB8EE53C",
      url: "https://learn.microsoft.com/en-us/users/siddharthsharma-4805/transcript",
      tag: "Developer Tools",
    },
    {
      name: "Google Cloud Certified Cloud Digital Leader",
      authority: "Google Cloud",
      period: "Nov 2025 – Nov 2028",
      credentialId: "8d908a6f405949e4b8bdcaca964275ce",
      url: "https://www.credly.com/badges/d1e17e43-13ea-4cf3-8dc8-9e368020241b",
      tag: "Cloud",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      authority: "Amazon Web Services",
      period: "Nov 2022 – Aug 2028",
      credentialId: "W9KYJNFCREQE1JGH",
      url: "https://aws.amazon.com/verification",
      tag: "Cloud",
    },
  ];

  const featuredWork = [
    {
      index: "01",
      title: "Autonomous Self-Healing Middleware Pipelines",
      organization: "HCLTech",
      role: "Senior Consultant",
      summary:
        "Designed and implemented autonomous self-healing scripts and automated CI/CD pipelines using Python, Shell, and Jenkins, completely eliminating manual environment resets.",
      impact: "Reduced repetitive operational toil by 45% across enterprise cloud ecosystems (AWS/GCP).",
      technologies: ["Python", "Jenkins", "Bash", "CI/CD", "AWS", "GCP"],
    },
    {
      index: "02",
      title: "Zero-Downtime Enterprise WebSphere Migration",
      organization: "Capgemini",
      role: "Associate Consultant",
      summary:
        "Led critical application migrations from legacy IBM WebSphere v8 to high-performance v9.0.5 containerized platforms with rigorous load testing.",
      impact: "Executed seamless zero-downtime cutover across multi-tiered enterprise stacks.",
      technologies: ["IBM WebSphere", "Linux Administration", "Containerization", "High Availability"],
    },
    {
      index: "03",
      title: "Real-Time Telemetry & Proactive Anomaly Detection",
      organization: "HCLTech",
      role: "Senior Consultant",
      summary:
        "Architected telemetry pipelines and continuous observability dashboards using Splunk and Grafana with automated alert thresholds.",
      impact: "Transformed production support from reactive crisis firefighting to proactive anomaly prevention.",
      technologies: ["Splunk", "Grafana", "Observability", "Telemetry", "SRE"],
    },
    {
      index: "04",
      title: "Agentic AI & MCP Framework Integration",
      organization: "Enterprise R&D / HCLTech",
      role: "Senior Architect",
      summary:
        "Spearheaded the secure integration of Agentic AI pipelines, LLM workflows, and Model Context Protocol (MCP) data channels into legacy middleware stacks.",
      impact: "Enforced strict enterprise data governance, lineage tracing, and high-throughput reliability.",
      technologies: ["Agentic AI", "Model Context Protocol (MCP)", "AWS Bedrock", "Prompt Architecture"],
    },
    {
      index: "05",
      title: "Enterprise Security Re-Architecture & IAM Hardening",
      organization: "Capgemini",
      role: "Associate Consultant",
      summary:
        "Re-architected and hardened system security layers, deploying robust SSL/TLS certificate configurations and Object Lock protocols.",
      impact: "Eliminated vulnerabilities across critical object storage assets and enforced strict IAM boundaries.",
      technologies: ["SSL/TLS", "IAM Policy", "Object Lock", "Security Governance"],
    },
  ];

  const skillCategories = [
    {
      category: "Cloud & Infrastructure",
      skills: [
        "Amazon Web Services (AWS)",
        "Google Cloud Platform (GCP)",
        "Amazon EC2 & Lambda",
        "Linux System Administration",
        "High Availability Systems",
        "Disaster Recovery (DR)",
      ],
    },
    {
      category: "Middleware & Integration",
      skills: [
        "IBM WebSphere Application Server",
        "TIBCO BusinessWorks & EMS",
        "TIBCO iProcess",
        "JBoss Application Server",
        "API Gateways",
        "AS400 Administration",
      ],
    },
    {
      category: "Automation & Platform Ops",
      skills: [
        "Python (Automation & Scripting)",
        "Jenkins CI/CD Pipelines",
        "Shell & Bash Scripting",
        "Infrastructure Automation",
        "GitHub & Version Control",
        "Self-Healing Runbooks",
      ],
    },
    {
      category: "Agentic AI & Next-Gen Systems",
      skills: [
        "Agentic AI Frameworks",
        "Model Context Protocol (MCP)",
        "AWS Bedrock",
        "GitHub Copilot & Context Crafting",
        "Prompt Engineering",
        "Foundation Models",
      ],
    },
    {
      category: "SRE & Observability",
      skills: [
        "Splunk Telemetry",
        "Grafana Observability",
        "Root Cause Analysis (RCA)",
        "Incident & Change Management",
        "ITIL / ITSM Frameworks",
        "24/7 Production Support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-white">
      {/* Background Subtle Gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-white/[0.03] to-transparent blur-3xl opacity-70" />
      </div>

      {/* Persistent Minimal Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#09090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/profile.jpg"
              alt="Siddharth Sharma"
              width={64}
              height={64}
              priority
              sizes="32px"
              className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10 group-hover:ring-emerald-400/50 transition duration-200"
            />
            <div className="leading-tight">
              <span className="text-sm font-medium tracking-tight text-white group-hover:text-emerald-400 transition">
                Siddharth Sharma
              </span>
              <span className="hidden sm:block text-[11px] font-mono text-zinc-500">
                Platform &amp; AI Architect
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#credentials" className="hover:text-white transition">Credentials</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/siddharth-sharma-86646679//"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-medium text-zinc-300 hover:border-emerald-500/40 hover:text-white transition"
            >
              <LinkedinIcon className="h-3 w-3 text-emerald-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3.5 py-1 text-xs font-semibold text-zinc-950 hover:bg-white hover:shadow-sm transition"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24 space-y-28 sm:space-y-36">
        {/* HERO SECTION */}
        <section className="space-y-12">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1 text-xs font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Available for Enterprise Architecture &amp; Platform Engineering</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-white leading-[1.12]">
                Architecting self-healing enterprise platforms &amp;{" "}
                <span className="font-medium text-emerald-400">Agentic AI pipelines.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl">
                Senior Middleware &amp; Platform Architect with over a decade in Linux Platform
                Operations, Enterprise Middleware, and Cloud Infrastructure—transitioning legacy
                systems from high-latency manual toil into automated, cloud-native runtime environments.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition"
                >
                  <Workflow className="h-3.5 w-3.5" />
                  Explore Featured Work
                </a>
                <a
                  href="https://www.linkedin.com/in/siddharth-sharma-86646679//"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs font-medium text-zinc-300 hover:text-white hover:border-white/20 transition"
                >
                  <LinkedinIcon className="h-3.5 w-3.5 text-emerald-400" />
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3 text-zinc-500" />
                </a>
                <a
                  href="mailto:sudd1593@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs font-medium text-zinc-300 hover:text-white hover:border-white/20 transition"
                >
                  <Mail className="h-3.5 w-3.5 text-zinc-400" />
                  Email Me
                </a>
              </div>
            </div>

            {/* Right Profile Frame */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center">
              <div className="w-full max-w-[280px] rounded-3xl border border-white/[0.08] bg-zinc-900/40 p-5 space-y-4 backdrop-blur-sm">
                <div className="relative mx-auto w-36 h-36 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt="Portrait of Siddharth Sharma, Senior Middleware and Platform Architect"
                    fill
                    priority
                    sizes="(max-width: 1024px) 144px, 144px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/20 rounded-2xl" />
                </div>

                <div className="text-center space-y-1">
                  <div className="text-base font-semibold text-white tracking-tight">Siddharth Sharma</div>
                  <div className="text-xs text-zinc-400">Senior Consultant • HCLTech</div>
                  <div className="text-xs font-mono text-emerald-400 flex items-center justify-center gap-1 pt-0.5">
                    <MapPin className="h-3 w-3" />
                    Delhi, India
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-mono text-[11px]">sudd1593@gmail.com</span>
                  <button
                    onClick={() => copyToClipboard("sudd1593@gmail.com", "email")}
                    className="text-zinc-300 hover:text-emerald-400 transition"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Metrics Strip */}
          <div className="pt-6 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-light tracking-tight text-white font-mono">10+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Years Experience</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-light tracking-tight text-emerald-400 font-mono">45%</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Toil Reduction</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-light tracking-tight text-white font-mono">0</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Cutover Downtime</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-200 font-mono">5</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Cloud &amp; AI Certifications</div>
            </div>
          </div>
        </section>

        {/* ABOUT & PRINCIPLES SECTION */}
        <section id="about" className="space-y-10 pt-4 border-t border-white/[0.06]">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">
              Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-white">
              About &amp; Core Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-7 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
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
              {/* Executional Principle */}
              <div className="rounded-2xl border border-white/[0.08] bg-zinc-900/30 p-6 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>Executional Principle</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  “I automate manual overhead out of the runtime environment. If a repetitive
                  operational chore takes 20 minutes of manual toil, my immediate script target is to build a
                  Python workflow or Jenkins pipeline to safely execute it in 4 seconds.”
                </p>
              </div>

              {/* Current Sprint */}
              <div className="rounded-2xl border border-white/[0.08] bg-zinc-900/30 p-6 space-y-2">
                <div className="flex items-center gap-2 text-zinc-300 text-xs font-mono uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Current Sprint</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Deep inside an intensive AWS Generative AI Developer track—focusing on integrating
                  multi-agent orchestration loops, real-time behavioral telemetry, and Model Context
                  Protocol (MCP) frameworks into enterprise platform layers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="space-y-10 pt-4 border-t border-white/[0.06]">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">
              Career Trajectory
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-white">
              Work Experience
            </h2>
          </div>

          <div className="space-y-12">
            {/* Role 1: HCLTech */}
            <div className="group rounded-2xl border border-white/[0.06] bg-zinc-900/20 p-6 sm:p-8 space-y-5 hover:border-white/10 transition">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                <div>
                  <h3 className="text-xl font-medium text-white tracking-tight">Senior Consultant</h3>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    <span className="font-semibold text-zinc-200">HCLTech</span> • Noida, India
                  </div>
                </div>
                <span className="self-start sm:self-auto rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
                  Jul 2019 – Present
                </span>
              </div>

              <ul className="space-y-3 text-sm text-zinc-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span>
                    Engineered and automated end-to-end middleware provisioning and deployment infrastructure across enterprise cloud ecosystems (AWS/GCP), successfully migrating legacy application architectures into modern containerized environments.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span>
                    Designed and implemented autonomous self-healing scripts and CI/CD pipelines using Python, Shell scripting, and Jenkins, completely eliminating manual environment resets and cutting operational toil by 45%.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span>
                    Architected telemetry and continuous observability dashboards (Splunk/Grafana), setting up real-time alerting systems that transformed production support teams from a reactive crisis state to proactive anomaly detection.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span>
                    Spearheaded the secure integration of Agentic AI pipelines and large language model (LLM) workflows into legacy core middleware frameworks, ensuring strict data governance, lineage tracing, and high-throughput reliability.
                  </span>
                </li>
              </ul>
            </div>

            {/* Role 2: Capgemini */}
            <div className="group rounded-2xl border border-white/[0.06] bg-zinc-900/20 p-6 sm:p-8 space-y-5 hover:border-white/10 transition">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                <div>
                  <h3 className="text-xl font-medium text-white tracking-tight">Associate Consultant</h3>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    <span className="font-semibold text-zinc-200">Capgemini Pvt Ltd</span> • Airoli, Navi Mumbai, India
                  </div>
                </div>
                <span className="self-start sm:self-auto rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-400">
                  Aug 2015 – Oct 2018
                </span>
              </div>

              <ul className="space-y-3 text-sm text-zinc-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 shrink-0 mt-2" />
                  <span>
                    Led high-stakes migration projects for critical enterprise applications from IBM WebSphere legacy versions (v8) to high-performance v9.0.5 containerized platforms, ensuring zero-downtime cutovers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 shrink-0 mt-2" />
                  <span>
                    Owned root-cause analysis (RCA) and system optimization for complex, multi-tiered infrastructure stacks, successfully isolating performance bottlenecks under high-volume load spikes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 shrink-0 mt-2" />
                  <span>
                    Re-architected and hardened system security layers, deploying robust SSL/TLS certificate configurations, strict IAM permission boundaries, and Object Lock protocols to eliminate vulnerabilities across critical object storage assets.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 shrink-0 mt-2" />
                  <span>
                    Managed global 24/7 production support bridges, translating complex system errors into actionable, rapid resolution pathways while mentoring junior engineers on advanced Linux administration and automated logging diagnostics.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FEATURED WORK & ARCHITECTURE PROJECTS */}
        <section id="work" className="space-y-10 pt-4 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                Selected Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-white">
                Featured Architecture Projects
              </h2>
            </div>
            <div className="text-xs font-mono text-zinc-500">5 CASE STUDIES</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredWork.map((project, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-zinc-900/20 p-7 hover:border-emerald-500/30 hover:bg-zinc-900/40 transition duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-400 font-semibold">{project.index}</span>
                    <span className="text-zinc-500">{project.organization}</span>
                  </div>

                  <h3 className="text-lg font-medium text-white group-hover:text-emerald-300 transition">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="border-l-2 border-emerald-500/40 pl-3 py-0.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">Impact</div>
                    <div className="text-xs text-zinc-300 mt-0.5">{project.impact}</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.05] flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-md bg-white/[0.03] px-2 py-0.5 text-[11px] font-mono text-zinc-400 border border-white/[0.05]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS MATRIX */}
        <section id="skills" className="space-y-10 pt-4 border-t border-white/[0.06]">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-white">
              Skills &amp; Technical Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.06] bg-zinc-900/20 p-6 space-y-4"
              >
                <div className="text-sm font-medium text-white border-b border-white/[0.06] pb-3 flex items-center justify-between">
                  <span>{cat.category}</span>
                  <span className="text-[10px] font-mono text-emerald-400/80">0{idx + 1}</span>
                </div>

                <ul className="space-y-2">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-xs text-zinc-400 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-emerald-400/60 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS & CREDENTIALS */}
        <section id="credentials" className="space-y-10 pt-4 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                Verifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-white">
                Certifications &amp; Education
              </h2>
            </div>
            <div className="text-xs font-mono text-zinc-500">OFFICIALLY VERIFIED</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.06] bg-zinc-900/20 p-5 flex flex-col justify-between space-y-4 hover:border-emerald-500/30 transition"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                      {cert.tag}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">{cert.period}</span>
                  </div>

                  <h3 className="text-sm font-medium text-white tracking-tight">{cert.name}</h3>
                  <div className="text-xs text-zinc-400">{cert.authority}</div>

                  <div className="text-[10px] font-mono text-zinc-500 bg-black/30 p-1.5 rounded border border-white/[0.04] break-all">
                    ID: {cert.credentialId}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.04]">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Education Strip */}
          <div className="rounded-2xl border border-white/[0.06] bg-zinc-900/20 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-emerald-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-medium text-white">Bachelor of Technology (BTech)</h3>
                <p className="text-xs text-zinc-400">IEET, Baddi</p>
              </div>
            </div>
            <div className="text-xs font-mono text-zinc-400 bg-white/[0.02] border border-white/[0.06] px-3 py-1 rounded-md self-start sm:self-auto">
              2011 – 2015
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="space-y-8 pt-4 border-t border-white/[0.06]">
          <div className="rounded-3xl border border-white/[0.08] bg-zinc-900/30 p-8 sm:p-12 space-y-6">
            <div className="max-w-xl space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400">
                Connect
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-white">
                Ready to optimize your platform infrastructure?
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                Whether discussing self-healing middleware pipelines, eliminating manual operational
                toil, or integrating Agentic AI frameworks, feel free to reach out.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:sudd1593@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition"
              >
                <Mail className="h-3.5 w-3.5" />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/siddharth-sharma-86646679//"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-xs font-medium text-white hover:border-emerald-500/30 transition"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-emerald-400" />
                LinkedIn Profile
                <ArrowUpRight className="h-3 w-3 text-zinc-400" />
              </a>
            </div>

            <div className="pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-zinc-400">
              <div className="space-y-1">
                <div className="font-mono text-[11px] text-zinc-500">DIRECT EMAIL</div>
                <button
                  onClick={() => copyToClipboard("sudd1593@gmail.com", "email")}
                  className="text-zinc-200 hover:text-emerald-400 flex items-center gap-1.5 font-medium transition"
                >
                  <span>sudd1593@gmail.com</span>
                  {copiedEmail ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3 text-zinc-500" />}
                </button>
              </div>

              <div className="space-y-1">
                <div className="font-mono text-[11px] text-zinc-500">PHONE</div>
                <button
                  onClick={() => copyToClipboard("+91 97365 07557", "phone")}
                  className="text-zinc-200 hover:text-emerald-400 flex items-center gap-1.5 font-medium transition"
                >
                  <span>+91 97365 07557</span>
                  {copiedPhone ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3 text-zinc-500" />}
                </button>
              </div>

              <div className="space-y-1">
                <div className="font-mono text-[11px] text-zinc-500">LOCATION</div>
                <div className="text-zinc-200 font-medium">Delhi, India</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-12 text-xs text-zinc-500">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} Siddharth Sharma. Built with Next.js &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/siddharth-sharma-86646679//"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/BNM-IN/portfolio-website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition"
            >
              GitHub
            </a>
            <a href="mailto:sudd1593@gmail.com" className="hover:text-zinc-300 transition">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
