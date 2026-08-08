import { ArrowUpRight } from "lucide-react";
import { BASE, STATS } from "../lib/content";

const PRINCIPLES = [
  {
    title: "Decentralised by design",
    body: "Operating managers run their businesses. The corporate office sets capital allocation and stays out of the way — fewer than thirty people work there.",
  },
  {
    title: "Capital, patiently deployed",
    body: "Earnings are retained and reinvested where returns are highest: in wholly owned subsidiaries, in marketable securities, and in our own shares when they are cheap.",
  },
  {
    title: "Owner-oriented reporting",
    body: "We report the way we would want to be reported to — plainly, annually, and with the same figures the chief executive uses to run the company.",
  },
];

function Company() {
  return (
    <section id="company" className="scroll-mt-24 py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow reveal text-copper">Who we are</p>
            <h2 className="display-lg reveal mt-5 text-ink" style={{ "--d": "60ms" } as React.CSSProperties}>
              A holding company for businesses meant to be held.
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="measure space-y-6 text-[17px] leading-[1.75] text-ink/80">
              <p className="reveal">
                Berkshire Hathaway Inc. is a holding company owning subsidiaries engaged in a number of
                diverse business activities — insurance and reinsurance, freight rail transportation,
                utilities and energy, manufacturing, retailing and services. Its corporate office sits at
                3555 Farnam Street in Omaha, Nebraska.
              </p>
              <p className="reveal" style={{ "--d": "80ms" } as React.CSSProperties}>
                The company traces its origins to New England textile mills founded in 1839. Warren E.
                Buffett assumed control in 1965 and redirected its capital toward insurance underwriting
                and the acquisition of whole businesses. Greg Abel serves as Chief Executive Officer.
              </p>
              <a
                href={`${BASE}/govern/govern.html`}
                target="_blank"
                rel="noreferrer"
                className="group reveal inline-flex items-center gap-2 text-[14px] font-medium text-copper"
                style={{ "--d": "140ms" } as React.CSSProperties}
              >
                Read the corporate governance guidelines
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-sand pt-10 md:mt-28 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="reveal md:border-l md:border-sand md:first:border-l-0 md:pl-6 md:first:pl-0"
              style={{ "--d": `${index * 70}ms` } as React.CSSProperties}
            >
              <dt className="font-display text-[clamp(2.6rem,5vw,4rem)] leading-none text-ink">{stat.value}</dt>
              <dd className="mt-3 max-w-[20ch] text-[13px] leading-snug text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-24 bg-ink py-20 text-cream md:mt-32 md:py-28">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow reveal text-copper-bright">How it works</p>
              <h3
                className="display-md reveal mt-5 text-cream"
                style={{ "--d": "60ms" } as React.CSSProperties}
              >
                Three principles, unchanged for sixty years.
              </h3>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-white/10 lg:col-span-7 lg:col-start-6">
              {PRINCIPLES.map((item, index) => (
                <article
                  key={item.title}
                  className="reveal bg-ink-soft p-7 md:p-9"
                  style={{ "--d": `${index * 80}ms` } as React.CSSProperties}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-[15px] text-copper-bright">0{index + 1}</span>
                    <h4 className="font-display text-[22px] text-cream md:text-[26px]">{item.title}</h4>
                  </div>
                  <p className="mt-3 max-w-[58ch] pl-0 text-[15px] leading-relaxed text-muted-dark md:pl-10">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;
