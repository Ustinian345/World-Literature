"use client";

import { useMemo } from "react";

interface Props {
  continent: string; // "asia" | "europe" | "africa" | "americas" | "oceania"
  opacity?: number;
}

export function CulturalPattern({ continent, opacity = 0.06 }: Props) {
  const pattern = useMemo(() => {
    const o = opacity;
    switch (continent) {
      case "asia":
        return (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="asia-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                {/* 云纹 */}
                <path d="M30,40 Q40,25 55,30 Q70,35 65,50 Q60,55 50,52 Q40,48 35,55 Z" fill={`rgba(255,255,255,${o * 1.2})`} />
                <path d="M90,80 Q100,65 115,70 Q130,75 125,90 Q120,95 110,92 Q100,88 95,95 Z" fill={`rgba(255,255,255,${o})`} />
                {/* 波浪线 */}
                <path d="M10,100 Q30,90 50,100 Q70,110 90,100 Q110,90 120,100" stroke={`rgba(255,255,255,${o * 0.8})`} strokeWidth="1" fill="none" />
                <path d="M0,60 Q20,50 40,60 Q60,70 80,60 Q100,50 120,60" stroke={`rgba(255,255,255,${o * 0.6})`} strokeWidth="0.5" fill="none" />
                {/* 圆点 */}
                <circle cx="80" cy="20" r="2" fill={`rgba(255,255,255,${o * 0.7})`} />
                <circle cx="40" cy="110" r="1.5" fill={`rgba(255,255,255,${o * 0.5})`} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#asia-pattern)" />
          </svg>
        );

      case "europe":
        return (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="europe-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                {/* 菱形几何 */}
                <path d="M50,10 L70,30 L50,50 L30,30 Z" stroke={`rgba(255,255,255,${o})`} strokeWidth="1" fill="none" />
                <path d="M10,50 L30,70 L10,90 L-10,70 Z" stroke={`rgba(255,255,255,${o * 0.6})`} strokeWidth="0.7" fill="none" />
                <path d="M90,70 L110,90 L90,110 L70,90 Z" stroke={`rgba(255,255,255,${o * 0.6})`} strokeWidth="0.7" fill="none" />
                {/* 蔓藤卷曲 */}
                <path d="M15,15 Q25,5 30,15 Q35,25 25,30" stroke={`rgba(255,255,255,${o * 0.8})`} strokeWidth="0.8" fill="none" />
                <path d="M85,85 Q95,75 100,85 Q105,95 95,100" stroke={`rgba(255,255,255,${o * 0.8})`} strokeWidth="0.8" fill="none" />
                {/* 十字星 */}
                <text x="50" y="85" fontSize="8" fill={`rgba(255,255,255,${o * 0.7})`} textAnchor="middle">+</text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#europe-pattern)" />
          </svg>
        );

      case "africa":
        return (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="africa-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                {/* 锯齿几何纹 */}
                <polyline points="0,20 10,10 20,20 30,10 40,20 50,10 60,20 70,10 80,20 90,10 100,20"
                  stroke={`rgba(255,255,255,${o})`} strokeWidth="1" fill="none" />
                <polyline points="0,50 10,40 20,50 30,40 40,50 50,40 60,50 70,40 80,50 90,40 100,50"
                  stroke={`rgba(255,255,255,${o * 0.6})`} strokeWidth="0.7" fill="none" />
                {/* 菱形阵列 */}
                <rect x="25" y="60" width="8" height="8" transform="rotate(45,29,64)" stroke={`rgba(255,255,255,${o * 0.7})`} strokeWidth="0.8" fill="none" />
                <rect x="55" y="60" width="8" height="8" transform="rotate(45,59,64)" stroke={`rgba(255,255,255,${o * 0.7})`} strokeWidth="0.8" fill="none" />
                <rect x="85" y="60" width="8" height="8" transform="rotate(45,89,64)" stroke={`rgba(255,255,255,${o * 0.7})`} strokeWidth="0.8" fill="none" />
                {/* 圆点鼓点 */}
                <circle cx="15" cy="75" r="3" fill={`rgba(255,255,255,${o * 0.9})`} />
                <circle cx="45" cy="85" r="2.5" fill={`rgba(255,255,255,${o * 0.7})`} />
                <circle cx="75" cy="80" r="2" fill={`rgba(255,255,255,${o * 0.5})`} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#africa-pattern)" />
          </svg>
        );

      case "americas":
        return (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="americas-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                {/* 太阳纹 */}
                <circle cx="100" cy="20" r="8" stroke={`rgba(255,255,255,${o * 0.9})`} strokeWidth="0.8" fill="none" />
                <line x1="100" y1="8" x2="100" y2="4" stroke={`rgba(255,255,255,${o * 0.7})`} strokeWidth="0.6" />
                <line x1="100" y1="32" x2="100" y2="36" stroke={`rgba(255,255,255,${o * 0.7})`} strokeWidth="0.6" />
                <line x1="88" y1="20" x2="84" y2="20" stroke={`rgba(255,255,255,${o * 0.7})`} strokeWidth="0.6" />
                <line x1="112" y1="20" x2="116" y2="20" stroke={`rgba(255,255,255,${o * 0.7})`} strokeWidth="0.6" />
                {/* 阶梯纹样 */}
                <path d="M10,50 L10,40 L20,40 L20,30 L30,30 L30,20 L40,20" stroke={`rgba(255,255,255,${o})`} strokeWidth="1" fill="none" />
                <path d="M110,100 L110,90 L100,90 L100,80 L90,80 L90,70 L80,70" stroke={`rgba(255,255,255,${o * 0.6})`} strokeWidth="0.7" fill="none" />
                {/* 螺旋 */}
                <path d="M30,95 Q40,85 45,90 Q50,95 45,100 Q40,105 35,100 Q30,95 35,90" stroke={`rgba(255,255,255,${o * 0.7})`} strokeWidth="0.7" fill="none" />
                {/* 星点 */}
                <text x="60" y="25" fontSize="10" fill={`rgba(255,255,255,${o * 0.6})`} textAnchor="middle">*</text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#americas-pattern)" />
          </svg>
        );

      case "oceania":
        return (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="oceania-pattern" x="0" y="0" width="120" height="100" patternUnits="userSpaceOnUse">
                {/* 波浪 */}
                <path d="M0,30 Q15,20 30,30 Q45,40 60,30 Q75,20 90,30 Q105,40 120,30"
                  stroke={`rgba(255,255,255,${o})`} strokeWidth="1.2" fill="none" />
                <path d="M0,50 Q20,40 40,50 Q60,60 80,50 Q100,40 120,50"
                  stroke={`rgba(255,255,255,${o * 0.7})`} strokeWidth="0.8" fill="none" />
                <path d="M0,70 Q25,60 50,70 Q75,80 100,70 Q110,65 120,70"
                  stroke={`rgba(255,255,255,${o * 0.5})`} strokeWidth="0.5" fill="none" />
                {/* 星点导航 */}
                <circle cx="20" cy="15" r="1.5" fill={`rgba(255,255,255,${o * 0.8})`} />
                <circle cx="60" cy="10" r="1" fill={`rgba(255,255,255,${o * 0.6})`} />
                <circle cx="100" cy="18" r="1.5" fill={`rgba(255,255,255,${o * 0.8})`} />
                <circle cx="40" cy="88" r="1" fill={`rgba(255,255,255,${o * 0.5})`} />
                <circle cx="80" cy="92" r="1.2" fill={`rgba(255,255,255,${o * 0.6})`} />
                {/* 鱼形 */}
                <path d="M50,85 L55,82 L53,88 Z" fill={`rgba(255,255,255,${o * 0.5})`} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#oceania-pattern)" />
          </svg>
        );

      default:
        return null;
    }
  }, [continent, opacity]);

  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden" aria-hidden="true">
      {pattern}
    </div>
  );
}
