// ================================================================
// 教材文学扩展 — 每篇课文都有独立详情页
// 涵盖小学12册 + 初中6册 + 高中5册中的大家文章
// 鲁迅/老舍/朱自清/巴金/冰心/叶圣陶/萧红/汪曾祺/史铁生...
// ================================================================

import type { Work } from "../data";
import type { TextbookWork } from "../textbook-data";

// ===== 鲁迅作品 (13篇覆盖全部教材) =====
export const luxunTextbookWorks: Work[] = [
  { id: "tb-luxun-1", title: "少年闰土", titleEn: "Young Runtu", author: "鲁迅", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "心理"], year: 1921, excerpt: "深蓝的天空中挂着一轮金黄的圆月，下面是海边的沙地，都种着一望无际的碧绿的西瓜。其间有一个十一二岁的少年，项带银圈，手捏一柄钢叉……", gradient: "from-blue-700 via-indigo-600 to-amber-400" },
  { id: "tb-luxun-2", title: "从百草园到三味书屋", titleEn: "From Hundred-Plant Garden to Three-Flavor Study", author: "鲁迅", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["社会", "心理"], year: 1926, excerpt: "不必说碧绿的菜畦，光滑的石井栏，高大的皂荚树，紫红的桑葚；也不必说鸣蝉在树叶里长吟，肥胖的黄蜂伏在菜花上……", gradient: "from-green-600 via-yellow-400 to-amber-500" },
  { id: "tb-luxun-3", title: "阿长与《山海经》", titleEn: "A-Chang and the Classic of Mountains and Seas", author: "鲁迅", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["社会", "心理"], year: 1926, excerpt: "哥儿，有画儿的'三哼经'，我给你买来了！长妈妈——一个粗俗而善良的保姆，以微薄的工钱满足了童年鲁迅最大的渴望。", gradient: "from-amber-400 via-red-300 to-gray-500" },
  { id: "tb-luxun-4", title: "藤野先生", titleEn: "Mr. Fujino", author: "鲁迅", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["社会", "历史"], year: 1926, excerpt: "在我所认为我师的之中，他是最使我感激、给我鼓励的一个。鲁迅回忆在日本仙台医学专门学校时的解剖学教师藤野严九郎。", gradient: "from-blue-500 via-white to-red-500" },
  { id: "tb-luxun-5", title: "故乡", titleEn: "Hometown", author: "鲁迅", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "心理"], year: 1921, excerpt: "希望是本无所谓有，无所谓无的。这正如地上的路；其实地上本没有路，走的人多了，也便成了路。", gradient: "from-gray-700 via-blue-600 to-amber-400" },
  { id: "tb-luxun-6", title: "社戏", titleEn: "Village Opera", author: "鲁迅", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会"], year: 1922, excerpt: "两岸的豆麦和河底的水草所发散出来的清香，夹杂在水气中扑面的吹来；月色便朦胧在这水气里。", gradient: "from-blue-600 via-gray-400 to-amber-300" },
  { id: "tb-luxun-7", title: "孔乙己", titleEn: "Kong Yiji", author: "鲁迅", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "心理"], year: 1919, excerpt: "孔乙己是站着喝酒而穿长衫的唯一的人。他身材很高大；青白脸色，皱纹间时常夹些伤痕；一部乱蓬蓬的花白的胡子。", gradient: "from-gray-700 via-stone-500 to-amber-400" },
  { id: "tb-luxun-8", title: "祝福", titleEn: "New Year's Sacrifice", author: "鲁迅", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "心理"], year: 1924, excerpt: "她不是鲁镇人。有一年的冬初，四叔家里要换女工，做中人的卫老婆子带她进来了——头上扎着白头绳，乌裙，蓝夹袄，月白背心……", gradient: "from-black via-red-800 to-gray-700" },
  { id: "tb-luxun-9", title: "阿Q正传", titleEn: "The True Story of Ah Q", author: "鲁迅", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "心理", "哲学"], year: 1921, excerpt: "阿Q没有家，住在未庄的土谷祠里；也没有固定的职业，只给人家做短工。但阿Q又很自尊，所有未庄的居民，全不在他眼睛里……", gradient: "from-black via-gray-700 to-amber-500" },
  { id: "tb-luxun-10", title: "记念刘和珍君", titleEn: "In Memory of Liu Hezhen", author: "鲁迅", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["历史", "社会"], year: 1926, excerpt: "真的猛士，敢于直面惨淡的人生，敢于正视淋漓的鲜血。这是怎样的哀痛者和幸福者？", gradient: "from-black via-red-700 to-white" },
];

