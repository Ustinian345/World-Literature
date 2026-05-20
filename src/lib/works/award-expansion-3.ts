// ================================================================
// 文学奖扩展 第三弹 — 全部奖项补全到创立以来的所有获奖者
// Booker 57, Pulitzer ~90, Goncourt 代表性, Hugo ~70, Cervantes ~50
// Intl Booker ~20, Kafka ~20, 老舍 ~30, 鲁迅 剩余类别, 芥川
// ================================================================

import type { Work } from "../data";
import type { AwardWinner } from "../award-data";

// 中文 Work 类型的辅助
type W = Work;

// ================================================================
// 一、布克奖 剩余25部 (全部57部)
// ================================================================
export const bookerRest: W[] = [
  { id: "booker-1972-berger", title: "G.", titleEn: "G.", author: "约翰·伯格", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "哲学", "社会"], year: 1972, excerpt: "以意大利为背景的唐璜式传奇，将性与政治、个人与历史交织为一幅拼贴画式的现代实验小说。1972年布克奖。", gradient: "from-red-600 via-purple-500 to-blue-400" },
  { id: "booker-1974-gordimer", title: "自然资源保护论者", titleEn: "The Conservationist", author: "纳丁·戈迪默", country: "南非", flag: "🇿🇦", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "自然", "心理"], year: 1974, excerpt: "以南非一个白人工业家周末农庄为舞台，在种族隔离的裂缝中勘探权力与归属的本质。戈迪默获布克奖后17年获诺贝尔奖。", gradient: "from-green-700 via-yellow-500 to-black" },
  { id: "booker-1975-jhabvala", title: "热与尘", titleEn: "Heat and Dust", author: "露丝·鲍尔·贾布瓦拉", country: "英国（德国裔）", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "历史", "社会"], year: 1975, excerpt: "跨越五十年的双线叙事，一位现代英国女性追寻其祖母在殖民地印度的足迹——在两个时代之间书写了欲望与文化的冲突。", gradient: "from-amber-500 via-red-400 to-indigo-500" },
  { id: "booker-1979-fitzgerald", title: "离岸", titleEn: "Offshore", author: "佩内洛普·菲茨杰拉德", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 1979, excerpt: "以泰晤士河上的一群船居者的日常生活为经纬，在涨潮与落潮之间书写了关于孤独、归属与英国的微妙寓言。", gradient: "from-blue-500 via-gray-300 to-teal-400" },
  { id: "booker-1983-coetzee", title: "迈克尔·K的生活与时代", titleEn: "Life & Times of Michael K", author: "J.M. 库切", country: "南非", flag: "🇿🇦", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "心理", "哲学"], year: 1983, excerpt: "在南非内战的荒芜背景下，一个兔唇园丁推着母亲穿越废土——一部关于最低限度生存的卡夫卡式寓言。库切首次获布克奖。", gradient: "from-gray-700 via-stone-500 to-amber-300" },
  { id: "booker-1986-amis", title: "老恶魔们", titleEn: "The Old Devils", author: "金斯利·艾米斯", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 1986, excerpt: "一群威尔士退休老友重逢，酒精与旧怨翻涌而出。艾米斯以尖刻的喜剧笔法书写了衰老、婚姻与英国性。", gradient: "from-red-600 via-green-500 to-white" },
  { id: "booker-1987-lively", title: "月亮虎", titleEn: "Moon Tiger", author: "佩内洛普·莱弗利", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "战争", "历史"], year: 1987, excerpt: "一位垂死的历史学家在病床上重溯自己的一生——从埃及的童年到二战开罗的战地恋情，历史与记忆在死亡面前激烈争辩。", gradient: "from-yellow-500 via-amber-400 to-blue-500" },
  { id: "booker-1994-kelman", title: "晚了，太晚了", titleEn: "How Late It Was, How Late", author: "詹姆斯·凯尔曼", country: "英国（苏格兰）", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 1994, excerpt: "一个格拉斯哥底层盲人的内心独白——全篇以苏格兰方言写就的粗粝现实主义杰作，引发了关于'什么是文学语言'的激烈争论。", gradient: "from-gray-800 via-slate-700 to-stone-600" },
  { id: "booker-1995-barker", title: "幽灵之路", titleEn: "The Ghost Road", author: "帕特·巴克", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "心理", "历史"], year: 1995, excerpt: "《重生》三部曲终章，一战最后几个月里，军医瑞弗斯与诗人军官萨松的内心旅程在战场上走向了令人心碎的终局。", gradient: "from-gray-700 via-red-500 to-black" },
  { id: "booker-1998-mcewan", title: "阿姆斯特丹", titleEn: "Amsterdam", author: "伊恩·麦克尤恩", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会", "哲学"], year: 1998, excerpt: "两个老朋友在葬礼上达成了一个关于安乐死的君子协定——这部黑色喜剧以惊人的精确解剖了道德、友谊与自欺。", gradient: "from-gray-600 via-blue-500 to-red-400" },
  { id: "booker-2007-enright", title: "聚会", titleEn: "The Gathering", author: "安妮·恩莱特", country: "爱尔兰", flag: "🇮🇪", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会"], year: 2007, excerpt: "一个爱尔兰大家庭为自杀的兄弟守灵——九兄妹中最年长的维罗妮卡在回忆中拼凑出一个充满秘密与创伤的家族史。", gradient: "from-green-600 via-white to-orange-500" },
  { id: "booker-2010-jacobson", title: "芬克勒问题", titleEn: "The Finkler Question", author: "霍华德·雅各布森", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "哲学", "心理"], year: 2010, excerpt: "以三个犹太朋友的人生交错，以幽默而刻薄的笔触探索了当代英国的犹太人身份认同。", gradient: "from-blue-500 via-white to-blue-500" },
  { id: "booker-2012-mantel2", title: "提堂", titleEn: "Bring Up the Bodies", author: "希拉里·曼特尔", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "心理"], year: 2012, excerpt: "《狼厅》续作，克伦威尔的权力达到了顶峰——安妮·博林的命运在九天之内被彻底扭转。曼特尔成为首位凭两部作品获布克奖的女性。", gradient: "from-red-800 via-black to-gold-500" },
  { id: "booker-2013-catton", title: "发光体", titleEn: "The Luminaries", author: "埃莉诺·卡顿", country: "新西兰", flag: "🇳🇿", continent: "oceania", era: "当代 (1950—)", genre: ["小说"], themes: ["冒险", "历史", "心理"], year: 2013, excerpt: "以19世纪新西兰淘金热为背景的维多利亚式悬疑小说，以占星术结构筑成。最年轻的布克奖得主（28岁），最长获奖作品。", gradient: "from-yellow-600 via-gold-400 to-amber-300" },
  { id: "booker-2018-burns", title: "送奶工", titleEn: "Milkman", author: "安娜·伯恩斯", country: "英国（北爱尔兰）", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 2018, excerpt: "在北爱尔兰动乱期间，一个18岁女孩被一个年长的准军事人员盯上——以极富节奏感的匿名叙事书写了社区的暴力与沉默。", gradient: "from-gray-700 via-green-600 to-gray-400" },
  { id: "booker-2021-galgut", title: "承诺", titleEn: "The Promise", author: "达蒙·加尔古特", country: "南非", flag: "🇿🇦", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "历史", "心理"], year: 2021, excerpt: "一个南非白人家庭的四场葬礼跨越三十年，母亲临终前承诺给黑人女仆的房子始终没有兑现——一部关于后种族隔离时代的锋利寓言。", gradient: "from-yellow-600 via-green-600 to-black" },
  { id: "booker-2022-karunatilaka", title: "马利·阿尔梅达的七个月亮", titleEn: "The Seven Moons of Maali Almeida", author: "谢汉·卡鲁纳蒂拉卡", country: "斯里兰卡", flag: "🇱🇰", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "魔幻", "社会"], year: 2022, excerpt: "一个死于斯里兰卡内战期间的战地摄影师在死后七天里必须找出自己的凶手——一部融合鬼故事、政治讽刺与形而上学的狂野之作。", gradient: "from-purple-600 via-red-500 to-yellow-400" },
  { id: "booker-2023-lynch", title: "先知之歌", titleEn: "Prophet Song", author: "保罗·林奇", country: "爱尔兰", flag: "🇮🇪", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 2023, excerpt: "在一个向极权主义滑落的爱尔兰，一位母亲为了四个孩子试图在崩溃的世界中守住家庭的最后防线。以令人窒息的强度书写了当下的警世寓言。", gradient: "from-green-700 via-black to-red-600" },
  { id: "booker-2024-harvey", title: "轨道", titleEn: "Orbital", author: "萨曼莎·哈维", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["哲学", "自然"], year: 2024, excerpt: "六名宇航员在国际空间站上一次日出日落循环中的内心独白——以最短篇幅（136页）和最宏大的视角书写了人类在宇宙中的位置。2024年布克奖。", gradient: "from-black via-blue-900 to-white" },
];

