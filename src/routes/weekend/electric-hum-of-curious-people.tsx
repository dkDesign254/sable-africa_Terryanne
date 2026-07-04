import { createFileRoute } from "@tanstack/react-router";
import ArticleLayout from "~/components/ArticleLayout";

export const Route = createFileRoute("/weekend/electric-hum-of-curious-people")({
  component: ElectricHum,
});
const IMG = "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=1200&q=80";
function ElectricHum() {
  return (
    <ArticleLayout title="The Electric Hum of Curious People" author="Sable Weekend" date="4 July 2026" readTime="10 min read" category="Culture & Leadership" imageUrl={IMG}
      relatedArticles={[{ title: "48 Hours in Kigali", href: "/weekend/48-hours-in-kigali", category: "City Profile" }, { title: "The Library of Lost Fortunes", href: "/weekend/library-of-lost-fortunes", category: "Essays" }]}>
      <p>Inside Accra's new creative economy — where fashion, fintech, and philosophy collide in ways that are reshaping West Africa's cultural export model and creating a new template for African urban renaissance.</p>
      <p>Accra has always had energy. But the energy coursing through the Ghanaian capital in 2026 is different in kind, not just degree. It is not the desperate hustle of survival, nor the frenetic deal-making of an oil boom. It is something closer to what Richard Florida called the "creative class" — except distinctly Accra, distinctly West African, and distinctly uninterested in imitating Silicon Valley or Shoreditch.</p>
      <p>The epicentre is not a single district but a constellation of spaces: the gallery-cum-workshops of Jamestown, the co-working houses of Osu, the fashion ateliers of Labone, and the tech studios of Airport Residential. What connects them is a shared conviction that Accra can be both globally relevant and authentically itself — a proposition that, if it succeeds, offers a model for other African cities navigating the tension between global capital and local identity.</p>
      <h2>The Creative Infrastructure</h2>
      <p>What makes Accra's creative economy different from its Lagos counterpart is the absence of desperate scale. Where Lagos' creative scene is driven by the imperative of reaching 20 million people, Accra's is built around quality of interaction. The galleries are smaller, the conversations longer, the collaborations deeper. This is a scene built for depth rather than breadth — and that may prove to be its competitive advantage in a global market saturated with content.</p>
      <p>Fashion labels like Christie Brown and Orange Culture have built international followings without abandoning Accra as their base of operations. Tech startups like mPharma and Zeepay have scaled across the continent while maintaining headquarters in the city. And a new generation of artists, writers, and filmmakers are creating work that speaks to global conversations from a distinctly Ghanaian vantage point.</p>
      <div className="pullquote">"Accra doesn't want to be the next Lagos. It wants to be the first Accra — on its own terms."</div>
    </ArticleLayout>
  );
}