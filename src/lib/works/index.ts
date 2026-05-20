import type { Work } from "../data";
import { asianWorks } from "./asia";
import { europeanWorks } from "./europe";
import { africanWorks, americasWorks, oceaniaWorks } from "./africa-americas-oceania";
import { bulkWorks } from "./bulk-expansion";
import { realWorks } from "./real-expansion";
import { expansion1000 } from "./expansion-1000";
import { awardWorks } from "./award-expansion";
import { maodunMissingWorks, luxunFictionWorks, remainingAwardWorks } from "./award-expansion-2";
import { bookerRest, pulitzerRest, hugoRest, goncourtKey, cervantesAll, otherAwards } from "./award-expansion-3";
import { luxunS1, luxunS2, luxunS3to8 } from "./award-expansion-4";

export const expandedWorks: Work[] = [
  ...asianWorks,
  ...europeanWorks,
  ...africanWorks,
  ...americasWorks,
  ...oceaniaWorks,
  ...bulkWorks,
  ...realWorks,
  ...expansion1000,
  ...awardWorks,
  ...maodunMissingWorks,
  ...luxunFictionWorks,
  ...remainingAwardWorks,
  ...bookerRest,
  ...pulitzerRest,
  ...hugoRest,
  ...goncourtKey,
  ...cervantesAll,
  ...otherAwards,
  ...luxunS1,
  ...luxunS2,
  ...luxunS3to8,
];

// 去重
const seen = new Set<string>();
export const uniqueExpandedWorks = expandedWorks.filter((w) => {
  if (seen.has(w.id)) return false;
  seen.add(w.id);
  return true;
});
