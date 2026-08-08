import { ArrowDown, ArrowUpRight } from "lucide-react";
import { BASE } from "../lib/content";

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[112px] md:pt-[136px]">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="eyebrow max-w-[22ch] text-muted anim-rise" style={{ animationDelay: "80ms" }}>
            Official corporate information
          </p>
          <p
            className="max-w-[46ch] text-[15px] leading-relaxed text-muted anim-rise md:text-right"
            style={{ animationDelay: "160ms" }}
          >
            A collection of businesses run by people who intend to keep running them. Reports, letters
            and filings, published without ornament.
          </p>
        </div>

        <h1 className="mt-10 md:mt-14">
          <span className="sr-only">Berkshire Hathaway Inc.</span>
          <span
            aria-hidden="true"
            className="display-xl block text-ink anim-rise"
            style={{ animationDelay: "220ms" }}
          >
            Berkshire
          </span>
          <span
            aria-hidden="true"
            className="display-xl mt-1 block text-ink anim-rise md:mt-2 md:pl-[8%]"
            style={{ animationDelay: "300ms" }}
          >
            Hathaway{" "}
            <span
              className="align-top font-display tracking-[0.06em] text-copper"
              style={{ fontSize: "max(1.05rem, 0.2em)" }}
            >
              INC.
            </span>
          </span>
        </h1>

        <div
          className="mt-10 flex flex-wrap items-center gap-3 anim-rise md:mt-12"
          style={{ animationDelay: "380ms" }}
        >
          <a
            href="#reports"
            className="inline-flex items-center gap-2 rounded-full bg-copper px-6 py-4 text-[14px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-copper-bright"
          >
            Annual & interim reports
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#letters"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-4 text-[14px] font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
          >
            Shareholder letters
          </a>
          <a
            href={`${BASE}/message.html`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-2 py-4 text-[14px] font-medium text-ink/70 transition-colors hover:text-copper"
          >
            A message from Warren E. Buffett
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="shell mt-12 md:mt-16">
        <figure className="relative overflow-hidden rounded-[var(--radius-img)] anim-fade" style={{ animationDelay: "420ms" }}>
          <img
            src="/images/hero-tower.jpg"
            alt="A limestone corporate office tower photographed from street level in warm late-afternoon light"
            className="h-[46vh] w-full object-cover object-center anim-zoom md:h-[64vh]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="max-w-[34ch] font-display text-[clamp(1.4rem,3.2vw,2.4rem)] leading-tight text-cream">
                Our favourite holding period is forever.
              </p>
              <div className="flex items-center gap-3 text-cream/80">
                <ArrowDown className="size-4" aria-hidden="true" />
                <span className="eyebrow">Scroll for the record</span>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
