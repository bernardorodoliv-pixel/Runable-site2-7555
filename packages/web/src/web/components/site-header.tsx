import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV } from "../lib/content";
import { useScrolled } from "../hooks/use-reveal";

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(40);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 anim-fade">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-sand/80 bg-cream/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-[72px] items-center justify-between gap-6 md:h-20">
          <a href="#top" className="group flex flex-col leading-none">
            <span className="font-display text-[19px] tracking-tight text-ink md:text-[22px]">
              Berkshire Hathaway
            </span>
            <span className="eyebrow mt-0.5 text-[9px] text-muted md:text-[10px]">
              Omaha, Nebraska · Est. 1839
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-[14px] font-medium text-ink/75 transition-colors hover:text-ink"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-[1.5px] w-0 bg-copper transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#letters"
              className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-medium text-cream transition-colors hover:bg-copper sm:inline-flex"
            >
              Shareholder letters
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex size-12 items-center justify-center rounded-full border border-sand text-ink transition-colors hover:bg-sand/60 lg:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink text-cream anim-fade lg:hidden">
          <div className="shell flex h-[72px] shrink-0 items-center justify-between">
            <span className="font-display text-[19px]">Berkshire Hathaway</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-12 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile" className="shell flex flex-1 flex-col justify-center gap-1 pb-16">
            {NAV.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-5 font-display text-[clamp(2rem,9vw,3rem)] leading-none text-cream transition-colors hover:text-copper-bright"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-copper px-6 py-4 text-[14px] font-medium text-white"
            >
              Contact the corporate office
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;