// ===== 朱自清作品 =====
export const zhuZiqingWorks: Work[] = [
  { id: "tb-zzq-1", title: "春", titleEn: "Spring", author: "朱自清", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然"], year: 1933, excerpt: "盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。", gradient: "from-green-400 via-pink-300 to-yellow-300" },
  { id: "tb-zzq-2", title: "背影", titleEn: "The Sight of Father's Back", author: "朱自清", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["心理", "社会"], year: 1925, excerpt: "我看见他戴着黑布小帽，穿着黑布大马褂，深青布棉袍，蹒跚地走到铁道边，慢慢探身下去……他肥胖的身子向左微倾，显出努力的样子。", gradient: "from-gray-500 via-amber-300 to-orange-400" },
  { id: "tb-zzq-3", title: "荷塘月色", titleEn: "Moonlight over the Lotus Pond", author: "朱自清", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然", "哲学"], year: 1927, excerpt: "曲曲折折的荷塘上面，弥望的是田田的叶子。叶子出水很高，像亭亭的舞女的裙。月光如流水一般，静静地泻在这一片叶子和花上。", gradient: "from-blue-300 via-green-200 to-white" },
  { id: "tb-zzq-4", title: "匆匆", titleEn: "In a Hurry", author: "朱自清", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["哲学", "自然"], year: 1922, excerpt: "燕子去了，有再来的时候；杨柳枯了，有再青的时候；桃花谢了，有再开的时候。但是，聪明的，你告诉我，我们的日子为什么一去不复返呢？", gradient: "from-amber-200 via-white to-blue-200" },
  { id: "tb-zzq-5", title: "绿", titleEn: "Green", author: "朱自清", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然"], year: 1924, excerpt: "那醉人的绿呀！仿佛一张极大极大的荷叶铺着，满是奇异的绿呀。这平铺着、厚积着的绿，着实可爱。", gradient: "from-green-500 via-emerald-400 to-teal-300" },
];

// ===== 老舍作品 =====
export const laosheWorks: Work[] = [
  { id: "tb-ls-1", title: "济南的冬天", titleEn: "Winter in Jinan", author: "老舍", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然"], year: 1931, excerpt: "对于一个在北平住惯的人，像我，冬天要是不刮风，便觉得是奇迹；济南的冬天是没有风声的。一个老城，有山有水，全在天底下晒着阳光……", gradient: "from-white via-blue-100 to-gray-300" },
  { id: "tb-ls-2", title: "猫", titleEn: "Cats", author: "老舍", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然"], year: 1959, excerpt: "猫的性格实在有些古怪。说它老实吧，它的确有时候很乖。它会找个暖和的地方，成天睡大觉，无忧无虑，什么事也不过问。", gradient: "from-amber-400 via-white to-gray-400" },
  { id: "tb-ls-3", title: "母鸡", titleEn: "The Hen", author: "老舍", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然"], year: 1942, excerpt: "它负责、慈爱、勇敢、辛苦，因为它有了一群鸡雏。它伟大，因为它是鸡母亲。一个母亲必定就是一位英雄。", gradient: "from-yellow-400 via-amber-300 to-brown-400" },
  { id: "tb-ls-4", title: "草原", titleEn: "The Grassland", author: "老舍", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然", "社会"], year: 1961, excerpt: "这次，我看到了草原。那里的天比别处的更可爱，空气是那么清鲜，天空是那么明朗，使我总想高歌一曲，表示我满心的愉快。", gradient: "from-green-500 via-blue-400 to-white" },
  { id: "tb-ls-5", title: "北京的春节", titleEn: "Spring Festival in Beijing", author: "老舍", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["社会"], year: 1951, excerpt: "按照北京的老规矩，过农历的新年，差不多在腊月的初旬就开头了。在腊八那天，人家里，寺观里，都熬腊八粥。", gradient: "from-red-600 via-gold-400 to-red-600" },
];

// ===== 巴金、冰心、叶圣陶等大家 =====
export const otherMasters: Work[] = [
  // 巴金
  { id: "tb-ba-1", title: "鸟的天堂", titleEn: "The Paradise of Birds", author: "巴金", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然"], year: 1933, excerpt: "我们的船渐渐地逼近榕树了。那翠绿的颜色，明亮地照耀着我们的眼睛，似乎每一片绿叶上都有一个新的生命在颤动。这美丽的南国的树！", gradient: "from-green-600 via-teal-500 to-amber-300" },
  { id: "tb-ba-2", title: "海上日出", titleEn: "Sunrise at Sea", author: "巴金", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然"], year: 1927, excerpt: "为了看日出，我常常早起。那时天还没有大亮，周围非常清静，船上只有机器的响声。天空还是一片浅蓝，颜色很浅。", gradient: "from-red-400 via-gold-300 to-blue-300" },
  // 冰心
  { id: "tb-bx-1", title: "忆读书", titleEn: "Remembering Reading", author: "冰心", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["社会", "心理"], year: 1989, excerpt: "一谈到读书，我的话就多了！我自从会认字后不到几年，就开始读书。倒不是四岁时读母亲教给我的商务印书馆出版的国文教科书……而是七岁时开始自己读的'话说天下大势，分久必合，合久必分'的《三国演义》。", gradient: "from-white via-blue-100 to-purple-300" },
  { id: "tb-bx-2", title: "肥皂泡", titleEn: "Soap Bubbles", author: "冰心", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然", "心理"], year: 1956, excerpt: "小的时候，游戏的种类很多，其中我最爱玩的是吹肥皂泡。阴雨时节，不能到山上海边去玩，母亲就教我们在廊子上吹肥皂泡。", gradient: "from-pink-300 via-purple-200 to-blue-300" },
  // 叶圣陶
  { id: "tb-ys-1", title: "荷花", titleEn: "Lotus", author: "叶圣陶", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然"], year: 1931, excerpt: "清晨，我到公园去玩，一进门就闻到一阵清香。我赶紧往荷花池边跑去。荷花已经开了不少了。荷叶挨挨挤挤的，像一个个碧绿的大圆盘。", gradient: "from-green-400 via-pink-300 to-white" },
  { id: "tb-ys-2", title: "爬山虎的脚", titleEn: "The Feet of the Creeper", author: "叶圣陶", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然"], year: 1931, excerpt: "学校操场北边墙上满是爬山虎。我家也有爬山虎，从小院的西墙爬上去，在房顶上占了一大片地方。", gradient: "from-green-600 via-emerald-500 to-teal-400" },
  { id: "tb-ys-3", title: "记金华的双龙洞", titleEn: "The Double Dragon Caves of Jinhua", author: "叶圣陶", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然", "冒险"], year: 1957, excerpt: "在洞口抬头望，山相当高，突兀森郁，很有气势。洞口像桥洞似的，很宽。走进去，仿佛到了个大会堂，周围是石壁，头上是高高的石顶。", gradient: "from-stone-500 via-green-400 to-blue-300" },
  // 萧红
  { id: "tb-xh-1", title: "火烧云", titleEn: "Fire Clouds", author: "萧红", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然"], year: 1940, excerpt: "晚饭过后，火烧云上来了。霞光照得小孩子的脸红红的。大白狗变成红的了，红公鸡变成金的了，黑母鸡变成紫檀色的了。", gradient: "from-red-500 via-orange-400 to-yellow-300" },
  { id: "tb-xh-2", title: "祖父的园子", titleEn: "Grandfather's Garden", author: "萧红", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然", "心理"], year: 1940, excerpt: "我家有一个大花园，这花园里蜂子、蝴蝶、蜻蜓、蚂蚱，样样都有。蝴蝶有白蝴蝶、黄蝴蝶。这种蝴蝶极小，不太好看。好看的是大红蝴蝶，满身带着金粉。", gradient: "from-green-500 via-yellow-400 to-pink-300" },
  // 沈从文
  { id: "tb-scw-1", title: "腊八粥", titleEn: "Laba Porridge", author: "沈从文", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["社会"], year: 1934, excerpt: "初学喊爸爸的小孩子，会出门叫洋车了的大孩子，嘴巴上长了许多白胡胡的老孩子，提到腊八粥，谁不是嘴里就立时生出一种甜甜的腻腻的感觉呢。", gradient: "from-amber-600 via-red-400 to-brown-400" },
  // 汪曾祺
  { id: "tb-wzq-1", title: "昆明的雨", titleEn: "Rain in Kunming", author: "汪曾祺", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["自然"], year: 1984, excerpt: "我想念昆明的雨。昆明的雨季是明亮的、丰满的，使人动情的。城春草木深，孟夏草木长。昆明的雨季，是浓绿的。", gradient: "from-green-500 via-blue-300 to-white" },
  { id: "tb-wzq-2", title: "端午的鸭蛋", titleEn: "Duck Eggs at Dragon Boat Festival", author: "汪曾祺", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["社会"], year: 1981, excerpt: "我的家乡是水乡。出鸭。高邮大麻鸭是著名的鸭种。鸭多，鸭蛋也多。高邮人也善于腌鸭蛋。高邮咸鸭蛋于是出了名。", gradient: "from-white via-amber-100 to-blue-200" },
  // 杨绛
  { id: "tb-yj-1", title: "老王", titleEn: "Old Wang", author: "杨绛", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["社会", "心理"], year: 1984, excerpt: "我常坐老王的三轮。他蹬，我坐，一路上我们说着闲话。据老王自己讲：北京解放后，蹬三轮的都组织起来……", gradient: "from-gray-600 via-white to-amber-400" },
  // 史铁生
  { id: "tb-sts-1", title: "秋天的怀念", titleEn: "Autumn Memories", author: "史铁生", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["心理", "哲学"], year: 1981, excerpt: "双腿瘫痪后，我的脾气变得暴怒无常。望着望着天上北归的雁阵，我会突然把面前的玻璃砸碎……母亲就悄悄地躲出去，在我看不见的地方偷偷地听着我的动静。", gradient: "from-amber-500 via-red-400 to-gray-500" },
  { id: "tb-sts-2", title: "我与地坛", titleEn: "I and the Temple of Earth", author: "史铁生", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["哲学", "心理"], year: 1991, excerpt: "我在好几篇小说中都提到过一座废弃的古园，实际就是地坛。十五年前的一个下午，我摇着轮椅进入园中，它为一个失魂落魄的人把一切都准备好了。", gradient: "from-gray-700 via-green-500 to-amber-400" },
  // 贾平凹
  { id: "tb-jpw-1", title: "月迹", titleEn: "Traces of the Moon", author: "贾平凹", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["自然", "心理"], year: 1982, excerpt: "我们这些孩子，什么都觉得新鲜，常常又什么都不觉满足。中秋的夜里，我们在院子里盼着月亮，好久却不见出来，便坐回中堂里……", gradient: "from-blue-500 via-white to-amber-300" },
  // 冯骥才
  { id: "tb-fjc-1", title: "珍珠鸟", titleEn: "The Pearl Bird", author: "冯骥才", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["自然", "心理"], year: 1984, excerpt: "真好！朋友送我一对珍珠鸟。放在一个简易的竹条编成的笼子里，笼内还有一卷干草，那是小鸟舒适又温暖的巢。信赖，往往创造出美好的境界。", gradient: "from-white via-green-100 to-blue-200" },
  { id: "tb-fjc-2", title: "挑山工", titleEn: "The Mountain Porter", author: "冯骥才", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["社会", "哲学"], year: 1981, excerpt: "在泰山上，随处都可以碰到挑山工。他们肩上搭一根光溜溜的扁担，扁担两头的绳子挂着沉甸甸的货物。", gradient: "from-stone-600 via-amber-500 to-yellow-400" },
  // 宗璞
  { id: "tb-zp-1", title: "紫藤萝瀑布", titleEn: "The Wisteria Cascade", author: "宗璞", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["自然", "哲学"], year: 1982, excerpt: "我不由得停住了脚步。从未见过开得这样盛的藤萝，只见一片辉煌的淡紫色，像一条瀑布，从空中垂下，不见其发端，也不见其终极。", gradient: "from-purple-500 via-pink-400 to-green-300" },
  // 林海音
  { id: "tb-lhy-1", title: "窃读记", titleEn: "The Secret Reader", author: "林海音", country: "中国（台湾）", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["社会", "心理"], year: 1960, excerpt: "转过街角，看见饭店的招牌，闻见炒菜的香味，听见锅勺敲打的声音，我放慢了脚步。放学后急匆匆地从学校赶到这里，目的地可不是饭店，而是紧邻它的一家书店。", gradient: "from-amber-300 via-white to-blue-300" },
  { id: "tb-lhy-2", title: "冬阳·童年·骆驼队", titleEn: "Winter Sun, Childhood, Camel Caravan", author: "林海音", country: "中国（台湾）", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["心理", "社会"], year: 1960, excerpt: "骆驼队来了，停在我家的门前。它们排列成一长串，沉默地站着，等候人们的安排。爸爸在和他讲价钱。骆驼驮着煤，从门头沟来。", gradient: "from-amber-500 via-gold-300 to-brown-400" },
  // 许地山
  { id: "tb-xds-1", title: "落花生", titleEn: "Peanuts", author: "许地山", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["哲学", "社会"], year: 1922, excerpt: "爹爹说：'花生的好处很多，有一样最可贵：它的果实埋在地里，不像桃子、石榴、苹果那样，把鲜红嫩绿的果实高高地挂在枝头上……所以你们要像花生。'", gradient: "from-amber-600 via-yellow-500 to-brown-400" },
  // 郑振铎
  { id: "tb-ztd-1", title: "燕子", titleEn: "Swallows", author: "郑振铎", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然"], year: 1927, excerpt: "一身乌黑的羽毛，一对轻快有力的翅膀，加上剪刀似的尾巴，凑成了那样可爱的活泼的小燕子。二三月的春日里，轻风微微地吹拂着……", gradient: "from-black via-blue-400 to-white" },
  // 郭沫若
  { id: "tb-gmr-1", title: "白鹭", titleEn: "The Egret", author: "郭沫若", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然"], year: 1942, excerpt: "白鹭是一首精巧的诗。色素的配合，身段的大小，一切都很适宜。白鹤太大而嫌生硬，即如粉红的朱鹭或灰色的苍鹭，也觉得大了一些……", gradient: "from-white via-gray-200 to-amber-300" },
  { id: "tb-gmr-2", title: "天上的街市", titleEn: "The Market in the Sky", author: "郭沫若", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["诗歌"], themes: ["自然", "魔幻"], year: 1921, excerpt: "远远的街灯明了，好像闪着无数的明星。天上的明星现了，好像点着无数的街灯。我想那缥缈的空中，定然有美丽的街市。", gradient: "from-blue-600 via-purple-400 to-gold-300" },
  // 茅盾
  { id: "tb-md-1", title: "白杨礼赞", titleEn: "In Praise of the White Poplar", author: "茅盾", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然", "社会"], year: 1941, excerpt: "白杨树实在不是平凡的，我赞美白杨树！汽车在望不到边际的高原上奔驰，扑入你的视野的，是黄绿错综的一条大毯子。", gradient: "from-green-500 via-white to-blue-500" },
  // 孙犁
  { id: "tb-sl-1", title: "芦花荡", titleEn: "The Reed Marsh", author: "孙犁", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["战争", "自然"], year: 1945, excerpt: "夜晚，敌人从炮楼的小窗子里，呆望着这阴森黑暗的大苇塘，天空的星星也像浸在水里，而且要滴落下来的样子。", gradient: "from-green-500 via-white to-blue-400" },
  // 茹志鹃
  { id: "tb-rzj-1", title: "百合花", titleEn: "Lily", author: "茹志鹃", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["战争", "心理"], year: 1958, excerpt: "一九四六年的中秋。这天打海岸的部队决定晚上总攻。我们文工团创作室的几个同志，就由主攻团的团长分派到各个战斗连去帮助工作。", gradient: "from-red-500 via-white to-green-400" },
  // 郁达夫
  { id: "tb-ydf-1", title: "故都的秋", titleEn: "Autumn in the Old Capital", author: "郁达夫", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然", "心理"], year: 1934, excerpt: "秋天，无论在什么地方的秋天，总是好的；可是啊，北国的秋，却特别地来得清，来得静，来得悲凉。", gradient: "from-amber-500 via-red-400 to-gray-500" },
  // 梁实秋
  { id: "tb-lsq-1", title: "鸟", titleEn: "Birds", author: "梁实秋", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["散文/随笔"], themes: ["自然"], year: 1940, excerpt: "我爱鸟。从前我常见提笼架鸟的人，清早在街上溜达。黎明时，窗外是一片鸟啭，不是吱吱喳喳的麻雀，不是呱呱噪啼的乌鸦……", gradient: "from-green-500 via-blue-300 to-white" },
  // 刘成章
  { id: "tb-lcz-1", title: "安塞腰鼓", titleEn: "Ansai Waist Drum", author: "刘成章", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["社会"], year: 1986, excerpt: "一群茂腾腾的后生。他们的身后是一片高粱地。他们朴实得就像那片高粱。咝溜溜的南风吹动了高粱叶子，也吹动了他们的衣衫。", gradient: "from-red-700 via-amber-500 to-yellow-400" },
  // 曹文轩
  { id: "tb-cwx-1", title: "孤独之旅", titleEn: "A Lonely Journey", author: "曹文轩", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "冒险", "自然"], year: 1997, excerpt: "油麻地家底最厚实的一户人家，就是杜小康家。但它竟在一天早上，忽然一落千丈，跌落到了另一番境地里……", gradient: "from-blue-500 via-gray-400 to-green-400" },
  // 梁衡
  { id: "tb-lh-1", title: "壶口瀑布", titleEn: "Hukou Waterfall", author: "梁衡", country: "中国", flag: "🇨🇳", continent: "asia", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["自然", "哲学"], year: 1989, excerpt: "壶口在晋陕两省的边境上，我曾两次到过那里。第一次是雨季，临出发时有人告诫：这个时节看壶口最危险……", gradient: "from-yellow-600 via-red-500 to-blue-400" },
];

// ===== 更新教材Work到扩展条目映射 =====
// 新增的Work与教材课文的对应关系
export const newTextbookMappings: TextbookWork[] = [
  // 鲁迅全部教材课文
  { workId: "tb-luxun-1", title: "少年闰土", author: "鲁迅", level: "primary", grade: "六年级上册", type: "课文", gradient: "from-blue-700 via-indigo-600 to-amber-400" },
  { workId: "tb-luxun-2", title: "从百草园到三味书屋", author: "鲁迅", level: "middle", grade: "七年级上册", type: "课文", gradient: "from-green-600 via-yellow-400 to-amber-500" },
  { workId: "tb-luxun-3", title: "阿长与《山海经》", author: "鲁迅", level: "middle", grade: "七年级下册", type: "课文", gradient: "from-amber-400 via-red-300 to-gray-500" },
  { workId: "tb-luxun-4", title: "藤野先生", author: "鲁迅", level: "middle", grade: "八年级上册", type: "课文", gradient: "from-blue-500 via-white to-red-500" },
  { workId: "tb-luxun-5", title: "故乡", author: "鲁迅", level: "middle", grade: "九年级上册", type: "课文", gradient: "from-gray-700 via-blue-600 to-amber-400" },
  { workId: "tb-luxun-6", title: "社戏", author: "鲁迅", level: "middle", grade: "八年级下册", type: "课文", gradient: "from-blue-600 via-gray-400 to-amber-300" },
  { workId: "tb-luxun-7", title: "孔乙己", author: "鲁迅", level: "middle", grade: "九年级下册", type: "课文", gradient: "from-gray-700 via-stone-500 to-amber-400" },
  { workId: "tb-luxun-8", title: "祝福", author: "鲁迅", level: "high", grade: "必修下册", type: "课文", gradient: "from-black via-red-800 to-gray-700" },
  { workId: "tb-luxun-9", title: "阿Q正传", author: "鲁迅", level: "high", grade: "选择性必修下册", type: "课文", gradient: "from-black via-gray-700 to-amber-500" },
  { workId: "tb-luxun-10", title: "记念刘和珍君", author: "鲁迅", level: "high", grade: "选择性必修中册", type: "课文", gradient: "from-black via-red-700 to-white" },
  // 朱自清
  { workId: "tb-zzq-1", title: "春", author: "朱自清", level: "middle", grade: "七年级上册", type: "课文", gradient: "from-green-400 via-pink-300 to-yellow-300" },
  { workId: "tb-zzq-2", title: "背影", author: "朱自清", level: "middle", grade: "八年级上册", type: "课文", gradient: "from-gray-500 via-amber-300 to-orange-400" },
  { workId: "tb-zzq-3", title: "荷塘月色", author: "朱自清", level: "high", grade: "必修上册", type: "课文", gradient: "from-blue-300 via-green-200 to-white" },
  { workId: "tb-zzq-4", title: "匆匆", author: "朱自清", level: "primary", grade: "六年级下册", type: "课文", gradient: "from-amber-200 via-white to-blue-200" },
  { workId: "tb-zzq-5", title: "绿", author: "朱自清", level: "middle", grade: "八年级上册", type: "课文", gradient: "from-green-500 via-emerald-400 to-teal-300" },
  // 老舍
  { workId: "tb-ls-1", title: "济南的冬天", author: "老舍", level: "middle", grade: "七年级上册", type: "课文", gradient: "from-white via-blue-100 to-gray-300" },
  { workId: "tb-ls-2", title: "猫", author: "老舍", level: "primary", grade: "四年级下册", type: "课文", gradient: "from-amber-400 via-white to-gray-400" },
  { workId: "tb-ls-3", title: "母鸡", author: "老舍", level: "primary", grade: "四年级下册", type: "课文", gradient: "from-yellow-400 via-amber-300 to-brown-400" },
  { workId: "tb-ls-4", title: "草原", author: "老舍", level: "primary", grade: "六年级上册", type: "课文", gradient: "from-green-500 via-blue-400 to-white" },
  { workId: "tb-ls-5", title: "北京的春节", author: "老舍", level: "primary", grade: "六年级下册", type: "课文", gradient: "from-red-600 via-gold-400 to-red-600" },
  // 名家散文
  { workId: "tb-ba-1", title: "鸟的天堂", author: "巴金", level: "primary", grade: "四年级上册", type: "课文", gradient: "from-green-600 via-teal-500 to-amber-300" },
  { workId: "tb-ba-2", title: "海上日出", author: "巴金", level: "primary", grade: "四年级下册", type: "课文", gradient: "from-red-400 via-gold-300 to-blue-300" },
  { workId: "tb-bx-1", title: "忆读书", author: "冰心", level: "primary", grade: "五年级上册", type: "课文", gradient: "from-white via-blue-100 to-purple-300" },
  { workId: "tb-bx-2", title: "肥皂泡", author: "冰心", level: "primary", grade: "三年级下册", type: "课文", gradient: "from-pink-300 via-purple-200 to-blue-300" },
  { workId: "tb-ys-1", title: "荷花", author: "叶圣陶", level: "primary", grade: "三年级下册", type: "课文", gradient: "from-green-400 via-pink-300 to-white" },
  { workId: "tb-ys-2", title: "爬山虎的脚", author: "叶圣陶", level: "primary", grade: "四年级上册", type: "课文", gradient: "from-green-600 via-emerald-500 to-teal-400" },
  { workId: "tb-ys-3", title: "记金华的双龙洞", author: "叶圣陶", level: "primary", grade: "四年级下册", type: "课文", gradient: "from-stone-500 via-green-400 to-blue-300" },
  { workId: "tb-xh-1", title: "火烧云", author: "萧红", level: "primary", grade: "三年级下册", type: "课文", gradient: "from-red-500 via-orange-400 to-yellow-300" },
  { workId: "tb-xh-2", title: "祖父的园子", author: "萧红", level: "primary", grade: "五年级下册", type: "课文", gradient: "from-green-500 via-yellow-400 to-pink-300" },
  { workId: "tb-scw-1", title: "腊八粥", author: "沈从文", level: "primary", grade: "六年级下册", type: "课文", gradient: "from-amber-600 via-red-400 to-brown-400" },
  { workId: "tb-wzq-1", title: "昆明的雨", author: "汪曾祺", level: "middle", grade: "八年级上册", type: "课文", gradient: "from-green-500 via-blue-300 to-white" },
  { workId: "tb-wzq-2", title: "端午的鸭蛋", author: "汪曾祺", level: "middle", grade: "八年级下册", type: "课文", gradient: "from-white via-amber-100 to-blue-200" },
  { workId: "tb-yj-1", title: "老王", author: "杨绛", level: "middle", grade: "七年级下册", type: "课文", gradient: "from-gray-600 via-white to-amber-400" },
  { workId: "tb-sts-1", title: "秋天的怀念", author: "史铁生", level: "middle", grade: "七年级上册", type: "课文", gradient: "from-amber-500 via-red-400 to-gray-500" },
  { workId: "tb-sts-2", title: "我与地坛", author: "史铁生", level: "high", grade: "必修上册", type: "课文", gradient: "from-gray-700 via-green-500 to-amber-400" },
  { workId: "tb-jpw-1", title: "月迹", author: "贾平凹", level: "primary", grade: "五年级上册", type: "课文", gradient: "from-blue-500 via-white to-amber-300" },
  { workId: "tb-fjc-1", title: "珍珠鸟", author: "冯骥才", level: "primary", grade: "五年级上册", type: "课文", gradient: "from-white via-green-100 to-blue-200" },
  { workId: "tb-fjc-2", title: "挑山工", author: "冯骥才", level: "primary", grade: "四年级下册", type: "课文", gradient: "from-stone-600 via-amber-500 to-yellow-400" },
  { workId: "tb-zp-1", title: "紫藤萝瀑布", author: "宗璞", level: "middle", grade: "七年级下册", type: "课文", gradient: "from-purple-500 via-pink-400 to-green-300" },
  { workId: "tb-lhy-1", title: "窃读记", author: "林海音", level: "primary", grade: "五年级上册", type: "课文", gradient: "from-amber-300 via-white to-blue-300" },
  { workId: "tb-lhy-2", title: "冬阳·童年·骆驼队", author: "林海音", level: "primary", grade: "五年级下册", type: "课文", gradient: "from-amber-500 via-gold-300 to-brown-400" },
  { workId: "tb-xds-1", title: "落花生", author: "许地山", level: "primary", grade: "五年级上册", type: "课文", gradient: "from-amber-600 via-yellow-500 to-brown-400" },
  { workId: "tb-ztd-1", title: "燕子", author: "郑振铎", level: "primary", grade: "三年级下册", type: "课文", gradient: "from-black via-blue-400 to-white" },
  { workId: "tb-gmr-1", title: "白鹭", author: "郭沫若", level: "primary", grade: "五年级上册", type: "课文", gradient: "from-white via-gray-200 to-amber-300" },
  { workId: "tb-gmr-2", title: "天上的街市", author: "郭沫若", level: "middle", grade: "七年级上册", type: "课文", gradient: "from-blue-600 via-purple-400 to-gold-300" },
  { workId: "tb-md-1", title: "白杨礼赞", author: "茅盾", level: "middle", grade: "八年级上册", type: "课文", gradient: "from-green-500 via-white to-blue-500" },
  { workId: "tb-sl-1", title: "芦花荡", author: "孙犁", level: "middle", grade: "八年级上册", type: "课文", gradient: "from-green-500 via-white to-blue-400" },
  { workId: "tb-rzj-1", title: "百合花", author: "茹志鹃", level: "high", grade: "必修上册", type: "课文", gradient: "from-red-500 via-white to-green-400" },
  { workId: "tb-ydf-1", title: "故都的秋", author: "郁达夫", level: "high", grade: "必修上册", type: "课文", gradient: "from-amber-500 via-red-400 to-gray-500" },
  { workId: "tb-lsq-1", title: "鸟", author: "梁实秋", level: "middle", grade: "七年级上册", type: "课文", gradient: "from-green-500 via-blue-300 to-white" },
  { workId: "tb-lcz-1", title: "安塞腰鼓", author: "刘成章", level: "middle", grade: "八年级下册", type: "课文", gradient: "from-red-700 via-amber-500 to-yellow-400" },
  { workId: "tb-cwx-1", title: "孤独之旅", author: "曹文轩", level: "middle", grade: "九年级上册", type: "课文", gradient: "from-blue-500 via-gray-400 to-green-400" },
  { workId: "tb-lh-1", title: "壶口瀑布", author: "梁衡", level: "middle", grade: "八年级下册", type: "课文", gradient: "from-yellow-600 via-red-500 to-blue-400" },
];
