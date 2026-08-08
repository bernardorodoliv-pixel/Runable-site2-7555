import { ArrowUpRight, ShieldAlert } from "lucide-react";
import { BASE, INVESTOR_CARDS, NEWS } from "../lib/content";

function Newsroom() {
  return (
    <>
      <section id="newsroom" className="scroll-mt-24 py-24 md:py-36">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow reveal text-copper">Newsroom</p>
              <h2
                className="display-lg reveal mt-5 max-w-[16ch] text-ink"
                style={{ "--d": "60ms" } as React.CSSProperties}
              >
                News releases
              </h2>
              <p
                className="reveal mt-6 max-w-[34ch] text-[15px] leading-relaxed text-muted"
                style={{ "--d": "120ms" } as React.CSSProperties}
              >
                Berkshire issues earnings releases and acquisition announcements directly. Releases going
                back to 1997 are archived by year.
              </p>
              <a
                href={`${BASE}/news/2026news.html`}
                target="_blank"
                rel="noreferrer"
                className="group reveal mt-8 inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-[13px] font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
                style={{ "--d": "180ms" } as React.CSSProperties}
              >
                All releases by year
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            <ol className="lg:col-span-8">
              {NEWS.map((item, index) => (
                <li
                  key={item.title}
                  className="reveal border-b border-sand first:border-t"
                  style={{ "--d": `${index * 45}ms` } as React.CSSProperties}
                >
                  <a
                    href={`${BASE}/news/2026news.html`}
                    target="_blank"
                    rel="noreferrer"
                    className="group grid gap-2 py-6 md:grid-cols-[130px_1fr_auto] md:items-baseline md:gap-6"
                  >
                    <time className="text-[13px] tabular-nums text-muted">{item.date}</time>
                    <p className="max-w-[52ch] font-display text-[21px] leading-snug text-ink transition-colors group-hover:text-copper md:text-[24px]">
                      {item.title}
                    </p>
                    <span className="inline-flex w-fit items-center rounded-full border border-sand px-3 py-1 text-[11px] font-medium tracking-wide text-muted uppercase">
                      {item.tag}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="shell">
          <a
            href={`${BASE}/webfraud.pdf`}
            target="_blank"
            rel="noreferrer"
            className="group reveal flex flex-col gap-5 rounded-[var(--radius-card)] border border-copper/30 bg-copper/8 p-7 md:flex-row md:items-center md:justify-between md:p-9"
          >
            <div className="flex items-start gap-4">
              <ShieldAlert className="mt-0.5 size-6 shrink-0 text-copper" aria-hidden="true" />
              <div>
                <p className="eyebrow text-copper">Important notice</p>
                <h2 className="mt-2 max-w-[52ch] font-display text-[22px] leading-snug text-ink md:text-[26px]">
                  Fraudulent claims regarding Mr. Buffett's endorsements of investment products and
                  political candidates
                </h2>
                <p className="mt-2 max-w-[62ch] text-[14px] leading-relaxed text-ink/70">
                  Neither Warren E. Buffett nor Berkshire Hathaway endorses investment products, trading
                  programmes or political candidates. Read the company's statement before acting on any
                  such claim.
                </p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-copper px-5 py-3 text-[13px] font-medium text-white transition-colors group-hover:bg-ink">
              Read the notice
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </section>

      <section id="investors" className="scroll-mt-24 pb-24 md:pb-36">
        <div className="shell">
          <div className="border-b border-sand pb-10">
            <p className="eyebrow reveal text-copper">Investor information</p>
            <h2
              className="display-lg reveal mt-5 max-w-[24ch] text-ink"
              style={{ "--d": "60ms" } as React.CSSProperties}
            >
              What shareholders ask most.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {INVESTOR_CARDS.map((card, index) => (
              <article
                key={card.title}
                className="reveal flex flex-col justify-between rounded-[var(--radius-card)] border border-sand bg-cream-dim/50 p-7 md:p-9"
                style={{ "--d": `${index * 70}ms` } as React.CSSProperties}
              >
                <div>
                  <h3 className="font-display text-[26px] leading-tight text-ink">{card.title}</h3>
                  <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink/75">{card.body}</p>
                </div>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex w-fit items-center gap-2 text-[13px] font-medium text-copper"
                >
                  {card.linkLabel}
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsroom;
