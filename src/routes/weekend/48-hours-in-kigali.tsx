import { createFileRoute } from "@tanstack/react-router";
import ArticleLayout from "~/components/ArticleLayout";

export const Route = createFileRoute("/weekend/48-hours-in-kigali")({
  component: KigaliWeekend,
});

const IMG = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80";

function KigaliWeekend() {
  return (
    <ArticleLayout
      title="48 Hours in Kigali"
      author="Sable Weekend"
      date="5 July 2026"
      readTime="8 min read"
      category="City Profile"
      imageUrl={IMG}
      authorBio="Sable Weekend is our cultural and leadership editorial unit, covering the intersection of power, ideas, and place across Africa's defining cities."
      relatedArticles={[
        { title: "The Electric Hum of Curious People", href: "/weekend/electric-hum-of-curious-people", category: "Culture & Leadership" },
        { title: "The Library of Lost Fortunes", href: "/weekend/library-of-lost-fortunes", category: "Essays" },
      ]}
    >
      <p>
        Kigali has long been described as "Africa's Singapore" — a phrase that is both compliment and cliché. But unlike many comparisons that reveal more about the observer than the observed, this one carries genuine weight. The Rwandan capital is not merely clean, orderly, and efficient. It is quietly constructing something rarer: an African city that functions with institutional coherence while retaining a distinctly Rwandan character.
      </p>

      <div className="pullquote">
        "Kigali doesn't feel like it's being built for investors. It feels like it's being built for Rwandans — and the investors are arriving anyway."
      </div>

      <h2>Friday: The Corridors of Power</h2>
      <p>
        Start at the Kigali Convention Centre, its iconic dome visible from almost anywhere in the city. The complex has become the unofficial headquarters of African summit diplomacy, hosting everything from the African Development Bank annual meetings to the World Economic Forum on Africa. The coffee in the lobby is exceptional — Rwandan Arabica, single-origin, served with a precision that would satisfy a third-wave coffee devotee in Melbourne or Portland.
      </p>
      <p>
        A ten-minute drive takes you to the Kigali Financial Centre in the Nyarugenge district, where a cluster of new office towers houses the Rwanda Stock Exchange, the central bank, and the regional headquarters of several pan-African banks. The vibe is purposeful but unhurried — meetings start on time, but the culture of relentless urgency that characterises Lagos or Nairobi is absent.
      </p>

      <h2>Saturday: Innovation and Ambition</h2>
      <p>
        The morning should be spent at the Kigali Innovation City in Kicukiro, a $2 billion technology park that is gradually becoming the most credible tech hub in the region. Unlike the co-working space boom that has produced dozens of identikit innovation hubs across Africa, KIC has a focused mandate: build the infrastructure for Rwanda's ambition to become Africa's back-office services capital.
      </p>
      <p>
        Lunch at the Inema Arts Centre reveals a different dimension of Kigali's personality. The city's art scene has evolved far beyond the post-genocide therapeutic phase into something genuinely sophisticated — contemporary Rwandan artists whose work engages with global conversations about identity, technology, and capital, not just trauma and healing.
      </p>
      <p>
        The afternoon should be left unstructured. Kigali rewards wandering. The city's famous hills mean that every turn reveals a new view — green valleys, red-earth roads, gleaming new buildings alongside carefully preserved colonial-era villas. The streets are safe enough that walking, even with a phone visible, feels natural rather than reckless.
      </p>

      <h2>Sunday: The Quiet Ambition</h2>
      <p>
        Before departing, visit the Kigali Genocide Memorial at Gisozi. It is the essential Kigali experience — not because the city is defined by 1994, but because understanding how Rwanda rebuilt from that catastrophe is essential to understanding the institutional confidence that makes modern Kigali work.
      </p>
      <p>
        The memorial is meticulously curated, sombre without being exploitative, and deeply informative about both the tragedy and the reconstruction. For the visiting decision-maker, it offers a crucial insight: if a country can rebuild this governance capacity from absolute ruin, its ambitions for the future should be taken seriously.
      </p>
      <p>
        Kigali is not yet Singapore. The nightlife is limited, the restaurant scene is still finding its international footing, and the city's landlocked position imposes real costs on trade and logistics. But the direction of travel is unmistakable. Across 48 hours, what lingers is not any single building or meeting — it is the sense of a city that has figured out the fundamentals and is now refining the details. For Africa watchers, that is perhaps the most interesting signal of all.
      </p>

      <hr />

      <p className="text-sm text-slate-grey/50 dark:text-warm-ivory/40 italic">
        Sable Weekend explores the cities, culture, and leadership dynamics that shape African markets. No sponsorship or coordinated promotional content.
      </p>
    </ArticleLayout>
  );
}