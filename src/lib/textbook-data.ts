// ================================================================
// 人教版教材文学作品数据
// 小学 (1-6年级) / 初中 (7-9年级) / 高中 (10-12年级)
// 课文篇目、名著导读、整本书阅读
// ================================================================

export type TextbookLevel = "primary" | "middle" | "high";

export interface TextbookWork {
  /** 系统中已有的 workId（如有） */
  workId?: string;
  title: string;
  author: string;
  level: TextbookLevel;
  grade: string;
  type: "课文" | "名著导读" | "整本书阅读" | "古诗词诵读";
  /** 课文节选或篇目名 */
  excerpt?: string;
  /** 如无系统 workId，提供简要介绍 */
  description?: string;
  gradient: string;
}

export interface TextbookLevelInfo {
  slug: TextbookLevel;
  name: string;
  description: string;
  grades: string;
  icon: string;
  gradient: string;
  stats: string;
}

/* ========== 学段信息 ========== */

export const textbookLevels: TextbookLevelInfo[] = [
  {
    slug: "primary",
    name: "小学",
    description: "1-6年级语文教材中的经典篇目——从古诗童谣到四大名著选段，在孩子们心中播下文学的种子。",
    grades: "1-6年级",
    icon: "🌈",
    gradient: "from-green-500 via-emerald-400 to-teal-300",
    stats: "50+ 篇经典",
  },
  {
    slug: "middle",
    name: "初中",
    description: "7-9年级语文教材中的文学经典——散文、小说、戏剧、文言名篇，全面开启文学素养的黄金时代。",
    grades: "7-9年级",
    icon: "📚",
    gradient: "from-blue-600 via-indigo-500 to-purple-400",
    stats: "80+ 篇经典",
  },
  {
    slug: "high",
    name: "高中",
    description: "必修+选择性必修五册教材——从《诗经》到《红楼梦》，从鲁迅到马尔克斯，以整本书阅读完成人文精神的成年礼。",
    grades: "10-12年级",
    icon: "🎓",
    gradient: "from-red-700 via-rose-600 to-amber-500",
    stats: "130+ 篇经典",
  },
];

/* ========== 小学 文学作品 ========== */

