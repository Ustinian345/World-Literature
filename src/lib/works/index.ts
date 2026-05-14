import type { Work } from "../data";
import { asianWorks } from "./asia";
import { europeanWorks } from "./europe";
import { africanWorks, americasWorks, oceaniaWorks } from "./africa-americas-oceania";
import { bulkWorks, generatedWorks } from "./bulk-expansion";

export const expandedWorks: Work[] = [
  ...asianWorks,
  ...europeanWorks,
  ...africanWorks,
  ...americasWorks,
  ...oceaniaWorks,
  ...bulkWorks,
  ...generatedWorks,
];

// 去重
const seen = new Set<string>();
export const uniqueExpandedWorks = expandedWorks.filter((w) => {
  if (seen.has(w.id)) return false;
  seen.add(w.id);
  return true;
});