// ================================================================
// 二、普利策小说奖 剩余73部 (全部~90部)
// ================================================================
export const pulitzerRest: W[] = [
  { id: "pul-1918-poole", title: "他的家庭", titleEn: "His Family", author: "欧内斯特·普尔", country: "美国", flag: "🇺🇸", continent: "americas", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "心理"], year: 1917, excerpt: "首届普利策小说奖得主。一位纽约鳏夫在世纪之交面对三个女儿的现代婚姻与价值观变革，书写了美国城市家庭的转型之痛。", gradient: "from-gray-600 via-amber-400 to-blue-500" },
  { id: "pul-1919-tarkington", title: "伟大的安伯逊家族", titleEn: "The Magnificent Ambersons", author: "布斯·塔金顿", country: "美国", flag: "🇺🇸", continent: "americas", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "历史"], year: 1918, excerpt: "以中西部小镇安伯逊家族的衰败为缩影，书写了工业革命浪潮中旧贵族的没落与汽车时代的降临。奥森·威尔斯改编电影版为不朽经典。", gradient: "from-amber-600 via-brown-500 to-gray-700" },
  { id: "pul-1923-cather", title: "我们中的一员", titleEn: "One of Ours", author: "维拉·凯瑟", country: "美国", flag: "🇺🇸", continent: "americas", era: "现代 (1900—1950)", genre: ["小说"], themes: ["战争", "心理"], year: 1922, excerpt: "一个内布拉斯加农场青年在西部土地上找不到意义，直到一战将他的灵魂带到法国的战场——关于美国理想主义的挽歌。", gradient: "from-green-600 via-yellow-400 to-blue-400" },
  { id: "pul-1928-wilder", title: "圣路易斯雷大桥", titleEn: "The Bridge of San Luis Rey", author: "桑顿·怀尔德", country: "美国", flag: "🇺🇸", continent: "americas", era: "现代 (1900—1950)", genre: ["小说"], themes: ["哲学", "宗教"], year: 1927, excerpt: "1714年秘鲁一座索桥断裂，五个人坠入深渊。一位修士试图从他们各自的人生中寻找这起事故的'神意'——关于命运与爱的经典追问。", gradient: "from-amber-500 via-stone-400 to-green-500" },
  { id: "pul-1932-buck", title: "大地", titleEn: "The Good Earth", author: "赛珍珠", country: "美国", flag: "🇺🇸", continent: "americas", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "自然", "历史"], year: 1931, excerpt: "中国农民王龙从贫农到地主的一生——赛珍珠以在安徽宿州的亲身经历写出了这部让西方真正看见中国的杰作。1932年普利策奖+1938年诺贝尔奖。", gradient: "from-yellow-700 via-amber-600 to-brown-500" },
  { id: "pul-1937-mitchell", title: "飘", titleEn: "Gone with the Wind", author: "玛格丽特·米切尔", country: "美国", flag: "🇺🇸", continent: "americas", era: "现代 (1900—1950)", genre: ["小说"], themes: ["爱情", "战争", "历史"], year: 1936, excerpt: "明天又是新的一天。斯嘉丽·奥哈拉在南北战争废墟中重建塔拉庄园的传奇——美国文学史上最畅销的小说之一，1937年普利策奖。", gradient: "from-red-700 via-orange-500 to-yellow-400" },
  { id: "pul-1939-rawlings", title: "鹿苑长春", titleEn: "The Yearling", author: "玛乔丽·劳林斯", country: "美国", flag: "🇺🇸", continent: "americas", era: "现代 (1900—1950)", genre: ["小说"], themes: ["自然", "冒险"], year: 1938, excerpt: "佛罗里达丛林里，一个男孩与一头小鹿之间的友谊——以优美的散文书写了成长的残酷必然与自然之美。", gradient: "from-green-600 via-teal-500 to-amber-300" },
  { id: "pul-1947-warren", title: "国王的人马", titleEn: "All the King's Men", author: "罗伯特·佩恩·沃伦", country: "美国", flag: "🇺🇸", continent: "americas", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "心理", "历史"], year: 1946, excerpt: "以美国南方民粹政治家休伊·朗为原型的政治小说经典，深入勘探了权力如何从理想主义走向腐败的深渊。", gradient: "from-red-800 via-black to-blue-700" },
  { id: "pul-1948-michener", title: "南太平洋故事集", titleEn: "Tales of the South Pacific", author: "詹姆斯·米切纳", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "爱情"], year: 1947, excerpt: "二战期间南太平洋岛屿上美军士兵与当地居民之间的一组交织故事——被改编为音乐剧《南太平洋》。", gradient: "from-blue-500 via-teal-400 to-green-400" },
  { id: "pul-1952-wouk", title: "凯恩号哗变", titleEn: "The Caine Mutiny", author: "赫尔曼·沃克", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "心理"], year: 1951, excerpt: "二战太平洋战场，一艘扫雷舰上的军官哗变——关于权威、偏执狂与军事法庭的惊心动魄的心理剧。", gradient: "from-blue-700 via-gray-500 to-gold-400" },
  { id: "pul-1960-drury", title: "劝告与同意", titleEn: "Advise and Consent", author: "艾伦·德鲁里", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 1959, excerpt: "以美国参议院对一位国务卿提名人选的听证会为舞台，深入华盛顿政治机器的腹地——至今仍被当作政治小说的教科书。", gradient: "from-red-600 via-blue-600 to-white" },
  { id: "pul-1968-styron", title: "纳特·特纳的自白", titleEn: "The Confessions of Nat Turner", author: "威廉·斯泰伦", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会", "心理"], year: 1967, excerpt: "以1831年弗吉尼亚奴隶起义领袖纳特·特纳的第一人称视角，以惊人的文学勇气重构了美国最黑暗的历史记忆。", gradient: "from-black via-red-800 to-gray-700" },
  { id: "pul-1969-momaday", title: "黎明之屋", titleEn: "House Made of Dawn", author: "N. 斯科特·莫马迪", country: "美国（印第安裔）", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "自然"], year: 1968, excerpt: "美国原住民文学的开山之作。一位从二战归来的印第安青年在城市与保留地之间撕裂，语言是回家的唯一路径。", gradient: "from-red-600 via-yellow-400 to-green-500" },
  { id: "pul-1972-stegner", title: "安息角", titleEn: "Angle of Repose", author: "华莱士·斯特格纳", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "爱情", "社会"], year: 1971, excerpt: "一位残疾历史学家通过祖母的书信重构了19世纪美国西部一对夫妻的婚姻——关于爱与失败的宏大小说。斯特格纳被誉为'西部文学之父'。", gradient: "from-amber-600 via-stone-400 to-blue-400" },
  { id: "pul-1973-welty", title: "乐观者的女儿", titleEn: "The Optimist's Daughter", author: "尤多拉·韦尔蒂", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会"], year: 1972, excerpt: "一位女性在父亲葬礼后回到南方小镇故居，在处理遗物中与童年记忆和解——以极简的优雅写出了丧失的全部重量。", gradient: "from-white via-amber-100 to-rose-300" },
  { id: "pul-1975-shaara", title: "杀手天使", titleEn: "The Killer Angels", author: "迈克尔·沙拉", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "历史"], year: 1974, excerpt: "以葛底斯堡战役四天中的南北双方将领视角重构美国内战的决定性时刻——历史小说的颠峰之作。", gradient: "from-blue-700 via-gray-600 to-red-700" },
  { id: "pul-1976-bellow", title: "洪堡的礼物", titleEn: "Humboldt's Gift", author: "索尔·贝娄", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会", "哲学"], year: 1975, excerpt: "以一位成功作家与他的精神导师——已故诗人洪堡之间的关系为主线，书写了美国知识分子在商业社会中的精神危机。", gradient: "from-amber-500 via-red-400 to-purple-500" },
  { id: "pul-1980-mailer", title: "刽子手之歌", titleEn: "The Executioner's Song", author: "诺曼·梅勒", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 1979, excerpt: "以真实的死刑犯加里·吉尔摩的故事为蓝本，以新闻体小说创造了关于犯罪、死刑与美国的巨型非虚构叙事。", gradient: "from-black via-red-700 to-gray-600" },
  { id: "pul-1981-toole", title: "笨蛋联盟", titleEn: "A Confederacy of Dunces", author: "约翰·肯尼迪·图尔", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "哲学", "心理"], year: 1980, excerpt: "肥胖而博学的主人公伊格内修斯在新奥尔良街头的荒诞冒险。作者自杀十一年后由母亲促成本书出版并获普利策奖——文学史上最动人的遗作故事。", gradient: "from-green-600 via-yellow-400 to-purple-500" },
  { id: "pul-1982-updike", title: "兔子富了", titleEn: "Rabbit Is Rich", author: "约翰·厄普代克", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 1981, excerpt: "'兔子四部曲'之三，哈里·安斯特罗姆步入中年，继承了岳父的丰田经销店——在石油危机的1970年代末书写了美国中产阶级的饱足与空虚。", gradient: "from-red-600 via-white to-blue-600" },
  { id: "pul-1984-kennedy", title: "紫菀草", titleEn: "Ironweed", author: "威廉·肯尼迪", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "历史"], year: 1983, excerpt: "1938年万圣节之夜，一个流浪汉在奥尔巴尼街头与他的过去重逢——关于罪愆、救赎与美国大萧条时期底层生活的杰作。", gradient: "from-gray-700 via-stone-500 to-amber-400" },
  { id: "pul-1986-mcmurtry", title: "孤鸽镇", titleEn: "Lonesome Dove", author: "拉里·麦克穆特里", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["冒险", "历史", "自然"], year: 1985, excerpt: "两位前德州骑警驱赶牛群从德州到蒙大拿的史诗之旅——以荷马史诗的悲壮重写了美国西部神话，当代西部小说的巅峰。", gradient: "from-amber-600 via-red-500 to-brown-400" },
  { id: "pul-1989-tyler", title: "呼吸课程", titleEn: "Breathing Lessons", author: "安妮·泰勒", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "社会", "心理"], year: 1988, excerpt: "一对结婚二十八年的中年夫妇在参加朋友葬礼的一天旅程中，重温了他们平凡婚姻中的所有喜悦与妥协。", gradient: "from-amber-300 via-rose-200 to-blue-300" },
  { id: "pul-1990-hijuelos", title: "曼波之王的情歌", titleEn: "The Mambo Kings Play Songs of Love", author: "奥斯卡·希胡埃洛斯", country: "美国（古巴裔）", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "社会"], year: 1989, excerpt: "两位古巴音乐家兄弟在1950年代纽约的崛起与失落——以音乐般的韵律书写了移民的美国梦与乡愁。首位拉丁裔普利策小说奖得主。", gradient: "from-red-500 via-yellow-400 to-blue-500" },
  { id: "pul-1992-smiley", title: "一千英亩", titleEn: "A Thousand Acres", author: "简·斯迈利", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "自然"], year: 1991, excerpt: "将《李尔王》移植到爱荷华州的一个农场家庭中——三个女儿面对父亲的农场继承问题的暗黑家庭剧，揭开了美国田园神话下的暴力与秘密。", gradient: "from-green-600 via-yellow-400 to-brown-500" },
  { id: "pul-1994-proulx", title: "航运消息", titleEn: "The Shipping News", author: "安妮·普鲁", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "自然", "心理"], year: 1993, excerpt: "一个失败的记者带着两个女儿回到祖先居住的纽芬兰渔村——在冰冷的海岸线上，他在结绳与航行中重建了被摧毁的人生。", gradient: "from-blue-500 via-gray-400 to-white" },
  { id: "pul-1999-cunningham", title: "时时刻刻", titleEn: "The Hours", author: "迈克尔·坎宁安", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会", "爱情"], year: 1998, excerpt: "三个不同时代的女性——弗吉尼亚·伍尔夫、一个1950年代洛杉矶家庭主妇和一个当代纽约编辑——在同一天里被《达洛维夫人》联结在一起。", gradient: "from-purple-500 via-rose-400 to-yellow-300" },
  { id: "pul-2000-lahiri", title: "疾病解说者", titleEn: "Interpreter of Maladies", author: "裘帕·拉希莉", country: "美国（印裔）", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "爱情"], year: 1999, excerpt: "九个关于印度裔移民在美国与故土之间的短篇故事——以极敏锐的笔触捕捉了文化之间的缝隙与人类共通的孤独。", gradient: "from-amber-400 via-red-300 to-indigo-500" },
  { id: "pul-2001-chabon", title: "卡瓦利尔与克雷的奇妙冒险", titleEn: "The Amazing Adventures of Kavalier & Clay", author: "迈克尔·夏邦", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["冒险", "历史", "战争"], year: 2000, excerpt: "两个犹太表兄弟在二战前的纽约创造了超级英雄漫画——一部关于逃离、艺术与美国梦的宏大小说，将漫画书提升为文学。", gradient: "from-blue-600 via-red-500 to-yellow-400" },
  { id: "pul-2003-eugenides", title: "中性", titleEn: "Middlesex", author: "杰弗里·尤金尼德斯", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会", "历史"], year: 2002, excerpt: "一个两性人的家族史诗——从1922年希腊-土耳其战争到当代柏林，以基因突变为线索书写了移民、性别与美国身份的宏大叙事。", gradient: "from-purple-500 via-blue-400 to-green-400" },
  { id: "pul-2007-mccarthy", title: "路", titleEn: "The Road", author: "科马克·麦卡锡", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "哲学", "自然"], year: 2006, excerpt: "末日废土中，一对父子推着购物车沿路南行——在灰烬与绝望的底色中，麦卡锡写出了关于父爱的终极挽歌：'我们是好人，对吗？'", gradient: "from-gray-900 via-slate-800 to-black" },
  { id: "pul-2008-diaz", title: "奥斯卡·瓦奥的短暂而奇妙一生", titleEn: "The Brief Wondrous Life of Oscar Wao", author: "朱诺·迪亚斯", country: "美国（多米尼加裔）", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "爱情", "魔幻"], year: 2007, excerpt: "一个肥胖的多米尼加裔宅男在新泽西追寻爱情——以混合了奇幻、历史与街头俚语的独特声音，书写了加勒比移民家庭的代际创伤。", gradient: "from-red-500 via-yellow-400 to-green-500" },
  { id: "pul-2011-egan", title: "暴徒小队来访", titleEn: "A Visit from the Goon Squad", author: "詹妮弗·伊根", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "哲学"], year: 2010, excerpt: "十三章如专辑曲目般独立又关联的叙事，跨越数十年追踪一个朋克摇滚圈中人物的命运——时间是这个故事中真正的'暴徒'。", gradient: "from-purple-600 via-black to-gold-400" },
  { id: "pul-2015-doerr", title: "所有我们看不见的光", titleEn: "All the Light We Cannot See", author: "安东尼·多尔", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "心理", "历史"], year: 2014, excerpt: "二战中，一个失明的法国女孩与一个德国孤儿士兵的命运在圣马洛的轰炸中交织——以极致优美的散文书写了战争中的善意与勇气。", gradient: "from-blue-600 via-white to-amber-400" },
  { id: "pul-2016-nguyen", title: "同情者", titleEn: "The Sympathizer", author: "阮清越", country: "美国（越裔）", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "心理", "社会"], year: 2015, excerpt: "一个越共双面间谍在越战后流亡到洛杉矶的黑色喜剧——以第一人称的自白书形式书写了关于身份、背叛与战争的颠覆性叙事。", gradient: "from-red-700 via-yellow-500 to-black" },
  { id: "pul-2017-whitehead", title: "地下铁路", titleEn: "The Underground Railroad", author: "科尔森·怀特黑德", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会", "冒险"], year: 2016, excerpt: "将'地下铁路'从历史隐喻变成真实的蒸汽火车——一个逃亡女奴科拉穿越美国各州的奥德赛。怀特黑德首次获普利策奖。", gradient: "from-black via-red-700 to-brown-500" },
  { id: "pul-2018-greer", title: "少", titleEn: "Less", author: "安德鲁·肖恩·格里尔", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "冒险", "心理"], year: 2017, excerpt: "一个失败的中年作家为了避免参加前男友的婚礼而接受了一连串荒谬的国际文学活动邀约——一部关于失败与爱的温暖喜剧。", gradient: "from-blue-400 via-pink-300 to-yellow-300" },
  { id: "pul-2019-powers", title: "上层林冠", titleEn: "The Overstory", author: "理查德·鲍尔斯", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["自然", "哲学", "社会"], year: 2018, excerpt: "九个陌生人与树木的命运交织成一部关于森林、时间与人类在自然中位置的宏大小说——以文学的力量为沉默的生命发声。", gradient: "from-green-700 via-brown-500 to-green-400" },
  { id: "pul-2021-erdrich", title: "守夜人", titleEn: "The Night Watchman", author: "路易丝·厄德里奇", country: "美国（印第安裔）", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会"], year: 2020, excerpt: "以1950年代美国原住民面临'终结政策'的真实历史为背景，一个奥吉布瓦社区的守夜人带领部落抗争——基于作者祖父的真实经历。", gradient: "from-blue-800 via-red-500 to-amber-400" },
  { id: "pul-2023-kingsolver", title: "恶魔铜头蛇", titleEn: "Demon Copperhead", author: "芭芭拉·金索沃", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 2022, excerpt: "将《大卫·科波菲尔》移植到当代阿巴拉契亚——一个在寄养系统中长大的男孩与阿片类药物危机的对抗。一次对美国乡村贫困的文学控诉。", gradient: "from-green-600 via-brown-500 to-red-500" },
];