export const primaryWorks: TextbookWork[] = [
  // 四大名著选段
  { workId: "journey-to-the-west", title: "西游记", author: "吴承恩", level: "primary", grade: "五年级下册", type: "课文", excerpt: "猴王出世", gradient: "from-orange-600 via-red-500 to-yellow-500" },
  { workId: "three-kingdoms", title: "三国演义", author: "罗贯中", level: "primary", grade: "五年级下册", type: "课文", excerpt: "草船借箭", gradient: "from-stone-800 via-red-900 to-amber-700" },
  { workId: "water-margin", title: "水浒传", author: "施耐庵", level: "primary", grade: "五年级下册", type: "课文", excerpt: "景阳冈（武松打虎）", gradient: "from-slate-700 via-gray-800 to-stone-600" },
  { workId: "dream-of-red-chamber", title: "红楼梦", author: "曹雪芹", level: "primary", grade: "五年级下册", type: "课文", excerpt: "'凤辣子'初见林黛玉", gradient: "from-red-800 via-red-700 to-amber-500" },
  // 世界经典童话
  { workId: "nobel-1907-kipling", title: "丛林之书", author: "吉卜林", level: "primary", grade: "二年级下册", type: "课文", excerpt: "丑小鸭（安徒生）", gradient: "from-green-700 via-emerald-500 to-yellow-400" },
  // 名家散文
  { title: "鸟的天堂", author: "巴金", level: "primary", grade: "四年级上册", type: "课文", description: "巴金笔下那棵巨大的榕树——'鸟的天堂'成为中国几代小学生心中关于自然之美的最初记忆。", gradient: "from-green-600 via-teal-500 to-amber-300" },
  { title: "落花生", author: "许地山", level: "primary", grade: "五年级上册", type: "课文", description: "以朴实无华的语言讲述花生的品格——'人要做有用的人，不要做只讲体面的人。'", gradient: "from-amber-600 via-yellow-500 to-brown-400" },
  // 古典寓言
  { title: "寓言二则（揠苗助长/守株待兔）", author: "《孟子》《韩非子》", level: "primary", grade: "二年级下册", type: "课文", description: "两则最经典的中国古代寓言，以最朴素的故事传达了最深远的哲理——欲速则不达，不劳则无获。", gradient: "from-green-500 via-yellow-400 to-amber-400" },
  { title: "亡羊补牢/南辕北辙", author: "《战国策》", level: "primary", grade: "三年级下册", type: "课文", description: "出自《战国策》的经典寓言，以羊圈与马车为喻，教人知错就改、方向正确的朴素道理。", gradient: "from-amber-500 via-red-400 to-yellow-400" },
  // 外国文学
  { title: "卖火柴的小女孩", author: "安徒生", level: "primary", grade: "六年级下册", type: "课文", description: "安徒生最脍炙人口的童话之一——在寒冷的除夕夜，一个卖火柴的小女孩在火光中看见了温暖与希望。", gradient: "from-white via-blue-100 to-red-300" },
  { title: "鲁滨孙漂流记（节选）", author: "丹尼尔·笛福", level: "primary", grade: "六年级下册", type: "课文", description: "英国文学史上第一部小说——鲁滨孙在荒岛上二十八年的生存传奇，是每个孩子心中冒险精神的启蒙。", gradient: "from-blue-600 via-teal-500 to-amber-400" },
  { title: "汤姆·索亚历险记（节选）", author: "马克·吐温", level: "primary", grade: "六年级下册", type: "课文", description: "美国文学的童年经典——汤姆·索亚在密西西比河畔的冒险让全世界的孩子懂得了勇气与友谊。", gradient: "from-blue-500 via-green-400 to-yellow-400" },
  { title: "巨人的花园", author: "奥斯卡·王尔德", level: "primary", grade: "四年级上册", type: "课文", description: "王尔德最优美的童话——当巨人拆除了花园的围墙，春天和孩子们一起回到了他的身边。", gradient: "from-green-500 via-rose-300 to-gold-400" },
  // 鲁迅
  { title: "少年闰土", author: "鲁迅", level: "primary", grade: "六年级上册", type: "课文", excerpt: "《故乡》节选", description: "鲁迅笔下最明亮的人物——月光下那个项带银圈、手捏钢叉的少年，是中国文学中最令人难忘的少年形象。", gradient: "from-gray-700 via-blue-600 to-amber-400" },
  // 现代散文
  { title: "匆匆", author: "朱自清", level: "primary", grade: "六年级下册", type: "课文", description: "'燕子去了，有再来的时候；杨柳枯了，有再青的时候；桃花谢了，有再开的时候。'——朱自清关于时间的最美散文。", gradient: "from-amber-200 via-white to-blue-200" },
  { title: "北京的春节", author: "老舍", level: "primary", grade: "六年级下册", type: "课文", description: "老舍以北京人特有的幽默与温情，娓娓道出了老北京从腊八到元宵最地道的年味。", gradient: "from-red-600 via-gold-400 to-red-600" },
  // 经典古诗（代表）
  { title: "唐诗宋词精选（小学段）", author: "李白、杜甫、苏轼等", level: "primary", grade: "1-6年级贯穿", type: "古诗词诵读", description: "小学六年学习约50首经典古诗词，从《静夜思》到《七步诗》，在琅琅书声中完成对中国古典诗歌的第一次巡礼。", gradient: "from-amber-400 via-gold-300 to-amber-500" },
  { title: "文言文启蒙（小学段）", author: "《论语》《孟子》《列子》等", level: "primary", grade: "5-6年级", type: "课文", description: "《学弈》《两小儿辩日》《伯牙绝弦》——以最精短的文言篇章为孩子打开古代汉语的大门。", gradient: "from-stone-500 via-amber-400 to-yellow-400" },
  // 名家名篇
  { title: "珍珠鸟", author: "冯骥才", level: "primary", grade: "五年级上册", type: "课文", description: "冯骥才以一只珍珠鸟的信任，写出了人与动物之间最美好、最纯粹的情感——'信赖，往往创造出美好的境界。'", gradient: "from-white via-green-100 to-blue-200" },
  { title: "和时间赛跑", author: "林清玄", level: "primary", grade: "三年级下册", type: "课文", description: "台湾散文家林清玄以童年经历讲述时间的珍贵——'虽然我知道人永远跑不过时间，但是可以比原来跑快一步。'", gradient: "from-amber-300 via-white to-blue-300" },
];

