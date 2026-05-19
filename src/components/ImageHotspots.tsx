"use client";

import { useState, useCallback } from "react";
import type { Hotspot } from "@/lib/hotspot-data";

interface Props {
  hotspots: Hotspot[];
  characters: Array<{ name: string; role: string; description: string }>;
}

export function ImageHotspots({ hotspots, characters }: Props) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const scrollToCharacters = useCallback(() => {
    const el = document.getElementById("section-characters");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  if (hotspots.length === 0) return null;

  return (
    <div className="absolute inset-0 z-10">
      {hotspots.map((hs, i) => {
        // Find matching character for extended info
        const charInfo = characters.find(
          (c) => c.name === hs.characterName
        );

        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${hs.x}%`,
              top: `${hs.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setActiveIdx(i)}
            onMouseLeave={() => setActiveIdx(null)}
          >
            {/* Pulsing dot marker */}
            <button
              onClick={scrollToCharacters}
              className={`relative z-20 flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                activeIdx === i
                  ? "scale-125 border-white bg-terracotta shadow-[0_0_16px_rgba(196,115,79,0.6)]"
                  : "border-white/70 bg-amber/80 shadow-md hover:scale-110"
              }`}
              aria-label={`查看 ${hs.characterName} 的人物介绍`}
            >
              <span className="font-heading-cn text-[10px] font-bold text-white">
                {hs.characterName[0]}
              </span>
            </button>

            {/* Tooltip on hover */}
            {activeIdx === i && (
              <div
                className="absolute bottom-full left-1/2 mb-3 -translate-x-1/2"
                style={{ minWidth: "200px" }}
              >
                <div className="rounded-xl border border-sand/30 bg-warm-white/95 p-4 shadow-xl backdrop-blur-sm">
                  {/* Arrow */}
                  <div className="absolute left-1/2 top-full -translate-x-1/2 border-[6px] border-transparent border-t-warm-white/95" />

                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber/20 to-terracotta/20 text-base">
                      {hs.characterName[0]}
                    </span>
                    <div>
                      <h4 className="font-heading-cn text-base font-bold text-umber">
                        {hs.characterName}
                      </h4>
                      {charInfo && (
                        <span className="font-[system-ui] text-[10px] text-amber-dark">
                          {charInfo.role}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="font-body text-xs leading-relaxed text-umber-light">
                    {charInfo?.description || hs.description}
                  </p>

                  <div className="mt-2 flex items-center gap-1 font-[system-ui] text-[10px] text-terracotta/60">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="m13 7 5 5-5 5M6 7l5 5-5 5" />
                    </svg>
                    点击跳转到人物介绍
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Generate approximate hotspot positions when no manual data exists.
 * Distributes markers evenly across the image based on character count.
 */
export function generateAutoHotspots(
  characterNames: string[],
  hotspotData?: Hotspot[],
): Hotspot[] {
  // Use manual data if available
  if (hotspotData && hotspotData.length > 0) return hotspotData;

  // Auto-place up to 5 characters in a horizontal spread
  const count = Math.min(characterNames.length, 5);
  if (count === 0) return [];

  const positions: Array<{ x: number; y: number }> = [];
  const spacing = 80 / (count + 1); // leave 10% margin on each side

  for (let i = 0; i < count; i++) {
    const x = 10 + spacing * (i + 1);
    // Alternate heights for visual variety
    const y = count <= 2 ? 55 : 35 + (i % 2) * 30;
    positions.push({ x, y });
  }

  return characterNames.slice(0, count).map((name, i) => ({
    characterName: name,
    x: positions[i].x,
    y: positions[i].y,
    description: "",
  }));
}