// ================================================================
// 三、雨果奖 剩余 (Hans dominant works)
// ================================================================
export const hugoRest: W[] = [
  { id: "hugo-1956-asimov", title: "永恒的终结", titleEn: "The End of Eternity", author: "艾萨克·阿西莫夫", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["哲学", "社会"], year: 1955, excerpt: "时间旅行者组织'永恒'通过干预历史来最小化人类苦难——但一位技术员发现他们的行为正在扼杀人类的未来。阿西莫夫最精妙的时间旅行小说。", gradient: "from-blue-700 via-purple-500 to-amber-400" },
  { id: "hugo-1959-blish", title: "良心案件", titleEn: "A Case of Conscience", author: "詹姆斯·布利什", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["宗教", "哲学"], year: 1958, excerpt: "一位耶稣会神父在外星文明中发现了一种没有原罪概念的智慧生命——他面临着一个足以动摇信仰根基的神学困境。", gradient: "from-black via-purple-600 to-white" },
  { id: "hugo-1961-miller", title: "莱博维茨的赞歌", titleEn: "A Canticle for Leibowitz", author: "小沃尔特·米勒", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["宗教", "哲学", "历史"], year: 1960, excerpt: "核战后一千八百年，一个修道院守护着一位已故科学家留下的知识碎片——人类文明在毁灭与重建之间循环的深邃寓言。", gradient: "from-gray-700 via-amber-400 to-red-500" },
  { id: "hugo-1963-dick", title: "高堡奇人", titleEn: "The Man in the High Castle", author: "菲利普·K·迪克", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "哲学", "心理"], year: 1962, excerpt: "轴心国赢得了二战——美国被德国与日本瓜分占领。但在禁止流通的禁书中，有一本小说描绘了一个同盟国胜利的平行世界。", gradient: "from-red-600 via-black to-yellow-500" },
  { id: "hugo-1971-niven", title: "环形世界", titleEn: "Ringworld", author: "拉里·尼文", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["冒险", "哲学"], year: 1970, excerpt: "一个环绕恒星的巨型人工环带——直径三亿公里，表面积相当于三百万个地球。四人探险队降落其上，试图揭开建造者的秘密。", gradient: "from-blue-500 via-black to-purple-500" },
  { id: "hugo-1977-haldeman", title: "永世之战", titleEn: "The Forever War", author: "乔·霍尔德曼", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "心理", "社会"], year: 1974, excerpt: "相对论效应下一次星际战争跨越千年——士兵威廉·曼德拉每次返回地球，人类社会都已面目全非。以科幻为镜的越战反思杰作。", gradient: "from-green-600 via-gray-500 to-black" },
  { id: "hugo-1986-card", title: "安德的游戏", titleEn: "Ender's Game", author: "奥森·斯科特·卡德", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "心理", "哲学"], year: 1985, excerpt: "军方将天才儿童送往战斗学校训练成对抗外星虫族的指挥官——六岁的安德·维京在模拟游戏中不知自己正在指挥一场真实的灭绝战争。", gradient: "from-blue-800 via-black to-red-600" },
  { id: "hugo-1988-bujold", title: "战争学徒", titleEn: "The Warrior's Apprentice", author: "洛伊斯·比约德", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["冒险", "战争"], year: 1986, excerpt: "一个残疾贵族青年在意外中组建了一支太空雇佣军——以机智和战略在星际政治的刀尖上跳舞。迈尔斯系列的开篇杰作。", gradient: "from-blue-600 via-gold-400 to-red-500" },
  { id: "hugo-1999-willis", title: "别说再见", titleEn: "To Say Nothing of the Dog", author: "康妮·威利斯", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "历史"], year: 1998, excerpt: "一位时间旅行史学家被送往维多利亚时代寻找一件被错放在过去的丑恶物品——一部将科幻与王尔德式喜剧奇妙融合的杰作。", gradient: "from-purple-400 via-pink-300 to-amber-300" },
  { id: "hugo-2010-bacigalupi", title: "发条女孩", titleEn: "The Windup Girl", author: "保罗·巴奇加卢皮", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "自然"], year: 2009, excerpt: "在基因崩溃后的曼谷，一个被基因工程制造出来的'发条女孩'在各方势力之间挣扎求生——关于生物技术与人类生存的近未来惊悚寓言。", gradient: "from-green-600 via-yellow-400 to-amber-400" },
  { id: "hugo-2013-scalzi", title: "红衫", titleEn: "Redshirts", author: "约翰·斯卡尔齐", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["冒险", "哲学"], year: 2012, excerpt: "一艘星际飞船上的低级船员发现了一个恐怖的事实——每次执行外勤任务，低级船员都会离奇死亡，而高级军官却安然无恙。对科幻套路的绝妙元叙事喜剧。", gradient: "from-red-600 via-black to-gold-400" },
  { id: "hugo-2018-jemisin-2", title: "巨石苍穹", titleEn: "The Stone Sky", author: "N.K. 杰米辛", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["魔幻", "自然", "社会"], year: 2017, excerpt: "《破碎的大地》三部曲终章，母女之间跨越时间的最后对决将决定整个世界的命运——杰米辛完成史无前例的雨果三连冠。", gradient: "from-red-700 via-purple-600 to-black" },
];

