import { prisma } from "@/lib/prisma";
import { continents } from "@/lib/continents";
import { ContinentContent } from "./ContinentContent";

export function generateStaticParams() {
  return continents.map((c) => ({ slug: c.slug }));
}

export default async function ContinentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const works = await prisma.work.findMany({ where: { continent: slug } });
  return <ContinentContent params={params} works={works} />;
}
