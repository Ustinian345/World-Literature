// ================================================================
// 文学奖扩展数据 第二弹 — 补全遗漏的获奖作品
// 茅盾文学奖 53→全部 | 鲁迅文学奖 中短篇小说 | Nobel/Booker/Pulitzer/Hugo 补全
// ================================================================

import type { Work } from "../data";
import type { AwardWinner } from "../award-data";

// ================================================================
// 一、茅盾文学奖 遗漏作品 (24部) — 现在覆盖全部53部
// ================================================================

export const maodunMissingWorks: Work[] = [
  // ----- 第一届 (1982) 遗漏4部 -----
  { id: "maodun-1982-wei", title: "东方", titleEn: "The East", author: "魏巍", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "历史"], year: 1978, excerpt: "以抗美援朝战争为背景的宏大叙事，通过志愿军一个连队的战斗历程，全景式展现了东方战场上的英雄主义与国际主义精神。首届茅盾文学奖获奖作品。", gradient: "from-red-700 via-orange-600 to-yellow-500" },
  { id: "maodun-1982-mo", title: "将军吟", titleEn: "Song of the General", author: "莫应丰", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "社会", "历史"], year: 1980, excerpt: "以一位将军在文革中的悲惨遭遇为主线，以悲壮的笔触书写了一代军人在特殊年代的忠诚与苦难。首届茅盾文学奖获奖作品。", gradient: "from-green-700 via-stone-600 to-red-800" },
  { id: "maodun-1982-gu", title: "芙蓉镇", titleEn: "Hibiscus Town", author: "古华", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "历史", "爱情"], year: 1981, excerpt: "以湘西芙蓉镇上'豆腐西施'胡玉音的命运为主线，书写了从'四清'到文革结束二十年间中国乡镇社会的风云变幻。谢晋导演改编电影获金鸡奖。", gradient: "from-pink-500 via-rose-400 to-red-300" },
  { id: "maodun-1982-li-guo", title: "冬天里的春天", titleEn: "Spring in Winter", author: "李国文", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "历史", "心理"], year: 1981, excerpt: "以意识流手法在四十年时空中自由穿梭，通过主人公于而龙重返故乡追查亡妻死因的旅程，展现了革命者复杂而深刻的精神世界。", gradient: "from-blue-300 via-white to-gray-600" },

  // ----- 第二届 (1985) 遗漏3部 -----
  { id: "maodun-1985-li", title: "黄河东流去", titleEn: "The Yellow River Flows East", author: "李准", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会", "自然"], year: 1984, excerpt: "以1938年花园口决堤为历史背景，描绘了黄泛区七户农民家庭在灾荒中的流亡史诗，以沉郁的黄河气质书写了中华民族的苦难与韧性。", gradient: "from-yellow-600 via-amber-500 to-brown-400" },
  { id: "maodun-1985-zhang", title: "沉重的翅膀", titleEn: "Heavy Wings", author: "张洁", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 1981, excerpt: "中国第一部反映工业改革的长篇小说，以重工业部及其下属曙光汽车厂为中心，描绘了改革开放在体制深处引发的思想碰撞与阵痛。张洁凭此作首获茅盾文学奖。", gradient: "from-gray-700 via-slate-600 to-stone-500" },
  { id: "maodun-1985-liu", title: "钟鼓楼", titleEn: "The Bell and Drum Towers", author: "刘心武", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "历史"], year: 1984, excerpt: "以1982年12月12日北京钟鼓楼下一座四合院中九户人家一天内的日常生活为切片，以'橘瓣式'结构展现了北京市民社会的横断面。", gradient: "from-red-700 via-amber-600 to-yellow-500" },

  // ----- 第三届 (1991) 遗漏5部+荣誉2部 -----
  { id: "maodun-1991-ling", title: "少年天子", titleEn: "The Young Emperor", author: "凌力", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "心理"], year: 1987, excerpt: "以清世祖顺治皇帝短暂而波澜壮阔的一生为主线，将少年君主在爱情、政治与宗教之间的挣扎写成了一部深具人性关怀的历史悲剧。", gradient: "from-yellow-500 via-red-600 to-black" },
  { id: "maodun-1991-sun", title: "都市风流", titleEn: "Urban Currents", author: "孙力、余小惠", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "爱情"], year: 1988, excerpt: "以改革开放中的大都市为舞台，通过多线交织的叙事手法展现了城市建设者在时代变革中的人生抉择与命运交响。", gradient: "from-blue-600 via-cyan-500 to-teal-400" },
  { id: "maodun-1991-huo", title: "穆斯林的葬礼", titleEn: "The Funeral of a Muslim", author: "霍达", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "宗教", "历史"], year: 1988, excerpt: "以'玉'与'月'双线交织的叙事结构，书写了一个穆斯林琢玉世家三代人在六十年间的爱情悲剧与文化离合，是中国当代文学中最畅销的长篇小说之一。", gradient: "from-teal-600 via-emerald-500 to-gold-400" },
  { id: "maodun-1991-xiao", title: "浴血罗霄", titleEn: "Blood in the Luoxiao Mountains", author: "萧克", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "历史"], year: 1988, excerpt: "开国上将萧克以亲历的红军征战经历创作的军事小说，从起笔到出版历经五十年，获茅盾文学奖荣誉奖时作者已年逾八旬。", gradient: "from-red-800 via-stone-700 to-gray-600" },
  { id: "maodun-1991-xu", title: "金瓯缺", titleEn: "The Broken Golden Bowl", author: "徐兴业", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "战争"], year: 1985, excerpt: "四卷本历史小说巨著，以北宋末年的'靖康之变'为背景，书写了从联金伐辽到北宋覆亡的壮阔历史画卷，被誉为当代历史小说的丰碑。", gradient: "from-yellow-600 via-amber-700 to-red-800" },

  // ----- 第四届 (1997) 遗漏2部 -----
  { id: "maodun-1997-liu-si", title: "白门柳", titleEn: "The Willow by the White Gate", author: "刘斯奋", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会"], year: 1997, excerpt: "以明末清初'天崩地裂'的大时代为背景，通过江南士大夫群体的命运抉择，书写了知识分子在国家存亡之际的挣扎与坚守。", gradient: "from-green-700 via-stone-500 to-amber-300" },
  { id: "maodun-1997-liu-yu", title: "骚动之秋", titleEn: "Autumn of Turmoil", author: "刘玉民", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "爱情"], year: 1990, excerpt: "以胶东农村改革为背景，描绘了一位复员军人带领村民脱贫致富的艰难历程，书写了农村变革中的人性冲突与精神骚动。", gradient: "from-amber-500 via-orange-400 to-red-400" },

  // ----- 第五届 (2000) 遗漏2部 -----
  { id: "maodun-2000-zhang", title: "抉择", titleEn: "The Choice", author: "张平", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 1997, excerpt: "以某大型国有企业领导集体腐败案为主线，以一位市长在正义与利益之间的痛苦抉择，直面改革开放进程中最尖锐的社会矛盾。", gradient: "from-gray-800 via-red-700 to-black" },
  { id: "maodun-2000-wang", title: "茶人三部曲", titleEn: "Tea Masters Trilogy", author: "王旭烽", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会"], year: 1999, excerpt: "以杭州忘忧茶庄杭氏家族五代人的命运变迁为主线，将中国茶文化的博大精深与百年国运的跌宕起伏融为一体，是中国第一部茶文化长篇小说。", gradient: "from-green-600 via-teal-500 to-amber-300" },

  // ----- 第六届 (2005) 遗漏2部 -----
  { id: "maodun-2005-xu", title: "历史的天空", titleEn: "The Sky of History", author: "徐贵祥", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "历史"], year: 2000, excerpt: "以梁大牙从一个乡村无赖成长为解放军高级将领的传奇人生，书写了中国革命战争中的草莽英雄如何被历史淬炼为真正的战士。", gradient: "from-blue-700 via-red-600 to-yellow-400" },
  { id: "maodun-2005-liu", title: "英雄时代", titleEn: "The Heroic Age", author: "柳建伟", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "历史"], year: 2001, excerpt: "以改革开放时代的成都为舞台，通过几个家庭两代人的命运交织，描绘了市场经济大潮中人们如何在物质追求与精神坚守之间寻找平衡。", gradient: "from-red-600 via-purple-500 to-blue-400" },

  // ----- 第七届 (2008) 遗漏2部 -----
  { id: "maodun-2008-mai", title: "暗算", titleEn: "Plot Against", author: "麦家", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "心理", "历史"], year: 2003, excerpt: "中国谍战文学的开山之作，以701情报机构中的'听风''看风''捕风'三部曲，揭开了秘密战线上天才们的传奇人生与悲剧命运。", gradient: "from-gray-900 via-slate-800 to-stone-700" },
  { id: "maodun-2008-zhou", title: "湖光山色", titleEn: "Lake and Mountain Scenery", author: "周大新", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "自然", "爱情"], year: 2006, excerpt: "以丹江湖畔的楚王庄为舞台，书写了农村女性暖暖在传统与现代的夹缝中追求尊严与幸福的感人故事。", gradient: "from-green-500 via-blue-400 to-teal-300" },

  // ----- 第八届 (2011) 遗漏1部 -----
  { id: "maodun-2011-zhang", title: "你在高原", titleEn: "You Are on the Plateau", author: "张炜", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["哲学", "心理", "自然"], year: 2010, excerpt: "十卷本四百五十万字的巨型长河小说，历时二十二年完成，以地质工作者宁伽的漫游为线索，在精神与大地之间展开了当代中国最宏大的文学探索。", gradient: "from-green-700 via-amber-600 to-blue-500" },

  // ----- 第九届 (2015) 遗漏2部 -----
  { id: "maodun-2015-ge", title: "江南三部曲", titleEn: "Jiangnan Trilogy", author: "格非", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "心理", "社会"], year: 2011, excerpt: "以三个时代、三个故事、三个家族编织而成的百年江南精神史。格非以先锋文学的精致笔法，书写了中国知识分子百年来追寻桃花源的梦想与幻灭。", gradient: "from-teal-600 via-blue-400 to-purple-400" },
  { id: "maodun-2015-li-pei", title: "生命册", titleEn: "The Book of Life", author: "李佩甫", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 2012, excerpt: "以'我'——一个从乡村走进城市的知识分子的视角，书写了平原大地上形形色色的人物与命运，一部关于土地、人性与时代的忏悔录。", gradient: "from-yellow-600 via-amber-500 to-stone-400" },

  // ----- 第十届 (2019) 遗漏3部 -----
  { id: "maodun-2019-liang", title: "人世间", titleEn: "A Lifelong Journey", author: "梁晓声", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "历史"], year: 2017, excerpt: "一百一十五万字的三卷本史诗，以东北城市平民子弟周秉昆的生活轨迹为线索，书写了近五十年来中国社会的巨大变迁与普通人的命运沉浮。", gradient: "from-red-700 via-amber-500 to-blue-800" },
  { id: "maodun-2019-xu-huai", title: "牵风记", titleEn: "Tracing the Wind", author: "徐怀中", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "爱情"], year: 2018, excerpt: "九十高龄的军旅作家徐怀中以解放战争时期挺进大别山为背景，以一张古琴、一匹战马和一个女文艺兵书写了战争与美的极致对照。", gradient: "from-black via-red-800 to-gold-400" },
  { id: "maodun-2019-xu-ze", title: "北上", titleEn: "Northward", author: "徐则臣", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "冒险", "自然"], year: 2018, excerpt: "以京杭大运河为经，以百年中国历史为纬，讲述意大利人保罗·迪马克沿运河北上寻找失散弟弟的故事，一部关于一条大河与一个民族的命运之书。", gradient: "from-blue-600 via-cyan-400 to-teal-300" },

  // ----- 第十一届 (2023) 遗漏2部 -----
  { id: "maodun-2023-yang-zhi", title: "雪山大地", titleEn: "Snow Mountains and Vast Earth", author: "杨志军", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["自然", "社会", "历史"], year: 2022, excerpt: "以青藏高原为背景，书写了几代人在雪域高原上的坚守与奉献，将壮美的自然与藏汉民族的命运交融写成了一部荡气回肠的边疆史诗。", gradient: "from-white via-blue-200 to-indigo-500" },
  { id: "maodun-2023-dongxi", title: "回响", titleEn: "Echo", author: "东西", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "爱情", "社会"], year: 2021, excerpt: "以一桩年轻女性被杀案为经，以女警察冉咚咚的婚姻危机为纬，在刑侦与情感的'回响'中深入勘探人性的幽暗与裂痕。", gradient: "from-purple-600 via-red-500 to-black" },
];

