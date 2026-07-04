import { useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { initTheme } from "~/hooks/useTheme";

import Nav from "~/components/Nav";
import Hero from "~/components/Hero";
import TrustBar from "~/components/TrustBar";
import Dashboard from "~/components/Dashboard";
import DailyBrief from "~/components/DailyBrief";
import Investigations from "~/components/Investigations";
import SableWeekend from "~/components/SableWeekend";
import WhySable from "~/components/WhySable";
import Pricing from "~/components/Pricing";
import CTA from "~/components/CTA";
import NewsletterSection from "~/components/NewsletterSection";
import Footer from "~/components/Footer";
import AIAssistant from "~/components/AIAssistant";

export const Route = createFileRoute("/")({
  component: Home,
});

function useScrollReveal() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const targets = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function Home() {
  useScrollReveal();

  // Initialize theme on mount
  useEffect(() => { initTheme(); }, []);

  return (
    <div className="min-h-screen bg-warm-ivory text-sable-black dark:bg-sable-black dark:text-warm-ivory transition-colors duration-300">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Dashboard />
        <DailyBrief />
        <Investigations />
        <SableWeekend />
        <WhySable />
        <Pricing />
        <NewsletterSection />
        <CTA />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}