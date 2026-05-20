// ================================================================
// 人教版教材文学作品数据 — 全部条目带 workId（详情页链接）
// ================================================================

export type TextbookLevel = "primary" | "middle" | "high";

export interface TextbookWork {
  workId?: string;
  title: string;
  author: string;
  level: TextbookLevel;
  grade: string;
  type: "课文" | "名著导读" | "整本书阅读" | "古诗词诵读";
  excerpt?: string;
  description?: string;
  gradient: string;
}

export interface TextbookLevelInfo {
  slug: TextbookLevel; name: string; description: string; grades: string;
  icon: string; gradient: string; stats: string;
}

export const textbookLevels: TextbookLevelInfo[] = [
  { slug: "primary", name: "小学", description: "1-6年级语文教材中的经典篇目——从古诗童谣到四大名著选段，在孩子们心中播下文学的种子。", grades: "1-6年级", icon: "🌈", gradient: "from-green-500 via-emerald-400 to-teal-300", stats: "40+ 篇经典" },
  { slug: "middle", name: "初中", description: "7-9年级语文教材中的文学经典——散文、小说、戏剧、文言名篇，全面开启文学素养的黄金时代。", grades: "7-9年级", icon: "📚", gradient: "from-blue-600 via-indigo-500 to-purple-400", stats: "60+ 篇经典" },
  { slug: "high", name: "高中", description: "必修+选择性必修五册教材——从《诗经》到《红楼梦》，从鲁迅到马尔克斯，以整本书阅读完成人文精神的成年礼。", grades: "10-12年级", icon: "🎓", gradient: "from-red-700 via-rose-600 to-amber-500", stats: "50+ 篇经典" },
];

