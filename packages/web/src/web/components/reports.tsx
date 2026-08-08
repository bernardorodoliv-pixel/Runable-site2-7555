import { ArrowUpRight, FileText } from "lucide-react";
import { LETTERS, REPORTS } from "../lib/content";

function Reports() {
  const [featured, ...rest] = REPORTS;

  return (
    <>
      <section id="reports" className="scroll-mt-24 py-24 md:py-36">
        <div className="shell">
          <div className="flex flex-col gap-6 border-b border-sand pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow reveal text-copper">Financial record</p>
              <h2
                className="display-lg reveal mt-5 max-w-[26ch] text-ink"
                style={{ "--d": "60ms" } as React.CSSProperties}
              >
                Reports & filings
              </h2>
            </div>
            <p
              className="reveal max-w-[38ch] text-[15px] leading-relaxed text-muted"
              style={{ "--d": "120ms" } as React.CSSProperties}
            >
              Every annual and interim report published since 1995, plus direct access to the company's
              filings on EDGAR.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            <a
              href={featured.href}
              target="_blank"
              rel="noreferrer"
              className="group reveal relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[var(--radius-card)] bg-ink p-8 text-cream md:p-10 lg:col-span-5"
            >
              <div className="relative z-10">
                <p className="eyebrow text-copper-bright">{featured.meta}</p>
                <h3 className="display-md mt-4 max-w-[16ch] text-cream">{featured.title}</h3>
                <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-muted-dark">
                  {featured.description}
                </p>
              </div>
              <div className="relative z-10 mt-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[14px] font-medium text-cream">
                  Open report
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
                <FileText className="size-5 text-copper-bright" aria-hidden="true" />
              </div>
              {featured.image && (
                <img
                  src={featured.image}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -bottom-16 w-[62%] rotate-6 rounded-lg opacity-35 transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-3"
                />
              )}
            </a>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {rest.map((report, index) => (
                <a
                  key={report.title}
                  href={report.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group reveal flex flex-col justify-between rounded-[var(--radius-card)] border border-sand bg-cream-dim/60 p-7 transition-colors duration-300 hover:border-ink/25 hover:bg-cream-dim"
                  style={{ "--d": `${index * 70}ms` } as React.CSSProperties}
                >
                  <div>
                    <p className="eyebrow text-muted">{report.meta}</p>
                    <h3 className="mt-3 font-display text-[26px] leading-tight text-ink">{report.title}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-ink/70">{report.description}</p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium text-copper">
                    View
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="letters" className="scroll-mt-24 pb-24 md:pb-36">
        <div className="shell">
          <div className="overflow-hidden rounded-[var(--radius-card)] bg-sand/70">
            <div className="grid lg:grid-cols-12">
              <div className="relative min-h-[280px] lg:col-span-5">
                <img
                  src="/images/meeting.jpg"
                  alt="Shareholders seated in the arena before the start of a Berkshire Hathaway annual meeting"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-ink/20" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <p className="eyebrow text-copper-bright">Letters</p>
                  <h2 className="display-md mt-3 max-w-[18ch] text-cream">
                    Sixty years of writing to owners.
                  </h2>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ul className="divide-y divide-ink/10">
                  {LETTERS.map((letter, index) => (
                    <li key={letter.title} className="reveal" style={{ "--d": `${index * 60}ms` } as React.CSSProperties}>
                      <a
                        href={letter.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col gap-3 p-7 transition-colors duration-300 hover:bg-cream/70 md:p-9"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="eyebrow text-muted">{letter.range}</p>
                            <h3 className="mt-2 font-display text-[24px] leading-tight text-ink md:text-[28px]">
                              {letter.title}
                            </h3>
                          </div>
                          <ArrowUpRight
                            className="mt-1 size-5 shrink-0 text-ink/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-copper"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="max-w-[56ch] text-[14px] leading-relaxed text-ink/70">
                          {letter.description}
                        </p>
                        <p className="text-[12px] text-muted">{letter.updated}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reports;
