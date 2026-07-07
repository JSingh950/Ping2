import { useState } from "react";

type PingStorePageProps = {
  variant?: "matrix";
};

const whyNow = [
  {
    title: "A physical exchange feels rare again.",
    body: "After years of digital-first interaction and AI-generated noise, people are looking for real moments in rooms, conferences, coworking spaces, campuses, and clubs.",
  },
  {
    title: "The business card is no longer enough.",
    body: "More than 27 billion paper business cards are printed globally every year, and 88% are thrown away within a single week. Ping! makes the exchange permanent without making it awkward.",
  },
  {
    title: "NFC is already native.",
    body: "Modern iPhone and Android devices read NFC without an external scanning app. One tap can open the digital profile, portfolio, socials, links, and contact details you choose.",
  },
];

const specs = [
  {
    label: "Titanium body",
    value: "2.5g",
    copy: "Ultra-lightweight build with a thin 2mm profile, designed as jewelry for identity rather than a health tracker.",
  },
  {
    label: "Charging footprint",
    value: "0",
    copy: "Built-in NFC means the connection gesture has no battery ritual. The ring is ready when the conversation is.",
  },
  {
    label: "Native reach",
    value: "iOS + Android",
    copy: "Works with modern phones right out of the box through native NFC reading.",
  },
];

const finishes = [
  "Obsidian Titanium",
  "Natural Titanium",
  "Signal Edition",
];

const team = [
  {
    name: "Vaness “Reece” Gardner",
    role: "Founder & CEO",
    copy: "Former AI specialist at Babson College and founder of The Generator, Babson's AI lab that grew beyond 1,000 members across the Boston technology ecosystem.",
  },
  {
    name: "Gaspard Seuge",
    role: "Co-Founder & CPO",
    copy: "HEC Paris educated product architect, former Growth at MWM AI, and AI Engineer at Sorare. Built the Ping! web and iOS applications.",
  },
];