/* ========== 初中 文学作品 ========== */

export const middleWorks: TextbookWork[] = [
  // 名著导读（整本书）
  { title: "朝花夕拾", author: "鲁迅", level: "middle", grade: "七年级上册", type: "名著导读", description: "鲁迅唯一的散文集——从百草园到三味书屋，从阿长到藤野先生，在童年记忆的碎片中折射出一个时代的剪影。", gradient: "from-gray-700 via-amber-500 to-blue-400" },
  { workId: "journey-to-the-west", title: "西游记", author: "吴承恩", level: "middle", grade: "七年级上册", type: "名著导读", gradient: "from-orange-600 via-red-500 to-yellow-500" },
  { title: "骆驼祥子", author: "老舍", level: "middle", grade: "七年级下册", type: "名著导读", description: "老舍最优秀的长篇小说——北京车夫祥子三起三落的命运，是中国现代文学中最令人心碎的城市悲剧。", gradient: "from-gray-700 via-yellow-500 to-red-500" },
  { title: "海底两万里", author: "儒勒·凡尔纳", level: "middle", grade: "七年级下册", type: "名著导读", description: "科幻小说之父凡尔纳的代表作——尼摩船长驾驶鹦鹉螺号在深海中展开的奇幻冒险，启发了无数少年的科学梦想。", gradient: "from-blue-800 via-cyan-600 to-teal-400" },
  { title: "红星照耀中国", author: "埃德加·斯诺", level: "middle", grade: "八年级上册", type: "名著导读", description: "第一个向世界讲述红色中国的西方记者——斯诺以亲历者的视角记录了1936年陕北革命根据地的真实面貌。", gradient: "from-red-700 via-gold-400 to-red-600" },
  { title: "昆虫记", author: "法布尔", level: "middle", grade: "八年级上册", type: "名著导读", description: "法布尔以一生的观察写就的昆虫世界百科全书——在蝉鸣与蛛网之间，科学与文学完成了最完美的联姻。", gradient: "from-green-600 via-amber-400 to-brown-400" },
  { title: "钢铁是怎样炼成的", author: "奥斯特洛夫斯基", level: "middle", grade: "八年级下册", type: "名著导读", description: "保尔·柯察金的名言——'人的一生应当这样度过'——激励了几代中国青年。以作者亲身经历写就的革命者精神成长史诗。", gradient: "from-gray-700 via-red-600 to-gold-400" },
  { title: "傅雷家书", author: "傅雷", level: "middle", grade: "八年级下册", type: "名著导读", description: "翻译家傅雷写给儿子傅聪的数百封书信——既是艺术教育的范本，也是一位中国父亲最深情的生命告白。", gradient: "from-amber-300 via-white to-blue-400" },
  { workId: "water-margin", title: "水浒传", author: "施耐庵", level: "middle", grade: "九年级上册", type: "名著导读", gradient: "from-slate-700 via-gray-800 to-stone-600" },
  { title: "艾青诗选", author: "艾青", level: "middle", grade: "九年级上册", type: "名著导读", description: "'为什么我的眼里常含泪水？因为我对这土地爱得深沉。'——艾青以最朴素的语言写出了对祖国最深沉的爱情。", gradient: "from-blue-600 via-red-500 to-black" },
  { title: "儒林外史", author: "吴敬梓", level: "middle", grade: "九年级下册", type: "名著导读", description: "中国古典讽刺小说的巅峰——范进中举的癫狂、严监生的两根灯草，以入骨三分的笔锋剖开了科举时代的人性沉疴。", gradient: "from-stone-600 via-amber-500 to-red-400" },
  { title: "简·爱", author: "夏洛蒂·勃朗特", level: "middle", grade: "九年级下册", type: "名著导读", description: "一个相貌平平的家庭女教师以独立的人格赢得了爱情与尊严——'我们的精神是平等的'至今仍在世界文学中回响。", gradient: "from-gray-600 via-purple-400 to-red-400" },
  // 鲁迅作品
  { title: "从百草园到三味书屋", author: "鲁迅", level: "middle", grade: "七年级上册", type: "课文", excerpt: "《朝花夕拾》", description: "鲁迅最优美的童年回忆——在百草园的蟋蟀与覆盆子之间，在三味书屋里先生的戒尺之下，一个时代的教育被永远定格。", gradient: "from-green-600 via-yellow-400 to-gray-500" },
  { title: "阿长与《山海经》", author: "鲁迅", level: "middle", grade: "七年级下册", type: "课文", excerpt: "《朝花夕拾》", description: "鲁迅怀念保姆长妈妈的散文——一个粗俗而善良的底层女性，用微薄的工钱为童年的鲁迅买来了他心心念念的《山海经》。", gradient: "from-amber-400 via-red-300 to-gray-500" },
  { workId: "dream-of-red-chamber", title: "红楼梦", author: "曹雪芹", level: "middle", grade: "九年级上册", type: "课文", excerpt: "刘姥姥进大观园", gradient: "from-red-800 via-red-700 to-amber-500" },
  // 外国文学
  { title: "最后一课", author: "阿尔丰斯·都德", level: "middle", grade: "七年级下册", type: "课文", description: "普法战争后，阿尔萨斯一所小学的最后一堂法语课——'法语是世界上最美丽的语言'，一个民族的语言即是一个民族的灵魂。", gradient: "from-blue-500 via-red-400 to-white" },
  { title: "我的叔叔于勒", author: "莫泊桑", level: "middle", grade: "九年级上册", type: "课文", description: "莫泊桑最著名的短篇小说之一——一个法国家庭对于勒叔叔从期盼到避之不及的态度转变，如一柄手术刀剖开了亲情的虚面纱。", gradient: "from-blue-500 via-gray-400 to-amber-300" },
  { title: "变色龙", author: "契诃夫", level: "middle", grade: "九年级下册", type: "课文", description: "巡官奥楚蔑洛夫对一条咬人狗的态度六次转变——契诃夫以天才的讽刺将权力的奴性刻入世界文学的殿堂。", gradient: "from-green-600 via-yellow-300 to-red-400" },
  { title: "海燕", author: "高尔基", level: "middle", grade: "九年级下册", type: "课文", description: "'让暴风雨来得更猛烈些吧！'——高尔基以海燕的意象呼唤革命的风暴，成为世界文学中最具力量感的散文诗之一。", gradient: "from-gray-700 via-blue-500 to-white" },
  { title: "威尼斯商人（节选）", author: "莎士比亚", level: "middle", grade: "九年级下册", type: "课文", description: "莎士比亚最著名的喜剧之一——威尼斯商人夏洛克与'一磅肉'的契约，在法庭的辩论中拷问了法律、仁慈与人性的边界。", gradient: "from-purple-600 via-gold-400 to-red-600" },
  // 古典散文（代表）
  { title: "桃花源记", author: "陶渊明", level: "middle", grade: "八年级下册", type: "课文", description: "中国文学中最美的乌托邦——'忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷。'一千六百年过去，我们仍在寻找那个洞口。", gradient: "from-pink-400 via-green-300 to-amber-300" },
  { title: "岳阳楼记", author: "范仲淹", level: "middle", grade: "九年级上册", type: "课文", description: "'先天下之忧而忧，后天下之乐而乐。'——范仲淹以一篇楼记将中国士大夫的精神境界推到了前所未有的高度。", gradient: "from-blue-500 via-white to-red-500" },
  // 现代散文（代表）
  { title: "春", author: "朱自清", level: "middle", grade: "七年级上册", type: "课文", description: "'盼望着，盼望着，东风来了，春天的脚步近了。'——朱自清以最细腻的笔触捕捉了春天到来的每一个瞬间。", gradient: "from-green-400 via-pink-300 to-yellow-300" },
  { title: "背影", author: "朱自清", level: "middle", grade: "八年级上册", type: "课文", description: "父亲爬过月台去买橘子的背影——中国现代文学中最令人泪目的父爱画面，朱自清以极简的文字写尽了父子之间的深沉情感。", gradient: "from-gray-500 via-amber-300 to-orange-400" },
  { title: "老王", author: "杨绛", level: "middle", grade: "七年级下册", type: "课文", description: "杨绛以朴素的文字记录了一位底层三轮车夫的善良与不幸——'那是一个幸运的人对一个不幸者的愧怍。'", gradient: "from-gray-600 via-white to-amber-400" },
  // 现代诗歌（代表）
  { title: "乡愁", author: "余光中", level: "middle", grade: "九年级上册", type: "课文", description: "'小时候，乡愁是一枚小小的邮票……'余光中以四段精短的诗节，将乡愁从个人情感升华为整个民族的共同记忆。", gradient: "from-blue-400 via-white to-red-500" },
  // 古典小说
  { title: "智取生辰纲", author: "施耐庵", level: "middle", grade: "九年级上册", type: "课文", excerpt: "《水浒传》", description: "晁盖、吴用等七人以蒙汗药智取杨志押送的生辰纲——水浒英雄第一次集体亮相即展现了中国古典小说中最精彩的智斗场面。", gradient: "from-amber-600 via-red-500 to-yellow-400" },
  { title: "范进中举", author: "吴敬梓", level: "middle", grade: "九年级上册", type: "课文", excerpt: "《儒林外史》", description: "范进五十四岁中举后喜极而疯——吴敬梓以黑色幽默书写了科举制度对人性的扭曲，是中国文学中最辛辣的讽刺画面。", gradient: "from-gray-600 via-red-400 to-yellow-400" },
  { title: "三顾茅庐", author: "罗贯中", level: "middle", grade: "九年级上册", type: "课文", excerpt: "《三国演义》", description: "刘备三次前往隆中拜请诸葛亮——'三顾频烦天下计'，中国历史上最著名的求贤故事定格了君臣之义的至高典范。", gradient: "from-amber-500 via-green-500 to-blue-400" },
  // 诗歌代表
  { title: "古代诗词精选（初中段）", author: "曹操、李白、杜甫、苏轼、辛弃疾、李清照等", level: "middle", grade: "7-9年级贯穿", type: "古诗词诵读", description: "初中三年学习约40首经典古诗词，从《观沧海》到《满江红》，在诗词的韵律中完成对中国古典文学的深度巡礼。", gradient: "from-amber-400 via-gold-300 to-red-400" },
];

