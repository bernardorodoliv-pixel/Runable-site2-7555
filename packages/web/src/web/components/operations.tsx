import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { BASE, SECTORS } from "../lib/content";

function Operations() {
  const [open, setOpen] = useState<string | null>(SECTORS[0].id);

  return (
    <section id="operations" className="scroll-mt-24 bg-ink py-24 text-cream md:py-36">
      <div className="shell">
        <div className="flex flex-col gap-6 border-b border-white/12 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow reveal text-copper-bright">Operating companies</p>
            <h2
              className="display-lg reveal mt-5 max-w-[24ch] text-cream"
              style={{ "--d": "60ms" } as React.CSSProperties}
            >
              What we own, and who runs it.
            </h2>
          </div>
          <a
            href={`${BASE}/subs/sublinks.html`}
            target="_blank"
            rel="noreferrer"
            className="group reveal inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-[13px] font-medium text-cream transition-colors hover:border-copper-bright hover:bg-copper-bright"
            style={{ "--d": "120ms" } as React.CSSProperties}
          >
            Full company directory
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="divide-y divide-white/12">
          {SECTORS.map((sector, index) => {
            const expanded = open === sector.id;
            return (
              <div key={sector.id} className="reveal" style={{ "--d": `${index * 50}ms` } as React.CSSProperties}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`panel-${sector.id}`}
                    onClick={() => setOpen(expanded ? null : sector.id)}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left md:py-9"
                  >
                    <span className="flex flex-1 flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                      <span className="font-display text-[clamp(1.6rem,3.6vw,2.6rem)] leading-none text-cream transition-colors group-hover:text-copper-bright">
                        {sector.name}
                      </span>
                      <span className="text-[12px] text-muted-dark">
                        {sector.companies.length} {sector.companies.length === 1 ? "company" : "companies"}
                      </span>
                    </span>
                    <span
                      className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        expanded ? "border-copper-bright bg-copper-bright text-white" : "border-white/20 text-cream"
                      }`}
                      aria-hidden="true"
                    >
                      {expanded ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                </h3>

                <div
                  id={`panel-${sector.id}`}
                  hidden={!expanded}
                  className="grid gap-8 pb-10 lg:grid-cols-12 lg:gap-12"
                >
                  <div className="lg:col-span-5">
                    <figure className="overflow-hidden rounded-[var(--radius-img)]">
                      <img
                        src={sector.image}
                        alt={sector.imageAlt}
                        className="h-56 w-full object-cover md:h-72"
                        loading="lazy"
                      />
                    </figure>
                    <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-muted-dark">
                      {sector.blurb}
                    </p>
                  </div>

                  <ul className="grid gap-x-8 gap-y-3 self-start sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
                    {sector.companies.map((company) => (
                      <li key={company.name}>
                        <a
                          href={company.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center justify-between gap-3 border-b border-white/10 py-2 text-[14px] text-cream/85 transition-colors hover:text-copper-bright"
                        >
                          <span>{company.name}</span>
                          <ArrowUpRight
                            className="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Operations;