function WaveField() {
  const paths = Array.from({ length: 15 }, (_, index) => {
    const offset = index * 13;
    const opacity = 0.08 + index * 0.018;
    return (
      <path
        d={`M -80 ${210 + offset} C 120 ${70 + offset}, 245 ${80 - offset * 0.22}, 335 ${210 - offset * 0.5} S 530 ${360 + offset * 0.28}, 680 ${205 - offset * 0.32} S 875 ${80 + offset * 0.25}, 1040 ${210 + offset * 0.1} S 1200 ${320 - offset * 0.2}, 1360 ${190 + offset * 0.28}`}
        fill="none"
        key={index}
        opacity={opacity}
        stroke="#00FF66"
        strokeWidth="1.2"
      />
    );
  });

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-24 h-[34rem] w-full text-[#00FF66]"
      preserveAspectRatio="none"
      viewBox="0 0 1280 520"
    >
      <g>{paths}</g>
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.36em] text-[#00FF66]">{eyebrow}</p>
      <h2 className="text-4xl font-light leading-[1.05] tracking-[-0.04em] text-white md:text-6xl">{title}</h2>
      {copy ? <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55">{copy}</p> : null}
    </div>
  );
}

export function PingStorePage(_: PingStorePageProps) {
  const [openWhy, setOpenWhy] = useState(0);
  const [activeSpec, setActiveSpec] = useState(0);
  const [finish, setFinish] = useState(finishes[0]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_8%_8%,rgba(0,255,102,.22),transparent_24rem),radial-gradient(circle_at_94%_88%,rgba(0,200,83,.24),transparent_25rem),linear-gradient(180deg,#020402,#000)] font-sans text-white selection:bg-[#00FF66] selection:text-black">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 px-5 backdrop-blur-xl md:px-8">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5">
          <a className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em]" href="#home">
            <span className="h-3 w-3 border border-[#00FF66]" />
            <span>Ping!</span>
          </a>
          <nav className="hidden items-center gap-10 text-[11px] font-medium uppercase tracking-[0.24em] text-white/60 md:flex">
            <a className="transition hover:text-white" href="#home">Home</a>
            <a className="transition hover:text-white" href="#why">About</a>
            <a className="transition hover:text-white" href="#hardware">Hardware</a>
            <a className="transition hover:text-white" href="#team">Team</a>
          </nav>
          <a
            className="border border-white/35 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition hover:border-[#00FF66] hover:bg-[#00FF66] hover:text-black"
            href="mailto:hello@getping.today?subject=Get%20Ping!"
          >
            Shop
          </a>
        </div>
      </header>

      <section id="home" className="relative isolate min-h-[calc(100svh-80px)] scroll-mt-20 overflow-hidden px-5 py-16 md:px-8">
        <WaveField />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-12rem)] max-w-7xl flex-col items-center justify-center text-center">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.38em] text-[#00FF66]">
            Ping! by Ping Ring Inc.
          </p>
          <h1 className="max-w-4xl text-5xl font-light uppercase leading-[1.02] tracking-[0.04em] text-white md:text-7xl lg:text-8xl">
            Welcome
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 md:text-base">
            A luxury NFC identity ring for portfolios, links, and real-world connection. Tap once to bridge the person in front of you to the digital trail you choose.
          </p>
          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
            <a
              className="bg-[#00FF66] px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black shadow-[0_0_28px_rgba(0,255,102,.35)] transition hover:bg-white"
              href="#store"
            >
              Learn more
            </a>
            <a
              className="border border-white/20 px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/75 transition hover:border-white hover:text-white"
              href="mailto:hello@getping.today?subject=Get%20Ping!"
            >
              Get Ping!
            </a>
          </div>
        </div>
      </section>

      <section id="store" className="scroll-mt-20 border-y border-white/10 px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="border border-white/10 bg-white/[0.025] p-5">
            <video
              className="aspect-[16/10] w-full object-cover opacity-85"
              src="/ping-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.34em] text-[#00FF66]">Identity hardware</p>
            <h2 className="text-4xl font-light leading-[1.04] tracking-[-0.04em] text-white md:text-6xl">
              The ring is the interface.
            </h2>
            <p className="mt-7 text-base leading-8 text-white/60">
              Ping! is designed purely for identity, portfolios, and in-person connection. It is not a health tracker. It is a subtle titanium object that lets a moment become a remembered follow-up.
            </p>
            <div className="mt-10 grid gap-3">
              {finishes.map((item) => (
                <button
                  className={`flex items-center justify-between border px-5 py-4 text-left transition ${
                    finish === item ? "border-[#00FF66] bg-[#00FF66]/8 text-white" : "border-white/10 text-white/55 hover:border-white/30 hover:text-white"
                  }`}
                  key={item}
                  onClick={() => setFinish(item)}
                  type="button"
                >
                  <span className="text-sm font-medium tracking-[0.12em]">{item}</span>
                  <span className="h-px w-16 bg-current opacity-40" />
                </button>
              ))}
            </div>
            <a
              className="mt-8 block bg-[#00FF66] px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-white"
              href="mailto:hello@getping.today?subject=Get%20Ping!"
            >
              Get Ping!
            </a>
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-20 px-5 py-24 md:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Why now"
          title="Connection needs a cleaner signal."
          copy="The old exchange breaks down between disposable paper, noisy profiles, and awkward QR-code rituals. Ping! makes the physical moment feel intentional again."
        />
        <div className="mx-auto max-w-4xl divide-y divide-white/10 border-y border-white/10">
          {whyNow.map((item, index) => (
            <div key={item.title}>
              <button
                className="flex w-full items-center justify-between gap-6 py-7 text-left"
                onClick={() => setOpenWhy(openWhy === index ? -1 : index)}
                type="button"
              >
                <span className="text-xl font-light tracking-[-0.02em] text-white md:text-3xl">{item.title}</span>
                <span className="shrink-0 text-3xl font-light text-[#00FF66]">{openWhy === index ? "-" : "+"}</span>
              </button>
              <div className={`grid transition-all duration-500 ${openWhy === index ? "grid-rows-[1fr] pb-8" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="max-w-3xl text-sm leading-7 text-white/55">{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="hardware" className="scroll-mt-20 border-y border-white/10 px-5 py-24 md:px-8 lg:py-32">
        <SectionHeading eyebrow="Hardware" title="Minimal object. Maximum signal." />
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="border border-white/10 bg-white/[0.025] p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#00FF66]">{specs[activeSpec].label}</p>
            <p className="mt-10 text-6xl font-light tracking-[-0.06em] text-white md:text-8xl">
              {specs[activeSpec].value}
            </p>
            <p className="mt-8 text-sm leading-7 text-white/55">{specs[activeSpec].copy}</p>
          </div>
          <div className="grid gap-3">
            {specs.map((item, index) => (
              <button
                className={`border p-6 text-left transition ${
                  activeSpec === index ? "border-[#00FF66] bg-[#00FF66]/8" : "border-white/10 bg-white/[0.02] hover:border-white/25"
                }`}
                key={item.label}
                onClick={() => setActiveSpec(index)}
                type="button"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#00FF66]">{item.label}</p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">{item.copy}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-20 px-5 py-24 md:px-8 lg:py-32">
        <SectionHeading eyebrow="Team" title="Built by AI-native product operators." />
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 md:grid-cols-2">
          {team.map((person) => (
            <article className="bg-black p-8 md:p-10" key={person.name}>
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-[#00FF66]">{person.role}</p>
              <h3 className="text-3xl font-light leading-tight tracking-[-0.03em] text-white md:text-5xl">{person.name}</h3>
              <p className="mt-8 text-sm leading-7 text-white/55">{person.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-[11px] uppercase tracking-[0.24em] text-white/40 md:flex-row">
          <p>Ping! by Ping Ring Inc.</p>
          <p>Identity. Portfolios. Real-world connection.</p>
        </div>
      </footer>
    </main>
  );
}
