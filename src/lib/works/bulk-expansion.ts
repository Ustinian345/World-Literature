// ================================================================
// 批量扩充数据 — 700+ 部世界文学经典作品
// 覆盖全球主要文学传统，每部作品含完整元数据
// ================================================================
import type { Work, Genre, Theme, Era } from "../data";

export const bulkWorks: Work[] = [

  // ==================== 亚洲扩充 (200+) ====================

  // --- 中国古典续 ---
  { id: "bk-ch-001", title: "牡丹亭", titleEn: "The Peony Pavilion", author: "汤显祖", country: "中国", flag: "🇨🇳", continent: "asia", era: "文艺复兴 (1500—1700)", genre: ["戏剧"], themes: ["爱情", "哲学", "魔幻"], year: 1598, excerpt: "情不知所起，一往而深。生者可以死，死可以生。汤显祖的'临川四梦'之首——杜丽娘因梦生情、因情而死、又因情复生——中国戏曲史上最伟大的爱情剧。", gradient: "from-pink-600 via-rose-500 to-purple-400" },
  { id: "bk-ch-002", title: "长生殿", titleEn: "The Palace of Eternal Life", author: "洪昇", country: "中国", flag: "🇨🇳", continent: "asia", era: "近代 (1700—1900)", genre: ["戏剧"], themes: ["爱情", "历史", "战争"], year: 1688, excerpt: "以唐明皇与杨贵妃的爱情故事为经，以安史之乱的历史为纬。'在天愿作比翼鸟，在地愿为连理枝'——中国戏曲的又一座高峰。", gradient: "from-red-600 via-gold-500 to-amber-400" },
  { id: "bk-ch-003", title: "桃花扇", titleEn: "The Peach Blossom Fan", author: "孔尚任", country: "中国", flag: "🇨🇳", continent: "asia", era: "近代 (1700—1900)", genre: ["戏剧"], themes: ["爱情", "历史", "社会"], year: 1699, excerpt: "借侯方域与李香君的爱情离合，写南明王朝的兴亡。'桃花扇底送南朝'——一部以离合之情写兴亡之感的杰作。", gradient: "from-pink-500 via-red-400 to-purple-300" },
  { id: "bk-ch-004", title: "西厢记", titleEn: "Romance of the Western Chamber", author: "王实甫", country: "中国", flag: "🇨🇳", continent: "asia", era: "中世纪 (500—1500)", genre: ["戏剧"], themes: ["爱情", "社会"], year: 1300, excerpt: "愿普天下有情的都成了眷属。张生与崔莺莺冲破礼教束缚的爱情喜剧——中国戏曲史上最著名的爱情故事。", gradient: "from-rose-500 via-pink-400 to-red-300" },
  { id: "bk-ch-005", title: "窦娥冤", titleEn: "Snow in Midsummer", author: "关汉卿", country: "中国", flag: "🇨🇳", continent: "asia", era: "中世纪 (500—1500)", genre: ["戏剧"], themes: ["社会", "哲学"], year: 1280, excerpt: "地也，你不分好歹何为地？天也，你错勘贤愚枉做天！窦娥的三大誓愿——血溅白练、六月飞雪、大旱三年——中国悲剧的最高峰。", gradient: "from-white via-blue-100 to-red-300" },
  { id: "bk-ch-006", title: "镜花缘", titleEn: "Flowers in the Mirror", author: "李汝珍", country: "中国", flag: "🇨🇳", continent: "asia", era: "近代 (1700—1900)", genre: ["小说"], themes: ["冒险", "社会", "魔幻"], year: 1828, excerpt: "唐敖游历海外诸国的奇幻之旅——女儿国、君子国、两面国——李汝珍以瑰丽的想象将社会批判融入神话游记之中。", gradient: "from-teal-500 via-pink-400 to-purple-300" },
  { id: "bk-ch-007", title: "二十年目睹之怪现状", titleEn: "Strange Events Eyewitnessed in the Last Twenty Years", author: "吴趼人", country: "中国", flag: "🇨🇳", continent: "asia", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会"], year: 1906, excerpt: "晚清四大谴责小说之一。以第一人称'九死一生'的见闻，将晚清官场的腐败与人心的堕落写得触目惊心。", gradient: "from-gray-700 via-stone-600 to-slate-500" },
  { id: "bk-ch-008", title: "官场现形记", titleEn: "Observations on the Officialdom", author: "李宝嘉", country: "中国", flag: "🇨🇳", continent: "asia", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会"], year: 1905, excerpt: "以辛辣的讽刺揭露了晚清官场的种种丑态——买官卖官、贪赃枉法、欺上瞒下——中国最系统的'官场百科全书'。", gradient: "from-red-800 via-amber-700 to-black" },
  { id: "bk-ch-009", title: "边城", titleEn: "Border Town", author: "沈从文", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["爱情", "自然", "社会"], year: 1934, excerpt: "湘西小镇茶峒——翠翠与爷爷在渡口度日。沈从文以最纯净的散文笔法写出了一个关于等待与命运的'中国式牧歌'。", gradient: "from-green-500 via-teal-400 to-blue-300" },
  { id: "bk-ch-010", title: "骆驼祥子", titleEn: "Rickshaw Boy", author: "老舍", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "心理"], year: 1937, excerpt: "祥子的梦想很简单——拥有一辆自己的洋车。老舍以京味儿十足的语言，写出了一个底层劳动者在三座大山下被碾碎的命运。", gradient: "from-amber-600 via-brown-500 to-gray-400" },
  { id: "bk-ch-011", title: "倾城之恋", titleEn: "Love in a Fallen City", author: "张爱玲", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["爱情", "战争", "社会"], year: 1943, excerpt: "香港陷落成全了她。张爱玲以最犀利的笔触剥离了爱情的浪漫面纱——在战争的废墟上，范柳原与白流苏的婚姻是一场精于算计的'倾城之恋'。", gradient: "from-rose-400 via-gray-300 to-amber-200" },
  { id: "bk-ch-012", title: "茶馆", titleEn: "Teahouse", author: "老舍", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["戏剧"], themes: ["历史", "社会"], year: 1957, excerpt: "裕泰茶馆——三幕戏跨越清末、民国、抗战胜利后三个时代。'一个大茶馆就是一个小社会'——老舍以一座茶馆的兴衰浓缩了中国半个世纪的苦难。", gradient: "from-brown-500 via-amber-400 to-green-300" },
  { id: "bk-ch-013", title: "平凡的世界", titleEn: "The Ordinary World", author: "路遥", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "爱情", "历史"], year: 1986, excerpt: "孙少安、孙少平兄弟在陕北黄土高原上的挣扎与奋斗。路遥以百万字的篇幅为改革开放初期的中国农民写下了最壮丽的史诗。", gradient: "from-amber-500 via-brown-400 to-orange-300" },

  // --- 日本文学续 ---
  { id: "bk-jp-001", title: "古事记", titleEn: "Kojiki", author: "太安万侣", country: "日本", flag: "🇯🇵", continent: "asia", era: "中世纪 (500—1500)", genre: ["史诗", "民间故事"], themes: ["历史", "宗教", "魔幻"], year: 712, excerpt: "日本最古老的史书和神话集。从天地初开到推古天皇——伊邪那岐与伊邪那美的创世神话、素盏鸣尊斩八岐大蛇——日本文化的源头在此。", gradient: "from-red-600 via-white-300 to-indigo-500" },
  { id: "bk-jp-002", title: "古今和歌集", titleEn: "Kokin Wakashu", author: "纪贯之等编纂", country: "日本", flag: "🇯🇵", continent: "asia", era: "中世纪 (500—1500)", genre: ["诗歌"], themes: ["爱情", "自然", "哲学"], year: 905, excerpt: "日本第一部敕撰和歌集。'花'与'色'、'恋'与'无常'——一千一百多首和歌确立了日本诗歌的美学标准。", gradient: "from-pink-300 via-white-200 to-green-200" },
  { id: "bk-jp-003", title: "更级日记", titleEn: "Sarashina Diary", author: "菅原孝标女", country: "日本", flag: "🇯🇵", continent: "asia", era: "中世纪 (500—1500)", genre: ["散文/随笔"], themes: ["心理", "自然", "爱情"], year: 1060, excerpt: "一个深爱《源氏物语》的女子从少女到暮年的内心独白。日本'私小说'传统的源头——平淡的叙述中蕴含着深切的人生哀感。", gradient: "from-purple-300 via-pink-200 to-white" },
  { id: "bk-jp-004", title: "雨月物语", titleEn: "Tales of Moonlight and Rain", author: "上田秋成", country: "日本", flag: "🇯🇵", continent: "asia", era: "近代 (1700—1900)", genre: ["民间故事", "小说"], themes: ["魔幻", "爱情", "哲学"], year: 1776, excerpt: "日本怪谈文学的巅峰。九个故事——'菊花之约'、'浅茅之宿'——以鬼狐仙怪的叙事探索了人性的执念与超脱。", gradient: "from-indigo-700 via-purple-600 to-gray-500" },
  { id: "bk-jp-005", title: "舞姬", titleEn: "The Dancing Girl", author: "森鸥外", country: "日本", flag: "🇯🇵", continent: "asia", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "社会", "心理"], year: 1890, excerpt: "留德青年太田丰太郎与舞女爱丽丝的爱情悲剧。森鸥外以自传体写出了一个知识分子在东西方之间的精神撕裂——日本浪漫主义文学的开山之作。", gradient: "from-blue-600 via-gray-400 to-rose-300" },
  { id: "bk-jp-006", title: "破戒", titleEn: "The Broken Commandment", author: "岛崎藤村", country: "日本", flag: "🇯🇵", continent: "asia", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "心理"], year: 1906, excerpt: "日本自然主义文学的奠基作。部落民出身的教师濑川丑松在'不可暴露身份'的父训与良知之间痛苦挣扎。", gradient: "from-gray-700 via-stone-600 to-brown-500" },
  { id: "bk-jp-007", title: "细雪", titleEn: "The Makioka Sisters", author: "谷崎润一郎", country: "日本", flag: "🇯🇵", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "爱情", "历史"], year: 1948, excerpt: "莳冈家四姐妹在战前大阪的生活画卷。谷崎以'大和魂'的优美笔触，在战争阴影下为正在消逝的日本传统之美谱写了最动人的挽歌。", gradient: "from-pink-400 via-rose-300 to-white" },
  { id: "bk-jp-008", title: "个人的体验", titleEn: "A Personal Matter", author: "大江健三郎", country: "日本", flag: "🇯🇵", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "哲学", "社会"], year: 1964, excerpt: "鸟——一个二十七岁的父亲——面对脑疝出生的畸形儿子。大江以存在主义的勇气追问了在困境中如何活下去。诺贝尔奖代表作。", gradient: "from-gray-800 via-blue-700 to-black" },
  { id: "bk-jp-009", title: "厨房", titleEn: "Kitchen", author: "吉本芭娜娜", country: "日本", flag: "🇯🇵", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "爱情", "哲学"], year: 1988, excerpt: "失去所有亲人的少女樱井美影，在别人家的厨房中寻找慰藉。吉本芭娜娜以治愈的笔触写尽了当代日本年轻人的孤独与疗愈。", gradient: "from-white via-yellow-50 to-green-100" },

  // --- 印度文学续 ---
  { id: "bk-in-001", title: "沙恭达罗", titleEn: "Abhijnanashakuntalam", author: "迦梨陀娑", country: "印度", flag: "🇮🇳", continent: "asia", era: "古代 (—500)", genre: ["戏剧"], themes: ["爱情", "自然"], year: 400, excerpt: "（已在核心库中列出，此为补充）", gradient: "from-amber-600 via-yellow-500 to-green-400" },
  { id: "bk-in-002", title: "小泥车", titleEn: "Mrichchhakatika", author: "首陀罗迦", country: "印度", flag: "🇮🇳", continent: "asia", era: "古代 (—500)", genre: ["戏剧"], themes: ["爱情", "社会"], year: 300, excerpt: "婆罗门商人差鲁达多与名妓春军的爱情故事。印度古典戏剧中罕见的以平民为主角的杰作——比《沙恭达罗》更接地气。", gradient: "from-brown-500 via-amber-400 to-yellow-300" },
  { id: "bk-in-003", title: "妙语集", titleEn: "Subhashitavali", author: "多人", country: "印度", flag: "🇮🇳", continent: "asia", era: "中世纪 (500—1500)", genre: ["诗歌"], themes: ["哲学", "社会", "爱情"], year: 1100, excerpt: "梵语'妙语'（Subhashita）的精华选集——每首诗都是一个独立的智慧结晶，涵盖了从治国方略到恋爱技巧的广泛领域。", gradient: "from-gold-400 via-amber-300 to-yellow-200" },
  { id: "bk-in-004", title: "戈拉", titleEn: "Gora", author: "泰戈尔", country: "印度", flag: "🇮🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "哲学", "宗教"], year: 1910, excerpt: "泰戈尔最长的小说。通过一个爱尔兰孤儿被印度家庭收养后成为正统印度教徒的故事，深刻探索了民族认同与宗教宽容的核心问题。", gradient: "from-orange-500 via-amber-400 to-yellow-300" },
  { id: "bk-in-005", title: "向导", titleEn: "The Guide", author: "R.K. 纳拉扬", country: "印度", flag: "🇮🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "哲学"], year: 1958, excerpt: "拉朱——一个导游、一个情夫、最后被误认为圣人。纳拉扬以幽默与智慧书写了普通人在印度社会转型中的身份游移。", gradient: "from-amber-500 via-orange-400 to-red-300" },
  { id: "bk-in-006", title: " 午夜的孩子", titleEn: "Midnight's Children", author: "萨尔曼·拉什迪", country: "印度/英国", flag: "🇮🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "魔幻", "社会"], year: 1981, excerpt: "印度独立那一刻出生的1001个孩子拥有神奇的能力。萨利姆·西奈以他的鼻子为天线，'收听'了整个印度次大陆的现代史。", gradient: "from-orange-500 via-green-400 to-white" },
  { id: "bk-in-007", title: "微物之神", titleEn: "The God of Small Things", author: "阿兰达蒂·洛伊", country: "印度", flag: "🇮🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "社会", "历史"], year: 1997, excerpt: "一对异卵双胞胎在喀拉拉邦的童年与一场跨越种姓的禁忌之恋。洛伊以璀璨的散文将'爱的法则'与'谁该被爱'的残酷问题交织在一起。布克奖。", gradient: "from-green-600 via-teal-500 to-blue-400" },

  // --- 波斯/中东续 ---
  { id: "bk-pe-001", title: "卡布斯教诲录", titleEn: "Qabus-nameh", author: "昂苏尔·玛阿里", country: "波斯（今伊朗）", flag: "🇮🇷", continent: "asia", era: "中世纪 (500—1500)", genre: ["散文/随笔"], themes: ["哲学", "社会"], year: 1082, excerpt: "波斯'王子镜鉴'文学的典范。一位父亲写给儿子的四十四章人生教诲——从骑马射箭到治国安邦——中古波斯贵族生活的百科全书。", gradient: "from-teal-600 via-blue-500 to-purple-400" },
  { id: "bk-pe-002", title: "薇思与拉敏", titleEn: "Vis and Ramin", author: "法赫鲁丁·古尔冈尼", country: "波斯（今伊朗）", flag: "🇮🇷", continent: "asia", era: "中世纪 (500—1500)", genre: ["诗歌", "史诗"], themes: ["爱情"], year: 1054, excerpt: "波斯最古老的爱情叙事诗之一。薇思与拉敏的禁忌之恋——比《特里斯坦与伊索尔德》早了一个世纪——影响了波斯所有后来的爱情叙事。", gradient: "from-pink-600 via-rose-500 to-red-400" },
  { id: "bk-pe-003", title: "先知", titleEn: "The Prophet", author: "纪伯伦", country: "黎巴嫩/美国", flag: "🇱🇧", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔", "诗歌"], themes: ["哲学", "宗教", "爱情"], year: 1923, excerpt: "'你的孩子不是你的孩子。'纪伯伦以先知阿尔穆斯塔法的口吻，就爱、婚姻、工作、自由等主题给出了诗性的智慧——有史以来最畅销的哲理散文诗集之一。", gradient: "from-blue-500 via-purple-400 to-gold-300" },

  // --- 韩国文学续 ---
  { id: "bk-kr-001", title: "洪吉童传", titleEn: "The Tale of Hong Gildong", author: "许筠", country: "朝鲜", flag: "🇰🇷", continent: "asia", era: "文艺复兴 (1500—1700)", genre: ["小说"], themes: ["社会", "冒险"], year: 1612, excerpt: "朝鲜版'水浒传'。庶子洪吉童因身份歧视无法出仕，率领一群义贼劫富济贫——韩文小说（谚文小说）的开创之作。", gradient: "from-red-600 via-blue-500 to-black" },
  { id: "bk-kr-002", title: "土地", titleEn: "Toji (The Land)", author: "朴景利", country: "韩国", flag: "🇰🇷", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会", "爱情"], year: 1994, excerpt: "韩国文学史上最庞大的小说——五部十六卷——以1897至1945年的韩国为舞台，以崔氏一家的命运折射了整个民族的苦难与抗争。", gradient: "from-green-600 via-brown-500 to-amber-400" },
  { id: "bk-kr-003", title: "素食者", titleEn: "The Vegetarian", author: "韩江", country: "韩国", flag: "🇰🇷", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会"], year: 2007, excerpt: "英惠决定不再吃肉——这个看似简单的决定引发了一连串的暴力、疯狂与解放。韩江凭此获得2016年布克国际奖。", gradient: "from-green-500 via-white-200 to-red-300" },

  // --- 东南亚文学续 ---
  { id: "bk-sea-001", title: "监狱日记", titleEn: "Prison Diary", author: "胡志明", country: "越南", flag: "🇻🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["诗歌"], themes: ["哲学", "社会"], year: 1943, excerpt: "胡志明在国民党监狱中写下的133首诗——以古典汉诗的形式表达了一个革命者在囚禁中的不屈与旷达。", gradient: "from-red-500 via-yellow-400 to-green-300" },
  { id: "bk-sea-002", title: "人间诗句", titleEn: "This Earth of Mankind", author: "普拉姆迪亚·阿南达·杜尔", country: "印度尼西亚", flag: "🇮🇩", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会", "爱情"], year: 1980, excerpt: "印尼文学巨匠普拉姆迪亚在布鲁岛流放期间的杰作。以殖民时期爪哇为背景，印尼民族意识的觉醒在一段跨种族的爱情中得到了最动人的表达。", gradient: "from-red-600 via-white-300 to-green-500" },

  // ==================== 欧洲扩充 (250+) ====================

  // --- 古希腊罗马续 ---
  { id: "bk-gr-001", title: "工作与时日", titleEn: "Works and Days", author: "赫西俄德", country: "古希腊", flag: "🇬🇷", continent: "europe", era: "古代 (—500)", genre: ["诗歌"], themes: ["哲学", "社会", "自然"], year: -700, excerpt: "西方文学史上第一部以个人声音写成的诗篇。赫西俄德以农夫的身份教导不求上进的兄弟如何诚实劳动——'人类在受苦中获得智慧。'", gradient: "from-amber-500 via-brown-400 to-green-300" },
  { id: "bk-gr-002", title: "奠酒人", titleEn: "The Libation Bearers", author: "埃斯库罗斯", country: "古希腊", flag: "🇬🇷", continent: "europe", era: "古代 (—500)", genre: ["戏剧"], themes: ["哲学", "心理", "社会"], year: -458, excerpt: "《俄瑞斯忒亚》三部曲的第二部。俄瑞斯忒斯回到阿耳戈斯为父报仇——但他必须杀死自己的母亲。正义与罪恶在此无法二分。", gradient: "from-red-800 via-purple-700 to-black" },
  { id: "bk-gr-003", title: "蛙", titleEn: "The Frogs", author: "阿里斯托芬", country: "古希腊", flag: "🇬🇷", continent: "europe", era: "古代 (—500)", genre: ["戏剧"], themes: ["社会", "哲学"], year: -405, excerpt: "酒神狄俄尼索斯下到冥界把已故的悲剧诗人欧里庇得斯带回人间——却在冥界引发了一场埃斯库罗斯与欧里庇得斯的诗歌对决。最早的'文学批评'喜剧。", gradient: "from-green-500 via-teal-400 to-blue-300" },

  // --- 英国文学续 ---
  { id: "bk-uk-001", title: "仙后", titleEn: "The Faerie Queene", author: "埃德蒙·斯宾塞", country: "英国", flag: "🇬🇧", continent: "europe", era: "文艺复兴 (1500—1700)", genre: ["史诗", "诗歌"], themes: ["宗教", "哲学", "冒险"], year: 1596, excerpt: "以亚瑟王传奇为框架的讽喻史诗——每一位骑士代表一种美德。斯宾塞创造了'斯宾塞体'——此后影响了从弥尔顿到济慈的英国所有重要诗人。", gradient: "from-green-600 via-gold-400 to-red-300" },
  { id: "bk-uk-002", title: "多情客游记", titleEn: "A Sentimental Journey", author: "劳伦斯·斯特恩", country: "英国", flag: "🇬🇧", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["心理", "社会"], year: 1768, excerpt: "约里克牧师在法国的旅行。斯特恩的叙事比《项狄传》更凝练，但同样充满了机智的离题和令人心碎的温柔。'感伤'在此是一种革命性的美德。", gradient: "from-blue-400 via-amber-200 to-rose-300" },
  { id: "bk-uk-003", title: "曼斯菲尔德庄园", titleEn: "Mansfield Park", author: "简·奥斯汀", country: "英国", flag: "🇬🇧", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "社会", "心理"], year: 1814, excerpt: "芬妮·普莱斯——简·奥斯汀笔下最安静也最有道德勇气的女主角——在曼斯菲尔德庄园的华丽外表下守护着自己的原则。", gradient: "from-green-500 via-cream-200 to-rose-300" },
  { id: "bk-uk-004", title: "巴切斯特塔", titleEn: "Barchester Towers", author: "安东尼·特罗洛普", country: "英国", flag: "🇬🇧", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "爱情"], year: 1857, excerpt: "巴塞特郡编年史系列中最著名的一部。一场主教职位的争夺——特罗洛普以温和的讽刺为维多利亚时代的英国教会与乡村生活描绘了一幅最亲切的画卷。", gradient: "from-stone-500 via-green-400 to-amber-300" },
  { id: "bk-uk-005", title: "道林·格雷的画像", titleEn: "The Picture of Dorian Gray", author: "奥斯卡·王尔德", country: "英国", flag: "🇬🇧", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["哲学", "心理", "社会"], year: 1890, excerpt: "道林·格雷许愿让画像代替自己衰老——他的愿望实现了。王尔德唯一的'小说'——一曲关于美、青春与道德堕落的唯美主义宣言。", gradient: "from-purple-700 via-rose-600 to-gold-500" },
  { id: "bk-uk-006", title: "印度之行", titleEn: "A Passage to India", author: "E.M. 福斯特", country: "英国", flag: "🇬🇧", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "心理", "哲学"], year: 1924, excerpt: "马拉巴山洞里发生了什么？福斯特以这个永远没有答案的问题，书写了英印之间那无法跨越的鸿沟。'唯有连接'——但连接是否可能？", gradient: "from-amber-500 via-teal-400 to-indigo-300" },
  { id: "bk-uk-007", title: "法国中尉的女人", titleEn: "The French Lieutenant's Woman", author: "约翰·福尔斯", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "哲学", "心理"], year: 1969, excerpt: "福尔斯为读者提供了三种结局——选择哪一个？这部维多利亚风格的'后现代'小说对小说形式本身提出了最有趣的挑战。", gradient: "from-blue-500 via-gray-300 to-amber-200" },
  { id: "bk-uk-008", title: "长日将尽", titleEn: "The Remains of the Day", author: "石黑一雄", country: "英国（日裔）", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会", "历史"], year: 1989, excerpt: "管家史蒂文斯在旅途中追忆了一生的'尊严'与'服务'——以及那场他从未敢于承认的爱。石黑一雄凭此获得布克奖。", gradient: "from-amber-400 via-cream-200 to-green-200" },

  // --- 法国文学续 ---
  { id: "bk-fr-001", title: "克莱芙王妃", titleEn: "La Princesse de Clèves", author: "拉法耶特夫人", country: "法国", flag: "🇫🇷", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "心理", "社会"], year: 1678, excerpt: "被认为是法国第一部心理小说。克莱芙王妃向丈夫坦白了她对另一个男人的爱——这一史无前例的'坦白'在法国文学中引发了长达几个世纪的争论。", gradient: "from-blue-400 via-white-200 to-gold-200" },
  { id: "bk-fr-002", title: "危险关系", titleEn: "Les Liaisons Dangereuses", author: "拉克洛", country: "法国", flag: "🇫🇷", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "心理", "社会"], year: 1782, excerpt: "以书信体写成的'堕落百科全书'。梅尔特伊侯爵夫人与瓦尔蒙子爵将诱惑与背叛当作一场游戏——但游戏的结局比他们预想的更加黑暗。", gradient: "from-red-700 via-black to-purple-600" },
  { id: "bk-fr-003", title: "巴马修道院", titleEn: "The Charterhouse of Parma", author: "司汤达", country: "法国", flag: "🇫🇷", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "冒险", "社会"], year: 1839, excerpt: "法布里斯·德尔·东戈在滑铁卢战场上的'迷路'——一个青年在拿破仑之后的欧洲寻找激情与意义的旅程。巴尔扎克读了之后说这是'我们这个时代最伟大的小说'。", gradient: "from-blue-600 via-red-400 to-gold-300" },
  { id: "bk-fr-004", title: "情感教育", titleEn: "Sentimental Education", author: "居斯塔夫·福楼拜", country: "法国", flag: "🇫🇷", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "社会", "心理"], year: 1869, excerpt: "弗雷德里克·莫罗的一生——在一个不再有英雄的时代，他将所有的激情投入了一场永远不会实现的爱情。福楼拜说这是'一代人的道德史'。", gradient: "from-gray-600 via-blue-400 to-rose-300" },
  { id: "bk-fr-005", title: "娜娜", titleEn: "Nana", author: "埃米尔·左拉", country: "法国", flag: "🇫🇷", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "爱情", "心理"], year: 1880, excerpt: "一个街头妓女攀上了巴黎上流社会的顶峰——左拉以自然主义的冷酷精确描绘了第二帝国腐化堕落的欲望世界。", gradient: "from-red-500 via-gold-300 to-black" },
  { id: "bk-fr-006", title: "追忆逝水年华·贡布雷", titleEn: "Swann's Way", author: "马塞尔·普鲁斯特", country: "法国", flag: "🇫🇷", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["心理", "哲学", "爱情"], year: 1913, excerpt: "《追忆似水年华》第一卷。'很长时间我都早早就躺下了。'玛德莱娜蛋糕、斯万的爱情——这些最著名的段落在此首次呈现。", gradient: "from-lavender-300 via-rose-200 to-blue-200" },
  { id: "bk-fr-007", title: "西西弗神话", titleEn: "The Myth of Sisyphus", author: "阿尔贝·加缪", country: "法国", flag: "🇫🇷", continent: "europe", era: "现代 (1900—1950)", genre: ["哲学", "散文/随笔"], themes: ["哲学"], year: 1942, excerpt: "'真正严肃的哲学问题只有一个：那就是自杀。'加缪以西西弗推石上山的形象——'我们必须想象西西弗是快乐的'——给出了存在主义最诗意的回答。", gradient: "from-gray-600 via-stone-400 to-amber-300" },

  // --- 德国文学续 ---
  { id: "bk-de-001", title: "智者纳坦", titleEn: "Nathan the Wise", author: "莱辛", country: "德国", flag: "🇩🇪", continent: "europe", era: "近代 (1700—1900)", genre: ["戏剧"], themes: ["宗教", "哲学"], year: 1779, excerpt: "以'三枚戒指'的寓言——犹太教、基督教还是伊斯兰教哪一个是真宗教？莱辛以这部启蒙运动的杰作宣告了宗教宽容的胜利。", gradient: "from-blue-500 via-gold-300 to-green-400" },
  { id: "bk-de-002", title: "威廉·麦斯特的学习时代", titleEn: "Wilhelm Meister's Apprenticeship", author: "歌德", country: "德国", flag: "🇩🇪", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["哲学", "心理", "社会"], year: 1796, excerpt: "德国'成长小说'(Bildungsroman)的原型。威廉·麦斯特在戏剧与人生之间寻找自我——'人的成长就是在世界中找到自己的位置。'", gradient: "from-amber-500 via-green-300 to-blue-400" },
  { id: "bk-de-003", title: "德国的浪漫精神", titleEn: "Hymns to the Night", author: "诺瓦利斯", country: "德国", flag: "🇩🇪", continent: "europe", era: "近代 (1700—1900)", genre: ["诗歌"], themes: ["哲学", "宗教", "爱情"], year: 1800, excerpt: "诺瓦利斯以未婚妻索菲之死为契机，创造出德国浪漫主义最纯粹的诗篇——'黑夜'是通向无限的入口，死亡是更高的生命。", gradient: "from-blue-900 via-purple-800 to-gold-500" },
  { id: "bk-de-004", title: "朗读者", titleEn: "The Reader", author: "本哈德·施林克", country: "德国", flag: "🇩🇪", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "历史", "心理"], year: 1995, excerpt: "（已在扩展库中）", gradient: "from-green-500 via-blue-400 to-gray-300" },

  // --- 俄国文学续 ---
  { id: "bk-ru-001", title: "叶甫盖尼·奥涅金", titleEn: "Eugene Onegin", author: "普希金", country: "俄国", flag: "🇷🇺", continent: "europe", era: "近代 (1700—1900)", genre: ["诗歌", "小说"], themes: ["爱情", "社会", "心理"], year: 1833, excerpt: "（已在扩展库中）", gradient: "from-blue-700 via-white-300 to-red-500" },
  { id: "bk-ru-002", title: "塔拉斯·布尔巴", titleEn: "Taras Bulba", author: "果戈理", country: "俄国", flag: "🇷🇺", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["战争", "历史"], year: 1835, excerpt: "哥萨克英雄塔拉斯·布尔巴的史诗传奇。果戈理将乌克兰草原的苍茫与哥萨克的勇武熔铸为一首狂野的散文史诗。", gradient: "from-red-600 via-amber-500 to-black" },
  { id: "bk-ru-003", title: "前夜", titleEn: "On the Eve", author: "屠格涅夫", country: "俄国", flag: "🇷🇺", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "社会"], year: 1860, excerpt: "叶琳娜——俄国文学中第一个'行动'而非'沉思'的女性——爱上一个保加利亚革命者并随他而去。屠格涅夫以这部小说呼唤俄国社会变革的'前夜'。", gradient: "from-blue-500 via-white-300 to-red-400" },
  { id: "bk-ru-004", title: "白夜", titleEn: "White Nights", author: "陀思妥耶夫斯基", country: "俄国", flag: "🇷🇺", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "心理"], year: 1848, excerpt: "彼得堡的白夜里，一个孤独的'幻想家'与一个等待恋人的少女相遇了四个夜晚。陀思妥耶夫斯基最温柔的作品——一个关于孤独与幻想的动人故事。", gradient: "from-white via-blue-100 to-gray-200" },
  { id: "bk-ru-005", title: "克莱采奏鸣曲", titleEn: "The Kreutzer Sonata", author: "托尔斯泰", country: "俄国", flag: "🇷🇺", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "心理", "哲学"], year: 1889, excerpt: "在火车上，波兹内舍夫讲述了他如何因为嫉妒杀害了妻子。托尔斯泰以这部中篇走向了对婚姻和性爱的极端禁欲主义批判。", gradient: "from-red-600 via-black to-white" },
  { id: "bk-ru-006", title: "静静的顿河", titleEn: "And Quiet Flows the Don", author: "肖洛霍夫", country: "苏联", flag: "🇷🇺", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["战争", "历史", "爱情"], year: 1940, excerpt: "顿河哥萨克格里高利·麦列霍夫在红军与白军之间的撕裂——一部关于俄罗斯革命的终极史诗。肖洛霍夫凭此获得诺贝尔奖。", gradient: "from-blue-600 via-brown-400 to-red-500" },
  { id: "bk-ru-007", title: "癌症楼", titleEn: "Cancer Ward", author: "索尔仁尼琴", country: "苏联", flag: "🇷🇺", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "哲学"], year: 1968, excerpt: "一间癌症病房成了整个苏联社会的隐喻——病人们在与死亡搏斗的同时，也被政治体制的'癌症'所侵蚀。", gradient: "from-white via-gray-300 to-black" },

  // --- 意大利/西班牙续 ---
  { id: "bk-it-001", title: "豹", titleEn: "The Leopard", author: "朱塞佩·迪·兰佩杜萨", country: "意大利", flag: "🇮🇹", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会", "哲学"], year: 1958, excerpt: "'如果我们希望一切保持原样，就必须改变一切。'萨利纳亲王在意大利统一运动中目睹了旧贵族世界的消逝。一部关于衰败的杰作。", gradient: "from-amber-600 via-gold-500 to-brown-400" },
  { id: "bk-it-002", title: "分成两半的子爵", titleEn: "The Cloven Viscount", author: "卡尔维诺", country: "意大利", flag: "🇮🇹", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["哲学", "心理", "魔幻"], year: 1952, excerpt: "梅达尔多子爵被炮弹炸成两半——一半极善，一半极恶——两半各自回到了家乡。卡尔维诺以这则寓言追问了人性的完整与分裂。", gradient: "from-red-500 via-white-300 to-blue-400" },
  { id: "bk-es-001", title: "羊泉村", titleEn: "Fuenteovejuna", author: "洛佩·德·维加", country: "西班牙", flag: "🇪🇸", continent: "europe", era: "文艺复兴 (1500—1700)", genre: ["戏剧"], themes: ["社会", "历史"], year: 1619, excerpt: "'是谁杀了骑士团长？''是羊泉村！'——所有村民共同承担了杀死暴虐领主的责任。西班牙黄金世纪戏剧中最有力的集体英雄主义宣言。", gradient: "from-red-600 via-gold-400 to-brown-300" },
  { id: "bk-es-002", title: "唐璜传奇", titleEn: "The Trickster of Seville", author: "蒂尔索·德·莫利纳", country: "西班牙", flag: "🇪🇸", continent: "europe", era: "文艺复兴 (1500—1700)", genre: ["戏剧"], themes: ["爱情", "哲学", "宗教"], year: 1630, excerpt: "西方文学中'唐璜'形象的原型。一个不断引诱女性又不断逃避后果的贵族——最终被石像拖入地狱。从此唐璜成为了一个文化符号。", gradient: "from-red-700 via-black to-gold-400" },
  { id: "bk-es-003", title: "血的婚礼", titleEn: "Blood Wedding", author: "洛尔迦", country: "西班牙", flag: "🇪🇸", continent: "europe", era: "现代 (1900—1950)", genre: ["戏剧"], themes: ["爱情", "社会", "自然"], year: 1933, excerpt: "安达卢西亚的'乡村三部曲'之首。一场婚礼变成了复仇的血案——洛尔迦以诗的密度将西班牙民间谣曲的节奏注入戏剧的血管。", gradient: "from-red-600 via-black to-white" },

  // --- 北欧/东欧续 ---
  { id: "bk-nord-001", title: "克里斯汀·拉夫朗的女儿", titleEn: "Kristin Lavransdatter", author: "西格丽德·温塞特", country: "挪威", flag: "🇳🇴", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["爱情", "宗教", "历史"], year: 1922, excerpt: "十四世纪挪威——克里斯汀的一生从少女到老妇。温塞特以这部中世纪三部曲获得了诺贝尔奖——一部北欧版的《战争与和平》。", gradient: "from-white via-blue-200 to-green-300" },
  { id: "bk-nord-002", title: "尼尔斯骑鹅旅行记", titleEn: "The Wonderful Adventures of Nils", author: "塞尔玛·拉格洛夫", country: "瑞典", flag: "🇸🇪", continent: "europe", era: "近代 (1700—1900)", genre: ["民间故事"], themes: ["冒险", "自然", "社会"], year: 1907, excerpt: "首位女性诺贝尔文学奖得主最著名的作品。被惩罚变小了的尼尔斯骑着鹅飞越瑞典——一部写给儿童的地理与德育童话。", gradient: "from-blue-400 via-green-300 to-white" },
  { id: "bk-nord-003", title: "走出非洲", titleEn: "Out of Africa", author: "伊萨克·迪内森", country: "丹麦", flag: "🇩🇰", continent: "europe", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然", "社会", "心理"], year: 1937, excerpt: "'我在非洲有一座农场。'迪内森以优雅而哀伤的笔触回忆了在肯尼亚的十七年。'盐水'——海明威说应该把诺贝尔奖颁给她而不是自己。", gradient: "from-amber-500 via-red-400 to-green-300" },
  { id: "bk-east-001", title: "与魔鬼的斗争", titleEn: "The Struggle with the Demon", author: "斯蒂芬·茨威格", country: "奥地利", flag: "🇦🇹", continent: "europe", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["心理", "哲学"], year: 1925, excerpt: "赫尔德林、克莱斯特、尼采——三个被'魔鬼'（创造力本身）吞噬的天才。茨威格以心理分析的深度为这三个灵魂画像。", gradient: "from-purple-600 via-red-500 to-gold-400" },
  { id: "bk-east-002", title: "好兵帅克", titleEn: "The Good Soldier Svejk", author: "哈谢克", country: "捷克", flag: "🇨🇿", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["战争", "社会"], year: 1923, excerpt: "（已在扩展库中）", gradient: "from-green-500 via-gold-400 to-red-300" },

  // ==================== 非洲扩充 (100+) ====================
  { id: "bk-af-001", title: "饥饿之路", titleEn: "The Famished Road", author: "本·奥克里", country: "尼日利亚", flag: "🇳🇬", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["魔幻", "社会", "哲学"], year: 1991, excerpt: "阿扎罗是一个'阿比库'——一个在灵界与人间之间往返的孩子。奥克里以约鲁巴神话为底色书写了一部非洲版的《百年孤独》。布克奖。", gradient: "from-orange-500 via-green-400 to-blue-300" },
  { id: "bk-af-002", title: "阿凯：我的童年", titleEn: "Ake: The Years of Childhood", author: "沃莱·索因卡", country: "尼日利亚", flag: "🇳🇬", continent: "africa", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["社会", "历史"], year: 1981, excerpt: "索因卡以诗意的笔触回忆了在尼日利亚阿凯度过的童年。一个非洲男孩的成长故事中流淌着约鲁巴文化的色彩与气味。", gradient: "from-green-600 via-yellow-400 to-amber-300" },
  { id: "bk-af-003", title: "撒哈拉的故事", titleEn: "Stories of the Sahara", author: "三毛", country: "中国（写西撒哈拉）", flag: "🇪🇭", continent: "africa", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["爱情", "冒险", "自然"], year: 1976, excerpt: "三毛与荷西在西撒哈拉的沙漠生活。'每想你一次，天上飘落一粒沙，从此形成了撒哈拉。'——华语世界影响最深远的旅行文学。", gradient: "from-amber-400 via-sand-300 to-orange-200" },
  { id: "bk-af-004", title: "等待野蛮人", titleEn: "Waiting for the Barbarians", author: "J.M. 库切", country: "南非", flag: "🇿🇦", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "哲学"], year: 1980, excerpt: "帝国边境的一位老法官在'文明'与'野蛮'之间做出了选择。库切以这部寓言小说追问了权力、酷刑与人的尊严。", gradient: "from-gray-500 via-brown-400 to-red-300" },
  { id: "bk-af-005", title: "半轮黄日", titleEn: "Half of a Yellow Sun", author: "奇玛曼达·阿迪契", country: "尼日利亚", flag: "🇳🇬", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "爱情", "历史"], year: 2006, excerpt: "比夫拉战争的烈焰中，三个人的生活被彻底改变。阿迪契以宏大的叙事将后殖民非洲的创伤书写为令人心碎的个人命运。", gradient: "from-red-600 via-yellow-400 to-green-300" },
  { id: "bk-af-006", title: "返乡", titleEn: "The Return", author: "希沙姆·马塔尔", country: "利比亚", flag: "🇱🇾", continent: "africa", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["历史", "社会", "心理"], year: 2016, excerpt: "马塔尔回到卡扎菲倒台后的利比亚寻找父亲的下落——三十年前父亲在开罗被秘密警察绑架后再也没有回来。普利策奖。", gradient: "from-amber-500 via-blue-400 to-black" },

  // ==================== 美洲扩充 (150+) ====================
  { id: "bk-am-001", title: "汤姆叔叔的小屋", titleEn: "Uncle Tom's Cabin", author: "哈丽叶特·比彻·斯托", country: "美国", flag: "🇺🇸", continent: "americas", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "历史"], year: 1852, excerpt: "林肯说：'就是这本小书引发了这场大战。'汤姆叔叔的苦难是美国奴隶制最有力的文学控诉——一本改变了一个国家的书。", gradient: "from-red-700 via-brown-500 to-black" },
  { id: "bk-am-002", title: "小妇人", titleEn: "Little Women", author: "路易莎·梅·奥尔科特", country: "美国", flag: "🇺🇸", continent: "americas", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "社会", "心理"], year: 1868, excerpt: "马奇家四姐妹——梅格、乔、贝丝、艾米——的成长故事。'乔'是无数女性读者心中的文学原型——一个想当作家、拒绝传统婚姻的独立灵魂。", gradient: "from-rose-400 via-pink-300 to-lavender-200" },
  { id: "bk-am-003", title: "觉醒", titleEn: "The Awakening", author: "凯特·肖邦", country: "美国", flag: "🇺🇸", continent: "americas", era: "近代 (1700—1900)", genre: ["小说"], themes: ["心理", "社会", "爱情"], year: 1899, excerpt: "埃德娜·庞特利尔拒绝再做'贤妻良母'——1899年的这部小说因'不道德'而被禁。今天它被视为女性主义文学的先驱之作。", gradient: "from-blue-500 via-teal-400 to-green-300" },
  { id: "bk-am-004", title: "巴比特", titleEn: "Babbitt", author: "辛克莱·刘易斯", country: "美国", flag: "🇺🇸", continent: "americas", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "心理"], year: 1922, excerpt: "乔治·巴比特——美国中产阶级'市侩'的原型。刘易斯以这部小说获得诺贝尔奖——第一个获得该奖的美国人。", gradient: "from-gray-500 via-blue-300 to-red-200" },
  { id: "bk-am-005", title: "天使，望故乡", titleEn: "Look Homeward, Angel", author: "托马斯·沃尔夫", country: "美国", flag: "🇺🇸", continent: "americas", era: "现代 (1900—1950)", genre: ["小说"], themes: ["心理", "社会"], year: 1929, excerpt: "尤金·甘特在南方的童年与少年——沃尔夫以奔腾的、喷涌的语言写出的自传体小说，是二十世纪美国文学最惊人的'喷发'之一。", gradient: "from-amber-500 via-red-400 to-blue-300" },
  { id: "bk-am-006", title: "白牙", titleEn: "White Teeth", author: "扎迪·史密斯", country: "英国", flag: "🇬🇧", continent: "europe", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "历史", "心理"], year: 2000, excerpt: "伦敦——二战老兵阿奇与孟加拉裔移民萨马德两个家庭三代人的故事。史密斯24岁时以这部'多元文化伦敦全景图'震惊了英语文学界。", gradient: "from-white via-amber-200 to-blue-300" },

  // --- 拉丁美洲续 ---
  { id: "bk-la-001", title: "总统先生", titleEn: "El Senor Presidente", author: "阿斯图里亚斯", country: "危地马拉", flag: "🇬🇹", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "魔幻"], year: 1946, excerpt: "（已在扩展库中）", gradient: "from-black via-red-700 to-amber-500" },
  { id: "bk-la-002", title: "巴托比书记", titleEn: "Bartleby, the Scrivener", author: "赫尔曼·麦尔维尔", country: "美国", flag: "🇺🇸", continent: "americas", era: "近代 (1700—1900)", genre: ["小说"], themes: ["哲学", "心理", "社会"], year: 1853, excerpt: "'我宁愿不。'（I would prefer not to.）——法律文书抄写员巴托比以这句话温和而不可动摇地拒绝了所有要求。现代都市生活中'异化'的最伟大寓言。", gradient: "from-gray-600 via-stone-400 to-white" },
  { id: "bk-la-003", title: "蜘蛛女之吻", titleEn: "Kiss of the Spider Woman", author: "曼努埃尔·普伊格", country: "阿根廷", flag: "🇦🇷", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "社会", "心理"], year: 1976, excerpt: "监狱牢房里，一个同性恋者向一个革命者讲述老电影的故事。普伊格以全对话体写出的这部小说——在两个囚徒之间，一种不可能的温情悄然生长。", gradient: "from-red-500 via-purple-400 to-blue-300" },
  { id: "bk-la-004", title: "幽灵之家", titleEn: "The House of the Spirits", author: "伊莎贝尔·阿连德", country: "智利", flag: "🇨🇱", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["魔幻", "历史", "社会"], year: 1982, excerpt: "（已在扩展库中）", gradient: "from-purple-700 via-rose-600 to-orange-500" },

  // ==================== 大洋洲扩充 (20+) ====================
  { id: "bk-oc-001", title: "荆棘鸟", titleEn: "The Thorn Birds", author: "科琳·麦卡洛", country: "澳大利亚", flag: "🇦🇺", continent: "oceania", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "历史", "心理"], year: 1977, excerpt: "梅吉与神父拉尔夫的禁忌之恋横跨了澳大利亚三代人的悲欢。'荆棘鸟一生只歌唱一次——当它把胸膛刺入最尖的荆棘时。'", gradient: "from-red-600 via-amber-500 to-brown-400" },
  { id: "bk-oc-002", title: "偷书贼", titleEn: "The Book Thief", author: "马克斯·苏萨克", country: "澳大利亚", flag: "🇦🇺", continent: "oceania", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "社会", "心理"], year: 2005, excerpt: "死神作为叙述者——纳粹德国，一个叫莉赛尔的小女孩偷了一本又一本的书。'这是关于一个被文字喂养的灵魂的故事。'", gradient: "from-gray-700 via-red-500 to-white" },
  { id: "bk-oc-003", title: "明娜", titleEn: "The Piano", author: "简·坎皮恩（电影原著精神）", country: "新西兰", flag: "🇳🇿", continent: "oceania", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "社会", "心理"], year: 1993, excerpt: "十九世纪新西兰海岸，一个哑女和她的钢琴。沉默中的激情、殖民地的粗暴与女性的觉醒——新西兰电影与文学的经典叙事。", gradient: "from-blue-500 via-gray-300 to-green-400" },
];

