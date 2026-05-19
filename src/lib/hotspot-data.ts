// Manually mapped hotspot coordinates for known multi-character illustrations.
// Coordinates: percentage from left (x) and top (y) of the image.
// Each entry must match a character name from character-data.ts.

export interface Hotspot {
  characterName: string;
  x: number;
  y: number;
  description: string;
}

export const hotspotData: Record<string, Hotspot[]> = {

  // === 神曲 — Doré: Dante in dark robe L, Virgil in toga R ===
  "divine-comedy": [
    { characterName: "但丁", x: 35, y: 55, description: "诗人但丁，身着中世纪长袍，凝视地狱深渊" },
    { characterName: "维吉尔", x: 65, y: 50, description: "罗马诗人维吉尔，身着古典长袍，指引但丁前行" },
  ],

  // === 堂吉诃德 — Jules David: Quixote on horse L, Sancho on donkey R ===
  "don-quixote": [
    { characterName: "堂吉诃德", x: 35, y: 40, description: "瘦高的愁容骑士，骑在罗西南多上，手持长矛" },
    { characterName: "桑丘·潘沙", x: 70, y: 55, description: "矮胖的侍从，骑驴跟随，满口谚语的务实农民" },
  ],

  // === 哈姆雷特 — Millais: Ophelia floating center, face up ===
  "hamlet": [
    { characterName: "奥菲莉亚", x: 50, y: 40, description: "漂浮在水面上，双手摊开，口中衔着花朵——精神崩溃后溺水而亡" },
  ],

  // === 伊利亚特 — Benouville: Achilles L, Agamemnon R, Briseis center ===
  "iliad": [
    { characterName: "阿喀琉斯", x: 28, y: 45, description: "愤怒地拔剑冲向右侧，被雅典娜拉住" },
    { characterName: "阿伽门农", x: 72, y: 45, description: "希腊联军统帅，端坐王座，夺走了阿喀琉斯的女奴" },
  ],

  // === 西游记 — Long Corridor painting: 4 pilgrims L-to-R ===
  "journey-to-the-west": [
    { characterName: "孙悟空", x: 18, y: 50, description: "齐天大圣，手持金箍棒，火眼金睛，走在最前" },
    { characterName: "唐僧", x: 42, y: 40, description: "骑着白龙马，身披袈裟，慈悲为怀的取经人" },
    { characterName: "猪八戒", x: 65, y: 50, description: "天蓬元帅转世，肩扛九齿钉耙，大腹便便" },
    { characterName: "沙悟净", x: 85, y: 55, description: "卷帘大将，肩挑行李，沉默寡言、任劳任怨" },
  ],

  // === 三国演义 — "Three Brothers" painting: Liu Bei center, Guan Yu L, Zhang Fei R ===
  "three-kingdoms": [
    { characterName: "关羽", x: 25, y: 45, description: "红脸长髯，青龙偃月刀，忠义无双" },
    { characterName: "刘备", x: 52, y: 40, description: "汉室宗亲，双股剑，以仁德闻名天下" },
    { characterName: "张飞", x: 78, y: 48, description: "黑脸环眼，丈八蛇矛，勇猛刚烈" },
  ],

  // === 水浒传 — Woodblock: Song Jiang center, Wu Song L, Lu Zhishen R ===
  "water-margin": [
    { characterName: "宋江", x: 52, y: 30, description: "及时雨，梁山一百零八将之首，居中而坐" },
    { characterName: "武松", x: 22, y: 50, description: "打虎英雄，手持双刀，景阳冈上赤手空拳打死猛虎" },
    { characterName: "鲁智深", x: 80, y: 52, description: "花和尚，禅杖在手，倒拔垂杨柳的豪杰" },
  ],

  // === 奥德赛 — Waterhouse: Odysseus tied to mast center, sirens around ===
  "odyssey": [
    { characterName: "奥德修斯", x: 50, y: 45, description: "被绑在桅杆上，以蜡封耳，奋力挣扎着想回应塞壬的歌声" },
  ],

  // === 战争与和平 — Borodino panorama ===
  "war-and-peace": [
    { characterName: "拿破仑", x: 40, y: 35, description: "骑白马立于高处，指挥千军万马——却只是历史的奴隶" },
    { characterName: "安德烈·博尔孔斯基", x: 25, y: 60, description: "在炮火中负伤倒地，仰望那片高远宁静的天空" },
  ],
};
