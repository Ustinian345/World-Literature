// Hotspot coordinates for known multi-character illustrations.
// Coordinates are in percentages (0-100) relative to image width/height.
// { x: 50, y: 50 } = center of the image.

export interface Hotspot {
  characterName: string;   // must match a name in character-data.ts
  x: number;               // 0-100, percentage from left
  y: number;               // 0-100, percentage from top
  description: string;     // short tooltip description
}

// Keyed by book ID (same as scene-image mapping)
export const hotspotData: Record<string, Hotspot[]> = {

  // === 神曲 — Gustave Doré engraving: Dante and Virgil in the dark forest ===
  "divine-comedy": [
    { characterName: "但丁", x: 40, y: 70, description: "诗人本人，迷失在黑暗的森林中" },
    { characterName: "维吉尔", x: 65, y: 65, description: "古罗马诗人，受贝雅特丽齐之托前来引导但丁" },
  ],

  // === 堂吉诃德 — Doré: Don Quixote and Sancho Panza riding ===
  "don-quixote": [
    { characterName: "堂吉诃德", x: 45, y: 40, description: "骑在瘦马罗西南多上，手持长矛的愁容骑士" },
    { characterName: "桑丘·潘沙", x: 70, y: 55, description: "骑驴跟随的忠实侍从，满口谚语的务实农民" },
  ],

  // === 哈姆雷特 — Millais: Ophelia floating in the stream ===
  "hamlet": [
    { characterName: "奥菲莉亚", x: 50, y: 45, description: "哈姆雷特的恋人，精神崩溃后溺水而亡" },
  ],

  // === 伊利亚特 — Battle scene with Achilles ===
  "iliad": [
    { characterName: "阿喀琉斯", x: 55, y: 35, description: "希腊联军最伟大的战士，因挚友之死重返战场" },
    { characterName: "赫克托耳", x: 30, y: 50, description: "特洛伊最英勇的王子，城墙下与阿喀琉斯对决" },
  ],

  // === 西游记 — Chinese woodblock: the four pilgrims ===
  "journey-to-the-west": [
    { characterName: "孙悟空", x: 25, y: 40, description: "齐天大圣，手持金箍棒，火眼金睛" },
    { characterName: "唐僧", x: 50, y: 30, description: "骑着白马的取经人，慈悲为怀" },
    { characterName: "猪八戒", x: 75, y: 45, description: "天蓬元帅转世，肩扛九齿钉耙，贪吃好色" },
    { characterName: "沙悟净", x: 90, y: 55, description: "卷帘大将，沉默寡言、任劳任怨" },
  ],

  // === 三国演义 — Battle scene ===
  "three-kingdoms": [
    { characterName: "关羽", x: 35, y: 35, description: "美髯公，青龙偃月刀，忠义无双" },
    { characterName: "曹操", x: 60, y: 30, description: "乱世奸雄，治世能臣" },
    { characterName: "诸葛亮", x: 50, y: 55, description: "卧龙先生，羽扇纶巾，运筹帷幄" },
  ],

  // === 水浒传 — Liangshan heroes gathering ===
  "water-margin": [
    { characterName: "宋江", x: 50, y: 25, description: "及时雨，梁山一百零八将之首" },
    { characterName: "武松", x: 25, y: 45, description: "打虎英雄，景阳冈上赤手空拳打死猛虎" },
    { characterName: "鲁智深", x: 75, y: 50, description: "花和尚，禅杖打开危险路，戒刀杀尽不平人" },
  ],

  // === 奥德赛 — Waterhouse: Ulysses and the Sirens ===
  "odyssey": [
    { characterName: "奥德修斯", x: 50, y: 40, description: "被绑在桅杆上，以蜡封耳抵抗塞壬的歌声" },
  ],
};
