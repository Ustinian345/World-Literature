import { continents } from "@/lib/data";
import { ContinentContent } from "./ContinentContent";

export function generateStaticParams() {
  return continents.map((c) => ({ slug: c.slug }));
}

export default function ContinentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ContinentContent params={params} />;
}
