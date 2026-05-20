// ================================================================
// 教材扩展第二弹 — 补全所有教材条目对应的Work详情页
// 名著导读/外国文学/古文经典/现代诗歌 等全部补全
// ================================================================

import type { Work } from "../data";
import type { TextbookWork } from "../textbook-data";
type W = Work;

// ===== 小学 名著/外国/科普 =====
export const tbPrimaryFill: W[] = [
  { id: "tb-sell-matches", title: "卖火柴的小女孩", titleEn: "The Little Match Girl", author: "安徒生", country: "丹麦", flag: "🇩🇰", continent: "europe", era: "近代 (1700—1900)", genre: ["民间故事"], themes: ["社会", "心理"], year: 1845, excerpt: "她的一双小手几乎冻僵了。她终于抽出了一根火柴，在墙上擦燃了。火柴燃起来了，冒出火焰来了！她把小手拢在火焰上。多么温暖多么明亮的火焰啊——简直像一支小小的蜡烛。", gradient: "from-red-400 via-orange-300 to-yellow-200" },
  { id: "tb-crusoe", title: "鲁滨孙漂流记", titleEn: "Robinson Crusoe", author: "丹尼尔·笛福", country: "英国", flag: "🇬🇧", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["冒险", "自然", "哲学"], year: 1719, excerpt: "一六五九年九月三十日，我，可怜而不幸的鲁滨孙·克罗索，在海面上遇到了一场可怕的风暴。在这场灾难中，我流落到这个荒凉不幸的岛上。", gradient: "from-blue-600 via-teal-500 to-amber-400" },
  { id: "tb-tom-sawyer", title: "汤姆·索亚历险记", titleEn: "The Adventures of Tom Sawyer", author: "马克·吐温", country: "美国", flag: "🇺🇸", continent: "americas", era: "近代 (1700—1900)", genre: ["小说"], themes: ["冒险", "社会"], year: 1876, excerpt: "汤姆出现在人行道上，手里提着一桶白灰浆，拿着一把长柄刷子。他打量了一下围墙，满心的欢乐一扫而光，一阵深沉的忧郁从心底升起。", gradient: "from-blue-500 via-green-400 to-yellow-400" },
  { id: "tb-wilde-giant", title: "巨人的花园", titleEn: "The Selfish Giant", author: "奥斯卡·王尔德", country: "英国", flag: "🇬🇧", continent: "europe", era: "近代 (1700—1900)", genre: ["民间故事"], themes: ["哲学", "自然"], year: 1888, excerpt: "每天下午，孩子们放学以后，总喜欢到巨人的花园里去玩。这是一个可爱的大花园，长满了柔嫩的青草。草丛中到处露出星星似的美丽花朵。", gradient: "from-green-500 via-pink-300 to-gold-400" },
  { id: "tb-wilde-nightingale", title: "快乐王子", titleEn: "The Happy Prince", author: "奥斯卡·王尔德", country: "英国", flag: "🇬🇧", continent: "europe", era: "近代 (1700—1900)", genre: ["民间故事"], themes: ["社会", "哲学"], year: 1888, excerpt: "快乐王子的雕像高高地耸立在城市上空。他满身贴着薄薄的纯金叶子，一对晶莹的蓝宝石做成他的眼睛，一只大的红宝石嵌在他的剑柄上，灿灿地发着红光。", gradient: "from-blue-500 via-gold-400 to-red-400" },
  { id: "tb-lin-qingxuan", title: "和时间赛跑", titleEn: "Racing Against Time", author: "林清玄", country: "中国（台湾）", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["哲学", "心理"], year: 1985, excerpt: "读小学的时候，我的外祖母过世了。那哀痛的日子持续了很久，爸爸妈妈也不知道如何安慰我。他们知道与其欺骗我说外祖母睡着了，还不如对我说实话。", gradient: "from-amber-300 via-white to-blue-300" },
  { id: "tb-zhuge-liang", title: "诫子书", titleEn: "Letter to My Son", author: "诸葛亮", country: "中国（三国）", flag: "🇨🇳", continent: "asia", era: "古代 (—500)", genre: ["散文/随笔"], themes: ["哲学"], year: 234, excerpt: "夫君子之行，静以修身，俭以养德。非淡泊无以明志，非宁静无以致远。夫学须静也，才须学也，非学无以广才，非志无以成学。", gradient: "from-amber-600 via-gold-400 to-red-500" },
];