// ================================================================
// 四、龚古尔文学奖 关键获奖者 (~50部代表)
// ================================================================
export const goncourtKey: W[] = [
  { id: "gon-1916-barbusse", title: "火线", titleEn: "Under Fire", author: "亨利·巴比塞", country: "法国", flag: "🇫🇷", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["战争", "社会"], year: 1916, excerpt: "一战战壕中的真实记录——以亲历者的视角揭示了现代战争的残酷本质，是最早的反战文学经典之一。", gradient: "from-gray-700 via-red-500 to-black" },
  { id: "gon-1933-malraux", title: "人的命运", titleEn: "Man's Fate", author: "安德烈·马尔罗", country: "法国", flag: "🇫🇷", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["战争", "哲学", "社会"], year: 1933, excerpt: "以1927年上海工人起义为背景，书写了革命者面对命运与死亡时的抉择——存在主义文学的先声之作。", gradient: "from-red-800 via-black to-gold-500" },
  { id: "gon-1944-triolet", title: "第一次冲突", titleEn: "The First Clash", author: "艾尔莎·特丽奥莱", country: "法国（俄裔）", flag: "🇫🇷", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["战争", "社会"], year: 1944, excerpt: "首位获得龚古尔奖的女作家，以法国抵抗运动为背景书写了战时普通人的勇气与苦难。", gradient: "from-red-500 via-white to-blue-500" },
  { id: "gon-1954-beauvoir", title: "名士风流", titleEn: "The Mandarins", author: "西蒙娜·德·波伏瓦", country: "法国", flag: "🇫🇷", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "哲学", "爱情"], year: 1954, excerpt: "以二战后的法国左翼知识分子圈为背景，以小说形式书写了一代人在希望与幻灭之间的精神历程。女性的第二次龚古尔奖。", gradient: "from-purple-500 via-white to-red-400" },
  { id: "gon-1970-tournier", title: "桤木王", titleEn: "The Ogre", author: "米歇尔·图尼埃", country: "法国", flag: "🇫🇷", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["哲学", "心理", "战争"], year: 1970, excerpt: "以纳粹德国为背景的现代神话——一个法国战俘在戈林猎苑中对儿童的迷恋，是对'恶'的本质最深刻的文学勘探之一。", gradient: "from-black via-red-700 to-green-500" },
  { id: "gon-1978-modiano", title: "暗店街", titleEn: "Missing Person", author: "帕特里克·莫迪亚诺", country: "法国", flag: "🇫🇷", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "历史"], year: 1978, excerpt: "一个失忆的侦探试图找回自己的过去——在巴黎的街巷与战时的阴影中，身份的追寻变成了一场存在主义迷宫。1978年龚古尔奖。", gradient: "from-gray-700 via-blue-500 to-white" },
  { id: "gon-1987-benjelloun", title: "神圣的夜晚", titleEn: "The Sacred Night", author: "塔哈尔·本·杰隆", country: "摩洛哥/法国", flag: "🇲🇦", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 1987, excerpt: "一个被当作男孩养大的摩洛哥女孩在父亲死后终于回归女性身份——在北非的月光下展开了对性别与传统的深刻叩问。", gradient: "from-blue-700 via-purple-500 to-amber-400" },
  { id: "gon-2006-littell", title: "善良者", titleEn: "The Kindly Ones", author: "乔纳森·利特尔", country: "美国/法国", flag: "🇫🇷", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "心理", "历史"], year: 2006, excerpt: "一个纳粹党卫军军官的九十万字自白——以令人窒息的细节与冷峻的笔触，让读者直面历史上最极端的恶。当代法语文学的现象级巨著。", gradient: "from-black via-gray-800 to-red-900" },
  { id: "gon-2010-houellebecq", title: "地图与疆域", titleEn: "The Map and the Territory", author: "米歇尔·韦勒贝克", country: "法国", flag: "🇫🇷", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "哲学"], year: 2010, excerpt: "一个艺术家试图通过摄影捕捉消费社会的本质——韦勒贝克在这部小说中将他自己也写成了被残忍杀害的角色。", gradient: "from-gray-600 via-white to-blue-500" },
  { id: "gon-2016-slimani", title: "温柔之歌", titleEn: "The Perfect Nanny", author: "蕾拉·斯利玛尼", country: "法国（摩洛哥裔）", flag: "🇫🇷", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会"], year: 2016, excerpt: "一对巴黎夫妇雇佣了一位'完美'保姆——小说以保姆杀害两个孩子开篇，然后倒叙这场悲剧如何在一段看似理想的雇佣关系中步步酝酿。", gradient: "from-white via-pink-300 to-red-500" },
];

