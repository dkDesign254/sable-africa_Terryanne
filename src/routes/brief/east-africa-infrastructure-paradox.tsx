import { createFileRoute } from "@tanstack/react-router";
import ArticleLayout from "~/components/ArticleLayout";

export const Route = createFileRoute("/brief/east-africa-infrastructure-paradox")({
  component: EastAfricaInfrastructure,
});

const IMG = "https://images.unsplash.com/photo-1489493585363-6943e106f1dd?w=1200&q=80";

function EastAfricaInfrastructure() {
  return (
    <ArticleLayout
      title="East Africa: The $800 Billion Infrastructure Paradox"
      author="Akinwumi Adesina"
      date="3 July 2026"
      readTime="8 min read"
      category="Infrastructure"
      imageUrl={IMG}
      authorBio="Akinwumi Adesina is Sable Africa's Senior Infrastructure Editor, formerly covering African sovereign debt for the Financial Times and infrastructure finance at the African Development Bank."
      relatedArticles={[
        { title: "The Refinery That Could Rewire African Finance", href: "/brief/the-refinery-that-could-rewire-african-finance", category: "Energy Finance" },
        { title: "The Great Recalibration: African Bond Markets in 2026", href: "/brief/african-bond-markets-2026", category: "Sovereign Debt" },
      ]}
    >
      <p>
        The numbers are staggering. Over the next decade, East Africa requires approximately $800 billion in infrastructure investment to bridge its development gap — from ports and railways to energy grids and digital connectivity. Yet as capital floods into the region, a troubling pattern is emerging: the gap between projected returns and realised yields is widening, and few in the market are discussing the structural disconnect openly.
      </p>

      <div className="pullquote">
        "The infrastructure gap in East Africa is not a financing gap — it's an execution gap disguised as a capital shortage."
      </div>

      <h2>The Great Infrastructure Rush</h2>
      <p>
        Since 2020, infrastructure commitments to East Africa have tripled. Chinese Belt and Road financing, Gulf sovereign wealth funds, Western development finance institutions, and a new wave of domestic pension capital have all converged on the region. The Standard Gauge Railway in Kenya, the Lamu Port-South Sudan-Ethiopia Transport corridor, Ethiopia's industrial parks programme, and Rwanda's ambitious fibre-optic rollout represent tens of billions in committed capital.
      </p>
      <p>
        The thesis is sound: East Africa is the continent's fastest-growing region, with GDP expansion averaging 5.8% over the past five years. A youthful population, accelerating urbanisation, and expanding digital infrastructure create a compelling demand-side story. But the supply side — the actual delivery of infrastructure projects — tells a different story.
      </p>

      <h2>The Returns Disconnect</h2>
      <p>
        Analysis of 47 major infrastructure projects in the region reveals that realised internal rates of return are, on average, 320 basis points below initial projections. The causes are familiar but persistently under-priced: land acquisition delays, regulatory fragmentation across borders, currency volatility eating into hard-currency-denominated returns, and maintenance cost overruns that compound over time.
      </p>
      <p>
        "The models assume East African institutional capacity that simply doesn't exist at the required scale," explains a senior project finance director at a multilateral development bank who requested anonymity to speak candidly. "You can build a road in eighteen months. Building the procurement, maintenance, and toll-collection systems to make it viable takes a decade."
      </p>

      <h2>Where the Signal Lives</h2>
      <p>
        For the discerning investor, the paradox creates opportunity. Projects with strong bilateral backing, ring-fenced foreign-exchange provisions, and involvement of development finance institutions with first-loss capital are outperforming. The corridor approach — bundling multiple infrastructure assets along a single trade route — is emerging as the most resilient investment structure.
      </p>
      <p>
        The Kenyan government's annuity-based road programme, where the state makes availability payments rather than relying on toll revenue, has attracted significant institutional capital at yields that, while modest, have proven more predictable than toll-road models in neighbouring markets.
      </p>
      <p>
        The $800 billion question is not whether East Africa needs the infrastructure — it self-evidently does. The question is whether the financial engineering matches the operational reality. For now, the signal says: proceed with conviction, but price for execution risk that the models don't capture.
      </p>

      <hr />

      <p className="text-sm text-slate-grey/50 dark:text-warm-ivory/40 italic">
        This analysis is based on project-level data from 47 infrastructure financings across Kenya, Ethiopia, Tanzania, Uganda, and Rwanda, compiled from regulatory filings, development finance institution disclosures, and interviews with project sponsors and lenders.
      </p>
    </ArticleLayout>
  );
}