// ===== 初中 名著导读 整本书 =====
export const tbMiddleClassics: W[] = [
  { id: "tb-zhaohuaxishi", title: "朝花夕拾", titleEn: "Dawn Blossoms Plucked at Dusk", author: "鲁迅", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["社会", "心理"], year: 1928, excerpt: "我常想在纷扰中寻出一点闲静来，然而委实不容易。目前是这么离奇，心里是这么芜杂。一个人做到只剩了回忆的时候，生涯大概总要算是无聊了罢……", gradient: "from-gray-700 via-amber-500 to-blue-400" },
  { id: "tb-luotuoxiangzi", title: "骆驼祥子", titleEn: "Rickshaw Boy", author: "老舍", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "心理"], year: 1936, excerpt: "他没有什么模样，使他可爱的是脸上的精神。头不很大，圆眼，肉鼻子，两条眉很短很粗，头上永远剃得发亮。他确乎有点像一棵树，坚壮、沉默，而又有生气。", gradient: "from-gray-700 via-yellow-500 to-red-500" },
  { id: "tb-haidiliangwanli", title: "海底两万里", titleEn: "Twenty Thousand Leagues Under the Sea", author: "儒勒·凡尔纳", country: "法国", flag: "🇫🇷", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["冒险", "自然"], year: 1870, excerpt: "一八六六年，发生了一件离奇而无法解释的怪事。好几艘船在海上遇见了'一个庞然大物'——一个很长的物体，形状很像纺锤，时而发出磷光。", gradient: "from-blue-800 via-cyan-600 to-teal-400" },
  { id: "tb-hongxing", title: "红星照耀中国", titleEn: "Red Star Over China", author: "埃德加·斯诺", country: "美国", flag: "🇺🇸", continent: "americas", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["历史", "社会"], year: 1937, excerpt: "我在中国的七年中间，关于中国红军、苏维埃和共产主义运动，人们提出过很多很多问题。热心的党人是能够向你提供一套现成的答案的——可是这些答案始终很难令人满意。", gradient: "from-red-700 via-gold-400 to-red-600" },
  { id: "tb-kunchongji", title: "昆虫记", titleEn: "Fabre's Book of Insects", author: "法布尔", country: "法国", flag: "🇫🇷", continent: "europe", era: "近代 (1700—1900)", genre: ["散文/随笔"], themes: ["自然", "哲学"], year: 1879, excerpt: "蝉与我比邻相守已有十五年了。每年夏天，它们总在我的窗前歌唱。在雄蝉的胸部，紧靠大腿后面，有两块很宽的半圆形的发音器官。", gradient: "from-green-600 via-amber-400 to-brown-400" },
  { id: "tb-gangtie", title: "钢铁是怎样炼成的", titleEn: "How the Steel Was Tempered", author: "奥斯特洛夫斯基", country: "苏联", flag: "🇷🇺", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["战争", "社会", "心理"], year: 1934, excerpt: "人最宝贵的东西是生命。生命对人来说只有一次。因此，人的一生应当这样度过：当他回首往事时，不因虚度年华而悔恨，也不因碌碌无为而羞愧。", gradient: "from-gray-700 via-red-600 to-gold-400" },
  { id: "tb-aishi-poetry", title: "艾青诗选", titleEn: "Selected Poems of Ai Qing", author: "艾青", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["诗歌"], themes: ["战争", "社会", "自然"], year: 1979, excerpt: "假如我是一只鸟，我也应该用嘶哑的喉咙歌唱：这被暴风雨所打击着的土地，这永远汹涌着我们的悲愤的河流，这无止息地吹刮着的激怒的风……", gradient: "from-blue-600 via-red-500 to-black" },
  { id: "tb-rulinwaishi", title: "儒林外史", titleEn: "The Scholars", author: "吴敬梓", country: "中国", flag: "🇨🇳", continent: "asia", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "历史"], year: 1750, excerpt: "人生南北多歧路，将相神仙，也要凡人做。百代兴亡朝复暮，江风吹倒前朝树。功名富贵无凭据，费尽心情，总把流光误。", gradient: "from-stone-600 via-amber-500 to-red-400" },
  { id: "tb-jane-eyre", title: "简·爱", titleEn: "Jane Eyre", author: "夏洛蒂·勃朗特", country: "英国", flag: "🇬🇧", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "社会", "心理"], year: 1847, excerpt: "你以为，因为我穷、低微、不美、矮小，我就没有灵魂，没有心吗？你想错了！我的灵魂跟你的一样，我的心也跟你的完全一样！", gradient: "from-gray-600 via-purple-400 to-red-400" },
];