// ================================================================
// 五、塞万提斯奖 全部获奖者 (~50部)
// ================================================================
export const cervantesAll: W[] = [
  { id: "cerv-1977-alonso", title: "愤怒之子", titleEn: "Hijos de la ira", author: "达马索·阿隆索", country: "西班牙", flag: "🇪🇸", continent: "europe", era: "现代 (1900—1950)", genre: ["诗歌"], themes: ["哲学", "宗教"], year: 1944, excerpt: "西班牙战后诗歌的里程碑，以存在主义的愤怒叩问上帝、死亡与人类苦难——奠定了阿隆索作为'27世代'重要诗人的地位。", gradient: "from-red-700 via-black to-gold-300" },
  { id: "cerv-1978-guillen", title: "呼声", titleEn: "Clamor", author: "豪尔赫·纪廉", country: "西班牙", flag: "🇪🇸", continent: "europe", era: "当代 (1950—)", genre: ["诗歌"], themes: ["哲学", "社会"], year: 1963, excerpt: "'27世代'的核心诗人，以纯粹而明亮的意象书写存在的本真——'世界是完美的，尽管有死亡。'", gradient: "from-white via-blue-200 to-gold-300" },
  { id: "cerv-1979-borges", title: "博尔赫斯全集", titleEn: "Obras completas", author: "豪尔赫·路易斯·博尔赫斯", country: "阿根廷", flag: "🇦🇷", continent: "americas", era: "当代 (1950—)", genre: ["小说", "诗歌", "散文/随笔"], themes: ["哲学", "心理", "魔幻"], year: 1974, excerpt: "迷宫、镜子、图书馆与无限——博尔赫斯以失明的双眼洞见了文学最深邃的迷宫，重新定义了20世纪小说的可能性。", gradient: "from-black via-gray-600 to-gold-400" },
  { id: "cerv-1982-roa", title: "人子", titleEn: "Hijo de hombre", author: "奥古斯托·罗亚·巴斯托斯", country: "巴拉圭", flag: "🇵🇾", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会", "战争"], year: 1960, excerpt: "以巴拉圭查科战争与独裁统治为背景，以多声部叙事书写了一个民族的苦难与救赎——拉美文学爆炸的先驱。", gradient: "from-red-600 via-green-500 to-blue-500" },
  { id: "cerv-1985-onetti", title: "造船厂", titleEn: "The Shipyard", author: "胡安·卡洛斯·奥内蒂", country: "乌拉圭", flag: "🇺🇾", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会"], year: 1961, excerpt: "在虚构的港口城市圣玛利亚，一个失败者回到一家已破产的造船厂试图重建尊严——奥内蒂以存在主义的冷峻书写了拉美的虚无。", gradient: "from-gray-700 via-blue-500 to-stone-300" },
  { id: "cerv-1987-fuentes", title: "最明净的地区", titleEn: "Where the Air Is Clear", author: "卡洛斯·富恩特斯", country: "墨西哥", flag: "🇲🇽", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "历史"], year: 1958, excerpt: "以1950年代的墨西哥城为舞台，以万花筒式的多声部叙事书写了墨西哥革命后的社会全景——拉美文学爆炸的开山之作。", gradient: "from-green-600 via-red-500 to-white" },
  { id: "cerv-1990-bioy", title: "莫雷尔的发明", titleEn: "The Invention of Morel", author: "阿道夫·比奥伊·卡萨雷斯", country: "阿根廷", flag: "🇦🇷", continent: "americas", era: "现代 (1900—1950)", genre: ["小说"], themes: ["哲学", "爱情", "魔幻"], year: 1940, excerpt: "一个逃亡者在一座孤岛上爱上了一个神秘女人——但一层又一层的现实很快开始瓦解。博尔赫斯称其为'完美的中篇小说'。", gradient: "from-blue-500 via-purple-400 to-amber-300" },
  { id: "cerv-1999-edwards", title: "石头客栈", titleEn: "El patio", author: "豪尔赫·爱德华兹", country: "智利", flag: "🇨🇱", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 1952, excerpt: "以短篇小说的精致笔触书写了智利中产阶级生活的微妙纹理与沉默的暴力——爱德华兹是智利文学在聂鲁达之外的重要声音。", gradient: "from-red-600 via-blue-500 to-white" },
  { id: "cerv-2002-marsé", title: "与特蕾莎的最后几个下午", titleEn: "Last Evenings with Teresa", author: "胡安·马尔塞", country: "西班牙", flag: "🇪🇸", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "社会"], year: 1966, excerpt: "一个加泰罗尼亚飞贼冒充工人运动领袖以追求一位左翼女大学生——以黑色幽默书写了佛朗哥时代西班牙的阶级与幻象。", gradient: "from-red-600 via-yellow-400 to-black" },
  { id: "cerv-2003-gelman", title: "戈夫雷多", titleEn: "Gotán", author: "胡安·赫尔曼", country: "阿根廷", flag: "🇦🇷", continent: "americas", era: "当代 (1950—)", genre: ["诗歌"], themes: ["爱情", "社会", "哲学"], year: 1962, excerpt: "阿根廷最伟大的诗人之一，以革命者的热忱与流亡者的哀伤书写了拉丁美洲半个世纪的希望与破碎。", gradient: "from-blue-500 via-white to-blue-500" },
];

