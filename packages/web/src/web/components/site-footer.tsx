import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { BASE, FOOTER_COLUMNS } from "../lib/content";

function SiteFooter() {
  return (
    <>
      <section id="contact" className="scroll-mt-24 bg-ink pt-24 text-cream md:pt-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="eyebrow reveal text-copper-bright">Corporate office</p>
              <h2
                className="display-lg reveal mt-5 max-w-[18ch] text-cream"
                style={{ "--d": "60ms" } as React.CSSProperties}
              >
                Write to us in Omaha.
              </h2>
              <p
                className="reveal mt-6 max-w-[48ch] text-[15px] leading-relaxed text-muted-dark"
                style={{ "--d": "120ms" } as React.CSSProperties}
              >
                If you have comments about this website you can write to us at the address below. Due to
                the small number of people in the corporate office, we are unable to provide a direct
                response to every message.
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <div className="reveal rounded-[var(--radius-card)] border border-white/12 bg-ink-soft p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-copper-bright" aria-hidden="true" />
                  <address className="font-display text-[24px] leading-tight text-cream not-italic md:text-[28px]">
                    Berkshire Hathaway Inc.
                    <br />
                    3555 Farnam Street
                    <br />
                    Omaha, NE 68131
                  </address>
                </div>

                <div className="hairline-dark my-7" />

                <a
                  href="https://www.geico.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <p className="eyebrow text-muted-dark">Free car insurance rate quote</p>
                  <p className="mt-2 flex items-center gap-2 font-display text-[20px] text-cream transition-colors group-hover:text-copper-bright">
                    www.geico.com
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </p>
                </a>
                <p className="mt-3 flex items-center gap-2 text-[14px] text-muted-dark">
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  1-888-395-6349 — 24 hours a day
                </p>
              </div>
            </div>
          </div>

          <p
            aria-hidden="true"
            className="reveal mt-20 font-display text-[clamp(3rem,13.5vw,13rem)] leading-[0.8] tracking-[-0.03em] text-white/8 md:mt-28"
          >
            Berkshire
            <br />
            Hathaway
          </p>
        </div>
      </section>

      <footer className="bg-ink text-cream">
        <div className="shell">
          <div className="hairline-dark" />
          <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
            {FOOTER_COLUMNS.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="eyebrow text-muted-dark">{column.heading}</h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[14px] text-cream/80 transition-colors hover:text-copper-bright"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="hairline-dark" />
          <div className="flex flex-col gap-4 pt-8 text-[12px] text-muted-dark md:flex-row md:items-center md:justify-between">
            <p>Copyright © 1977 — 2026 Berkshire Hathaway Inc. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href={`${BASE}/disclaimer.html`}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-copper-bright"
              >
                Legal disclaimer
              </a>
              <a href="#top" className="transition-colors hover:text-copper-bright">
                Back to top
              </a>
            </div>
          </div>
          <p className="max-w-[60ch] pt-4 pb-24 text-[12px] text-muted-dark/70 md:pb-14">
            Independent redesign concept — not affiliated with Berkshire Hathaway Inc.
          </p>
        </div>
      </footer>
    </>
  );
}

export default SiteFooter;
