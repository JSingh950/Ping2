import { useState } from "react";

type PingStorePageProps = {
  variant?: "matrix";
};

const finishes = [
  {
    name: "Obsidian Titanium",
    note: "polished black titanium",
    swatch: "bg-neutral-950",
  },
  {
    name: "Natural Titanium",
    note: "brushed silver titanium",
    swatch: "bg-zinc-300",
  },
  {
    name: "Signal Edition",
    note: "electric green interior line",
    swatch: "bg-[#00FF66]",
  },
];

const whyNow = [
  {
    title: "Digital identity became too fragmented.",
    body: "Portfolios, socials, calendars, websites, and contact cards now live in too many places. Ping! turns the in-person exchange into one deliberate tap that opens the profile you choose.",
  },
  {
    title: "Paper cards do not survive the week.",
    body: "Over 27 billion paper business cards are printed globally every year, and 88% are thrown away within a single week. Ping! replaces the disposable object with a permanent identity key.",
  },
  {
    title: "NFC is already built into the room.",
    body: "Modern iPhone and Android devices read NFC natively. No camera framing, no scanning app, no awkward QR-code pause; just a tap from the ring to the phone.",
  },
];

const productMoments = [
  {
    label: "Thinner profile",
    value: "2mm",
    title: "A ring first, a device second.",
    body: "A minimal titanium profile designed to disappear into daily wear while staying ready for the moment a real-world connection happens.",
  },
  {
    label: "Titanium weight",
    value: "2.5g",
    title: "Ultra-light, high signal.",
    body: "Ping! is built around a 2.5g titanium body, giving the product a premium jewelry feel without turning it into another screen or tracker.",
  },
  {
    label: "Charging",
    value: "0",
    title: "No battery ritual.",
    body: "Built-in NFC creates a zero-charging footprint for the exchange itself. The ring is always ready when the room turns into an opportunity.",
  },
];

const team = [
  {
    name: "Vaness “Reece” Gardner",
    role: "Founder & CEO",
    intro:
      "Former AI specialist at Babson College and Babson alum. Founded The Generator, Babson's AI lab that grew beyond 1,000 members across the Boston technology ecosystem.",
    details:
      "Reece moved Ping! from creative text-to-image-to-3D workflows into a physical titanium device worn by active users in under 12 months.",
  },
  {
    name: "Gaspard Seuge",
    role: "Co-Founder & CPO",
    intro:
      "HEC Paris educated product architect. Former Growth at MWM AI and AI Engineer at Sorare, the multi-billion-dollar fantasy sports web3 platform.",
    details:
      "Gaspard built the Ping! web and iOS applications and helped generate 300K+ organic impressions through the early brand and product system.",
  },
];

function RingObject({ swatch }: { swatch: string }) {
  return (
    <div className="relative flex aspect-square w-64 items-center justify-center md:w-80">
      <div className="absolute inset-0 rounded-full bg-[#00FF66]/10 blur-3xl" />
      <div className={`relative aspect-square w-full rounded-full border-[28px] ${swatch} border-current text-zinc-200 shadow-[0_0_90px_rgba(0,255,102,.12)]`}>
        <div className="absolute inset-[22%] rounded-full bg-black" />
        <div className="absolute left-1/2 top-[-14%] h-12 w-px -translate-x-1/2 bg-[#00FF66]" />
      </div>
    </div>
  );
}

