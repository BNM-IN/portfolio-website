import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing | Siddharth Sharma",
  description:
    "Notes on platform engineering, agentic AI execution boundaries, and what actually breaks in production.",
};

const LINKS = {
  linkedin: "https://www.linkedin.com/in/siddharth-sharma-86646679",
} as const;

/**
 * Posts written and published by Siddharth on LinkedIn.
 * Titles and excerpts are his own words, taken verbatim from the posts.
 * Add a new entry at the top; numbering is derived, not stored.
 */
const POSTS = [
  {
    title: "The terrifying reality of the execution boundary",
    date: "2026-09-16",
    excerpt:
      "Everyone wants to build a team of autonomous AI agents, but almost nobody is talking about the terrifying reality of the execution boundary. Meta quietly shifted the entire agentic architecture map this week by introducing Muse — a personal AI agent that handles emails, bookings, and payments on your behalf.",
    topics: ["Agentic AI", "Platform Architecture"],
    link: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7505840349446275073",
  },
  {
    title: "The vendor hands you what the AI can do",
    date: "2026-08-08",
    excerpt:
      "The vendor hands you what the AI can do. You still have to build everything that makes it safe to use under full enterprise load. Many organizations approach AI adoption as a superficial shopping list — budgeting heavily for frontier model API tokens while completely ignoring the underlying platform architecture constraints.",
    topics: ["Enterprise AI", "Guardrails"],
    link: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7491691730979876864",
  },
  {
    title: "A 2:00 AM production bridge",
    date: "2026-08-06",
    excerpt:
      "There is nothing quite like the adrenaline rush of a 2:00 AM production bridge when a critical enterprise platform goes completely dark. I recently drove a cross-functional war room bridge during a massive, unexplained production outage — the observability stack flashing red, application servers choking under an unprecedented traffic spike.",
    topics: ["SRE", "Incident Response"],
    link: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7491003691655860224",
  },
] as const;

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 antialiased">
      {/* background wash, matching the home page */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-white/[0.03] to-transparent blur-3xl opacity-70" />
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#09090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3 group">
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
              <span className="block text-sm font-medium tracking-tight text-white group-hover:text-emerald-400 transition">
                Siddharth Sharma
              </span>
              <span className="hidden sm:block text-[11px] font-mono text-zinc-500">
                Platform &amp; AI Architect
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-medium text-zinc-300 hover:border-emerald-500/40 hover:text-white transition"
          >
            <span aria-hidden="true">&larr;</span>
            Back to portfolio
          </Link>
        </div>
      </header>

      <main className="relative mx-auto max-w-3xl px-6 pb-24 pt-14 sm:pt-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">
          Writing
        </p>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Notes from the platform layer
        </h1>
        <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-zinc-400">
          Short pieces on agentic AI, platform architecture and what actually breaks in
          production. Originally published on LinkedIn.
        </p>

        <ol className="mt-14 space-y-px">
          {POSTS.map((post, i) => (
            <li key={post.link}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 sm:p-7 transition hover:border-emerald-500/25 hover:bg-white/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-7">
                  <span
                    aria-hidden="true"
                    className="font-mono text-2xl sm:text-3xl font-semibold leading-none text-zinc-700 transition group-hover:text-emerald-400/80 sm:pt-1"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-zinc-500">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      {post.topics.map((t) => (
                        <span key={t} className="text-zinc-600">
                          &middot; {t}
                        </span>
                      ))}
                    </div>

                    <h2 className="mt-2 text-lg sm:text-xl font-semibold tracking-tight text-white group-hover:text-emerald-400 transition">
                      {post.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {post.excerpt}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 group-hover:text-emerald-400 transition">
                      Read on LinkedIn
                      <span
                        aria-hidden="true"
                        className="transition group-hover:translate-x-0.5"
                      >
                        &rarr;
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ol>

        <div className="mt-14 rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 text-center">
          <p className="text-sm text-zinc-400">
            More of these go up on LinkedIn first.
          </p>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-2.5 text-xs font-medium text-white hover:border-emerald-500/30 transition"
          >
            Follow on LinkedIn
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </main>

      <footer className="relative border-t border-white/[0.06]">
        <div className="mx-auto max-w-3xl px-6 py-8 text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} Siddharth Sharma.
        </div>
      </footer>
    </div>
  );
}