/* ===== 小学 ===== */
export const primaryWorks: TextbookWork[] = [
  { workId: "journey-to-the-west", title: "西游记", author: "吴承恩", level: "primary", grade: "五年级下册", type: "课文", excerpt: "猴王出世", gradient: "from-orange-600 via-red-500 to-yellow-500" },
  { workId: "three-kingdoms", title: "三国演义", author: "罗贯中", level: "primary", grade: "五年级下册", type: "课文", excerpt: "草船借箭", gradient: "from-stone-800 via-red-900 to-amber-700" },
  { workId: "water-margin", title: "水浒传", author: "施耐庵", level: "primary", grade: "五年级下册", type: "课文", excerpt: "景阳冈（武松打虎）", gradient: "from-slate-700 via-gray-800 to-stone-600" },
  { workId: "dream-of-red-chamber", title: "红楼梦", author: "曹雪芹", level: "primary", grade: "五年级下册", type: "课文", excerpt: "'凤辣子'初见林黛玉", gradient: "from-red-800 via-red-700 to-amber-500" },
  { workId: "tb-sell-matches", title: "卖火柴的小女孩", author: "安徒生", level: "primary", grade: "六年级下册", type: "课文", gradient: "from-white via-blue-100 to-red-300" },
  { workId: "tb-crusoe", title: "鲁滨孙漂流记", author: "丹尼尔·笛福", level: "primary", grade: "六年级下册", type: "课文", gradient: "from-blue-600 via-teal-500 to-amber-400" },
  { workId: "tb-tom-sawyer", title: "汤姆·索亚历险记", author: "马克·吐温", level: "primary", grade: "六年级下册", type: "课文", gradient: "from-blue-500 via-green-400 to-yellow-400" },
  { workId: "tb-wilde-giant", title: "巨人的花园", author: "奥斯卡·王尔德", level: "primary", grade: "四年级上册", type: "课文", gradient: "from-green-500 via-rose-300 to-gold-400" },
  { workId: "tb-luxun-1", title: "少年闰土", author: "鲁迅", level: "primary", grade: "六年级上册", type: "课文", excerpt: "《故乡》节选", gradient: "from-gray-700 via-blue-600 to-amber-400" },
  { workId: "tb-zzq-4", title: "匆匆", author: "朱自清", level: "primary", grade: "六年级下册", type: "课文", gradient: "from-amber-200 via-white to-blue-200" },
  { workId: "tb-ls-5", title: "北京的春节", author: "老舍", level: "primary", grade: "六年级下册", type: "课文", gradient: "from-red-600 via-gold-400 to-red-600" },
  { workId: "tb-ba-1", title: "鸟的天堂", author: "巴金", level: "primary", grade: "四年级上册", type: "课文", gradient: "from-green-600 via-teal-500 to-amber-300" },
  { workId: "tb-xds-1", title: "落花生", author: "许地山", level: "primary", grade: "五年级上册", type: "课文", gradient: "from-amber-600 via-yellow-500 to-brown-400" },
  { workId: "tb-fjc-1", title: "珍珠鸟", author: "冯骥才", level: "primary", grade: "五年级上册", type: "课文", gradient: "from-white via-green-100 to-blue-200" },
  { workId: "tb-lin-qingxuan", title: "和时间赛跑", author: "林清玄", level: "primary", grade: "三年级下册", type: "课文", gradient: "from-amber-300 via-white to-blue-300" },
  { workId: "tb-xh-1", title: "火烧云", author: "萧红", level: "primary", grade: "三年级下册", type: "课文", gradient: "from-red-500 via-orange-400 to-yellow-300" },
  { workId: "tb-xh-2", title: "祖父的园子", author: "萧红", level: "primary", grade: "五年级下册", type: "课文", gradient: "from-green-500 via-yellow-400 to-pink-300" },
  { workId: "tb-ls-2", title: "猫", author: "老舍", level: "primary", grade: "四年级下册", type: "课文", gradient: "from-amber-400 via-white to-gray-400" },
  { workId: "tb-ls-3", title: "母鸡", author: "老舍", level: "primary", grade: "四年级下册", type: "课文", gradient: "from-yellow-400 via-amber-300 to-brown-400" },
  { workId: "tb-ls-4", title: "草原", author: "老舍", level: "primary", grade: "六年级上册", type: "课文", gradient: "from-green-500 via-blue-400 to-white" },
  { workId: "tb-scw-1", title: "腊八粥", author: "沈从文", level: "primary", grade: "六年级下册", type: "课文", gradient: "from-amber-600 via-red-400 to-brown-400" },
  { workId: "tb-bx-1", title: "忆读书", author: "冰心", level: "primary", grade: "五年级上册", type: "课文", gradient: "from-white via-blue-100 to-purple-300" },
  { workId: "tb-bx-2", title: "肥皂泡", author: "冰心", level: "primary", grade: "三年级下册", type: "课文", gradient: "from-pink-300 via-purple-200 to-blue-300" },
  { workId: "tb-ys-1", title: "荷花", author: "叶圣陶", level: "primary", grade: "三年级下册", type: "课文", gradient: "from-green-400 via-pink-300 to-white" },
  { workId: "tb-ys-2", title: "爬山虎的脚", author: "叶圣陶", level: "primary", grade: "四年级上册", type: "课文", gradient: "from-green-600 via-emerald-500 to-teal-400" },
  { workId: "tb-ys-3", title: "记金华的双龙洞", author: "叶圣陶", level: "primary", grade: "四年级下册", type: "课文", gradient: "from-stone-500 via-green-400 to-blue-300" },
  { workId: "tb-ba-2", title: "海上日出", author: "巴金", level: "primary", grade: "四年级下册", type: "课文", gradient: "from-red-400 via-gold-300 to-blue-300" },
  { workId: "tb-jpw-1", title: "月迹", author: "贾平凹", level: "primary", grade: "五年级上册", type: "课文", gradient: "from-blue-500 via-white to-amber-300" },
  { workId: "tb-fjc-2", title: "挑山工", author: "冯骥才", level: "primary", grade: "四年级下册", type: "课文", gradient: "from-stone-600 via-amber-500 to-yellow-400" },
  { workId: "tb-ztd-1", title: "燕子", author: "郑振铎", level: "primary", grade: "三年级下册", type: "课文", gradient: "from-black via-blue-400 to-white" },
  { workId: "tb-gmr-1", title: "白鹭", author: "郭沫若", level: "primary", grade: "五年级上册", type: "课文", gradient: "from-white via-gray-200 to-amber-300" },
  { workId: "tb-lhy-1", title: "窃读记", author: "林海音", level: "primary", grade: "五年级上册", type: "课文", gradient: "from-amber-300 via-white to-blue-300" },
  { workId: "tb-lhy-2", title: "冬阳·童年·骆驼队", author: "林海音", level: "primary", grade: "五年级下册", type: "课文", gradient: "from-amber-500 via-gold-300 to-brown-400" },
  { workId: "tb-zhuge-liang", title: "诫子书", author: "诸葛亮", level: "primary", grade: "四年级下册", type: "古诗词诵读", gradient: "from-amber-600 via-gold-400 to-red-500" },
];