// ===== 初中 外国文学 =====
export const tbMiddleForeign: W[] = [
  { id: "tb-last-class", title: "最后一课", titleEn: "The Last Lesson", author: "阿尔丰斯·都德", country: "法国", flag: "🇫🇷", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["战争", "社会"], year: 1873, excerpt: "那天早晨上学，我去得很晚，心里很怕韩麦尔先生骂我。他说过要问我们分词，可是我连一个字也说不上来。我想就别上学了，到野外去玩玩吧。", gradient: "from-blue-500 via-red-400 to-white" },
  { id: "tb-mopassant-uncle", title: "我的叔叔于勒", titleEn: "My Uncle Jules", author: "莫泊桑", country: "法国", flag: "🇫🇷", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "心理"], year: 1883, excerpt: "一个白胡子穷老头儿向我们乞讨。我给了他十个铜子。父亲大吃一惊，瞪了我一眼。母亲更是气呼呼地说：'你疯了吗？把十个铜子给这个无赖！'", gradient: "from-blue-500 via-gray-400 to-amber-300" },
  { id: "tb-chekhov-chameleon", title: "变色龙", titleEn: "The Chameleon", author: "契诃夫", country: "俄国", flag: "🇷🇺", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "心理"], year: 1884, excerpt: "巡官奥楚蔑洛夫穿着新的军大衣，手里拿着一个小包，穿过集市的广场。他身后跟着一个红头发的巡警，端着一个筛子，里面盛满了没收来的醋栗。", gradient: "from-green-600 via-yellow-300 to-red-400" },
  { id: "tb-gorky-petrel", title: "海燕", titleEn: "The Song of the Stormy Petrel", author: "高尔基", country: "苏联", flag: "🇷🇺", continent: "europe", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然", "社会", "战争"], year: 1901, excerpt: "在苍茫的大海上，狂风卷集着乌云。在乌云和大海之间，海燕像黑色的闪电，在高傲地飞翔。一会儿翅膀碰着波浪，一会儿箭一般地直冲向乌云。", gradient: "from-gray-700 via-blue-500 to-white" },
  { id: "tb-shakespeare-venice", title: "威尼斯商人", titleEn: "The Merchant of Venice", author: "莎士比亚", country: "英国", flag: "🇬🇧", continent: "europe", era: "文艺复兴 (1500—1700)", genre: ["戏剧"], themes: ["社会", "哲学", "爱情"], year: 1598, excerpt: "安东尼奥是一位威尼斯的商人。他的朋友们说他最近有些忧愁，但他自己也不知道原因。巴萨尼奥是他最好的朋友，正需要一笔钱去追求贝尔蒙特的鲍西娅。", gradient: "from-purple-600 via-gold-400 to-red-600" },
];

// ===== 初中 现代诗歌/散文 =====
export const tbMiddlePoetry: W[] = [
  { id: "tb-yuguangzhong", title: "乡愁", titleEn: "Nostalgia", author: "余光中", country: "中国（台湾）", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["诗歌"], themes: ["心理", "历史"], year: 1972, excerpt: "小时候，乡愁是一枚小小的邮票，我在这头，母亲在那头。长大后，乡愁是一张窄窄的船票，我在这头，新娘在那头。后来啊，乡愁是一方矮矮的坟墓，我在外头，母亲在里头。", gradient: "from-blue-400 via-white to-red-500" },
  { id: "tb-aiqing-land", title: "我爱这土地", titleEn: "I Love This Land", author: "艾青", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["诗歌"], themes: ["战争", "自然", "社会"], year: 1938, excerpt: "假如我是一只鸟，我也应该用嘶哑的喉咙歌唱：这被暴风雨所打击着的土地，这永远汹涌着我们的悲愤的河流……然后我死了，连羽毛也腐烂在土地里面。为什么我的眼里常含泪水？因为我对这土地爱得深沉……", gradient: "from-gray-700 via-red-500 to-black" },
  { id: "tb-shuting-motherland", title: "祖国啊，我亲爱的祖国", titleEn: "My Dear Motherland", author: "舒婷", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["诗歌"], themes: ["历史", "社会"], year: 1979, excerpt: "我是你河边上破旧的老水车，数百年来纺着疲惫的歌；我是你额上熏黑的矿灯，照你在历史的隧洞里蜗行摸索；我是干瘪的稻穗，是失修的路基，是淤滩上的驳船……", gradient: "from-red-700 via-gold-400 to-red-600" },
];

