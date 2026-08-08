import Company from "../components/company";
import Hero from "../components/hero";
import Newsroom from "../components/newsroom";
import Operations from "../components/operations";
import Reports from "../components/reports";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { useReveal } from "../hooks/use-reveal";

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-[13px] focus:text-cream"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Company />
        <Reports />
        <Operations />
        <Newsroom />
      </main>
      <SiteFooter />
    </div>
  );
}

export default Index;