export function PingStorePage(_: PingStorePageProps) {
  const [finish, setFinish] = useState(finishes[0]);
  const [openWhy, setOpenWhy] = useState(0);
  const [activeMoment, setActiveMoment] = useState(0);

  return (
    <main className="min-h-screen bg-black font-sans text-white selection:bg-[#00FF66] selection:text-black">
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/35 px-5 py-4 text-white backdrop-blur-xl md:px-8">
        <a href="#film" className="text-sm font-semibold uppercase tracking-[0.32em]">
          Ping!
        </a>
        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.28em] text-white/60 md:flex">
          <a className="transition hover:text-[#00FF66]" href="#store">
            Store
          </a>
          <a className="transition hover:text-[#00FF66]" href="#why">
            Why now
          </a>
          <a className="transition hover:text-[#00FF66]" href="#team">
            Team
          </a>
        </nav>
        <a
          className="border border-[#00FF66] bg-[#00FF66] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-black transition hover:bg-white"
          href="mailto:hello@getping.today?subject=Get%20Ping!"
        >
          Get Ping!
        </a>
      </header>

      <section id="film" className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/ping-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.88),rgba(0,0,0,.26)_48%,rgba(0,0,0,.78)),linear-gradient(0deg,rgba(0,0,0,.9),transparent_34%,rgba(0,0,0,.35))]" />
        <div className="relative z-10 flex min-h-screen items-end px-5 pb-16 pt-28 md:px-8 lg:pb-24">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#00FF66]">
              Introducing Ping! by Ping Ring Inc.
            </p>
            <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.84] tracking-[-0.06em] text-white md:text-8xl lg:text-[10rem]">
              Built to be remembered.
            </h1>
            <div className="mt-8 grid max-w-4xl gap-6 border-t border-[#00FF66]/45 pt-7 md:grid-cols-[1.1fr_.9fr]">
              <p className="text-xl font-semibold leading-tight text-white md:text-3xl">
                A titanium NFC identity ring for portfolios, links, and real-world connection.
              </p>
              <p className="text-sm leading-7 text-zinc-300">
                Ping! is not a health tracker. It is a physical key for your digital trail, made for the room, the introduction, and the follow-up after the moment passes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="store" className="grid border-y border-white/10 bg-black lg:grid-cols-[minmax(0,1.12fr)_minmax(25rem,.88fr)]">
        <div className="grid gap-px bg-white/10 p-px lg:grid-cols-2">
          <div className="relative flex min-h-[46rem] items-center justify-center overflow-hidden bg-[#050505] lg:col-span-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,255,102,.18),transparent_34%),linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:auto,84px_84px,84px_84px]" />
            <RingObject swatch={finish.swatch} />
            <div className="absolute bottom-8 left-8 right-8 flex justify-between border-t border-[#00FF66]/35 pt-5 text-[11px] uppercase tracking-[0.26em] text-zinc-500">
              <span>{finish.name}</span>
              <span className="text-[#00FF66]">NFC identity ring</span>
            </div>
          </div>
          {finishes.map((item) => (
            <button
              className="group relative flex min-h-80 items-center justify-center overflow-hidden bg-black text-left"
              key={item.name}
              onClick={() => setFinish(item)}
              type="button"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(0,255,102,.14),transparent_46%)]" />
              <RingObject swatch={item.swatch} />
              <div className="absolute bottom-6 left-6 right-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">{item.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">{item.note}</p>
              </div>
            </button>
          ))}
        </div>

        <aside className="border-l border-white/10 bg-black lg:sticky lg:top-0 lg:h-screen" id="buy">
          <div className="flex h-full flex-col justify-between gap-12 p-6 pt-24 md:p-10 md:pt-28">
            <div>
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#00FF66]">
                  Ping! Store
                </span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">2.5g / no charge</span>
              </div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">Ping! by Ping Ring Inc.</p>
              <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-white md:text-7xl">
                The ring that carries your signal.
              </h2>
              <p className="mt-7 text-base leading-7 text-zinc-400">
                Designed for identity, portfolios, and bridging physical in-person connection to your digital trail. Works natively with modern iPhone and Android devices through NFC.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#00FF66]">Choose your finish</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{finish.note}</p>
                </div>
                <div className="grid gap-3">
                  {finishes.map((item) => (
                    <button
                      className={`flex items-center justify-between border px-4 py-4 text-left transition ${
                        finish.name === item.name
                          ? "border-[#00FF66] text-white"
                          : "border-white/15 text-zinc-400 hover:border-[#00FF66]/70 hover:text-white"
                      }`}
                      key={item.name}
                      onClick={() => setFinish(item)}
                      type="button"
                    >
                      <span>
                        <span className="block text-sm font-semibold">{item.name}</span>
                        <span className="mt-1 block text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                          {item.note}
                        </span>
                      </span>
                      <span className={`h-5 w-5 rounded-full border border-white/30 ${item.swatch}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 border border-white/10 text-center">
                {["2.5g titanium", "native NFC", "not health"].map((item) => (
                  <div className="border-r border-white/10 px-3 py-4 last:border-r-0" key={item}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">{item}</p>
                  </div>
                ))}
              </div>

              <a
                className="block border border-[#00FF66] bg-[#00FF66] px-6 py-5 text-center text-sm font-black uppercase tracking-[0.24em] text-black transition hover:bg-white"
                href="mailto:hello@getping.today?subject=Get%20Ping!"
              >
                Get Ping!
              </a>
            </div>
          </div>
        </aside>
      </section>

      <section id="why" className="border-b border-white/10 px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.72fr_1fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#00FF66]">Why now</p>
            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-7xl">
              The room matters again.
            </h2>
          </div>
          <div className="divide-y divide-white/10">
            {whyNow.map((item, index) => (
              <div key={item.title}>
                <button
                  className="flex w-full items-center justify-between gap-6 py-8 text-left"
                  onClick={() => setOpenWhy(openWhy === index ? -1 : index)}
                  type="button"
                >
                  <span className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-4xl">{item.title}</span>
                  <span className="text-4xl font-light text-[#00FF66]">{openWhy === index ? "-" : "+"}</span>
                </button>
                <div className={`grid transition-all duration-500 ${openWhy === index ? "grid-rows-[1fr] pb-8" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-3xl text-base leading-8 text-zinc-400">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#00FF66]">
                Rebuilt for physical connection
              </p>
              <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-7xl">
                High-contrast hardware. Zero wasted ritual.
              </h2>
            </div>
            <div className="flex gap-2">
              {productMoments.map((item, index) => (
                <button
                  aria-label={`Show ${item.label}`}
                  className={`h-2.5 w-12 transition ${activeMoment === index ? "bg-[#00FF66]" : "bg-white/20"}`}
                  key={item.label}
                  onClick={() => setActiveMoment(index)}
                  type="button"
                />
              ))}
            </div>
          </div>

          <div className="grid min-h-[38rem] overflow-hidden border border-white/10 bg-[#050505] lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative flex items-center justify-center overflow-hidden border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,102,.18),transparent_42%)]" />
              <span className="relative text-8xl font-black uppercase tracking-[-0.08em] text-[#00FF66] md:text-[11rem]">
                {productMoments[activeMoment].value}
              </span>
            </div>
            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-[#00FF66]">
                  {productMoments[activeMoment].label}
                </p>
                <h3 className="max-w-2xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-7xl">
                  {productMoments[activeMoment].title}
                </h3>
                <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400">
                  {productMoments[activeMoment].body}
                </p>
              </div>
              <div className="mt-12 grid gap-3 md:grid-cols-3">
                {productMoments.map((item, index) => (
                  <button
                    className={`border p-4 text-left transition ${
                      activeMoment === index ? "border-[#00FF66] text-white" : "border-white/10 text-zinc-500 hover:text-white"
                    }`}
                    key={item.label}
                    onClick={() => setActiveMoment(index)}
                    type="button"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00FF66]">{item.label}</p>
                    <p className="mt-2 text-sm">{item.title}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#00FF66]">
              Creator / team pedigree
            </p>
            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-7xl">
              AI-native founders, physical product instincts.
            </h2>
          </div>
          <div className="grid gap-px bg-white/10 lg:grid-cols-2">
            {team.map((person) => (
              <article className="bg-black p-8 md:p-10" key={person.name}>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#00FF66]">{person.role}</p>
                <h3 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-6xl">
                  {person.name}
                </h3>
                <p className="mt-8 text-base leading-8 text-zinc-400">{person.intro}</p>
                <p className="mt-6 border-t border-[#00FF66]/35 pt-6 text-sm leading-7 text-zinc-300">{person.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.24em] text-zinc-500 md:flex-row">
          <p>Ping! by Ping Ring Inc.</p>
          <p>Identity. Portfolios. Real-world connection.</p>
        </div>
      </footer>
    </main>
  );
}