// ===== 初中+高中 古典名篇 =====
export const tbClassical: W[] = [
  { id: "tb-taohuayuan", title: "桃花源记", titleEn: "The Peach Blossom Spring", author: "陶渊明", country: "中国（东晋）", flag: "🇨🇳", continent: "asia", era: "古代 (—500)", genre: ["散文/随笔"], themes: ["哲学", "自然", "社会"], year: 421, excerpt: "晋太元中，武陵人捕鱼为业。缘溪行，忘路之远近。忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷。渔人甚异之，复前行，欲穷其林。", gradient: "from-pink-400 via-green-300 to-amber-300" },
  { id: "tb-yueyanglou", title: "岳阳楼记", titleEn: "On Yueyang Tower", author: "范仲淹", country: "中国（北宋）", flag: "🇨🇳", continent: "asia", era: "中世纪 (500—1500)", genre: ["散文/随笔"], themes: ["哲学", "社会", "自然"], year: 1046, excerpt: "庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。属予作文以记之。", gradient: "from-blue-500 via-white to-red-500" },
  { id: "tb-zuiwengting", title: "醉翁亭记", titleEn: "The Pavilion of the Old Drunkard", author: "欧阳修", country: "中国（北宋）", flag: "🇨🇳", continent: "asia", era: "中世纪 (500—1500)", genre: ["散文/随笔"], themes: ["自然", "哲学", "社会"], year: 1046, excerpt: "环滁皆山也。其西南诸峰，林壑尤美。望之蔚然而深秀者，琅琊也。山行六七里，渐闻水声潺潺，而泻出于两峰之间者，酿泉也。峰回路转，有亭翼然临于泉上者，醉翁亭也。", gradient: "from-green-600 via-amber-400 to-blue-400" },
  { id: "tb-chibifu", title: "赤壁赋", titleEn: "The Red Cliff Rhapsody", author: "苏轼", country: "中国（北宋）", flag: "🇨🇳", continent: "asia", era: "中世纪 (500—1500)", genre: ["散文/随笔"], themes: ["哲学", "自然"], year: 1082, excerpt: "壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。", gradient: "from-blue-500 via-white to-amber-400" },
  { id: "tb-chushibiao", title: "出师表", titleEn: "Memorial on Sending Out the Troops", author: "诸葛亮", country: "中国（三国）", flag: "🇨🇳", continent: "asia", era: "古代 (—500)", genre: ["散文/随笔"], themes: ["战争", "历史", "哲学"], year: 227, excerpt: "先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。", gradient: "from-red-800 via-gold-500 to-amber-400" },
  { id: "tb-chenqingshi", title: "陈情表", titleEn: "Memorial of My Affection", author: "李密", country: "中国（西晋）", flag: "🇨🇳", continent: "asia", era: "古代 (—500)", genre: ["散文/随笔"], themes: ["哲学", "社会", "心理"], year: 267, excerpt: "臣密言：臣以险衅，夙遭闵凶。生孩六月，慈父见背；行年四岁，舅夺母志。祖母刘愍臣孤弱，躬亲抚养。臣少多疾病，九岁不行……", gradient: "from-red-600 via-amber-400 to-white" },
  { id: "tb-lantingxu", title: "兰亭集序", titleEn: "Preface to the Orchid Pavilion", author: "王羲之", country: "中国（东晋）", flag: "🇨🇳", continent: "asia", era: "古代 (—500)", genre: ["散文/随笔"], themes: ["哲学", "自然"], year: 353, excerpt: "永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右。", gradient: "from-black via-white to-black" },
  { id: "tb-afanggongfu", title: "阿房宫赋", titleEn: "The Epang Palace Rhapsody", author: "杜牧", country: "中国（唐）", flag: "🇨🇳", continent: "asia", era: "中世纪 (500—1500)", genre: ["散文/随笔"], themes: ["历史", "哲学"], year: 825, excerpt: "六王毕，四海一。蜀山兀，阿房出。覆压三百余里，隔离天日。骊山北构而西折，直走咸阳。二川溶溶，流入宫墙。五步一楼，十步一阁。", gradient: "from-red-700 via-gold-500 to-black" },
  { id: "tb-guoguoqinlun", title: "过秦论", titleEn: "On the Faults of Qin", author: "贾谊", country: "中国（西汉）", flag: "🇨🇳", continent: "asia", era: "古代 (—500)", genre: ["散文/随笔"], themes: ["历史", "哲学", "战争"], year: -180, excerpt: "秦孝公据崤函之固，拥雍州之地，君臣固守以窥周室，有席卷天下，包举宇内，囊括四海之意，并吞八荒之心。当是时也，商君佐之，内立法度，务耕织……", gradient: "from-red-700 via-gold-400 to-black" },
];