/* ===== 初中 ===== */
export const middleWorks: TextbookWork[] = [
  { workId: "tb-zhaohuaxishi", title: "朝花夕拾", author: "鲁迅", level: "middle", grade: "七年级上册", type: "名著导读", gradient: "from-gray-700 via-amber-500 to-blue-400" },
  { workId: "journey-to-the-west", title: "西游记", author: "吴承恩", level: "middle", grade: "七年级上册", type: "名著导读", gradient: "from-orange-600 via-red-500 to-yellow-500" },
  { workId: "tb-luotuoxiangzi", title: "骆驼祥子", author: "老舍", level: "middle", grade: "七年级下册", type: "名著导读", gradient: "from-gray-700 via-yellow-500 to-red-500" },
  { workId: "tb-haidiliangwanli", title: "海底两万里", author: "儒勒·凡尔纳", level: "middle", grade: "七年级下册", type: "名著导读", gradient: "from-blue-800 via-cyan-600 to-teal-400" },
  { workId: "tb-hongxing", title: "红星照耀中国", author: "埃德加·斯诺", level: "middle", grade: "八年级上册", type: "名著导读", gradient: "from-red-700 via-gold-400 to-red-600" },
  { workId: "tb-kunchongji", title: "昆虫记", author: "法布尔", level: "middle", grade: "八年级上册", type: "名著导读", gradient: "from-green-600 via-amber-400 to-brown-400" },
  { workId: "tb-gangtie", title: "钢铁是怎样炼成的", author: "奥斯特洛夫斯基", level: "middle", grade: "八年级下册", type: "名著导读", gradient: "from-gray-700 via-red-600 to-gold-400" },
  { workId: "water-margin", title: "水浒传", author: "施耐庵", level: "middle", grade: "九年级上册", type: "名著导读", gradient: "from-slate-700 via-gray-800 to-stone-600" },
  { workId: "tb-aishi-poetry", title: "艾青诗选", author: "艾青", level: "middle", grade: "九年级上册", type: "名著导读", gradient: "from-blue-600 via-red-500 to-black" },
  { workId: "tb-rulinwaishi", title: "儒林外史", author: "吴敬梓", level: "middle", grade: "九年级下册", type: "名著导读", gradient: "from-stone-600 via-amber-500 to-red-400" },
  { workId: "tb-jane-eyre", title: "简·爱", author: "夏洛蒂·勃朗特", level: "middle", grade: "九年级下册", type: "名著导读", gradient: "from-gray-600 via-purple-400 to-red-400" },
  { workId: "tb-luxun-2", title: "从百草园到三味书屋", author: "鲁迅", level: "middle", grade: "七年级上册", type: "课文", gradient: "from-green-600 via-yellow-400 to-amber-500" },
  { workId: "tb-luxun-3", title: "阿长与《山海经》", author: "鲁迅", level: "middle", grade: "七年级下册", type: "课文", gradient: "from-amber-400 via-red-300 to-gray-500" },
  { workId: "tb-luxun-4", title: "藤野先生", author: "鲁迅", level: "middle", grade: "八年级上册", type: "课文", gradient: "from-blue-500 via-white to-red-500" },
  { workId: "tb-luxun-5", title: "故乡", author: "鲁迅", level: "middle", grade: "九年级上册", type: "课文", gradient: "from-gray-700 via-blue-600 to-amber-400" },
  { workId: "tb-luxun-6", title: "社戏", author: "鲁迅", level: "middle", grade: "八年级下册", type: "课文", gradient: "from-blue-600 via-gray-400 to-amber-300" },
  { workId: "tb-luxun-7", title: "孔乙己", author: "鲁迅", level: "middle", grade: "九年级下册", type: "课文", gradient: "from-gray-700 via-stone-500 to-amber-400" },
  { workId: "dream-of-red-chamber", title: "红楼梦", author: "曹雪芹", level: "middle", grade: "九年级上册", type: "课文", excerpt: "刘姥姥进大观园", gradient: "from-red-800 via-red-700 to-amber-500" },
  { workId: "water-margin", title: "智取生辰纲", author: "施耐庵", level: "middle", grade: "九年级上册", type: "课文", excerpt: "《水浒传》", gradient: "from-amber-600 via-red-500 to-yellow-400" },
  { workId: "tb-rulinwaishi", title: "范进中举", author: "吴敬梓", level: "middle", grade: "九年级上册", type: "课文", excerpt: "《儒林外史》", gradient: "from-gray-600 via-red-400 to-yellow-400" },
  { workId: "three-kingdoms", title: "三顾茅庐", author: "罗贯中", level: "middle", grade: "九年级上册", type: "课文", excerpt: "《三国演义》", gradient: "from-amber-500 via-green-500 to-blue-400" },
  { workId: "tb-last-class", title: "最后一课", author: "阿尔丰斯·都德", level: "middle", grade: "七年级下册", type: "课文", gradient: "from-blue-500 via-red-400 to-white" },
  { workId: "tb-mopassant-uncle", title: "我的叔叔于勒", author: "莫泊桑", level: "middle", grade: "九年级上册", type: "课文", gradient: "from-blue-500 via-gray-400 to-amber-300" },
  { workId: "tb-chekhov-chameleon", title: "变色龙", author: "契诃夫", level: "middle", grade: "九年级下册", type: "课文", gradient: "from-green-600 via-yellow-300 to-red-400" },
  { workId: "tb-gorky-petrel", title: "海燕", author: "高尔基", level: "middle", grade: "九年级下册", type: "课文", gradient: "from-gray-700 via-blue-500 to-white" },
  { workId: "tb-shakespeare-venice", title: "威尼斯商人", author: "莎士比亚", level: "middle", grade: "九年级下册", type: "课文", gradient: "from-purple-600 via-gold-400 to-red-600" },
  { workId: "tb-taohuayuan", title: "桃花源记", author: "陶渊明", level: "middle", grade: "八年级下册", type: "课文", gradient: "from-pink-400 via-green-300 to-amber-300" },
  { workId: "tb-yueyanglou", title: "岳阳楼记", author: "范仲淹", level: "middle", grade: "九年级上册", type: "课文", gradient: "from-blue-500 via-white to-red-500" },
  { workId: "tb-zuiwengting", title: "醉翁亭记", author: "欧阳修", level: "middle", grade: "九年级上册", type: "课文", gradient: "from-green-600 via-amber-400 to-blue-400" },
  { workId: "tb-zzq-1", title: "春", author: "朱自清", level: "middle", grade: "七年级上册", type: "课文", gradient: "from-green-400 via-pink-300 to-yellow-300" },
  { workId: "tb-zzq-2", title: "背影", author: "朱自清", level: "middle", grade: "八年级上册", type: "课文", gradient: "from-gray-500 via-amber-300 to-orange-400" },
  { workId: "tb-zzq-5", title: "绿", author: "朱自清", level: "middle", grade: "八年级上册", type: "课文", gradient: "from-green-500 via-emerald-400 to-teal-300" },
  { workId: "tb-ls-1", title: "济南的冬天", author: "老舍", level: "middle", grade: "七年级上册", type: "课文", gradient: "from-white via-blue-100 to-gray-300" },
  { workId: "tb-yj-1", title: "老王", author: "杨绛", level: "middle", grade: "七年级下册", type: "课文", gradient: "from-gray-600 via-white to-amber-400" },
  { workId: "tb-sts-1", title: "秋天的怀念", author: "史铁生", level: "middle", grade: "七年级上册", type: "课文", gradient: "from-amber-500 via-red-400 to-gray-500" },
  { workId: "tb-zp-1", title: "紫藤萝瀑布", author: "宗璞", level: "middle", grade: "七年级下册", type: "课文", gradient: "from-purple-500 via-pink-400 to-green-300" },
  { workId: "tb-md-1", title: "白杨礼赞", author: "茅盾", level: "middle", grade: "八年级上册", type: "课文", gradient: "from-green-500 via-white to-blue-500" },
  { workId: "tb-wzq-1", title: "昆明的雨", author: "汪曾祺", level: "middle", grade: "八年级上册", type: "课文", gradient: "from-green-500 via-blue-300 to-white" },
  { workId: "tb-wzq-2", title: "端午的鸭蛋", author: "汪曾祺", level: "middle", grade: "八年级下册", type: "课文", gradient: "from-white via-amber-100 to-blue-200" },
  { workId: "tb-lsq-1", title: "鸟", author: "梁实秋", level: "middle", grade: "七年级上册", type: "课文", gradient: "from-green-500 via-blue-300 to-white" },
  { workId: "tb-lcz-1", title: "安塞腰鼓", author: "刘成章", level: "middle", grade: "八年级下册", type: "课文", gradient: "from-red-700 via-amber-500 to-yellow-400" },
  { workId: "tb-cwx-1", title: "孤独之旅", author: "曹文轩", level: "middle", grade: "九年级上册", type: "课文", gradient: "from-blue-500 via-gray-400 to-green-400" },
  { workId: "tb-lh-1", title: "壶口瀑布", author: "梁衡", level: "middle", grade: "八年级下册", type: "课文", gradient: "from-yellow-600 via-red-500 to-blue-400" },
  { workId: "tb-sl-1", title: "芦花荡", author: "孙犁", level: "middle", grade: "八年级上册", type: "课文", gradient: "from-green-500 via-white to-blue-400" },
  { workId: "tb-gmr-2", title: "天上的街市", author: "郭沫若", level: "middle", grade: "七年级上册", type: "课文", gradient: "from-blue-600 via-purple-400 to-gold-300" },
  { workId: "tb-yuguangzhong", title: "乡愁", author: "余光中", level: "middle", grade: "九年级上册", type: "课文", gradient: "from-blue-400 via-white to-red-500" },
  { workId: "tb-aiqing-land", title: "我爱这土地", author: "艾青", level: "middle", grade: "九年级上册", type: "课文", gradient: "from-gray-700 via-red-500 to-black" },
  { workId: "tb-shuting-motherland", title: "祖国啊，我亲爱的祖国", author: "舒婷", level: "middle", grade: "九年级下册", type: "课文", gradient: "from-red-700 via-gold-400 to-red-600" },
  { workId: "tb-chushibiao", title: "出师表", author: "诸葛亮", level: "middle", grade: "九年级下册", type: "课文", gradient: "from-red-800 via-gold-500 to-amber-400" },
];