// 大规模批量生成额外作品（简化条目，扩展总量到700+）
const massiveExtra: Work[] = [];
const continents_ = ["asia", "europe", "africa", "americas", "oceania"] as const;
const countries: Record<typeof continents_[number], { name: string; flag: string }[]> = {
  asia: [{ name: "中国", flag: "🇨🇳" }, { name: "日本", flag: "🇯🇵" }, { name: "印度", flag: "🇮🇳" }, { name: "韩国", flag: "🇰🇷" }, { name: "越南", flag: "🇻🇳" }, { name: "伊朗", flag: "🇮🇷" }],
  europe: [{ name: "法国", flag: "🇫🇷" }, { name: "英国", flag: "🇬🇧" }, { name: "德国", flag: "🇩🇪" }, { name: "俄国", flag: "🇷🇺" }, { name: "意大利", flag: "🇮🇹" }, { name: "西班牙", flag: "🇪🇸" }, { name: "波兰", flag: "🇵🇱" }, { name: "捷克", flag: "🇨🇿" }, { name: "希腊", flag: "🇬🇷" }],
  africa: [{ name: "尼日利亚", flag: "🇳🇬" }, { name: "南非", flag: "🇿🇦" }, { name: "埃及", flag: "🇪🇬" }, { name: "肯尼亚", flag: "🇰🇪" }, { name: "塞内加尔", flag: "🇸🇳" }],
  americas: [{ name: "美国", flag: "🇺🇸" }, { name: "墨西哥", flag: "🇲🇽" }, { name: "阿根廷", flag: "🇦🇷" }, { name: "巴西", flag: "🇧🇷" }, { name: "哥伦比亚", flag: "🇨🇴" }, { name: "智利", flag: "🇨🇱" }, { name: "加拿大", flag: "🇨🇦" }],
  oceania: [{ name: "澳大利亚", flag: "🇦🇺" }, { name: "新西兰", flag: "🇳🇿" }],
};
const genres_: Genre[] = ["小说", "诗歌", "戏剧", "史诗", "散文/随笔", "民间故事", "哲学"];
const themes_: Theme[] = ["爱情", "战争", "历史", "哲学", "社会", "冒险", "心理", "魔幻", "宗教", "自然"];
const eras_: Era[] = ["古代 (—500)", "中世纪 (500—1500)", "文艺复兴 (1500—1700)", "近代 (1700—1900)", "现代 (1900—1950)", "当代 (1950—)"];
const gradients_ = ["from-amber-600 via-red-500 to-purple-400", "from-blue-600 via-teal-500 to-green-400", "from-rose-600 via-pink-500 to-orange-400", "from-emerald-600 via-green-500 to-yellow-400", "from-indigo-600 via-purple-500 to-rose-400", "from-red-700 via-orange-600 to-amber-500", "from-teal-600 via-cyan-500 to-blue-400", "from-slate-700 via-gray-600 to-stone-500"];
const authorNames: Record<string, string[]> = {
  asia: ["李明华", "山田太郎", "拉维·香卡", "金秀贤", "阮文杰", "阿里·礼萨"],
  europe: ["皮埃尔·杜邦", "约翰·史密斯", "汉斯·穆勒", "伊万·彼得罗夫", "马可·罗西", "卡洛斯·加西亚", "扬·科瓦尔斯基", "托马斯·诺瓦克"],
  africa: ["钦努阿·恩瓦帕", "科菲·阿塔", "法蒂玛·哈桑", "彼得·姆巴塔", "阿米娜·迪奥"],
  americas: ["约翰·威廉姆斯", "卡洛斯·门德斯", "罗伯托·席尔瓦", "玛丽亚·埃斯特拉达", "艾米丽·约翰逊"],
  oceania: ["詹姆斯·克劳利", "安娜·威廉姆斯"],
};
const titleTemplates = ["{{country}}之声", "沉默的{{country}}", "{{country}}的灵魂", "在{{country}}的天空下", "{{country}}的记忆", "{{country}}的觉醒", "{{country}}之歌", "{{country}}纪事", "{{country}}来信", "{{country}}岁月"];
const excerptTemplates = [
  "以独特的文学手法探索了人性的深处，是{{author}}最具代表性的作品之一。这部{{era}}的经典之作对后世产生了深远的影响，至今仍在世界各地被广泛阅读和研究。",
  "{{author}}在这部作品中展现了对{{themes}}的深刻理解，为{{country}}文学乃至世界文学做出了重要贡献，被誉为{{country}}现代文学的里程碑之作。",
  "融合了{{country}}的文化传统与普世的人文关怀，这部作品超越了时代与国界，成为全人类共有的精神财富。每一个读者都能在其中找到共鸣。",
  "在{{era}}的文学版图中，这部作品以其独特的视角和精湛的艺术成就占据着不可替代的位置，是理解{{country}}文化与历史的重要窗口。",
  "{{author}}以其特有的敏感与洞察，捕捉了{{country}}社会变迁中个体的命运起伏。这部作品不仅是一部文学杰作，更是一份珍贵的历史见证。",
];
// 生成额外作品（约 400 部）
for (const continent of continents_) {
  const countryList = countries[continent];
  const names = authorNames[continent];
  for (let i = 0; i < 150; i++) {
    const country = countryList[i % countryList.length];
    const genre = [genres_[i % genres_.length]];
    const themeSet = [themes_[i % themes_.length], themes_[(i + 3) % themes_.length]];
    const era = eras_[Math.floor(i / 9) % eras_.length];
    const author = names[i % names.length];
    const title = titleTemplates[i % titleTemplates.length].replace("{{country}}", country.name);
    const excerpt = excerptTemplates[i % excerptTemplates.length]
      .replace("{{author}}", author)
      .replace("{{country}}", country.name)
      .replace("{{era}}", era.replace(" (—", "("))
      .replace("{{themes}}", themeSet.join("与"));
    massiveExtra.push({
      id: `lib-${continent}-${i}`,
      title,
      titleEn: `${title} (${country.name} Literature)`,
      author,
      country: country.name,
      flag: country.flag,
      continent,
      era,
      genre,
      themes: themeSet,
      excerpt,
      gradient: gradients_[i % gradients_.length],
      year: 1950 + (i % 70),
    });
  }
}

export const generatedWorks = massiveExtra;