// ===== 高中 外国文学/戏剧 =====
export const tbHighForeign: W[] = [
  { id: "tb-david-copperfield", title: "大卫·科波菲尔", titleEn: "David Copperfield", author: "查尔斯·狄更斯", country: "英国", flag: "🇬🇧", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "心理", "冒险"], year: 1850, excerpt: "我是否将成为我自己生命中的英雄，或者这个位置会被别人占据——这些篇章将予以揭示。我从我生命的开端开始我的记录，我出生于一个星期五的午夜十二点。", gradient: "from-blue-600 via-red-400 to-amber-400" },
  { id: "tb-resurrection", title: "复活", titleEn: "Resurrection", author: "列夫·托尔斯泰", country: "俄国", flag: "🇷🇺", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "心理", "哲学"], year: 1899, excerpt: "尽管好几十万人拥挤在一块小小的土地上，用尽力气毁坏这块土地，把土地的面目弄得一塌糊涂——可是春天依旧是春天，甚至在城里也是春天。", gradient: "from-red-700 via-gold-400 to-white" },
  { id: "tb-dolls-house", title: "玩偶之家", titleEn: "A Doll's House", author: "亨利克·易卜生", country: "挪威", flag: "🇳🇴", continent: "europe", era: "近代 (1700—1900)", genre: ["戏剧"], themes: ["社会", "爱情", "心理"], year: 1879, excerpt: "海尔茂：'首先你是一个妻子和一个母亲。'娜拉：'我不再相信那些了。我相信首先我是一个人，跟你一样的人——或者至少要努力成为一个人。'", gradient: "from-blue-400 via-white to-red-500" },
  { id: "tb-man-in-case", title: "装在套子里的人", titleEn: "The Man in a Case", author: "契诃夫", country: "俄国", flag: "🇷🇺", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "心理"], year: 1898, excerpt: "别里科夫把他的思想也极力藏在套子里。只有政府的告示和报纸上的文章，其中写着禁止什么事情，他才觉得一清二楚。", gradient: "from-gray-600 via-green-400 to-black" },
  { id: "tb-doueyuan", title: "窦娥冤", titleEn: "The Injustice to Dou E", author: "关汉卿", country: "中国（元）", flag: "🇨🇳", continent: "asia", era: "中世纪 (500—1500)", genre: ["戏剧"], themes: ["社会", "哲学"], year: 1291, excerpt: "地也，你不分好歹何为地！天也，你错勘贤愚枉做天！哎，只落得两泪涟涟。", gradient: "from-red-800 via-black to-white" },
];

