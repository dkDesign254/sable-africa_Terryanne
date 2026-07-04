import { createFileRoute } from "@tanstack/react-router";
import ArticleLayout from "~/components/ArticleLayout";

export const Route = createFileRoute("/brief/signal-from-the-street")({
  component: SignalFromStreet,
});
const IMG = "https://images.unsplash.com/photo-1519003300449-424ad0405076?w=1200&q=80";
function SignalFromStreet() {
  return (
    <ArticleLayout title="Signal from the Street: Nairobi's Informal Economy" author="Sable Research" date="1 July 2026" readTime="6 min read" category="Market Intelligence" imageUrl={IMG}
      relatedArticles={[{ title: "The Great Recalibration: African Bond Markets in 2026", href: "/brief/african-bond-markets-2026", category: "Sovereign Debt" }, { title: "Inside the Great Ethiopian Dam Negotiations", href: "/investigations/great-ethiopian-dam-negotiations", category: "Geopolitics" }]}>
      <p>What mobile money data reveals about consumer confidence that formal surveys miss. A ground-level reading of Kenya's economic pulse through the lens of M-Pesa transaction volumes, mobile lending repayment rates, and informal sector savings patterns.</p>
      <p>While Kenya's official GDP data shows steady expansion at 5.2%, a more immediate picture emerges from the 73 million M-Pesa accounts that process over $800 million in daily transactions. Our analysis of anonymised transaction clusters reveals a more nuanced story: urban consumption is holding up, but rural remittance flows — a key indicator of economic stress — show a tightening trend since Q4 2025.</p>
      <div className="pullquote">"The informal economy doesn't wait for quarterly GDP releases. It signals in real time — if you know where to look."</div>
      <h2>The Mobile Money Barometer</h2>
      <p>Mobile money data offers something that traditional household surveys cannot: high-frequency, geographically granular, and behaviourally honest signals about economic activity. When a Nairobi matatu driver tops up his M-Pesa float less frequently, or a Kisumu vegetable vendor's average transaction size drops below a threshold, the economy is speaking in a language that standardised survey instruments struggle to capture.</p>
      <p>Our proprietary Informal Economy Activity Index, constructed from aggregated and anonymised mobile money metadata, currently reads at 94.2 — down from 98.7 in January 2026 but still above the 90.0 threshold that historically signals recessionary conditions. The index correlates strongly with formal retail sales data at a two-month lead, making it a useful nowcasting tool for institutional readers who need to see around corners.</p>
    </ArticleLayout>
  );
}