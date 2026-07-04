import { createFileRoute } from "@tanstack/react-router";
import ArticleLayout from "~/components/ArticleLayout";

export const Route = createFileRoute("/weekend/library-of-lost-fortunes")({
  component: Library,
});
const IMG = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80";
function Library() {
  return (
    <ArticleLayout title="The Library of Lost Fortunes" author="Sable Weekend" date="3 July 2026" readTime="6 min read" category="Essays" imageUrl={IMG}
      relatedArticles={[{ title: "48 Hours in Kigali", href: "/weekend/48-hours-in-kigali", category: "City Profile" }, { title: "The Electric Hum of Curious People", href: "/weekend/electric-hum-of-curious-people", category: "Culture & Leadership" }]}>
      <p>A meditation on what Africa's abandoned colonial archives reveal about the continent's relationship with capital, memory, and the future of its financial architecture.</p>
      <p>In a crumbling colonial-era building in central Mombasa, a collection of ledgers sits untouched. The books contain the complete trade records of the East African coastal trade between 1885 and 1912 — every shipment of ivory, copra, and grain, every credit extended, every debt defaulted, every price negotiated between Arab dhows, British merchants, and African intermediaries.</p>
      <p>They are, in effect, the balance sheet of a continent's integration into global capital markets. And they are rotting.</p>
      <p>"These documents contain the data that would allow us to write a proper economic history of East Africa's integration into the global economy," says Dr. Maryanne Kamau, an economic historian at the University of Nairobi who has been trying for seven years to secure funding for a digitisation project. "Without them, we are theorising about the past rather than understanding it."</p>
      <h2>What the Archives Tell Us</h2>
      <p>The neglect of Africa's economic archives is not merely a cultural loss. It is a structural impediment to understanding the continent's financial present. The patterns of credit allocation, risk pricing, and capital flow recorded in these ledgers contain insights that are directly relevant to contemporary debates about African financial market development.</p>
      <p>Preliminary analysis of surviving records from Mombasa, Zanzibar, and Dar es Salaam reveals that 19th-century East African credit markets were significantly more sophisticated than conventional economic histories acknowledge. Interest rate spreads, collateral requirements, and contract enforcement mechanisms followed rational patterns that modern financial economists would recognise — challenging the narrative that Africa's integration into global finance began with colonial extraction.</p>
      <div className="pullquote">"A continent that forgets its financial history is condemned to repeat its credit cycles."</div>
      <p>The lesson for today's capital allocators is both philosophical and practical: the infrastructure of African finance has always been more complex than the simplified narratives suggest. The challenge — then as now — is access to the data that reveals the true structure beneath the surface noise.</p>
    </ArticleLayout>
  );
}