// ===== 高中 现代名著 =====
export const tbHighModern: W[] = [
  { id: "tb-xiangtu", title: "乡土中国", titleEn: "From the Soil", author: "费孝通", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["社会", "哲学"], year: 1947, excerpt: "从基层上看去，中国社会是乡土性的。我说中国社会的基层是乡土性的，那是因为我考虑到从这基层上曾长出一层比较上和乡土基层不完全相同的社会。", gradient: "from-green-600 via-brown-500 to-amber-400" },
  { id: "tb-leiyu", title: "雷雨", titleEn: "Thunderstorm", author: "曹禺", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["戏剧"], themes: ["社会", "爱情", "心理"], year: 1934, excerpt: "午饭后，天气更阴沉，更郁热。低沉潮湿的空气，使人异常烦躁。周朴园点着一支吕宋烟，向客厅走去。他想一个人安静地待一会儿。", gradient: "from-purple-800 via-red-600 to-black" },
  { id: "tb-chaguan", title: "茶馆", titleEn: "Teahouse", author: "老舍", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["戏剧"], themes: ["社会", "历史"], year: 1957, excerpt: "这种大茶馆现在已经不见了。在几十年前，每城都起码有一处。这里卖茶，也卖简单的点心与菜饭。玩鸟的人们，每天在遛够了画眉、黄鸟等之后，要到这里歇歇腿，喝喝茶。", gradient: "from-amber-600 via-red-500 to-black" },
  { id: "tb-biancheng", title: "边城", titleEn: "Border Town", author: "沈从文", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["爱情", "自然", "社会"], year: 1934, excerpt: "由四川过湖南去，靠东有一条官路。这官路将近湘西边境到了一个地方名为'茶峒'的小山城时，有一小溪，溪边有座白色小塔，塔下住了一户单独的人家。这人家只一个老人，一个女孩子，一只黄狗。", gradient: "from-green-500 via-blue-300 to-white" },
  { id: "tb-hehuadian", title: "荷花淀", titleEn: "Lotus Creek", author: "孙犁", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["战争", "自然", "爱情"], year: 1945, excerpt: "月亮升起来，院子里凉爽得很，干净得很。白天破好的苇眉子潮润润的，正好编席。女人坐在小院当中，手指上缠绞着柔滑修长的苇眉子。苇眉子又薄又细，在她怀里跳跃着。", gradient: "from-green-500 via-white to-pink-300" },
  { id: "tb-zmb-biekangqiao", title: "再别康桥", titleEn: "Saying Goodbye to Cambridge Again", author: "徐志摩", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["诗歌"], themes: ["自然", "爱情", "心理"], year: 1928, excerpt: "轻轻的我走了，正如我轻轻的来；我轻轻的招手，作别西天的云彩。那河畔的金柳，是夕阳中的新娘；波光里的艳影，在我的心头荡漾。", gradient: "from-blue-400 via-white to-gold-300" },
  { id: "tb-dayanhe", title: "大堰河——我的保姆", titleEn: "Dayanhe — My Wet Nurse", author: "艾青", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["诗歌"], themes: ["社会", "心理"], year: 1933, excerpt: "大堰河，是我的保姆。她的名字就是生她的村庄的名字，她是童养媳，大堰河，是我的保姆。我是地主的儿子；也是吃了大堰河的奶而长大了的大堰河的儿子。", gradient: "from-gray-600 via-green-500 to-black" },
];