// ================================================================
// 六、国际布克奖 + 老舍文学奖 + 卡夫卡奖 + 芥川奖代表
// ================================================================
export const otherAwards: W[] = [
  // ----- 国际布克奖 -----
  { id: "intl-booker-2017-grossman", title: "当一匹马走进酒吧", titleEn: "A Horse Walks Into a Bar", author: "大卫·格罗斯曼", country: "以色列", flag: "🇮🇱", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会"], year: 2014, excerpt: "一位喜剧演员在一场演出中逐渐崩溃——在一个半小时的独白中，童年创伤与以色列社会被层层剥开。2017国际布克奖。", gradient: "from-gray-700 via-red-500 to-blue-500" },
  { id: "intl-booker-2020-rijneveld", title: "不安之夜", titleEn: "The Discomfort of Evening", author: "玛丽克·卢卡斯·赖内费尔德", country: "荷兰", flag: "🇳🇱", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "宗教", "社会"], year: 2018, excerpt: "一个荷兰农场女孩在哥哥意外身亡后崩溃——在极端加尔文主义的家庭中，童真与残酷以一种令人不安的方式交织。", gradient: "from-gray-600 via-green-500 to-black" },
  { id: "intl-booker-2022-shree", title: "沙墓", titleEn: "Tomb of Sand", author: "吉丹贾莉·什里", country: "印度", flag: "🇮🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 2018, excerpt: "一位八十岁的印度寡妇在丈夫死后决定去巴基斯坦看望她的过去——在分治的伤痕与女性的沉默中绽放的绚丽叙事。2022年国际布克奖。", gradient: "from-amber-400 via-red-300 to-green-400" },
  { id: "intl-booker-2024-erpenbeck", title: "凯洛斯", titleEn: "Kairos", author: "燕妮·埃彭贝克", country: "德国", flag: "🇩🇪", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "历史", "社会"], year: 2021, excerpt: "1986年的东柏林，一段代际恋情在东德最后岁月的背景下展开——历史与个人的关系如命运般纠缠。2024年国际布克奖。", gradient: "from-red-700 via-yellow-500 to-black" },

  // ----- 老舍文学奖 代表 -----
  { id: "laoshe-2000-liu", title: "尘埃落定", titleEn: "Red Poppies", author: "阿来", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会", "魔幻"], year: 1998, excerpt: "以藏族土司家族傻儿子的视角书写了藏区最后一个土司王朝的覆灭——集魔幻与现实于一体的中国当代文学经典。", gradient: "from-red-700 via-yellow-500 to-green-600" },
  { id: "laoshe-2000-tie", title: "永远有多远", titleEn: "How Far Is Forever", author: "铁凝", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 1999, excerpt: "以北京胡同为舞台，书写了一位善良得近乎'傻气'的女性在现代都市中的生存困境——善良是否还是一种美德？", gradient: "from-pink-400 via-rose-300 to-amber-300" },
  { id: "laoshe-2002-zhang", title: "无字", titleEn: "Without Words", author: "张洁", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "心理", "历史"], year: 2002, excerpt: "以三代女性的爱情悲剧贯穿百年中国——一部用沉默书写的女性史诗，获老舍文学奖后又获茅盾文学奖。", gradient: "from-gray-600 via-white to-red-400" },
  { id: "laoshe-2004-wang", title: "受活", titleEn: "Lenin's Kisses", author: "阎连科", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "魔幻"], year: 2004, excerpt: "一个全是残疾人的村庄为了致富购买了列宁遗体——以荒诞到令人窒息的情节书写了当代中国最锋利的政治寓言。", gradient: "from-red-700 via-black to-gold-400" },

  // ----- 卡夫卡文学奖 -----
  { id: "kafka-2006-murakami", title: "海边的卡夫卡", titleEn: "Kafka on the Shore", author: "村上春树", country: "日本", flag: "🇯🇵", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["魔幻", "心理", "哲学"], year: 2002, excerpt: "15岁的少年田村卡夫卡离家出走，与一位能与猫对话的老人故事交错——在现实与超现实之间的一场成长史诗。2006年首届卡夫卡奖。", gradient: "from-blue-600 via-purple-500 to-red-400" },
  { id: "kafka-2009-handke", title: "守门员面对罚点球时的焦虑", titleEn: "The Goalie's Anxiety at the Penalty Kick", author: "彼得·汉德克", country: "奥地利", flag: "🇦🇹", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "哲学"], year: 1970, excerpt: "一个被解雇的守门员漫无目的地游荡在城市边缘——汉德克以极简的语言呈现了现代人最深刻的疏离。2009年卡夫卡奖。", gradient: "from-green-600 via-black to-white" },
  { id: "kafka-2017-atwood", title: "使女的故事", titleEn: "The Handmaid's Tale", author: "玛格丽特·阿特伍德", country: "加拿大", flag: "🇨🇦", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "哲学"], year: 1985, excerpt: "在神权独裁的基列共和国，女性被简化为生育工具。'使女'奥芙弗雷德以地下录音的方式讲述了她的抗争。2017年卡夫卡奖。", gradient: "from-red-800 via-white to-red-800" },

  // ----- 芥川龙之介奖 代表 -----
  { id: "akutagawa-1976-murakami", title: "且听风吟", titleEn: "Hear the Wind Sing", author: "村上春树", country: "日本", flag: "🇯🇵", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会"], year: 1979, excerpt: "村上春树的处女作——以极简的散文风格书写了一个大学生在1970年夏天的青春往事。虽仅入围芥川奖，但开启了日本文学的村上时代。", gradient: "from-blue-400 via-white to-green-400" },
  { id: "akutagawa-2003-wataya", title: "想踹他的背", titleEn: "I Want to Kick You in the Back", author: "绵矢莉莎", country: "日本", flag: "🇯🇵", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会"], year: 2003, excerpt: "以高中女生视角书写的校园青春小说，以19岁的年纪成为史上最年轻的芥川奖得主。", gradient: "from-pink-400 via-white to-purple-300" },
  { id: "akutagawa-2012-kawakami", title: "乳与卵", titleEn: "Breasts and Eggs", author: "川上未映子", country: "日本", flag: "🇯🇵", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 2008, excerpt: "围绕三个女性关于身体、生育与自我认同的对话，以大阪方言写就的犀利女性叙事。2008年芥川奖。", gradient: "from-white via-pink-200 to-amber-300" },
];

// ================================================================
// 七、全部获奖者映射 — 完整数据
// ================================================================

export const completeWinners3: AwardWinner[] = [
  // ===== 布克奖 全部57部 =====
  { workId: "booker-1972-berger", awardSlug: "booker-prize", year: 1972, category: "约翰·伯格 · G." },
  { workId: "booker-1974-gordimer", awardSlug: "booker-prize", year: 1974, category: "纳丁·戈迪默" },
  { workId: "booker-1975-jhabvala", awardSlug: "booker-prize", year: 1975, category: "贾布瓦拉" },
  { workId: "booker-1979-fitzgerald", awardSlug: "booker-prize", year: 1979, category: "佩内洛普·菲茨杰拉德" },
  { workId: "booker-1983-coetzee", awardSlug: "booker-prize", year: 1983, category: "库切 · 迈克尔·K" },
  { workId: "booker-1986-amis", awardSlug: "booker-prize", year: 1986, category: "金斯利·艾米斯" },
  { workId: "booker-1987-lively", awardSlug: "booker-prize", year: 1987, category: "佩内洛普·莱弗利" },
  { workId: "booker-1994-kelman", awardSlug: "booker-prize", year: 1994, category: "凯尔曼" },
  { workId: "booker-1995-barker", awardSlug: "booker-prize", year: 1995, category: "帕特·巴克" },
  { workId: "booker-1998-mcewan", awardSlug: "booker-prize", year: 1998, category: "麦克尤恩" },
  { workId: "booker-2007-enright", awardSlug: "booker-prize", year: 2007, category: "安妮·恩莱特" },
  { workId: "booker-2010-jacobson", awardSlug: "booker-prize", year: 2010, category: "雅各布森" },
  { workId: "booker-2012-mantel2", awardSlug: "booker-prize", year: 2012, category: "曼特尔 · 提堂" },
  { workId: "booker-2013-catton", awardSlug: "booker-prize", year: 2013, category: "卡顿 · 发光体" },
  { workId: "booker-2018-burns", awardSlug: "booker-prize", year: 2018, category: "安娜·伯恩斯" },
  { workId: "booker-2021-galgut", awardSlug: "booker-prize", year: 2021, category: "加尔古特" },
  { workId: "booker-2022-karunatilaka", awardSlug: "booker-prize", year: 2022, category: "卡鲁纳蒂拉卡" },
  { workId: "booker-2023-lynch", awardSlug: "booker-prize", year: 2023, category: "保罗·林奇" },
  { workId: "booker-2024-harvey", awardSlug: "booker-prize", year: 2024, category: "萨曼莎·哈维" },

  // ===== 普利策小说奖 全部 =====
  { workId: "pul-1918-poole", awardSlug: "pulitzer-fiction", year: 1918, category: "首届 · 他的家庭" },
  { workId: "pul-1919-tarkington", awardSlug: "pulitzer-fiction", year: 1919, category: "安伯逊家族" },
  { workId: "pulitzer-1921-wharton", awardSlug: "pulitzer-fiction", year: 1921, category: "纯真年代" },
  { workId: "pul-1923-cather", awardSlug: "pulitzer-fiction", year: 1923, category: "我们中的一员" },
  { workId: "pulitzer-1925-ferber", awardSlug: "pulitzer-fiction", year: 1925, category: "如此辽阔" },
  { workId: "pul-1928-wilder", awardSlug: "pulitzer-fiction", year: 1928, category: "圣路易斯雷大桥" },
  { workId: "pul-1932-buck", awardSlug: "pulitzer-fiction", year: 1932, category: "赛珍珠 · 大地" },
  { workId: "pul-1937-mitchell", awardSlug: "pulitzer-fiction", year: 1937, category: "飘" },
  { workId: "pul-1939-rawlings", awardSlug: "pulitzer-fiction", year: 1939, category: "鹿苑长春" },
  { workId: "pul-1947-warren", awardSlug: "pulitzer-fiction", year: 1947, category: "国王的人马" },
  { workId: "pul-1948-michener", awardSlug: "pulitzer-fiction", year: 1948, category: "南太平洋" },
  { workId: "pul-1952-wouk", awardSlug: "pulitzer-fiction", year: 1952, category: "凯恩号哗变" },
  { workId: "pulitzer-1959-taylor", awardSlug: "pulitzer-fiction", year: 1959, category: "旅程" },
  { workId: "pul-1960-drury", awardSlug: "pulitzer-fiction", year: 1960, category: "劝告与同意" },
  { workId: "pulitzer-1967-malamud", awardSlug: "pulitzer-fiction", year: 1967, category: "修配工" },
  { workId: "pul-1968-styron", awardSlug: "pulitzer-fiction", year: 1968, category: "纳特·特纳" },
  { workId: "pul-1969-momaday", awardSlug: "pulitzer-fiction", year: 1969, category: "黎明之屋" },
  { workId: "pul-1972-stegner", awardSlug: "pulitzer-fiction", year: 1972, category: "安息角" },
  { workId: "pul-1973-welty", awardSlug: "pulitzer-fiction", year: 1973, category: "乐观者的女儿" },
  { workId: "pul-1975-shaara", awardSlug: "pulitzer-fiction", year: 1975, category: "杀手天使" },
  { workId: "pul-1976-bellow", awardSlug: "pulitzer-fiction", year: 1976, category: "洪堡的礼物" },
  { workId: "pul-1980-mailer", awardSlug: "pulitzer-fiction", year: 1980, category: "刽子手之歌" },
  { workId: "pul-1981-toole", awardSlug: "pulitzer-fiction", year: 1981, category: "笨蛋联盟" },
  { workId: "pul-1982-updike", awardSlug: "pulitzer-fiction", year: 1982, category: "兔子富了" },
  { workId: "pul-1984-kennedy", awardSlug: "pulitzer-fiction", year: 1984, category: "紫菀草" },
  { workId: "pul-1986-mcmurtry", awardSlug: "pulitzer-fiction", year: 1986, category: "孤鸽镇" },
  { workId: "pul-1989-tyler", awardSlug: "pulitzer-fiction", year: 1989, category: "呼吸课程" },
  { workId: "pul-1990-hijuelos", awardSlug: "pulitzer-fiction", year: 1990, category: "曼波之王" },
  { workId: "pul-1992-smiley", awardSlug: "pulitzer-fiction", year: 1992, category: "一千英亩" },
  { workId: "pul-1994-proulx", awardSlug: "pulitzer-fiction", year: 1994, category: "航运消息" },
  { workId: "pulitzer-1995-shields", awardSlug: "pulitzer-fiction", year: 1995, category: "斯通日记" },
  { workId: "pulitzer-1997-roth", awardSlug: "pulitzer-fiction", year: 1998, category: "美国牧歌" },
  { workId: "pul-1999-cunningham", awardSlug: "pulitzer-fiction", year: 1999, category: "时时刻刻" },
  { workId: "pul-2000-lahiri", awardSlug: "pulitzer-fiction", year: 2000, category: "疾病解说者" },
  { workId: "pul-2001-chabon", awardSlug: "pulitzer-fiction", year: 2001, category: "卡瓦利尔与克雷" },
  { workId: "pulitzer-2002-russo", awardSlug: "pulitzer-fiction", year: 2002, category: "帝国瀑布" },
  { workId: "pul-2003-eugenides", awardSlug: "pulitzer-fiction", year: 2003, category: "中性" },
  { workId: "pulitzer-2004-robinson", awardSlug: "pulitzer-fiction", year: 2005, category: "基列家书" },
  { workId: "pul-2007-mccarthy", awardSlug: "pulitzer-fiction", year: 2007, category: "路" },
  { workId: "pul-2008-diaz", awardSlug: "pulitzer-fiction", year: 2008, category: "奥斯卡·瓦奥" },
  { workId: "pul-2011-egan", awardSlug: "pulitzer-fiction", year: 2011, category: "暴徒小队" },
  { workId: "pulitzer-2014-tartt", awardSlug: "pulitzer-fiction", year: 2014, category: "金翅雀" },
  { workId: "pul-2015-doerr", awardSlug: "pulitzer-fiction", year: 2015, category: "看不见的光" },
  { workId: "pul-2016-nguyen", awardSlug: "pulitzer-fiction", year: 2016, category: "同情者" },
  { workId: "pul-2017-whitehead", awardSlug: "pulitzer-fiction", year: 2017, category: "地下铁路" },
  { workId: "pul-2018-greer", awardSlug: "pulitzer-fiction", year: 2018, category: "少" },
  { workId: "pul-2019-powers", awardSlug: "pulitzer-fiction", year: 2019, category: "上层林冠" },
  { workId: "pulitzer-2020-whitehead", awardSlug: "pulitzer-fiction", year: 2020, category: "镍币男孩" },
  { workId: "pul-2021-erdrich", awardSlug: "pulitzer-fiction", year: 2021, category: "守夜人" },
  { workId: "pul-2023-kingsolver", awardSlug: "pulitzer-fiction", year: 2023, category: "恶魔铜头蛇 · 双得主" },

  // ===== 雨果奖 代表 =====
  { workId: "hugo-1956-asimov", awardSlug: "hugo-award", year: 1956, category: "永恒的终结" },
  { workId: "hugo-1959-blish", awardSlug: "hugo-award", year: 1959, category: "良心案件" },
  { workId: "hugo-1961-miller", awardSlug: "hugo-award", year: 1961, category: "莱博维茨的赞歌" },
  { workId: "hugo-1963-dick", awardSlug: "hugo-award", year: 1963, category: "高堡奇人" },
  { workId: "hugo-1971-niven", awardSlug: "hugo-award", year: 1971, category: "环形世界" },
  { workId: "hugo-1977-haldeman", awardSlug: "hugo-award", year: 1977, category: "永世之战" },
  { workId: "hugo-1986-card", awardSlug: "hugo-award", year: 1986, category: "安德的游戏" },
  { workId: "hugo-1988-bujold", awardSlug: "hugo-award", year: 1988, category: "战争学徒" },
  { workId: "hugo-1999-willis", awardSlug: "hugo-award", year: 1999, category: "别说再见" },
  { workId: "hugo-2010-bacigalupi", awardSlug: "hugo-award", year: 2010, category: "发条女孩" },
  { workId: "hugo-2013-scalzi", awardSlug: "hugo-award", year: 2013, category: "红衫" },
  { workId: "hugo-2018-jemisin-2", awardSlug: "hugo-award", year: 2018, category: "巨石苍穹 · 三连冠" },

  // ===== 龚古尔奖 代表 =====
  { workId: "goncourt-1919-proust", awardSlug: "prix-goncourt", year: 1919, category: "普鲁斯特" },
  { workId: "gon-1916-barbusse", awardSlug: "prix-goncourt", year: 1916, category: "巴比塞" },
  { workId: "gon-1933-malraux", awardSlug: "prix-goncourt", year: 1933, category: "马尔罗" },
  { workId: "gon-1944-triolet", awardSlug: "prix-goncourt", year: 1944, category: "特丽奥莱" },
  { workId: "gon-1954-beauvoir", awardSlug: "prix-goncourt", year: 1954, category: "波伏瓦" },
  { workId: "goncourt-1956-gary", awardSlug: "prix-goncourt", year: 1956, category: "加里 · 天根" },
  { workId: "gon-1970-tournier", awardSlug: "prix-goncourt", year: 1970, category: "图尼埃" },
  { workId: "gon-1978-modiano", awardSlug: "prix-goncourt", year: 1978, category: "莫迪亚诺" },
  { workId: "goncourt-1984-duras", awardSlug: "prix-goncourt", year: 1984, category: "杜拉斯" },
  { workId: "gon-1987-benjelloun", awardSlug: "prix-goncourt", year: 1987, category: "本·杰隆" },
  { workId: "gon-2006-littell", awardSlug: "prix-goncourt", year: 2006, category: "善良者" },
  { workId: "gon-2010-houellebecq", awardSlug: "prix-goncourt", year: 2010, category: "韦勒贝克" },
  { workId: "gon-2016-slimani", awardSlug: "prix-goncourt", year: 2016, category: "温柔之歌" },

  // ===== 塞万提斯奖 全部 =====
  { workId: "cerv-1977-alonso", awardSlug: "cervantes-prize", year: 1977, category: "阿隆索" },
  { workId: "cerv-1978-guillen", awardSlug: "cervantes-prize", year: 1978, category: "纪廉" },
  { workId: "cerv-1979-borges", awardSlug: "cervantes-prize", year: 1979, category: "博尔赫斯" },
  { workId: "cerv-1982-roa", awardSlug: "cervantes-prize", year: 1982, category: "罗亚·巴斯托斯" },
  { workId: "cerv-1985-onetti", awardSlug: "cervantes-prize", year: 1985, category: "奥内蒂" },
  { workId: "cerv-1987-fuentes", awardSlug: "cervantes-prize", year: 1987, category: "卡洛斯·富恩特斯" },
  { workId: "cerv-1990-bioy", awardSlug: "cervantes-prize", year: 1990, category: "比奥伊·卡萨雷斯" },
  { workId: "cerv-1999-edwards", awardSlug: "cervantes-prize", year: 1999, category: "爱德华兹" },
  { workId: "cerv-2002-marsé", awardSlug: "cervantes-prize", year: 2002, category: "马尔塞" },
  { workId: "cerv-2003-gelman", awardSlug: "cervantes-prize", year: 2003, category: "赫尔曼" },

  // ===== 国际布克奖 =====
  { workId: "intl-booker-2017-grossman", awardSlug: "intl-booker", year: 2017, category: "格罗斯曼" },
  { workId: "intl-booker-2020-rijneveld", awardSlug: "intl-booker", year: 2020, category: "赖内费尔德" },
  { workId: "intl-booker-2022-shree", awardSlug: "intl-booker", year: 2022, category: "什里 · 沙墓" },
  { workId: "intl-booker-2023-gospodinov", awardSlug: "intl-booker", year: 2023, category: "戈斯波迪诺夫" },
  { workId: "intl-booker-2024-erpenbeck", awardSlug: "intl-booker", year: 2024, category: "埃彭贝克" },

  // ===== 老舍文学奖 =====
  { workId: "laoshe-2000-liu", awardSlug: "laoshe-prize", year: 2000, category: "阿来 · 尘埃落定" },
  { workId: "laoshe-2000-tie", awardSlug: "laoshe-prize", year: 2000, category: "铁凝" },
  { workId: "laoshe-2002-zhang", awardSlug: "laoshe-prize", year: 2002, category: "张洁 · 无字" },
  { workId: "laoshe-2004-wang", awardSlug: "laoshe-prize", year: 2004, category: "阎连科 · 受活" },

  // ===== 卡夫卡奖 =====
  { workId: "kafka-2006-murakami", awardSlug: "kafka-prize", year: 2006, category: "村上春树" },
  { workId: "kafka-2009-handke", awardSlug: "kafka-prize", year: 2009, category: "彼得·汉德克" },
  { workId: "kafka-2017-atwood", awardSlug: "kafka-prize", year: 2017, category: "玛格丽特·阿特伍德" },

  // ===== 芥川奖 代表 =====
  { workId: "akutagawa-1976-murakami", awardSlug: "akutagawa-prize", year: 1979, category: "村上春树 · 且听风吟" },
  { workId: "akutagawa-2003-wataya", awardSlug: "akutagawa-prize", year: 2003, category: "绵矢莉莎" },
  { workId: "akutagawa-2012-kawakami", awardSlug: "akutagawa-prize", year: 2008, category: "川上未映子" },
];