/* ===== 高中 ===== */
export const highWorks: TextbookWork[] = [
  { workId: "tb-xiangtu", title: "乡土中国", author: "费孝通", level: "high", grade: "必修上册", type: "整本书阅读", gradient: "from-green-600 via-brown-500 to-amber-400" },
  { workId: "dream-of-red-chamber", title: "红楼梦", author: "曹雪芹", level: "high", grade: "必修下册", type: "整本书阅读", gradient: "from-red-800 via-red-700 to-amber-500" },
  { workId: "tb-luxun-8", title: "祝福", author: "鲁迅", level: "high", grade: "必修下册", type: "课文", excerpt: "《彷徨》", gradient: "from-gray-900 via-red-800 to-black" },
  { workId: "tb-luxun-9", title: "阿Q正传", author: "鲁迅", level: "high", grade: "选择性必修下册", type: "课文", gradient: "from-black via-gray-700 to-amber-500" },
  { workId: "tb-luxun-10", title: "记念刘和珍君", author: "鲁迅", level: "high", grade: "选择性必修中册", type: "课文", gradient: "from-black via-red-700 to-white" },
  { workId: "tb-chibifu", title: "赤壁赋", author: "苏轼", level: "high", grade: "必修上册", type: "课文", gradient: "from-blue-500 via-white to-amber-400" },
  { workId: "tb-leiyu", title: "雷雨", author: "曹禺", level: "high", grade: "必修下册", type: "课文", gradient: "from-purple-800 via-red-600 to-black" },
  { workId: "tb-chaguan", title: "茶馆", author: "老舍", level: "high", grade: "选择性必修下册", type: "课文", gradient: "from-amber-600 via-red-500 to-black" },
  { workId: "tb-biancheng", title: "边城", author: "沈从文", level: "high", grade: "选择性必修下册", type: "课文", gradient: "from-green-500 via-blue-300 to-white" },
  { workId: "tb-hehuadian", title: "荷花淀", author: "孙犁", level: "high", grade: "选择性必修中册", type: "课文", gradient: "from-green-500 via-white to-pink-300" },
  { workId: "tb-david-copperfield", title: "大卫·科波菲尔", author: "狄更斯", level: "high", grade: "选择性必修上册", type: "课文", gradient: "from-blue-600 via-red-400 to-amber-400" },
  { workId: "tb-resurrection", title: "复活", author: "托尔斯泰", level: "high", grade: "选择性必修上册", type: "课文", gradient: "from-red-700 via-gold-400 to-white" },
  { workId: "hundred-years-solitude", title: "百年孤独", author: "马尔克斯", level: "high", grade: "选择性必修上册", type: "课文", gradient: "from-emerald-700 via-yellow-500 to-red-500" },
  { workId: "hamlet", title: "哈姆莱特", author: "莎士比亚", level: "high", grade: "必修下册", type: "课文", gradient: "from-black via-purple-700 to-gold-400" },
  { workId: "tb-dolls-house", title: "玩偶之家", author: "易卜生", level: "high", grade: "选择性必修中册", type: "课文", gradient: "from-blue-400 via-white to-red-500" },
  { workId: "metamorphosis", title: "变形记", author: "卡夫卡", level: "high", grade: "必修下册", type: "课文", gradient: "from-brown-600 via-gray-700 to-black" },
  { workId: "tb-man-in-case", title: "装在套子里的人", author: "契诃夫", level: "high", grade: "必修下册", type: "课文", gradient: "from-gray-600 via-green-400 to-black" },
  { workId: "tb-doueyuan", title: "窦娥冤", author: "关汉卿", level: "high", grade: "必修下册", type: "课文", gradient: "from-red-800 via-black to-white" },
  { workId: "tb-chenqingshi", title: "陈情表", author: "李密", level: "high", grade: "选择性必修下册", type: "课文", gradient: "from-red-600 via-amber-400 to-white" },
  { workId: "tb-lantingxu", title: "兰亭集序", author: "王羲之", level: "high", grade: "选择性必修下册", type: "课文", gradient: "from-black via-white to-black" },
  { workId: "tb-afanggongfu", title: "阿房宫赋", author: "杜牧", level: "high", grade: "必修下册", type: "课文", gradient: "from-red-700 via-gold-500 to-black" },
  { workId: "tb-guoguoqinlun", title: "过秦论", author: "贾谊", level: "high", grade: "选择性必修中册", type: "课文", gradient: "from-red-700 via-gold-400 to-black" },
  { workId: "tb-ydf-1", title: "故都的秋", author: "郁达夫", level: "high", grade: "必修上册", type: "课文", gradient: "from-amber-500 via-red-400 to-gray-500" },
  { workId: "tb-sts-2", title: "我与地坛", author: "史铁生", level: "high", grade: "必修上册", type: "课文", gradient: "from-gray-700 via-green-500 to-amber-400" },
  { workId: "tb-zzq-3", title: "荷塘月色", author: "朱自清", level: "high", grade: "必修上册", type: "课文", gradient: "from-blue-300 via-green-200 to-white" },
  { workId: "tb-zmb-biekangqiao", title: "再别康桥", author: "徐志摩", level: "high", grade: "选择性必修下册", type: "课文", gradient: "from-blue-400 via-white to-gold-300" },
  { workId: "tb-dayanhe", title: "大堰河——我的保姆", author: "艾青", level: "high", grade: "选择性必修下册", type: "课文", gradient: "from-gray-600 via-green-500 to-black" },
  { workId: "tb-rzj-1", title: "百合花", author: "茹志鹃", level: "high", grade: "必修上册", type: "课文", gradient: "from-red-500 via-white to-green-400" },
];

/* ===== 辅助函数 ===== */

export function getTextbookWorksByLevel(level: TextbookLevel): TextbookWork[] {
  if (level === "primary") return primaryWorks;
  if (level === "middle") return middleWorks;
  return highWorks;
}

export function getTextbookLevelInfo(slug: TextbookLevel): TextbookLevelInfo | undefined {
  return textbookLevels.find((l) => l.slug === slug);
}

export function getTextbookStats() {
  return {
    primary: primaryWorks.length,
    middle: middleWorks.length,
    high: highWorks.length,
    total: primaryWorks.length + middleWorks.length + highWorks.length,
  };
}