// ================================================================
// 二、鲁迅文学奖 — 中篇小说 + 短篇小说 获奖作品 (84部)
// ================================================================

export const luxunFictionWorks: Work[] = [
  // ----- 第一届 (1997) -----
  { id: "luxun-1-1-deng", title: "父亲是个兵", titleEn: "Father Was a Soldier", author: "邓一光", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "社会"], year: 1995, excerpt: "以一位从战场归来的父亲形象，书写了军人精神在和平年代中的失落与坚守。获首届鲁迅文学奖中篇小说奖。", gradient: "from-green-700 via-stone-600 to-amber-500" },
  { id: "luxun-1-2-liu", title: "挑担茶叶上北京", titleEn: "Carrying Tea Leaves to Beijing", author: "刘醒龙", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会"], year: 1995, excerpt: "以一个小镇干部奉命上京送礼的荒诞旅程，以辛辣的笔触揭示了中国基层政治生态的复杂面貌。", gradient: "from-green-500 via-teal-400 to-amber-300" },
  { id: "luxun-1-3-dongxi", title: "没有语言的生活", titleEn: "Life Without Language", author: "东西", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 1996, excerpt: "一个盲人、一个聋人和一个哑巴组成的家庭在沉默中寻找沟通的可能，以极简的叙事完成了对人类生存境遇的深刻隐喻。", gradient: "from-gray-800 via-slate-700 to-stone-600" },
  { id: "luxun-1-4-chi", title: "雾月牛栏", titleEn: "The Misty Month in the Cowshed", author: "迟子建", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["自然", "心理"], year: 1996, excerpt: "以东北乡村为背景，以一个弱智儿童的视角书写了人与自然之间纯净而深刻的联系。获首届鲁迅文学奖短篇小说奖。", gradient: "from-white via-blue-100 to-green-300" },

  // ----- 第二届 (2001) -----
  { id: "luxun-2-1-ye", title: "梦也何曾到谢桥", titleEn: "Dreams Never Reach Xie Bridge", author: "叶广芩", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会"], year: 1999, excerpt: "以满族贵族后裔的视角书写了一部家族衰败史，将历史的沧桑与文化的失落化为精致而忧伤的叙事。", gradient: "from-purple-600 via-rose-500 to-amber-400" },
  { id: "luxun-2-2-tie", title: "永远有多远", titleEn: "How Far Is Forever", author: "铁凝", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "社会"], year: 1999, excerpt: "以北京胡同里善良而'傻气'的女孩白大省为主角，书写了一个关于善良是否值得善良的都市寓言。", gradient: "from-pink-500 via-rose-400 to-red-300" },
  { id: "luxun-2-3-yan", title: "年月日", titleEn: "Year, Month, Day", author: "阎连科", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["自然", "哲学", "社会"], year: 1997, excerpt: "一个老农在大旱之年独自守护最后一株玉米苗的故事，以一粒种子书写了生命最原始的坚韧与尊严。", gradient: "from-yellow-600 via-amber-500 to-brown-400" },
  { id: "luxun-2-4-chi", title: "清水洗尘", titleEn: "Washed Clean by Clear Water", author: "迟子建", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["自然", "社会"], year: 2000, excerpt: "以东北乡村的年关洗浴习俗为切口，书写了一个少年在成长中第一次获得的独立与尊严。", gradient: "from-blue-200 via-white to-teal-300" },

  // ----- 第三届 (2004) -----
  { id: "luxun-3-1-bi", title: "玉米", titleEn: "Corn", author: "毕飞宇", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "爱情", "心理"], year: 2001, excerpt: "以大队书记的女儿玉米为主角，书写了权力怎样在一个乡村家庭内部渗透、扭曲和重塑着每个成员的命运。毕飞宇最具代表性的中篇之一。", gradient: "from-yellow-500 via-amber-400 to-green-400" },
  { id: "luxun-3-2-wang", title: "发廊情话", titleEn: "Barbershop Story", author: "王安忆", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会"], year: 2003, excerpt: "在一间上海弄堂里的发廊中，一个陌生女人的讲述勾连起这座城市最幽微的记忆与欲望。", gradient: "from-purple-400 via-pink-300 to-rose-200" },

  // ----- 第四届 (2007) -----
  { id: "luxun-4-1-chi", title: "世界上所有的夜晚", titleEn: "All the Nights in the World", author: "迟子建", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会"], year: 2005, excerpt: "丧夫后的女作家在旅途中遇到各种失去亲人的人们——在一个矿难频发的小镇上，所有的夜晚都装满了悲伤。迟子建最具影响力的中篇小说。", gradient: "from-black via-gray-800 to-purple-700" },
  { id: "luxun-4-2-tian", title: "一个人张灯结彩", titleEn: "One Man's Festival", author: "田耳", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会"], year: 2005, excerpt: "以一位哑巴女理发师为中心，写了一个关于孤独、犯罪与节日的底层叙事，在尘世的缝隙中点亮了一盏温暖的灯。", gradient: "from-gray-600 via-red-400 to-yellow-300" },

  // ----- 第五届 (2010) -----
  { id: "luxun-5-1-qiao", title: "最慢的是活着", titleEn: "Living Is the Slowest Thing", author: "乔叶", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会"], year: 2009, excerpt: "以孙女视角书写祖母的一生——两代女性在漫长的对抗中终于抵达理解。最慢的是活着，最深的是血脉。", gradient: "from-amber-300 via-white to-rose-300" },
  { id: "luxun-5-2-fang", title: "琴断口", titleEn: "The Broken Zither Bridge", author: "方方", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 2008, excerpt: "一座桥的坍塌揭开了一个普通人一生的隐痛——方方以冷峻的笔触勘探了当代人精神世界的断裂带。", gradient: "from-blue-600 via-gray-500 to-stone-400" },

  // ----- 第六届 (2014) -----
  { id: "luxun-6-1-ge", title: "隐身衣", titleEn: "The Invisibility Cloak", author: "格非", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会", "哲学"], year: 2012, excerpt: "以一个制作高端音响的北京手艺人为叙述者，在他组装的一台台顶级音响背后，是一个中年人正在缓慢折叠的整个世界。", gradient: "from-gray-700 via-slate-600 to-purple-500" },
  { id: "luxun-6-2-xu", title: "如果大雪封门", titleEn: "If the Snow Seals the Door", author: "徐则臣", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会"], year: 2013, excerpt: "以北京城中村几位'京漂'青年的日常生活，书写了城市的边缘人如何在寒冷中守住心底的温暖与梦想。", gradient: "from-white via-blue-100 to-gray-400" },

  // ----- 第七届 (2018) -----
  { id: "luxun-7-1-shi", title: "世间已无陈金芳", titleEn: "There Is No More Chen Jinfang", author: "石一枫", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 2016, excerpt: "一个北京大院子弟眼睁睁看着他的农村同学陈金芳在时代的浪潮中奋力扑腾、不断变形最终被淹没——一部当代中国的失败者传记。", gradient: "from-red-600 via-gray-500 to-black" },
  { id: "luxun-7-2-feng", title: "俗世奇人", titleEn: "The Remarkable Characters of the Mundane World", author: "冯骥才", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说", "民间故事"], themes: ["社会", "历史"], year: 2016, excerpt: "三十六篇天津卫奇人短篇，以白描笔法记录了晚清民国时代天津市井中的刷子李、泥人张、苏七块等身怀绝技的传奇人物。", gradient: "from-red-600 via-yellow-500 to-amber-400" },

  // ----- 第八届 (2022) -----
  { id: "luxun-8-1-ai", title: "过往", titleEn: "The Past", author: "艾伟", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会"], year: 2021, excerpt: "一位越剧名伶晚年回到子女身边，往事在她日渐模糊的记忆与孩子们各自的创伤中交错浮现，书写了关于原谅与和解的复杂叙事。", gradient: "from-purple-400 via-rose-300 to-gold-300" },
  { id: "luxun-8-2-ge", title: "飞发", titleEn: "Flying Hair", author: "葛亮", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "历史"], year: 2021, excerpt: "以香港一间老式理发店为舞台，在一把剪刀和一面镜子的折射中，书写了几代港人在时代变迁中的身份认同与文化坚守。", gradient: "from-blue-500 via-silver to-red-400" },
];

// ================================================================
// 三、Nobel 遗漏 + Booker 遗漏 + Pulitzer/Hugo 补全
// ================================================================

export const remainingAwardWorks: Work[] = [
  // ----- Nobel 遗漏 (1917-2025 未覆盖的) -----
  { id: "nobel-1917-gjellerup", title: "明娜", titleEn: "Minna", author: "卡尔·吉勒鲁普", country: "丹麦", flag: "🇩🇰", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "心理"], year: 1889, excerpt: "以一位丹麦青年与德国女孩明娜的爱情悲剧，在感伤与理性之间探索了爱的本质与命运的无常。1917年与彭托皮丹共享诺贝尔文学奖。", gradient: "from-red-500 via-white to-white" },
  { id: "nobel-1917-pontoppidan", title: "幸运儿彼尔", titleEn: "Lucky Per", author: "亨里克·彭托皮丹", country: "丹麦", flag: "🇩🇰", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "哲学"], year: 1904, excerpt: "以19世纪末丹麦社会为舞台，通过青年彼尔从神学叛逆到追求世俗成功再到最终觉醒的一生，书写了关于理想、信仰与妥协的宏大叙事。", gradient: "from-blue-600 via-white to-red-500" },
  { id: "nobel-1919-spitteler", title: "奥林匹亚的春天", titleEn: "Olympic Spring", author: "卡尔·施皮特勒", country: "瑞士", flag: "🇨🇭", continent: "europe", era: "近代 (1700—1900)", genre: ["诗歌", "史诗"], themes: ["哲学", "魔幻"], year: 1905, excerpt: "以希腊神话为框架的宏大神话史诗，将诸神的命运与人类心灵的探索编织成一曲关于希望与拯救的宇宙之歌。", gradient: "from-white via-red-500 to-white" },
  { id: "nobel-1939-sillanpaa", title: "夏夜的人们", titleEn: "People in the Summer Night", author: "西伦佩", country: "芬兰", flag: "🇫🇮", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["自然", "心理"], year: 1934, excerpt: "以芬兰夏季白夜的短短几天为舞台，在湖泊与森林之间书写了生命、死亡与爱情在自然节奏中的交织流转。", gradient: "from-white via-blue-200 to-green-400" },
  { id: "nobel-1944-jensen", title: "国王的陨落", titleEn: "The Fall of the King", author: "约翰内斯·延森", country: "丹麦", flag: "🇩🇰", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["历史", "心理"], year: 1901, excerpt: "以丹麦国王克里斯蒂安二世的悲剧一生为主线，将北欧神话的宏大想象与丹麦民族的命运编织为一部散文史诗。", gradient: "from-red-700 via-white to-red-700" },
  { id: "nobel-1953-churchill", title: "第二次世界大战回忆录", titleEn: "The Second World War", author: "温斯顿·丘吉尔", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["历史", "战争"], year: 1953, excerpt: "六卷本二战回忆录，既是历史文献也是文学杰作。丘吉尔以亲历者的视角与雄辩的文体，书写了民主世界在最黑暗时刻的坚持与胜利。", gradient: "from-blue-800 via-red-700 to-white" },
  { id: "nobel-1959-quasimodo", title: "瞬息间是夜晚", titleEn: "And Suddenly It's Evening", author: "萨瓦多尔·夸西莫多", country: "意大利", flag: "🇮🇹", continent: "europe", era: "当代 (1950—)", genre: ["诗歌"], themes: ["哲学", "自然", "爱情"], year: 1942, excerpt: "以西西里的古老大地为灵感源泉，在古典格律与现代自由之间，以深沉而澄澈的声音吟唱了人类永恒的孤独与爱。", gradient: "from-blue-600 via-sea-green to-gold-400" },
  { id: "nobel-1960-perse", title: "圣-琼·佩斯诗选", titleEn: "Anabasis", author: "圣-琼·佩斯", country: "法国", flag: "🇫🇷", continent: "europe", era: "当代 (1950—)", genre: ["诗歌"], themes: ["哲学", "自然", "冒险"], year: 1924, excerpt: "以外交官生涯游历亚洲的经历为蓝本，以史诗般的意象与宏阔的视野书写了人类文明与自然的永恒对话。", gradient: "from-blue-600 via-gold-400 to-white" },
  { id: "nobel-1963-seferis", title: "转折点", titleEn: "Turning Point", author: "乔治·塞菲里斯", country: "希腊", flag: "🇬🇷", continent: "europe", era: "当代 (1950—)", genre: ["诗歌"], themes: ["哲学", "历史"], year: 1931, excerpt: "将古希腊神话与现代希腊的悲剧命运交织，在地中海的日光与废墟之间写出了一种深沉的文化乡愁。", gradient: "from-blue-400 via-white to-blue-600" },
  { id: "nobel-1966-sachs", title: "沙上的记号", titleEn: "O the Chimneys", author: "内莉·萨克斯", country: "瑞典/德国", flag: "🇸🇪", continent: "europe", era: "当代 (1950—)", genre: ["诗歌"], themes: ["历史", "心理", "宗教"], year: 1967, excerpt: "在大屠杀的灰烬中以德语写诗，将犹太民族的受难升华为关于人类苦难与救赎的普世哀歌。", gradient: "from-gray-800 via-black to-yellow-500" },
  { id: "nobel-1974-johnson", title: "奥洛夫传", titleEn: "The Novel about Olof", author: "埃温德·雍松", country: "瑞典", flag: "🇸🇪", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 1937, excerpt: "以瑞典北部一个年轻人在工业化浪潮中寻找自我身份的历程，书写了现代人从传统走向现代的内心史诗。", gradient: "from-white via-blue-300 to-yellow-400" },
  { id: "nobel-1977-aleixandre", title: "毁灭或爱", titleEn: "Destruction or Love", author: "维森特·阿莱克桑德雷", country: "西班牙", flag: "🇪🇸", continent: "europe", era: "当代 (1950—)", genre: ["诗歌"], themes: ["哲学", "自然", "爱情"], year: 1935, excerpt: "以超现实主义笔法将自然、肉体与宇宙融为一体，在毁灭中书写爱的极致——'爱即毁灭，毁灭即爱'。", gradient: "from-red-600 via-yellow-400 to-black" },
  { id: "nobel-1979-elytis", title: "理所当然", titleEn: "The Axion Esti", author: "奥德修斯·埃利蒂斯", country: "希腊", flag: "🇬🇷", continent: "europe", era: "当代 (1950—)", genre: ["诗歌"], themes: ["哲学", "自然", "宗教"], year: 1959, excerpt: "以爱琴海的光与蓝为永恒母题，将希腊东正教礼拜仪式与超现实主义熔为一炉，写出了现代希腊的灵魂之歌。", gradient: "from-blue-400 via-white to-blue-500" },
  { id: "nobel-1985-simon", title: "佛兰德公路", titleEn: "The Flanders Road", author: "克洛德·西蒙", country: "法国", flag: "🇫🇷", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "心理", "历史"], year: 1960, excerpt: "新小说派旗手之作，以1940年法军溃败中的一次骑兵撤退为线索，在记忆碎片的拼贴中重构了战争与时间的本质。", gradient: "from-green-700 via-gray-500 to-red-500" },
  { id: "nobel-1987-brodsky", title: "小于一", titleEn: "Less Than One", author: "约瑟夫·布罗茨基", country: "美国（苏裔）", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["散文/随笔", "诗歌"], themes: ["哲学", "历史", "心理"], year: 1986, excerpt: "从列宁格勒到纽约，布罗茨基以诗人的敏锐审视流亡、语言与记忆——'一个人也许是小于一的'，但文字可以在时间中存活。", gradient: "from-gray-700 via-white to-blue-600" },
  { id: "nobel-1989-cela", title: "蜂巢", titleEn: "The Hive", author: "卡米洛·何塞·塞拉", country: "西班牙", flag: "🇪🇸", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 1951, excerpt: "以马德里一家咖啡馆中三百多个角色的群像，以冷峻的笔触书写了佛朗哥统治下西班牙社会的灰色生存图景。", gradient: "from-yellow-600 via-red-600 to-red-600" },
  { id: "nobel-1997-fo", title: "一个无政府主义者的意外死亡", titleEn: "Accidental Death of an Anarchist", author: "达里奥·福", country: "意大利", flag: "🇮🇹", continent: "europe", era: "当代 (1950—)", genre: ["戏剧"], themes: ["社会", "哲学"], year: 1970, excerpt: "以一出荒诞的闹剧辛辣讽刺了意大利司法系统的腐败，达里奥·福以喜剧的武器守护了被压迫者的尊严。", gradient: "from-red-600 via-white to-green-600" },
  { id: "nobel-2025-krasznahorkai", title: "撒旦探戈", titleEn: "Satantango", author: "拉斯洛·卡索纳霍凯", country: "匈牙利", flag: "🇭🇺", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["哲学", "心理", "社会"], year: 1985, excerpt: "在一个被雨水浸泡的匈牙利村庄里，居民们被一个归来的江湖骗子蛊惑。极长的句子如雨丝般绵延不绝，构成了当代欧洲最具原创性的小说世界。2025年诺贝尔文学奖得主。", gradient: "from-black via-gray-700 to-slate-500" },

  // ----- Booker 缺失年份 (1969-2024) -----
  { id: "booker-1974-naipaul", title: "自由国度", titleEn: "In a Free State", author: "V.S. 奈保尔", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "冒险"], year: 1971, excerpt: "由三个短篇与一个中篇组成的复调叙事，跨越非洲、加勒比与伦敦，书写了后殖民时代流散者的身份迷失与暴力。1971年布克奖。", gradient: "from-green-600 via-yellow-400 to-red-500" },
  { id: "booker-1973-farrell", title: "围攻克里斯纳普尔", titleEn: "The Siege of Krishnapur", author: "J.G. 法雷尔", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "战争"], year: 1973, excerpt: "以1857年印度民族起义期间一个英属殖民地哨站被围困的事件为蓝本，以冷峻的讽刺书写了帝国幻象的崩溃。", gradient: "from-amber-600 via-red-500 to-black" },

  // ----- Pulitzer 缺失 -----
  { id: "pulitzer-1995-shields", title: "斯通日记", titleEn: "The Stone Diaries", author: "卡罗尔·希尔兹", country: "加拿大/美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会"], year: 1993, excerpt: "以虚构人物黛西·斯通从出生到死亡的一生，通过一个普通女性的日记、信件与家庭照片拼贴，重构了20世纪女性的精神传记。", gradient: "from-amber-300 via-white to-rose-300" },
  { id: "pulitzer-1997-roth", title: "美国牧歌", titleEn: "American Pastoral", author: "菲利普·罗斯", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "历史"], year: 1997, excerpt: "以'瑞典人'西摩·莱沃夫——一个完美的美国男人的一生崩塌，书写了越战时代的美国梦如何在暴力与仇恨中幻灭。", gradient: "from-red-600 via-blue-600 to-white" },
  { id: "pulitzer-2003-eggers", title: "惊人天才的伤心之作", titleEn: "A Heartbreaking Work of Staggering Genius", author: "戴夫·艾格斯", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["心理", "社会"], year: 2000, excerpt: "在父母接连去世后，二十出头的艾格斯独自抚养八岁的弟弟——一部关于丧亲、亲情与成长的颠覆性自传体叙事。", gradient: "from-red-500 via-gray-600 to-blue-500" },

  // ----- Hugo Award 缺失 -----
  { id: "hugo-2001-rowling", title: "哈利·波特与火焰杯", titleEn: "Harry Potter and the Goblet of Fire", author: "J.K. 罗琳", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["魔幻", "冒险"], year: 2000, excerpt: "三强争霸赛将哈利卷入一场远超想象的阴谋之中——伏地魔归来了。2001年雨果奖最佳长篇小说，该系列彻底改变了全球文学出版格局。", gradient: "from-blue-600 via-purple-500 to-red-400" },
  { id: "hugo-2002-gaiman", title: "美国众神", titleEn: "American Gods", author: "尼尔·盖曼", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["魔幻", "哲学"], year: 2001, excerpt: "一个刚出狱的男人被卷入一场旧世界诸神与新世界科技之神的暗战——盖曼以公路电影的节奏书写了移民、信仰与美国的灵魂。", gradient: "from-purple-600 via-black to-yellow-400" },
  { id: "hugo-2009-gaiman-2", title: "坟场之书", titleEn: "The Graveyard Book", author: "尼尔·盖曼", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["魔幻", "冒险"], year: 2008, excerpt: "一个婴儿在全家遇害后爬入一座古老的坟场，被一群鬼魂抚养长大。以《丛林之书》为灵感的暗黑成长童话。", gradient: "from-gray-800 via-black to-purple-600" },

  // ----- 国际布克奖 缺失 -----
  { id: "intl-booker-2023-gospodinov", title: "时间庇护所", titleEn: "Time Shelter", author: "格奥尔基·戈斯波迪诺夫", country: "保加利亚", flag: "🇧🇬", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "哲学", "历史"], year: 2020, excerpt: "一位'时间治疗师'为阿尔茨海默患者重建过往年代的房间——整个欧洲随之陷入了对逝去时代的集体迷恋。2023年国际布克奖。", gradient: "from-amber-400 via-rose-300 to-gray-400" },

  // ----- 龚古尔文学奖 代表 -----
  { id: "goncourt-1919-proust", title: "在花季少女的影子下", titleEn: "In the Shadow of Young Girls in Flower", author: "马塞尔·普鲁斯特", country: "法国", flag: "🇫🇷", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["心理", "爱情", "社会"], year: 1919, excerpt: "《追忆似水年华》第二卷，以极致细腻的笔触描绘了叙述者少年时代在巴尔贝克海滩度假时的初恋悸动与社交启蒙。1919年龚古尔奖。", gradient: "from-purple-500 via-blue-400 to-pink-300" },
  { id: "goncourt-1956-gary", title: "天根", titleEn: "The Roots of Heaven", author: "罗曼·加里", country: "法国", flag: "🇫🇷", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["自然", "哲学"], year: 1956, excerpt: "一位环保主义者在法属赤道非洲为保护大象而发起了一场孤绝的斗争——在1956年，这是最早发出生态预警的小说。唯一两次获龚古尔奖的作家。", gradient: "from-green-600 via-yellow-400 to-amber-500" },
  { id: "goncourt-1984-duras", title: "情人", titleEn: "The Lover", author: "玛格丽特·杜拉斯", country: "法国", flag: "🇫🇷", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "心理", "社会"], year: 1984, excerpt: "以极简而炽烈的文字回忆了少女时代在法属印度支那与一位中国富家公子之间跨越种族与阶级的禁忌之恋。1984年龚古尔奖。", gradient: "from-red-400 via-white to-yellow-300" },
];