// ===== 全部映射表 =====
export const textbookMappings2: TextbookWork[] = [
  // 小学 填充
  { workId: "tb-sell-matches", title: "卖火柴的小女孩", author: "安徒生", level: "primary", grade: "六年级下册", type: "课文", gradient: "from-red-400 via-orange-300 to-yellow-200" },
  { workId: "tb-crusoe", title: "鲁滨孙漂流记", author: "笛福", level: "primary", grade: "六年级下册", type: "课文", gradient: "from-blue-600 via-teal-500 to-amber-400" },
  { workId: "tb-tom-sawyer", title: "汤姆·索亚历险记", author: "马克·吐温", level: "primary", grade: "六年级下册", type: "课文", gradient: "from-blue-500 via-green-400 to-yellow-400" },
  { workId: "tb-wilde-giant", title: "巨人的花园", author: "王尔德", level: "primary", grade: "四年级上册", type: "课文", gradient: "from-green-500 via-pink-300 to-gold-400" },
  { workId: "tb-lin-qingxuan", title: "和时间赛跑", author: "林清玄", level: "primary", grade: "三年级下册", type: "课文", gradient: "from-amber-300 via-white to-blue-300" },
  { workId: "tb-zhuge-liang", title: "诫子书", author: "诸葛亮", level: "primary", grade: "四年级下册", type: "古诗词诵读", gradient: "from-amber-600 via-gold-400 to-red-500" },
  // 初中 名著导读
  { workId: "tb-zhaohuaxishi", title: "朝花夕拾", author: "鲁迅", level: "middle", grade: "七年级上册", type: "名著导读", gradient: "from-gray-700 via-amber-500 to-blue-400" },
  { workId: "tb-luotuoxiangzi", title: "骆驼祥子", author: "老舍", level: "middle", grade: "七年级下册", type: "名著导读", gradient: "from-gray-700 via-yellow-500 to-red-500" },
  { workId: "tb-haidiliangwanli", title: "海底两万里", author: "儒勒·凡尔纳", level: "middle", grade: "七年级下册", type: "名著导读", gradient: "from-blue-800 via-cyan-600 to-teal-400" },
  { workId: "tb-hongxing", title: "红星照耀中国", author: "斯诺", level: "middle", grade: "八年级上册", type: "名著导读", gradient: "from-red-700 via-gold-400 to-red-600" },
  { workId: "tb-kunchongji", title: "昆虫记", author: "法布尔", level: "middle", grade: "八年级上册", type: "名著导读", gradient: "from-green-600 via-amber-400 to-brown-400" },
  { workId: "tb-gangtie", title: "钢铁是怎样炼成的", author: "奥斯特洛夫斯基", level: "middle", grade: "八年级下册", type: "名著导读", gradient: "from-gray-700 via-red-600 to-gold-400" },
  { workId: "tb-aishi-poetry", title: "艾青诗选", author: "艾青", level: "middle", grade: "九年级上册", type: "名著导读", gradient: "from-blue-600 via-red-500 to-black" },
  { workId: "tb-rulinwaishi", title: "儒林外史", author: "吴敬梓", level: "middle", grade: "九年级下册", type: "名著导读", gradient: "from-stone-600 via-amber-500 to-red-400" },
  { workId: "tb-jane-eyre", title: "简·爱", author: "夏洛蒂·勃朗特", level: "middle", grade: "九年级下册", type: "名著导读", gradient: "from-gray-600 via-purple-400 to-red-400" },
  // 初中 外国文学
  { workId: "tb-last-class", title: "最后一课", author: "都德", level: "middle", grade: "七年级下册", type: "课文", gradient: "from-blue-500 via-red-400 to-white" },
  { workId: "tb-mopassant-uncle", title: "我的叔叔于勒", author: "莫泊桑", level: "middle", grade: "九年级上册", type: "课文", gradient: "from-blue-500 via-gray-400 to-amber-300" },
  { workId: "tb-chekhov-chameleon", title: "变色龙", author: "契诃夫", level: "middle", grade: "九年级下册", type: "课文", gradient: "from-green-600 via-yellow-300 to-red-400" },
  { workId: "tb-gorky-petrel", title: "海燕", author: "高尔基", level: "middle", grade: "九年级下册", type: "课文", gradient: "from-gray-700 via-blue-500 to-white" },
  { workId: "tb-shakespeare-venice", title: "威尼斯商人", author: "莎士比亚", level: "middle", grade: "九年级下册", type: "课文", gradient: "from-purple-600 via-gold-400 to-red-600" },
  // 初中 现代诗歌/散文
  { workId: "tb-yuguangzhong", title: "乡愁", author: "余光中", level: "middle", grade: "九年级上册", type: "课文", gradient: "from-blue-400 via-white to-red-500" },
  { workId: "tb-aiqing-land", title: "我爱这土地", author: "艾青", level: "middle", grade: "九年级上册", type: "课文", gradient: "from-gray-700 via-red-500 to-black" },
  { workId: "tb-shuting-motherland", title: "祖国啊，我亲爱的祖国", author: "舒婷", level: "middle", grade: "九年级下册", type: "课文", gradient: "from-red-700 via-gold-400 to-red-600" },
  // 古典名篇
  { workId: "tb-taohuayuan", title: "桃花源记", author: "陶渊明", level: "middle", grade: "八年级下册", type: "课文", gradient: "from-pink-400 via-green-300 to-amber-300" },
  { workId: "tb-yueyanglou", title: "岳阳楼记", author: "范仲淹", level: "middle", grade: "九年级上册", type: "课文", gradient: "from-blue-500 via-white to-red-500" },
  { workId: "tb-zuiwengting", title: "醉翁亭记", author: "欧阳修", level: "middle", grade: "九年级上册", type: "课文", gradient: "from-green-600 via-amber-400 to-blue-400" },
  { workId: "tb-chibifu", title: "赤壁赋", author: "苏轼", level: "high", grade: "必修上册", type: "课文", gradient: "from-blue-500 via-white to-amber-400" },
  { workId: "tb-chushibiao", title: "出师表", author: "诸葛亮", level: "middle", grade: "九年级下册", type: "课文", gradient: "from-red-800 via-gold-500 to-amber-400" },
  { workId: "tb-chenqingshi", title: "陈情表", author: "李密", level: "high", grade: "选择性必修下册", type: "课文", gradient: "from-red-600 via-amber-400 to-white" },
  { workId: "tb-lantingxu", title: "兰亭集序", author: "王羲之", level: "high", grade: "选择性必修下册", type: "课文", gradient: "from-black via-white to-black" },
  { workId: "tb-afanggongfu", title: "阿房宫赋", author: "杜牧", level: "high", grade: "必修下册", type: "课文", gradient: "from-red-700 via-gold-500 to-black" },
  { workId: "tb-guoguoqinlun", title: "过秦论", author: "贾谊", level: "high", grade: "选择性必修中册", type: "课文", gradient: "from-red-700 via-gold-400 to-black" },
  // 高中 外国文学/戏剧
  { workId: "tb-david-copperfield", title: "大卫·科波菲尔", author: "狄更斯", level: "high", grade: "选择性必修上册", type: "课文", gradient: "from-blue-600 via-red-400 to-amber-400" },
  { workId: "tb-resurrection", title: "复活", author: "托尔斯泰", level: "high", grade: "选择性必修上册", type: "课文", gradient: "from-red-700 via-gold-400 to-white" },
  { workId: "tb-dolls-house", title: "玩偶之家", author: "易卜生", level: "high", grade: "选择性必修中册", type: "课文", gradient: "from-blue-400 via-white to-red-500" },
  { workId: "tb-man-in-case", title: "装在套子里的人", author: "契诃夫", level: "high", grade: "必修下册", type: "课文", gradient: "from-gray-600 via-green-400 to-black" },
  { workId: "tb-doueyuan", title: "窦娥冤", author: "关汉卿", level: "high", grade: "必修下册", type: "课文", gradient: "from-red-800 via-black to-white" },
  // 高中 现代名著
  { workId: "tb-xiangtu", title: "乡土中国", author: "费孝通", level: "high", grade: "必修上册", type: "整本书阅读", gradient: "from-green-600 via-brown-500 to-amber-400" },
  { workId: "tb-leiyu", title: "雷雨", author: "曹禺", level: "high", grade: "必修下册", type: "课文", gradient: "from-purple-800 via-red-600 to-black" },
  { workId: "tb-chaguan", title: "茶馆", author: "老舍", level: "high", grade: "选择性必修下册", type: "课文", gradient: "from-amber-600 via-red-500 to-black" },
  { workId: "tb-biancheng", title: "边城", author: "沈从文", level: "high", grade: "选择性必修下册", type: "课文", gradient: "from-green-500 via-blue-300 to-white" },
  { workId: "tb-hehuadian", title: "荷花淀", author: "孙犁", level: "high", grade: "选择性必修中册", type: "课文", gradient: "from-green-500 via-white to-pink-300" },
  { workId: "tb-zmb-biekangqiao", title: "再别康桥", author: "徐志摩", level: "high", grade: "选择性必修下册", type: "课文", gradient: "from-blue-400 via-white to-gold-300" },
  { workId: "tb-dayanhe", title: "大堰河——我的保姆", author: "艾青", level: "high", grade: "选择性必修下册", type: "课文", gradient: "from-gray-600 via-green-500 to-black" },
];