/* ========== 高中 文学作品 ========== */

export const highWorks: TextbookWork[] = [
  // 整本书阅读
  { title: "乡土中国", author: "费孝通", level: "high", grade: "必修上册", type: "整本书阅读", description: "社会学大师费孝通的经典之作——以'差序格局''熟人社会'等核心概念解析中国传统乡土社会的运行逻辑，是理解中国社会的必修课。", gradient: "from-green-600 via-brown-500 to-amber-400" },
  { workId: "dream-of-red-chamber", title: "红楼梦", author: "曹雪芹", level: "high", grade: "必修下册", type: "整本书阅读", gradient: "from-red-800 via-red-700 to-amber-500" },
  // 鲁迅作品（5篇）
  { title: "祝福", author: "鲁迅", level: "high", grade: "必修下册", type: "课文", excerpt: "《彷徨》", description: "祥林嫂在鲁镇一年一度的'祝福'中走向死亡——鲁迅以最冷的笔写出了封建礼教'吃人'的日常面孔，是中国现代文学中最沉重的小说之一。", gradient: "from-gray-900 via-red-800 to-black" },
  { title: "阿Q正传（节选）", author: "鲁迅", level: "high", grade: "选择性必修下册", type: "课文", description: "阿Q的'精神胜利法'成为中国人的一面镜子——鲁迅以笑中带泪的笔法塑造了世界文学中最令人难忘的弱者形象。", gradient: "from-black via-gray-700 to-amber-500" },
  // 古典巅峰
  { title: "离骚（节选）", author: "屈原", level: "high", grade: "选择性必修下册", type: "课文", description: "'路漫漫其修远兮，吾将上下而求索。'——屈原以中国文学史上最长的抒情诗，将一个失意政治家的灵魂呐喊升华为浪漫主义文学的源头。", gradient: "from-green-700 via-gold-400 to-red-600" },
  { title: "鸿门宴", author: "司马迁", level: "high", grade: "必修下册", type: "课文", excerpt: "《史记·项羽本纪》", description: "中国史传文学的最高典范——刘邦与项羽在鸿门宴上的生死博弈，以最精短的文字写出了最惊心动魄的历史时刻。", gradient: "from-red-700 via-black to-gold-400" },
  { title: "赤壁赋", author: "苏轼", level: "high", grade: "必修上册", type: "课文", description: "'惟江上之清风，与山间之明月，耳得之而为声，目遇之而成色。'——苏轼在赤壁的月光下完成了中国文化中最潇洒的一次精神超越。", gradient: "from-blue-500 via-white to-amber-400" },
  // 现代文学
  { title: "雷雨（节选）", author: "曹禺", level: "high", grade: "必修下册", type: "课文", description: "中国现代话剧的巅峰——周朴园一家的秘密在一个雷雨之夜被逐一揭开，曹禺以希腊悲剧的格局书写了中国家庭的命运悲歌。", gradient: "from-purple-800 via-red-600 to-black" },
  { title: "茶馆（节选）", author: "老舍", level: "high", grade: "选择性必修下册", type: "课文", description: "裕泰茶馆五十年的兴衰就是一部浓缩的中国近代史——老舍以'茶馆'为舞台，让三个时代的中国人同台演出了一幕民族悲喜剧。", gradient: "from-amber-600 via-red-500 to-black" },
  { title: "边城（节选）", author: "沈从文", level: "high", grade: "选择性必修下册", type: "课文", description: "在湘西的茶峒小镇，翠翠在渡口等待一个不知归期的人——沈从文以最美的中文书写了关于爱与等待的田园挽歌。", gradient: "from-green-500 via-blue-300 to-white" },
  { title: "荷花淀", author: "孙犁", level: "high", grade: "选择性必修中册", type: "课文", description: "白洋淀的芦苇荡中，一群妇女在战争阴影下守护着家园——孙犁以'诗体小说'的风格在血与火中发现了人性最柔软的光泽。", gradient: "from-green-500 via-white to-pink-300" },
  // 外国文学
  { title: "大卫·科波菲尔（节选）", author: "查尔斯·狄更斯", level: "high", grade: "选择性必修上册", type: "课文", description: "狄更斯最钟爱的作品——'我最大的儿子'大卫·科波菲尔，以半自传体的方式书写了一个孤儿从苦难中成长为作家的传奇。", gradient: "from-blue-600 via-red-400 to-amber-400" },
  { title: "复活（节选）", author: "列夫·托尔斯泰", level: "high", grade: "选择性必修上册", type: "课文", description: "托尔斯泰最后一部长篇小说——贵族聂赫留朵夫在法庭上认出了被他始乱终弃的玛丝洛娃，一场灵魂的复活由此开始。", gradient: "from-red-700 via-gold-400 to-white" },
  { title: "百年孤独（节选）", author: "马尔克斯", level: "high", grade: "选择性必修上册", type: "课文", description: "魔幻现实主义的巅峰之作首次进入中国高中教材——布恩迪亚家族七代人的传奇从马孔多的雨季开始。", gradient: "from-emerald-700 via-yellow-500 to-red-500" },
  { title: "哈姆莱特（节选）", author: "莎士比亚", level: "high", grade: "必修下册", type: "课文", description: "'生存还是毁灭，这是一个值得思考的问题。'——哈姆莱特的独白是西方文学中关于人的存在最深刻的追问。", gradient: "from-black via-purple-700 to-gold-400" },
  { title: "玩偶之家（节选）", author: "易卜生", level: "high", grade: "选择性必修中册", type: "课文", description: "娜拉关上家门的那一声响震动了整个欧洲——易卜生以一部三幕剧将女性的独立与解放写进了世界文学的议程。", gradient: "from-blue-400 via-white to-red-500" },
  { title: "变形记（节选）", author: "卡夫卡", level: "high", grade: "必修下册", type: "课文", description: "格里高尔·萨姆沙在一个早晨醒来发现自己变成了一只巨大的甲虫——卡夫卡以最荒诞的设定写尽了现代人的异化与孤独。", gradient: "from-brown-600 via-gray-700 to-black" },
  { title: "装在套子里的人", author: "契诃夫", level: "high", grade: "必修下册", type: "课文", description: "别里科夫把自己包裹在'套子'里——契诃夫以漫画式的笔触塑造了一个被恐惧和规矩吞噬的灵魂。", gradient: "from-gray-600 via-green-400 to-black" },
  // 古典戏剧
  { title: "窦娥冤（节选）", author: "关汉卿", level: "high", grade: "必修下册", type: "课文", description: "'地也，你不分好歹何为地！天也，你错勘贤愚枉做天！'——窦娥的控诉是中国古典文学中对不公最激烈的反抗。", gradient: "from-red-800 via-black to-white" },
  // 古文经典
  { title: "陈情表", author: "李密", level: "high", grade: "选择性必修下册", type: "课文", description: "李密以一篇奏表婉拒晋武帝的征召——'臣无祖母，无以至今日；祖母无臣，无以终余年。'以血泪之辞写尽了忠孝不能两全的千古困境。", gradient: "from-red-600 via-amber-400 to-white" },
  { title: "兰亭集序", author: "王羲之", level: "high", grade: "选择性必修下册", type: "课文", description: "永和九年暮春之初的兰亭雅集——王羲之以天下第一行书的笔墨，在生命的欢愉中看见了死亡将至的悲凉。", gradient: "from-black via-white to-black" },
  { title: "过秦论", author: "贾谊", level: "high", grade: "选择性必修中册", type: "课文", description: "'仁义不施而攻守之势异也。'——贾谊以气贯长虹的雄辩分析了大秦帝国兴亡的深层原因。", gradient: "from-red-700 via-gold-400 to-black" },
  // 现代散文和诗歌
  { title: "故都的秋", author: "郁达夫", level: "high", grade: "必修上册", type: "课文", description: "'秋天，无论在什么地方的秋天，总是好的；可是啊，北国的秋，却特别地来得清，来得静，来得悲凉。'——郁达夫以最敏锐的感觉捕捉了北平之秋的全部韵味。", gradient: "from-amber-500 via-red-400 to-gray-500" },
  { title: "我与地坛（节选）", author: "史铁生", level: "high", grade: "必修上册", type: "课文", description: "在轮椅上的十五年里，史铁生在地坛的每一棵树、每一缕风中思考着生与死的终极命题——这是中国当代散文最深刻的精神笔记。", gradient: "from-gray-700 via-green-500 to-amber-400" },
  { title: "再别康桥", author: "徐志摩", level: "high", grade: "选择性必修下册", type: "课文", description: "'轻轻的我走了，正如我轻轻的来；我轻轻的招手，作别西天的云彩。'——徐志摩以最轻盈的诗句创造了一个关于离别的水恒意象。", gradient: "from-blue-400 via-white to-gold-300" },
  { title: "大堰河——我的保姆", author: "艾青", level: "high", grade: "选择性必修下册", type: "课文", description: "艾青在狱中怀念他的乳母大堰河——以最朴素的诗句为一个被侮辱与被损害的农村妇女立下了一座诗的丰碑。", gradient: "from-gray-600 via-green-500 to-black" },
];

import { newTextbookMappings } from "./works/textbook-expansion";

/* ========== 辅助函数 ========== */

export function getTextbookWorksByLevel(level: TextbookLevel): TextbookWork[] {
  const base = level === "primary" ? primaryWorks : level === "middle" ? middleWorks : highWorks;
  const extra = newTextbookMappings.filter((m) => m.level === level);
  return [...base, ...extra];
}

export function getTextbookLevelInfo(slug: TextbookLevel): TextbookLevelInfo | undefined {
  return textbookLevels.find((l) => l.slug === slug);
}

export function getTextbookStats() {
  const all = [
    ...primaryWorks, ...middleWorks, ...highWorks, ...newTextbookMappings,
  ];
  return {
    primary: primaryWorks.length + newTextbookMappings.filter((m) => m.level === "primary").length,
    middle: middleWorks.length + newTextbookMappings.filter((m) => m.level === "middle").length,
    high: highWorks.length + newTextbookMappings.filter((m) => m.level === "high").length,
    total: all.length,
  };
}