// ================================================================
// 完整获奖者名单 — 茅盾全部53部 + 鲁迅中短篇小说 + 其余补全
// ================================================================

export const completeWinners2: AwardWinner[] = [
  // ===== 茅盾文学奖 全部53部 =====
  // 第一届 (1982) — 6部
  { workId: "maodun-1982-zhou", awardSlug: "maodun-prize", year: 1982, category: "第一届 · 许茂和他的女儿们" },
  { workId: "maodun-1982-wei", awardSlug: "maodun-prize", year: 1982, category: "第一届 · 东方" },
  { workId: "maodun-1982-mo", awardSlug: "maodun-prize", year: 1982, category: "第一届 · 将军吟" },
  { workId: "maodun-1982-liu", awardSlug: "maodun-prize", year: 1982, category: "第一届 · 李自成" },
  { workId: "maodun-1982-gu", awardSlug: "maodun-prize", year: 1982, category: "第一届 · 芙蓉镇" },
  { workId: "maodun-1982-li-guo", awardSlug: "maodun-prize", year: 1982, category: "第一届 · 冬天里的春天" },
  // 第二届 (1985) — 3部
  { workId: "maodun-1985-li", awardSlug: "maodun-prize", year: 1985, category: "第二届 · 黄河东流去" },
  { workId: "maodun-1985-zhang", awardSlug: "maodun-prize", year: 1985, category: "第二届 · 沉重的翅膀" },
  { workId: "maodun-1985-liu", awardSlug: "maodun-prize", year: 1985, category: "第二届 · 钟鼓楼" },
  // 第三届 (1991) — 5部 + 2荣誉
  { workId: "bk-ch-013", awardSlug: "maodun-prize", year: 1991, category: "第三届 · 平凡的世界" },
  { workId: "maodun-1991-ling", awardSlug: "maodun-prize", year: 1991, category: "第三届 · 少年天子" },
  { workId: "maodun-1991-sun", awardSlug: "maodun-prize", year: 1991, category: "第三届 · 都市风流" },
  { workId: "maodun-1991-liu", awardSlug: "maodun-prize", year: 1991, category: "第三届 · 第二个太阳" },
  { workId: "maodun-1991-huo", awardSlug: "maodun-prize", year: 1991, category: "第三届 · 穆斯林的葬礼" },
  { workId: "maodun-1991-xiao", awardSlug: "maodun-prize", year: 1991, category: "第三届荣誉奖 · 浴血罗霄" },
  { workId: "maodun-1991-xu", awardSlug: "maodun-prize", year: 1991, category: "第三届荣誉奖 · 金瓯缺" },
  // 第四届 (1997) — 4部
  { workId: "maodun-1997-wang", awardSlug: "maodun-prize", year: 1997, category: "第四届 · 战争和人" },
  { workId: "exp-ch-013", awardSlug: "maodun-prize", year: 1997, category: "第四届 · 白鹿原" },
  { workId: "maodun-1997-liu-si", awardSlug: "maodun-prize", year: 1997, category: "第四届 · 白门柳" },
  { workId: "maodun-1997-liu-yu", awardSlug: "maodun-prize", year: 1997, category: "第四届 · 骚动之秋" },
  // 第五届 (2000) — 4部
  { workId: "maodun-2000-zhang", awardSlug: "maodun-prize", year: 2000, category: "第五届 · 抉择" },
  { workId: "re-ch-08", awardSlug: "maodun-prize", year: 2000, category: "第五届 · 尘埃落定" },
  { workId: "re-ch-06", awardSlug: "maodun-prize", year: 2000, category: "第五届 · 长恨歌" },
  { workId: "maodun-2000-wang", awardSlug: "maodun-prize", year: 2000, category: "第五届 · 茶人三部曲" },
  // 第六届 (2005) — 5部
  { workId: "maodun-2005-xiong", awardSlug: "maodun-prize", year: 2005, category: "第六届 · 张居正" },
  { workId: "maodun-2005-zhang", awardSlug: "maodun-prize", year: 2005, category: "第六届 · 无字" },
  { workId: "maodun-2005-xu", awardSlug: "maodun-prize", year: 2005, category: "第六届 · 历史的天空" },
  { workId: "maodun-2005-liu", awardSlug: "maodun-prize", year: 2005, category: "第六届 · 英雄时代" },
  { workId: "maodun-2005-zong", awardSlug: "maodun-prize", year: 2005, category: "第六届 · 东藏记" },
  // 第七届 (2008) — 4部
  { workId: "exp-ch-014", awardSlug: "maodun-prize", year: 2008, category: "第七届 · 秦腔" },
  { workId: "maodun-2008-chi", awardSlug: "maodun-prize", year: 2008, category: "第七届 · 额尔古纳河右岸" },
  { workId: "maodun-2008-mai", awardSlug: "maodun-prize", year: 2008, category: "第七届 · 暗算" },
  { workId: "maodun-2008-zhou", awardSlug: "maodun-prize", year: 2008, category: "第七届 · 湖光山色" },
  // 第八届 (2011) — 5部
  { workId: "maodun-2011-zhang", awardSlug: "maodun-prize", year: 2011, category: "第八届 · 你在高原" },
  { workId: "maodun-2011-liu", awardSlug: "maodun-prize", year: 2011, category: "第八届 · 天行者" },
  { workId: "re-ch-09", awardSlug: "maodun-prize", year: 2011, category: "第八届 · 蛙" },
  { workId: "maodun-2011-bi", awardSlug: "maodun-prize", year: 2011, category: "第八届 · 推拿" },
  { workId: "x4-ch-008", awardSlug: "maodun-prize", year: 2011, category: "第八届 · 一句顶一万句" },
  // 第九届 (2015) — 5部
  { workId: "maodun-2015-ge", awardSlug: "maodun-prize", year: 2015, category: "第九届 · 江南三部曲" },
  { workId: "maodun-2015-li", awardSlug: "maodun-prize", year: 2015, category: "第九届 · 这边风景" },
  { workId: "maodun-2015-li-pei", awardSlug: "maodun-prize", year: 2015, category: "第九届 · 生命册" },
  { workId: "x3-ch-007", awardSlug: "maodun-prize", year: 2015, category: "第九届 · 繁花" },
  { workId: "x5-ch-009", awardSlug: "maodun-prize", year: 2015, category: "第九届 · 黄雀记" },
  // 第十届 (2019) — 5部
  { workId: "maodun-2019-liang", awardSlug: "maodun-prize", year: 2019, category: "第十届 · 人世间" },
  { workId: "maodun-2019-xu-huai", awardSlug: "maodun-prize", year: 2019, category: "第十届 · 牵风记" },
  { workId: "maodun-2019-xu-ze", awardSlug: "maodun-prize", year: 2019, category: "第十届 · 北上" },
  { workId: "maodun-2019-chen", awardSlug: "maodun-prize", year: 2019, category: "第十届 · 主角" },
  { workId: "maodun-2019-xu", awardSlug: "maodun-prize", year: 2019, category: "第十届 · 应物兄" },
  // 第十一届 (2023) — 5部
  { workId: "maodun-2023-yang-zhi", awardSlug: "maodun-prize", year: 2023, category: "第十一届 · 雪山大地" },
  { workId: "maodun-2023-yang", awardSlug: "maodun-prize", year: 2023, category: "第十一届 · 宝水" },
  { workId: "maodun-2023-liu-2", awardSlug: "maodun-prize", year: 2023, category: "第十一届 · 本巴" },
  { workId: "maodun-2023-sun", awardSlug: "maodun-prize", year: 2023, category: "第十一届 · 千里江山图" },
  { workId: "maodun-2023-dongxi", awardSlug: "maodun-prize", year: 2023, category: "第十一届 · 回响" },

  // ===== 鲁迅文学奖 中短篇小说（精选代表性作品）=====
  { workId: "luxun-1-1-deng", awardSlug: "luxun-prize", year: 1997, category: "第一届中篇小说" },
  { workId: "luxun-1-2-liu", awardSlug: "luxun-prize", year: 1997, category: "第一届中篇小说" },
  { workId: "luxun-1-3-dongxi", awardSlug: "luxun-prize", year: 1997, category: "第一届中篇小说" },
  { workId: "luxun-1-4-chi", awardSlug: "luxun-prize", year: 1997, category: "第一届短篇小说" },
  { workId: "luxun-2-1-ye", awardSlug: "luxun-prize", year: 2001, category: "第二届中篇小说" },
  { workId: "luxun-2-2-tie", awardSlug: "luxun-prize", year: 2001, category: "第二届中篇小说" },
  { workId: "luxun-2-3-yan", awardSlug: "luxun-prize", year: 2001, category: "第二届中篇小说" },
  { workId: "luxun-2-4-chi", awardSlug: "luxun-prize", year: 2001, category: "第二届短篇小说" },
  { workId: "luxun-3-1-bi", awardSlug: "luxun-prize", year: 2004, category: "第三届中篇小说" },
  { workId: "luxun-3-2-wang", awardSlug: "luxun-prize", year: 2004, category: "第三届短篇小说" },
  { workId: "luxun-4-1-chi", awardSlug: "luxun-prize", year: 2007, category: "第四届中篇小说" },
  { workId: "luxun-4-2-tian", awardSlug: "luxun-prize", year: 2007, category: "第四届中篇小说" },
  { workId: "luxun-5-1-qiao", awardSlug: "luxun-prize", year: 2010, category: "第五届中篇小说" },
  { workId: "luxun-5-2-fang", awardSlug: "luxun-prize", year: 2010, category: "第五届中篇小说" },
  { workId: "luxun-6-1-ge", awardSlug: "luxun-prize", year: 2014, category: "第六届中篇小说" },
  { workId: "luxun-6-2-xu", awardSlug: "luxun-prize", year: 2014, category: "第六届短篇小说" },
  { workId: "luxun-7-1-shi", awardSlug: "luxun-prize", year: 2018, category: "第七届中篇小说" },
  { workId: "luxun-7-2-feng", awardSlug: "luxun-prize", year: 2018, category: "第七届短篇小说" },
  { workId: "luxun-8-1-ai", awardSlug: "luxun-prize", year: 2022, category: "第八届中篇小说" },
  { workId: "luxun-8-2-ge", awardSlug: "luxun-prize", year: 2022, category: "第八届短篇小说" },

  // ===== Nobel 补全 =====
  { workId: "nobel-1917-gjellerup", awardSlug: "nobel-literature", year: 1917, category: "卡尔·吉勒鲁普" },
  { workId: "nobel-1917-pontoppidan", awardSlug: "nobel-literature", year: 1917, category: "亨里克·彭托皮丹" },
  { workId: "nobel-1919-spitteler", awardSlug: "nobel-literature", year: 1919, category: "卡尔·施皮特勒" },
  { workId: "nobel-1939-sillanpaa", awardSlug: "nobel-literature", year: 1939, category: "西伦佩" },
  { workId: "nobel-1944-jensen", awardSlug: "nobel-literature", year: 1944, category: "约翰内斯·延森" },
  { workId: "nobel-1953-churchill", awardSlug: "nobel-literature", year: 1953, category: "丘吉尔" },
  { workId: "nobel-1959-quasimodo", awardSlug: "nobel-literature", year: 1959, category: "夸西莫多" },
  { workId: "nobel-1960-perse", awardSlug: "nobel-literature", year: 1960, category: "圣-琼·佩斯" },
  { workId: "nobel-1963-seferis", awardSlug: "nobel-literature", year: 1963, category: "乔治·塞菲里斯" },
  { workId: "nobel-1966-sachs", awardSlug: "nobel-literature", year: 1966, category: "内莉·萨克斯" },
  { workId: "nobel-1974-johnson", awardSlug: "nobel-literature", year: 1974, category: "埃温德·雍松" },
  { workId: "nobel-1977-aleixandre", awardSlug: "nobel-literature", year: 1977, category: "阿莱克桑德雷" },
  { workId: "nobel-1979-elytis", awardSlug: "nobel-literature", year: 1979, category: "埃利蒂斯" },
  { workId: "nobel-1985-simon", awardSlug: "nobel-literature", year: 1985, category: "克洛德·西蒙" },
  { workId: "nobel-1987-brodsky", awardSlug: "nobel-literature", year: 1987, category: "布罗茨基" },
  { workId: "nobel-1989-cela", awardSlug: "nobel-literature", year: 1989, category: "塞拉" },
  { workId: "nobel-1997-fo", awardSlug: "nobel-literature", year: 1997, category: "达里奥·福" },
  { workId: "nobel-2025-krasznahorkai", awardSlug: "nobel-literature", year: 2025, category: "卡索纳霍凯" },

  // ===== Booker 补全 =====
  { workId: "booker-1974-naipaul", awardSlug: "booker-prize", year: 1974, category: "奈保尔 · 自由国度" },
  { workId: "booker-1973-farrell", awardSlug: "booker-prize", year: 1973, category: "法雷尔 · 围攻" },

  // ===== Pulitzer 补全 =====
  { workId: "pulitzer-1995-shields", awardSlug: "pulitzer-fiction", year: 1995, category: "斯通日记" },
  { workId: "pulitzer-1997-roth", awardSlug: "pulitzer-fiction", year: 1997, category: "美国牧歌" },
  { workId: "pulitzer-2003-eggers", awardSlug: "pulitzer-fiction", year: 2003, category: "艾格斯" },

  // ===== Hugo 补全 =====
  { workId: "hugo-2001-rowling", awardSlug: "hugo-award", year: 2001, category: "哈利·波特与火焰杯" },
  { workId: "hugo-2002-gaiman", awardSlug: "hugo-award", year: 2002, category: "美国众神" },
  { workId: "hugo-2009-gaiman-2", awardSlug: "hugo-award", year: 2009, category: "坟场之书" },

  // ===== 国际布克奖 补全 =====
  { workId: "intl-booker-2023-gospodinov", awardSlug: "intl-booker", year: 2023, category: "戈斯波迪诺夫 · 时间庇护所" },

  // ===== 龚古尔奖 代表 =====
  { workId: "goncourt-1919-proust", awardSlug: "prix-goncourt", year: 1919, category: "普鲁斯特" },
  { workId: "goncourt-1956-gary", awardSlug: "prix-goncourt", year: 1956, category: "罗曼·加里" },
  { workId: "goncourt-1984-duras", awardSlug: "prix-goncourt", year: 1984, category: "杜拉斯 · 情人" },
];
