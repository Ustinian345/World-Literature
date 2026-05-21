// ================================================================
// 世界文学总站 — 作品详情数据 (30+ 部核心著作)
// 包含：人物 · 情节 · 主题 · 写作手法 · 摘抄 · 启发
// ================================================================

export interface Character {
  name: string;
  role: string;
  description: string;
}

export interface PlotNode {
  label: string;
  description: string;
}

export interface Excerpt {
  quote: string;
  context: string;
}

/** 单个内容来源 */
export interface SourceEntry {
  /** 人类可读标签，如 "Wikipedia (EN)", "豆瓣读书" */
  label: string;
  /** 来源完整 URL */
  url: string;
  /** 可靠性层级 */
  tier: "metadata" | "reference" | "literary_analysis" | "original_text" | "fallback";
  /** 抓取时间 (ISO) */
  fetchedAt: string;
  /** 该来源贡献了哪些字段（空 = 通用） */
  contributedFields?: string[];
}

/** 内容来源归因 */
export interface SourceAttribution {
  /** 所有成功来源（按抓取顺序） */
  sources: SourceEntry[];
  /** 综合可靠性评级 */
  reliability: "high" | "medium" | "fallback";
  /** 仅 fallback 内容：必备免责声明 */
  disclaimer?: string;
  /** 用户自行核验的搜索链接 */
  searchLinks?: Array<{ label: string; url: string }>;
}

export interface WorkDetail {
  id: string;
  characters: Character[];
  plotSummary: string;
  plotNodes: PlotNode[];
  themeAnalysis: string;
  techniques: string;
  excerpts: Excerpt[];
  insights: string;
  /** 内容来源归因（运行时可见，替代之前的 _sources 注释） */
  sourceAttribution?: SourceAttribution;
  /** @deprecated 迁移到 sourceAttribution，保留向后兼容 */
  _sources?: Record<string, string>;
}

export type PartialWorkDetail = Pick<WorkDetail, "id"> & Partial<Omit<WorkDetail, "id">>;

export const bookDetails: Record<string, PartialWorkDetail> = {

  // ==================== 亚洲 ====================

  "dream-of-red-chamber": {
    id: "dream-of-red-chamber",
    characters: [
      { name: "贾宝玉", role: "主人公", description: "荣国府贾政之子，衔玉而生。厌恶功名利禄，钟情于林黛玉，具有叛逆精神与佛性慧根。他的性格矛盾——既享尽富贵又向往自由——是中国文学中最复杂的人物形象之一。" },
      { name: "林黛玉", role: "女主角", description: "贾母外孙女，才情绝世而体弱多病。她敏感、清高、多愁善感，以诗寄情。'黛玉葬花'是中国文学中最凄美的意象之一，象征了她对自身命运的哀悼。" },
      { name: "薛宝钗", role: "主要人物", description: "薛姨妈之女，端庄贤淑，通情达理。与黛玉形成鲜明对比，代表封建社会中'完美女性'的理想形象。她的金锁与宝玉的'金玉良缘'是全书重要的象征线索。" },
      { name: "王熙凤", role: "重要人物", description: "荣国府管家奶奶，精明强干、泼辣狠毒。'粉面含春威不露，丹唇未启笑先闻'——她是大观园中权力与欲望的化身，也是家族腐败的缩影。" },
    ],
    plotSummary: "小说以贾宝玉与林黛玉、薛宝钗的爱情悲剧为主线，以贾、王、史、薛四大家族的兴衰为背景，描绘了十八世纪中国封建社会的生活全景。故事始于女娲补天遗石的神话，以宝玉衔玉降生为起点，展开了大观园中少男少女们的青春王国。随着元妃省亲、抄检大观园、黛玉焚稿断痴情等一系列事件，繁华渐逝，最终'落得个白茫茫大地真干净'。",
    plotNodes: [
      { label: "木石前盟", description: "神瑛侍者（宝玉前身）以甘露浇灌绛珠仙草（黛玉前身），种下还泪之缘" },
      { label: "大观园盛世", description: "元妃省亲，众姐妹入住大观园，起诗社、赏花、听戏——青春的极盛之景" },
      { label: "宝黛爱情", description: "二人在诗词唱和中相知相恋，却因封建礼教与家族安排而无法结合" },
      { label: "抄检大观园", description: "绣春囊事件引发大抄检，晴雯含冤而死，大观园的青春世界开始崩塌" },
      { label: "黛玉焚稿", description: "得知宝玉将娶宝钗，黛玉焚烧诗稿、泪尽而逝——全书最凄美的高潮" },
      { label: "白茫茫大地", description: "贾府被抄，宝玉出家。昔日的繁华如一场大梦，只留下一片白茫茫雪地" },
    ],
    themeAnalysis: "《红楼梦》的核心主题是多层次的。首先是'色空'观念——一切繁华终将归于虚空，大观园的盛衰是佛教无常观的文学呈现。其次是爱情与礼教的冲突——宝黛的爱情悲剧是个人情感与封建家族利益冲突的必然结果。第三是女性的命运——'千红一窟（哭），万艳同杯（悲）'的谶语预示了书中所有女性的悲剧。此外，小说还深刻批判了封建制度的腐败与虚伪，透过贾府的衰败折射了整个王朝的末世景象。",
    techniques: "曹雪芹的叙事艺术达到了中国古典小说的巅峰。他运用了'草蛇灰线，伏脉千里'的写法——大量的谶语、诗词、灯谜和梦境的设置都暗含人物的命运走向。叙事视角灵活多变，既有全知视角，又有从不同人物出发的限知视角，形成了丰富的叙事层次。小说语言达到了文言与白话的完美融合——叙述语言典雅精炼，对话语言生动传神，诗词曲赋更是各体兼备。'夹叙夹议'的手法和'批阅十载，增删五次'的创作态度，使全书形成了一张精密的意义之网。",
    excerpts: [
      { quote: "满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？", context: "开卷第一回，作者以这首诗点明了全书的情感基调与创作初衷。" },
      { quote: "女儿是水做的骨肉，男人是泥做的骨肉。我见了女儿，我便清爽；见了男子，便觉浊臭逼人。", context: "宝玉的名言，体现了他对女性的尊重与对男性功利世界的厌恶，是全书性别观的集中表达。" },
      { quote: "花谢花飞花满天，红消香断有谁怜？……一朝春尽红颜老，花落人亡两不知！", context: "黛玉的《葬花吟》，以落花自喻，哀叹青春易逝、红颜薄命，是中国诗歌史上最著名的自悼诗之一。" },
    ],
    insights: "《红楼梦》是中国文学乃至世界文学中不可逾越的高峰。它不仅是一部小说，更是一部中国封建社会的百科全书——从饮食服饰到园林建筑，从诗词歌赋到医药占卜，无所不包。在文学价值之外，它为我们提供了一种理解和面对人生的方式：认识到一切繁华终将逝去，但仍要在有限的生命中珍视那些美好的瞬间。宝黛的爱情虽然以悲剧告终，但他们共同创造的诗歌世界——那个大观园中的青春王国——却通过这部小说获得了永恒。",
  },

  "tale-of-genji": {
    id: "tale-of-genji",
    characters: [
      { name: "光源氏", role: "主人公", description: "桐壶帝与更衣所生之子，降为臣籍赐姓源氏。容姿绝世、才华横溢，一生经历了政治沉浮与无数情爱纠葛。他的'物哀'精神——对世事无常的敏感与哀愁——贯穿全书。" },
      { name: "紫之上", role: "女主角", description: "源氏亲手抚养成人的理想女性，美貌与品德兼备。她是源氏最钟爱的女性，但始终不是正妻，其内心的孤独是全书最动人的心理描写之一。" },
      { name: "藤壶中宫", role: "关键人物", description: "桐壶帝的中宫，容貌酷似源氏生母。源氏对她的禁忌之恋是全书最初的情感动力，也是他一生追寻'理想女性'幻影的起点。" },
      { name: "六条御息所", role: "重要人物", description: "源氏的情人之一，才情极高而嫉妒极深。她的生魂出窍害死源氏正妻葵之上的情节，是全书最惊心动魄的超自然场景。" },
    ],
    plotSummary: "故事始于日本平安时代。桐壶帝的宠妃更衣生下一位皇子，因其母出身低微，皇子被降为臣籍赐姓源氏。光源氏长大后成为才貌双全的贵族，但他内心深处始终追寻着早逝母亲的幻影。他经历了一系列的爱情纠葛——包括与继母藤壶的禁忌之恋、与年幼的紫之上的养成之恋等等。在政治上，他经历了从流放须磨到重归权力巅峰的波折。小说后半部分则转向源氏死后，其子孙辈的爱情故事，最终以'梦浮桥'的开放式结局收尾。",
    plotNodes: [
      { label: "桐壶更衣", description: "源氏生母因出身低微在宫中饱受欺凌，早逝后留给源氏一生难以填补的情感空缺" },
      { label: "禁忌之恋", description: "源氏与酷似母亲的继母藤壶发生不伦之恋，生下后来的冷泉帝，这一秘密是全书最核心的情感暗流" },
      { label: "须磨流放", description: "政敌倾轧下源氏被流放须磨，在荒凉海边经历了人生最低谷，也遇见了他后来的重要伴侣明石之上" },
      { label: "荣华极盛", description: "源氏重归京城，修建六条院，将一生中最重要的女性都接入其中，这一年是他权力的顶峰" },
      { label: "紫之上之死", description: "紫之上在孤独中离世，源氏悲痛欲绝。这一事件标志着他精神的彻底幻灭" },
      { label: "梦浮桥", description: "全书以源氏后人的故事收尾，以'梦浮桥'意象暗示人生如梦、世事虚幻的终极主题" },
    ],
    themeAnalysis: "《源氏物语》的核心是'物哀'（もののあはれ）——即对万物无常的细腻感伤。这种美学精神渗透在每一个场景中：花开即谢、月圆即缺、欢会即别离。其次是'宿世'观念——佛教因果报应思想贯穿全书，源氏的一切遭遇都是前世因缘的必然结果。第三是宫廷政治与个人命运的交织——源氏的荣辱沉浮反映了平安时代摄关政治的运作逻辑。第四是对女性命运的深刻关注——书中的女性角色虽身份各异，却无一例外地被置于男权社会的悲剧性处境之中。",
    techniques: "紫式部的叙事艺术令人惊叹。首先是'心理现实主义'——她对人物内心世界的描写细腻入微，尤其是女性心理的刻画，在世界文学史上具有开创性。其次是和歌的巧妙运用——全书收录近八百首和歌，它们不是装饰，而是人物情感交流和心理活动的重要载体。第三是时间结构——小说横跨七十余年，但时间流速并非均匀，而是随着情感的强度而伸缩。语言方面，紫式部创造了一种融合了汉文训读与和文体的独特文学语言，极大丰富了日语的文学表现力。",
    excerpts: [
      { quote: "逝去之梦的踪迹，于今何在？", context: "源氏在紫之上死后发出的慨叹，是全书最著名的句子之一，浓缩了物哀美学的精髓。" },
      { quote: "在世间的种种人情中，最令人感伤的，莫过于这无常的世事。", context: "源氏在流放须磨时的心境独白，体现了他在逆境中对命运的思考。" },
    ],
    insights: "作为世界文学史上最早的长篇小说，《源氏物语》的伟大不仅在于它的时间之早，更在于它达到了令人难以置信的艺术高度。它教会我们以'物哀'的眼光看待世界——不是消极的悲观，而是一种对美好事物易逝性的深刻体认和温柔接纳。当我们读到光源氏在紫之上死后对着一草一木追忆往事时，我们每个人都能从中看到自己对逝去时光的眷恋。这种对人性的终极关怀，使这部千年之前的作品至今仍然深深打动着世界各地的读者。",
  },

  "journey-to-the-west": {
    id: "journey-to-the-west",
    characters: [
      { name: "孙悟空", role: "主人公", description: "天地灵石所生的石猴，大闹天宫的齐天大圣。机智、勇敢、叛逆，也冲动、自负。金箍棒是他的标志武器，紧箍咒则是对他的约束。他代表了人类对自由的渴望与对规则的抗争。" },
      { name: "唐僧（玄奘）", role: "取经人", description: "如来佛祖座下金蝉子转世，以凡人之躯踏上西行之路。慈悲为怀却软弱无能，常被妖怪蒙骗。他是信仰的力量的象征——虽无神通，却有不可动摇的信念。" },
      { name: "猪八戒", role: "二徒弟", description: "本为天蓬元帅，因调戏嫦娥被贬下凡错投猪胎。贪吃、好色、懒惰，却又憨厚可爱。他是人性弱点的喜剧化呈现，也是最接地气的角色。" },
      { name: "沙悟净", role: "三徒弟", description: "本为卷帘大将，因失手打碎琉璃盏被贬流沙河。沉默寡言、任劳任怨，是团队中最忠实的砥柱。他代表了默默奉献的精神。" },
    ],
    plotSummary: "东胜神洲傲来国花果山上，一块仙石迸裂产出一只石猴——孙悟空。他拜师学得七十二变与筋斗云，大闹龙宫取得金箍棒，大闹地府勾销生死簿，最终大闹天宫自封齐天大圣，被如来佛镇压于五行山下五百年。五百年后，观音菩萨点化他护送唐僧西天取经。唐僧先后收服孙悟空、白龙马、猪八戒、沙悟净为徒，师徒四人踏上西行之路。他们历经九九八十一难——途经火焰山、通天河、狮驼岭、盘丝洞……与形形色色的妖魔鬼怪斗智斗勇，最终抵达西天取得真经，修成正果。",
    plotNodes: [
      { label: "石猴出世", description: "花果山顶仙石迸裂，孙悟空诞生。学艺归来后大闹龙宫、地府、天宫，被压五行山下五百年" },
      { label: "踏上西行路", description: "唐僧救出悟空，收为徒弟。之后又收服白龙马、猪八戒、沙悟净，取经团队正式组成" },
      { label: "三打白骨精", description: "白骨精三次变化欺骗唐僧，悟空三次识破将其打死，却遭唐僧误解被逐——取经路上最令人心碎的情节" },
      { label: "火焰山", description: "悟空三调芭蕉扇，与牛魔王夫妇斗法，终于扇灭火焰山大火，继续前行" },
      { label: "真假美猴王", description: "六耳猕猴冒充悟空，二猴从地府打到天庭再到灵山，如来佛辨出真伪" },
      { label: "取得真经", description: "历经十万八千里、九九八十一难，师徒四人终抵灵山取得真经，各自修成正果" },
    ],
    themeAnalysis: "《西游记》是一部多层次的作品。表面上是神话冒险故事，深层则是关于修行与自我超越的寓言。'心猿'——即躁动不安的心——需要'紧箍咒'（戒律）来约束，这正是佛教修心的隐喻。师徒四人代表了人的不同面向：悟空是心（智性），唐僧是信念（灵性），八戒是欲望（本能），沙僧是身体（行动）。取经之路就是一个人克服自身弱点的修行过程。同时，小说也深刻批判了明代社会的官场腐败，那些被神仙收服的妖怪往往背后都有天庭的背景——这是对现实社会中官僚保护伞的辛辣讽刺。",
    techniques: "吴承恩的叙事艺术集中国古典小说之大成。他创造性地融合了神话、历史、民间传说和佛教道教元素，构建了一个完整而自洽的神魔世界。人物塑造上，孙悟空是中国文学中最丰满的人物形象之一——他不是扁平的英雄，而是有血有肉、有成长弧光的复杂角色。语言方面，小说文白夹杂、韵散结合，战斗描写富有诗意，对话幽默生动。叙事节奏张弛有度——每场大战之后必有舒缓的段落，形成了独特的阅读韵律。",
    excerpts: [
      { quote: "我为人人，人人为我，何必拘泥于身份地位？", context: "悟空对等级秩序的挑战精神，是他性格中最鲜明的特质。" },
      { quote: "心生，种种魔生；心灭，种种魔灭。", context: "乌巢禅师对唐僧的点化，道破了全书的核心哲理：一切障碍皆源于内心。" },
      { quote: "只要你见性志诚，念念回首处，即是灵山。", context: "这是全书最深刻的一句话——佛不在远方，而在心中。修行即是修心。" },
    ],
    insights: "《西游记》是我们每个人的成长故事。孙悟空从花果山的天不怕地不怕，到戴上紧箍咒后的束缚与挣扎，再到最终修成正果——这个历程隐喻了一个人从童年（本能的自由）到成年（规则的约束）再到成熟（内在的自律）的成长轨迹。它告诉我们，真正的自由不是无拘无束，而是在自律中获得的内在平静。'九九八十一难'不是阻碍，而是成长的必经之路。每一次降妖除魔，都是在降伏我们内心的'心魔'。",
  },

  "mahabharata": {
    id: "mahabharata",
    characters: [
      { name: "毗湿摩", role: "核心人物", description: "婆罗多族的元老，立下终身不娶的可怕誓言以成全父亲的婚姻。他在俱卢大战中为俱卢族而战，最终死在箭床上，临终前传授了治国与人生的大智慧。" },
      { name: "黑天（克里希纳）", role: "神祇/导师", description: "毗湿奴的化身，般度族的盟友与阿周那的御者。他在大战前夕对阿周那的教导构成了《薄伽梵歌》——印度哲学最神圣的经典。" },
      { name: "阿周那", role: "般度族英雄", description: "般度五子中的老三，天下第一弓箭手。大战前他面对亲人自相残杀的前景陷入道德困境，黑天在此时向他揭示了'业瑜伽'——无执地履行自己的职责。" },
      { name: "迦尔纳", role: "悲剧英雄", description: "太阳神之子，被生母遗弃，由车夫养大。他一生渴望被认可却因出身备受歧视，最终选择效忠俱卢族而与自己的兄弟们为敌，是史诗中最令人心碎的悲剧人物。" },
    ],
    plotSummary: "婆罗多族的后裔分为两支：持国的百子（俱卢族）和般度的五子（般度族）。老国王将王国一分为二，但俱卢族的长子难敌嫉妒般度族的繁荣，设计了一场赌骰子游戏，诱使般度族长子坚战输掉了一切——王国、财富，甚至他们共同的妻子黑公主。般度五子被迫流放森林十三年。流放期满后，双方谈判破裂，俱卢大战在俱卢之野爆发。大战持续了十八天，双方几乎全军覆没。般度族最终获胜，但胜利的代价是亲人与导师的尸横遍野。",
    plotNodes: [
      { label: "可怕的誓言", description: "毗湿摩为成全父亲对渔家女的爱情，立下终身不娶、不继王位的誓言，这一誓言成为整个悲剧的根源" },
      { label: "赌骰子之辱", description: "难敌设计赌局，坚战输掉一切，黑公主在大殿上被当众羞辱——这场戏是全书道德转折点" },
      { label: "森林流放", description: "般度五子在森林中度过十三年，期间他们遇到了各种圣人与神灵，获得了武器与祝福" },
      { label: "薄伽梵歌", description: "大战前，阿周那面对亲人自相残杀陷入绝望。黑天以'业瑜伽'点化他：不问结果，但行职责" },
      { label: "十八日大战", description: "俱卢之野的血战，毗湿摩、德罗纳、迦尔纳、难敌相继战死，般度族也失去了所有子嗣" },
      { label: "终极之旅", description: "大战结束后，般度五子将王位传给后人，踏上前往喜马拉雅山的终极朝圣之旅" },
    ],
    themeAnalysis: "《摩诃婆罗多》自称'凡世间存在的，这里面都有；这里面没有的，世间也不存在'。核心主题之一是'达摩'（法/责任）——什么是正确的行为？史诗不是给出简单答案，而是通过各种人物的困境展示了法的复杂性：毗湿摩的达摩是对家族的忠诚（即使他明知俱卢族是错的），迦尔纳的达摩是对恩人的回报（即使恩人就是恶人），阿周那的达摩是履行战士的职责（即使这意味着杀死亲人）。其次是'业'与'轮回'——每一个选择都有后果，每一个后果都在来生得到清算。第三是关于欲望的毁灭性——难敌的嫉妒、坚战的赌博、迦尔纳的尊严——欲望如何将人推入万劫不复的深渊。",
    techniques: "《摩诃婆罗多》的叙事结构是'故事中套故事'的典范。全书以歌人厉声向寿那迦仙人讲述的形式呈现，这种框架叙事使史诗具有了无限扩展的可能。人物塑造上，史诗拒绝简单的善恶二分——'好人'有致命的弱点，'恶人'有令人同情的动机。迦尔纳就是一个完美的例子：他的悲剧不是因为他邪恶，而是因为他太执着于证明自己的价值。语言方面，梵语原典运用了极为丰富的韵律和修辞，尤其是比喻系统——从战争到自然，从天象到人体——构成了一个无所不包的意象网络。",
    excerpts: [
      { quote: "你只有行动的权利，而不享有其成果。不要让成果成为你的动机，也不要倾向于无为。", context: "《薄伽梵歌》中黑天对阿周那的教导，是印度哲学中'业瑜伽'的核心表达。" },
      { quote: "每当正法衰微、非法盛行之时，我便会显化自己。", context: "黑天向阿周那揭示自己的宇宙形象，承诺在每一个道德危机时刻都会化身降临。" },
    ],
    insights: "《摩诃婆罗多》的价值在于它拒绝简单的道德说教。在面对'我该做什么'这个问题时，它没有给出标准答案，而是通过一个又一个令人心碎的故事告诉我们：人生没有完美的选择，每个抉择都意味着失去另一种可能。阿周那必须杀死他的亲人和老师——这不是因为他是对的而他们错了，而是因为这是他的职责，是他的'法'。黑天的'业瑜伽'并非鼓励冷漠，而是提供了一种面对两难处境的智慧：全力以赴，但不执着于结果。这是两千多年前的智慧，却在我们每一次面对人生重大抉择时都提供着深刻的启迪。",
  },

  // ==================== 欧洲 ====================

  "don-quixote": {
    id: "don-quixote",
    characters: [
      { name: "堂吉诃德", role: "主人公", description: "原名阿隆索·基哈诺，一个沉迷于骑士小说的拉曼查乡绅。他穿上祖传的破盔甲，骑上瘦马罗西南多，自封'愁容骑士'堂吉诃德，踏上了行侠仗义的冒险之旅。他活在幻想的世界里——风车是巨人，客栈是城堡，羊群是军队——但他的疯狂中闪烁着理想主义的光辉。" },
      { name: "桑丘·潘沙", role: "侍从", description: "一个务实的农民，被堂吉诃德许诺以'岛屿总督'的职位而追随他。他贪吃、胆小、满口谚语，却以农民式的智慧屡屡看穿主人的幻想。两人形成的互补关系是世界文学中最伟大的搭档之一。" },
      { name: "杜尔西内娅", role: "理想化的女性", description: "堂吉诃德想象中的'绝世佳人'，其实只是一个他从未见过的农妇阿尔东萨·洛伦索。她代表了堂吉诃德心中那个完美但不存在的理想世界。" },
    ],
    plotSummary: "拉曼查的乡绅阿隆索·基哈诺读骑士小说读到走火入魔，决定成为一名游侠骑士。他给自己取名堂吉诃德，骑上瘦马，戴上破盔，开始了第一次冒险——结果被人打得半死。第二次，他说服了农民桑丘·潘沙做他的侍从，许诺将来封他做海岛总督。主仆二人一同经历了无数荒诞的冒险：大战风车、袭击羊群、解放囚犯、在客栈里闹得天翻地覆……堂吉诃德始终以骑士精神行事，却处处碰壁。最后，他的朋友们设计将他骗回家乡。临终前，他幡然醒悟，承认自己不过是阿隆索·基哈诺，不是什么骑士。他在清醒中离开了这个他曾以幻想美化的世界。",
    plotNodes: [
      { label: "沉迷骑士小说", description: "乡绅阿隆索·基哈诺读骑士小说至疯魔，决定成为一名游侠骑士——'堂吉诃德'诞生了" },
      { label: "大战风车", description: "堂吉诃德将风车当作巨人冲锋，被风车翼打翻在地。这是全书最著名的场景，也是理想主义与现实冲突的终极隐喻" },
      { label: "解放囚犯", description: "堂吉诃德解救了一群囚犯，却被囚犯们殴打抢劫——善良意图与糟糕后果的讽刺性对照" },
      { label: "客栈幻梦", description: "堂吉诃德把客栈当作城堡，把女仆当作公主，引发了一连串令人捧腹的闹剧" },
      { label: "学士的挑战", description: "化装成'白月骑士'的参孙学士打败了堂吉诃德，迫使他在一年内放弃骑士生涯" },
      { label: "清醒与死亡", description: "堂吉诃德临终前清醒过来，承认自己不是骑士。他在理智的平静中死去，却让所有爱他的人感到深深的惋惜" },
    ],
    themeAnalysis: "《堂吉诃德》是一部关于现实与幻想之间张力的杰作。堂吉诃德的'疯狂'真的只是疯狂吗？当他把风车看成巨人时，他是在'妄想'，还是在为这个世界赋予它本已失去的意义？小说的一个深层主题是关于阅读与生活的关系——堂吉诃德是被书'吞噬'的人，他以文学的标准来要求现实，这当然会失败，但他的失败却让我们反思：如果没有了梦想和理想，我们的人生还剩下什么？另一个重要主题是阶级与社会——桑丘·潘沙虽然粗俗无知，但他的实用智慧往往比主人的书卷气更接近真理。塞万提斯以幽默的笔调瓦解了当时西班牙社会的等级秩序。",
    techniques: "塞万提斯的叙事革新是革命性的。首先，小说中的人物知道自己在第一卷中已'出名'了——这种元叙事手法打破了虚构与现实的边界，早于后现代主义四个世纪。其次，多声部叙事——不同人物对同一事件的讲述各不相同，真理变成了视角问题。第三，喜剧性与悲剧性的奇异融合——堂吉诃德前期的冒险令人捧腹，但当他被打败、被迫放弃骑士理想时，读者感受到的是真诚的心碎。语言上，桑丘满口的民间谚语与堂吉诃德文绉绉的骑士腔形成了美妙的对比，构成了小说独特的音乐性。",
    excerpts: [
      { quote: "自由，桑丘，是上天赐予人类最珍贵的礼物之一。为了自由，就像为了荣誉一样，人可以而且应该冒险付出生命。", context: "堂吉诃德对桑丘的教诲，体现了他疯癫外表下蕴含的深刻人文主义精神。" },
      { quote: "每个人都上帝创造的那样，有时甚至更糟。", context: "桑丘·潘沙的谚语式智慧，以最朴素的方式道出了人性的真相。" },
      { quote: "把风车当巨人，把客栈当城堡——他知道堂吉诃德疯了，但更知道那种疯是灵魂在与现实的妥协中最后的抵抗。", context: "后世评论家对堂吉诃德命运的总结，点明了这个人物的永恒魅力。" },
    ],
    insights: "我们都是某种意义上的堂吉诃德——怀抱理想，在现实中碰壁，却不甘于完全妥协。堂吉诃德的悲剧不在于他的疯狂，而在于这个世界已经不再需要骑士精神了。当理想主义在一个势利的世界中被嘲笑为'疯狂'时，到底是谁出了问题？小说的伟大之处在于它同时给出了两种答案：一方面，堂吉诃德当然是荒谬的；另一方面，他比所有嘲笑他的人都更纯粹、更高贵。在功利主义盛行的当下，这部四百年前的小说提醒我们：人类需要理想主义者——正是他们让这个过于'正常'的世界保留了某种超越的可能。",
  },

  "hamlet": {
    id: "hamlet",
    characters: [
      { name: "哈姆雷特", role: "主人公", description: "丹麦王子，在威登堡大学求学时因父王暴毙而回国奔丧。父亲的鬼魂告诉他真相——是叔叔克劳狄斯谋杀了父亲、篡夺王位并娶了母亲。哈姆雷特陷入了'行动与思考'的两难困境，他的延宕和沉思使这一角色成为西方文学中最深邃的人物形象之一。" },
      { name: "克劳狄斯", role: "反派", description: "哈姆雷特的叔叔，杀害兄长篡夺王位并娶了王后。他并非简单的恶棍——他能感到良心的不安，却无法放弃权力，是莎士比亚笔下最复杂的'恶人'之一。" },
      { name: "乔特鲁德", role: "王后", description: "哈姆雷特的母亲，丈夫死后不到两个月就嫁给了小叔子。哈姆雷特对母亲的愤怒与失望不亚于他对叔叔的仇恨。" },
      { name: "奥菲莉亚", role: "悲剧女性", description: "大臣波洛涅斯之女，哈姆雷特的恋人。在父亲被哈姆雷特误杀、爱人发疯的双重打击下精神崩溃，溺水而亡。她的悲剧是无辜者在权力游戏中的牺牲。" },
    ],
    plotSummary: "丹麦王子哈姆雷特在德国求学时得知父亲暴毙、叔叔克劳狄斯继位并娶了母亲。他回到哀伤的丹麦宫廷后，父亲的鬼魂在城堡露台现身，揭露了克劳狄斯以毒药灌耳的谋杀真相。哈姆雷特发誓复仇，却陷入了痛苦的延宕之中——他以'疯癫'掩人耳目，安排戏班演出'捕鼠器'一剧来试探国王，在与母亲对峙时误杀了躲在帘后的波洛涅斯。克劳狄斯趁机将哈姆雷特送往英国，暗中下令处死他，但哈姆雷特机智逃脱。最后，在一场克劳狄斯与波洛涅斯之子雷欧提斯合谋的毒剑决斗中，王后误饮毒酒而死，哈姆雷特被毒剑刺中后奋力杀死克劳狄斯，自己也毒发身亡。",
    plotNodes: [
      { label: "鬼魂的启示", description: "艾尔西诺城堡的午夜，先王鬼魂向哈姆雷特揭露谋杀真相，要求儿子为他复仇" },
      { label: "装疯", description: "哈姆雷特以疯癫做掩护，暗中探查真相。他对奥菲利亚的冷酷态度是全书最令人心碎的场景之一" },
      { label: "捕鼠器", description: "戏班演出一桩与先王之死相似的谋杀，克劳狄斯看到中途离席——哈姆雷特确认了叔叔的罪行" },
      { label: "误杀波洛涅斯", description: "哈姆雷特与母亲对峙，误以为帘后之人是国王，刺死的却是波洛涅斯。这一错误将悲剧推向了不可挽回的深渊" },
      { label: "奥菲利亚之死", description: "失去父亲又被爱人拒绝，奥菲利亚疯癫中摘花坠河。'她唱着歌沉入水中，衣袍在水中散开像美人鱼的鳞片'" },
      { label: "最后的决斗", description: "雷欧提斯的毒剑、克劳狄斯的毒酒、王后的误饮——一场宫廷的集体毁灭。哈姆雷特在死前终于完成了复仇" },
    ],
    themeAnalysis: "《哈姆雷特》是一部关于'存在'的戏剧。核心主题是'行动与沉思'的张力——哈姆雷特为什么迟迟不行动？因为他是一个思考者：'作还是不作，这是一个值得思考的问题。'他担心鬼魂可能是魔鬼的诱惑，担心杀死克劳狄斯时正值祷告会使他上天堂，担心……他的思考本身就是一种行动——一种将他推入更深的绝望与无力的行动。其次，戏剧深刻探讨了生与死、真实与表象、理性与疯狂的对立。第三，复仇伦理的问题——在一个腐败的世界中，以暴制暴真的能恢复正义吗？最后，所有复仇者——哈姆雷特、雷欧提斯、小福丁布拉斯——都以不同的方式回应了同一个问题，构成了对比性的复仇主题交响。",
    techniques: "莎士比亚的语言艺术在《哈姆雷特》中达到了巅峰。哈姆雷特的独白——尤其是'作还是不作'、'啊，我竟是一个多么卑微的奴才'——不是情节的附属品，而是对存在本身的哲学探究。'戏中戏'（捕鼠器）是一种天才的元戏剧手法：舞台上的舞台既推进了情节，又引发了对戏剧本质的思考。莎士比亚还大量使用'反对'和'悖论'的修辞：生与死、行动与无为、真实与伪装——这些对立面在语言层面上不断碰撞，产生了独特的张力。人物塑造上，哈姆雷特不是一个简单的复仇者，而是一个不断质问自己、质问世界、质问宇宙的知识分子——正是这种'过度思考'使他成为现代人的原型。",
    excerpts: [
      { quote: "作还是不作，这是一个值得思考的问题：默然忍受命运暴虐的毒箭，或是挺身反抗人世无涯的苦难，这两种行为哪一种更高贵？", context: "第三幕第一场，哈姆雷特最著名的独白。这不是关于自杀而是关于'行动'——人在面对不公时，是忍受还是反抗？" },
      { quote: "即使被关在果壳之中，我仍自以为是无限空间之王。", context: "哈姆雷特对罗森克兰茨和吉尔登斯吞说的话，反映了心灵自由超越物理限制的信念。" },
      { quote: "世上本无所谓好与坏，只是思想使然。", context: "哈姆雷特的名言，体现了他的主观唯心主义倾向——事物的好坏取决于我们如何看待它们。" },
      { quote: "剩下的只有沉默。", context: "哈姆雷特的临终遗言。经历了一切的喧嚣与苦难之后，最终的归宿是永恒的沉默。" },
    ],
    insights: "哈姆雷特可能是西方文学中最'现代'的古代人物。他的延宕、他的自我怀疑、他的存在主义式的焦虑——这些都不是文艺复兴时期的典型特质，而是二十世纪人的精神肖像。在某种意义上，我们每个人都是哈姆雷特：知道应该做什么（或自以为知道），却被思考本身所困扰；渴望行动，却又在行动的门槛上徘徊。这部剧的伟大之处在于它不提供答案——'作还是不作'的追问到今天依然没有标准答案。莎士比亚以哈姆雷特的悲剧告诉我们：人类的高贵不在于行动的结果，而在于在行动之前对行动本身的深刻反思——即使这种反思本身可能成为另一种形式的牢笼。",
  },

  "crime-and-punishment": {
    id: "crime-and-punishment",
    characters: [
      { name: "拉斯柯尼科夫", role: "主人公", description: "彼得堡一位贫困潦倒的法科大学生。他聪明、骄傲、敏感，自创了一种'非凡人可以超越道德法律'的理论。他杀害了放高利贷的老太婆，却无法承受罪行的心理后果。他的精神折磨和最终救赎构成了小说的核心。" },
      { name: "索尼娅", role: "女主角", description: "一个为了养家而被迫卖淫的纯洁少女。她笃信上帝，以无限的怜悯与爱引导拉斯柯尼科夫走向忏悔和新生。她是陀思妥耶夫斯基笔下'圣洁的罪人'原型的最高体现。" },
      { name: "波尔费利", role: "预审官", description: "负责侦办老太婆谋杀案的预审官。他早已从心理分析中猜出拉斯柯尼科夫是凶手，但并不急于逮捕他，而是耐心等待他的精神自我崩溃。是'猫鼠游戏'中的高手。" },
      { name: "斯维里加洛夫", role: "对照人物", description: "一个道德虚无主义者，拉斯柯尼科夫的'黑暗镜像'。他将'非凡人理论'实践到了极致——纵欲、诈骗、冷酷无情，但在他自私的外表下隐藏着深刻的绝望，最终选择了自杀。" },
    ],
    plotSummary: "贫困的法科大学生拉斯柯尼科夫在彼得堡一间阴暗的阁楼里酝酿了一个计划：杀死一个放高利贷的老太婆，用她的钱让自己摆脱贫困，然后去做'对全人类有益的'事业。他用以说服自己的理论是——'非凡的人'（如拿破仑）有权超越道德和法律。然而，在实施谋杀后，他并没有成为一个'超人'，反而陷入了极度的精神恐惧和道德煎熬之中。在与家人、预审官波尔费利、妓女索尼娅的互动中，他的精神防线逐渐瓦解。波尔费利以精湛的心理战术一步一步瓦解他的意志，索尼娅则以基督式的爱与牺牲精神感化他。最终，拉斯柯尼科夫在索尼娅的陪伴下前往警察局自首，被流放西伯利亚。小说在索尼娅陪他走向新生的曙光中结束。",
    plotNodes: [
      { label: "理论的诞生", description: "贫困与骄傲催生了拉斯柯尼科夫的'超人理论'——某些人有权跨越道德界限以达到更高目的" },
      { label: "双重谋杀", description: "拉斯柯尼科夫用斧头杀死老太婆，意外中又不得不杀死她的妹妹——计划外的第二桩谋杀彻底粉碎了他的'冷静理性'" },
      { label: "精神崩塌", description: "杀人后的拉斯柯尼科夫陷入精神错乱，在发烧、噩梦和偏执之间摇摆，他的身体在替他的灵魂承受惩罚" },
      { label: "猫鼠游戏", description: "预审官波尔费利以笑脸和看似随意的对话步步紧逼，用心理战术而非证据来瓦解凶手的防线" },
      { label: "索尼娅的十字架", description: "索尼娅得知真相后没有恐惧或谴责，而是将十字架挂在拉斯柯尼科夫胸前，以基督式的爱承担他的痛苦" },
      { label: "自首与新生", description: "拉斯柯尼科夫走进警察局，说出了那句如释重负的话：'是我杀了那个老太婆。'在西伯利亚的流放中，他在索尼娅的爱中看到了新生的曙光" },
    ],
    themeAnalysis: "《罪与罚》的核心是对'理性主义道德'的深刻批判。拉斯柯尼科夫的'超人理论'是十九世纪虚无主义和功利主义的极端推演——如果道德只是社会契约，那为什么'伟大的人'不能超越它？陀思妥耶夫斯基以全书的情节走向回答了这个追问：因为人不是由纯粹理性构成的，人有良心——即使是最极端的理性也无法压制良心的声音。第二大主题是苦难的救赎意义——拉斯柯尼科夫的救赎不是通过法律程序完成的，而是通过在流放中承受苦难、在索尼娅的爱中获得新生而实现的。第三是对'大都市异化'的深刻描绘——彼得堡不是背景，而是一个吞噬灵魂的存在，每个人物都被这座城市的贫困、绝望和道德虚无主义所裹挟。",
    techniques: "陀思妥耶夫斯基的'复调小说'技巧在《罪与罚》中得到了充分体现。每个主要人物都有自己的声音和世界观，相互碰撞而没有被作者统一：拉斯柯尼科夫的理性主义、索尼娅的信仰、波尔费利的心理分析、斯维里加洛夫的虚无主义——它们各自独立地发展，像一首交响曲的对位旋律。叙事视角上，小说大量使用内心独白和自由间接引语，使读者'从内部'体验拉斯柯尼科夫的精神崩溃。时间结构上，小说在关键场景中使用了极端的慢镜头——短短几分钟的心理活动可以展开为数十页，这种'时间膨胀'手法将精神体验置于物理时间之上。",
    excerpts: [
      { quote: "我不是对你下跪，而是对人类的一切苦难下跪。", context: "拉斯柯尼科夫第一次去见索尼娅时，跪在她面前说出的话。这句话标志着他从'超人'的骄傲开始走向谦卑。" },
      { quote: "权力只给予那些敢于弯腰去夺取它的人。", context: "拉斯柯尼科夫的理论陈述，体现了他的虚无主义世界观。而这恰恰是小说用全部篇幅来驳斥的命题。" },
      { quote: "生活取代了推理……在意识中应该由生活来取代。", context: "小说接近尾声时的关键转变——拉斯柯尼科夫意识到理性无法回答所有问题，只有'活着'本身才能为他指明出路。" },
    ],
    insights: "《罪与罚》是对现代人的深度心理分析。我们每个人内心都有一个拉斯柯尼科夫——试图用理性'论证'自己的行为，回避良心的声音。陀思妥耶夫斯基告诉我们：道德不是一套外部强加的规则，而是根植于人性深处的不可逃避的声音。即使你'理性地'说服了自己，你的身体、你的梦境、你的潜意识仍然会惩罚你——拉斯柯尼科夫在自首之前就已经在精神地狱中服刑了。这部小说的终极信息是：救赎不在理性的论证中，而在于爱与受苦——只有在与他人（索尼娅）的连接中，在承受自己行为后果的勇气中，人才能真正超越自己。",
  },

  // ==================== 亚洲 — 中国 ====================

  "three-kingdoms": {
    id: "three-kingdoms",
    characters: [
      { name: "刘备", role: "主人公/蜀汉君主", description: "汉室宗亲，以仁德闻名天下。与关羽、张飞桃园结义，三顾茅庐请出诸葛亮，最终建立蜀汉政权。他代表了中国传统文化中'仁君'的理想形象。" },
      { name: "诸葛亮", role: "核心人物/蜀汉丞相", description: "字孔明，号卧龙。经刘备三顾茅庐而出山，以经天纬地之才辅佐刘备建立蜀汉。'鞠躬尽瘁，死而后已'是他一生的写照，也是中国士大夫精神的最高典范。" },
      { name: "曹操", role: "主要人物/魏王", description: "字孟德，东汉末年杰出的政治家、军事家、诗人。'治世之能臣，乱世之奸雄'——他雄才大略又疑心深重，是全书最复杂、最丰满的人物形象。" },
      { name: "关羽", role: "重要人物/蜀汉大将", description: "字云长，刘备的结义兄弟。以忠义和勇武闻名天下，'温酒斩华雄'、'过五关斩六将'、'千里走单骑'——他是中国民间信仰中'武圣'的原型。" },
    ],
    plotSummary: "东汉末年，天下大乱，群雄并起。曹操挟天子以令诸侯，占据北方；孙权承父兄基业，坐断东南；刘备以皇叔之名，辗转半生终得诸葛亮辅佐，借荆州、取西川，建立蜀汉。从黄巾起义到三家归晋，近百年间，官渡、赤壁、夷陵等大战决定了天下格局的每一次重组。罗贯中以七实三虚的笔法，将三国历史书写为一部英雄的史诗——英雄们在历史舞台上登场，又在命运安排下谢幕，最终只留下一声古今多少事都付笑谈中的深沉慨叹。",
    plotNodes: [
      { label: "桃园结义", description: "刘备、关羽、张飞在桃园中盟誓结为兄弟——不求同年同月同日生，只愿同年同月同日死。这一拜奠定了蜀汉集团的伦理基石" },
      { label: "官渡之战", description: "曹操以少胜多击败袁绍，奠定统一北方的基础。这是一场决定北方霸权的战略决战" },
      { label: "三顾茅庐", description: "刘备三次前往隆中拜访诸葛亮，最终请得卧龙出山。诸葛亮的隆中对为刘备规划了三分天下的战略蓝图" },
      { label: "赤壁之战", description: "孙刘联军以火攻大破曹操八十三万大军，三国鼎立格局由此确立。这是中国历史上最著名的以少胜多的战役之一" },
      { label: "走麦城", description: "关羽北伐襄樊水淹七军威震华夏，却在孙吴偷袭下败走麦城。蜀汉由盛转衰的转折点" },
      { label: "星落五丈原", description: "诸葛亮六出祁山，病逝于五丈原军中。一个伟大灵魂在与命运的最终角力中倒下" }
    ],
    themeAnalysis: "《三国演义》首先是一部关于义的史诗。桃园结义的兄弟之盟、关羽千里走单骑的忠贞不二、诸葛亮鞠躬尽瘁的臣子之忠——义构成了全书人伦世界的最高价值坐标。但在义的光辉背后，作品也无情地揭示了政治斗争的残酷逻辑：盟友可以变成敌人（孙刘联盟的破裂），忠诚可以被利用（曹操挟天子以令诸侯），胜利可以转瞬即逝。罗贯中在歌颂英雄的同时，也展现了历史循环的悲凉——天下大势分久必合合久必分——这既是一种历史观，也是对英雄主义最深刻的反讽。",
    techniques: "《三国演义》是中国历史小说的开山之作。七实三虚的创作原则——七分史实三分虚构——使小说兼具历史的厚重感和文学的戏剧性。全书叙事结构宏大而精密：以汉室衰微为序幕、三国鼎立为主体、三家归晋为终章，形成完整的史诗弧形。人物塑造高度典型化——关羽的义、诸葛亮的智、曹操的奸都成为中国文化的原型符号。战争的描绘是全书最高成就——官渡、赤壁、夷陵等经典战役融合了战略分析、人物交锋和戏剧性转折，是中国叙事文学中最早的全景式战争描写。",
    excerpts: [
      { quote: "滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。", context: "全书开篇引杨慎《临江仙》，奠定全书的苍凉基调——一切功业终将被时间淘洗。" },
      { quote: "夫英雄者，胸怀大志，腹有良谋，有包藏宇宙之机，吞吐天地之志者也。", context: "曹操与刘备煮酒论英雄时对英雄的定义，是全书权力哲学最浓缩的表达。" },
      { quote: "鞠躬尽瘁，死而后已。", context: "诸葛亮《后出师表》中的名句，是对一个将全部生命奉献给一项事业的灵魂的终极写照。" }
    ],
    insights: "《三国演义》在中国文化中的地位超出了一部小说——它是中国人的政治教科书、谋略百科和道德寓言。几百年来，它塑造了中国文化对英雄、智慧和忠诚的理解。但也需要警惕：它将复杂的历史简化为道德剧，将政治斗争美化为忠义的表演。作为现代读者，我们可以同时欣赏它的叙事魅力和反思它的意识形态局限——这正是经典阅读最珍贵的体验。",
  },

  "water-margin": {
    id: "water-margin",
    characters: [
      { name: "宋江", role: "主人公/梁山首领", description: "原为郓城县押司，因仗义疏财被称为'及时雨'。被迫上梁山后成为一百零八将之首，但他内心始终怀着'忠君报国'的理想——这一矛盾最终导致了梁山的悲剧结局。" },
      { name: "武松", role: "主要人物", description: "景阳冈打虎英雄，为兄报仇杀死西门庆与潘金莲。他是全书最具有个人反抗精神的英雄——勇猛、刚烈、爱憎分明，'行者'的绰号暗示了他最终的归宿。" },
      { name: "林冲", role: "重要人物", description: "原为东京八十万禁军枪棒教头，被高俅陷害后逼上梁山。他的故事是'官逼民反'最典型的例证——一个安分守己的人被一步步推向绝境的过程。" },
      { name: "鲁智深", role: "重要人物", description: "原名鲁达，因打抱不平打死恶霸镇关西而出家为僧。他性格豪爽直率，'禅杖打开危险路，戒刀杀尽不平人'，是梁山好汉中最纯粹的行侠仗义者。" },
    ],
    plotSummary: "北宋末年，朝政腐败，贪官横行。一百零八位好汉因不同遭遇被逼上梁山泊聚义——从八十万禁军教头林冲被高俅陷害、到打虎英雄武松为兄复仇、到及时雨宋江因题反诗被判死刑——每个人的故事都是一部官逼民反的缩影。他们在梁山竖起替天行道的大旗，两败童贯、三败高俅，声威震动朝野。然而招安之后，曾经反抗体制的英雄们成了体制的棋子——征方腊、讨田虎，一百零八将死伤殆尽，只留下千古蓼洼埋玉地的悲凉。",
    plotNodes: [
      { label: "逼上梁山", description: "林冲、武松、宋江等人的个人悲剧——一个又一个正直的人被腐败的体制推向绝路，最终聚义梁山" },
      { label: "梁山聚义", description: "一百零八位好汉从四面八方汇聚梁山，排定座次，竖起替天行道的旗帜——这是全书最辉煌的时刻" },
      { label: "接受招安", description: "在宋江的主导下，梁山接受了朝廷招安。这一决定是全书最大的道德悖论——忠与义之间的矛盾达到了顶点" },
      { label: "征讨方腊", description: "曾经的起义者为朝廷镇压另一支起义军。梁山好汉在这场兄弟相残的战争中死伤大半" },
      { label: "魂断蓼儿洼", description: "宋江被奸臣毒死，临终前为防李逵造反也让其饮下毒酒。一百零八将的辉煌终成蓼儿洼的一抔黄土" }
    ],
    themeAnalysis: "《水浒传》的核心主题是忠与义的悲剧性冲突。义是横向的——兄弟之间的互助与反抗不公；忠是纵向的——对皇权和秩序的服从。当这两者无法兼得时，梁山好汉的命运就已被注定。宋江的形象集中体现了这一悖论：他既是反抗者又是归顺者，既讲义气又忠于朝廷——最终两个理想都未能实现。更深层的，小说揭示了暴力的悲剧命运——以暴力反抗不公的英雄，最终要么被更大的暴力消灭，要么被体制收编、驯化。正是这种对反抗的局限性的清醒认识，使《水浒传》超越了一般的英雄传奇。",
    techniques: "《水浒传》在叙事结构上采用了独特的链式结构——前七十回以人物列传的形式展开，一个主要人物的故事自然引出下一个，如同锁链环环相扣。这种结构使每个英雄都有独立的闪光时刻，同时又共同构成了梁山的集体史诗。在语言上，小说以白话为主体，融入口语、俗语和方言，是中国文学从文言向白话转变的最重要里程碑之一。人物塑造尤为突出——一百零八将各有其独特的性格、语言方式和行为逻辑，尤其在林冲、武松、鲁智深、李逵等人的刻画上达到了中国古典小说人物塑造的顶峰。",
    excerpts: [
      { quote: "官逼民反，不得不反。", context: "全书最核心的政治命题——当合法的救济之路被堵死时，暴力反抗就成了唯一的选择。" },
      { quote: "禅杖打开危险路，戒刀杀尽不平人。", context: "对鲁智深的写照——一个以暴力对抗不公的佛教僧人，在禅与武之间找到了一种奇异的平衡。" },
      { quote: "路见不平一声吼，该出手时就出手。", context: "梁山好汉的行为准则——义不是抽象的道德，而是在具体情境中毫不犹豫地行动。" }
    ],
    insights: "《水浒传》是一面黑暗的镜子——它照出了中国帝制社会最深层的矛盾。在法纪不行、正义缺席的乱世中，暴力成了最后的手段。但小说的伟大之处在于它不让读者简单地陶醉于反抗的激情——它展现了暴力的毁灭性代价。英雄们不是死于敌人之手，而是死于他们所反抗的体制的收编。在当代世界，《水浒传》仍然在质问我们：当合法的正义渠道被封锁时，个人是否有权以非法的手段寻求正义？",
  },

  "the-analects": {
    id: "the-analects",
    plotSummary: "《论语》，春秋时期思想家、教育家孔子的弟子及再传弟子记录孔子及其弟子言行而编成的语录体文集，成书于战国前期，1973年河北定县八角廊汉墓与2016年江西南昌海昏侯墓先后出土竹简本《论语》，其中海昏侯墓竹简包含失传的《齐论》版本。全书共20篇492章，以语录体为主，叙事体为辅，集中体现孔子及儒家学派的政治主张、伦理思想、道德观念、教育原则，内容涉及政治、教育、文学、哲学及立身处世之道。其语言简练浅近而用意深远，通过对话和行动展示人物形象，形成雍容和顺、纡徐含蓄的风格。孔子教育注重因材施教，如《颜渊》篇针对不同弟子问仁作出差异答复。《论语》自宋代被列为&#34;四书&#34;之一，成为官定教科书和科举必读书。2021年《论语文献集成》明代编影印出版，系统整理历代《论语》文献。北京大学数字人文研究中心联合研发的&#34;识典古籍&#34;平台提供1200余部古籍在线阅读，包含《论语》等经典。",
    plotNodes: [
      { label: "第 1 部分", description: "《论语》，春秋时期思想家、教育家孔子的弟子及再传弟子记录孔子及其弟子言行而编成的语录体文集，成书于战国前期，1973年河北定县八角廊汉墓与2016年江西南昌海昏侯墓先后出土竹简本《论语》，其中海昏侯墓竹简包含失传的《齐论》版本。全书共20篇492章，以语录体为主，叙事体为辅，集中体现孔子及儒家学派的政治主张、伦理思想、道德观念、教育原则，内容涉及政治、教育、文学、哲学及立身处世之道。其语言简练浅近" },
      { label: "第 2 部分", description: "全书共20篇492章，以语录体为主，叙事体为辅，集中体现孔子及儒家学派的政治主张、伦理思想、道德观念、教育原则，内容涉及政治、教育、文学、哲学及立身处世之道 [1] [4]。其语言简练浅近而用意深远，通过对话和行动展示人物形象，形成雍容和顺、纡徐含蓄的风格 [1] [10]。孔子教育注重因材施教，如《颜渊》篇针对不同弟子问仁作出差异答复 [3] [11]。" },
      { label: "第 3 部分", description: "《论语》自宋代被列为\"四书\"之一，成为官定教科书和科举必读书 [10]。2021年《论语文献集成》明代编影印出版，系统整理历代《论语》文献 [18]。" }
    ],
    themeAnalysis: "《论语》，春秋时期思想家、教育家孔子的弟子及再传弟子记录孔子及其弟子言行而编成的语录体文集，成书于战国前期，1973年河北定县八角廊汉墓与2016年江西南昌海昏侯墓先后出土竹简本《论语》，其中海昏侯墓竹简包含失传的《齐论》版本。全书共20篇492章，以语录体为主，叙事体为辅，集中体现孔子及儒家学派的政治主张、伦理思想、道德观念、教育原则，内容涉及政治、教育、文学、哲学及立身处世之道。其语言简练浅近而用意深远，通过对话和行动展示人物形象，形成雍容和顺、纡徐含蓄的风格。孔子教育注重因材施教，如《颜渊》篇针对不同弟子问仁作出差异答复。《论语》自宋代被列为&#34;四书&#34;之一，成为官定教科书和科举必读书。2021年《论语文献集成》明代编影印出版，系统整理历代《论语》文献。北京大学数字人文研究中心联合研发的&#34;识典古籍&#34;平台提供1200余部古籍在线阅读，包含《论语》等经典。",
    techniques: "《论语》，春秋时期思想家、教育家孔子的弟子及再传弟子记录孔子及其弟子言行而编成的语录体文集，成书于战国前期，1973年河北定县八角廊汉墓与2016年江西南昌海昏侯墓先后出土竹简本《论语》，其中海昏侯墓竹简包含失传的《齐论》版本。全书共20篇492章，以语录体为主，叙事体为辅，集中体现孔子及儒家学派的政治主张、伦理思想、道德观念、教育原则，内容涉及政治、教育、文学、哲学及立身处世之道。其语言简练浅近而用意深远，通过对话和行动展示人物形象，形成雍容和顺、纡徐含蓄的风格。孔子教育注重因材施教，如《颜渊》篇针对不同弟子问仁作出差异答复。《论语》自宋代被列为&#34;四书&#34;之一，成为官定教科书和科举必读书。2021年《论语文献集成》明代编影印出版，系统整理历代《论语》文献。北京大学数字人文研究中心联合研发的&#34;识典古籍&#34;平台提供1200余部古籍在线阅读，包含《论语》等经典。",
    excerpts: [
      { quote: "之一，成为官定教科书和科举必读书 [10]。2021年《论语文献集成》明代编影印出版，系统整理历代《论语》文献 [18]。北京大学数字人文研究中心联合研发的", context: "来源：Analects" },
      { quote: "前十篇皆有子、曾子门人所记，去圣未远，礼制方明；后十篇则后人所续记，其时卿位益尊，卿权益重，盖有习于当世所称而未尝详考其体例者，故不能无异同也", context: "来源：Analects" },
      { quote: "《语丛·三》简引述《论语》，更确证该书之早", context: "来源：Analects" }
    ],
    insights: "《论语》，春秋时期思想家、教育家孔子的弟子及再传弟子记录孔子及其弟子言行而编成的语录体文集，成书于战国前期，1973年河北定县八角廊汉墓与2016年江西南昌海昏侯墓先后出土竹简本《论语》，其中海昏侯墓竹简包含失传的《齐论》版本。全书共20篇492章，以语录体为主，叙事体为辅，集中体现孔子及儒家学派的政治主张、伦理思想、道德观念、教育原则，内容涉及政治、教育、文学、哲学及立身处世之道。其语言简练浅近而用意深远，通过对话和行动展示人物形象，形成雍容和顺、纡徐含蓄的风格。孔子教育注重因材施教，如《颜渊》篇针对不同弟子问仁作出差异答复。《论语》自宋代被列为&#34;四书&#34;之一，成为官定教科书和科举必读书。2021年《论语文献集成》明代编影印出版，系统整理历代《论语》文献。北京大学数字人文研究中心联合研发的&#34;识典古籍&#34;平台提供1200余部古籍在线阅读，包含《论语》等经典。",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E8%AE%BA%E8%AF%AD", tier: "reference", fetchedAt: "2026-05-21T04:21:14.523Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
        { label: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/3330", tier: "original_text", fetchedAt: "2026-05-21T04:21:27.247Z", contributedFields: ["insights"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=Analects%20Confucius" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=Analects%20Confucius" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=Analects" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=Analects" },
      ],
    },
  },

  "tao-te-ching": {
    id: "tao-te-ching",
    characters: [
      { name: "Tao Te Ching", role: "角色", description: "Tao Te Ching 中的主要角色。" },
      { name: "Summary", role: "角色", description: "Tao Te Ching 中的主要角色。" },
      { name: "Study Guide", role: "角色", description: "Tao Te Ching 中的主要角色。" },
      { name: "Background", role: "角色", description: "Tao Te Ching 中的主要角色。" },
      { name: "Ching", role: "角色", description: "Tao Te Ching 中的主要角色。" },
      { name: "Lao Tzu", role: "角色", description: "Tao Te Ching 中的主要角色。" },
      { name: "About", role: "角色", description: "Tao Te Ching 中的主要角色。" }
    ],
    plotSummary: "Get ready to explore Tao Te Ching and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide Tao Te Ching Lao Tzu Tao Te Ching Lao Tzu 34 pages • 1-hour read Lao Tzu Tao Te Ching Nonfiction | Book | Adult A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Chapter Summaries & Analyses Books 1-10 Books 11-37 Books 38-59 Books 60-81 Themes Symbols & Motifs Important Quotes Essay Topics Quizzes NEW Reading Tools Discussion Questions Themes The Namelessness and Ineffability of the Way The book starts with the observation that the way, or tao, is nameless. The way has existed forever and has created everything on earth, bu",
    plotNodes: [
      { label: "Part 1", description: "Get ready to explore Tao Te Ching and its meaning." },
      { label: "Part 2", description: "Study Guide Tao Te Ching Lao Tzu Tao Te Ching Lao Tzu 34 pages • 1-hour read Lao Tzu Tao Te Ching Nonfiction | Book | Adult A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high" }
    ],
    themeAnalysis: "Get ready to explore Tao Te Ching and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide Tao Te Ching Lao Tzu Tao Te Ching Lao Tzu 34 pages • 1-hour read Lao Tzu Tao Te Ching Nonfiction | Book | Adult A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Chapter Summaries & Analyses Books 1-10 Books 11-37 Books 38-59 Books 60-81 Themes Symbols & Motifs Important Quotes Essay Topics Quizzes NEW Reading Tools Discussion Q",
    techniques: "",
    excerpts: [],
    insights: "[Tao Te Ching - Wikipedia] The Tao Te Ching or Dào Dé Jīng, [note 1] or Laozi in Chinese and scholarship, is an ancient Chinese classic text, becoming a foundational work of Taoism.\n\n[Tao Te Ching Themes | SuperSummary] Lao Tzu believes that the best way to survive is to keep a low profile and to do little more than just endure. The Tao Te Ching advises people not to try too ...\n\n[Tao Te Ching Summary & Study Guide - BookRags.com] Tao Te Ching Summary & Study Guide includes detailed chapter summaries and analysis, quotes, character descriptions, themes, and more.\n\n[Tao Te Ching Background | Gr",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E9%81%93%E5%BE%B7%E7%BB%8F", tier: "reference", fetchedAt: "2026-05-21T05:14:06.781Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "poems-li-bai": {
    id: "poems-li-bai",
    characters: [
      { name: "Spring Dawns", role: "角色", description: "Li Bai 中的主要角色。" },
      { name: "Quiet Night Thoughts", role: "角色", description: "Li Bai 中的主要角色。" },
      { name: "Delaine Rogers", role: "角色", description: "Li Bai 中的主要角色。" },
      { name: "Medium", role: "角色", description: "Li Bai 中的主要角色。" },
      { name: "Li Bai", role: "角色", description: "Li Bai 中的主要角色。" }
    ],
    plotSummary: "[Introduction & Overview of Drinking Alone Beneath the Moon] Plot Summary · Themes · Style · Historical Context ... This detailed literature summary also contains Bibliography on Drinking Alone Beneath the Moon by Li Bai.\n\n[Listening to the verses: unveiling phonetic contrasts in Li Bai and Du ...] The enduring comparison between Li Bai (李白, 701–762) and Du Fu (杜甫, 712–770), two towering poets in Chinese literary history, ...\n\n[Spring Dawns and Quiet Night Thoughts | by Delaine Rogers | Medium] Li Bai is remembered by history as “a hero among poets.” The educated who read his works praised him as a scholar, and the illiterates, who ...\n\n[A Poem of Changgan by Li Bai - Poem Analysis] 'A Poem of Changgan' by Li Bai is about a girl's longing for her husband who has undertaken a journey. This poem centers on a love story.",
    plotNodes: [
      { label: "Part 1", description: "[Introduction & Overview of Drinking Alone Beneath the Moon] Plot Summary · Themes · Style · Historical Context ..." },
      { label: "Part 2", description: "[Listening to the verses: unveiling phonetic contrasts in Li Bai and Du ...] The enduring comparison between Li Bai (李白, 701–762) and Du Fu (杜甫, 712–770), two towering poets in Chinese literary histor" },
      { label: "Part 3", description: "[Spring Dawns and Quiet Night Thoughts | by Delaine Rogers | Medium] Li Bai is remembered by history as “a hero among poets.” The educated who read his works praised him as a scholar, and the illitera" },
      { label: "Part 4", description: "[A Poem of Changgan by Li Bai - Poem Analysis] 'A Poem of Changgan' by Li Bai is about a girl's longing for her husband who has undertaken a journey." }
    ],
    themeAnalysis: "[Introduction & Overview of Drinking Alone Beneath the Moon] Plot Summary · Themes · Style · Historical Context ... This detailed literature summary also contains Bibliography on Drinking Alone Beneath the Moon by Li Bai.\n\n[Who was Li Bai, and what is his importance in Chinese literature?] Li Bai (701-762 AD) was the greatest poet in ancient China. His nickname was \"Shi Xian,\" meaning he was the god of poetry. Li Bai and the poet ...\n\n[A Poem of Changgan by Li Bai - Poem Analysis] 'A Poem of Changgan' by Li Bai is about a girl's longing for her husband who has undertaken a journey. This poem centers on a love story.\n\n李白，中国唐代浪漫主义诗人，字太白，号青莲居士，又号“谪仙”，有“诗仙”、“诗侠”之称，出生地有蜀郡绵州昌隆县（今四川省绵阳市江油市青莲镇）、河南洛阳、西域碎叶等说，祖籍陇西成纪（今甘肃天水秦安县），另有洛阳人、山东人等说，凉武昭王李暠九世孙。五岁时 ，李白发蒙读书，十五岁已有诗赋多首，并得到社会名流的推崇与奖掖，开始从事社会干谒活动。20岁时，开",
    techniques: "[Introduction & Overview of Drinking Alone Beneath the Moon] Plot Summary · Themes · Style · Historical Context ... This detailed literature summary also contains Bibliography on Drinking Alone Beneath the Moon by Li Bai.\n\n[Listening to the verses: unveiling phonetic contrasts in Li Bai and Du ...] The enduring comparison between Li Bai (李白, 701–762) and Du Fu (杜甫, 712–770), two towering poets in Chinese literary history, ...",
    excerpts: [
      { quote: "The Banished Immortal: A Life of Li Bai", context: "From Li Bai" }
    ],
    insights: "[Li Bai - Wikipedia] Li Bai's poems became models for celebrating the pleasures of friendship, the depth of nature, solitude, and the joys of drinking. Among the most famous are \" ...\n\n[Introduction & Overview of Drinking Alone Beneath the Moon] Plot Summary · Themes · Style · Historical Context ... This detailed literature summary also contains Bibliography on Drinking Alone Beneath the Moon by Li Bai.\n\n[\"The Banished Immortal: A Life of Li Bai\" by Ha Jin] Li Bai was a physically-impressive man of supreme intelligence, passion and sheer love of life, whose poems were known in China to high an",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E6%9D%8E%E7%99%BD", tier: "reference", fetchedAt: "2026-05-21T05:13:09.025Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "poems-du-fu": {
    id: "poems-du-fu",
    characters: [
      { name: "Poetry Corner", role: "角色", description: "Du Fu 中的主要角色。" },
      { name: "July", role: "角色", description: "Du Fu 中的主要角色。" },
      { name: "The River Village", role: "角色", description: "Du Fu 中的主要角色。" },
      { name: "Du Fu", role: "角色", description: "Du Fu 中的主要角色。" },
      { name: "Tu Fu", role: "角色", description: "Du Fu 中的主要角色。" }
    ],
    plotSummary: "[Poetry Corner: July 15- \"The River Village\" by Du Fu aka Tu Fu] It strikes me that Du Fu's life was shaped by displacement, and now, in this poem, his characters “come and go as they please” and his narrator ...\n\n[In the Footsteps of Du Fu - 3 Quarks Daily] Du Fu's poems accept the evanescence of a person's time on earth, exploring the pathos of a life without enduring impact. And yet, one can never ...",
    plotNodes: [
      { label: "Part 1", description: "[Poetry Corner: July 15- \"The River Village\" by Du Fu aka Tu Fu] It strikes me that Du Fu's life was shaped by displacement, and now, in this poem, his characters “come and go as they please” and his " },
      { label: "Part 2", description: "[In the Footsteps of Du Fu - 3 Quarks Daily] Du Fu's poems accept the evanescence of a person's time on earth, exploring the pathos of a life without enduring impact." }
    ],
    themeAnalysis: "[(PDF) A Study of Du Fu's Poetry in the West in Modern Times] This study objectively reflects the development, theme and hotspots of modern western Du Fu poetry research.\n\n[[PDF] A Study of Du Fu's Poetry in the West in Modern Times] In a word, this study objectively reflects the development, theme and hotspots of modern western Du Fu poetry research, which has certain significance for fully ...",
    techniques: "",
    excerpts: [],
    insights: "[Du Fu - Wikipedia] Du Fu was a Chinese poet and politician during the Tang dynasty. Together with his elder contemporary and friend Li Bai, Du is often considered one of the ...\n\n[In the Footsteps of Du Fu by Michael Wood review – the great poet's ...] In the Footsteps of Du Fu by Michael Wood review – the great poet's progress. A superb evocation of the Chinese master and his travels.\n\n[Poetry Corner: July 15- \"The River Village\" by Du Fu aka Tu Fu] It strikes me that Du Fu's life was shaped by displacement, and now, in this poem, his characters “come and go as they please” and his narrator",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E6%9D%9C%E7%94%AB", tier: "reference", fetchedAt: "2026-05-21T05:15:08.167Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "shiji": {
    id: "shiji",
    plotSummary: "《史记》，二十四史之一，最初称为《太史公书》或《太史公记》《太史记》，是西汉史学家司马迁撰写的纪传体史书，是中国历史上第一部纪传体通史，记载了上至上古传说中的黄帝时代，下至汉武帝太初四年间共三千多年的历史。太初元年（前104年），司马迁开始了该书创作，前后经历了十四年，才得以完成。《史记》全书包括十二本纪（记历代帝王政绩）、三十世家（记诸侯国和汉代诸侯、勋贵兴亡）、七十列传（记重要人物的言行事迹，主要叙人臣，其中最后一篇为自序）、十表（大事年表）、八书（记各种典章制度记礼、乐、音律、历法、天文、封禅、水利、财用）。《史记》共一百三十篇，五十二万六千五百余字，比《淮南子》多三十九万五千余字，比《吕氏春秋》多二十八万八千余字。《史记》规模巨大，体系完备，而且对此后的纪传体史书影响很深，历朝正史皆采用这种体裁撰写。",
    plotNodes: [
      { label: "第 1 部分", description: "《史记》，二十四史之一，最初称为《太史公书》或《太史公记》《太史记》，是西汉史学家司马迁撰写的纪传体史书，是中国历史上第一部纪传体通史，记载了上至上古传说中的黄帝时代，下至汉武帝太初四年间共三千多年的历史。太初元年（前104年），司马迁开始了该书创作，前后经历了十四年，才得以完成。《史记》全书包括十二本纪（记历代帝王政绩）、三十世家（记诸侯国和汉代诸侯、勋贵兴亡）、七十列传（记重要人物的言行事迹，" },
      { label: "第 2 部分", description: "《史记》全书包括十二本纪（记历代帝王政绩）、三十世家（记诸侯国和汉代诸侯、勋贵兴亡）、七十列传（记重要人物的言行事迹，主要叙人臣，其中最后一篇为自序）、十表（大事年表）、八书（记各种典章制度记礼、乐、音律、历法、天文、封禅、水利、财用）。《史记》共一百三十篇，五十二万六千五百余字，比《淮南子》多三十九万五千余字，比《吕氏春秋》多二十八万八千余字。《史记》规模巨大，体系完备，而且对此后的纪传体史书影" }
    ],
    themeAnalysis: "《史记》，二十四史之一，最初称为《太史公书》或《太史公记》《太史记》，是西汉史学家司马迁撰写的纪传体史书，是中国历史上第一部纪传体通史，记载了上至上古传说中的黄帝时代，下至汉武帝太初四年间共三千多年的历史。太初元年（前104年），司马迁开始了该书创作，前后经历了十四年，才得以完成。《史记》全书包括十二本纪（记历代帝王政绩）、三十世家（记诸侯国和汉代诸侯、勋贵兴亡）、七十列传（记重要人物的言行事迹，主要叙人臣，其中最后一篇为自序）、十表（大事年表）、八书（记各种典章制度记礼、乐、音律、历法、天文、封禅、水利、财用）。《史记》共一百三十篇，五十二万六千五百余字，比《淮南子》多三十九万五千余字，比《吕氏春秋》多二十八万八千余字。《史记》规模巨大，体系完备，而且对此后的纪传体史书影响很深，历朝正史皆采用这种体裁撰写。",
    techniques: "《史记》，二十四史之一，最初称为《太史公书》或《太史公记》《太史记》，是西汉史学家司马迁撰写的纪传体史书，是中国历史上第一部纪传体通史，记载了上至上古传说中的黄帝时代，下至汉武帝太初四年间共三千多年的历史。太初元年（前104年），司马迁开始了该书创作，前后经历了十四年，才得以完成。《史记》全书包括十二本纪（记历代帝王政绩）、三十世家（记诸侯国和汉代诸侯、勋贵兴亡）、七十列传（记重要人物的言行事迹，主要叙人臣，其中最后一篇为自序）、十表（大事年表）、八书（记各种典章制度记礼、乐、音律、历法、天文、封禅、水利、财用）。《史记》共一百三十篇，五十二万六千五百余字，比《淮南子》多三十九万五千余字，比《吕氏春秋》多二十八万八千余字。《史记》规模巨大，体系完备，而且对此后的纪传体史书影响很深，历朝正史皆采用这种体裁撰写。",
    excerpts: [],
    insights: "《史记》，二十四史之一，最初称为《太史公书》或《太史公记》《太史记》，是西汉史学家司马迁撰写的纪传体史书，是中国历史上第一部纪传体通史，记载了上至上古传说中的黄帝时代，下至汉武帝太初四年间共三千多年的历史。太初元年（前104年），司马迁开始了该书创作，前后经历了十四年，才得以完成。《史记》全书包括十二本纪（记历代帝王政绩）、三十世家（记诸侯国和汉代诸侯、勋贵兴亡）、七十列传（记重要人物的言行事迹，主要叙人臣，其中最后一篇为自序）、十表（大事年表）、八书（记各种典章制度记礼、乐、音律、历法、天文、封禅、水利、财用）。《史记》共一百三十篇，五十二万六千五百余字，比《淮南子》多三十九万五千余字，比《吕氏春秋》多二十八万八千余字。《史记》规模巨大，体系完备，而且对此后的纪传体史书影响很深，历朝正史皆采用这种体裁撰写。",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%8F%B2%E8%AE%B0", tier: "reference", fetchedAt: "2026-05-21T04:24:22.950Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=Records%20of%20the%20Grand%20Historian%20Sima%20Qian" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=Records%20of%20the%20Grand%20Historian%20Sima%20Qian" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=Records%20of%20the%20Grand%20Historian" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=Records%20of%20the%20Grand%20Historian" },
      ],
    },
  },

  "strange-stories": {
    id: "strange-stories",
    plotSummary: "[(PDF) Strange Tales from a Chinese Studio: Book review] This paper is a book review for \"The Strange Tales from a Chinese Studio\". The authors reviewed the plot the themes and the characters in the 104 stories ...\n\n[Strange Tales from a Chinese Studio - Wikipedia] ... Strange Tales from a Chinese Studio by Pu Songling A depiction of the story \"Luo Zu\", from an illustrated edition located in the National Museum of China. Pu ...\n\n[“The Painted Skin” Critical Analysis – Spirited Ink - Pressbooks] Pu Songling uses the supernatural elements of the story to highlight the ... (Strange Tales from a Chinese Studio). Translated by John Minford. Penguin ...\n\n《聊斋志异》（简称《聊斋》，俗名《鬼狐传》）是中国清朝小说家蒲松龄创作的文言短篇小说集，最早的抄本在清代康熙年间已有流传。全书共有短篇小说491篇（张友鹤《聊斋志异会校会注会评本》），一说494篇（朱其铠《全本新注聊斋志异》）。它们或者揭露封建统治的黑暗，或者抨击科举制度的腐朽，或者反抗封建礼教的束缚，具有丰富深刻的思想内容。描写爱情主题的作品，在全书中数量最多，它们表现了强烈的反封建礼教的精神。其中一些作品，通过花妖狐魅和人的恋爱，表现了作者理想的爱情。《聊斋志异》多谈狐、仙、鬼、妖，以此来概括当时的社会关系，反映了17世纪中国的社会面貌，对当时社会的腐败、黑暗进行了有力的批判，在一定程度上揭露了社会的矛盾，表达了人民的愿望，但其中也不可避免地夹杂着一些封建伦理观念和因果报应",
    plotNodes: [
      { label: "Part 1", description: "[(PDF) Strange Tales from a Chinese Studio: Book review] This paper is a book review for \"The Strange Tales from a Chinese Studio\"." },
      { label: "Part 2", description: "[Strange Tales from a Chinese Studio - Wikipedia] ..." },
      { label: "Part 3", description: "[“The Painted Skin” Critical Analysis – Spirited Ink - Pressbooks] Pu Songling uses the supernatural elements of the story to highlight the ..." },
      { label: "Part 4", description: "《聊斋志异》（简称《聊斋》，俗名《鬼狐传》）是中国清朝小说家蒲松龄创作的文言短篇小说集，最早的抄本在清代康熙年间已有流传。全书共有短篇小说491篇（张友鹤《聊斋志异会校会注会评本》），一说494篇（朱其铠《全本新注聊斋志异》）。它们或者揭露封建统治的黑暗，或者抨击科举制度的腐朽，或者反抗封建礼教的束缚，具有丰富深刻的思想内容。描写爱情主题的作品，在全书中数量最多，它们表现了强烈的反封建礼教的精神。" }
    ],
    themeAnalysis: "[(PDF) Strange Tales from a Chinese Studio: Book review] This paper is a book review for \"The Strange Tales from a Chinese Studio\". The authors reviewed the plot the themes and the characters in the 104 stories ...\n\n[“The Painted Skin” Critical Analysis – Spirited Ink - Pressbooks] Pu Songling uses the supernatural elements of the story to highlight the ... (Strange Tales from a Chinese Studio). Translated by John Minford. Penguin ...\n\n《聊斋志异》（简称《聊斋》，俗名《鬼狐传》）是中国清朝小说家蒲松龄创作的文言短篇小说集，最早的抄本在清代康熙年间已有流传。全书共有短篇小说491篇（张友鹤《聊斋志异会校会注会评本》），一说494篇（朱其铠《全本新注聊斋志异》）。它们或者揭露封建统治的黑暗，或者抨击科举制度的腐朽，或者反抗封建礼教的束缚，具有丰富深刻的思想内容。描写爱情主题的作品，在全书中数量最多，它们表现了强烈的反封建礼教的精神。其中一些作品，通过花妖狐魅和人的恋爱，表现了作者理想的爱情。《聊斋志异》多谈狐、仙、鬼、妖，以此来概括当时的社会关系，反映了17世纪中国的社会面貌，对当时社会的腐败、黑暗进行了有力的批判，在一定程度上揭露了社会的矛盾，表达了人民的愿望，但其中也不可避免地夹杂着一些封建伦理观念和因果报应的宿命论思想。《聊斋志异》一问世，",
    techniques: "[What are the similarities and differences in the styles of Pu ... - 知乎] Firstly, from the overall style of the work, Strange Tales from a Chinese Studio (The Scholars' Ghost Stories) is renowned for its fantastical and magnificent ...",
    excerpts: [
      { quote: "The Strange Tales from a Chinese Studio", context: "From Strange Tales from a Chinese Studio" }
    ],
    insights: "[Strange Tales from a Chinese Studio by Pu Songling | Goodreads] Part of the interest of Strange Tales from a Chinese Studio inheres in the way the tales provide insight into the 17th-century Chinese culture of the Qing ...\n\n[Strange Tales from a Chinese Studio - Wikipedia] ... Strange Tales from a Chinese Studio by Pu Songling A depiction of the story \"Luo Zu\", from an illustrated edition located in the National Museum of China. Pu ...\n\n[Book Review: Strange Tales from a Chinese Studio by Pu Songling ...] Strange Tales from a Chinese Studio collects 164 tales by Pu Songling. I don't really th",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E8%81%8A%E6%96%8B%E5%BF%97%E5%BC%82", tier: "reference", fetchedAt: "2026-05-21T05:14:09.020Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "diary-of-madman": {
    id: "diary-of-madman",
    plotSummary: "Lu Xun created A Madman&#x27;s Diary one year before the May Fourth Movement. The Xinhai Revolution had overthrown the rule of the Qing dynasty, but it did not fundamentally shake the traditional cultural foundation of feudal rule; the Chinese populace at that time remained in deep water and scorching fire. Being part of this context, Lu Xun naturally understood that the revolution had failed to change\n\nCreative Background Historical Context Literary Sources Character Prototype Motivation for Creation Plot Character Introduction Literary Features Thematic Ideas Content Structure Creative Method Narrative Time Narrative Perspective Symbolic Imagery Irony Technique Detailed Description Impact of the Work Social Impact Literary Impact Derivative Works Critical Reception\n\n[A Madman's Diary Character Analysis - Course Hero] This study guide for Lu Xun's A Madman's Diary offers summary and analysis on themes, symbols, and other literary devices found in the text.\n\n[Diary of a Madman by Lu Xu",
    plotNodes: [
      { label: "Part 1", description: "Lu Xun created A Madman&#x27;s Diary one year before the May Fourth Movement." },
      { label: "Part 2", description: "Creative Background Historical Context Literary Sources Character Prototype Motivation for Creation Plot Character Introduction Literary Features Thematic Ideas Content Structure Creative Method Narra" },
      { label: "Part 3", description: "[A Madman's Diary Character Analysis - Course Hero] This study guide for Lu Xun's A Madman's Diary offers summary and analysis on themes, symbols, and other literary devices found in the text." }
    ],
    themeAnalysis: "[A Madman's Diary Character Analysis - Course Hero] This study guide for Lu Xun's A Madman's Diary offers summary and analysis on themes, symbols, and other literary devices found in the text.\n\n[Diary of a Madman by Lu Xun | Summary, Theme & Analysis - Lesson] \"Diary of a Madman\", or \"A Madman's Diary\" is a short story that was written by Lu Xun and published in 1918. It is a sociopolitical commentary that criticizes ...\n\n[A Madman's Diary Study Guide - Course Hero] This study guide for Lu Xun's A Madman's Diary offers summary and analysis on themes, symbols, and other literary devices found in the text.\n\n[[PDF] Analysis of the Cannibalism in A Madman's Diary - Atlantis Press] It is concluded that cannibalism is not merely limited in literal meaning, but has different explanations. Keyword",
    techniques: "Lu Xun created A Madman&#x27;s Diary one year before the May Fourth Movement. The Xinhai Revolution had overthrown the rule of the Qing dynasty, but it did not fundamentally shake the traditional cultural foundation of feudal rule; the Chinese populace at that time remained in deep water and scorching fire. Being part of this context, Lu Xun naturally understood that the revolution had failed to change\n\nCreative Background Historical Context Literary Sources Character Prototype Motivation for Creation Plot Character Introduction Literary Features Thematic Ideas Content Structure Creative Metho",
    excerpts: [
      { quote: ", also translated as ", context: "From A Madman's Diary" },
      { quote: " and a Chinese Modernism - jstor] of Lu Xun's story suggests should be taken neither as a belated Third ... Lit., 1981. . ", context: "From A Madman's Diary" }
    ],
    insights: "[Diary of a Madman (Lu Xun) - Wikipedia] Diary of a Madman\", also translated as \"A Madman's Diary is a short story by the Chinese writer Lu Xun, published in 1918. It was the first and one of the ...\n\n[A Madman's Diary] The exposure of the essence of \"cannibalism\" in A Madman's Diary stems from Lu Xun's observations and concerns about the spiritual state of the populace in old ...\n\n[A Madman's Diary Character Analysis - Course Hero] This study guide for Lu Xun's A Madman's Diary offers summary and analysis on themes, symbols, and other literary devices found in the text.\n\n[Diary of a Madman by",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E7%8B%82%E4%BA%BA%E6%97%A5%E8%AE%B0", tier: "reference", fetchedAt: "2026-05-21T05:12:19.126Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  // ==================== 亚洲 — 日本 ====================

  "pillow-book": {
    id: "pillow-book",
    plotSummary: "《枕草子》（まくらのそうし），是日本平安时期女作家清少纳言创作的随笔集，大约成书于1001年。作者清少纳言在宫廷之中任职期间所见所闻甚多，她将其整理成三百篇，从几方面来记述。一是用平安时代最为流行的“物尽”手法，写成的文字，也就是运用列举的方式来描写事物的一种古旧文体，例如“树木的花”“可憎的事”“可爱的人”等等；二是“女人独居的地方”之类随笔；三是她开始入职宫廷的回忆录。正如她在书中最后一段所说：“这本随笔本来只是在家闲居无聊的时候，把自己眼里看到、心里想到的事情记录下来的，并没有打算给什么人去看……”作者清少纳言的这段话将作品的真实性、随意性等特定表达得淋漓尽致。《枕草子》最为核心的内容实际上就是表达作者的感受以及感悟，不仅能够将作者积极的生活态度呈现出来，同时不乏表现散文的特点。《枕草子》开日本随笔文学之先河。",
    plotNodes: [
      { label: "第 1 部分", description: "《枕草子》（まくらのそうし），是日本平安时期女作家清少纳言创作的随笔集，大约成书于1001年。作者清少纳言在宫廷之中任职期间所见所闻甚多，她将其整理成三百篇，从几方面来记述。一是用平安时代最为流行的“物尽”手法，写成的文字，也就是运用列举的方式来描写事物的一种古旧文体，例如“树木的花”“可憎的事”“可爱的人”等等；二是“女人独居的地方”之类随笔；三是她开始入职宫廷的回忆录。正如她在书中最后一段所说" },
      { label: "第 2 部分", description: "作者清少纳言在宫廷之中任职期间所见所闻甚多，她将其整理成三百篇，从几方面来记述。一是用平安时代最为流行的“物尽”手法，写成的文字，也就是运用列举的方式来描写事物的一种古旧文体，例如“树木的花”“可憎的事”“可爱的人”等等；二是“女人独居的地方”之类随笔；三是她开始入职宫廷的回忆录。正如她在书中最后一段所说：“这本随笔本来只是在家闲居无聊的时候，把自己眼里看到、心里想到的事情记录下来的，并没有打算给" }
    ],
    themeAnalysis: "《枕草子》（まくらのそうし），是日本平安时期女作家清少纳言创作的随笔集，大约成书于1001年。作者清少纳言在宫廷之中任职期间所见所闻甚多，她将其整理成三百篇，从几方面来记述。一是用平安时代最为流行的“物尽”手法，写成的文字，也就是运用列举的方式来描写事物的一种古旧文体，例如“树木的花”“可憎的事”“可爱的人”等等；二是“女人独居的地方”之类随笔；三是她开始入职宫廷的回忆录。正如她在书中最后一段所说：“这本随笔本来只是在家闲居无聊的时候，把自己眼里看到、心里想到的事情记录下来的，并没有打算给什么人去看……”作者清少纳言的这段话将作品的真实性、随意性等特定表达得淋漓尽致。《枕草子》最为核心的内容实际上就是表达作者的感受以及感悟，不仅能够将作者积极的生活态度呈现出来，同时不乏表现散文的特点。《枕草子》开日本随笔文学之先河。《枕草子》与同时代的另一部日本文学经典《源氏物语》，被喻为日本平安时代文学\n《枕草子》（まくらのそうし），是日本平安时期女作家清少纳言创作的随笔集，大约成书于1001年。\n\n作者清少纳言在宫廷之中任职期间所见所闻甚多，她将其整理成三百篇，从几方面来记述。",
    techniques: "《枕草子》（まくらのそうし），是日本平安时期女作家清少纳言创作的随笔集，大约成书于1001年。作者清少纳言在宫廷之中任职期间所见所闻甚多，她将其整理成三百篇，从几方面来记述。一是用平安时代最为流行的“物尽”手法，写成的文字，也就是运用列举的方式来描写事物的一种古旧文体，例如“树木的花”“可憎的事”“可爱的人”等等；二是“女人独居的地方”之类随笔；三是她开始入职宫廷的回忆录。正如她在书中最后一段所说：“这本随笔本来只是在家闲居无聊的时候，把自己眼里看到、心里想到的事情记录下来的，并没有打算给什么人去看……”作者清少纳言的这段话将作品的真实性、随意性等特定表达得淋漓尽致。《枕草子》最为核心的内容实际上就是表达作者的感受以及感悟，不仅能够将作者积极的生活态度呈现出来，同时不乏表现散文的特点。《枕草子》开日本随笔文学之先河。",
    excerpts: [
      { quote: "这本随笔本来只是在家闲居无聊的时候，把自己眼里看到、心里想到的事情记录下来的，并没有打算给什么人去看……", context: "来源：The Pillow Book" },
      { quote: "这本随笔本来只是在家闲居无聊的时候，把自己眼里看到、心里想到的事情记录下来的，并没有打算给什么人去看……", context: "来源：The Pillow Book" }
    ],
    insights: "《枕草子》（まくらのそうし），是日本平安时期女作家清少纳言创作的随笔集，大约成书于1001年。作者清少纳言在宫廷之中任职期间所见所闻甚多，她将其整理成三百篇，从几方面来记述。一是用平安时代最为流行的“物尽”手法，写成的文字，也就是运用列举的方式来描写事物的一种古旧文体，例如“树木的花”“可憎的事”“可爱的人”等等；二是“女人独居的地方”之类随笔；三是她开始入职宫廷的回忆录。正如她在书中最后一段所说：“这本随笔本来只是在家闲居无聊的时候，把自己眼里看到、心里想到的事情记录下来的，并没有打算给什么人去看……”作者清少纳言的这段话将作品的真实性、随意性等特定表达得淋漓尽致。《枕草子》最为核心的内容实际上就是表达作者的感受以及感悟，不仅能够将作者积极的生活态度呈现出来，同时不乏表现散文的特点。《枕草子》开日本随笔文学之先河。",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E6%9E%95%E8%8D%89%E5%AD%90", tier: "reference", fetchedAt: "2026-05-21T04:26:31.221Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
        { label: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/76016", tier: "original_text", fetchedAt: "2026-05-21T04:26:44.453Z", contributedFields: ["insights"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=The%20Pillow%20Book%20Sei%20Shonagon" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=The%20Pillow%20Book%20Sei%20Shonagon" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=The%20Pillow%20Book" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=The%20Pillow%20Book" },
      ],
    },
  },

  "kokoro": {
    id: "kokoro",
    plotSummary: "Other articles where Kokoro is discussed: Japanese literature: The novel between 1905 and 1941: His best-known novel, Kokoro (1914; “The Heart”; Eng. trans. Kokoro), revolves around another familiar situation in his novels, two men in love with the same woman. His last novel, Meian (1916; Light and Darkness), though unfinished, has been acclaimed by some as his masterpiece.",
    plotNodes: [
      { label: "第 1 部分", description: "Other articles where Kokoro is discussed: Japanese literature: The novel between 1905 and 1941: His best-known novel, Kokoro (1914; “The Heart”; Eng. trans." }
    ],
    themeAnalysis: "心（拼音：xīn）为汉语一级通用规范汉字（常用字）。此字始见于商代甲骨文。“心”古字形像人或鸟兽的心脏，本义即心脏。古人认为心是思维的器官，因此把思想、感情都说做“心”。又由思维器官引申为心思、思想、意念、感情、性情等，又引申为思虑、谋划。心脏在人体的中央位置，故“心”又有中央、中心、中间部位等义。“心”是汉字部首之一，序号：98。“心”在字的左半边写作“忄”，如恨、忧、怀。在字的下半部有的写作“心”，如：思、想。有的写作“⺗”，如：恭、慕、忝。以“心”为意符的字大多与思想、感情有关。\n心（拼音：xīn）为汉语一级通用规范汉字（常用字） [1]。此字始见于商代甲骨文。“心”古字形像人或鸟兽的心脏，本义即心脏。古人认为心是思维的器官，因此把思想、感情都说做“心”。又由思维器官引申为心思、思想、意念、感情、性情等，又引申为思虑、谋划。心脏在人体的中央位置，故“心”又有中央、中心、中间部位等义。\n\n“心”是汉字部首之一，序号：98。“心”在字的左半边写作“忄”，如恨、忧、怀。在字的下半部有的写作“心”，如：思、想。有的写作“⺗”，如：恭、慕、忝。以“心”为意符的字大多与思想、感情有关。",
    techniques: "心（拼音：xīn）为汉语一级通用规范汉字（常用字）。此字始见于商代甲骨文。“心”古字形像人或鸟兽的心脏，本义即心脏。古人认为心是思维的器官，因此把思想、感情都说做“心”。又由思维器官引申为心思、思想、意念、感情、性情等，又引申为思虑、谋划。心脏在人体的中央位置，故“心”又有中央、中心、中间部位等义。“心”是汉字部首之一，序号：98。“心”在字的左半边写作“忄”，如恨、忧、怀。在字的下半部有的写作“心”，如：思、想。有的写作“⺗”，如：恭、慕、忝。以“心”为意符的字大多与思想、感情有关。\n心（拼音：xīn）为汉语一级通用规范汉字（常用字） [1]。此字始见于商代甲骨文。“心”古字形像人或鸟兽的心脏，本义即心脏。古人认为心是思维的器官，因此把思想、感情都说做“心”。又由思维器官引申为心思、思想、意念、感情、性情等，又引申为思虑、谋划。心脏在人体的中央位置，故“心”又有中央、中心、中间部位等义。",
    excerpts: [
      { quote: "何谓人情？喜、怒、哀、惧、爱、恶、欲七者，不学而能。", context: "来源：Kokoro" },
      { quote: "古（文）《尚书》说：脾，木也；肺，火也；心，土也；肝，金也；肾，水也。", context: "来源：Kokoro" },
      { quote: "古《尚书》说为土藏者，五行土位于中，举五藏之部位言也。", context: "来源：Kokoro" }
    ],
    insights: "心（拼音：xīn）为汉语一级通用规范汉字（常用字）。此字始见于商代甲骨文。“心”古字形像人或鸟兽的心脏，本义即心脏。古人认为心是思维的器官，因此把思想、感情都说做“心”。又由思维器官引申为心思、思想、意念、感情、性情等，又引申为思虑、谋划。心脏在人体的中央位置，故“心”又有中央、中心、中间部位等义。“心”是汉字部首之一，序号：98。“心”在字的左半边写作“忄”，如恨、忧、怀。在字的下半部有的写作“心”，如：思、想。有的写作“⺗”，如：恭、慕、忝。以“心”为意符的字大多与思想、感情有关。\n心（拼音：xīn）为汉语一级通用规范汉字（常用字） [1]。此字始见于商代甲骨文。“心”古字形像人或鸟兽的心脏，本义即心脏。古人认为心是思维的器官，因此把思想、感情都说做“心”。又由思维器官引申为心思、思想、意念、感情、性情等，又引申为思虑、谋划。心脏在人体的中央位置，故“心”又有中央、中心、中间部位等义。",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%BF%83", tier: "reference", fetchedAt: "2026-05-21T04:25:10.619Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
        { label: "Britannica", url: "https://www.britannica.com/topic/Kokoro", tier: "reference", fetchedAt: "2026-05-21T04:25:25.726Z", contributedFields: ["plotSummary", "themeAnalysis"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=Kokoro%20Natsume%20Soseki" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=Kokoro%20Natsume%20Soseki" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=Kokoro" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=Kokoro" },
      ],
    },
  },

  "snow-country": {
    id: "snow-country",
    plotSummary: "《雪国》（ゆきぐに）是日本作家川端康成创作的第一部中篇小说，从1935年起以短篇的形式，分别以《暮景的镜》《白昼的镜》等题名，断断续续地发表在《文艺春秋》《改造》等杂志上，相互之间并没有紧密相连的情节，直至全部完成并经认真修改后，才冠以《雪国》于1948年汇集出版单行本。该小说讲述男主人公岛村是东京的一个舞蹈艺术研究家，因为无聊，告别了妻小来到雪国游玩，邂逅了当地一名艺伎驹子。驹子给岛村留下了深刻的印象。此后岛村第二次前往雪国，在车上又被邻座的叶子所吸引，岛村对叶子产生了倾慕之情。车子到站后，岛村发现叶子和自己在同一个车站下车。岛村来到旅馆又找到了驹子，旧情重温。当岛村察觉到驹子对自己的感情之后，知道这场爱是徒劳的，所以决定分手。第二年的秋天，岛村第三次来到雪国，他一边迷恋驹子身体的美丽，一边又陶醉于叶子超脱凡尘的美，正当岛村下定决心要离开雪国的前夕，村里发生了一场大火，叶子在火中丧生。作\n《雪国》（ゆきぐに）是日本作家川端康成创作的第一部中篇小说，从1935年起以短篇的形式，分别以《暮景的镜》《白昼的镜》等题名，断断续续地发表在《文艺春秋》《改造》等杂志上，相互之间并没有紧密相连的情节，直至全部完成并经认真修改后，才冠以《雪国》于1948年汇集出版单行本。 [6]\n\n该小说讲述男主人公岛村是东京的一个舞蹈艺术研究家，因为无聊，告别了妻小来到雪国游玩，邂逅了当地一名艺伎驹子。驹子给岛村留下了深刻的印象。此后岛村第二次前往雪国，在车上又被邻座的叶子所吸引，岛村对叶子产生了倾慕之情。车子到站后，岛村发现叶子和自己在同一个车站下车。岛村来到旅馆又找到了驹子，旧情重温。当岛村察觉到驹子对自己的感情之后，知道这场爱是徒劳的，所以决定分手。第二年的秋天，岛村第三次来到雪国，他一边迷恋驹子身体的美丽，一边又陶醉于叶子超脱凡尘的美，正当岛村下定决心要离开雪国的前夕，村里发生了一场大火，叶子在火中丧生。 [3]作者通过对驹子、叶子、岛村的“三角恋爱”故事的描写，反映出“雪国”内外无论是贫贱的人，还是阔绰的人，都处于不幸的生活境地。 [13]《雪国》将日本文学的传统美与西方现代派手法相结合，鲜明地体现了“新感觉派”所主张的以纯粹的个人官能感觉作为出发点，依靠直觉来把握事物的特点。 [16]\n\n《雪国》作为日本近代文学的经典之作，被译成多国文字。 [6]该小说和《千只鹤》《古都》作为川端",
    plotNodes: [
      { label: "Part 1", description: "《雪国》（ゆきぐに）是日本作家川端康成创作的第一部中篇小说，从1935年起以短篇的形式，分别以《暮景的镜》《白昼的镜》等题名，断断续续地发表在《文艺春秋》《改造》等杂志上，相互之间并没有紧密相连的情节，直至全部完成并经认真修改后，才冠以《雪国》于1948年汇集出版单行本。该小说讲述男主人公岛村是东京的一个舞蹈艺术研究家，因为无聊，告别了妻小来到雪国游玩，邂逅了当地一名艺伎驹子。驹子给岛村留下了深刻" },
      { label: "Part 2", description: "该小说讲述男主人公岛村是东京的一个舞蹈艺术研究家，因为无聊，告别了妻小来到雪国游玩，邂逅了当地一名艺伎驹子。驹子给岛村留下了深刻的印象。此后岛村第二次前往雪国，在车上又被邻座的叶子所吸引，岛村对叶子产生了倾慕之情。车子到站后，岛村发现叶子和自己在同一个车站下车。岛村来到旅馆又找到了驹子，旧情重温。当岛村察觉到驹子对自己的感情之后，知道这场爱是徒劳的，所以决定分手。第二年的秋天，岛村第三次来到雪国，" },
      { label: "Part 3", description: "《雪国》作为日本近代文学的经典之作，被译成多国文字。" }
    ],
    themeAnalysis: "《雪国》（ゆきぐに）是日本作家川端康成创作的第一部中篇小说，从1935年起以短篇的形式，分别以《暮景的镜》《白昼的镜》等题名，断断续续地发表在《文艺春秋》《改造》等杂志上，相互之间并没有紧密相连的情节，直至全部完成并经认真修改后，才冠以《雪国》于1948年汇集出版单行本。该小说讲述男主人公岛村是东京的一个舞蹈艺术研究家，因为无聊，告别了妻小来到雪国游玩，邂逅了当地一名艺伎驹子。驹子给岛村留下了深刻的印象。此后岛村第二次前往雪国，在车上又被邻座的叶子所吸引，岛村对叶子产生了倾慕之情。车子到站后，岛村发现叶子和自己在同一个车站下车。岛村来到旅馆又找到了驹子，旧情重温。当岛村察觉到驹子对自己的感情之后，知道这场爱是徒劳的，所以决定分手。第二年的秋天，岛村第三次来到雪国，他一边迷恋驹子身体的美丽，一边又陶醉于叶子超脱凡尘的美，正当岛村下定决心要离开雪国的前夕，村里发生了一场大火，叶子在火中丧生。作\n《雪国》（ゆきぐに）是日本作家川端康成创作的第一部中篇小说，从1935年起以短篇的形式，分别以《暮景的镜》《白昼的镜》等题名，断断续续地发表在《文艺春秋》《改造》等杂志上，相互之间并没有紧密相连的情节，直至全部完成并经认真修改后，才冠以《雪国》于1948年汇集出版单行本。 [6]\n\n该小说讲述男主人公岛村是东京的一个舞蹈艺术研究家，因为无聊，告别了妻小来到雪国游玩，邂逅了当地一名艺伎驹子。驹子给岛村留下了深刻的印象。此后岛村第二次前往雪国，在车上又被邻座的叶子所吸引，岛村对叶子产生了倾慕之情。车子到站后，岛村发现叶子和自己在同一个车站下车。岛村来到旅馆又找到了驹子，旧情重温。当岛村察觉到驹子对自己的感情之后，知道这场爱是徒劳的，所以决定分手。第二年的秋天，岛村第三次来到雪国，他一边迷恋驹子身体的美丽，一边又陶醉于叶子超脱凡尘的美，正当岛村下定决心要离开雪国的前夕，村里发生了一场大火，叶子",
    techniques: "",
    excerpts: [],
    insights: "《雪国》（ゆきぐに）是日本作家川端康成创作的第一部中篇小说，从1935年起以短篇的形式，分别以《暮景的镜》《白昼的镜》等题名，断断续续地发表在《文艺春秋》《改造》等杂志上，相互之间并没有紧密相连的情节，直至全部完成并经认真修改后，才冠以《雪国》于1948年汇集出版单行本。该小说讲述男主人公岛村是东京的一个舞蹈艺术研究家，因为无聊，告别了妻小来到雪国游玩，邂逅了当地一名艺伎驹子。驹子给岛村留下了深刻的印象。此后岛村第二次前往雪国，在车上又被邻座的叶子所吸引，岛村对叶子产生了倾慕之情。车子到站后，岛村发现叶子和自己在同一个车站下车。岛村来到旅馆又找到了驹子，旧情重温。当岛村察觉到驹子对自己的感情之后，知道这场爱是徒劳的，所以决定分手。第二年的秋天，岛村第三次来到雪国，他一边迷恋驹子身体的美丽，一边又陶醉于叶子超脱凡尘的美，正当岛村下定决心要离开雪国的前夕，村里发生了一场大火，叶子在火中丧生。作\n《雪国》（ゆきぐに）是日本作家川端康成创作的第一部中篇小说，从1935年起以短篇的形式，分别以《暮景的镜》《白昼的镜》等题名，断断续续地发表在《文艺春秋》《改造》等杂志上，相互之间并没有紧密相连的情节，直至全部完成并经认真修改后，才冠以《雪国》于1948年汇集出版单行本。 [6]\n\n该小说讲述男主人公岛村是东京的一个舞蹈艺术研究家，因为无聊，告别了妻小来到雪国游玩，邂逅了当地一名艺伎驹子。驹子给",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E9%9B%AA%E5%9B%BD", tier: "reference", fetchedAt: "2026-05-21T04:47:54.980Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "rashomon": {
    id: "rashomon",
    characters: [
      { name: "Daiei Motion Picture", role: "角色", description: "Rashomon 中的主要角色。" }
    ],
    plotSummary: "《罗生门》是由Daiei Motion Picture Co. Ltd.出品，黑泽明执导，芥川龙之介、黑泽明、桥本忍编剧，三船敏郎、京町子、森雅之、志村乔主演的犯罪电影，该片于1950年8月26日在日本上映。该片讲述了武士被杀后，盗贼、武士的妻子以及武士的亡魂为了减轻自己的罪恶、掩饰自己的过失，三位当事人向审判长讲述了三个不同版本的案发经过的故事。1951年，该片获得第12届威尼斯国际电影节圣马克金狮奖-最佳影片、意大利影评人奖；1952年，获得第24届奥斯卡金像奖荣誉外语片奖。\n《罗生门》是由Daiei Motion Picture Co. Ltd.出品 [15]，黑泽明执导，芥川龙之介、黑泽明、桥本忍编剧，三船敏郎、京町子、森雅之、志村乔主演的犯罪电影，该片于1950年8月26日在日本上映 [16]。\n\n该片讲述了武士被杀后，盗贼、武士的妻子以及武士的亡魂为了减轻自己的罪恶、掩饰自己的过失，三位当事人向审判长讲述了三个不同版本的案发经过的故事 [1]。\n\n1951年，该片获得第12届威尼斯国际电影节圣马克金狮奖-最佳影片、意大利影评人奖 [5]；1952年，获得第24届奥斯卡金像奖荣誉外语片奖 [7]。\n\n古老的罗生门是平安京（即京都）大城圈的正南门。在一个大雨滂沱的日子里，人们正在争相议论着山上一个武士被杀的案件。三天后过堂时，凶手、死者的妻子、借死者的魂来做证的女巫都曾被招到纠察使署，但他们都怀着利己的目的，竭力维护自己，提供了美化自己、使得事实真相各不相同的证词。杀人者是大盗多襄丸，他讲他本意并不想杀死武士弘，因为他已经很容易的就把武士弘的妻子真砂骗奸了。可是真砂让他们两个人决斗，他才把他砍倒的。而真砂的陈述是，他被多囊丸蹂躏之后，受到了丈夫的蔑视，于是悲愤之中，她就晃晃悠悠地扑向了武弘……可等她醒过来一看，那把短刀已插在丈夫的胸口上，他已经死了。而武士弘的灵魂则说，是妻子真砂唆使多襄丸杀他，他羞愤之下自杀的。雨停了，卖柴人抱着一个弃婴而去 [19]。\n\n他是京都臭名远扬的盗贼。极好女色，他被武士金泽武弘的妻子真砂的美貌所吸引，之后他玷污了真砂的贞洁，并杀害了金泽武弘。在纠察使署接受审判时，他在回忆案发过的过程时，他大方承认了自己杀害金泽武弘的事实，但也在叙述中掺杂了谎言。\n\n武士金泽武弘的妻子。她和丈夫在深山中行走时，她美艳的姿色吸引了强盗多襄丸。在丈夫",
    plotNodes: [
      { label: "Part 1", description: "《罗生门》是由Daiei Motion Picture Co." },
      { label: "Part 2", description: "该片讲述了武士被杀后，盗贼、武士的妻子以及武士的亡魂为了减轻自己的罪恶、掩饰自己的过失，三位当事人向审判长讲述了三个不同版本的案发经过的故事 [1]。" },
      { label: "Part 3", description: "1951年，该片获得第12届威尼斯国际电影节圣马克金狮奖-最佳影片、意大利影评人奖 [5]；1952年，获得第24届奥斯卡金像奖荣誉外语片奖 [7]。" },
      { label: "Part 4", description: "古老的罗生门是平安京（即京都）大城圈的正南门。在一个大雨滂沱的日子里，人们正在争相议论着山上一个武士被杀的案件。三天后过堂时，凶手、死者的妻子、借死者的魂来做证的女巫都曾被招到纠察使署，但他们都怀着利己的目的，竭力维护自己，提供了美化自己、使得事实真相各不相同的证词。杀人者是大盗多襄丸，他讲他本意并不想杀死武士弘，因为他已经很容易的就把武士弘的妻子真砂骗奸了。可是真砂让他们两个人决斗，他才把他砍倒" },
      { label: "Part 5", description: "他是京都臭名远扬的盗贼。极好女色，他被武士金泽武弘的妻子真砂的美貌所吸引，之后他玷污了真砂的贞洁，并杀害了金泽武弘。在纠察使署接受审判时，他在回忆案发过的过程时，他大方承认了自己杀害金泽武弘的事实，但也在叙述中掺杂了谎言。" }
    ],
    themeAnalysis: "",
    techniques: "",
    excerpts: [],
    insights: "《罗生门》是由Daiei Motion Picture Co. Ltd.出品，黑泽明执导，芥川龙之介、黑泽明、桥本忍编剧，三船敏郎、京町子、森雅之、志村乔主演的犯罪电影，该片于1950年8月26日在日本上映。该片讲述了武士被杀后，盗贼、武士的妻子以及武士的亡魂为了减轻自己的罪恶、掩饰自己的过失，三位当事人向审判长讲述了三个不同版本的案发经过的故事。1951年，该片获得第12届威尼斯国际电影节圣马克金狮奖-最佳影片、意大利影评人奖；1952年，获得第24届奥斯卡金像奖荣誉外语片奖。\n《罗生门》是由Daiei Motion Picture Co. Ltd.出品 [15]，黑泽明执导，芥川龙之介、黑泽明、桥本忍编剧，三船敏郎、京町子、森雅之、志村乔主演的犯罪电影，该片于1950年8月26日在日本上映 [16]。\n\n该片讲述了武士被杀后，盗贼、武士的妻子以及武士的亡魂为了减轻自己的罪恶、掩饰自己的过失，三位当事人向审判长讲述了三个不同版本的案发经过的故事 [1]。\n\n1951年，该片获得第12届威尼斯国际电影节圣马克金狮奖-最佳影片、意大利影评人奖 [5]；1952年，获得第24届奥斯卡金像奖荣誉外语片奖 [7]。\n\n古老的罗生门是平安京（即京都）大城圈的正南门。在一个大雨滂沱的日子里，人们正在争相议论着山上一个武士被杀的案件。三天后过堂时，凶手、死者的妻子、借死者的魂来做证的女巫都曾被招",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E7%BD%97%E7%94%9F%E9%97%A8", tier: "reference", fetchedAt: "2026-05-21T04:22:32.595Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  // ==================== 亚洲 — 印度 ====================

  "ramayana": {
    id: "ramayana",
    plotSummary: "《罗摩衍那》（梵语，Rāmāyaṇa，其含义为“罗摩的历程”或“罗摩传奇”），也可译作《拉麻传》，印度古代史诗，被誉为“大诗”之作，亦是诗歌的源头“最初的诗”。原为民间口头创作，在长期流传中屡经增润，相传由印度诗人蚁垤编写定本，与《摩诃婆罗多》并列为印度两大史诗。《罗摩衍那》全书是诗体，用梵文写成，诗律几乎都是“输洛迦”，即每节2行，每行16个音节。全文共分为7章，24000对对句。恢宏博大，深邃精妙，将三界融会贯通，情景相互辉映，描绘出生动的形象，并以实例阐释道义。内容主要讲述阿逾陀国王子罗摩和他的妻子悉多的故事。以罗摩和妻子悉多的悲欢离合为故事主线，表现了印度古代宫廷内部和列国之间的斗争。文中穿插了不少神话传说和小故事，描绘自然景色、战斗场面等花费了较多笔墨，故而篇幅宏大。在印度，《罗摩衍那》的故事家喻户晓，印度的重要节日之一“十胜节”就来源于《罗摩衍那》中的故事，书中诠释的社会伦理也\n《罗摩衍那》（梵语，Rāmāyaṇa，其含义为“罗摩的历程”或“罗摩传奇”），也可译作《拉麻传》，印度古代史诗，被誉为“大诗”之作，亦是诗歌的源头“最初的诗”。原为民间口头创作，在长期流传中屡经增润，相传由印度诗人蚁垤编写定本，与《摩诃婆罗多》并列为印度两大史诗。 [2-3]\n\n《罗摩衍那》全书是诗体，用梵文写成，诗律几乎都是“输洛迦”，即每节2行，每行16个音节。全文共分为7章，24000对对句。恢宏博大，深邃精妙，将三界融会贯通，情景相互辉映，描绘出生动的形象，并以实例阐释道义。内容主要讲述阿逾陀国王子罗摩和他的妻子悉多的故事。以罗摩和妻子悉多的悲欢离合为故事主线，表现了印度古代宫廷内部和列国之间的斗争。文中穿插了不少神话传说和小故事，描绘自然景色、战斗场面等花费了较多笔墨，故而篇幅宏大。 [4]\n\n在印度，《罗摩衍那》的故事家喻户晓，印度的重要节日之一“十胜节”就来源于《罗摩衍那》中的故事，书中诠释的社会伦理也为印度人指明了道德准则。《罗摩衍那》是印度珍贵的文化遗产，也为印地语文学提供了丰富的创作题材。 [18]《罗摩衍那》在印度一直被奉为叙事诗的典范，其影响早已远超出印度，特别是在亚洲广泛流传，而被列入人类文化遗产。 [3]\n\n《罗摩衍那》以罗摩和妻子悉多的悲欢离合为故事主线，表现了印度古代宫廷内部和列国之间的斗争。其间穿插了不少神话传说和小故事及描绘自然景色、战斗场面等",
    plotNodes: [
      { label: "Part 1", description: "《罗摩衍那》（梵语，Rāmāyaṇa，其含义为“罗摩的历程”或“罗摩传奇”），也可译作《拉麻传》，印度古代史诗，被誉为“大诗”之作，亦是诗歌的源头“最初的诗”。原为民间口头创作，在长期流传中屡经增润，相传由印度诗人蚁垤编写定本，与《摩诃婆罗多》并列为印度两大史诗。《罗摩衍那》全书是诗体，用梵文写成，诗律几乎都是“输洛迦”，即每节2行，每行16个音节。全文共分为7章，24000对对句。恢宏博大，深邃" },
      { label: "Part 2", description: "《罗摩衍那》全书是诗体，用梵文写成，诗律几乎都是“输洛迦”，即每节2行，每行16个音节。全文共分为7章，24000对对句。恢宏博大，深邃精妙，将三界融会贯通，情景相互辉映，描绘出生动的形象，并以实例阐释道义。内容主要讲述阿逾陀国王子罗摩和他的妻子悉多的故事。以罗摩和妻子悉多的悲欢离合为故事主线，表现了印度古代宫廷内部和列国之间的斗争。文中穿插了不少神话传说和小故事，描绘自然景色、战斗场面等花费了较" },
      { label: "Part 3", description: "在印度，《罗摩衍那》的故事家喻户晓，印度的重要节日之一“十胜节”就来源于《罗摩衍那》中的故事，书中诠释的社会伦理也为印度人指明了道德准则。《罗摩衍那》是印度珍贵的文化遗产，也为印地语文学提供了丰富的创作题材。" },
      { label: "Part 4", description: "《罗摩衍那》以罗摩和妻子悉多的悲欢离合为故事主线，表现了印度古代宫廷内部和列国之间的斗争。其间穿插了不少神话传说和小故事及描绘自然景色、战斗场面等" }
    ],
    themeAnalysis: "《罗摩衍那》（梵语，Rāmāyaṇa，其含义为“罗摩的历程”或“罗摩传奇”），也可译作《拉麻传》，印度古代史诗，被誉为“大诗”之作，亦是诗歌的源头“最初的诗”。原为民间口头创作，在长期流传中屡经增润，相传由印度诗人蚁垤编写定本，与《摩诃婆罗多》并列为印度两大史诗。《罗摩衍那》全书是诗体，用梵文写成，诗律几乎都是“输洛迦”，即每节2行，每行16个音节。全文共分为7章，24000对对句。恢宏博大，深邃精妙，将三界融会贯通，情景相互辉映，描绘出生动的形象，并以实例阐释道义。内容主要讲述阿逾陀国王子罗摩和他的妻子悉多的故事。以罗摩和妻子悉多的悲欢离合为故事主线，表现了印度古代宫廷内部和列国之间的斗争。文中穿插了不少神话传说和小故事，描绘自然景色、战斗场面等花费了较多笔墨，故而篇幅宏大。在印度，《罗摩衍那》的故事家喻户晓，印度的重要节日之一“十胜节”就来源于《罗摩衍那》中的故事，书中诠释的社会伦理也\n《罗摩衍那》（梵语，Rāmāyaṇa，其含义为“罗摩的历程”或“罗摩传奇”），也可译作《拉麻传》，印度古代史诗，被誉为“大诗”之作，亦是诗歌的源头“最初的诗”。原为民间口头创作，在长期流传中屡经增润，相传由印度诗人蚁垤编写定本，与《摩诃婆罗多》并列为印度两大史诗。 [2-3]\n\n《罗摩衍那》全书是诗体，用梵文写成，诗律几乎都是“输洛迦”，即每节2行，每行16个音节。全文共分为7章，24000对对句。恢宏博大，深邃精妙，将三界融会贯通，情景相互辉映，描绘出生动的形象，并以实例阐释道义。内容主要讲述阿逾陀国王子罗摩和他的妻子悉多的故事。以罗摩和妻子悉多的悲欢离合为故事主线，表现了印度古代宫廷内部和列国之间的斗争。文中穿插了不少神话传说和小故事，描绘自然景色、战斗场面等花费了较多笔墨，故而篇幅宏大。 [4]\n\n在印度，《罗摩衍那》的故事家喻户晓，印度的重要节日之一“十胜节”就来源于《罗摩衍那》",
    techniques: "",
    excerpts: [],
    insights: "《罗摩衍那》（梵语，Rāmāyaṇa，其含义为“罗摩的历程”或“罗摩传奇”），也可译作《拉麻传》，印度古代史诗，被誉为“大诗”之作，亦是诗歌的源头“最初的诗”。原为民间口头创作，在长期流传中屡经增润，相传由印度诗人蚁垤编写定本，与《摩诃婆罗多》并列为印度两大史诗。《罗摩衍那》全书是诗体，用梵文写成，诗律几乎都是“输洛迦”，即每节2行，每行16个音节。全文共分为7章，24000对对句。恢宏博大，深邃精妙，将三界融会贯通，情景相互辉映，描绘出生动的形象，并以实例阐释道义。内容主要讲述阿逾陀国王子罗摩和他的妻子悉多的故事。以罗摩和妻子悉多的悲欢离合为故事主线，表现了印度古代宫廷内部和列国之间的斗争。文中穿插了不少神话传说和小故事，描绘自然景色、战斗场面等花费了较多笔墨，故而篇幅宏大。在印度，《罗摩衍那》的故事家喻户晓，印度的重要节日之一“十胜节”就来源于《罗摩衍那》中的故事，书中诠释的社会伦理也\n《罗摩衍那》（梵语，Rāmāyaṇa，其含义为“罗摩的历程”或“罗摩传奇”），也可译作《拉麻传》，印度古代史诗，被誉为“大诗”之作，亦是诗歌的源头“最初的诗”。原为民间口头创作，在长期流传中屡经增润，相传由印度诗人蚁垤编写定本，与《摩诃婆罗多》并列为印度两大史诗。 [2-3]\n\n《罗摩衍那》全书是诗体，用梵文写成，诗律几乎都是“输洛迦”，即每节2行，每行16个音节。全文共分为7章，24000对对",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E7%BD%97%E6%91%A9%E8%A1%8D%E9%82%A3", tier: "reference", fetchedAt: "2026-05-21T04:21:59.992Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "shakuntala": {
    id: "shakuntala",
    plotSummary: "沙恭达罗是印度教神话中的经典人物，最早见于史诗《摩诃婆罗多》及《莲花往世书》，后因迦梨陀娑的梵剧《沙恭达罗》广为流传。其父为众友仙人，母亲为天女弥那迦，丈夫是国王豆扇陀，儿子婆罗多成为印度传说中婆罗多族祖先。出生后被遗弃于森林，得群鸟庇护得名“沙恭达罗”，由隐修仙人干婆抚养成人。在净修林与豆扇陀以乾闼婆方式（自主婚姻）结合，以戒指为信物。因怠慢仙人遭诅咒遗忘，寻夫途中丢失戒指未被承认，后随母栖居天界诞下婆罗多。数年后戒指经鱼腹重现，豆扇陀恢复记忆，最终与其在天界团聚。故事通过戒指信物与诅咒机制构建叙事核心，展现爱情与命运的主题。沙恭达罗的形象融合神性血脉与人性特质，既是自然之女，亦是印度古典文学中追求爱情的女性典范。\n沙恭达罗是印度教神话中的经典人物，最早见于史诗《摩诃婆罗多》及《莲花往世书》，后因迦梨陀娑的梵剧《沙恭达罗》广为流传。其父为众友仙人，母亲为天女弥那迦，丈夫是国王豆扇陀，儿子婆罗多成为印度传说中婆罗多族祖先 [1] [4]。\n\n出生后被遗弃于森林，得群鸟庇护得名“沙恭达罗”，由隐修仙人干婆抚养成人 [1]。在净修林与豆扇陀以乾闼婆方式（自主婚姻）结合，以戒指为信物。因怠慢仙人遭诅咒遗忘，寻夫途中丢失戒指未被承认，后随母栖居天界诞下婆罗多 [3]。数年后戒指经鱼腹重现，豆扇陀恢复记忆，最终与其在天界团聚。\n\n故事通过戒指信物与诅咒机制构建叙事核心，展现爱情与命运的主题 [3]。沙恭达罗的形象融合神性血脉与人性特质，既是自然之女，亦是印度古典文学中追求爱情的女性典范。\n\n弥那迦把刚生下的女儿丢弃在森林中，由名为沙恭达罗的群鸟保护才免受猛兽的侵害。沙恭达罗即由此得名。以后被隐修仙人干婆发现并收到静修寺抚养。国王豆扇陀在静修林打猎时与沙恭达罗相遇， 互相爱慕，按乾闼婆的方式 (即没有举行婚礼) 结为夫妻。豆扇陀回宫时留下他的戒指作为信物。沙恭达罗由于思念豆扇陀而怠慢了敝衣仙人。后者生气，诅咒沙恭达罗将被 心爱的人忘掉。只有丈夫看到那只戒指时才 能再想起。豆扇陀久去无信，而沙恭达罗又 已怀孕，因此师父干婆让她去找豆扇陀。 沙恭达罗在恒河行洗礼时，不慎把戒指丢失 在河里。豆扇陀完全记不起沙恭达罗，不予 承认。于是她的母亲弥那迦把她带到阿布沙 罗斯的湖上生下了儿子，即后来的国王婆罗多。再说沙恭达罗的戒指丢失在恒河里被一 条鱼吞掉。这条鱼被渔人打上来正好卖给了 王宫。",
    plotNodes: [
      { label: "Part 1", description: "沙恭达罗是印度教神话中的经典人物，最早见于史诗《摩诃婆罗多》及《莲花往世书》，后因迦梨陀娑的梵剧《沙恭达罗》广为流传。其父为众友仙人，母亲为天女弥那迦，丈夫是国王豆扇陀，儿子婆罗多成为印度传说中婆罗多族祖先。出生后被遗弃于森林，得群鸟庇护得名“沙恭达罗”，由隐修仙人干婆抚养成人。在净修林与豆扇陀以乾闼婆方式（自主婚姻）结合，以戒指为信物。因怠慢仙人遭诅咒遗忘，寻夫途中丢失戒指未被承认，后随母栖居天" },
      { label: "Part 2", description: "出生后被遗弃于森林，得群鸟庇护得名“沙恭达罗”，由隐修仙人干婆抚养成人 [1]。在净修林与豆扇陀以乾闼婆方式（自主婚姻）结合，以戒指为信物。因怠慢仙人遭诅咒遗忘，寻夫途中丢失戒指未被承认，后随母栖居天界诞下婆罗多 [3]。数年后戒指经鱼腹重现，豆扇陀恢复记忆，最终与其在天界团聚。" },
      { label: "Part 3", description: "故事通过戒指信物与诅咒机制构建叙事核心，展现爱情与命运的主题 [3]。沙恭达罗的形象融合神性血脉与人性特质，既是自然之女，亦是印度古典文学中追求爱情的女性典范。" },
      { label: "Part 4", description: "弥那迦把刚生下的女儿丢弃在森林中，由名为沙恭达罗的群鸟保护才免受猛兽的侵害。沙恭达罗即由此得名。以后被隐修仙人干婆发现并收到静修寺抚养。国王豆扇陀在静修林打猎时与沙恭达罗相遇， 互相爱慕，按乾闼婆的方式 (即没有举行婚礼) 结为夫妻。豆扇陀回宫时留下他的戒指作为信物。沙恭达罗由于思念豆扇陀而怠慢了敝衣仙人。后者生气，诅咒沙恭达罗将被 心爱的人忘掉。只有丈夫看到那只戒指时才 能再想起。豆扇陀久去无信" }
    ],
    themeAnalysis: "沙恭达罗是印度教神话中的经典人物，最早见于史诗《摩诃婆罗多》及《莲花往世书》，后因迦梨陀娑的梵剧《沙恭达罗》广为流传。其父为众友仙人，母亲为天女弥那迦，丈夫是国王豆扇陀，儿子婆罗多成为印度传说中婆罗多族祖先。出生后被遗弃于森林，得群鸟庇护得名“沙恭达罗”，由隐修仙人干婆抚养成人。在净修林与豆扇陀以乾闼婆方式（自主婚姻）结合，以戒指为信物。因怠慢仙人遭诅咒遗忘，寻夫途中丢失戒指未被承认，后随母栖居天界诞下婆罗多。数年后戒指经鱼腹重现，豆扇陀恢复记忆，最终与其在天界团聚。故事通过戒指信物与诅咒机制构建叙事核心，展现爱情与命运的主题。沙恭达罗的形象融合神性血脉与人性特质，既是自然之女，亦是印度古典文学中追求爱情的女性典范。\n沙恭达罗是印度教神话中的经典人物，最早见于史诗《摩诃婆罗多》及《莲花往世书》，后因迦梨陀娑的梵剧《沙恭达罗》广为流传。其父为众友仙人，母亲为天女弥那迦，丈夫是国王豆扇陀，儿子婆罗多成为印度传说中婆罗多族祖先 [1] [4]。\n\n出生后被遗弃于森林，得群鸟庇护得名“沙恭达罗”，由隐修仙人干婆抚养成人 [1]。在净修林与豆扇陀以乾闼婆方式（自主婚姻）结合，以戒指为信物。因怠慢仙人遭诅咒遗忘，寻夫途中丢失戒指未被承认，后随母栖居天界诞下婆罗多 [3]。数年后戒指经鱼腹重现，豆扇陀恢复记忆，最终与其在天界团聚。\n\n故事通过戒指信物与诅咒机制构建叙事核心，展现爱情与命运的主题 [3]。沙恭达罗的形象融合神性血脉与人性特质，既是自然之女，亦是印度古典文学中追求爱情的女性典范。\n\n弥那迦把刚生下的女儿丢弃在森林中，由名为沙恭达罗的群鸟保护才免受猛兽的侵害。沙恭达罗即由此得名。以后被隐修仙人干婆发现并收到静修寺抚养。国王豆扇陀在静修林打猎时与沙恭达罗相遇， 互相爱慕，按乾闼婆的方式 (即没有举行婚礼) 结为夫妻。豆扇陀回宫时留下他的戒指作为信物。沙恭达罗由于思念豆扇陀而怠慢了",
    techniques: "",
    excerpts: [],
    insights: "沙恭达罗是印度教神话中的经典人物，最早见于史诗《摩诃婆罗多》及《莲花往世书》，后因迦梨陀娑的梵剧《沙恭达罗》广为流传。其父为众友仙人，母亲为天女弥那迦，丈夫是国王豆扇陀，儿子婆罗多成为印度传说中婆罗多族祖先。出生后被遗弃于森林，得群鸟庇护得名“沙恭达罗”，由隐修仙人干婆抚养成人。在净修林与豆扇陀以乾闼婆方式（自主婚姻）结合，以戒指为信物。因怠慢仙人遭诅咒遗忘，寻夫途中丢失戒指未被承认，后随母栖居天界诞下婆罗多。数年后戒指经鱼腹重现，豆扇陀恢复记忆，最终与其在天界团聚。故事通过戒指信物与诅咒机制构建叙事核心，展现爱情与命运的主题。沙恭达罗的形象融合神性血脉与人性特质，既是自然之女，亦是印度古典文学中追求爱情的女性典范。\n沙恭达罗是印度教神话中的经典人物，最早见于史诗《摩诃婆罗多》及《莲花往世书》，后因迦梨陀娑的梵剧《沙恭达罗》广为流传。其父为众友仙人，母亲为天女弥那迦，丈夫是国王豆扇陀，儿子婆罗多成为印度传说中婆罗多族祖先 [1] [4]。\n\n出生后被遗弃于森林，得群鸟庇护得名“沙恭达罗”，由隐修仙人干婆抚养成人 [1]。在净修林与豆扇陀以乾闼婆方式（自主婚姻）结合，以戒指为信物。因怠慢仙人遭诅咒遗忘，寻夫途中丢失戒指未被承认，后随母栖居天界诞下婆罗多 [3]。数年后戒指经鱼腹重现，豆扇陀恢复记忆，最终与其在天界团聚。\n\n故事通过戒指信物与诅咒机制构建叙事核心，展现爱情与命运的主题",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E6%B2%99%E6%81%AD%E8%BE%BE%E7%BD%97", tier: "reference", fetchedAt: "2026-05-21T04:23:50.796Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "gitanjali": {
    id: "gitanjali",
    plotSummary: "《吉檀迦利》是印度作家泰戈尔创作的诗集。这部宗教抒情诗集，是一份“奉献给神的祭品”（不少人以为“吉檀迦利”是奉献之意，其实是献诗之意）。泰戈尔向神敬献的歌是“生命之歌”，他以轻快、欢畅的笔调歌唱生命的枯荣、现实生活的欢乐和悲哀，表达了作者对祖国前途的关怀。泰戈尔凭借该作获得1913年诺贝尔文学奖。\n《吉檀迦利》是印度作家泰戈尔创作的诗集。这部宗教抒情诗集，是一份“奉献给神的祭品”（不少人以为“吉檀迦利”是奉献之意，其实是献诗之意）。泰戈尔向神敬献的歌是“生命之歌”，他以轻快、欢畅的笔调歌唱生命的枯荣、现实生活的欢乐和悲哀，表达了作者对祖国前途的关怀。\n\n第1—7首为序曲，说明作歌缘由，表现神与人的亲密关系。表现诗人对人神结合境界的向往和追求；\n\n第57—85首为第三乐章，主题是欢乐颂，歌颂神给世界带来的欢乐和光明；\n\n第86—100首是第四乐章，主题是死亡颂。",
    plotNodes: [
      { label: "第 1 部分", description: "《吉檀迦利》是印度作家泰戈尔创作的诗集。这部宗教抒情诗集，是一份“奉献给神的祭品”（不少人以为“吉檀迦利”是奉献之意，其实是献诗之意）。泰戈尔向神敬献的歌是“生命之歌”，他以轻快、欢畅的笔调歌唱生命的枯荣、现实生活的欢乐和悲哀，表达了作者对祖国前途的关怀。泰戈尔凭借该作获得1913年诺贝尔文学奖。 《吉檀迦利》是印度作家泰戈尔创作的诗集。这部宗教抒情诗集，是一份“奉献给神的祭品”（不少人以为“吉檀" },
      { label: "第 2 部分", description: "第1—7首为序曲，说明作歌缘由，表现神与人的亲密关系。表现诗人对人神结合境界的向往和追求；" },
      { label: "第 3 部分", description: "第86—100首是第四乐章，主题是死亡颂。诗人渴望通过死亡获得永生，真正达到人与神合一的境界；" },
      { label: "第 4 部分", description: "该诗集出版于1912年，其中的主要作品选自诗人发表于孟加拉文版的《吉檀迦利》《奉献集》《渡口集》和《歌之花环》等诗集。在译为英文的过程中，诗人有时将原作中的二三首诗糅合在一起。该诗集可以代表他这时期宗教抒情诗的主要倾向。 [3]" },
      { label: "第 5 部分", description: "作为泛神论代表作的《吉檀迦利》，描写了诗人对神的赞颂，对神到来的渴望，与神失之交臂的失望，以及与神合一的狂欢，寄予了诗人对无限世界的向往和沉思。从诗行间，令人感受到诗人生命激情，若无形的力量，引导着读者走向诗人构筑的激情与爱的世界里。" },
      { label: "第 6 部分", description: "印度本是一个崇尚宗教的国度，千百年来人们孜致以求努力在宗教的神秘世界之中寻找人生启迪和慰藉。泰戈尔将现代西方人文主义、科学思想与印度传统宗教相融合，潜心汲取印度各种教义中的积极因意，用西方现代文明与印度古典哲学精神相结合，创造了独特的“诗人的宗教”，这种生命哲学的深刻内涵，充分体现在《吉檀迦利》中。" }
    ],
    themeAnalysis: "《吉檀迦利》是印度作家泰戈尔创作的诗集。这部宗教抒情诗集，是一份“奉献给神的祭品”（不少人以为“吉檀迦利”是奉献之意，其实是献诗之意）。泰戈尔向神敬献的歌是“生命之歌”，他以轻快、欢畅的笔调歌唱生命的枯荣、现实生活的欢乐和悲哀，表达了作者对祖国前途的关怀。泰戈尔凭借该作获得1913年诺贝尔文学奖。\n《吉檀迦利》是印度作家泰戈尔创作的诗集。这部宗教抒情诗集，是一份“奉献给神的祭品”（不少人以为“吉檀迦利”是奉献之意，其实是献诗之意）。泰戈尔向神敬献的歌是“生命之歌”，他以轻快、欢畅的笔调歌唱生命的枯荣、现实生活的欢乐和悲哀，表达了作者对祖国前途的关怀。\n\n第1—7首为序曲，说明作歌缘由，表现神与人的亲密关系。表现诗人对人神结合境界的向往和追求；\n\n第57—85首为第三乐章，主题是欢乐颂，歌颂神给世界带来的欢乐和光明；\n\n第86—100首是第四乐章，主题是死亡颂。诗人渴望通过死亡获得永生，真正达到人与神合一的境界；\n\n该诗集出版于1912年，其中的主要作品选自诗人发表于孟加拉文版的《吉檀迦利》《奉献集》《渡口集》和《歌之花环》等诗集。",
    techniques: "《吉檀迦利》是印度作家泰戈尔创作的诗集。这部宗教抒情诗集，是一份“奉献给神的祭品”（不少人以为“吉檀迦利”是奉献之意，其实是献诗之意）。泰戈尔向神敬献的歌是“生命之歌”，他以轻快、欢畅的笔调歌唱生命的枯荣、现实生活的欢乐和悲哀，表达了作者对祖国前途的关怀。泰戈尔凭借该作获得1913年诺贝尔文学奖。\n《吉檀迦利》是印度作家泰戈尔创作的诗集。这部宗教抒情诗集，是一份“奉献给神的祭品”（不少人以为“吉檀迦利”是奉献之意，其实是献诗之意）。泰戈尔向神敬献的歌是“生命之歌”，他以轻快、欢畅的笔调歌唱生命的枯荣、现实生活的欢乐和悲哀，表达了作者对祖国前途的关怀。\n\n第1—7首为序曲，说明作歌缘由，表现神与人的亲密关系。表现诗人对人神结合境界的向往和追求；\n\n第57—85首为第三乐章，主题是欢乐颂，歌颂神给世界带来的欢乐和光明；\n\n第86—100首是第四乐章，主题是死亡颂。",
    excerpts: [
      { quote: "你已经使我永生，这样做是你的欢乐。这脆薄的杯儿，你不断地把它倒空，又不断地以新生命来充满。这小小的苇笛，你携带着它逾山越谷，从笛管里吹出永新的音乐。在你双手的不朽的安抚下，我的小小的心，消融在无边快乐之中，发出不可言说的词调。", context: "来源：Gitanjali" }
    ],
    insights: "《吉檀迦利》是印度作家泰戈尔创作的诗集。这部宗教抒情诗集，是一份“奉献给神的祭品”（不少人以为“吉檀迦利”是奉献之意，其实是献诗之意）。泰戈尔向神敬献的歌是“生命之歌”，他以轻快、欢畅的笔调歌唱生命的枯荣、现实生活的欢乐和悲哀，表达了作者对祖国前途的关怀。泰戈尔凭借该作获得1913年诺贝尔文学奖。\n《吉檀迦利》是印度作家泰戈尔创作的诗集。这部宗教抒情诗集，是一份“奉献给神的祭品”（不少人以为“吉檀迦利”是奉献之意，其实是献诗之意）。泰戈尔向神敬献的歌是“生命之歌”，他以轻快、欢畅的笔调歌唱生命的枯荣、现实生活的欢乐和悲哀，表达了作者对祖国前途的关怀。\n\n第1—7首为序曲，说明作歌缘由，表现神与人的亲密关系。表现诗人对人神结合境界的向往和追求；\n\n第57—85首为第三乐章，主题是欢乐颂，歌颂神给世界带来的欢乐和光明；\n\n第86—100首是第四乐章，主题是死亡颂。",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%90%89%E6%AA%80%E8%BF%A6%E5%88%A9", tier: "reference", fetchedAt: "2026-05-21T04:47:08.476Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
        { label: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/7164", tier: "original_text", fetchedAt: "2026-05-21T04:47:22.626Z", contributedFields: ["insights"] },
        { label: "Britannica", url: "https://www.britannica.com/topic/Gitanjali", tier: "reference", fetchedAt: "2026-05-21T04:47:22.626Z", contributedFields: ["plotSummary", "themeAnalysis"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=Gitanjali%20Rabindranath%20Tagore" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=Gitanjali%20Rabindranath%20Tagore" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=Gitanjali" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=Gitanjali" },
      ],
    },
  },

  // ==================== 亚洲 — 波斯/中东 ====================

  "rubaiyat": {
    id: "rubaiyat",
    plotSummary: "《鲁拜集》是11世纪波斯诗人、天文学家欧玛尔·海亚姆创作的四行诗集，采用波斯传统诗体“鲁拜”，结构与中国绝句相似。该作品长期未被广泛传播，直至1859年英国学者爱德华·菲茨杰拉德将其意译为英文后成为文学经典，其第四版含101首诗作。2009年吉林出版集团出版了郭沫若中译本，收录杜拉克插图及英汉对照注释，属“名著图文馆”丛书。诗集以饮酒、自然等意象探讨人生短暂与命运无常，融合数学家的理性视角与诗人的感性表达，呈现对宗教宿命论的质疑与及时行乐的豁达，形成“淡漠的悲哀”美学风格。菲茨杰拉德英译本经多次修订奠定其文学地位，胡适、郭沫若等二十余位译者先后转译为中文，衍生出白话文、七言绝句等多种形式，其中郭沫若译本最早系统引入中国并多次再版。\n《鲁拜集》是11世纪波斯诗人、天文学家欧玛尔·海亚姆创作的四行诗集，采用波斯传统诗体“鲁拜”，结构与中国绝句相似。",
    plotNodes: [
      { label: "第 1 部分", description: "《鲁拜集》是11世纪波斯诗人、天文学家欧玛尔·海亚姆创作的四行诗集，采用波斯传统诗体“鲁拜”，结构与中国绝句相似。该作品长期未被广泛传播，直至1859年英国学者爱德华·菲茨杰拉德将其意译为英文后成为文学经典，其第四版含101首诗作。2009年吉林出版集团出版了郭沫若中译本，收录杜拉克插图及英汉对照注释，属“名著图文馆”丛书。诗集以饮酒、自然等意象探讨人生短暂与命运无常，融合数学家的理性视角与诗人的" },
      { label: "第 2 部分", description: "诗集以饮酒、自然等意象探讨人生短暂与命运无常，融合数学家的理性视角与诗人的感性表达，呈现对宗教宿命论的质疑与及时行乐的豁达，形成“淡漠的悲哀”美学风格。菲茨杰拉德英译本经多次修订奠定其文学地位，胡适、郭沫若等二十余位译者先后转译为中文，衍生出白话文、七言绝句等多种形式，其中郭沫若译本最早系统引入中国并多次再版。" },
      { label: "第 3 部分", description: "几个世纪之中，奥玛·海亚姆默默无闻，几乎被人们遗忘了。直到1859年英国学者兼诗人爱德华·菲茨杰拉德（Edward Fitzgerald）不署名地整理发表了《奥玛·海亚姆之柔巴依集》，共一百零一首，四百零四行。把这本诗集译介到英语世界，他的翻译属于意译，因为保持了原诗的韵律形式，所以成为英国文学的经典。" }
    ],
    themeAnalysis: "《鲁拜集》是11世纪波斯诗人、天文学家欧玛尔·海亚姆创作的四行诗集，采用波斯传统诗体“鲁拜”，结构与中国绝句相似。该作品长期未被广泛传播，直至1859年英国学者爱德华·菲茨杰拉德将其意译为英文后成为文学经典，其第四版含101首诗作。2009年吉林出版集团出版了郭沫若中译本，收录杜拉克插图及英汉对照注释，属“名著图文馆”丛书。诗集以饮酒、自然等意象探讨人生短暂与命运无常，融合数学家的理性视角与诗人的感性表达，呈现对宗教宿命论的质疑与及时行乐的豁达，形成“淡漠的悲哀”美学风格。菲茨杰拉德英译本经多次修订奠定其文学地位，胡适、郭沫若等二十余位译者先后转译为中文，衍生出白话文、七言绝句等多种形式，其中郭沫若译本最早系统引入中国并多次再版。\n《鲁拜集》是11世纪波斯诗人、天文学家欧玛尔·海亚姆创作的四行诗集，采用波斯传统诗体“鲁拜”，结构与中国绝句相似。该作品长期未被广泛传播，直至1859年英国学者爱德华·菲茨杰拉德将其意译为英文后成为文学经典，其第四版含101首诗作。2009年吉林出版集团出版了郭沫若中译本，收录杜拉克插图及英汉对照注释，属“名著图文馆”丛书。",
    techniques: "《鲁拜集》是11世纪波斯诗人、天文学家欧玛尔·海亚姆创作的四行诗集，采用波斯传统诗体“鲁拜”，结构与中国绝句相似。该作品长期未被广泛传播，直至1859年英国学者爱德华·菲茨杰拉德将其意译为英文后成为文学经典，其第四版含101首诗作。2009年吉林出版集团出版了郭沫若中译本，收录杜拉克插图及英汉对照注释，属“名著图文馆”丛书。诗集以饮酒、自然等意象探讨人生短暂与命运无常，融合数学家的理性视角与诗人的感性表达，呈现对宗教宿命论的质疑与及时行乐的豁达，形成“淡漠的悲哀”美学风格。菲茨杰拉德英译本经多次修订奠定其文学地位，胡适、郭沫若等二十余位译者先后转译为中文，衍生出白话文、七言绝句等多种形式，其中郭沫若译本最早系统引入中国并多次再版。\n《鲁拜集》是11世纪波斯诗人、天文学家欧玛尔·海亚姆创作的四行诗集，采用波斯传统诗体“鲁拜”，结构与中国绝句相似。",
    excerpts: [],
    insights: "《鲁拜集》是11世纪波斯诗人、天文学家欧玛尔·海亚姆创作的四行诗集，采用波斯传统诗体“鲁拜”，结构与中国绝句相似。该作品长期未被广泛传播，直至1859年英国学者爱德华·菲茨杰拉德将其意译为英文后成为文学经典，其第四版含101首诗作。2009年吉林出版集团出版了郭沫若中译本，收录杜拉克插图及英汉对照注释，属“名著图文馆”丛书。诗集以饮酒、自然等意象探讨人生短暂与命运无常，融合数学家的理性视角与诗人的感性表达，呈现对宗教宿命论的质疑与及时行乐的豁达，形成“淡漠的悲哀”美学风格。菲茨杰拉德英译本经多次修订奠定其文学地位，胡适、郭沫若等二十余位译者先后转译为中文，衍生出白话文、七言绝句等多种形式，其中郭沫若译本最早系统引入中国并多次再版。\n《鲁拜集》是11世纪波斯诗人、天文学家欧玛尔·海亚姆创作的四行诗集，采用波斯传统诗体“鲁拜”，结构与中国绝句相似。",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E9%B2%81%E6%8B%9C%E9%9B%86", tier: "reference", fetchedAt: "2026-05-21T04:20:27.975Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
        { label: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/246", tier: "original_text", fetchedAt: "2026-05-21T04:20:41.902Z", contributedFields: ["insights"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=Rubaiyat%20of%20Omar%20Khayyam%20Omar%20Khayyam" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=Rubaiyat%20of%20Omar%20Khayyam%20Omar%20Khayyam" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=Rubaiyat%20of%20Omar%20Khayyam" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=Rubaiyat%20of%20Omar%20Khayyam" },
      ],
    },
  },

  "shahnameh": {
    id: "shahnameh",
    characters: [
      { name: "The Shahnameh", role: "角色", description: "Shahnameh 中的主要角色。" },
      { name: "The Persian", role: "角色", description: "Shahnameh 中的主要角色。" },
      { name: "Kings", role: "角色", description: "Shahnameh 中的主要角色。" },
      { name: "Abolqasem Ferdowsi", role: "角色", description: "Shahnameh 中的主要角色。" },
      { name: "Persian", role: "角色", description: "Shahnameh 中的主要角色。" }
    ],
    plotSummary: "《列王纪》是波斯诗人菲尔多西历时43年创作的史诗，完成于11世纪初，2017年商务印书馆出版张鸿年、宋丕方译全本。全书约12万行，记载波斯从创世至萨珊王朝灭亡的4600年历史，分为神话传说、勇士故事和历史纪事三部分，其中鲁斯塔姆与苏赫拉布等英雄篇章为核心内容。作品采用达里波斯语书写，阿拉伯语借词仅占8.8%，收录波斯神话与历史故事，塑造反抗异族统治的英雄形象。菲尔多西融合琐罗亚斯德教元素，通过“灵光”传承、善恶二元论等维系波斯文化认同。该书中文译本包含1964年《鲁斯塔姆与苏赫拉布》选译本。与哈菲兹抒情诗集、萨迪全集等并称波斯文学四大支柱。\n《列王纪》是波斯诗人菲尔多西历时43年创作的史诗，完成于11世纪初，2017年商务印书馆出版张鸿年、宋丕方译全本。全书约12万行，记载波斯从创世至萨珊王朝灭亡的4600年历史，分为神话传说、勇士故事和历史纪事三部分，其中鲁斯塔姆与苏赫拉布等英雄篇章为核心内容。 [5-6] [8]\n\n作品采用达里波斯语书写，阿拉伯语借词仅占8.8%，收录波斯神话与历史故事，塑造反抗异族统治的英雄形象。菲尔多西融合琐罗亚斯德教元素，通过“灵光”传承、善恶二元论等维系波斯文化认同。该书中文译本包含1964年《鲁斯塔姆与苏赫拉布》选译本。与哈菲兹抒情诗集、萨迪全集等并称波斯文学四大支柱。 [2] [4] [7-8]\n\n《列王纪》是波斯人的爱国热情和新兴的达里波斯文学语言相结合的产物。出于反对阿拉伯人的思想需要，波斯地方政权的统治者曾大力提倡写王书。在菲尔多西创作之前，已有 5 部王书问世，其中3部为散文体，2部为诗体。萨曼王朝的宫廷诗人塔吉基曾受王命写王书，因被仆人杀害 ，只完成了1000行 。菲尔多西将这 1000 行诗全部收录在《列王纪》中，以资纪念。\n\n《列王纪》长达 60000 双行，叙述内容的时间跨度在4000年以上，从开天辟地写到 651 年波斯帝国灭亡时止。简要叙述了波斯历史上50个帝王公侯的生平事迹，并汇集了数千年来流传在民间的神话传说和历史故事。大致可以分为 3 部分：①神话传说。其中最精彩的诗章是描写铁匠卡维领导人民起义、反抗暴君蛇王祖哈克的传说故事，塑造了众多英勇起义者的形象。②勇士故事。约占全书一半篇幅，是全书的精华。突出表现了民族英雄鲁斯坦姆光辉的一生，同时谴责了暴君的统治。③历史故事。描写了阿拉伯人入侵前萨珊王朝时期的历史事",
    plotNodes: [
      { label: "Part 1", description: "《列王纪》是波斯诗人菲尔多西历时43年创作的史诗，完成于11世纪初，2017年商务印书馆出版张鸿年、宋丕方译全本。全书约12万行，记载波斯从创世至萨珊王朝灭亡的4600年历史，分为神话传说、勇士故事和历史纪事三部分，其中鲁斯塔姆与苏赫拉布等英雄篇章为核心内容。作品采用达里波斯语书写，阿拉伯语借词仅占8.8%，收录波斯神话与历史故事，塑造反抗异族统治的英雄形象。菲尔多西融合琐罗亚斯德教元素，通过“灵" },
      { label: "Part 2", description: "作品采用达里波斯语书写，阿拉伯语借词仅占8.8%，收录波斯神话与历史故事，塑造反抗异族统治的英雄形象。菲尔多西融合琐罗亚斯德教元素，通过“灵光”传承、善恶二元论等维系波斯文化认同。该书中文译本包含1964年《鲁斯塔姆与苏赫拉布》选译本。与哈菲兹抒情诗集、萨迪全集等并称波斯文学四大支柱。" },
      { label: "Part 3", description: "《列王纪》是波斯人的爱国热情和新兴的达里波斯文学语言相结合的产物。出于反对阿拉伯人的思想需要，波斯地方政权的统治者曾大力提倡写王书。在菲尔多西创作之前，已有 5 部王书问世，其中3部为散文体，2部为诗体。萨曼王朝的宫廷诗人塔吉基曾受王命写王书，因被仆人杀害 ，只完成了1000行 。菲尔多西将这 1000 行诗全部收录在《列王纪》中，以资纪念。" },
      { label: "Part 4", description: "《列王纪》长达 60000 双行，叙述内容的时间跨度在4000年以上，从开天辟地写到 651 年波斯帝国灭亡时止。简要叙述了波斯历史上50个帝王公侯的生平事迹，并汇集了数千年来流传在民间的神话传说和历史故事。大致可以分为 3 部分：①神话传说。其中最精彩的诗章是描写铁匠卡维领导人民起义、反抗暴君蛇王祖哈克的传说故事，塑造了众多英勇起义者的形象。②勇士故事。约占全书一半篇幅，是全书的精华。突出表现了" }
    ],
    themeAnalysis: "[Structure and Themes: Myth, Legend and History | The Shahnameh] The various roles of women in the Shahnameh are indicative of Ferdowsi's views on social order. A good example is the story of Bahram Gur who cruelly ...\n\n[Shahnameh: History & Analysis - Video - Study.com] Ferdowsi wrote the Persian epic Shahnameh, which translates as ''Book of Kings,'' during the Ghaznavid Dynasty. It tells the stories of ...\n\n[[PDF] the footprints of shahnameh in world literature: a review of the two ...] By utilizing the themes and characters of. Ferdowsi's Shahnameh, Tawfik has been able to create a supernatural and fantasy work with a ...",
    techniques: "[Structure and Themes: Myth, Legend and History | The Shahnameh] The various roles of women in the Shahnameh are indicative of Ferdowsi's views on social order. A good example is the story of Bahram Gur who cruelly ...",
    excerpts: [],
    insights: "[Shahnameh - Wikipedia] The Shahnameh, also romanized Shahnama ( lit. 'Book of Kings'), is a long epic poem written by the Persian poet Ferdowsi between c. 977 and 1010 CE and is ...\n\n[Structure and Themes: Myth, Legend and History | The Shahnameh] The various roles of women in the Shahnameh are indicative of Ferdowsi's views on social order. A good example is the story of Bahram Gur who cruelly ...\n\n[Shahnameh: History & Analysis - Video - Study.com] Ferdowsi wrote the Persian epic Shahnameh, which translates as ''Book of Kings,'' during the Ghaznavid Dynasty. It tells the stories of ...\n\n[Th",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%88%97%E7%8E%8B%E7%BA%AA", tier: "reference", fetchedAt: "2026-05-21T05:14:55.552Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "masnavi": {
    id: "masnavi",
    characters: [
      { name: "Persian", role: "角色", description: "\"Masnavi\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Middle Persian", role: "角色", description: "\"Masnavi\" 中出现的角色。更多信息请通过搜索链接核实。" }
    ],
    plotSummary: "Mas̄navī, a series of distichs (couplets) in rhymed pairs (aa, bb, cc, and so on) that makes up a characteristic type of Persian verse, used chiefly for heroic, historical, and romantic epic poetry and didactic poetry. The form originated in the Middle Persian period (roughly from the 3rd century",
    plotNodes: [
      { label: "第 1 部分", description: "Mas̄navī, a series of distichs (couplets) in rhymed pairs (aa, bb, cc, and so on) that makes up a characteristic type of Persian verse, used chiefly for heroic, historical, and romantic epic poetry an" }
    ],
    themeAnalysis: "Mas̄navī, a series of distichs (couplets) in rhymed pairs (aa, bb, cc, and so on) that makes up a characteristic type of Persian verse, used chiefly for heroic, historical, and romantic epic poetry and didactic poetry. The form originated in the Middle Persian period (roughly from the 3rd century",
    techniques: "Mas̄navī, a series of distichs (couplets) in rhymed pairs (aa, bb, cc, and so on) that makes up a characteristic type of Persian verse, used chiefly for heroic, historical, and romantic epic poetry and didactic poetry. The form originated in the Middle Persian period (roughly from the 3rd century",
    excerpts: [],
    insights: "Mas̄navī, a series of distichs (couplets) in rhymed pairs (aa, bb, cc, and so on) that makes up a characteristic type of Persian verse, used chiefly for heroic, historical, and romantic epic poetry and didactic poetry. The form originated in the Middle Persian period (roughly from the 3rd century",
    sourceAttribution: {
      sources: [
        { label: "Britannica", url: "https://www.britannica.com/topic/Masnavi", tier: "reference", fetchedAt: "2026-05-21T04:23:18.110Z", contributedFields: ["plotSummary", "themeAnalysis"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=Masnavi%20Rumi" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=Masnavi%20Rumi" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=Masnavi" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=Masnavi" },
      ],
    },
  },

  "thousand-nights": {
    id: "thousand-nights",
    characters: [
      { name: "Tales", role: "角色", description: "One Thousand and One Nights 中的主要角色。" },
      { name: "The Arabian Nights", role: "角色", description: "One Thousand and One Nights 中的主要角色。" }
    ],
    plotSummary: "《一千零一夜》（Tales from the thousand and one nights、The Arabian Nights）是阿拉伯民间故事集，又名《天方夜谭》。该作讲述古代阿拉伯地区有一位国王叫山鲁亚尔，他生性残暴嫉妒，因王后行为不端，将其杀死，此后每日娶一少女，翌日晨即杀掉，以示报复。宫相维齐尔的女儿山鲁佐德为拯救无辜的女子，自愿嫁给国王。山鲁佐德用讲述故事方法吸引国王，每夜讲到最精彩处，天刚好亮了，使国王因爱听故事而不忍杀她，允许她下一夜继续讲。她的故事一直讲了一千零一夜，国王终于被感动，与她白首偕老。因其内容丰富，规模宏大，故被高尔基誉为世界民间文学史上“最壮丽的一座纪念碑”。\n《一千零一夜》（Tales from the thousand and one nights、The Arabian Nights）是阿拉伯民间故事集，又名《天方夜谭》。\n\n该作讲述古代阿拉伯地区有一位国王叫山鲁亚尔，他生性残暴嫉妒，因王后行为不端，将其杀死，此后每日娶一少女，翌日晨即杀掉，以示报复。宫相维齐尔的女儿山鲁佐德为拯救无辜的女子，自愿嫁给国王。山鲁佐德用讲述故事方法吸引国王，每夜讲到最精彩处，天刚好亮了，使国王因爱听故事而不忍杀她，允许她下一夜继续讲。她的故事一直讲了一千零一夜，国王终于被感动，与她白首偕老。因其内容丰富，规模宏大，故被高尔基誉为世界民间文学史上“最壮丽的一座纪念碑”。\n\n相传古时候，在古阿拉伯的海岛上，有一个萨桑王国，国王名叫山努亚。有一天，山努亚和他的弟弟萨曼来到一片紧邻大海的草原，当他们正在一棵树下休息时，突然海中间冒起一个黑色的水柱，一个女郎来到了他们身边，并告诉他们天下所有的妇女都是不可信赖、不可信任的。 [1]\n\n国王山努亚和弟弟萨曼回到萨桑王国后，发现王后行为不端，他们便杀死王后。从此，山努亚深深地厌恶妇女便又杀死宫女，他存心报复，又开始每天娶一个女子来过一夜，次日便杀掉再娶，完全变成了一个暴君。这样年复一年，持续了三个年头，杀掉了一千多个女子。\n\n《一千零一夜》的形成发展过程经历了漫长的8个世纪。《一千零一夜》的名称出自这部故事集开头的第一个故事。相传在古代印度和中国之间的海上有一个岛国叫萨桑国。国王山鲁亚尔发现王后和妃子“不贞”，杀死她们后，国王每夜都要新娶一个少女，翌晨杀掉。“百姓受此威胁，十分恐怖，都带着女儿逃走。可是国王照例",
    plotNodes: [
      { label: "Part 1", description: "《一千零一夜》（Tales from the thousand and one nights、The Arabian Nights）是阿拉伯民间故事集，又名《天方夜谭》。该作讲述古代阿拉伯地区有一位国王叫山鲁亚尔，他生性残暴嫉妒，因王后行为不端，将其杀死，此后每日娶一少女，翌日晨即杀掉，以示报复。宫相维齐尔的女儿山鲁佐德为拯救无辜的女子，自愿嫁给国王。山鲁佐德用讲述故事方法吸引国王，每夜讲到最精彩" },
      { label: "Part 2", description: "该作讲述古代阿拉伯地区有一位国王叫山鲁亚尔，他生性残暴嫉妒，因王后行为不端，将其杀死，此后每日娶一少女，翌日晨即杀掉，以示报复。宫相维齐尔的女儿山鲁佐德为拯救无辜的女子，自愿嫁给国王。山鲁佐德用讲述故事方法吸引国王，每夜讲到最精彩处，天刚好亮了，使国王因爱听故事而不忍杀她，允许她下一夜继续讲。她的故事一直讲了一千零一夜，国王终于被感动，与她白首偕老。因其内容丰富，规模宏大，故被高尔基誉为世界民间文" },
      { label: "Part 3", description: "相传古时候，在古阿拉伯的海岛上，有一个萨桑王国，国王名叫山努亚。有一天，山努亚和他的弟弟萨曼来到一片紧邻大海的草原，当他们正在一棵树下休息时，突然海中间冒起一个黑色的水柱，一个女郎来到了他们身边，并告诉他们天下所有的妇女都是不可信赖、不可信任的。" },
      { label: "Part 4", description: "国王山努亚和弟弟萨曼回到萨桑王国后，发现王后行为不端，他们便杀死王后。从此，山努亚深深地厌恶妇女便又杀死宫女，他存心报复，又开始每天娶一个女子来过一夜，次日便杀掉再娶，完全变成了一个暴君。这样年复一年，持续了三个年头，杀掉了一千多个女子。" },
      { label: "Part 5", description: "《一千零一夜》的形成发展过程经历了漫长的8个世纪。《一千零一夜》的名称出自这部故事集开头的第一个故事。相传在古代印度和中国之间的海上有一个岛国叫萨桑国。国王山鲁亚尔发现王后和妃子“不贞”，杀死她们后，国王每夜都要新娶一个少女，翌晨杀掉。“百姓受此威胁，十分恐怖，都带着女儿逃走。可是国王照例" }
    ],
    themeAnalysis: "",
    techniques: "",
    excerpts: [],
    insights: "《一千零一夜》（Tales from the thousand and one nights、The Arabian Nights）是阿拉伯民间故事集，又名《天方夜谭》。该作讲述古代阿拉伯地区有一位国王叫山鲁亚尔，他生性残暴嫉妒，因王后行为不端，将其杀死，此后每日娶一少女，翌日晨即杀掉，以示报复。宫相维齐尔的女儿山鲁佐德为拯救无辜的女子，自愿嫁给国王。山鲁佐德用讲述故事方法吸引国王，每夜讲到最精彩处，天刚好亮了，使国王因爱听故事而不忍杀她，允许她下一夜继续讲。她的故事一直讲了一千零一夜，国王终于被感动，与她白首偕老。因其内容丰富，规模宏大，故被高尔基誉为世界民间文学史上“最壮丽的一座纪念碑”。\n《一千零一夜》（Tales from the thousand and one nights、The Arabian Nights）是阿拉伯民间故事集，又名《天方夜谭》。\n\n该作讲述古代阿拉伯地区有一位国王叫山鲁亚尔，他生性残暴嫉妒，因王后行为不端，将其杀死，此后每日娶一少女，翌日晨即杀掉，以示报复。宫相维齐尔的女儿山鲁佐德为拯救无辜的女子，自愿嫁给国王。山鲁佐德用讲述故事方法吸引国王，每夜讲到最精彩处，天刚好亮了，使国王因爱听故事而不忍杀她，允许她下一夜继续讲。她的故事一直讲了一千零一夜，国王终于被感动，与她白首偕老。因其内容丰富，规模宏大，故被高尔基誉为世界民间文学史上“最壮丽的一座纪念",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E4%B8%80%E5%8D%83%E9%9B%B6%E4%B8%80%E5%A4%9C", tier: "reference", fetchedAt: "2026-05-21T04:25:58.551Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "epic-of-gilgamesh": {
    id: "epic-of-gilgamesh",
    characters: [
      { name: "The Epic", role: "角色", description: "Epic of Gilgamesh 中的主要角色。" },
      { name: "Gilgamesh Character Analysis", role: "角色", description: "Epic of Gilgamesh 中的主要角色。" },
      { name: "Gilgamesh", role: "角色", description: "Epic of Gilgamesh 中的主要角色。" },
      { name: "All Themes", role: "角色", description: "Epic of Gilgamesh 中的主要角色。" },
      { name: "Civilization", role: "角色", description: "Epic of Gilgamesh 中的主要角色。" },
      { name: "Fall", role: "角色", description: "Epic of Gilgamesh 中的主要角色。" },
      { name: "Innocence Theme Icon", role: "角色", description: "Epic of Gilgamesh 中的主要角色。" },
      { name: "Innocence", role: "角色", description: "Epic of Gilgamesh 中的主要角色。" }
    ],
    plotSummary: "[The Epic of Gilgamesh: Themes | SparkNotes] A summary of Themes in Literature's The Epic of Gilgamesh ... Plot Overview · Character List · Analysis of Major Characters · Themes, Motifs, and Symbols.\n\n[The Epic of Gilgamesh Summary & Study Guide - BookRags.com] The Epic of Gilgamesh Summary & Study Guide includes detailed chapter summaries and analysis, quotes, character descriptions, themes, and more.\n\n[The Epic of Gilgamesh: Full Poem Summary - SparkNotes] A short summary of Literature's The Epic of Gilgamesh. This free synopsis covers all the crucial plot points of The Epic of Gilgamesh.\n\n[Video: Epic of Gilgamesh | Summary, Characters & Analysis] Themes and Symbolism in the Epic of Gilgamesh ... The Epic of Gilgamesh tells us the importance of dreams. It was shown through the prophetic dreams guiding ...\n\n[Epic of Gilgamesh | Summary, Characters & Analysis - Study.com] The Epic of Gilgamesh explores themes of friendship, the quest for immortality, the human condition, and the relat",
    plotNodes: [
      { label: "Part 1", description: "[The Epic of Gilgamesh: Themes | SparkNotes] A summary of Themes in Literature's The Epic of Gilgamesh ..." },
      { label: "Part 2", description: "[The Epic of Gilgamesh Summary & Study Guide - BookRags.com] The Epic of Gilgamesh Summary & Study Guide includes detailed chapter summaries and analysis, quotes, character descriptions, themes, and m" },
      { label: "Part 3", description: "[The Epic of Gilgamesh: Full Poem Summary - SparkNotes] A short summary of Literature's The Epic of Gilgamesh." },
      { label: "Part 4", description: "[Video: Epic of Gilgamesh | Summary, Characters & Analysis] Themes and Symbolism in the Epic of Gilgamesh ..." },
      { label: "Part 5", description: "[Epic of Gilgamesh | Summary, Characters & Analysis - Study.com] The Epic of Gilgamesh explores themes of friendship, the quest for immortality, the human condition, and the relat" }
    ],
    themeAnalysis: "[The Epic of Gilgamesh: Themes | SparkNotes] A summary of Themes in Literature's The Epic of Gilgamesh ... Plot Overview · Character List · Analysis of Major Characters · Themes, Motifs, and Symbols.\n\n[Video: Epic of Gilgamesh | Summary, Characters & Analysis] Themes and Symbolism in the Epic of Gilgamesh ... The Epic of Gilgamesh tells us the importance of dreams. It was shown through the prophetic dreams guiding ...\n\n[The Epic of Gilgamesh Character Analysis - LitCharts] The Epic of Gilgamesh · All Themes · Civilization and the Fall from Innocence Theme Icon. Civilization and the Fall from Innocence · Heroism in Nature vs. Comfort ...\n\n[The Epic of Gilgamesh Summary & Study Guide - BookRags.com] The Epic of Gilgamesh Summary & Study Guide includes detailed chapter summaries and analysis,",
    techniques: "[Epic of Gilgamesh - Wikipedia] The Epic of Gilgamesh is an epic from ancient Mesopotamia. The literary history of Gilgamesh begins with five Sumerian poems about Gilgamesh (the variant ...",
    excerpts: [
      { quote: "My students can't get enough of your charts and their results have gone through the roof.", context: "From Epic of Gilgamesh" }
    ],
    insights: "[The Epic of Gilgamesh: Themes | SparkNotes] A summary of Themes in Literature's The Epic of Gilgamesh ... Plot Overview · Character List · Analysis of Major Characters · Themes, Motifs, and Symbols.\n\n[Epic of Gilgamesh - Wikipedia] The Epic of Gilgamesh is an epic from ancient Mesopotamia. The literary history of Gilgamesh begins with five Sumerian poems about Gilgamesh (the variant ...\n\n[The Epic of Gilgamesh Character Analysis - LitCharts] The Epic of Gilgamesh · All Themes · Civilization and the Fall from Innocence Theme Icon. Civilization and the Fall from Innocence · Heroism in Nature vs",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%90%89%E5%B0%94%E4%BC%BD%E7%BE%8E%E4%BB%80%E5%8F%B2%E8%AF%97", tier: "reference", fetchedAt: "2026-05-21T05:11:30.121Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "analects-of-confucius-kr": {
    id: "analects-of-confucius-kr",
    plotSummary: "[the story of chunhyang | Summaries Philosophy of Love | Docsity] ... character analysis, themes, memorable scenes, cultural context, and personal reflection ... Reading Journal: The Tale of Chunhyang (Chunhyangjeon) ... Plot Summary ...\n\n[Exploring Korean Classical Literature: Chunhyangjeon by Minseo ...] Plot Summary of Chunhyangjeon. An In-depth Analysis of Themes, Characters, and Cultural Significance. Main Storyline. Key Themes and Motifs. Chunhyangjeon ...\n\n[What is the story of Chunhyang-jeon? - Facebook] The plot concerns a girl Sun Chunhyang, and is based original Chunhyangjeon is a 17th Century novel telling one of the best known ...\n\n[[PDF] KOREAN CULTURE SYMBOLS IN CHUNHYANG JEON] characters from the story. ... [3] Yang Soo Bae (translator), ChunhyangJeon, Foreign Languages. Publishing House Pyongyang Korea, 1998.\n\n《豪杰春香》是由韩国KBS电视台出品发行，池秉贤、全基尚执导，洪静恩、洪美兰担任编剧，韩彩英、在熙、严泰雄、朴诗恩等主演的爱情剧。该剧改编自韩国传统民间故事《春香传》。主要讲述了警察局所长儿子李梦龙从汉城转学到全罗北道南原的某高中，刚到学校就与全校第一名成春香（韩彩英 饰）产生误会，两人之间曲折而又浪漫的爱情喜剧就此展开",
    plotNodes: [
      { label: "Part 1", description: "[the story of chunhyang | Summaries Philosophy of Love | Docsity] ..." },
      { label: "Part 2", description: "[Exploring Korean Classical Literature: Chunhyangjeon by Minseo ...] Plot Summary of Chunhyangjeon." },
      { label: "Part 3", description: "[What is the story of Chunhyang-jeon?" },
      { label: "Part 4", description: "[[PDF] KOREAN CULTURE SYMBOLS IN CHUNHYANG JEON] characters from the story." },
      { label: "Part 5", description: "《豪杰春香》是由韩国KBS电视台出品发行，池秉贤、全基尚执导，洪静恩、洪美兰担任编剧，韩彩英、在熙、严泰雄、朴诗恩等主演的爱情剧。该剧改编自韩国传统民间故事《春香传》。主要讲述了警察局所长儿子李梦龙从汉城转学到全罗北道南原的某高中，刚到学校就与全校第一名成春香（韩彩英 饰）产生误会，两人之间曲折而又浪漫的爱情喜剧就此展开" }
    ],
    themeAnalysis: "[Exploring Korean Classical Literature: Chunhyangjeon by Minseo ...] Plot Summary of Chunhyangjeon. An In-depth Analysis of Themes, Characters, and Cultural Significance. Main Storyline. Key Themes and Motifs. Chunhyangjeon ...\n\n[the story of chunhyang | Summaries Philosophy of Love | Docsity] ... character analysis, themes, memorable scenes, cultural context, and personal reflection ... Reading Journal: The Tale of Chunhyang (Chunhyangjeon) ... Plot Summary ...\n\n[Chunhyangjeon - Grokipedia] Chunhyangjeon is classified as a chunhyang-type folktale within Korean oral traditions, characterized by themes of romantic love transcending rigid class ...\n\n《豪杰春香》是由韩国KBS电视台出品发行，池秉贤、全基尚执导，洪静恩、洪美兰担任编剧，韩彩英、在熙、严泰雄、朴诗恩等主演的爱情剧。该剧改编自韩国传统民间故事《春香传》。主要讲述了警察局所长儿子李梦龙从汉城转学到全罗北道南原的某高中，刚到学校就与全校第一名成春香（韩彩英 饰）产生误会，两人",
    techniques: "",
    excerpts: [],
    insights: "[Love Everywhere? A Short Talk about “Chunhyang on Page, Stage ...] Kwon Sunkeung, “Translations of Chunhyangjeon into Foreign Languages and Their Cultural Significance”, The International Journal of Chinese ...\n\n[Exploring Korean Classical Literature: Chunhyangjeon by Minseo ...] Plot Summary of Chunhyangjeon. An In-depth Analysis of Themes, Characters, and Cultural Significance. Main Storyline. Key Themes and Motifs. Chunhyangjeon ...\n\n[Chunhyangjeon - Grokipedia] Chunhyangjeon is classified as a chunhyang-type folktale within Korean oral traditions, characterized by themes of romantic love",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E6%98%A5%E9%A6%99%E4%BC%A0", tier: "reference", fetchedAt: "2026-05-21T05:13:14.084Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  // ==================== 欧洲 — 古希腊/罗马 ====================

  "iliad": {
    id: "iliad",
    characters: [
      { name: "阿喀琉斯", role: "主人公", description: "希腊联军最伟大的战士，半神英雄。他的愤怒是整部史诗的引擎——因为统帅阿伽门农夺走了他的女俘布里塞伊斯，他拒不出战；当挚友帕特罗克洛斯被赫克托耳杀死后，他的怒火转向了特洛伊人。" },
      { name: "赫克托耳", role: "特洛伊英雄", description: "特洛伊王子，城邦最勇敢的守护者。与阿喀琉斯不同，他是为保卫家园和妻儿而战——在他与妻子安德洛玛刻告别的场景中，荷马赋予了'敌人'以最深沉的人性光辉。" },
      { name: "帕特罗克洛斯", role: "关键人物", description: "阿喀琉斯的挚友（或恋人）。当希腊军溃败时，他穿上阿喀琉斯的盔甲出战，被赫克托耳杀死。他的死是整部史诗的情感核心——阿喀琉斯重返战场不是因为荣誉，而是因为无法承受的丧友之痛。" },
      { name: "阿伽门农", role: "希腊统帅", description: "迈锡尼国王，希腊联军的最高统帅。他傲慢自私，与阿喀琉斯的冲突几乎葬送了整个远征——但他并非一个简单的暴君，荷马赋予了他领导者必须承担的重负与两难。" },
    ],
    plotSummary: "愤怒——歌唱吧女神，珀琉斯之子阿喀琉斯的致命的愤怒，它给阿开奥斯人带来了无数的苦难。特洛伊战争已经进行到了第十年。阿喀琉斯——希腊联军最伟大的战士——因为统帅阿伽门农夺走了他的战利品女奴布里塞伊斯而愤怒地拒绝出战。没有了他的力量，特洛伊人在赫克托耳的率领下将希腊人逼到了海边。阿喀琉斯的挚友帕特罗克洛斯披上他的铠甲出战，被赫克托耳杀死。悲痛欲绝的阿喀琉斯重新回到战场，在特洛伊城下追杀赫克托耳三圈后杀死了他，并将他的尸体拖在战车后绕城三周。最终，特洛伊老国王普里阿摩斯独自来到阿喀琉斯的帐篷，亲吻那双杀死了他儿子的手——在这一刻，史诗从愤怒转向了怜悯。",
    plotNodes: [
      { label: "阿喀琉斯的愤怒", description: "阿伽门农夺走了阿喀琉斯的布里塞伊斯。阿喀琉斯退出战斗——他的致命的愤怒将给希腊人带来无尽的灾难" },
      { label: "帕特罗克洛斯之死", description: "阿喀琉斯的挚友帕特罗克洛斯披上他的铠甲迎战赫克托耳。赫克托耳杀死了他，剥走了阿喀琉斯的铠甲" },
      { label: "阿喀琉斯重归战场", description: "悲痛欲绝的阿喀琉斯得到赫菲斯托斯打造的新铠甲，冲入战场。他仅靠愤怒就屠杀了无数特洛伊人" },
      { label: "杀死赫克托耳", description: "阿喀琉斯在特洛伊城墙下追杀了赫克托耳三圈，用矛刺穿了他的喉咙——然后拖着他的尸体绕城三周" },
      { label: "普里阿摩斯的赎金", description: "老国王普里阿摩斯独自进入希腊营地，亲吻阿喀琉斯的手——那双杀死了他儿子的手。两人共同哭泣。阿喀琉斯归还了赫克托耳的尸体" }
    ],
    themeAnalysis: "《伊利亚特》的核心主题不是特洛伊战争，而是阿喀琉斯的愤怒——以及这种愤怒如何最终被转化为怜悯。荷马不是在歌颂战争：他在追问战争对战士灵魂的摧毁。阿喀琉斯的愤怒使他超越了人类的界限——他屠杀河水、拒绝宽恕、亵渎死者——而正是在这种人性的丧失中，我们看到战争的真正恐怖。但史诗的终点是怜悯：当普里阿摩斯亲吻阿喀琉斯的手时，两个敌人一同哭泣——在他们共同的悲伤中，敌我之分暂时消失了。荷马告诉我们：荣誉和复仇是重要的，但怜悯更加重要——它是恢复被战争所摧毁的人性的唯一途径。",
    techniques: "荷马的叙事技艺是西方文学的源头。扩展明喻——将战场上的一个瞬间与日常生活中的场景进行详尽的比较——不仅提供了修辞的美感，更是将暴力的世界与和平的世界进行了持续的对比。固定修饰语（捷足的阿喀琉斯、头盔闪亮的赫克托耳、牛眼的赫拉）构成了史诗的韵律骨架。对话中的辩论——阿喀琉斯与阿伽门农的争吵、赫克托耳与安德洛玛刻的告别——展现了不同价值体系之间的激烈碰撞。最重要的技艺是，荷马不偏袒任何一方——特洛伊人和希腊人都可以是勇敢的，也都可以是残忍的。",
    excerpts: [
      { quote: "歌唱吧女神，珀琉斯之子阿喀琉斯的致命的愤怒——它给阿开奥斯人带来了无尽的苦难。", context: "《伊利亚特》的开篇——西方文学的第一个词是愤怒，而其最伟大的洞见是：愤怒带来所有人的苦难。" },
      { quote: "就像一片树叶的世代，人类的世代也是如此。风把树叶吹到地上，但树木在春天再次发芽——人类的世代一个接一个地诞生和消逝。", context: "特洛伊战场上的格劳科斯对生命的沉思——荷马史诗中最优美的关于人之必死的比喻。" }
    ],
    insights: "《伊利亚特》是一首关于战争的诗——但它不是一首歌颂战争的诗。在西方文学的起源处，荷马选择了一个愤怒的男人而不是一个胜利的英雄作为主角，这本身就是一个深刻的伦理选择。他让我们看到：战争的真正代价不是失败，而是胜利者灵魂的毁灭。普里阿摩斯亲吻阿喀琉斯的手——这个场景在三千年的重读中从未失去力量，因为它触及了人类处境中最深刻的真相：在共同的悲伤面前，敌我可以暂时成为同类。",
  },

  "odyssey": {
    id: "odyssey",
    characters: [
      { name: "奥德修斯", role: "主人公", description: "伊塔卡国王，特洛伊战争中'木马计'的设计者。他归家途中历经十年漂泊——从独眼巨人到女巫喀耳刻，从海妖塞壬到女神卡吕普索——他以智慧和忍耐对抗一切诱惑与危险，只为回到妻子身边。" },
      { name: "佩涅洛佩", role: "女主角", description: "奥德修斯的妻子，以智慧和忠贞抵御了一百多个求婚者二十年的纠缠。她白天织布，夜里拆掉——这个'永远在完成中的织物'是她等待丈夫归来的最动人隐喻。" },
      { name: "忒勒玛科斯", role: "儿子", description: "奥德修斯离家时还在襁褓中的儿子，长大后踏上寻父之旅。他的成长——从一个无助的少年到能够与父亲并肩作战的勇士——是史诗中第二条叙事线。" },
    ],
    plotSummary: "特洛伊战争结束后，英雄奥德修斯踏上了归乡之路——但这条归途花了整整十年。他的船队被风吹离了航线，从此开始了一连串的历险：独眼巨人波吕斐摩斯吃掉了他的六个同伴，他用计刺瞎了巨人的独眼逃出；女神基尔克将他的同伴变成了猪；他在冥界与亡魂交谈，听到了阿喀琉斯对死后虚无的哀叹；他用蜡塞住水手的耳朵、将自己绑在桅杆上通过了塞壬的歌声；他在海上失去了所有同伴和船只，独自漂到了卡吕普索的岛屿，被囚禁了七年。同时，在他的家乡伊塔卡，他的妻子佩涅洛佩被一百零八个求婚者包围——她以织布为借口拖延了三年。最终奥德修斯扮成乞丐回到家中，射杀了所有求婚者，重回了他的王位和他的妻子身边。",
    plotNodes: [
      { label: "卡吕普索的岛屿", description: "奥德修斯被女神卡吕普索囚禁在她的岛上七年。他每天坐在海边哭泣——望着家乡的方向" },
      { label: "独眼巨人", description: "奥德修斯和他的同伴被独眼巨人波吕斐摩斯困在洞中。奥德修斯谎称自己是无人，刺瞎了巨人的独眼" },
      { label: "冥界的亡魂", description: "奥德修斯航行到冥界，见到了已故的英雄阿喀琉斯。阿喀琉斯说：我宁愿做一个活人的奴隶，也不做所有亡魂的国王" },
      { label: "塞壬与斯库拉", description: "奥德修斯的船通过了塞壬的诱人歌声和吞噬水手的六头海怪斯库拉" },
      { label: "扮成乞丐归来", description: "奥德修斯在雅典娜的帮助下扮成乞丐回到了自己的宫殿。只有他垂死的狗阿耳戈斯认出了他" },
      { label: "射杀求婚者", description: "奥德修斯拿起自己的弓——求婚者中没有人能拉开——射杀了全部一百零八个求婚者。佩涅洛佩最终确认了他的身份" }
    ],
    themeAnalysis: "《奥德赛》的核心主题是归乡——以及归乡的代价。与《伊利亚特》中阿喀琉斯选择短暂而光荣的生命不同，奥德修斯代表了一种不同的英雄主义：他选择活着回家。他为此付出了巨大的代价——他在海上漂了十年，失去了所有的同伴，抵达家乡时一无所有，甚至不能公开自己的身份。归乡（nostos）不是一个地理上的回到原点——十年的漂泊已经将他变成了另一个人，他的家也已经变了。佩涅洛佩的考验（移动婚床）正是关于这一点：归来的丈夫是否还是当年离开的那个人？奥德修斯证明了自己的身份——不是因为说出了什么秘密，而是因为他知道那张床是用一棵还活着的橄榄树做的，所以它无法被移动。",
    techniques: "荷马在《奥德赛》中采用了比《伊利亚特》更为复杂的叙事结构。故事不是从开头讲起，而是从奥德修斯在卡吕普索岛上被囚禁开始——此前的历险是通过奥德修斯自己的倒叙来讲述的。这种框架叙事赋予了史诗一种独特的自我反思性：奥德修斯讲述自己的故事，他是一个故事中的故事讲述者。在奥德修斯身上，荷马创造了西方文学中第一个凭借智慧而非蛮力获胜的英雄：他的武器是谎言和计谋——他始终是一个不可信任的叙述者，即使在自己的故事中。",
    excerpts: [
      { quote: "告诉我，缪斯，那位足智多谋的人——他漂泊了很多地方，在攻下特洛伊的神圣城堡之后。他看到了很多人类的城市，了解了很多人的心灵。", context: "《奥德赛》的开篇——荷马为西方文学建立了求知欲作为英雄品质的合法性。" },
      { quote: "我宁愿做一个活人的奴隶，也不做所有亡魂的国王。", context: "阿喀琉斯在冥界对奥德修斯说的话——从追求短而光荣的生命到渴望长而平凡的生命的转变。" }
    ],
    insights: "《奥德赛》是所有归乡故事的原型。奥德修斯的漂泊不仅是他回到伊塔卡的过程，也是一个他重新发现'家的意义'的旅程。他拒绝了与卡吕普索一起获得永生的机会——他选择做一个必死的凡人，回到一个必死的妻子身边，过着必死的、日常的生活。三千年前荷马就已经知道：家的价值不是可以用不朽或荣耀来衡量的——它就是我们全部存在的锚点。",
  },

  "oedipus": {
    id: "oedipus",
    plotSummary: "《俄狄浦斯王》是由皮埃尔·保罗·帕索里尼执导并编剧，肖瓦娜·曼加诺、阿莉达·瓦莉等主演的意大利剧情片，于1967年9月3日在意大利上映。影片改编自古希腊剧作家索福克勒斯的同名戏剧，以古希腊悲剧为范本创作。该片讲述俄狄浦斯为逃避弑父娶母的神谕外出流浪，却在争斗中误杀生父，后因破解谜题成为提北国国王并与生母成婚。当王国爆发瘟疫追查凶手时，俄狄浦斯发现自己正是预言实践者。影片通过这一命运悖论展现人类意志与宿命的冲突，其叙事结构被亚里士多德视为古希腊悲剧的典范。\n《俄狄浦斯王》是由皮埃尔·保罗·帕索里尼执导并编剧，肖瓦娜·曼加诺、阿莉达·瓦莉等主演的意大利剧情片，于1967年9月3日在意大利上映。影片改编自古希腊剧作家索福克勒斯的同名戏剧，以古希腊悲剧为范本创作。该片讲述俄狄浦斯为逃避弑父娶母的神谕外出流浪，却在争斗中误杀生父，后因破解谜题成为提北国国王并与生母成婚。当王国爆发瘟疫追查凶手时，俄狄浦斯发现自己正是预言实践者。影片通过这一命运悖论展现人类意志与宿命的冲突，其叙事结构被亚里士多德视为古希腊悲剧的典范。\n\n克林多斯的一名牧羊人将一个遭人遗弃的婴儿救下后，将他献给了没有子女的国王，时光荏苒，婴儿长大成人，被唤名俄狄浦斯（佛朗哥·齐蒂）。某天，女巫将阿波罗神话讲给俄狄浦斯听，说他将来会亲手杀死生父并和生母结婚，听后，俄狄浦斯决定外出流浪。 途中，他与一群人发生殴斗，失手将一名老者打死，其人正是他的生父。接着，他继续流浪到了提北国，将那里的人面兽身怪物打死后，与王妃依娃卡丝蒂（西尔瓦娜·曼诺迦）成亲成为该国新国王，而该王妃正是他的生母，阿波罗神话灵验。遂即，提北国开始蔓延一种疾病，为了消灭这种病，该国人民四处寻找杀死老国王的凶手，俄狄浦斯终于知晓所有真相。《俄狄浦斯王》剧照\n\n电影版从特拜国王拉伊奥斯得到神谕后丢弃儿子开始，相较于戏剧，观众过早知晓主人公身世，悬念被削弱。电影平铺直叙，但准确还原了古希腊英雄时代的环境状貌，并最大程度尊重了原剧本台词。演员的表演代替了原剧中进场歌、合唱歌的形式来表现心理活动。\n\n本片是布景师首次独立负责布景工作的影片。主要室内场景（俄狄浦斯与母亲发生关系的婚房）在罗马的摄影棚搭建，导演帕索里尼要求布景风格反映其变化，追求不加装饰、斯巴达式的效果。部分场景在摩洛哥的瓦尔扎扎特拍摄。 [10]\n\n帕索里尼的改编是对古希腊悲剧的现代电影改编，对",
    plotNodes: [
      { label: "Part 1", description: "《俄狄浦斯王》是由皮埃尔·保罗·帕索里尼执导并编剧，肖瓦娜·曼加诺、阿莉达·瓦莉等主演的意大利剧情片，于1967年9月3日在意大利上映。影片改编自古希腊剧作家索福克勒斯的同名戏剧，以古希腊悲剧为范本创作。该片讲述俄狄浦斯为逃避弑父娶母的神谕外出流浪，却在争斗中误杀生父，后因破解谜题成为提北国国王并与生母成婚。当王国爆发瘟疫追查凶手时，俄狄浦斯发现自己正是预言实践者。影片通过这一命运悖论展现人类意志" },
      { label: "Part 2", description: "克林多斯的一名牧羊人将一个遭人遗弃的婴儿救下后，将他献给了没有子女的国王，时光荏苒，婴儿长大成人，被唤名俄狄浦斯（佛朗哥·齐蒂）。某天，女巫将阿波罗神话讲给俄狄浦斯听，说他将来会亲手杀死生父并和生母结婚，听后，俄狄浦斯决定外出流浪。" },
      { label: "Part 3", description: "电影版从特拜国王拉伊奥斯得到神谕后丢弃儿子开始，相较于戏剧，观众过早知晓主人公身世，悬念被削弱。电影平铺直叙，但准确还原了古希腊英雄时代的环境状貌，并最大程度尊重了原剧本台词。演员的表演代替了原剧中进场歌、合唱歌的形式来表现心理活动。" },
      { label: "Part 4", description: "本片是布景师首次独立负责布景工作的影片。主要室内场景（俄狄浦斯与母亲发生关系的婚房）在罗马的摄影棚搭建，导演帕索里尼要求布景风格反映其变化，追求不加装饰、斯巴达式的效果。部分场景在摩洛哥的瓦尔扎扎特拍摄。" }
    ],
    themeAnalysis: "《俄狄浦斯王》是由皮埃尔·保罗·帕索里尼执导并编剧，肖瓦娜·曼加诺、阿莉达·瓦莉等主演的意大利剧情片，于1967年9月3日在意大利上映。影片改编自古希腊剧作家索福克勒斯的同名戏剧，以古希腊悲剧为范本创作。该片讲述俄狄浦斯为逃避弑父娶母的神谕外出流浪，却在争斗中误杀生父，后因破解谜题成为提北国国王并与生母成婚。当王国爆发瘟疫追查凶手时，俄狄浦斯发现自己正是预言实践者。影片通过这一命运悖论展现人类意志与宿命的冲突，其叙事结构被亚里士多德视为古希腊悲剧的典范。\n《俄狄浦斯王》是由皮埃尔·保罗·帕索里尼执导并编剧，肖瓦娜·曼加诺、阿莉达·瓦莉等主演的意大利剧情片，于1967年9月3日在意大利上映。影片改编自古希腊剧作家索福克勒斯的同名戏剧，以古希腊悲剧为范本创作。该片讲述俄狄浦斯为逃避弑父娶母的神谕外出流浪，却在争斗中误杀生父，后因破解谜题成为提北国国王并与生母成婚。当王国爆发瘟疫追查凶手时，俄狄浦斯发现自己正是预言实践者。影片通过这一命运悖论展现人类意志与宿命的冲突，其叙事结构被亚里士多德视为古希腊悲剧的典范。\n\n克林多斯的一名牧羊人将一个遭人遗弃的婴儿救下后，将他献给了没有子女的国王，时光荏苒，婴儿长大成人，被唤名俄狄浦斯（佛朗哥·齐蒂）。某天，女巫将阿波罗神话讲给俄狄浦斯听，说他将来会亲手杀死生父并和生母结婚，听后，俄狄浦斯决定外出流浪。 途中，他与一群人发生殴斗，失手将一名老者打死，其人正是他的生父。接着，他继续流浪到了提北国，将那里的人面兽身怪物打死后，与王妃依娃卡丝蒂（西尔瓦娜·曼诺迦）成亲成为该国新国王，而该王妃正是他的生母，阿波罗神话灵验。遂即，提北国开始蔓延一种疾病，为了消灭这种病，该国人民四处寻找杀死老国王的凶手，俄狄浦斯终于知晓所有真相。《俄狄浦斯王》剧照\n\n电影版从特拜国王拉伊奥斯得到神谕后丢弃儿子开始，相较于戏剧，观众过早知晓主人公身世，悬念被削弱。电影平",
    techniques: "",
    excerpts: [],
    insights: "《俄狄浦斯王》是由皮埃尔·保罗·帕索里尼执导并编剧，肖瓦娜·曼加诺、阿莉达·瓦莉等主演的意大利剧情片，于1967年9月3日在意大利上映。影片改编自古希腊剧作家索福克勒斯的同名戏剧，以古希腊悲剧为范本创作。该片讲述俄狄浦斯为逃避弑父娶母的神谕外出流浪，却在争斗中误杀生父，后因破解谜题成为提北国国王并与生母成婚。当王国爆发瘟疫追查凶手时，俄狄浦斯发现自己正是预言实践者。影片通过这一命运悖论展现人类意志与宿命的冲突，其叙事结构被亚里士多德视为古希腊悲剧的典范。\n《俄狄浦斯王》是由皮埃尔·保罗·帕索里尼执导并编剧，肖瓦娜·曼加诺、阿莉达·瓦莉等主演的意大利剧情片，于1967年9月3日在意大利上映。影片改编自古希腊剧作家索福克勒斯的同名戏剧，以古希腊悲剧为范本创作。该片讲述俄狄浦斯为逃避弑父娶母的神谕外出流浪，却在争斗中误杀生父，后因破解谜题成为提北国国王并与生母成婚。当王国爆发瘟疫追查凶手时，俄狄浦斯发现自己正是预言实践者。影片通过这一命运悖论展现人类意志与宿命的冲突，其叙事结构被亚里士多德视为古希腊悲剧的典范。\n\n克林多斯的一名牧羊人将一个遭人遗弃的婴儿救下后，将他献给了没有子女的国王，时光荏苒，婴儿长大成人，被唤名俄狄浦斯（佛朗哥·齐蒂）。某天，女巫将阿波罗神话讲给俄狄浦斯听，说他将来会亲手杀死生父并和生母结婚，听后，俄狄浦斯决定外出流浪。 途中，他与一群人发生殴斗，失手将一名老者打死",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E4%BF%84%E7%8B%84%E6%B5%A6%E6%96%AF%E7%8E%8B", tier: "reference", fetchedAt: "2026-05-21T04:28:54.337Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "medea": {
    id: "medea",
    characters: [
      { name: "Fate", role: "角色", description: "\"Medea\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Caster", role: "角色", description: "\"Medea\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Servant", role: "角色", description: "\"Medea\" 中出现的角色。更多信息请通过搜索链接核实。" }
    ],
    plotSummary: "美狄亚是在游戏及改编动画作品《Fate》中登场的虚拟人物，是第五次圣杯战争中“Caster”职阶的Servant，优秀的神代魔术师。美狄亚真身是希腊神话中不幸的科尔基斯公主，英雄伊阿宋的原配妻子。在神话中，她被伊阿宋背叛抛弃，因愤怒而杀死了伊阿宋的新妻子和孩子，最终成为人们口中的 “背叛魔女”。在《Fate》系列中，因弑杀原御主而濒临灵基消散时，被葛木宗一郎所救，并成为他的Servant。虽然性格扭曲，不过只要决定了，就会为那个男人贡献到底的她，正将感情灌注于宗一郎一个人身上。\n美狄亚是在游戏及改编动画作品《Fate》中登场的虚拟人物，是第五次圣杯战争中“Caster”职阶的Servant，优秀的神代魔术师。\n\n美狄亚真身是希腊神话中不幸的科尔基斯公主，英雄伊阿宋的原配妻子。在神话中，她被伊阿宋背叛抛弃，因愤怒而杀死了伊阿宋的新妻子和孩子，最终成为人们口中的 “背叛魔女”。",
    plotNodes: [
      { label: "第 1 部分", description: "美狄亚是在游戏及改编动画作品《Fate》中登场的虚拟人物，是第五次圣杯战争中“Caster”职阶的Servant，优秀的神代魔术师。美狄亚真身是希腊神话中不幸的科尔基斯公主，英雄伊阿宋的原配妻子。在神话中，她被伊阿宋背叛抛弃，因愤怒而杀死了伊阿宋的新妻子和孩子，最终成为人们口中的 “背叛魔女”。在《Fate》系列中，因弑杀原御主而濒临灵基消散时，被葛木宗一郎所救，并成为他的Servant。虽然性格" },
      { label: "第 2 部分", description: "美狄亚真身是希腊神话中不幸的科尔基斯公主，英雄伊阿宋的原配妻子。在神话中，她被伊阿宋背叛抛弃，因愤怒而杀死了伊阿宋的新妻子和孩子，最终成为人们口中的 “背叛魔女”。在《Fate》系列中，因弑杀原御主而濒临灵基消散时，被葛木宗一郎所救，并成为他的Servant。虽然性格扭曲，不过只要决定了，就会为那个男人贡献到底的她，正将感情灌注于宗一郎一个人身上。" },
      { label: "第 3 部分", description: "葛木宗一郎的Servant（从者）。职阶是以魔术为专长的“Caster”。Caster在许多从者都具备对魔力能力的圣杯战争里被称作最弱，她为了弥补这点而从城镇的人们身上吸取生命力，当成魔力。 [1]人设原画" },
      { label: "第 4 部分", description: "她的真身是希腊神话的背叛魔女美狄亚（Medea）。拥有现代的魔术师不能相比的实力，即使是大魔术也能用一工程来发动。她发挥出这项本领，实践了以从者（Servant）之身作为御主（Master）召唤出Assassin此等绝技。" },
      { label: "第 5 部分", description: "宝具是把时间持续的所有魔术，回归到被施行之前的状态的解咒短刀“万符必应破戒(Rule Breaker)”。某意义上，可以说是把她的人生具现了出来的宝具。" }
    ],
    themeAnalysis: "美狄亚是在游戏及改编动画作品《Fate》中登场的虚拟人物，是第五次圣杯战争中“Caster”职阶的Servant，优秀的神代魔术师。美狄亚真身是希腊神话中不幸的科尔基斯公主，英雄伊阿宋的原配妻子。在神话中，她被伊阿宋背叛抛弃，因愤怒而杀死了伊阿宋的新妻子和孩子，最终成为人们口中的 “背叛魔女”。在《Fate》系列中，因弑杀原御主而濒临灵基消散时，被葛木宗一郎所救，并成为他的Servant。虽然性格扭曲，不过只要决定了，就会为那个男人贡献到底的她，正将感情灌注于宗一郎一个人身上。\n美狄亚是在游戏及改编动画作品《Fate》中登场的虚拟人物，是第五次圣杯战争中“Caster”职阶的Servant，优秀的神代魔术师。\n\n美狄亚真身是希腊神话中不幸的科尔基斯公主，英雄伊阿宋的原配妻子。在神话中，她被伊阿宋背叛抛弃，因愤怒而杀死了伊阿宋的新妻子和孩子，最终成为人们口中的 “背叛魔女”。在《Fate》系列中，因弑杀原御主而濒临灵基消散时，被葛木宗一郎所救，并成为他的Servant。虽然性格扭曲，不过只要决定了，就会为那个男人贡献到底的她，正将感情灌注于宗一郎一个人身上。",
    techniques: "美狄亚是在游戏及改编动画作品《Fate》中登场的虚拟人物，是第五次圣杯战争中“Caster”职阶的Servant，优秀的神代魔术师。美狄亚真身是希腊神话中不幸的科尔基斯公主，英雄伊阿宋的原配妻子。在神话中，她被伊阿宋背叛抛弃，因愤怒而杀死了伊阿宋的新妻子和孩子，最终成为人们口中的 “背叛魔女”。在《Fate》系列中，因弑杀原御主而濒临灵基消散时，被葛木宗一郎所救，并成为他的Servant。虽然性格扭曲，不过只要决定了，就会为那个男人贡献到底的她，正将感情灌注于宗一郎一个人身上。\n美狄亚是在游戏及改编动画作品《Fate》中登场的虚拟人物，是第五次圣杯战争中“Caster”职阶的Servant，优秀的神代魔术师。\n\n美狄亚真身是希腊神话中不幸的科尔基斯公主，英雄伊阿宋的原配妻子。在神话中，她被伊阿宋背叛抛弃，因愤怒而杀死了伊阿宋的新妻子和孩子，最终成为人们口中的 “背叛魔女”。",
    excerpts: [
      { quote: "万符必应破戒(Rule Breaker)", context: "来源：Medea" }
    ],
    insights: "美狄亚是在游戏及改编动画作品《Fate》中登场的虚拟人物，是第五次圣杯战争中“Caster”职阶的Servant，优秀的神代魔术师。美狄亚真身是希腊神话中不幸的科尔基斯公主，英雄伊阿宋的原配妻子。在神话中，她被伊阿宋背叛抛弃，因愤怒而杀死了伊阿宋的新妻子和孩子，最终成为人们口中的 “背叛魔女”。在《Fate》系列中，因弑杀原御主而濒临灵基消散时，被葛木宗一郎所救，并成为他的Servant。虽然性格扭曲，不过只要决定了，就会为那个男人贡献到底的她，正将感情灌注于宗一郎一个人身上。\n美狄亚是在游戏及改编动画作品《Fate》中登场的虚拟人物，是第五次圣杯战争中“Caster”职阶的Servant，优秀的神代魔术师。\n\n美狄亚真身是希腊神话中不幸的科尔基斯公主，英雄伊阿宋的原配妻子。在神话中，她被伊阿宋背叛抛弃，因愤怒而杀死了伊阿宋的新妻子和孩子，最终成为人们口中的 “背叛魔女”。",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E7%BE%8E%E7%8B%84%E4%BA%9A", tier: "reference", fetchedAt: "2026-05-21T04:31:04.598Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
        { label: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/35451", tier: "original_text", fetchedAt: "2026-05-21T04:31:24.566Z", contributedFields: ["insights"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=Medea%20Euripides" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=Medea%20Euripides" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=Medea" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=Medea" },
      ],
    },
  },

  "aeneid": {
    id: "aeneid",
    characters: [
      { name: "The Aeneid", role: "角色", description: "Aeneid 中的主要角色。" }
    ],
    plotSummary: "《埃涅阿斯纪》（The Aeneid）是古罗马作家普布留斯·维吉留斯·马罗（通称维吉尔）创作的一部史诗，创作于公元前30年—公元前19年，又译作《伊尼德》。《埃涅阿斯纪》取材于古罗马神话传说，是叙述埃涅阿斯建立拉维尼乌姆城的故事。全诗12卷，共9896行诗句。按故事说，可以分为前后两部分，各6卷，前半部分仿《奥德赛》，写埃涅阿斯的流浪；后半部分仿《伊利亚特》，写埃涅阿斯与图尔努斯的战争。也可以分成三部分，各4卷，第一部以特洛伊的陷落和狄多的悲剧为中心；第二部分是过渡，写埃涅阿斯到达意大利，结盟，准备战争；第三部分写战争。全诗在写作上完全模仿荷马的两部史诗，很多情节结构雷同，但独具一种严肃哀婉的风格，而且结构严谨，故事性强，人物刻画细腻并着重心理描写，语言规范，用六步诗行写成，大量采用比喻，语言形象生动，塑造了一个诗人理想的政治领袖的典型。《埃涅阿斯纪》是“文人史诗”的开端，它使古代史诗创作\n《埃涅阿斯纪》（The Aeneid）是古罗马作家普布留斯·维吉留斯·马罗（通称维吉尔）创作的一部史诗，创作于公元前30年—公元前19年，又译作《伊尼德》。 [1-2]\n\n《埃涅阿斯纪》取材于古罗马神话传说，是叙述埃涅阿斯建立拉维尼乌姆城的故事 [8]。全诗12卷，共9896行诗句。 [1]按故事说，可以分为前后两部分，各6卷，前半部分仿《奥德赛》，写埃涅阿斯的流浪；后半部分仿《伊利亚特》，写埃涅阿斯与图尔努斯的战争。也可以分成三部分，各4卷，第一部以特洛伊的陷落和狄多的悲剧为中心；第二部分是过渡，写埃涅阿斯到达意大利，结盟，准备战争；第三部分写战争。 [2]全诗在写作上完全模仿荷马的两部史诗，很多情节结构雷同，但独具一种严肃哀婉的风格，而且结构严谨，故事性强，人物刻画细腻并着重心理描写，语言规范，用六步诗行写成，大量采用比喻，语言形象生动，塑造了一个诗人理想的政治领袖的典型。 [1]\n\n《埃涅阿斯纪》是“文人史诗”的开端，它使古代史诗创作在结构、人物、诗歌格律等方面都进一步定型，对后世欧洲史诗体裁产生了很大影响，作家塔索、弥尔顿等都以其为范本。 [1]\n\n《埃涅阿斯纪》共12卷，故事按史诗的规格要求，从中间开始（in medias res），而不从开天辟地（ab ovo）说起。史诗一开始，特洛伊人已经过七年海上漂泊，正离开西西里往北向意大利进发。但尤诺同他们作对，命令风神刮起大",
    plotNodes: [
      { label: "Part 1", description: "《埃涅阿斯纪》（The Aeneid）是古罗马作家普布留斯·维吉留斯·马罗（通称维吉尔）创作的一部史诗，创作于公元前30年—公元前19年，又译作《伊尼德》。《埃涅阿斯纪》取材于古罗马神话传说，是叙述埃涅阿斯建立拉维尼乌姆城的故事。全诗12卷，共9896行诗句。按故事说，可以分为前后两部分，各6卷，前半部分仿《奥德赛》，写埃涅阿斯的流浪；后半部分仿《伊利亚特》，写埃涅阿斯与图尔努斯的战争。也可以分成" },
      { label: "Part 2", description: "《埃涅阿斯纪》取材于古罗马神话传说，是叙述埃涅阿斯建立拉维尼乌姆城的故事 [8]。全诗12卷，共9896行诗句。" },
      { label: "Part 3", description: "《埃涅阿斯纪》是“文人史诗”的开端，它使古代史诗创作在结构、人物、诗歌格律等方面都进一步定型，对后世欧洲史诗体裁产生了很大影响，作家塔索、弥尔顿等都以其为范本。" },
      { label: "Part 4", description: "《埃涅阿斯纪》共12卷，故事按史诗的规格要求，从中间开始（in medias res），而不从开天辟地（ab ovo）说起。史诗一开始，特洛伊人已经过七年海上漂泊，正离开西西里往北向意大利进发。但尤诺同他们作对，命令风神刮起大" }
    ],
    themeAnalysis: "",
    techniques: "",
    excerpts: [],
    insights: "《埃涅阿斯纪》（The Aeneid）是古罗马作家普布留斯·维吉留斯·马罗（通称维吉尔）创作的一部史诗，创作于公元前30年—公元前19年，又译作《伊尼德》。《埃涅阿斯纪》取材于古罗马神话传说，是叙述埃涅阿斯建立拉维尼乌姆城的故事。全诗12卷，共9896行诗句。按故事说，可以分为前后两部分，各6卷，前半部分仿《奥德赛》，写埃涅阿斯的流浪；后半部分仿《伊利亚特》，写埃涅阿斯与图尔努斯的战争。也可以分成三部分，各4卷，第一部以特洛伊的陷落和狄多的悲剧为中心；第二部分是过渡，写埃涅阿斯到达意大利，结盟，准备战争；第三部分写战争。全诗在写作上完全模仿荷马的两部史诗，很多情节结构雷同，但独具一种严肃哀婉的风格，而且结构严谨，故事性强，人物刻画细腻并着重心理描写，语言规范，用六步诗行写成，大量采用比喻，语言形象生动，塑造了一个诗人理想的政治领袖的典型。《埃涅阿斯纪》是“文人史诗”的开端，它使古代史诗创作\n《埃涅阿斯纪》（The Aeneid）是古罗马作家普布留斯·维吉留斯·马罗（通称维吉尔）创作的一部史诗，创作于公元前30年—公元前19年，又译作《伊尼德》。 [1-2]\n\n《埃涅阿斯纪》取材于古罗马神话传说，是叙述埃涅阿斯建立拉维尼乌姆城的故事 [8]。全诗12卷，共9896行诗句。 [1]按故事说，可以分为前后两部分，各6卷，前半部分仿《奥德赛》，写埃涅阿斯的流浪；后半部分仿《伊利亚特》，写埃",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%9F%83%E6%B6%85%E9%98%BF%E6%96%AF%E7%BA%AA", tier: "reference", fetchedAt: "2026-05-21T04:27:17.142Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "metamorphoses": {
    id: "metamorphoses",
    plotSummary: "《变形记》是奥地利作家弗兰兹·卡夫卡创作的中篇小说。《变形记》完成于1912年，1915年首次发表在月刊《白色书刊》10 月号上。《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献时，家人一反之前对他的尊敬态度，逐渐显现出冷漠、嫌弃、憎恶的面孔。父亲恶狠狠地用苹果打他，母亲吓得晕倒，妹妹厌弃他。渐渐地，萨姆沙远离了社会，最后孤独痛苦地在饥饿中默默地死去。卡夫卡以自己独特的艺术笔调，用象征、细节描写等手法对“人变成甲虫事件”进行艺术再造，使作品呈现出荒诞、不可思议的基调。《变形记》反映了20世纪初刚进入工业化时代的人们对生活和命运的焦虑与恐惧，其中承载着卡夫卡对于“孤独”与“异化”的深刻思\n《变形记》是奥地利作家弗兰兹·卡夫卡创作的中篇小说。《变形记》完成于1912年，1915年首次发表在月刊《白色书刊》10 月号上。 [1]\n\n《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献时，家人一反之前对他的尊敬态度，逐渐显现出冷漠、嫌弃、憎恶的面孔。父亲恶狠狠地用苹果打他，母亲吓得晕倒，妹妹厌弃他。渐渐地，萨姆沙远离了社会，最后孤独痛苦地在饥饿中默默地死去。\n\n卡夫卡以自己独特的艺术笔调，用象征、细节描写等手法对“人变成甲虫事件”进行艺术再造，使作品呈现出荒诞、不可思议的基调。《变形记》反映了20世纪初刚进入工业化时代的人们对生活和命运的焦虑与恐惧，其中承载着卡夫卡对于“孤独”与“异化”的深刻思考。 [23]小说以主人公变为甲虫这一荒诞故事反映了世人唯利是图、对金钱顶礼膜拜、对真情人性不屑一顾，最终被社会挤压变形的现实，反映了资本主义制度下真实的社会生活。 [2]\n\n卡夫卡生活于第一次世界大战前后动荡不安、物质主义盛行的年代， [5]他一生中绝大部分时间生活在捷克共和国的首都布拉格，而当时的布拉格正处在激烈的民族冲突与动荡中，“社会主义、犹太主义、德国民族主义、玩世不恭",
    plotNodes: [
      { label: "Part 1", description: "《变形记》是奥地利作家弗兰兹·卡夫卡创作的中篇小说。《变形记》完成于1912年，1915年首次发表在月刊《白色书刊》10 月号上。《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献时，家人一反之" },
      { label: "Part 2", description: "《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献时，家人一反之前对他的尊敬态度，逐渐显现出冷漠、嫌弃、憎恶的面孔。父亲恶狠狠地用苹果打他，母亲吓得晕倒，妹妹厌弃他。渐渐地，萨姆沙远离了社会，最" },
      { label: "Part 3", description: "卡夫卡以自己独特的艺术笔调，用象征、细节描写等手法对“人变成甲虫事件”进行艺术再造，使作品呈现出荒诞、不可思议的基调。《变形记》反映了20世纪初刚进入工业化时代的人们对生活和命运的焦虑与恐惧，其中承载着卡夫卡对于“孤独”与“异化”的深刻思考。" },
      { label: "Part 4", description: "卡夫卡生活于第一次世界大战前后动荡不安、物质主义盛行的年代， [5]他一生中绝大部分时间生活在捷克共和国的首都布拉格，而当时的布拉格正处在激烈的民族冲突与动荡中，“社会主义、犹太主义、德国民族主义、玩世不恭" }
    ],
    themeAnalysis: "《变形记》是奥地利作家弗兰兹·卡夫卡创作的中篇小说。《变形记》完成于1912年，1915年首次发表在月刊《白色书刊》10 月号上。《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献时，家人一反之前对他的尊敬态度，逐渐显现出冷漠、嫌弃、憎恶的面孔。父亲恶狠狠地用苹果打他，母亲吓得晕倒，妹妹厌弃他。渐渐地，萨姆沙远离了社会，最后孤独痛苦地在饥饿中默默地死去。卡夫卡以自己独特的艺术笔调，用象征、细节描写等手法对“人变成甲虫事件”进行艺术再造，使作品呈现出荒诞、不可思议的基调。《变形记》反映了20世纪初刚进入工业化时代的人们对生活和命运的焦虑与恐惧，其中承载着卡夫卡对于“孤独”与“异化”的深刻思\n《变形记》是奥地利作家弗兰兹·卡夫卡创作的中篇小说。《变形记》完成于1912年，1915年首次发表在月刊《白色书刊》10 月号上。 [1]\n\n《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献时，家人一反之前对他的尊敬态度，逐渐显现出冷漠、嫌弃、憎恶的面孔。父亲恶狠狠地用苹果打他，母亲吓得晕倒，妹妹厌弃他。渐渐地，萨姆沙远离了社会，最后孤独痛苦地在饥饿中默默地死去。\n\n卡夫卡以自己独特的艺术笔调，用象征、细节描写等手法对“人变成甲虫事件”进行艺术再造，使作品呈现出荒诞、不可思议的基调。《变形记》反映了20世纪初刚进入工业化时代的人们对生活和命运的焦虑与恐惧，其中承载着卡夫卡对于“孤独”",
    techniques: "",
    excerpts: [],
    insights: "《变形记》是奥地利作家弗兰兹·卡夫卡创作的中篇小说。《变形记》完成于1912年，1915年首次发表在月刊《白色书刊》10 月号上。《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献时，家人一反之前对他的尊敬态度，逐渐显现出冷漠、嫌弃、憎恶的面孔。父亲恶狠狠地用苹果打他，母亲吓得晕倒，妹妹厌弃他。渐渐地，萨姆沙远离了社会，最后孤独痛苦地在饥饿中默默地死去。卡夫卡以自己独特的艺术笔调，用象征、细节描写等手法对“人变成甲虫事件”进行艺术再造，使作品呈现出荒诞、不可思议的基调。《变形记》反映了20世纪初刚进入工业化时代的人们对生活和命运的焦虑与恐惧，其中承载着卡夫卡对于“孤独”与“异化”的深刻思\n《变形记》是奥地利作家弗兰兹·卡夫卡创作的中篇小说。《变形记》完成于1912年，1915年首次发表在月刊《白色书刊》10 月号上。 [1]\n\n《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%8F%98%E5%BD%A2%E8%AE%B0", tier: "reference", fetchedAt: "2026-05-21T04:28:21.526Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  // ==================== 欧洲 — 意大利 ====================

  "divine-comedy": {
    id: "divine-comedy",
    characters: [
      { name: "但丁", role: "主人公/叙述者", description: "既是作者也是旅者——在'人生旅途的中途'迷失在黑暗森林中，随后在维吉尔和贝雅特丽齐的引导下游历了地狱、炼狱和天堂三界。他的旅程是人类灵魂寻求救赎的最伟大文学寓言。" },
      { name: "维吉尔", role: "引导者（地狱/炼狱）", description: "古罗马诗人、《埃涅阿斯纪》的作者。作为'理性'的化身，他引导但丁穿越地狱和炼狱——但他不能进入天堂，因为他在基督降生前就已离世，因此缺乏信仰。" },
      { name: "贝雅特丽齐", role: "引导者（天堂）/缪斯", description: "但丁一生挚爱的女性，在九岁时第一次见到她便一见倾心。她在天堂接替维吉尔成为但丁的向导——因为她代表了超越理性的'信仰'与'神恩'。" },
    ],
    plotSummary: "在人生旅程的中途，但丁发现自己迷失在了一座黑暗的森林中。古罗马诗人维吉尔的灵魂受但丁已故的恋人贝雅特丽齐之托前来引导他。他们首先穿越地狱——一个漏斗形的深渊，罪人在此接受与他们罪行相符的永恒惩罚。然后攀登炼狱山——一个七层的梯级体系，灵魂在此通过悔改和净化逐步上升。最后，在贝雅特丽齐的引导下，但丁进入了天堂——九重天球，最终在最高天中，他获得了对上帝面容的直接凝视。但丁在那一刻体验到了一种无法用语言描述的至福——他的个人愿望与宇宙的神圣意志完全合一。",
    plotNodes: [
      { label: "黑暗的森林", description: "在人生旅程的中途，但丁迷失在一座黑暗的森林中。三只野兽挡住了他的去路——维吉尔奉命出现引路" },
      { label: "地狱之门", description: "你们走进此门的人，放弃一切希望吧。但丁和维吉尔穿过地狱之门，开始下行" },
      { label: "地狱的各层", description: "但丁在维吉尔的带领下穿越地狱九层——从林勃到背叛者之坑，罪与罚的对应关系越来越精确" },
      { label: "炼狱山", description: "七层炼狱对应七宗罪——每一层的灵魂都在以不同的方式净化自己。在山顶，维吉尔消失——他不能进入天堂" },
      { label: "贝雅特丽齐登场", description: "贝雅特丽齐在神圣游行中降临。她严厉地责备了但丁的迷失——然后她成了他天堂之旅的向导" },
      { label: "至高的凝视", description: "在至高天，但丁获得了对上帝的直接凝视——是爱移动了太阳和其他的星辰。全部的旅程至此达到了它的终点和解答" }
    ],
    themeAnalysis: "《神曲》是人类历史上最宏大的精神旅程文学化。但丁的旅行不仅是虚构的情节——它是中世纪基督教世界观的百科全书式呈现。地狱、炼狱、天堂的三重结构对应了人类灵魂的三种可能状态：拒绝上帝（地狱）、走向上帝（炼狱）、与上帝合一（天堂）。但但丁的伟大在于他在这个严格的神学框架中注入了无限的人性：在地狱中他对弗兰切斯卡的同情、对尤利西斯追求知识的尊重、对乌格利诺吞食亲生骨肉的恐惧——这些回应常常超越了神学规定的正确情感。正是这种神学框架与人性反应之间的张力，使《神曲》超越了时代。",
    techniques: "但丁的技艺首先体现在他的韵律选择——三韵体（terza rima）ABA BCB CDC的形式使整部史诗在声音上形成了一条绵延不断的链。其次是他对空间和运动的想象力——地狱、炼狱和天堂的物理结构不仅是符号的承载，更是阅读体验的核心：地狱的日益狭窄和黑暗对应了道德境况的下降，天堂光的日益明亮对应了灵魂的上升。但丁将历史人物和当代人物混合放置——这种大胆的选择创造了宗教寓言与政治评论的双重维度。更重要的是，他选择用意大利俗语而非拉丁文写作——这在当时是革命性的，标志着欧洲各民族文学的开端。",
    excerpts: [
      { quote: "在人生旅程的中途，我发现自己置身于一座黑暗的森林中——因为直路已经迷失了。", context: "《神曲》的开篇——每一个人都可以在这些词中认出自己的存在处境。" },
      { quote: "是爱移动了太阳和其他的星辰。", context: "《神曲》的最后一行——整部史诗的终点：宇宙的终极动力不是力量而是爱。" }
    ],
    insights: "《神曲》是一部关于迷失与找回方向的诗。但丁从中途的黑暗森林出发——这个开篇意象如此强大，以至于它成为了所有关于中年危机的文学的原型。维吉尔代表了理性所能达到的最高高度（引导他穿过地狱和炼狱），但进入天堂需要信仰（贝雅特丽齐）。但丁的终极洞见是：理性和信仰不是对立的，而是相互接力的——理性走到它能力的极限，然后信仰接过去。",
  },

  "decameron": {
    id: "decameron",
    plotSummary: "《十日谈》是意大利作家乔万尼·薄伽丘创作的短篇小说集，创作于1350—1353年。该作讲述1348年，意大利佛罗伦萨瘟疫流行，10名男女在乡村一所别墅里避难。他们终日游玩欢宴，每人每天讲一个故事，共住了10天讲了百个故事，这些故事批判天主教会，嘲笑教会传授黑暗和罪恶，赞美爱情是才华和高尚情操的源泉，谴责禁欲主义，无情暴露和鞭挞封建贵族的堕落和腐败，体现了人文主义思想。《十日谈》是欧洲文学史上第一部现实主义巨著，世界上第一部短篇小说集；意大利近代评论家桑克提斯曾把《十日谈》与但丁的《神曲》并列，称之为“人曲”。\n《十日谈》是意大利作家乔万尼·薄伽丘创作的短篇小说集，创作于1350—1353年。 [1]\n\n该作讲述1348年，意大利佛罗伦萨瘟疫流行，10名男女在乡村一所别墅里避难。他们终日游玩欢宴，每人每天讲一个故事，共住了10天讲了百个故事，这些故事批判天主教会，嘲笑教会传授黑暗和罪恶，赞美爱情是才华和高尚情操的源泉，谴责禁欲主义，无情暴露和鞭挞封建贵族的堕落和腐败，体现了人文主义思想。\n\n《十日谈》是欧洲文学史上第一部现实主义巨著 [1]，世界上第一部短篇小说集；意大利近代评论家桑克提斯曾把《十日谈》与但丁的《神曲》并列，称之为“人曲”。\n\n故事第一 恰泼莱托在临终时编造了一篇忏悔，把神父骗得深信不疑，虽然他生前无恶不作，死后却被人当做圣徒，被尊为“圣恰泼莱托”。\n\n故事第二 一个叫做亚伯拉罕的犹太人，听了好友杨诺的话，来到罗马，目睹教会的腐败生活，他回到巴黎之后，却改奉了天主教。\n\n故事第三 犹太人麦启士德讲了一个三只戒指的故事，因而凭着机智，逃出了苏丹想要陷害他的圈套。\n\n故事第四 一个小修士犯了戒律，理应受到重罚，他却使用巧计，证明院长也犯了这个过失，因此逃过了责罚。\n\n故事第五 蒙费拉特侯爵夫人用母鸡做酒菜，再配上几句俏皮话，打消了法兰西国王对她所起的邪念。\n\n故事第六 一个正直的人用一句尖刻得体的话，把修士的虚伪嘲笑得体无完肤。\n\n故事第七 贝加密诺讲述一个“泼里马索和克伦尼院长”的故事，借题讽刺了一个贵族近来的吝啬作风。\n\n故事第八 行吟诗人波西厄尔用一句锋利的话，讥刺了一个守财奴的性格，促使他悔悟过来。\n\n故事第九 塞浦路斯岛的国王昏庸无能，受了一位太太的讽刺，从此变得英明有为。\n\n故事第十 亚尔培多大爷单恋着一个俏丽的寡妇，寡妇想取笑他，结果反而被他",
    plotNodes: [
      { label: "Part 1", description: "《十日谈》是意大利作家乔万尼·薄伽丘创作的短篇小说集，创作于1350—1353年。该作讲述1348年，意大利佛罗伦萨瘟疫流行，10名男女在乡村一所别墅里避难。他们终日游玩欢宴，每人每天讲一个故事，共住了10天讲了百个故事，这些故事批判天主教会，嘲笑教会传授黑暗和罪恶，赞美爱情是才华和高尚情操的源泉，谴责禁欲主义，无情暴露和鞭挞封建贵族的堕落和腐败，体现了人文主义思想。《十日谈》是欧洲文学史上第一部" },
      { label: "Part 2", description: "该作讲述1348年，意大利佛罗伦萨瘟疫流行，10名男女在乡村一所别墅里避难。他们终日游玩欢宴，每人每天讲一个故事，共住了10天讲了百个故事，这些故事批判天主教会，嘲笑教会传授黑暗和罪恶，赞美爱情是才华和高尚情操的源泉，谴责禁欲主义，无情暴露和鞭挞封建贵族的堕落和腐败，体现了人文主义思想。" },
      { label: "Part 3", description: "《十日谈》是欧洲文学史上第一部现实主义巨著 [1]，世界上第一部短篇小说集；意大利近代评论家桑克提斯曾把《十日谈》与但丁的《神曲》并列，称之为“人曲”。" },
      { label: "Part 4", description: "故事第一 恰泼莱托在临终时编造了一篇忏悔，把神父骗得深信不疑，虽然他生前无恶不作，死后却被人当做圣徒，被尊为“圣恰泼莱托”。" },
      { label: "Part 5", description: "故事第二 一个叫做亚伯拉罕的犹太人，听了好友杨诺的话，来到罗马，目睹教会的腐败生活，他回到巴黎之后，却改奉了天主教。" },
      { label: "Part 6", description: "故事第三 犹太人麦启士德讲了一个三只戒指的故事，因而凭着机智，逃出了苏丹想要陷害他的圈套。" },
      { label: "Part 7", description: "故事第四 一个小修士犯了戒律，理应受到重罚，他却使用巧计，证明院长也犯了这个过失，因此逃过了责罚。" },
      { label: "Part 8", description: "故事第五 蒙费拉特侯爵夫人用母鸡做酒菜，再配上几句俏皮话，打消了法兰西国王对她所起的邪念。" }
    ],
    themeAnalysis: "",
    techniques: "",
    excerpts: [],
    insights: "《十日谈》是意大利作家乔万尼·薄伽丘创作的短篇小说集，创作于1350—1353年。该作讲述1348年，意大利佛罗伦萨瘟疫流行，10名男女在乡村一所别墅里避难。他们终日游玩欢宴，每人每天讲一个故事，共住了10天讲了百个故事，这些故事批判天主教会，嘲笑教会传授黑暗和罪恶，赞美爱情是才华和高尚情操的源泉，谴责禁欲主义，无情暴露和鞭挞封建贵族的堕落和腐败，体现了人文主义思想。《十日谈》是欧洲文学史上第一部现实主义巨著，世界上第一部短篇小说集；意大利近代评论家桑克提斯曾把《十日谈》与但丁的《神曲》并列，称之为“人曲”。\n《十日谈》是意大利作家乔万尼·薄伽丘创作的短篇小说集，创作于1350—1353年。 [1]\n\n该作讲述1348年，意大利佛罗伦萨瘟疫流行，10名男女在乡村一所别墅里避难。他们终日游玩欢宴，每人每天讲一个故事，共住了10天讲了百个故事，这些故事批判天主教会，嘲笑教会传授黑暗和罪恶，赞美爱情是才华和高尚情操的源泉，谴责禁欲主义，无情暴露和鞭挞封建贵族的堕落和腐败，体现了人文主义思想。\n\n《十日谈》是欧洲文学史上第一部现实主义巨著 [1]，世界上第一部短篇小说集；意大利近代评论家桑克提斯曾把《十日谈》与但丁的《神曲》并列，称之为“人曲”。\n\n故事第一 恰泼莱托在临终时编造了一篇忏悔，把神父骗得深信不疑，虽然他生前无恶不作，死后却被人当做圣徒，被尊为“圣恰泼莱托”。\n\n故事第二 一个",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%8D%81%E6%97%A5%E8%B0%88", tier: "reference", fetchedAt: "2026-05-21T04:33:52.374Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  // ==================== 欧洲 — 英国 ====================

  "king-lear": {
    id: "king-lear",
    characters: [
      { name: "King Lear", role: "角色", description: "King Lear 中的主要角色。" }
    ],
    plotSummary: "《李尔王》（King Lear）是威廉·莎士比亚于1605-1606年创作的戏剧，于1606年12月26日在英国王宫怀特大厅首演；剧本取材于英国的古代传说，是莎士比亚创作的四大悲剧之一。该剧讲述年事已高的不列颠国王李尔王决定将国土分给三个女儿，长女高纳里尔与次女里根用阿谀之词赢得父亲的宠信并分到国土，而小女考狄利娅因拒绝过度奉承被剥夺继承权并远嫁法国。得到国土的两个女儿很快显露出冷漠本性，将李尔驱逐出城。李尔在暴风雨中流浪荒野，饱尝苦难，陷入疯狂。磨难中他开始反思过往，逐渐认清是非善恶。考狄利娅得知父亲遭遇后率军前来救助，父女重逢，但法军战败，考狄利娅被俘遇害，李尔最终守着小女儿的遗体悲痛而亡。1607年11月26日，《李尔王》印刷版在书业公所登记，1608年首印于第一四开本出版，1623年收入第一对开本再版，17世纪该剧目的演出版本主要根据1608、1623年两个版本衍生。《李尔王》被誉\n《李尔王》（King Lear）是威廉·莎士比亚于1605-1606年创作的戏剧， [16]于1606年12月26日在英国王宫怀特大厅首演； [22-24]剧本取材于英国的古代传说，是莎士比亚创作的四大悲剧之一。 [3] [16] [21]\n\n该剧讲述年事已高的不列颠国王李尔王决定将国土分给三个女儿，长女高纳里尔与次女里根用阿谀之词赢得父亲的宠信并分到国土，而小女考狄利娅因拒绝过度奉承被剥夺继承权并远嫁法国。得到国土的两个女儿很快显露出冷漠本性，将李尔驱逐出城。李尔在暴风雨中流浪荒野，饱尝苦难，陷入疯狂。磨难中他开始反思过往，逐渐认清是非善恶。考狄利娅得知父亲遭遇后率军前来救助，父女重逢，但法军战败，考狄利娅被俘遇害，李尔最终守着小女儿的遗体悲痛而亡。 [1] [16]1607年11月26日，《李尔王》印刷版在书业公所登记，1608年首印于第一四开本出版，1623年收入第一对开本再版， [23-24] [25]17世纪该剧目的演出版本主要根据1608、1623年两个版本衍生。 [26]\n\n《李尔王》被誉为莎士比亚四大悲剧中最具艺术价值的作品，其通过描述王室家族的内乱和李尔王跌宕的命运，刻画权力、欲望下人性的撕裂与挣扎，在呈现出悲剧力量的同时饱含着对爱和恩典的呼唤与向往。2017年国家大剧院与北京李六乙戏剧工作室联合创排并首演该剧。 [17]2019年6月铃木忠志改编版的《李尔王》",
    plotNodes: [
      { label: "Part 1", description: "《李尔王》（King Lear）是威廉·莎士比亚于1605-1606年创作的戏剧，于1606年12月26日在英国王宫怀特大厅首演；剧本取材于英国的古代传说，是莎士比亚创作的四大悲剧之一。该剧讲述年事已高的不列颠国王李尔王决定将国土分给三个女儿，长女高纳里尔与次女里根用阿谀之词赢得父亲的宠信并分到国土，而小女考狄利娅因拒绝过度奉承被剥夺继承权并远嫁法国。得到国土的两个女儿很快显露出冷漠本性，将李尔驱" },
      { label: "Part 2", description: "该剧讲述年事已高的不列颠国王李尔王决定将国土分给三个女儿，长女高纳里尔与次女里根用阿谀之词赢得父亲的宠信并分到国土，而小女考狄利娅因拒绝过度奉承被剥夺继承权并远嫁法国。得到国土的两个女儿很快显露出冷漠本性，将李尔驱逐出城。李尔在暴风雨中流浪荒野，饱尝苦难，陷入疯狂。磨难中他开始反思过往，逐渐认清是非善恶。考狄利娅得知父亲遭遇后率军前来救助，父女重逢，但法军战败，考狄利娅被俘遇害，李尔最终守着小女儿" },
      { label: "Part 3", description: "《李尔王》被誉为莎士比亚四大悲剧中最具艺术价值的作品，其通过描述王室家族的内乱和李尔王跌宕的命运，刻画权力、欲望下人性的撕裂与挣扎，在呈现出悲剧力量的同时饱含着对爱和恩典的呼唤与向往。2017年国家大剧院与北京李六乙戏剧工作室联合创排并首演该剧。" }
    ],
    themeAnalysis: "",
    techniques: "",
    excerpts: [],
    insights: "《李尔王》（King Lear）是威廉·莎士比亚于1605-1606年创作的戏剧，于1606年12月26日在英国王宫怀特大厅首演；剧本取材于英国的古代传说，是莎士比亚创作的四大悲剧之一。该剧讲述年事已高的不列颠国王李尔王决定将国土分给三个女儿，长女高纳里尔与次女里根用阿谀之词赢得父亲的宠信并分到国土，而小女考狄利娅因拒绝过度奉承被剥夺继承权并远嫁法国。得到国土的两个女儿很快显露出冷漠本性，将李尔驱逐出城。李尔在暴风雨中流浪荒野，饱尝苦难，陷入疯狂。磨难中他开始反思过往，逐渐认清是非善恶。考狄利娅得知父亲遭遇后率军前来救助，父女重逢，但法军战败，考狄利娅被俘遇害，李尔最终守着小女儿的遗体悲痛而亡。1607年11月26日，《李尔王》印刷版在书业公所登记，1608年首印于第一四开本出版，1623年收入第一对开本再版，17世纪该剧目的演出版本主要根据1608、1623年两个版本衍生。《李尔王》被誉\n《李尔王》（King Lear）是威廉·莎士比亚于1605-1606年创作的戏剧， [16]于1606年12月26日在英国王宫怀特大厅首演； [22-24]剧本取材于英国的古代传说，是莎士比亚创作的四大悲剧之一。 [3] [16] [21]\n\n该剧讲述年事已高的不列颠国王李尔王决定将国土分给三个女儿，长女高纳里尔与次女里根用阿谀之词赢得父亲的宠信并分到国土，而小女考狄利娅因拒绝过度奉承被剥夺继承",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E6%9D%8E%E5%B0%94%E7%8E%8B", tier: "reference", fetchedAt: "2026-05-21T04:30:32.441Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "paradise-lost": {
    id: "paradise-lost",
    plotSummary: "《失乐园》是英国政治家、学者约翰·弥尔顿创作的史诗，发表于1667年。《失乐园》取材于《圣经·旧约·创世纪》，该作品长约1万行，分为12卷，讲述撒旦原是个天使，因纠合别的天使反对上帝，被打入地狱受苦。撒旦无力反攻天堂，便用间接办法报复，企图毁灭上帝创造的人类。他来到乐园，引诱亚当、夏娃吃了禁果，使人类失掉了乐园。该作品通过亚当、夏娃经受不住魔鬼的引诱，从而被逐出伊甸园的故事，以及撒旦叛逆的形象，暗示了当时英国资产阶级革命失败的原因，表达了作者革命的清教思想。该作品用无韵诗体写成。在地狱、混沌、人间等壮阔的背景下，构思宏伟，语言雄辩而充满激情。《失乐园》与荷马的《荷马史诗》、阿利盖利·但丁的《神曲》并称为西方三大诗歌。《失乐园》第一次在文学创作领域内把反面人物撒旦作为主人公来塑造，这不仅颠覆了文学创作中描绘正面形象的传统风格，而且还旗帜鲜明地融入了自身的社会理想、反抗思想，引起了广泛共鸣。\n《失乐园》是英国政治家、学者约翰·弥尔顿创作的史诗，发表于1667年。 [32]\n\n《失乐园》取材于《圣经·旧约·创世纪》 [33]，该作品长约1万行，分为12卷，讲述撒旦原是个天使，因纠合别的天使反对上帝，被打入地狱受苦。撒旦无力反攻天堂，便用间接办法报复，企图毁灭上帝创造的人类。他来到乐园，引诱亚当、夏娃吃了禁果，使人类失掉了乐园。 [28]该作品通过亚当、夏娃经受不住魔鬼的引诱，从而被逐出伊甸园的故事，以及撒旦叛逆的形象，暗示了当时英国资产阶级革命失败的原因，表达了作者革命的清教思想。该作品用无韵诗体写成。在地狱、混沌、人间等壮阔的背景下，构思宏伟，语言雄辩而充满激情。 [25]\n\n《失乐园》与荷马的《荷马史诗》、阿利盖利·但丁的《神曲》并称为西方三大诗歌。《失乐园》第一次在文学创作领域内把反面人物撒旦作为主人公来塑造，这不仅颠覆了文学创作中描绘正面形象的传统风格，而且还旗帜鲜明地融入了自身的社会理想、反抗思想，引起了广泛共鸣。 [17]\n\n弥尔顿生活的年代，正是欧洲文艺复兴的高峰期，文艺复兴提倡的人文精神已经得到广泛的传播和接受。反对神性，提倡人性，对教会乃至旧的封建制度的批判，也深深地影响了弥尔顿。同时，17世纪，新兴科学的兴起使人们看见了改造大自然的更大的可能性，人的自信心、进取心也前所未有的高扬起来。但英国统治阶级依然停留恪守于旧的封建统治模式，严重滞后于人民的要求。",
    plotNodes: [
      { label: "Part 1", description: "《失乐园》是英国政治家、学者约翰·弥尔顿创作的史诗，发表于1667年。《失乐园》取材于《圣经·旧约·创世纪》，该作品长约1万行，分为12卷，讲述撒旦原是个天使，因纠合别的天使反对上帝，被打入地狱受苦。撒旦无力反攻天堂，便用间接办法报复，企图毁灭上帝创造的人类。他来到乐园，引诱亚当、夏娃吃了禁果，使人类失掉了乐园。该作品通过亚当、夏娃经受不住魔鬼的引诱，从而被逐出伊甸园的故事，以及撒旦叛逆的形象，暗" },
      { label: "Part 2", description: "《失乐园》取材于《圣经·旧约·创世纪》 [33]，该作品长约1万行，分为12卷，讲述撒旦原是个天使，因纠合别的天使反对上帝，被打入地狱受苦。撒旦无力反攻天堂，便用间接办法报复，企图毁灭上帝创造的人类。他来到乐园，引诱亚当、夏娃吃了禁果，使人类失掉了乐园。" },
      { label: "Part 3", description: "《失乐园》与荷马的《荷马史诗》、阿利盖利·但丁的《神曲》并称为西方三大诗歌。《失乐园》第一次在文学创作领域内把反面人物撒旦作为主人公来塑造，这不仅颠覆了文学创作中描绘正面形象的传统风格，而且还旗帜鲜明地融入了自身的社会理想、反抗思想，引起了广泛共鸣。" },
      { label: "Part 4", description: "弥尔顿生活的年代，正是欧洲文艺复兴的高峰期，文艺复兴提倡的人文精神已经得到广泛的传播和接受。反对神性，提倡人性，对教会乃至旧的封建制度的批判，也深深地影响了弥尔顿。同时，17世纪，新兴科学的兴起使人们看见了改造大自然的更大的可能性，人的自信心、进取心也前所未有的高扬起来。但英国统治阶级依然停留恪守于旧的封建统治模式，严重滞后于人民的要求。" }
    ],
    themeAnalysis: "《失乐园》是英国政治家、学者约翰·弥尔顿创作的史诗，发表于1667年。《失乐园》取材于《圣经·旧约·创世纪》，该作品长约1万行，分为12卷，讲述撒旦原是个天使，因纠合别的天使反对上帝，被打入地狱受苦。撒旦无力反攻天堂，便用间接办法报复，企图毁灭上帝创造的人类。他来到乐园，引诱亚当、夏娃吃了禁果，使人类失掉了乐园。该作品通过亚当、夏娃经受不住魔鬼的引诱，从而被逐出伊甸园的故事，以及撒旦叛逆的形象，暗示了当时英国资产阶级革命失败的原因，表达了作者革命的清教思想。该作品用无韵诗体写成。在地狱、混沌、人间等壮阔的背景下，构思宏伟，语言雄辩而充满激情。《失乐园》与荷马的《荷马史诗》、阿利盖利·但丁的《神曲》并称为西方三大诗歌。《失乐园》第一次在文学创作领域内把反面人物撒旦作为主人公来塑造，这不仅颠覆了文学创作中描绘正面形象的传统风格，而且还旗帜鲜明地融入了自身的社会理想、反抗思想，引起了广泛共鸣。\n《失乐园》是英国政治家、学者约翰·弥尔顿创作的史诗，发表于1667年。 [32]\n\n《失乐园》取材于《圣经·旧约·创世纪》 [33]，该作品长约1万行，分为12卷，讲述撒旦原是个天使，因纠合别的天使反对上帝，被打入地狱受苦。撒旦无力反攻天堂，便用间接办法报复，企图毁灭上帝创造的人类。他来到乐园，引诱亚当、夏娃吃了禁果，使人类失掉了乐园。 [28]该作品通过亚当、夏娃经受不住魔鬼的引诱，从而被逐出伊甸园的故事，以及撒旦叛逆的形象，暗示了当时英国资产阶级革命失败的原因，表达了作者革命的清教思想。该作品用无韵诗体写成。在地狱、混沌、人间等壮阔的背景下，构思宏伟，语言雄辩而充满激情。 [25]\n\n《失乐园》与荷马的《荷马史诗》、阿利盖利·但丁的《神曲》并称为西方三大诗歌。《失乐园》第一次在文学创作领域内把反面人物撒旦作为主人公来塑造，这不仅颠覆了文学创作中描绘正面形象的传统风格，而且还旗帜鲜明地融",
    techniques: "",
    excerpts: [],
    insights: "《失乐园》是英国政治家、学者约翰·弥尔顿创作的史诗，发表于1667年。《失乐园》取材于《圣经·旧约·创世纪》，该作品长约1万行，分为12卷，讲述撒旦原是个天使，因纠合别的天使反对上帝，被打入地狱受苦。撒旦无力反攻天堂，便用间接办法报复，企图毁灭上帝创造的人类。他来到乐园，引诱亚当、夏娃吃了禁果，使人类失掉了乐园。该作品通过亚当、夏娃经受不住魔鬼的引诱，从而被逐出伊甸园的故事，以及撒旦叛逆的形象，暗示了当时英国资产阶级革命失败的原因，表达了作者革命的清教思想。该作品用无韵诗体写成。在地狱、混沌、人间等壮阔的背景下，构思宏伟，语言雄辩而充满激情。《失乐园》与荷马的《荷马史诗》、阿利盖利·但丁的《神曲》并称为西方三大诗歌。《失乐园》第一次在文学创作领域内把反面人物撒旦作为主人公来塑造，这不仅颠覆了文学创作中描绘正面形象的传统风格，而且还旗帜鲜明地融入了自身的社会理想、反抗思想，引起了广泛共鸣。\n《失乐园》是英国政治家、学者约翰·弥尔顿创作的史诗，发表于1667年。 [32]\n\n《失乐园》取材于《圣经·旧约·创世纪》 [33]，该作品长约1万行，分为12卷，讲述撒旦原是个天使，因纠合别的天使反对上帝，被打入地狱受苦。撒旦无力反攻天堂，便用间接办法报复，企图毁灭上帝创造的人类。他来到乐园，引诱亚当、夏娃吃了禁果，使人类失掉了乐园。 [28]该作品通过亚当、夏娃经受不住魔鬼的引诱，从而被逐出伊",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%A4%B1%E4%B9%90%E5%9B%AD", tier: "reference", fetchedAt: "2026-05-21T04:33:19.947Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "pride-and-prejudice": {
    id: "pride-and-prejudice",
    plotSummary: "《傲慢与偏见》（Pride &#38; Prejudice）是由焦点电影公司、法国映欧嘉纳影业、Mars Films等公司联合发行，焦点电影公司、美国环球影业等共同制作，乔·怀特执导，简·奥斯汀、黛博拉·莫盖茨、艾玛·汤普森编剧，凯拉·奈特利、马修·麦克费登、唐纳德·萨瑟兰等主演，于法国、英国、美国制片的爱情电影。该片根据简·奥斯汀的同名小说改编，讲述了、19世纪初期英国的乡绅之女伊丽莎白·贝内特五姐妹的爱情与择偶的故事。新来的邻居宾格来先生和他的朋友达西打破她们一家人单调的乡村生活。宾格来和伊丽莎白的姐姐简·班纳特互生情愫；达西对善良聪明的伊丽莎白产生了好感，而伊丽莎白却对达西不可一世的傲慢心存偏见，不接受他的感情。然而，宾格来和简·班纳特因误会关系陷入危机；达西的种种作为，展示性格中和伊丽莎白相同的善良一面，逐渐赢得伊丽莎白的好感。最后，一对曾因傲慢和偏见而延搁婚事的有情人终成眷属。该片于20\n《傲慢与偏见》（Pride & Prejudice）是由焦点电影公司、法国映欧嘉纳影业、Mars Films等公司联合发行，焦点电影公司、美国环球影业等共同制作，乔·怀特执导，简·奥斯汀、黛博拉·莫盖茨、艾玛·汤普森编剧，凯拉·奈特利、马修·麦克费登、唐纳德·萨瑟兰等主演，于法国、英国、美国制片的爱情电影。 [8] [19] [33]\n\n该片根据简·奥斯汀的同名小说改编， [9]讲述了、19世纪初期英国的乡绅之女伊丽莎白·贝内特五姐妹的爱情与择偶的故事。新来的邻居宾格来先生和他的朋友达西打破她们一家人单调的乡村生活。宾格来和伊丽莎白的姐姐简·班纳特互生情愫；达西对善良聪明的伊丽莎白产生了好感，而伊丽莎白却对达西不可一世的傲慢心存偏见，不接受他的感情。然而，宾格来和简·班纳特因误会关系陷入危机；达西的种种作为，展示性格中和伊丽莎白相同的善良一面，逐渐赢得伊丽莎白的好感。最后，一对曾因傲慢和偏见而延搁婚事的有情人终成眷属。 [1] [10]\n\n该片于2005年9月16日在英国上映。 [8] [19]2006年，该片获第63届美国电影电视金球奖“最佳影片”提名、 [25]获第19届欧洲电影奖“最佳影片”提名； [26]截至2025年12月，该片累计获得全球票房128581061美元。 [11] [32]\n\n小乡绅班纳特（唐纳德·萨瑟兰 饰）有五个待字闺中的千金，分别是伊丽莎白·",
    plotNodes: [
      { label: "Part 1", description: "《傲慢与偏见》（Pride &#38; Prejudice）是由焦点电影公司、法国映欧嘉纳影业、Mars Films等公司联合发行，焦点电影公司、美国环球影业等共同制作，乔·怀特执导，简·奥斯汀、黛博拉·莫盖茨、艾玛·汤普森编剧，凯拉·奈特利、马修·麦克费登、唐纳德·萨瑟兰等主演，于法国、英国、美国制片的爱情电影。该片根据简·奥斯汀的同名小说改编，讲述了、19世纪初期英国的乡绅之女伊丽莎白·贝内特" },
      { label: "Part 2", description: "该片根据简·奥斯汀的同名小说改编， [9]讲述了、19世纪初期英国的乡绅之女伊丽莎白·贝内特五姐妹的爱情与择偶的故事。新来的邻居宾格来先生和他的朋友达西打破她们一家人单调的乡村生活。宾格来和伊丽莎白的姐姐简·班纳特互生情愫；达西对善良聪明的伊丽莎白产生了好感，而伊丽莎白却对达西不可一世的傲慢心存偏见，不接受他的感情。然而，宾格来和简·班纳特因误会关系陷入危机；达西的种种作为，展示性格中和伊丽莎白相" },
      { label: "Part 3", description: "该片于2005年9月16日在英国上映。" }
    ],
    themeAnalysis: "《傲慢与偏见》（Pride &#38; Prejudice）是由焦点电影公司、法国映欧嘉纳影业、Mars Films等公司联合发行，焦点电影公司、美国环球影业等共同制作，乔·怀特执导，简·奥斯汀、黛博拉·莫盖茨、艾玛·汤普森编剧，凯拉·奈特利、马修·麦克费登、唐纳德·萨瑟兰等主演，于法国、英国、美国制片的爱情电影。该片根据简·奥斯汀的同名小说改编，讲述了、19世纪初期英国的乡绅之女伊丽莎白·贝内特五姐妹的爱情与择偶的故事。新来的邻居宾格来先生和他的朋友达西打破她们一家人单调的乡村生活。宾格来和伊丽莎白的姐姐简·班纳特互生情愫；达西对善良聪明的伊丽莎白产生了好感，而伊丽莎白却对达西不可一世的傲慢心存偏见，不接受他的感情。然而，宾格来和简·班纳特因误会关系陷入危机；达西的种种作为，展示性格中和伊丽莎白相同的善良一面，逐渐赢得伊丽莎白的好感。最后，一对曾因傲慢和偏见而延搁婚事的有情人终成眷属。该片于20\n《傲慢与偏见》（Pride & Prejudice）是由焦点电影公司、法国映欧嘉纳影业、Mars Films等公司联合发行，焦点电影公司、美国环球影业等共同制作，乔·怀特执导，简·奥斯汀、黛博拉·莫盖茨、艾玛·汤普森编剧，凯拉·奈特利、马修·麦克费登、唐纳德·萨瑟兰等主演，于法国、英国、美国制片的爱情电影。 [8] [19] [33]\n\n该片根据简·奥斯汀的同名小说改编， [9]讲述了、19世纪初期英国的乡绅之女伊丽莎白·贝内特五姐妹的爱情与择偶的故事。新来的邻居宾格来先生和他的朋友达西打破她们一家人单调的乡村生活。宾格来和伊丽莎白的姐姐简·班纳特互生情愫；达西对善良聪明的伊丽莎白产生了好感，而伊丽莎白却对达西不可一世的傲慢心存偏见，不接受他的感情。然而，宾格来和简·班纳特因误会关系陷入危机；达西的种种作为，展示性格中和伊丽莎白相同的善良一面，逐渐赢得伊丽莎白的好感。最后，一对曾",
    techniques: "",
    excerpts: [],
    insights: "《傲慢与偏见》（Pride &#38; Prejudice）是由焦点电影公司、法国映欧嘉纳影业、Mars Films等公司联合发行，焦点电影公司、美国环球影业等共同制作，乔·怀特执导，简·奥斯汀、黛博拉·莫盖茨、艾玛·汤普森编剧，凯拉·奈特利、马修·麦克费登、唐纳德·萨瑟兰等主演，于法国、英国、美国制片的爱情电影。该片根据简·奥斯汀的同名小说改编，讲述了、19世纪初期英国的乡绅之女伊丽莎白·贝内特五姐妹的爱情与择偶的故事。新来的邻居宾格来先生和他的朋友达西打破她们一家人单调的乡村生活。宾格来和伊丽莎白的姐姐简·班纳特互生情愫；达西对善良聪明的伊丽莎白产生了好感，而伊丽莎白却对达西不可一世的傲慢心存偏见，不接受他的感情。然而，宾格来和简·班纳特因误会关系陷入危机；达西的种种作为，展示性格中和伊丽莎白相同的善良一面，逐渐赢得伊丽莎白的好感。最后，一对曾因傲慢和偏见而延搁婚事的有情人终成眷属。该片于20\n《傲慢与偏见》（Pride & Prejudice）是由焦点电影公司、法国映欧嘉纳影业、Mars Films等公司联合发行，焦点电影公司、美国环球影业等共同制作，乔·怀特执导，简·奥斯汀、黛博拉·莫盖茨、艾玛·汤普森编剧，凯拉·奈特利、马修·麦克费登、唐纳德·萨瑟兰等主演，于法国、英国、美国制片的爱情电影。 [8] [19] [33]\n\n该片根据简·奥斯汀的同名小说改编， [9]讲述了、",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%82%B2%E6%85%A2%E4%B8%8E%E5%81%8F%E8%A7%81", tier: "reference", fetchedAt: "2026-05-21T04:27:49.263Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "wuthering-heights": {
    id: "wuthering-heights",
    plotSummary: "《呼啸山庄》是英国女作家艾米莉·勃朗特创作的长篇小说，首次出版于1847年。小说讲述吉普赛弃儿希斯克利夫与呼啸山庄主人的女儿凯瑟琳从小友爱，长大后产生爱情，但遭凯瑟琳之兄辛德雷百般折磨欺凌，凯瑟琳为了帮助希斯克利夫改善经济地位，另嫁地主少爷林顿。希斯克利夫愤而出走三年后发财归来，决心报复。他娶林顿之妹为妻，备加虐待。凯瑟琳去世后，他又引诱辛德雷赌博、挥霍，夺走其全部家产，并迫使林顿之女与自己的儿子结婚，将两处山庄收归己有。复仇之后，终在对凯瑟琳痛苦、疯狂的追思中孤独地离开人世。小说反映出19世纪资本主义生产关系下，人们的爱情婚姻和家庭观念的扭曲和嬗变。小说中的爱情故事自始至终贯穿着强烈的反压迫、争自由、争幸福的斗争，和当时现实社会、近在咫尺的工业区的阶级斗争相呼应。作者采用了富有浪漫主义的抒情方法，点染白然环境，挖掘内心世界，充满诗情画意。整个小说场景是一个封闭的小社会——两个孤立的山庄和\n《呼啸山庄》是英国女作家艾米莉·勃朗特创作的长篇小说，首次出版于1847年。 [6]\n\n小说讲述吉普赛弃儿希斯克利夫与呼啸山庄主人的女儿凯瑟琳从小友爱，长大后产生爱情，但遭凯瑟琳之兄辛德雷百般折磨欺凌，凯瑟琳为了帮助希斯克利夫改善经济地位，另嫁地主少爷林顿。希斯克利夫愤而出走三年后发财归来，决心报复。他娶林顿之妹为妻，备加虐待。凯瑟琳去世后，他又引诱辛德雷赌博、挥霍，夺走其全部家产，并迫使林顿之女与自己的儿子结婚，将两处山庄收归己有。复仇之后，终在对凯瑟琳痛苦、疯狂的追思中孤独地离开人世。 [19]小说反映出19世纪资本主义生产关系下，人们的爱情婚姻和家庭观念的扭曲和嬗变。小说中的爱情故事自始至终贯穿着强烈的反压迫、争自由、争幸福的斗争，和当时现实社会、近在咫尺的工业区的阶级斗争相呼应。 [12]作者采用了富有浪漫主义的抒情方法，点染白然环境，挖掘内心世界，充满诗情画意。整个小说场景是一个封闭的小社会——两个孤立的山庄和开放的大自然与荒原，书小人物身上体现出爱与恨两种极端，极度的爱中混杂着极度的恨，使小说在战栗中呈现出强烈的戏剧化色彩。 [17]\n\n《呼啸山庄》是作者唯一的一部长篇小说，该小说奠定了她在英国文学史乃至世界文学史上的地位。 [9]《呼啸山庄》被公认为世界名著，英国作家毛姆甚至把它奉为世界最杰出的十部小说之一，与《战争与和平》等并列 [7]。截至2026年，《呼啸山庄",
    plotNodes: [
      { label: "Part 1", description: "《呼啸山庄》是英国女作家艾米莉·勃朗特创作的长篇小说，首次出版于1847年。小说讲述吉普赛弃儿希斯克利夫与呼啸山庄主人的女儿凯瑟琳从小友爱，长大后产生爱情，但遭凯瑟琳之兄辛德雷百般折磨欺凌，凯瑟琳为了帮助希斯克利夫改善经济地位，另嫁地主少爷林顿。希斯克利夫愤而出走三年后发财归来，决心报复。他娶林顿之妹为妻，备加虐待。凯瑟琳去世后，他又引诱辛德雷赌博、挥霍，夺走其全部家产，并迫使林顿之女与自己的儿子" },
      { label: "Part 2", description: "小说讲述吉普赛弃儿希斯克利夫与呼啸山庄主人的女儿凯瑟琳从小友爱，长大后产生爱情，但遭凯瑟琳之兄辛德雷百般折磨欺凌，凯瑟琳为了帮助希斯克利夫改善经济地位，另嫁地主少爷林顿。希斯克利夫愤而出走三年后发财归来，决心报复。他娶林顿之妹为妻，备加虐待。凯瑟琳去世后，他又引诱辛德雷赌博、挥霍，夺走其全部家产，并迫使林顿之女与自己的儿子结婚，将两处山庄收归己有。复仇之后，终在对凯瑟琳痛苦、疯狂的追思中孤独地离开" },
      { label: "Part 3", description: "《呼啸山庄》是作者唯一的一部长篇小说，该小说奠定了她在英国文学史乃至世界文学史上的地位。" }
    ],
    themeAnalysis: "",
    techniques: "",
    excerpts: [],
    insights: "《呼啸山庄》是英国女作家艾米莉·勃朗特创作的长篇小说，首次出版于1847年。小说讲述吉普赛弃儿希斯克利夫与呼啸山庄主人的女儿凯瑟琳从小友爱，长大后产生爱情，但遭凯瑟琳之兄辛德雷百般折磨欺凌，凯瑟琳为了帮助希斯克利夫改善经济地位，另嫁地主少爷林顿。希斯克利夫愤而出走三年后发财归来，决心报复。他娶林顿之妹为妻，备加虐待。凯瑟琳去世后，他又引诱辛德雷赌博、挥霍，夺走其全部家产，并迫使林顿之女与自己的儿子结婚，将两处山庄收归己有。复仇之后，终在对凯瑟琳痛苦、疯狂的追思中孤独地离开人世。小说反映出19世纪资本主义生产关系下，人们的爱情婚姻和家庭观念的扭曲和嬗变。小说中的爱情故事自始至终贯穿着强烈的反压迫、争自由、争幸福的斗争，和当时现实社会、近在咫尺的工业区的阶级斗争相呼应。作者采用了富有浪漫主义的抒情方法，点染白然环境，挖掘内心世界，充满诗情画意。整个小说场景是一个封闭的小社会——两个孤立的山庄和\n《呼啸山庄》是英国女作家艾米莉·勃朗特创作的长篇小说，首次出版于1847年。 [6]\n\n小说讲述吉普赛弃儿希斯克利夫与呼啸山庄主人的女儿凯瑟琳从小友爱，长大后产生爱情，但遭凯瑟琳之兄辛德雷百般折磨欺凌，凯瑟琳为了帮助希斯克利夫改善经济地位，另嫁地主少爷林顿。希斯克利夫愤而出走三年后发财归来，决心报复。他娶林顿之妹为妻，备加虐待。凯瑟琳去世后，他又引诱辛德雷赌博、挥霍，夺走其全部家产，并迫使林顿之",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%91%BC%E5%95%B8%E5%B1%B1%E5%BA%84", tier: "reference", fetchedAt: "2026-05-21T04:29:59.755Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "great-expectations": {
    id: "great-expectations",
    plotSummary: "《远大前程》是由芒果影视、象山悟空影视、骋亚影视联合出品，陈思诚担任监制和总编剧，谢泽、陈熙泰执导，陈思诚、佟丽娅、袁弘、郭采洁、赵立新、倪大红、刘奕君等主演的年代传奇电视剧。该剧讲述了在上世纪20年代波云诡谲的大上海，一个无名小卒成长为大人物，最后他意识到远大前程的真正意义，走上革命道路，选择了为人民服务的中国共产党。该剧于2018年4月1日在湖南卫视金鹰独播剧场首播，并在腾讯视频、优酷网、爱奇艺、乐视视频、芒果TV同步播出，不仅屡次登上收视率第一，网络单日播放量也多次领跑电视剧榜，累计总播放量突破27亿。该剧荣获2018中美电视节十大金天使奖电视剧，入围第25届上海电视节白玉兰最佳美术奖。\n《远大前程》是由芒果影视、象山悟空影视、骋亚影视联合出品，陈思诚担任监制和总编剧，谢泽、陈熙泰执导，陈思诚、佟丽娅、袁弘、郭采洁、赵立新、倪大红、刘奕君等主演的年代传奇电视剧。",
    plotNodes: [
      { label: "第 1 部分", description: "《远大前程》是由芒果影视、象山悟空影视、骋亚影视联合出品，陈思诚担任监制和总编剧，谢泽、陈熙泰执导，陈思诚、佟丽娅、袁弘、郭采洁、赵立新、倪大红、刘奕君等主演的年代传奇电视剧。该剧讲述了在上世纪20年代波云诡谲的大上海，一个无名小卒成长为大人物，最后他意识到远大前程的真正意义，走上革命道路，选择了为人民服务的中国共产党。该剧于2018年4月1日在湖南卫视金鹰独播剧场首播，并在腾讯视频、优酷网、爱奇" },
      { label: "第 2 部分", description: "该剧讲述了在上世纪20年代波云诡谲的大上海，一个无名小卒成长为大人物，最后他意识到远大前程的真正意义，走上革命道路，选择了为人民服务的中国共产党。 [32]" },
      { label: "第 3 部分", description: "该剧于2018年4月1日在湖南卫视金鹰独播剧场首播，并在腾讯视频、优酷网、爱奇艺、乐视视频、芒果TV同步播出， [33]不仅屡次登上收视率第一，网络单日播放量也多次领跑电视剧榜，累计总播放量突破27亿 [39]。该剧荣获2018中美电视节十大金天使奖电视剧， [34]入围第25届上海电视节白玉兰最佳美术奖。 [35]" },
      { label: "第 4 部分", description: "洪三元（陈思诚饰）携母亲和好友齐林（袁弘饰）到上海投奔严华（富大龙饰），卷入两大公司权利斗争。严华此时是一名码头工人，他不畏强权被推举为工人领袖。洪三元则凭借机智多次在凶险的上海滩化险为夷。洪三元与忠义之士沈达结拜为兄，与来上海报父仇的林依依（佟丽娅饰）在斗智斗勇中成为莫逆，女扮男装的林依依爱上洪三元。" }
    ],
    themeAnalysis: "《远大前程》是由芒果影视、象山悟空影视、骋亚影视联合出品，陈思诚担任监制和总编剧，谢泽、陈熙泰执导，陈思诚、佟丽娅、袁弘、郭采洁、赵立新、倪大红、刘奕君等主演的年代传奇电视剧。该剧讲述了在上世纪20年代波云诡谲的大上海，一个无名小卒成长为大人物，最后他意识到远大前程的真正意义，走上革命道路，选择了为人民服务的中国共产党。该剧于2018年4月1日在湖南卫视金鹰独播剧场首播，并在腾讯视频、优酷网、爱奇艺、乐视视频、芒果TV同步播出，不仅屡次登上收视率第一，网络单日播放量也多次领跑电视剧榜，累计总播放量突破27亿。该剧荣获2018中美电视节十大金天使奖电视剧，入围第25届上海电视节白玉兰最佳美术奖。\n《远大前程》是由芒果影视、象山悟空影视、骋亚影视联合出品，陈思诚担任监制和总编剧，谢泽、陈熙泰执导，陈思诚、佟丽娅、袁弘、郭采洁、赵立新、倪大红、刘奕君等主演的年代传奇电视剧。 [32]\n\n该剧讲述了在上世纪20年代波云诡谲的大上海，一个无名小卒成长为大人物，最后他意识到远大前程的真正意义，走上革命道路，选择了为人民服务的中国共产党。",
    techniques: "《远大前程》是由芒果影视、象山悟空影视、骋亚影视联合出品，陈思诚担任监制和总编剧，谢泽、陈熙泰执导，陈思诚、佟丽娅、袁弘、郭采洁、赵立新、倪大红、刘奕君等主演的年代传奇电视剧。该剧讲述了在上世纪20年代波云诡谲的大上海，一个无名小卒成长为大人物，最后他意识到远大前程的真正意义，走上革命道路，选择了为人民服务的中国共产党。该剧于2018年4月1日在湖南卫视金鹰独播剧场首播，并在腾讯视频、优酷网、爱奇艺、乐视视频、芒果TV同步播出，不仅屡次登上收视率第一，网络单日播放量也多次领跑电视剧榜，累计总播放量突破27亿。该剧荣获2018中美电视节十大金天使奖电视剧，入围第25届上海电视节白玉兰最佳美术奖。\n《远大前程》是由芒果影视、象山悟空影视、骋亚影视联合出品，陈思诚担任监制和总编剧，谢泽、陈熙泰执导，陈思诚、佟丽娅、袁弘、郭采洁、赵立新、倪大红、刘奕君等主演的年代传奇电视剧。",
    excerpts: [],
    insights: "《远大前程》是由芒果影视、象山悟空影视、骋亚影视联合出品，陈思诚担任监制和总编剧，谢泽、陈熙泰执导，陈思诚、佟丽娅、袁弘、郭采洁、赵立新、倪大红、刘奕君等主演的年代传奇电视剧。该剧讲述了在上世纪20年代波云诡谲的大上海，一个无名小卒成长为大人物，最后他意识到远大前程的真正意义，走上革命道路，选择了为人民服务的中国共产党。该剧于2018年4月1日在湖南卫视金鹰独播剧场首播，并在腾讯视频、优酷网、爱奇艺、乐视视频、芒果TV同步播出，不仅屡次登上收视率第一，网络单日播放量也多次领跑电视剧榜，累计总播放量突破27亿。该剧荣获2018中美电视节十大金天使奖电视剧，入围第25届上海电视节白玉兰最佳美术奖。\n《远大前程》是由芒果影视、象山悟空影视、骋亚影视联合出品，陈思诚担任监制和总编剧，谢泽、陈熙泰执导，陈思诚、佟丽娅、袁弘、郭采洁、赵立新、倪大红、刘奕君等主演的年代传奇电视剧。",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E8%BF%9C%E5%A4%A7%E5%89%8D%E7%A8%8B", tier: "reference", fetchedAt: "2026-05-21T04:37:02.174Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
        { label: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1400", tier: "original_text", fetchedAt: "2026-05-21T04:37:20.730Z", contributedFields: ["insights"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=Great%20Expectations%20Charles%20Dickens" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=Great%20Expectations%20Charles%20Dickens" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=Great%20Expectations" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=Great%20Expectations" },
      ],
    },
  },

  "middlemarch": {
    id: "middlemarch",
    plotSummary: "《米德尔马契》是英国作家乔治·艾略特创作的长篇小说，首次出版于1872年。该书中有两条贯穿其中的主线：一为少女多萝西娅的婚姻悲剧与理想的破灭，一为青年医生利德盖特爱情与事业的双重挫折与失败。在这两大主线之中，作者运用了对比、平行以及重复等多种描写手法，从而将两条主线交织在一起，把书中的众多人物，如费瑟斯通、布尔斯特罗德、高思一家等男女主人公悲欢离合的人生写进小说，突出了“社会挫败人”这一大主题。\n《米德尔马契》是英国作家乔治·艾略特创作的长篇小说，首次出版于1872年。\n\n该书中有两条贯穿其中的主线：一为少女多萝西娅的婚姻悲剧与理想的破灭，一为青年医生利德盖特爱情与事业的双重挫折与失败。在这两大主线之中，作者运用了对比、平行以及重复等多种描写手法，从而将两条主线交织在一起，把书中的众多人物，如费瑟斯通、布尔斯特罗德、高思一家等男女主人公悲欢离合的人生写进小说，突出了“社会挫败人”这一大主题。 [9]\n\n故事主要发生在一个虚构的小城，即洛姆郡东北角的米德尔马契。文中有一男一女两位主人公：青年医生利德盖特和奉行理想主义信条的少女多萝西娅。两人原来对未来都有美好的期盼，但个人性格和周围环境却一再扼杀了他们的理想。利德盖特是个孤儿，长辈中有人有贵族头衔，但他主要依靠自己的力量生活。他在医学研究上下了不少功夫，在银行家布尔斯特洛德开办的医院里工作。市长的女儿罗莎蒙德空有漂亮的外表，但却思想浅薄、自私自利。利德盖特和她结婚后，自然成为婚姻的牺牲品。罗莎蒙德对物质生活要求很高，利德盖特的收入完全无法满足妻子的过分要求，医生从此被债务压得喘不过气来。银行家布尔斯特洛德早年私吞他人遗产的丑闻暴露后，为他在用不义之财办起来的慈善医院工作的利德盖特也脸上无光。在债台高筑和社会舆论的双重压力下，利德盖特只好听任妻子摆布，迁居伦敦，给有钱人看病，居然发了财。虽然在经济上摆脱了困境，利德盖特还是郁郁寡欢，因为他原来在医学上有一番建树的理想在平庸的生活中化为泡影，不到五十岁就带着满腹遗憾离开了人世。女主人公多萝西娅的人生道路也充满理想破灭的失望。当她还是个涉世未深的妙龄少女时，多萝西娅就渴望为一个伟大目标做出牺牲。她遇到卡苏朋，一心想把自己的青春奉献给他，帮他著书立说，青史留名。不料这个迂腐的学问家并不需要工作上的助手，他缺少的只是一个耐心的听众。结婚以后，多萝西娅终于明白卡苏朋是永远不可能有所",
    plotNodes: [
      { label: "Part 1", description: "《米德尔马契》是英国作家乔治·艾略特创作的长篇小说，首次出版于1872年。该书中有两条贯穿其中的主线：一为少女多萝西娅的婚姻悲剧与理想的破灭，一为青年医生利德盖特爱情与事业的双重挫折与失败。在这两大主线之中，作者运用了对比、平行以及重复等多种描写手法，从而将两条主线交织在一起，把书中的众多人物，如费瑟斯通、布尔斯特罗德、高思一家等男女主人公悲欢离合的人生写进小说，突出了“社会挫败人”这一大主题。" },
      { label: "Part 2", description: "该书中有两条贯穿其中的主线：一为少女多萝西娅的婚姻悲剧与理想的破灭，一为青年医生利德盖特爱情与事业的双重挫折与失败。在这两大主线之中，作者运用了对比、平行以及重复等多种描写手法，从而将两条主线交织在一起，把书中的众多人物，如费瑟斯通、布尔斯特罗德、高思一家等男女主人公悲欢离合的人生写进小说，突出了“社会挫败人”这一大主题。" },
      { label: "Part 3", description: "故事主要发生在一个虚构的小城，即洛姆郡东北角的米德尔马契。文中有一男一女两位主人公：青年医生利德盖特和奉行理想主义信条的少女多萝西娅。两人原来对未来都有美好的期盼，但个人性格和周围环境却一再扼杀了他们的理想。利德盖特是个孤儿，长辈中有人有贵族头衔，但他主要依靠自己的力量生活。他在医学研究上下了不少功夫，在银行家布尔斯特洛德开办的医院里工作。市长的女儿罗莎蒙德空有漂亮的外表，但却思想浅薄、自私自利。" }
    ],
    themeAnalysis: "《米德尔马契》是英国作家乔治·艾略特创作的长篇小说，首次出版于1872年。该书中有两条贯穿其中的主线：一为少女多萝西娅的婚姻悲剧与理想的破灭，一为青年医生利德盖特爱情与事业的双重挫折与失败。在这两大主线之中，作者运用了对比、平行以及重复等多种描写手法，从而将两条主线交织在一起，把书中的众多人物，如费瑟斯通、布尔斯特罗德、高思一家等男女主人公悲欢离合的人生写进小说，突出了“社会挫败人”这一大主题。\n《米德尔马契》是英国作家乔治·艾略特创作的长篇小说，首次出版于1872年。\n\n该书中有两条贯穿其中的主线：一为少女多萝西娅的婚姻悲剧与理想的破灭，一为青年医生利德盖特爱情与事业的双重挫折与失败。在这两大主线之中，作者运用了对比、平行以及重复等多种描写手法，从而将两条主线交织在一起，把书中的众多人物，如费瑟斯通、布尔斯特罗德、高思一家等男女主人公悲欢离合的人生写进小说，突出了“社会挫败人”这一大主题。 [9]\n\n故事主要发生在一个虚构的小城，即洛姆郡东北角的米德尔马契。文中有一男一女两位主人公：青年医生利德盖特和奉行理想主义信条的少女多萝西娅。两人原来对未来都有美好的期盼，但个人性格和周围环境却一再扼杀了他们的理想。利德盖特是个孤儿，长辈中有人有贵族头衔，但他主要依靠自己的力量生活。他在医学研究上下了不少功夫，在银行家布尔斯特洛德开办的医院里工作。市长的女儿罗莎蒙德空有漂亮的外表，但却思想浅薄、自私自利。利德盖特和她结婚后，自然成为婚姻的牺牲品。罗莎蒙德对物质生活要求很高，利德盖特的收入完全无法满足妻子的过分要求，医生从此被债务压得喘不过气来。银行家布尔斯特洛德早年私吞他人遗产的丑闻暴露后，为他在用不义之财办起来的慈善医院工作的利德盖特也脸上无光。在债台高筑和社会舆论的双重压力下，利德盖特只好听任妻子摆布，迁居伦敦，给有钱人看病，居然发了财。虽然在经济上摆脱了困境，利德盖特还是郁郁寡",
    techniques: "",
    excerpts: [],
    insights: "《米德尔马契》是英国作家乔治·艾略特创作的长篇小说，首次出版于1872年。该书中有两条贯穿其中的主线：一为少女多萝西娅的婚姻悲剧与理想的破灭，一为青年医生利德盖特爱情与事业的双重挫折与失败。在这两大主线之中，作者运用了对比、平行以及重复等多种描写手法，从而将两条主线交织在一起，把书中的众多人物，如费瑟斯通、布尔斯特罗德、高思一家等男女主人公悲欢离合的人生写进小说，突出了“社会挫败人”这一大主题。\n《米德尔马契》是英国作家乔治·艾略特创作的长篇小说，首次出版于1872年。\n\n该书中有两条贯穿其中的主线：一为少女多萝西娅的婚姻悲剧与理想的破灭，一为青年医生利德盖特爱情与事业的双重挫折与失败。在这两大主线之中，作者运用了对比、平行以及重复等多种描写手法，从而将两条主线交织在一起，把书中的众多人物，如费瑟斯通、布尔斯特罗德、高思一家等男女主人公悲欢离合的人生写进小说，突出了“社会挫败人”这一大主题。 [9]\n\n故事主要发生在一个虚构的小城，即洛姆郡东北角的米德尔马契。文中有一男一女两位主人公：青年医生利德盖特和奉行理想主义信条的少女多萝西娅。两人原来对未来都有美好的期盼，但个人性格和周围环境却一再扼杀了他们的理想。利德盖特是个孤儿，长辈中有人有贵族头衔，但他主要依靠自己的力量生活。他在医学研究上下了不少功夫，在银行家布尔斯特洛德开办的医院里工作。市长的女儿罗莎蒙德空有漂亮的外表，但却思想浅",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E7%B1%B3%E5%BE%B7%E5%B0%94%E9%A9%AC%E5%A5%91", tier: "reference", fetchedAt: "2026-05-21T04:31:57.192Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "1984": {
    id: "1984",
    plotSummary: "《一九八四》是英国左翼作家乔治·奥威尔创作的长篇政治小说，于1949年6月首次出版。该小说讲述世界被三个超级大国所瓜分——大洋国、欧亚国和东亚国。三个国家之间战争不断。主人公所处的大洋国实行高度的集权统治，在那里，人们一直处在政府的监听和监视下，不允许有自己的想法。政府机构则分为四个部门：真理部（负责文艺教育），和平部（负责战争），友爱部（维持法律和秩序），富裕部（负责经济事务）。男主人公温斯顿在真理部，每天从事的工作却是篡改历史，他逐渐对政府产生了怀疑，加入兄弟会成为思想犯。最后事情败露，被友爱部洗脑成为“思想纯洁者”，后被杀害。该小说中，奥威尔意识到了物质基础方面的差异让人们有了阶级划分，而且在艰苦的物质条件下，极权主义下的精神控制和不自由才是束缚人性的枷锁。该小说刻画了人类在极权主义社会的生存状态，有一个永不褪色的警示标签，警醒世人提防这种预想中的黑暗成为现实。该小说与英国作家阿道司\n《一九八四》是英国左翼作家乔治·奥威尔创作的长篇政治小说，于1949年6月首次出版。 [7]\n\n该小说讲述世界被三个超级大国所瓜分——大洋国、欧亚国和东亚国。三个国家之间战争不断。主人公所处的大洋国实行高度的集权统治，在那里，人们一直处在政府的监听和监视下，不允许有自己的想法。政府机构则分为四个部门：真理部（负责文艺教育），和平部（负责战争），友爱部（维持法律和秩序），富裕部（负责经济事务）。男主人公温斯顿在真理部，每天从事的工作却是篡改历史，他逐渐对政府产生了怀疑，加入兄弟会成为思想犯。最后事情败露，被友爱部洗脑成为“思想纯洁者”，后被杀害。该小说中，奥威尔意识到了物质基础方面的差异让人们有了阶级划分，而且在艰苦的物质条件下，极权主义下的精神控制和不自由才是束缚人性的枷锁。 [8]该小说刻画了人类在极权主义社会的生存状态，有一个永不褪色的警示标签，警醒世人提防这种预想中的黑暗成为现实。 [37]\n\n该小说与英国作家阿道司·赫胥黎创作的《美丽新世界》，以及俄国作家叶夫根尼·伊万诺维奇·扎米亚京创作的《我们》并称反乌托邦的三部代表作。 [10]该小说已经被翻译成60多种语言，总销量超过五千万册，曾被美国《时代周刊》杂志（2010年第1期）评为1923年至2010年最好的百本英文小说之一，位列兰登书屋20世纪百部最佳英语小说第13位。在英美等国，此书被列入中学生必读书书目。 [9]",
    plotNodes: [
      { label: "Part 1", description: "《一九八四》是英国左翼作家乔治·奥威尔创作的长篇政治小说，于1949年6月首次出版。该小说讲述世界被三个超级大国所瓜分——大洋国、欧亚国和东亚国。三个国家之间战争不断。主人公所处的大洋国实行高度的集权统治，在那里，人们一直处在政府的监听和监视下，不允许有自己的想法。政府机构则分为四个部门：真理部（负责文艺教育），和平部（负责战争），友爱部（维持法律和秩序），富裕部（负责经济事务）。男主人公温斯顿在" },
      { label: "Part 2", description: "该小说讲述世界被三个超级大国所瓜分——大洋国、欧亚国和东亚国。三个国家之间战争不断。主人公所处的大洋国实行高度的集权统治，在那里，人们一直处在政府的监听和监视下，不允许有自己的想法。政府机构则分为四个部门：真理部（负责文艺教育），和平部（负责战争），友爱部（维持法律和秩序），富裕部（负责经济事务）。男主人公温斯顿在真理部，每天从事的工作却是篡改历史，他逐渐对政府产生了怀疑，加入兄弟会成为思想犯。最" },
      { label: "Part 3", description: "该小说与英国作家阿道司·赫胥黎创作的《美丽新世界》，以及俄国作家叶夫根尼·伊万诺维奇·扎米亚京创作的《我们》并称反乌托邦的三部代表作。" }
    ],
    themeAnalysis: "《一九八四》是英国左翼作家乔治·奥威尔创作的长篇政治小说，于1949年6月首次出版。该小说讲述世界被三个超级大国所瓜分——大洋国、欧亚国和东亚国。三个国家之间战争不断。主人公所处的大洋国实行高度的集权统治，在那里，人们一直处在政府的监听和监视下，不允许有自己的想法。政府机构则分为四个部门：真理部（负责文艺教育），和平部（负责战争），友爱部（维持法律和秩序），富裕部（负责经济事务）。男主人公温斯顿在真理部，每天从事的工作却是篡改历史，他逐渐对政府产生了怀疑，加入兄弟会成为思想犯。最后事情败露，被友爱部洗脑成为“思想纯洁者”，后被杀害。该小说中，奥威尔意识到了物质基础方面的差异让人们有了阶级划分，而且在艰苦的物质条件下，极权主义下的精神控制和不自由才是束缚人性的枷锁。该小说刻画了人类在极权主义社会的生存状态，有一个永不褪色的警示标签，警醒世人提防这种预想中的黑暗成为现实。该小说与英国作家阿道司\n《一九八四》是英国左翼作家乔治·奥威尔创作的长篇政治小说，于1949年6月首次出版。 [7]\n\n该小说讲述世界被三个超级大国所瓜分——大洋国、欧亚国和东亚国。三个国家之间战争不断。主人公所处的大洋国实行高度的集权统治，在那里，人们一直处在政府的监听和监视下，不允许有自己的想法。政府机构则分为四个部门：真理部（负责文艺教育），和平部（负责战争），友爱部（维持法律和秩序），富裕部（负责经济事务）。男主人公温斯顿在真理部，每天从事的工作却是篡改历史，他逐渐对政府产生了怀疑，加入兄弟会成为思想犯。最后事情败露，被友爱部洗脑成为“思想纯洁者”，后被杀害。该小说中，奥威尔意识到了物质基础方面的差异让人们有了阶级划分，而且在艰苦的物质条件下，极权主义下的精神控制和不自由才是束缚人性的枷锁。 [8]该小说刻画了人类在极权主义社会的生存状态，有一个永不褪色的警示标签，警醒世人提防这种预想中的黑暗成为现实。",
    techniques: "",
    excerpts: [],
    insights: "《一九八四》是英国左翼作家乔治·奥威尔创作的长篇政治小说，于1949年6月首次出版。该小说讲述世界被三个超级大国所瓜分——大洋国、欧亚国和东亚国。三个国家之间战争不断。主人公所处的大洋国实行高度的集权统治，在那里，人们一直处在政府的监听和监视下，不允许有自己的想法。政府机构则分为四个部门：真理部（负责文艺教育），和平部（负责战争），友爱部（维持法律和秩序），富裕部（负责经济事务）。男主人公温斯顿在真理部，每天从事的工作却是篡改历史，他逐渐对政府产生了怀疑，加入兄弟会成为思想犯。最后事情败露，被友爱部洗脑成为“思想纯洁者”，后被杀害。该小说中，奥威尔意识到了物质基础方面的差异让人们有了阶级划分，而且在艰苦的物质条件下，极权主义下的精神控制和不自由才是束缚人性的枷锁。该小说刻画了人类在极权主义社会的生存状态，有一个永不褪色的警示标签，警醒世人提防这种预想中的黑暗成为现实。该小说与英国作家阿道司\n《一九八四》是英国左翼作家乔治·奥威尔创作的长篇政治小说，于1949年6月首次出版。 [7]\n\n该小说讲述世界被三个超级大国所瓜分——大洋国、欧亚国和东亚国。三个国家之间战争不断。主人公所处的大洋国实行高度的集权统治，在那里，人们一直处在政府的监听和监视下，不允许有自己的想法。政府机构则分为四个部门：真理部（负责文艺教育），和平部（负责战争），友爱部（维持法律和秩序），富裕部（负责经济事务）。男",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E4%B8%80%E4%B9%9D%E5%85%AB%E5%9B%9B", tier: "reference", fetchedAt: "2026-05-21T04:35:12.015Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "ulysses": {
    id: "ulysses",
    plotSummary: "《尤利西斯》是爱尔兰作家詹姆斯·乔伊斯创作的长篇小说，首次出版于1922年。该小说讲述的是青年诗人斯蒂芬寻找一个精神上象征性的父亲和布卢姆寻找一个儿子的故事。斯蒂芬已经有了一个生理上的父亲西蒙·迪达勒斯，但是斯蒂芬只把他当成肉体上的父亲，他认为自己有能力变得成熟，也可以成为一名父亲，然而，由于父亲西蒙·迪达勒斯的批评和缺乏理解并没有成功。因此斯蒂芬所寻找的父亲只能是一个象征性的父亲，这个父亲可以允许斯蒂芬自己也成为一名父亲。布卢姆寻找儿子从很大程度上讲则是因为他需要一个后代来巩固自己的身份和延续香火。由此可见，斯蒂芬和布卢姆两人都希望通过寻求为父之道来巩固他们各自的身份。乔伊斯通过描述一天内发生的单一事件向人们展示了一幅人类社会的缩影，通过对一个人一天日常生活和精神变化的细致刻画揭示了人类社会的悲与喜，英雄与懦夫的共存以及宏伟与沉闷的同现。《尤利西斯》作为意识流小说的代表作，被誉为20世纪\n《尤利西斯》是爱尔兰作家詹姆斯·乔伊斯创作的长篇小说，首次出版于1922年。\n\n该小说讲述的是青年诗人斯蒂芬寻找一个精神上象征性的父亲和布卢姆寻找一个儿子的故事。斯蒂芬已经有了一个生理上的父亲西蒙·迪达勒斯，但是斯蒂芬只把他当成肉体上的父亲，他认为自己有能力变得成熟，也可以成为一名父亲，然而，由于父亲西蒙·迪达勒斯的批评和缺乏理解并没有成功。因此斯蒂芬所寻找的父亲只能是一个象征性的父亲，这个父亲可以允许斯蒂芬自己也成为一名父亲。布卢姆寻找儿子从很大程度上讲则是因为他需要一个后代来巩固自己的身份和延续香火。由此可见，斯蒂芬和布卢姆两人都希望通过寻求为父之道来巩固他们各自的身份。\n\n乔伊斯通过描述一天内发生的单一事件向人们展示了一幅人类社会的缩影，通过对一个人一天日常生活和精神变化的细致刻画揭示了人类社会的悲与喜，英雄与懦夫的共存以及宏伟与沉闷的同现。 [1]\n\n《尤利西斯》作为意识流小说的代表作，被誉为20世纪百大英文小说之首，并被奉为20世纪最伟大的小说。\n\n1904年6月16日清晨，斯蒂芬上完了一节历史课后，从校长那儿得到了三英镑二先令的报酬，来到海边漫步，面对翻滚的海浪，他思绪万千，人世的沧桑、大自然的奥妙、时空的永恒、艺术的魅力在他的意识中开始了漫无边际的涌动。他因对母亲有过情欲的爱恋而觉得对不起父亲。他抱着负罪的感觉渴望在精神上重新得到一位父亲。同一日的早上八点钟，在埃克",
    plotNodes: [
      { label: "Part 1", description: "《尤利西斯》是爱尔兰作家詹姆斯·乔伊斯创作的长篇小说，首次出版于1922年。该小说讲述的是青年诗人斯蒂芬寻找一个精神上象征性的父亲和布卢姆寻找一个儿子的故事。斯蒂芬已经有了一个生理上的父亲西蒙·迪达勒斯，但是斯蒂芬只把他当成肉体上的父亲，他认为自己有能力变得成熟，也可以成为一名父亲，然而，由于父亲西蒙·迪达勒斯的批评和缺乏理解并没有成功。因此斯蒂芬所寻找的父亲只能是一个象征性的父亲，这个父亲可以允" },
      { label: "Part 2", description: "该小说讲述的是青年诗人斯蒂芬寻找一个精神上象征性的父亲和布卢姆寻找一个儿子的故事。斯蒂芬已经有了一个生理上的父亲西蒙·迪达勒斯，但是斯蒂芬只把他当成肉体上的父亲，他认为自己有能力变得成熟，也可以成为一名父亲，然而，由于父亲西蒙·迪达勒斯的批评和缺乏理解并没有成功。因此斯蒂芬所寻找的父亲只能是一个象征性的父亲，这个父亲可以允许斯蒂芬自己也成为一名父亲。布卢姆寻找儿子从很大程度上讲则是因为他需要一个后" },
      { label: "Part 3", description: "乔伊斯通过描述一天内发生的单一事件向人们展示了一幅人类社会的缩影，通过对一个人一天日常生活和精神变化的细致刻画揭示了人类社会的悲与喜，英雄与懦夫的共存以及宏伟与沉闷的同现。" },
      { label: "Part 4", description: "《尤利西斯》作为意识流小说的代表作，被誉为20世纪百大英文小说之首，并被奉为20世纪最伟大的小说。" },
      { label: "Part 5", description: "1904年6月16日清晨，斯蒂芬上完了一节历史课后，从校长那儿得到了三英镑二先令的报酬，来到海边漫步，面对翻滚的海浪，他思绪万千，人世的沧桑、大自然的奥妙、时空的永恒、艺术的魅力在他的意识中开始了漫无边际的涌动。他因对母亲有过情欲的爱恋而觉得对不起父亲。他抱着负罪的感觉渴望在精神上重新得到一位父亲。同一日的早上八点钟，在埃克" }
    ],
    themeAnalysis: "《尤利西斯》是爱尔兰作家詹姆斯·乔伊斯创作的长篇小说，首次出版于1922年。该小说讲述的是青年诗人斯蒂芬寻找一个精神上象征性的父亲和布卢姆寻找一个儿子的故事。斯蒂芬已经有了一个生理上的父亲西蒙·迪达勒斯，但是斯蒂芬只把他当成肉体上的父亲，他认为自己有能力变得成熟，也可以成为一名父亲，然而，由于父亲西蒙·迪达勒斯的批评和缺乏理解并没有成功。因此斯蒂芬所寻找的父亲只能是一个象征性的父亲，这个父亲可以允许斯蒂芬自己也成为一名父亲。布卢姆寻找儿子从很大程度上讲则是因为他需要一个后代来巩固自己的身份和延续香火。由此可见，斯蒂芬和布卢姆两人都希望通过寻求为父之道来巩固他们各自的身份。乔伊斯通过描述一天内发生的单一事件向人们展示了一幅人类社会的缩影，通过对一个人一天日常生活和精神变化的细致刻画揭示了人类社会的悲与喜，英雄与懦夫的共存以及宏伟与沉闷的同现。《尤利西斯》作为意识流小说的代表作，被誉为20世纪\n《尤利西斯》是爱尔兰作家詹姆斯·乔伊斯创作的长篇小说，首次出版于1922年。\n\n该小说讲述的是青年诗人斯蒂芬寻找一个精神上象征性的父亲和布卢姆寻找一个儿子的故事。斯蒂芬已经有了一个生理上的父亲西蒙·迪达勒斯，但是斯蒂芬只把他当成肉体上的父亲，他认为自己有能力变得成熟，也可以成为一名父亲，然而，由于父亲西蒙·迪达勒斯的批评和缺乏理解并没有成功。因此斯蒂芬所寻找的父亲只能是一个象征性的父亲，这个父亲可以允许斯蒂芬自己也成为一名父亲。布卢姆寻找儿子从很大程度上讲则是因为他需要一个后代来巩固自己的身份和延续香火。由此可见，斯蒂芬和布卢姆两人都希望通过寻求为父之道来巩固他们各自的身份。\n\n乔伊斯通过描述一天内发生的单一事件向人们展示了一幅人类社会的缩影，通过对一个人一天日常生活和精神变化的细致刻画揭示了人类社会的悲与喜，英雄与懦夫的共存以及宏伟与沉闷的同现。 [1]\n\n《尤利西斯》作为意识流小说的",
    techniques: "",
    excerpts: [],
    insights: "《尤利西斯》是爱尔兰作家詹姆斯·乔伊斯创作的长篇小说，首次出版于1922年。该小说讲述的是青年诗人斯蒂芬寻找一个精神上象征性的父亲和布卢姆寻找一个儿子的故事。斯蒂芬已经有了一个生理上的父亲西蒙·迪达勒斯，但是斯蒂芬只把他当成肉体上的父亲，他认为自己有能力变得成熟，也可以成为一名父亲，然而，由于父亲西蒙·迪达勒斯的批评和缺乏理解并没有成功。因此斯蒂芬所寻找的父亲只能是一个象征性的父亲，这个父亲可以允许斯蒂芬自己也成为一名父亲。布卢姆寻找儿子从很大程度上讲则是因为他需要一个后代来巩固自己的身份和延续香火。由此可见，斯蒂芬和布卢姆两人都希望通过寻求为父之道来巩固他们各自的身份。乔伊斯通过描述一天内发生的单一事件向人们展示了一幅人类社会的缩影，通过对一个人一天日常生活和精神变化的细致刻画揭示了人类社会的悲与喜，英雄与懦夫的共存以及宏伟与沉闷的同现。《尤利西斯》作为意识流小说的代表作，被誉为20世纪\n《尤利西斯》是爱尔兰作家詹姆斯·乔伊斯创作的长篇小说，首次出版于1922年。\n\n该小说讲述的是青年诗人斯蒂芬寻找一个精神上象征性的父亲和布卢姆寻找一个儿子的故事。斯蒂芬已经有了一个生理上的父亲西蒙·迪达勒斯，但是斯蒂芬只把他当成肉体上的父亲，他认为自己有能力变得成熟，也可以成为一名父亲，然而，由于父亲西蒙·迪达勒斯的批评和缺乏理解并没有成功。因此斯蒂芬所寻找的父亲只能是一个象征性的父亲，这个父亲",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%B0%A4%E5%88%A9%E8%A5%BF%E6%96%AF", tier: "reference", fetchedAt: "2026-05-21T04:36:29.887Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  // ==================== 欧洲 — 法国 ====================

  "madame-bovary": {
    id: "madame-bovary",
    characters: [
      { name: "爱玛·包法利", role: "女主角", description: "一个被浪漫小说喂养长大的乡村医生之妻。她无法忍受平庸的婚姻和外省生活的沉闷，通过婚外情和奢侈消费来逃避现实——但情人们的背叛和高利贷者的逼迫最终将她推向了砒霜的死路。" },
      { name: "夏尔·包法利", role: "男主角", description: "爱玛的丈夫，一个平庸但善良的乡村医生。他深深地爱着爱玛却完全不了解她——直到爱玛死后，他才在抽屉里发现了所有的情书和当票。他死于心碎——或者说，死于终于看清真相后的绝望。" },
      { name: "罗多尔夫", role: "爱玛的情人", description: "一个富有的地主，以猎艳为乐。他引诱了爱玛，在爱玛准备与他私奔的前夜却写了诀别信——'命运'是他为自己开脱的借口。他的虚伪与爱玛的真挚形成了最残酷的对比。" },
    ],
    plotSummary: "爱玛·包法利——一个在外省农场长大的农家女孩——在修道院的浪漫小说中形成了对生活的幻想。她嫁给了查理·包法利——一个平庸但善良的乡村医生——但婚姻的现实与她想象中的激情生活相去甚远。一次偶然参加侯爵的舞会让她瞥见了贵族世界的豪华，从此她的不满变成了无法抑制的渴望。她先后与罗多尔夫和莱昂两个情夫陷入婚外情，同时为了维持奢靡的生活不断借债。当债务无法偿还、情夫们将她抛弃时，爱玛吞下了砒霜。她死得痛苦而丑陋——不是她想象中那种唯美的死。查理在破产中孤独地死去，他们的女儿被送到纺织厂做工。",
    plotNodes: [
      { label: "婚姻的幻灭", description: "爱玛嫁给了查理·包法利，很快发现婚姻没有任何一点像她读过的浪漫小说——查理平庸、无聊、毫无情调" },
      { label: "侯爵的舞会", description: "爱玛参加了一场盛大的舞会，瞥见了她所憧憬的贵族世界。舞会结束后，她把舞会的记忆像圣物一样反复回味" },
      { label: "与罗多尔夫的私情", description: "地主罗多尔夫引诱了爱玛。她在他的庄园里找到了她一直渴望的激情——但他很快就厌倦了她" },
      { label: "与莱昂的重逢", description: "爱玛在剧院与年轻的法律文员莱昂重逢——两人之间的旧情复燃。他们的私情比前一次更加奢侈和疯狂" },
      { label: "财务崩溃", description: "商人勒合步步为营地引诱爱玛借入越来越多的债务。当全部债务到期时，勒合要求法院扣押爱玛的全部财产" },
      { label: "砒霜", description: "走投无路的爱玛吞下了砒霜。她的死不是浪漫小说中那种唯美的告别——而是漫长而丑陋的痛苦" }
    ],
    themeAnalysis: "《包法利夫人》是现代现实主义的奠基之作——但它的主题不是社会批评，而是人类的欲望结构本身。爱玛的悲剧根源于浪漫主义文学所喂养的想象力与现实生活之间的不可调和的鸿沟。她不是被社会压迫致死的——她是被自己的欲望、被那些她无法得到的幻想所毒死的。福楼拜的冷峻之处在于：他既不同情爱玛（她的愚蠢和不负责任被毫不留情地呈现），也不谴责她（她的渴望本身是真实的、令人心碎的）。这种不偏袒的客观性正是现代文学意识的核心——作者退场，让世界和人物以它们自己的方式呈现。",
    techniques: "福楼拜对语言的追求达到了宗教般的严格——他花五天时间写一页稿子，反复朗读检查每一个音节的和谐。精确的词语（le mot juste）是他的最高信条——没有多余的形容词，没有装饰性的修辞，只有最准确的、不可替代的词语。自由间接话语是他最伟大的发明——叙述者的声音进入人物的意识而不做任何标记，使读者无法区分什么是客观叙述什么是人物的主观感受。这种技术上的革命赋予了小说一种全新的心理深度。外省风俗的描写与人物内心世界的揭示被编织成了不可分割的一体。",
    excerpts: [
      { quote: "她渴望的不是任何具体的东西——而是一种不确定的、无限的幸福。她的心被文学喂养得太大，以至于现实无法容纳它。", context: "对爱玛欲望本质的精确概括——她追求的是一种不可能存在的'更多'。" },
      { quote: "语言是一台被损坏的机器——我们以为我们在用它来表达自己，实际上它只表达那些已经被表达过的、公共的、可以被识别的感受。", context: "福楼拜对语言陈词滥调的深刻警觉——这种意识使他成为现代主义文学的先驱。" }
    ],
    insights: "福楼拜说过：包法利夫人就是我。他不是在炫耀——他是在承认：爱玛的困境也是我们每一个人的困境。我们都活在被文学、广告和社交媒体喂养的想象世界中，我们的欲望总是超出日常生活的给予能力。问题不在于我们是否有不切实际的幻想（我们都或多或少有），而在于我们如何处理幻想与现实之间的裂隙。爱玛的悲剧在于：她从未学会在这个裂隙中活下去。",
  },

  "les-miserables": {
    id: "les-miserables",
    characters: [
      { name: "冉阿让", role: "主人公", description: "为饥饿的侄子偷了一块面包而被判十九年苦役的囚犯。出狱后被主教卞福汝以银器相赠，从此洗心革面，以'马德兰'之名成为市长和工厂主。但他的一生都被警长沙威追捕——他的逃亡与救赎构成了这部史诗的灵魂。" },
      { name: "沙威", role: "追捕者", description: "法律的绝对化身的警长。他对冉阿让的穷追不舍不是出于个人恩怨，而是出于对'法律'的盲目信仰。当冉阿让在街垒战中饶他一命时，他的世界观崩塌了——他无法调和'法律的正义'与'人性的宽恕'，最终投入塞纳河自尽。" },
      { name: "芳汀", role: "悲剧女性", description: "被情人抛弃的年轻女工，为了养活寄养在外的女儿珂赛特，她卖了头发、牙齿，最后卖了自己的身体。她在临终前将女儿托付给了冉阿让——她的悲剧是对社会冷漠的最血泪控诉。" },
      { name: "珂赛特", role: "女主角", description: "芳汀的女儿，被寄养在贪婪的德纳第夫妇家受尽虐待。冉阿让将她救出并抚养成人，她与马吕斯的爱情成为小说中的希望之光。" },
    ],
    plotSummary: "1815年，冉阿让——一个因为在饥饿中偷了一块面包而被判了十九年苦役的囚犯——被释放了。他将米里哀主教收留他的银器偷走，但主教宽恕了他，并说：我买下了你的灵魂。从这个宗教性的转变开始，冉阿让改头换面成为了马德兰先生——一个成功的工厂主和市长。但他被警长沙威认了出来，被迫再次逃亡。他收养了被社会抛弃的孤女珂赛特，在巴黎的街垒战中救下了珂赛特的爱人马吕斯，并最终在珂赛特和马吕斯的陪伴下平静地死去。沙威——这个法律和秩序的化身——在被冉阿让饶恕后无法调和他的世界观而投河自尽。",
    plotNodes: [
      { label: "米里哀主教的银器", description: "冉阿让偷走了主教的银器，被警察抓回。主教说银器是他送的，还说冉阿让忘了拿走银烛台——这个宽恕改变了冉阿让的一生" },
      { label: "芳汀之死", description: "已经成为市长的冉阿让得知工厂女工芳汀的悲惨遭遇后，承诺照顾她的女儿珂赛特——一个被寄养在德纳第家受虐待的孩子" },
      { label: "下水道逃亡", description: "冉阿让背着受伤昏迷的马吕斯在巴黎下水道中爬行——这是全书最黑暗也最壮丽的场景" },
      { label: "沙威之死", description: "沙威被冉阿让饶恕后无法接受一个罪犯可以是善良的这个事实。他从桥上跳入塞纳河——法律的绝对主义瓦解了" },
      { label: "冉阿让的告别", description: "冉阿让在珂赛特和马吕斯的陪伴下死去——他终于被理解了，终于被原谅了，终于可以安息了" }
    ],
    themeAnalysis: "《悲惨世界》是一部关于救赎的宏大史诗。冉阿让的一生证明了：一个被社会抛弃的人可以通过爱和牺牲重建自己的灵魂。米里哀主教的宽恕是全书的精神原点——它不是正义（按法律的标准），但正是这种超越法律的恩典开启了冉阿让的转变。沙威的悲剧提供了全书最尖锐的道德反讽：法律的绝对执行者是一个无可挑剔的好人，但他所执行的法律却是不公正的。当他终于看到法律和正义之间的裂隙时，他的整个精神世界崩塌了。雨果似乎在说：法律是必要的，但仅有法律是不够的——人类需要一种超越法律的东西，那就是恩典和爱。",
    techniques: "雨果以其标志性的宏大叙事风格，在历史、哲学和社会批评之间自由穿梭。小说中大量的离题——对滑铁卢战役的历史分析、对巴黎下水道的考古描述、对修道院制度的批判——不是赘肉，而是雨果的宇宙小说构想的一部分：让一部小说包含整个世界的全部。平行叙事和人物的命运交叉——冉阿让、芳汀、珂赛特、马吕斯、德纳第一家、沙威——被编织成了一张精密的人际关系网。这种19世纪小说的全景式野心在《悲惨世界》中达到了最动人的实现。",
    excerpts: [
      { quote: "人生最伟大的幸福，就是确信自己被人爱着——为自己而被爱着，或者更准确地说，被人爱着——尽管自己是这样的人。", context: "雨果对爱之本质的最深刻定义——不是因为我们完美而被爱，而是尽管不完美仍然被爱。" },
      { quote: "没有什么比一个梦更加强大——在它手中，整个世界的重量都化为乌有。", context: "雨果对理想主义的致敬——这部小说本身就是一场关于正义和爱的宏大梦想。" }
    ],
    insights: "《悲惨世界》试图在一部小说中做一件不可能的事：展现一个社会的全部——从下水道到主教宫殿、从街垒到修道院——并在其中找到救赎的可能性。冉阿让的故事告诉我们：人是可以被改变的——不是被法律，而是被爱和恩典。在一个越来越相信惩罚和排斥的时代，雨果的声音仍然是需要的：它提醒我们，真正的正义包含怜悯。",
  },

  "in-search-of-lost-time": {
    id: "in-search-of-lost-time",
    plotSummary: "《追忆似水年华》（又译为《追寻逝去的时光》）是20世纪法国小说家马塞尔·普鲁斯特创作的长篇小说，先后出版于1913—1927年间。从1909年开始，作者动笔撰写该小说，一直到1922年因肺炎去世，历时13年完成。小说分为七卷，各卷在1913—1927年分别出版。《追忆似水年华》是一部与传统小说不同的长篇小说。全书以叙述者“我”为主体，将所见所闻、所思所感融为一体，其中既有对社会生活、人情世态的真实描写，又有对作者自我追求、自我认识的内心经历的记录。除叙事以外，小说还包含大量的感想和议论。整部作品没有中心人物，没有完整的故事，没有波澜起伏和贯穿始终的情节线索。它大体以叙述者的生活经历和内心活动为轴心，穿插描写了大量的人物事件，可以说是在一部主要小说上生出许多独立成篇的其他小说。作者通过故事套故事、故事与故事交叉重叠的方法，描写了众多的人物、事件，展示了一幅19世纪与20世纪之交法国上流社会的\n《追忆似水年华》（又译为《追寻逝去的时光》）是20世纪法国小说家马塞尔·普鲁斯特创作的长篇小说，先后出版于1913—1927年间。从1909年开始，作者动笔撰写该小说，一直到1922年因肺炎去世，历时13年完成。 [5]小说分为七卷，各卷在1913—1927年分别出版。 [6]\n\n《追忆似水年华》是一部与传统小说不同的长篇小说。全书以叙述者“我”为主体，将所见所闻、所思所感融为一体，其中既有对社会生活、人情世态的真实描写，又有对作者自我追求、自我认识的内心经历的记录。除叙事以外，小说还包含大量的感想和议论。整部作品没有中心人物，没有完整的故事，没有波澜起伏和贯穿始终的情节线索。它大体以叙述者的生活经历和内心活动为轴心，穿插描写了大量的人物事件，可以说是在一部主要小说上生出许多独立成篇的其他小说。作者通过故事套故事、故事与故事交叉重叠的方法，描写了众多的人物、事件，展示了一幅19世纪与20世纪之交法国上流社会的生活图景。作品通过上千个人物的活动，冷静、真实、细致地再现了法国上流社会的生活习俗、人情世态。 [4]小说的故事没有连贯性，中间经常插入各种感想、议论、倒叙，语言具有独特风格。 [9]\n\n该小说革新了小说的题材和写作技巧，使潜意识成了真正的主人公。 [9]小说的第二卷获法国龚古尔文学奖。 [13]《追忆似水年华》是意识流小说的开山之作，在整个西方现代小说史上具有里程碑式的意义",
    plotNodes: [
      { label: "Part 1", description: "《追忆似水年华》（又译为《追寻逝去的时光》）是20世纪法国小说家马塞尔·普鲁斯特创作的长篇小说，先后出版于1913—1927年间。从1909年开始，作者动笔撰写该小说，一直到1922年因肺炎去世，历时13年完成。小说分为七卷，各卷在1913—1927年分别出版。《追忆似水年华》是一部与传统小说不同的长篇小说。全书以叙述者“我”为主体，将所见所闻、所思所感融为一体，其中既有对社会生活、人情世态的真实" },
      { label: "Part 2", description: "《追忆似水年华》是一部与传统小说不同的长篇小说。全书以叙述者“我”为主体，将所见所闻、所思所感融为一体，其中既有对社会生活、人情世态的真实描写，又有对作者自我追求、自我认识的内心经历的记录。除叙事以外，小说还包含大量的感想和议论。整部作品没有中心人物，没有完整的故事，没有波澜起伏和贯穿始终的情节线索。它大体以叙述者的生活经历和内心活动为轴心，穿插描写了大量的人物事件，可以说是在一部主要小说上生出许" },
      { label: "Part 3", description: "该小说革新了小说的题材和写作技巧，使潜意识成了真正的主人公。" }
    ],
    themeAnalysis: "《追忆似水年华》（又译为《追寻逝去的时光》）是20世纪法国小说家马塞尔·普鲁斯特创作的长篇小说，先后出版于1913—1927年间。从1909年开始，作者动笔撰写该小说，一直到1922年因肺炎去世，历时13年完成。小说分为七卷，各卷在1913—1927年分别出版。《追忆似水年华》是一部与传统小说不同的长篇小说。全书以叙述者“我”为主体，将所见所闻、所思所感融为一体，其中既有对社会生活、人情世态的真实描写，又有对作者自我追求、自我认识的内心经历的记录。除叙事以外，小说还包含大量的感想和议论。整部作品没有中心人物，没有完整的故事，没有波澜起伏和贯穿始终的情节线索。它大体以叙述者的生活经历和内心活动为轴心，穿插描写了大量的人物事件，可以说是在一部主要小说上生出许多独立成篇的其他小说。作者通过故事套故事、故事与故事交叉重叠的方法，描写了众多的人物、事件，展示了一幅19世纪与20世纪之交法国上流社会的\n《追忆似水年华》（又译为《追寻逝去的时光》）是20世纪法国小说家马塞尔·普鲁斯特创作的长篇小说，先后出版于1913—1927年间。从1909年开始，作者动笔撰写该小说，一直到1922年因肺炎去世，历时13年完成。 [5]小说分为七卷，各卷在1913—1927年分别出版。 [6]\n\n《追忆似水年华》是一部与传统小说不同的长篇小说。全书以叙述者“我”为主体，将所见所闻、所思所感融为一体，其中既有对社会生活、人情世态的真实描写，又有对作者自我追求、自我认识的内心经历的记录。除叙事以外，小说还包含大量的感想和议论。整部作品没有中心人物，没有完整的故事，没有波澜起伏和贯穿始终的情节线索。它大体以叙述者的生活经历和内心活动为轴心，穿插描写了大量的人物事件，可以说是在一部主要小说上生出许多独立成篇的其他小说。作者通过故事套故事、故事与故事交叉重叠的方法，描写了众多的人物、事件，展示了一幅19世纪与20",
    techniques: "",
    excerpts: [],
    insights: "《追忆似水年华》（又译为《追寻逝去的时光》）是20世纪法国小说家马塞尔·普鲁斯特创作的长篇小说，先后出版于1913—1927年间。从1909年开始，作者动笔撰写该小说，一直到1922年因肺炎去世，历时13年完成。小说分为七卷，各卷在1913—1927年分别出版。《追忆似水年华》是一部与传统小说不同的长篇小说。全书以叙述者“我”为主体，将所见所闻、所思所感融为一体，其中既有对社会生活、人情世态的真实描写，又有对作者自我追求、自我认识的内心经历的记录。除叙事以外，小说还包含大量的感想和议论。整部作品没有中心人物，没有完整的故事，没有波澜起伏和贯穿始终的情节线索。它大体以叙述者的生活经历和内心活动为轴心，穿插描写了大量的人物事件，可以说是在一部主要小说上生出许多独立成篇的其他小说。作者通过故事套故事、故事与故事交叉重叠的方法，描写了众多的人物、事件，展示了一幅19世纪与20世纪之交法国上流社会的\n《追忆似水年华》（又译为《追寻逝去的时光》）是20世纪法国小说家马塞尔·普鲁斯特创作的长篇小说，先后出版于1913—1927年间。从1909年开始，作者动笔撰写该小说，一直到1922年因肺炎去世，历时13年完成。 [5]小说分为七卷，各卷在1913—1927年分别出版。 [6]\n\n《追忆似水年华》是一部与传统小说不同的长篇小说。全书以叙述者“我”为主体，将所见所闻、所思所感融为一体，其中既有对社",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E8%BF%BD%E5%BF%86%E4%BC%BC%E6%B0%B4%E5%B9%B4%E5%8D%8E", tier: "reference", fetchedAt: "2026-05-21T04:37:53.381Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "the-stranger": {
    id: "the-stranger",
    characters: [
      { name: "默尔索", role: "主人公/叙述者", description: "阿尔及尔的一个小职员，以令人不安的冷漠面对一切——母亲的死亡、恋人的求婚、自己的杀人行为。'今天，妈妈死了。也许是在昨天，我不知道。'——他因'在母亲葬礼上没有哭'而被判死刑，这荒谬的判决恰恰映照了人类存在的荒谬本质。" },
      { name: "玛丽", role: "女友", description: "默尔索的女友，她爱默尔索却始终无法理解他的冷漠。她问默尔索是否愿意娶她——默尔索说'无所谓，如果你想的话'。她的困惑代表了正常人对荒谬者的不可能的理解。" },
    ],
    plotSummary: "今天，妈妈死了。也许是在昨天，我不知道。阿尔及尔的小职员默尔索以这样一句令人不安的冷漠开启了整个叙事。他去参加了母亲的葬礼却没有流泪；第二天他和女友玛丽去看喜剧、做爱；一个偶然的机会他交了一个皮条客朋友雷蒙；又一个偶然的机会，在一个灼热的海滩上，他枪杀了一个阿拉伯人——开了五枪。在审判中，他被指控的不是杀人本身，而是道德上的失败——因为在母亲的葬礼上没有哭，所以他是禽兽，所以他是蓄意谋杀。默尔索被判处死刑。在等待死刑的牢房中，他拒绝了神父的宗教安慰，第一次向这个世界的温柔的冷漠敞开了自己——他感到自己是幸福的。",
    plotNodes: [
      { label: "母亲之死", description: "默尔索收到养老院的电报：母亲去世。他去参加葬礼，没有要求看母亲最后一眼，喝了牛奶咖啡，抽了烟" },
      { label: "海滩上的阳光", description: "一个灼热的周日，默尔索独自走到海滩。阳光在刀上反射——他扣动了扳机" },
      { label: "审判", description: "法庭关注的不是谋杀事实而是默尔索的灵魂——为什么在母亲葬礼上没有哭？为什么葬礼后看喜剧？" },
      { label: "死刑判决", description: "以法兰西人民的名义，默尔索被判处死刑——不是因为他是杀人犯，而是因为他是异类" },
      { label: "与神父的对抗", description: "神父来到牢房试图让默尔索皈依。默尔索第一次爆发——他拒绝上帝，拒绝希望，拥抱了世界的荒谬" },
      { label: "幸福的默尔索", description: "在等待黎明处决的夜晚，默尔索向这个世界的温柔的冷漠敞开了自己——他第一次理解了妈妈" }
    ],
    themeAnalysis: "《局外人》是加缪对荒谬哲学的最直接体现。默尔索的冷漠不是无感情——而是一种对世界之无意义的清醒接受。这个世界不断地要求他按照社会规定的剧本表演情感（为母亲哭泣、表达悔恨、信仰上帝），而他诚实地拒绝表演这些自己没有的情感。正是这种诚实——而不是杀人——使他被社会判处了死刑。默尔索是一个不说谎的人：他不假装有自己实际没有的情感，不假装相信自己无法相信的东西。在一个建立在谎言和表演之上的文明中，诚实的人是最危险的异类。",
    techniques: "加缪以极其简洁、几乎干枯的语言创造了一种独特的叙事声音。默尔索的句子简单直接，几乎像新闻报道——没有情感的修饰，没有道德的议论。这种语言的贫困不是加缪的不足，而是精心的风格选择：它反映了默尔索的意识本身——一种不对世界附加多余意义的诚实。小说的第一部和第二部形成了鲜明的结构对比：第一部是默尔索的生活（看似无序但自由），第二部是社会的审判（高度结构化的迫害）。",
    excerpts: [
      { quote: "今天，妈妈死了。也许是在昨天，我不知道。", context: "世界文学中最著名的开篇之一——六个字确立了默尔索与世界之间的全部距离。" },
      { quote: "我向这个世界的温柔的冷漠敞开了自己——我觉得它像我，像我的兄弟一样。", context: "默尔索在被处决前的最后顿悟——在拥抱荒谬中发现了幸福的可能性。" }
    ],
    insights: "默尔索不是反社会者——他是这个社会的镜子。在一个要求所有人按照同样的情感脚本生活的世界中，不对自己的真实感受撒谎就是最大的罪行。他的悲剧不是因为他杀了人——而是因为他拒绝假装。在这个意义上，我们每个人都或多或少是社会剧本的演员——而默尔索提醒我们，诚实到拒绝所有表演的代价可能是死亡。",
  },

  "the-plague": {
    id: "the-plague",
    plotSummary: "鼠疫，由革兰染色阴性、两极浓染的短小杆菌鼠疫耶尔森菌引起的严重传染病。在自然环境下，鼠疫主要在野生啮齿动物间流行，人类在被带有鼠疫菌的跳蚤叮咬或吸入空气中的鼠疫菌后会感染。按照病变部位，鼠疫常见类型有腺鼠疫、肺鼠疫、败血症型鼠疫等，另有肠鼠疫、脑膜炎型鼠疫、眼鼠疫、皮肤鼠疫等少见类型。全人群对鼠疫的感染性均很高，若不及时治疗，其病死率可高达30%~60%。鼠疫的典型症状包括急剧发病、寒战、高热、剧烈头痛，血压下降、出血倾向等。腺鼠疫者淋巴结肿痛显著，肺鼠疫患者表现为胸痛、咳嗽、呼吸急促且困难，并有大量血性痰；败血症型鼠疫患者病情进展迅速，发生血压下降，意识不清，谵妄，皮肤广泛出血、瘀斑、发绀、坏死等。鼠疫的传染性强，人类与肺鼠疫患者密切接触，吸入一定数量的鼠疫菌后，可引发原发性肺鼠疫。鼠疫的治疗以链霉素为首选，链霉素的用量根据疾病类型、疫源地均有所不同，一般疗程为10-20天。",
    plotNodes: [
      { label: "第 1 部分", description: "鼠疫，由革兰染色阴性、两极浓染的短小杆菌鼠疫耶尔森菌引起的严重传染病。在自然环境下，鼠疫主要在野生啮齿动物间流行，人类在被带有鼠疫菌的跳蚤叮咬或吸入空气中的鼠疫菌后会感染。按照病变部位，鼠疫常见类型有腺鼠疫、肺鼠疫、败血症型鼠疫等，另有肠鼠疫、脑膜炎型鼠疫、眼鼠疫、皮肤鼠疫等少见类型。全人群对鼠疫的感染性均很高，若不及时治疗，其病死率可高达30%~60%。鼠疫的典型症状包括急剧发病、寒战、高热、剧" },
      { label: "第 2 部分", description: "鼠疫的典型症状包括急剧发病、寒战、高热、剧烈头痛，血压下降、出血倾向等。腺鼠疫者淋巴结肿痛显著，肺鼠疫患者表现为胸痛、咳嗽、呼吸急促且困难，并有大量血性痰；败血症型鼠疫患者病情进展迅速，发生血压下降，意识不清，谵妄，皮肤广泛出血、瘀斑、发绀、坏死等。鼠疫的传染性强，人类与肺鼠疫患者密切接触，吸入一定数量的鼠疫菌后，可引发原发性肺鼠疫。" },
      { label: "第 3 部分", description: "鼠疫的治疗以链霉素为首选，链霉素的用量根据疾病类型、疫源地均有所不同，一般疗程为10-20天。" }
    ],
    themeAnalysis: "鼠疫，由革兰染色阴性、两极浓染的短小杆菌鼠疫耶尔森菌引起的严重传染病。在自然环境下，鼠疫主要在野生啮齿动物间流行，人类在被带有鼠疫菌的跳蚤叮咬或吸入空气中的鼠疫菌后会感染。按照病变部位，鼠疫常见类型有腺鼠疫、肺鼠疫、败血症型鼠疫等，另有肠鼠疫、脑膜炎型鼠疫、眼鼠疫、皮肤鼠疫等少见类型。全人群对鼠疫的感染性均很高，若不及时治疗，其病死率可高达30%~60%。鼠疫的典型症状包括急剧发病、寒战、高热、剧烈头痛，血压下降、出血倾向等。腺鼠疫者淋巴结肿痛显著，肺鼠疫患者表现为胸痛、咳嗽、呼吸急促且困难，并有大量血性痰；败血症型鼠疫患者病情进展迅速，发生血压下降，意识不清，谵妄，皮肤广泛出血、瘀斑、发绀、坏死等。鼠疫的传染性强，人类与肺鼠疫患者密切接触，吸入一定数量的鼠疫菌后，可引发原发性肺鼠疫。鼠疫的治疗以链霉素为首选，链霉素的用量根据疾病类型、疫源地均有所不同，一般疗程为10-20天。病情严重需要\n鼠疫，由革兰染色阴性、两极浓染的短小杆菌鼠疫耶尔森菌引起的严重传染病。在自然环境下，鼠疫主要在野生啮齿动物间流行，人类在被带有鼠疫菌的跳蚤叮咬或吸入空气中的鼠疫菌后会感染。",
    techniques: "鼠疫，由革兰染色阴性、两极浓染的短小杆菌鼠疫耶尔森菌引起的严重传染病。在自然环境下，鼠疫主要在野生啮齿动物间流行，人类在被带有鼠疫菌的跳蚤叮咬或吸入空气中的鼠疫菌后会感染。按照病变部位，鼠疫常见类型有腺鼠疫、肺鼠疫、败血症型鼠疫等，另有肠鼠疫、脑膜炎型鼠疫、眼鼠疫、皮肤鼠疫等少见类型。全人群对鼠疫的感染性均很高，若不及时治疗，其病死率可高达30%~60%。鼠疫的典型症状包括急剧发病、寒战、高热、剧烈头痛，血压下降、出血倾向等。腺鼠疫者淋巴结肿痛显著，肺鼠疫患者表现为胸痛、咳嗽、呼吸急促且困难，并有大量血性痰；败血症型鼠疫患者病情进展迅速，发生血压下降，意识不清，谵妄，皮肤广泛出血、瘀斑、发绀、坏死等。鼠疫的传染性强，人类与肺鼠疫患者密切接触，吸入一定数量的鼠疫菌后，可引发原发性肺鼠疫。鼠疫的治疗以链霉素为首选，链霉素的用量根据疾病类型、疫源地均有所不同，一般疗程为10-20天。",
    excerpts: [],
    insights: "鼠疫，由革兰染色阴性、两极浓染的短小杆菌鼠疫耶尔森菌引起的严重传染病。在自然环境下，鼠疫主要在野生啮齿动物间流行，人类在被带有鼠疫菌的跳蚤叮咬或吸入空气中的鼠疫菌后会感染。按照病变部位，鼠疫常见类型有腺鼠疫、肺鼠疫、败血症型鼠疫等，另有肠鼠疫、脑膜炎型鼠疫、眼鼠疫、皮肤鼠疫等少见类型。全人群对鼠疫的感染性均很高，若不及时治疗，其病死率可高达30%~60%。鼠疫的典型症状包括急剧发病、寒战、高热、剧烈头痛，血压下降、出血倾向等。腺鼠疫者淋巴结肿痛显著，肺鼠疫患者表现为胸痛、咳嗽、呼吸急促且困难，并有大量血性痰；败血症型鼠疫患者病情进展迅速，发生血压下降，意识不清，谵妄，皮肤广泛出血、瘀斑、发绀、坏死等。鼠疫的传染性强，人类与肺鼠疫患者密切接触，吸入一定数量的鼠疫菌后，可引发原发性肺鼠疫。鼠疫的治疗以链霉素为首选，链霉素的用量根据疾病类型、疫源地均有所不同，一般疗程为10-20天。",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E9%BC%A0%E7%96%AB", tier: "reference", fetchedAt: "2026-05-21T04:49:31.647Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=The%20Plague%20Albert%20Camus" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=The%20Plague%20Albert%20Camus" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=The%20Plague" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=The%20Plague" },
      ],
    },
  },

  // ==================== 欧洲 — 俄国 ====================

  "war-and-peace": {
    id: "war-and-peace",
    characters: [
      { name: "皮埃尔·别祖霍夫", role: "主人公", description: "一个继承了巨额遗产的私生子，笨拙而理想主义。他在拿破仑战争的洗礼中经历了信仰的挣扎——从共济会到战俘营，他最终在普拉东·卡拉塔耶夫的朴素智慧中找到了内心的平静。他是托尔斯泰本人的精神自画像。" },
      { name: "安德烈·博尔孔斯基", role: "主人公", description: "一个厌世的贵族军官，在奥斯特利茨战役中受了致命伤躺在战场上仰望天空时，忽然领悟了所有荣耀的虚无。他与娜塔莎的爱情是他重返生活的唯一希望——但战争和死亡一次又一次地打断了他。" },
      { name: "娜塔莎·罗斯托娃", role: "女主角", description: "一个充满生命力的少女，她的歌声和舞姿是小说的心跳。她从天真到幻灭再到成熟的成长历程——包​​括她与安德烈的爱情、被阿纳托利诱骗的惨痛教训——使她成为世界文学中最真实、最动人的女性形象之一。" },
      { name: "拿破仑", role: "历史人物", description: "托尔斯泰笔下的拿破仑是一个被历史洪流裹挟而不自知的'伟人'——他以为自己掌控了千军万马，实际上他只是'历史的奴隶'。托尔斯泰通过他解构了'伟人决定历史'的传统史观。" },
    ],
    plotSummary: "小说以1805年至1820年间的俄国为舞台，以拿破仑战争——尤其是1812年俄法战争——为历史背景，通过别祖霍夫、博尔孔斯基、罗斯托夫和库拉金四个贵族家庭的生活变迁，编织了一幅宏伟的历史与人性画卷。皮埃尔从迷茫的富贵闲人成长为经历了战俘营的精神求道者；安德烈在奥斯特利茨的星空下领悟了荣誉的虚无，又在爱情中短暂触摸了生活的意义；娜塔莎从天真烂漫的少女成长为坚毅的母亲——她的歌声构成了全书不灭的生命脉搏。在宏大的战争史诗与私密的家庭场景之间，在历史哲学的长篇议论与对个体心灵的精微解剖之间，托尔斯泰创造了一部无法被归类的奇书。",
    plotNodes: [
      { label: "安娜·舍雷尔的沙龙", description: "小说在彼得堡上流社会的虚伪社交中拉开序幕。皮埃尔和安德烈在此登场——两个灵魂的求索之旅由此展开" },
      { label: "奥斯特利茨的星空", description: "安德烈负伤躺在奥斯特利茨战场上仰望天空，忽然领悟了所有荣耀的虚无" },
      { label: "娜塔莎的命名日", description: "娜塔莎在舞会上翩翩起舞——她那未经雕琢的俄罗斯灵魂之美让所有人屏息" },
      { label: "波罗金诺战役", description: "全书最宏大的战争场景。皮埃尔以平民身份亲历血战，在普通士兵身上看到了他在贵族中从未找到的朴素真理" },
      { label: "莫斯科大火", description: "法军进入空城莫斯科。皮埃尔被捕成为战俘，遇到了改变他一生的农民士兵卡拉塔耶夫" },
      { label: "尾声：生活继续", description: "八年后，皮埃尔与娜塔莎在家庭日常中找到了平静。但托尔斯泰在长篇史论中反驳伟人史观：历史的真正推动力是无数普通人的集体生活" }
    ],
    themeAnalysis: "《战争与和平》最核心的哲学追问是：什么推动历史？托尔斯泰激烈地反驳了伟人史观——在小说中，拿破仑和库图佐夫都不是历史的创造者，而只是被一股由无数个体的集体行动所形成的洪流所裹挟。历史的决定力量是无数自由意志的积分——这一洞见贯穿全书。与此同时，小说也在追问个人生活的意义：安德烈在星空下的顿悟、皮埃尔在战俘营中的转变、娜塔莎在家庭中找到的满足——每一个重要的精神时刻都在回答同一个问题：人应该如何生活？托尔斯泰给出的回答具有反智识倾向：真理不在哲学体系或政治纲领中，而在朴素的生活实践——劳作、家庭、爱和直面死亡之中。",
    techniques: "托尔斯泰的叙事技艺达到了空前的高度。他创造了一种全景式现实主义——在战争的大场面与家庭的小场景之间、在历史的长镜头与心灵的微距特写之间自由切换而不失连贯。心灵辩证法在此达到了巅峰：他不仅展现人物的情感状态，更展现这些状态如何在一个流动的过程中转化为其反面。沙龙的语言（法语、虚伪的社交辞令）与战场的语言（俄语、粗粝的真实）形成了尖锐的对比。小说的结尾以长篇历史哲学议论打破了传统小说的封闭叙事——托尔斯泰拒绝给读者一个圆满结局，而是将问题重新抛还给历史和生活本身。",
    excerpts: [
      { quote: "皮埃尔全部的困境在于：他太聪明了以至于不能不相信点什么，但他又不够聪明以至于不能完全相信。", context: "对皮埃尔精神状态的经典刻画——一个在理性与信仰之间挣扎的现代灵魂的精确肖像。" },
      { quote: "躺在战场上仰望星空的那一刻，安德烈第一次理解了：一切从前让他激动不已的东西——荣誉、权力、他人的评价——在这片无限的天空之下都是多么渺小。", context: "奥斯特利茨战役场景，全书最著名的精神顿悟时刻——天空的意象成为托尔斯泰式启示的核心象征。" }
    ],
    insights: "《战争与和平》是一本需要用一生来阅读的书。年轻时读到的是爱情和冒险；中年时读到的是对意义的追寻和对死亡的恐惧；老年时也许会读到一种超越了所有追问的平静。托尔斯泰在这部巨著中试图做的事情几乎是疯狂的：在一部小说中同时回答历史如何运作和个人如何生活这两个终极问题。",
  },

  "anna-karenina": {
    id: "anna-karenina",
    characters: [
      { name: "安娜·卡列尼娜", role: "女主角", description: "彼得堡上流社会的贵妇，为了爱情放弃了丈夫、儿子和社会地位。但情人伏伦斯基的爱没能经得起时间的考验——在绝望和偏执中，安娜最终投身于火车轮下。她的悲剧不是关于一个'堕落女人'，而是关于一个在窒息的社会中追求真实感情的女性。" },
      { name: "伏伦斯基", role: "男主角", description: "英俊的年轻军官，热烈地追求安娜并让她离开了丈夫。但他的爱是有保质期的——当安娜以全部的生命赌注投入这段关系时，他却发现自己的感情在消退。他的平庸注定了安娜的悲剧。" },
      { name: "康斯坦丁·列文", role: "平行主人公", description: "一个乡间地主，托尔斯泰的另一个自我。他在农事劳作、家庭生活和信仰探索中寻找人生的意义——他的这条'幸福'线索与安娜的'悲剧'线索构成了小说的对位结构。" },
      { name: "阿列克谢·卡列宁", role: "安娜的丈夫", description: "安娜的丈夫，彼得堡高级官僚。他刻板、冷漠，更像一个'行政装置'而非活生生的人。当安娜离开他时，他关心的不是失去了妻子，而是'别人会怎么想'——但他对安娜私生女的接纳也显示了他性格中意外的一面。" },
    ],
    plotSummary: "幸福的家庭都是相似的，不幸的家庭各有各的不幸。安娜·卡列尼娜——彼得堡上流社会的贵妇——为了年轻军官伏伦斯基离开了她那冷漠而体面的丈夫卡列宁，放弃了她珍爱的儿子和社会地位。但伏伦斯基的爱情经不起时间的消磨，社会的排斥和内心的负罪感将安娜推向了越来越深的偏执和绝望。与之平行的是乡间地主列文的叙事线——他在农事劳作、家庭生活和信仰求索中寻找人生的意义。两条线索在关于爱情、婚姻和人生意义的追问中形成了精妙的对应。最终安娜投身于火车轮下，而列文在朴素的生活信仰中找到了不完美的平静。",
    plotNodes: [
      { label: "奥布隆斯基家的风波", description: "小说以安娜哥哥家的婚姻危机开始。安娜从彼得堡来调解，在火车站第一次遇见伏伦斯基" },
      { label: "舞会与沦陷", description: "在一场盛大的舞会上，安娜与伏伦斯基共舞，她所有的压抑在华尔兹中释放" },
      { label: "赛马事件", description: "伏伦斯基在赛马中坠马，安娜在看台上失声惊呼——这一声暴露了他们之间的关系" },
      { label: "出走意大利", description: "安娜与伏伦斯基私奔到意大利，试图在异国重建生活。但在封闭中他们的关系日渐窒息" },
      { label: "孤独与偏执", description: "安娜被社会孤立、被思念儿子的痛苦折磨，她对伏伦斯基的爱变质为占有和猜忌" },
      { label: "铁轨之下", description: "安娜在火车站投身铁轨之下——那列火车的意象从小说第一页起就在等待着这个终结" }
    ],
    themeAnalysis: "《安娜·卡列尼娜》表面上是关于一个通奸女人的故事，但托尔斯泰拒绝将它写成道德谴责的寓言。安娜不是堕落的女人——她是被一个不允许女性拥有真实情感和欲望的社会所毁灭的人。她的悲剧不是因为她做了什么，而是因为这个社会拒绝给她任何合法的生活空间。与之平行的是列文的故事线——他的婚姻相对幸福，但他仍然被关于意义的形而上学追问所折磨。两条线索共同追问：在上帝已经退场的现代世界中，人靠什么活着？安娜试图在爱情中找到终极意义——但她把全部的生命押注在另一个有限的人身上，这注定了她的毁灭。",
    techniques: "托尔斯泰展现了惊人的形式控制。两条叙事线（安娜-伏伦斯基-卡列宁与列文-吉蒂）形成了贯穿全书的对位结构——一条走向死亡，一条走向生活；一条在社会舞台上华丽地崩塌，一条在乡村的朴素中安静地建构。全书开篇第一句话——关于幸福与不幸家庭的著名警句——像一个主题动机统领了整部交响曲。火车的意象贯穿全书，从安娜与伏伦斯基的相遇到安娜的死亡，构成精密的象征网络。最为精妙的是，托尔斯泰拒绝了所有形式的叙事封闭。",
    excerpts: [
      { quote: "幸福的家庭都是相似的，不幸的家庭各有各的不幸。", context: "全书开篇第一句，世界文学中最著名的开篇之一——一句话概括了小说全部的伦理关怀。" },
      { quote: "他看着她，就像是看着一朵被摘下来的花——正在凋谢。", context: "伏伦斯基对安娜的爱已经从激情转向了疲惫——花的隐喻浓缩了安娜悲剧的全部。" }
    ],
    insights: "安娜·卡列尼娜的悲剧在今天仍然在上演——当一个女性被要求在以爱为名的自我牺牲与以社会为名的自我压抑之间做出选择时，她在任何选项中都注定要失去自己的一部分。托尔斯泰没有给我们一个简单的出路——他诚实地呈现了爱情、婚姻和家庭这些最私密的人类制度中最深的悖论。",
  },

  "brothers-karamazov": {
    id: "brothers-karamazov",
    characters: [
      { name: "阿辽沙", role: "主人公", description: "卡拉马佐夫三兄弟中的老三，修道院的见习修士。他是陀思妥耶夫斯基理想中的'完全美好的人'——纯真、善良、对所有人怀有深沉的同情。他的信仰不是教条而是一种对世界说'是'的能力。" },
      { name: "伊万", role: "二哥", description: "一个理性的无神论者，他的头脑中充满了对上帝正义的质疑。'如果天堂的和谐是以一个无辜孩子的眼泪为代价，我恭敬地把我的门票退还'——他与阿辽沙的'宗教大法官'对话是西方文学中最深刻的信仰辩论。" },
      { name: "德米特里", role: "大哥", description: "一个被激情驱使的感官主义者——酗酒、狂欢、与父亲争夺同一个女人。当父亲被杀害时，他被控谋杀——虽然他没有杀人，但他承认自己'在灵魂中'已经杀了父亲。他的苦难成为了他的救赎之路。" },
      { name: "费奥多尔·卡拉马佐夫", role: "父亲", description: "三兄弟的父亲，一个卑劣而贪婪的丑角式人物。他是'卡拉马佐夫气质'——那种不加约束的欲望和虚无主义——的最原始形态。他的被谋杀是小说的核心事件。" },
      { name: "斯梅尔佳科夫", role: "关键人物", description: "费奥多尔的私生子兼厨子，被当作下人养大。他将伊万的'上帝不存在则一切皆可'的哲学推理到其逻辑终点——真正实施了谋杀。他是伊万思想的肉身化，也是伊万精神崩溃的根源。" },
    ],
    plotSummary: "在一个俄罗斯外省小镇，老卡拉马佐夫——一个放荡而贪婪的地主——被谋杀了。他的三个儿子构成了一个关于信仰、理性与激情的三角：德米特里是激情的化身，他与父亲争夺同一个女人格露申卡；伊凡是理性的虚无主义者，他声称如果上帝不存在，一切都是被允许的；阿辽沙是纯洁的信仰者，在佐西马长老的指导下追寻圣洁。私生子斯乜尔加科夫才是真正的凶手，但德米特里被审判并定罪。这部小说不是侦探故事——尽管谋杀案是其情节核心——而是对人类灵魂最深处的终极追问：如果没有上帝，道德是否可能？",
    plotNodes: [
      { label: "佐西马长老的修道院", description: "卡拉马佐夫一家在佐西马长老的修道院中聚集。一场关于信仰与理性、俄国命运的大争辩在此展开" },
      { label: "宗教大法官", description: "伊凡向阿辽沙讲述他自己创作的寓言——基督重返人间却被教会再次审判。世界文学中最震撼的篇章之一" },
      { label: "弑父之夜", description: "老卡拉马佐夫被谋杀。斯乜尔加科夫承认是他实施了谋杀——在伊凡的理论鼓励下" },
      { label: "德米特里的审判", description: "一场司法闹剧。尽管证据显示德米特里不是凶手，但他被定罪——多声部叙事的极致" },
      { label: "伊凡的崩溃", description: "伊凡被愧疚和魔鬼的幻觉折磨至崩溃。那个与他对话的魔鬼正是他自己理论的投影" },
      { label: "阿辽沙在石头旁", description: "阿辽沙在葬礼后对一群男孩讲话：记住我们在石头旁度过的这一刻。这是陀思妥耶夫斯基对未来的最后信心" }
    ],
    themeAnalysis: "《卡拉马佐夫兄弟》是陀思妥耶夫斯基的集大成之作。它提出的终极问题是：如果没有上帝，道德是否可能？伊凡的名言——如果上帝不存在，一切都是被允许的——是现代虚无主义最精确的表述。斯乜尔加科夫将伊凡的理论付诸实践（弑父），然后质问伊凡：我只是在按照你的逻辑行事。德米特里代表激情、伊凡代表理性、阿辽沙代表信仰——每一个立场都被赋予了最有力的辩护和最深刻的质疑。这是巴赫金所说的复调小说——不是让某一个声音胜出，而是让所有声音在同一灵魂空间中进行永不终结的对话。",
    techniques: "巴赫金称《卡拉马佐夫兄弟》为复调小说的最高典范。每一个人物——包括最邪恶的——都被赋予了独立于作者之外的声音和思想。作者不审判他的人物，而是让他们自己面对自己。小说的叙事结构——多声部、开放式、充满对话——是对单一真理的拒绝和对多元性的肯定。陀思妥耶夫斯基对心理的揭示达到了令人不安的深度：伊凡与魔鬼的对话、斯乜尔加科夫步步为营的推理、德米特里在审讯中的自我暴露——这些场景中的心理真实超越了诊断，进入了对灵魂本身的探索。",
    excerpts: [
      { quote: "如果上帝不存在，一切都是被允许的。", context: "现代虚无主义最著名的表述——伊凡的这句话是整个现代西方思想史的根本焦虑。" },
      { quote: "阿辽沙，永远不要忘记——永远不要忘记你的童年。当你一个人陷入最深的黑暗中时，那些童年的美好记忆会拯救你。", context: "阿辽沙在石头旁对孩子们的讲话——陀思妥耶夫斯基最后的精神遗嘱。" }
    ],
    insights: "《卡拉马佐夫兄弟》要求读者投入全部的生命去阅读——不是因为它晦涩，而是因为它提出的问题无法被安全地留在书页之间。它追问的是我们每一个人都必须面对的问题：道德的基础是什么？如果上帝不存在，我们仍然可以是善良的吗？这部小说没有给出最终的答案——但它以令人震撼的诚实呈现了这个问题全部的重量和深度。",
  },

  "cherry-orchard": {
    id: "cherry-orchard",
    plotSummary: "樱桃园，又名泰山樱桃园，是山东省泰安市泰山风景名胜区下辖的一个管理区暨景区，位于泰山南麓，东起傲徕峰，西至桃花峪，南到横岭山，北接桃花源。该地清同治年间由泰安人鲁泮藻父子始建山庄，广植樱桃，故得名“樱桃园”，其环境清幽，清代赵尔萃在《樱桃园记》中赞其如世外桃源。如今景区拥有三千余亩樱桃园，每年初春樱桃花海如雪，暮春樱桃成熟可供采摘，形成“赏花+采摘”的农旅融合模式。管理区同时承担着辖区森林防火、松材线虫病防控及古树名木保护等职责。\n樱桃园，又名泰山樱桃园，是山东省泰安市泰山风景名胜区下辖的一个管理区暨景区，位于泰山南麓，东起傲徕峰，西至桃花峪，南到横岭山，北接桃花源 [3-4] [8]。该地清同治年间由泰安人鲁泮藻父子始建山庄，广植樱桃，故得名“樱桃园”，其环境清幽，清代赵尔萃在《樱桃园记》中赞其如世外桃源 [5] [9] [14]。",
    plotNodes: [
      { label: "第 1 部分", description: "樱桃园，又名泰山樱桃园，是山东省泰安市泰山风景名胜区下辖的一个管理区暨景区，位于泰山南麓，东起傲徕峰，西至桃花峪，南到横岭山，北接桃花源。该地清同治年间由泰安人鲁泮藻父子始建山庄，广植樱桃，故得名“樱桃园”，其环境清幽，清代赵尔萃在《樱桃园记》中赞其如世外桃源。如今景区拥有三千余亩樱桃园，每年初春樱桃花海如雪，暮春樱桃成熟可供采摘，形成“赏花+采摘”的农旅融合模式。管理区同时承担着辖区森林防火、松" },
      { label: "第 2 部分", description: "泰山樱桃园的名称源于清朝咸丰、同治年间，山麓王庄人鲁泮藻在此拓建鲁氏山庄，并广泛种植樱桃树，形成樱桃林，此地因而得名“樱桃园” [3] [8-9]。鲁泮藻自题山庄为“樱桃精舍”，故又俗称鲁氏别墅 [9]。鲁泮藻受李颙实学思想启发，在此开渠引水、开垦荒地、栽种果树苗木、修建亭馆，其子鲁序孟和鲁序曾继承并拓展山庄建设 [5]。清代光绪年间，赵尔萃在《樱桃园记》中描述此地“竹木茂密，流水潺湲，土壤膏腴，" }
    ],
    themeAnalysis: "樱桃园，又名泰山樱桃园，是山东省泰安市泰山风景名胜区下辖的一个管理区暨景区，位于泰山南麓，东起傲徕峰，西至桃花峪，南到横岭山，北接桃花源。该地清同治年间由泰安人鲁泮藻父子始建山庄，广植樱桃，故得名“樱桃园”，其环境清幽，清代赵尔萃在《樱桃园记》中赞其如世外桃源。如今景区拥有三千余亩樱桃园，每年初春樱桃花海如雪，暮春樱桃成熟可供采摘，形成“赏花+采摘”的农旅融合模式。管理区同时承担着辖区森林防火、松材线虫病防控及古树名木保护等职责。\n樱桃园，又名泰山樱桃园，是山东省泰安市泰山风景名胜区下辖的一个管理区暨景区，位于泰山南麓，东起傲徕峰，西至桃花峪，南到横岭山，北接桃花源 [3-4] [8]。该地清同治年间由泰安人鲁泮藻父子始建山庄，广植樱桃，故得名“樱桃园”，其环境清幽，清代赵尔萃在《樱桃园记》中赞其如世外桃源 [5] [9] [14]。如今景区拥有三千余亩樱桃园，每年初春樱桃花海如雪，暮春樱桃成熟可供采摘，形成“赏花+采摘”的农旅融合模式 [11] [22-23]。管理区同时承担着辖区森林防火、松材线虫病防控及古树名木保护等职责 [1] [15] [17]。",
    techniques: "樱桃园，又名泰山樱桃园，是山东省泰安市泰山风景名胜区下辖的一个管理区暨景区，位于泰山南麓，东起傲徕峰，西至桃花峪，南到横岭山，北接桃花源。该地清同治年间由泰安人鲁泮藻父子始建山庄，广植樱桃，故得名“樱桃园”，其环境清幽，清代赵尔萃在《樱桃园记》中赞其如世外桃源。如今景区拥有三千余亩樱桃园，每年初春樱桃花海如雪，暮春樱桃成熟可供采摘，形成“赏花+采摘”的农旅融合模式。管理区同时承担着辖区森林防火、松材线虫病防控及古树名木保护等职责。\n樱桃园，又名泰山樱桃园，是山东省泰安市泰山风景名胜区下辖的一个管理区暨景区，位于泰山南麓，东起傲徕峰，西至桃花峪，南到横岭山，北接桃花源 [3-4] [8]。该地清同治年间由泰安人鲁泮藻父子始建山庄，广植樱桃，故得名“樱桃园”，其环境清幽，清代赵尔萃在《樱桃园记》中赞其如世外桃源 [5] [9] [14]。",
    excerpts: [
      { quote: "竹木茂密，流水潺湲，土壤膏腴，鸡犬鸣吠，俨然避秦之好桃源", context: "来源：The Cherry Orchard" },
      { quote: "竹木茂密，流水潺湲，土壤膏肥，鸡犬鸣吠，俨然避秦之好桃源", context: "来源：The Cherry Orchard" },
      { quote: "今则田禾茂密，果实缤纷，树可合围，竹可拱把，而池、 而鱼、而藕、而芰，鸣禽上下，水木明瑟。来游者莫不欣然艳羡，谓天下以此佳境。", context: "来源：The Cherry Orchard" }
    ],
    insights: "樱桃园，又名泰山樱桃园，是山东省泰安市泰山风景名胜区下辖的一个管理区暨景区，位于泰山南麓，东起傲徕峰，西至桃花峪，南到横岭山，北接桃花源。该地清同治年间由泰安人鲁泮藻父子始建山庄，广植樱桃，故得名“樱桃园”，其环境清幽，清代赵尔萃在《樱桃园记》中赞其如世外桃源。如今景区拥有三千余亩樱桃园，每年初春樱桃花海如雪，暮春樱桃成熟可供采摘，形成“赏花+采摘”的农旅融合模式。管理区同时承担着辖区森林防火、松材线虫病防控及古树名木保护等职责。\n樱桃园，又名泰山樱桃园，是山东省泰安市泰山风景名胜区下辖的一个管理区暨景区，位于泰山南麓，东起傲徕峰，西至桃花峪，南到横岭山，北接桃花源 [3-4] [8]。该地清同治年间由泰安人鲁泮藻父子始建山庄，广植樱桃，故得名“樱桃园”，其环境清幽，清代赵尔萃在《樱桃园记》中赞其如世外桃源 [5] [9] [14]。",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E6%A8%B1%E6%A1%83%E5%9B%AD", tier: "reference", fetchedAt: "2026-05-21T04:35:44.689Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=The%20Cherry%20Orchard%20Anton%20Chekhov" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=The%20Cherry%20Orchard%20Anton%20Chekhov" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=The%20Cherry%20Orchard" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=The%20Cherry%20Orchard" },
      ],
    },
  },

  // ==================== 欧洲 — 德国/奥地利 ====================

  "faust": {
    id: "faust",
    characters: [
      { name: "Faust", role: "角色", description: "Faust 中的主要角色。" }
    ],
    plotSummary: "《浮士德（Faust）》是德国作家约翰·沃尔夫冈·冯·歌德创作的一部长达12111行的诗剧，第一部出版于1808年，共二十五场，不分幕。第二部共二十七场，分五幕。全剧没有首尾连贯的情节，而是以浮士德思想的发展变化为线索，以德国民间传说为题材，以文艺复兴以来的德国和欧洲社会为背景，写一个新兴资产阶级先进知识分子不满现实，竭力探索人生意义和社会理想的生活道路。是一部现实主义和浪漫主义结合得十分完好的诗剧。《浮士德》是歌德的代表作，是他毕生思想和艺术探索的结晶。《浮士德》的构思和写作，贯串了歌德的一生，1768年开始创作，直到1832年——前后一共64年。《浮士德》构思宏伟，内容复杂，结构庞大，风格多变，融现实主义与浪漫主义于一炉，将真实的描写与奔放的想象、当代的生活与古代的神话传说杂糅一处，善于运用矛盾对比之法安排场面、配置人物、时庄时谐、有讽有颂、形式多样、色彩斑驳，达到了极高的艺术境界。\n《浮士德（Faust）》是德国作家约翰·沃尔夫冈·冯·歌德创作的一部长达12111行的诗剧，第一部出版于1808年，共二十五场，不分幕。第二部共二十七场，分五幕。全剧没有首尾连贯的情节，而是以浮士德思想的发展变化为线索，以德国民间传说为题材，以文艺复兴以来的德国和欧洲社会为背景，写一个新兴资产阶级先进知识分子不满现实，竭力探索人生意义和社会理想的生活道路。是一部现实主义和浪漫主义结合得十分完好的诗剧。\n\n《浮士德》是歌德的代表作，是他毕生思想和艺术探索的结晶。《浮士德》的构思和写作，贯串了歌德的一生，1768年开始创作，直到1832年——前后一共64年。 [1]\n\n《浮士德》构思宏伟，内容复杂，结构庞大，风格多变，融现实主义与浪漫主义于一炉，将真实的描写与奔放的想象、当代的生活与古代的神话传说杂糅一处，善于运用矛盾对比之法安排场面、配置人物、时庄时谐、有讽有颂、形式多样、色彩斑驳，达到了极高的艺术境界。\n\n《浮士德》是用诗剧形式写成的，全书共有12111行，题材采自十六世纪的关于浮士德博士的民间传说。浮士德原是个真实人物，生活在十五世纪（1980年是他诞生五百周年，西德为他树立了纪念碑）。他博学多才，在传说中人们添枝加叶，说有魔鬼帮助，才使他创造出那么多奇迹。这些传说后来成为文学家们经常利用的创作素材。《浮士德》\n\n刚出场的浮士德满腹经纶，久负盛名，但是却对长期的生活状态感到迷茫和",
    plotNodes: [
      { label: "Part 1", description: "《浮士德（Faust）》是德国作家约翰·沃尔夫冈·冯·歌德创作的一部长达12111行的诗剧，第一部出版于1808年，共二十五场，不分幕。第二部共二十七场，分五幕。全剧没有首尾连贯的情节，而是以浮士德思想的发展变化为线索，以德国民间传说为题材，以文艺复兴以来的德国和欧洲社会为背景，写一个新兴资产阶级先进知识分子不满现实，竭力探索人生意义和社会理想的生活道路。是一部现实主义和浪漫主义结合得十分完好的诗" },
      { label: "Part 2", description: "《浮士德》是歌德的代表作，是他毕生思想和艺术探索的结晶。《浮士德》的构思和写作，贯串了歌德的一生，1768年开始创作，直到1832年——前后一共64年。" },
      { label: "Part 3", description: "《浮士德》构思宏伟，内容复杂，结构庞大，风格多变，融现实主义与浪漫主义于一炉，将真实的描写与奔放的想象、当代的生活与古代的神话传说杂糅一处，善于运用矛盾对比之法安排场面、配置人物、时庄时谐、有讽有颂、形式多样、色彩斑驳，达到了极高的艺术境界。" },
      { label: "Part 4", description: "《浮士德》是用诗剧形式写成的，全书共有12111行，题材采自十六世纪的关于浮士德博士的民间传说。浮士德原是个真实人物，生活在十五世纪（1980年是他诞生五百周年，西德为他树立了纪念碑）。他博学多才，在传说中人们添枝加叶，说有魔鬼帮助，才使他创造出那么多奇迹。这些传说后来成为文学家们经常利用的创作素材。《浮士德》" }
    ],
    themeAnalysis: "《浮士德（Faust）》是德国作家约翰·沃尔夫冈·冯·歌德创作的一部长达12111行的诗剧，第一部出版于1808年，共二十五场，不分幕。第二部共二十七场，分五幕。全剧没有首尾连贯的情节，而是以浮士德思想的发展变化为线索，以德国民间传说为题材，以文艺复兴以来的德国和欧洲社会为背景，写一个新兴资产阶级先进知识分子不满现实，竭力探索人生意义和社会理想的生活道路。是一部现实主义和浪漫主义结合得十分完好的诗剧。《浮士德》是歌德的代表作，是他毕生思想和艺术探索的结晶。《浮士德》的构思和写作，贯串了歌德的一生，1768年开始创作，直到1832年——前后一共64年。《浮士德》构思宏伟，内容复杂，结构庞大，风格多变，融现实主义与浪漫主义于一炉，将真实的描写与奔放的想象、当代的生活与古代的神话传说杂糅一处，善于运用矛盾对比之法安排场面、配置人物、时庄时谐、有讽有颂、形式多样、色彩斑驳，达到了极高的艺术境界。\n《浮士德（Faust）》是德国作家约翰·沃尔夫冈·冯·歌德创作的一部长达12111行的诗剧，第一部出版于1808年，共二十五场，不分幕。第二部共二十七场，分五幕。全剧没有首尾连贯的情节，而是以浮士德思想的发展变化为线索，以德国民间传说为题材，以文艺复兴以来的德国和欧洲社会为背景，写一个新兴资产阶级先进知识分子不满现实，竭力探索人生意义和社会理想的生活道路。是一部现实主义和浪漫主义结合得十分完好的诗剧。\n\n《浮士德》是歌德的代表作，是他毕生思想和艺术探索的结晶。《浮士德》的构思和写作，贯串了歌德的一生，1768年开始创作，直到1832年——前后一共64年。 [1]\n\n《浮士德》构思宏伟，内容复杂，结构庞大，风格多变，融现实主义与浪漫主义于一炉，将真实的描写与奔放的想象、当代的生活与古代的神话传说杂糅一处，善于运用矛盾对比之法安排场面、配置人物、时庄时谐、有讽有颂、形式多样、色彩斑驳，达到了极",
    techniques: "",
    excerpts: [],
    insights: "《浮士德（Faust）》是德国作家约翰·沃尔夫冈·冯·歌德创作的一部长达12111行的诗剧，第一部出版于1808年，共二十五场，不分幕。第二部共二十七场，分五幕。全剧没有首尾连贯的情节，而是以浮士德思想的发展变化为线索，以德国民间传说为题材，以文艺复兴以来的德国和欧洲社会为背景，写一个新兴资产阶级先进知识分子不满现实，竭力探索人生意义和社会理想的生活道路。是一部现实主义和浪漫主义结合得十分完好的诗剧。《浮士德》是歌德的代表作，是他毕生思想和艺术探索的结晶。《浮士德》的构思和写作，贯串了歌德的一生，1768年开始创作，直到1832年——前后一共64年。《浮士德》构思宏伟，内容复杂，结构庞大，风格多变，融现实主义与浪漫主义于一炉，将真实的描写与奔放的想象、当代的生活与古代的神话传说杂糅一处，善于运用矛盾对比之法安排场面、配置人物、时庄时谐、有讽有颂、形式多样、色彩斑驳，达到了极高的艺术境界。\n《浮士德（Faust）》是德国作家约翰·沃尔夫冈·冯·歌德创作的一部长达12111行的诗剧，第一部出版于1808年，共二十五场，不分幕。第二部共二十七场，分五幕。全剧没有首尾连贯的情节，而是以浮士德思想的发展变化为线索，以德国民间传说为题材，以文艺复兴以来的德国和欧洲社会为背景，写一个新兴资产阶级先进知识分子不满现实，竭力探索人生意义和社会理想的生活道路。是一部现实主义和浪漫主义结合得十分完好的诗",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E6%B5%AE%E5%A3%AB%E5%BE%B7", tier: "reference", fetchedAt: "2026-05-21T04:29:27.012Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "magic-mountain": {
    id: "magic-mountain",
    plotSummary: "《魔山》是诺贝尔文学奖获得者、德国作家托马斯·曼创作的长篇小说，创作始于1912年，1924年出版。灵感源于作者妻子在瑞士达沃斯疗养院的经历，后因一战中断写作，最终历时十二年完成。小说以大学生汉斯·卡斯托尔普在疗养院七年的经历为主线，通过他与普鲁士军官、荷兰殖民者等各色人物的交往，展现欧洲封建贵族与资产阶级的精神困境。疗养院内充斥着弗洛伊德学说、招魂术等时代思潮，主人公在意大利人文主义者塞塔姆布里尼与耶稣会士纳夫塔的思想交锋中经历精神探索，最终在一战爆发后觉醒下山。作品通过梦境描写与心理分析构建象征资本主义文明衰落的封闭空间，深刻揭示颓废主义与法西斯主义的关联。\n《魔山》是诺贝尔文学奖获得者、德国作家托马斯·曼创作的长篇小说，创作始于1912年，1924年出版。灵感源于作者妻子在瑞士达沃斯疗养院的经历，后因一战中断写作，最终历时十二年完成 [3] [9]。\n\n小说以大学生汉斯·卡斯托尔普在疗养院七年的经历为主线，通过他与普鲁士军官、荷兰殖民者等各色人物的交往，展现欧洲封建贵族与资产阶级的精神困境 [2] [7]。疗养院内充斥着弗洛伊德学说、招魂术等时代思潮，主人公在意大利人文主义者塞塔姆布里尼与耶稣会士纳夫塔的思想交锋中经历精神探索，最终在一战爆发后觉醒下山 [3-5]。\n\n作品通过梦境描写与心理分析构建象征资本主义文明衰落的封闭空间，深刻揭示颓废主义与法西斯主义的关联 [1] [7-8]。\n\n大学生汉斯来到高山肺病疗养院探望表兄约阿希姆，不料自己也染上了肺病，只好留下治疗。疗养院里的人来自四面八方，性格迥然，思想各异。汉斯是个有理想的青年，可是同这些人交往后，思想变得混乱，精神变得消沉了；俄国女子克拉芙吉亚更使他神魂颠倒。他忘记了事业和重任，高山成了一座“魔山”，他深陷其中不能自拔。转眼七年过去了，表兄病死，克拉芙吉亚离去，那些交往甚密的朋友也各奔东西，生活把他的幻想一个个击得粉碎，使他感到痛苦和孤独。世界大战的炮火把他震醒，回首往事，汉斯觉得自己是在“魔山“上昏睡了七年，于是他毅然决然地踏上了奔赴前线的征途。 [2]\n\n1912年5月至6月期间，托马斯·曼的妻子卡塔林娜因肺部染疾，在瑞士达沃斯肺病疗养院住了三星期左右，他也陪同前往。在此期间，作家对疗养院的各种生活和各色人物作了精心观察，《魔山》的素材即由此而得。他从1912年开始执笔写这部巨著，1914年由于第",
    plotNodes: [
      { label: "Part 1", description: "《魔山》是诺贝尔文学奖获得者、德国作家托马斯·曼创作的长篇小说，创作始于1912年，1924年出版。灵感源于作者妻子在瑞士达沃斯疗养院的经历，后因一战中断写作，最终历时十二年完成。小说以大学生汉斯·卡斯托尔普在疗养院七年的经历为主线，通过他与普鲁士军官、荷兰殖民者等各色人物的交往，展现欧洲封建贵族与资产阶级的精神困境。疗养院内充斥着弗洛伊德学说、招魂术等时代思潮，主人公在意大利人文主义者塞塔姆布里" },
      { label: "Part 2", description: "小说以大学生汉斯·卡斯托尔普在疗养院七年的经历为主线，通过他与普鲁士军官、荷兰殖民者等各色人物的交往，展现欧洲封建贵族与资产阶级的精神困境 [2] [7]。疗养院内充斥着弗洛伊德学说、招魂术等时代思潮，主人公在意大利人文主义者塞塔姆布里尼与耶稣会士纳夫塔的思想交锋中经历精神探索，最终在一战爆发后觉醒下山 [3-5]。" },
      { label: "Part 3", description: "作品通过梦境描写与心理分析构建象征资本主义文明衰落的封闭空间，深刻揭示颓废主义与法西斯主义的关联 [1] [7-8]。" },
      { label: "Part 4", description: "大学生汉斯来到高山肺病疗养院探望表兄约阿希姆，不料自己也染上了肺病，只好留下治疗。疗养院里的人来自四面八方，性格迥然，思想各异。汉斯是个有理想的青年，可是同这些人交往后，思想变得混乱，精神变得消沉了；俄国女子克拉芙吉亚更使他神魂颠倒。他忘记了事业和重任，高山成了一座“魔山”，他深陷其中不能自拔。转眼七年过去了，表兄病死，克拉芙吉亚离去，那些交往甚密的朋友也各奔东西，生活把他的幻想一个个击得粉碎，使" },
      { label: "Part 5", description: "1912年5月至6月期间，托马斯·曼的妻子卡塔林娜因肺部染疾，在瑞士达沃斯肺病疗养院住了三星期左右，他也陪同前往。在此期间，作家对疗养院的各种生活和各色人物作了精心观察，《魔山》的素材即由此而得。他从1912年开始执笔写这部巨著，1914年由于第" }
    ],
    themeAnalysis: "《魔山》是诺贝尔文学奖获得者、德国作家托马斯·曼创作的长篇小说，创作始于1912年，1924年出版。灵感源于作者妻子在瑞士达沃斯疗养院的经历，后因一战中断写作，最终历时十二年完成。小说以大学生汉斯·卡斯托尔普在疗养院七年的经历为主线，通过他与普鲁士军官、荷兰殖民者等各色人物的交往，展现欧洲封建贵族与资产阶级的精神困境。疗养院内充斥着弗洛伊德学说、招魂术等时代思潮，主人公在意大利人文主义者塞塔姆布里尼与耶稣会士纳夫塔的思想交锋中经历精神探索，最终在一战爆发后觉醒下山。作品通过梦境描写与心理分析构建象征资本主义文明衰落的封闭空间，深刻揭示颓废主义与法西斯主义的关联。\n《魔山》是诺贝尔文学奖获得者、德国作家托马斯·曼创作的长篇小说，创作始于1912年，1924年出版。灵感源于作者妻子在瑞士达沃斯疗养院的经历，后因一战中断写作，最终历时十二年完成 [3] [9]。\n\n小说以大学生汉斯·卡斯托尔普在疗养院七年的经历为主线，通过他与普鲁士军官、荷兰殖民者等各色人物的交往，展现欧洲封建贵族与资产阶级的精神困境 [2] [7]。疗养院内充斥着弗洛伊德学说、招魂术等时代思潮，主人公在意大利人文主义者塞塔姆布里尼与耶稣会士纳夫塔的思想交锋中经历精神探索，最终在一战爆发后觉醒下山 [3-5]。\n\n作品通过梦境描写与心理分析构建象征资本主义文明衰落的封闭空间，深刻揭示颓废主义与法西斯主义的关联 [1] [7-8]。\n\n大学生汉斯来到高山肺病疗养院探望表兄约阿希姆，不料自己也染上了肺病，只好留下治疗。疗养院里的人来自四面八方，性格迥然，思想各异。汉斯是个有理想的青年，可是同这些人交往后，思想变得混乱，精神变得消沉了；俄国女子克拉芙吉亚更使他神魂颠倒。他忘记了事业和重任，高山成了一座“魔山”，他深陷其中不能自拔。转眼七年过去了，表兄病死，克拉芙吉亚离去，那些交往甚密的朋友也各奔东西，生活把他的幻想一个",
    techniques: "",
    excerpts: [],
    insights: "《魔山》是诺贝尔文学奖获得者、德国作家托马斯·曼创作的长篇小说，创作始于1912年，1924年出版。灵感源于作者妻子在瑞士达沃斯疗养院的经历，后因一战中断写作，最终历时十二年完成。小说以大学生汉斯·卡斯托尔普在疗养院七年的经历为主线，通过他与普鲁士军官、荷兰殖民者等各色人物的交往，展现欧洲封建贵族与资产阶级的精神困境。疗养院内充斥着弗洛伊德学说、招魂术等时代思潮，主人公在意大利人文主义者塞塔姆布里尼与耶稣会士纳夫塔的思想交锋中经历精神探索，最终在一战爆发后觉醒下山。作品通过梦境描写与心理分析构建象征资本主义文明衰落的封闭空间，深刻揭示颓废主义与法西斯主义的关联。\n《魔山》是诺贝尔文学奖获得者、德国作家托马斯·曼创作的长篇小说，创作始于1912年，1924年出版。灵感源于作者妻子在瑞士达沃斯疗养院的经历，后因一战中断写作，最终历时十二年完成 [3] [9]。\n\n小说以大学生汉斯·卡斯托尔普在疗养院七年的经历为主线，通过他与普鲁士军官、荷兰殖民者等各色人物的交往，展现欧洲封建贵族与资产阶级的精神困境 [2] [7]。疗养院内充斥着弗洛伊德学说、招魂术等时代思潮，主人公在意大利人文主义者塞塔姆布里尼与耶稣会士纳夫塔的思想交锋中经历精神探索，最终在一战爆发后觉醒下山 [3-5]。\n\n作品通过梦境描写与心理分析构建象征资本主义文明衰落的封闭空间，深刻揭示颓废主义与法西斯主义的关联 [1] [",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E9%AD%94%E5%B1%B1", tier: "reference", fetchedAt: "2026-05-21T04:48:59.551Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "the-trial": {
    id: "the-trial",
    characters: [
      { name: "Hermes", role: "角色", description: "\"The Trial\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Psychopomp", role: "角色", description: "\"The Trial\" 中出现的角色。更多信息请通过搜索链接核实。" }
    ],
    plotSummary: "审判是塔罗牌大阿卡那的第二十一张牌，也是倒数第二张牌，也是塔罗牌的【20】号牌。Hermes the Psychopomp，他也是亡灵的指引者。审判——诱惑由图像可以看到这就是圣经中审判日的意念，世界原有的程序完全毁灭，而天使响起他的号角，死者由地面重生，要明白审判这张牌是自我对原本的自己接受对错误的批判，才有新的生机再来。“审判”具有唤醒的能力，它能使人激发出不曾察觉过的潜能。但面对力量，每个人都需要“自我审判”，反省并总结自己的问题。塔罗牌由22张大阿卡那牌和56张小阿卡那牌组成。大阿卡那牌就如同它的名字一样，是用来解释命运的大致运势，每一张牌都反映着人生的不同际遇。\n审判是塔罗牌大阿卡那的第二十一张牌，也是倒数第二张牌，也是塔罗牌的【20】号牌。\n\nHermes the Psychopomp，他也是亡灵的指引者。",
    plotNodes: [
      { label: "第 1 部分", description: "审判是塔罗牌大阿卡那的第二十一张牌，也是倒数第二张牌，也是塔罗牌的【20】号牌。Hermes the Psychopomp，他也是亡灵的指引者。审判——诱惑由图像可以看到这就是圣经中审判日的意念，世界原有的程序完全毁灭，而天使响起他的号角，死者由地面重生，要明白审判这张牌是自我对原本的自己接受对错误的批判，才有新的生机再来。“审判”具有唤醒的能力，它能使人激发出不曾察觉过的潜能。但面对力量，每个人" },
      { label: "第 2 部分", description: "Hermes the Psychopomp，他也是亡灵的指引者。审判——诱惑由图像可以看到这就是圣经中审判日的意念，世界原有的程序完全毁灭，而天使响起他的号角，死者由地面重生，要明白审判这张牌是自我对原本的自己接受对错误的批判，才有新的生机再来。" },
      { label: "第 3 部分", description: "“审判”具有唤醒的能力，它能使人激发出不曾察觉过的潜能。但面对力量，每个人都需要“自我审判”，反省并总结自己的问题。" },
      { label: "第 4 部分", description: "塔罗牌由22张大阿卡那牌和56张小阿卡那牌组成。大阿卡那牌就如同它的名字一样，是用来解释命运的大致运势，每一张牌都反映着人生的不同际遇。" },
      { label: "第 5 部分", description: "从牌面中可以看到，天使已经吹响了号角，在传播着上天的福音。而在声声催人振奋的号角中，沉睡已久的灵魂一个个走出了自己内心的坟墓，或者说那是来自内心的困惑。他们站立在天使的翅膀下，满怀着一颗感恩的心，细心地聆听着上天的福音。" }
    ],
    themeAnalysis: "审判是塔罗牌大阿卡那的第二十一张牌，也是倒数第二张牌，也是塔罗牌的【20】号牌。Hermes the Psychopomp，他也是亡灵的指引者。审判——诱惑由图像可以看到这就是圣经中审判日的意念，世界原有的程序完全毁灭，而天使响起他的号角，死者由地面重生，要明白审判这张牌是自我对原本的自己接受对错误的批判，才有新的生机再来。“审判”具有唤醒的能力，它能使人激发出不曾察觉过的潜能。但面对力量，每个人都需要“自我审判”，反省并总结自己的问题。塔罗牌由22张大阿卡那牌和56张小阿卡那牌组成。大阿卡那牌就如同它的名字一样，是用来解释命运的大致运势，每一张牌都反映着人生的不同际遇。\n审判是塔罗牌大阿卡那的第二十一张牌，也是倒数第二张牌，也是塔罗牌的【20】号牌。\n\nHermes the Psychopomp，他也是亡灵的指引者。审判——诱惑由图像可以看到这就是圣经中审判日的意念，世界原有的程序完全毁灭，而天使响起他的号角，死者由地面重生，要明白审判这张牌是自我对原本的自己接受对错误的批判，才有新的生机再来。\n\n“审判”具有唤醒的能力，它能使人激发出不曾察觉过的潜能。",
    techniques: "审判是塔罗牌大阿卡那的第二十一张牌，也是倒数第二张牌，也是塔罗牌的【20】号牌。Hermes the Psychopomp，他也是亡灵的指引者。审判——诱惑由图像可以看到这就是圣经中审判日的意念，世界原有的程序完全毁灭，而天使响起他的号角，死者由地面重生，要明白审判这张牌是自我对原本的自己接受对错误的批判，才有新的生机再来。“审判”具有唤醒的能力，它能使人激发出不曾察觉过的潜能。但面对力量，每个人都需要“自我审判”，反省并总结自己的问题。塔罗牌由22张大阿卡那牌和56张小阿卡那牌组成。大阿卡那牌就如同它的名字一样，是用来解释命运的大致运势，每一张牌都反映着人生的不同际遇。\n审判是塔罗牌大阿卡那的第二十一张牌，也是倒数第二张牌，也是塔罗牌的【20】号牌。\n\nHermes the Psychopomp，他也是亡灵的指引者。",
    excerpts: [],
    insights: "审判是塔罗牌大阿卡那的第二十一张牌，也是倒数第二张牌，也是塔罗牌的【20】号牌。Hermes the Psychopomp，他也是亡灵的指引者。审判——诱惑由图像可以看到这就是圣经中审判日的意念，世界原有的程序完全毁灭，而天使响起他的号角，死者由地面重生，要明白审判这张牌是自我对原本的自己接受对错误的批判，才有新的生机再来。“审判”具有唤醒的能力，它能使人激发出不曾察觉过的潜能。但面对力量，每个人都需要“自我审判”，反省并总结自己的问题。塔罗牌由22张大阿卡那牌和56张小阿卡那牌组成。大阿卡那牌就如同它的名字一样，是用来解释命运的大致运势，每一张牌都反映着人生的不同际遇。\n审判是塔罗牌大阿卡那的第二十一张牌，也是倒数第二张牌，也是塔罗牌的【20】号牌。\n\nHermes the Psychopomp，他也是亡灵的指引者。",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%AE%A1%E5%88%A4", tier: "reference", fetchedAt: "2026-05-21T04:32:29.250Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
        { label: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/7849", tier: "original_text", fetchedAt: "2026-05-21T04:32:47.325Z", contributedFields: ["insights"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=The%20Trial%20Franz%20Kafka" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=The%20Trial%20Franz%20Kafka" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=The%20Trial" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=The%20Trial" },
      ],
    },
  },

  "metamorphosis": {
    id: "metamorphosis",
    plotSummary: "《变形记》是奥地利作家弗兰兹·卡夫卡创作的中篇小说。《变形记》完成于1912年，1915年首次发表在月刊《白色书刊》10 月号上。《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献时，家人一反之前对他的尊敬态度，逐渐显现出冷漠、嫌弃、憎恶的面孔。父亲恶狠狠地用苹果打他，母亲吓得晕倒，妹妹厌弃他。渐渐地，萨姆沙远离了社会，最后孤独痛苦地在饥饿中默默地死去。卡夫卡以自己独特的艺术笔调，用象征、细节描写等手法对“人变成甲虫事件”进行艺术再造，使作品呈现出荒诞、不可思议的基调。《变形记》反映了20世纪初刚进入工业化时代的人们对生活和命运的焦虑与恐惧，其中承载着卡夫卡对于“孤独”与“异化”的深刻思\n《变形记》是奥地利作家弗兰兹·卡夫卡创作的中篇小说。《变形记》完成于1912年，1915年首次发表在月刊《白色书刊》10 月号上。 [1]\n\n《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献时，家人一反之前对他的尊敬态度，逐渐显现出冷漠、嫌弃、憎恶的面孔。父亲恶狠狠地用苹果打他，母亲吓得晕倒，妹妹厌弃他。渐渐地，萨姆沙远离了社会，最后孤独痛苦地在饥饿中默默地死去。\n\n卡夫卡以自己独特的艺术笔调，用象征、细节描写等手法对“人变成甲虫事件”进行艺术再造，使作品呈现出荒诞、不可思议的基调。《变形记》反映了20世纪初刚进入工业化时代的人们对生活和命运的焦虑与恐惧，其中承载着卡夫卡对于“孤独”与“异化”的深刻思考。 [23]小说以主人公变为甲虫这一荒诞故事反映了世人唯利是图、对金钱顶礼膜拜、对真情人性不屑一顾，最终被社会挤压变形的现实，反映了资本主义制度下真实的社会生活。 [2]\n\n卡夫卡生活于第一次世界大战前后动荡不安、物质主义盛行的年代， [5]他一生中绝大部分时间生活在捷克共和国的首都布拉格，而当时的布拉格正处在激烈的民族冲突与动荡中，“社会主义、犹太主义、德国民族主义、玩世不恭",
    plotNodes: [
      { label: "Part 1", description: "《变形记》是奥地利作家弗兰兹·卡夫卡创作的中篇小说。《变形记》完成于1912年，1915年首次发表在月刊《白色书刊》10 月号上。《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献时，家人一反之" },
      { label: "Part 2", description: "《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献时，家人一反之前对他的尊敬态度，逐渐显现出冷漠、嫌弃、憎恶的面孔。父亲恶狠狠地用苹果打他，母亲吓得晕倒，妹妹厌弃他。渐渐地，萨姆沙远离了社会，最" },
      { label: "Part 3", description: "卡夫卡以自己独特的艺术笔调，用象征、细节描写等手法对“人变成甲虫事件”进行艺术再造，使作品呈现出荒诞、不可思议的基调。《变形记》反映了20世纪初刚进入工业化时代的人们对生活和命运的焦虑与恐惧，其中承载着卡夫卡对于“孤独”与“异化”的深刻思考。" },
      { label: "Part 4", description: "卡夫卡生活于第一次世界大战前后动荡不安、物质主义盛行的年代， [5]他一生中绝大部分时间生活在捷克共和国的首都布拉格，而当时的布拉格正处在激烈的民族冲突与动荡中，“社会主义、犹太主义、德国民族主义、玩世不恭" }
    ],
    themeAnalysis: "《变形记》是奥地利作家弗兰兹·卡夫卡创作的中篇小说。《变形记》完成于1912年，1915年首次发表在月刊《白色书刊》10 月号上。《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献时，家人一反之前对他的尊敬态度，逐渐显现出冷漠、嫌弃、憎恶的面孔。父亲恶狠狠地用苹果打他，母亲吓得晕倒，妹妹厌弃他。渐渐地，萨姆沙远离了社会，最后孤独痛苦地在饥饿中默默地死去。卡夫卡以自己独特的艺术笔调，用象征、细节描写等手法对“人变成甲虫事件”进行艺术再造，使作品呈现出荒诞、不可思议的基调。《变形记》反映了20世纪初刚进入工业化时代的人们对生活和命运的焦虑与恐惧，其中承载着卡夫卡对于“孤独”与“异化”的深刻思\n《变形记》是奥地利作家弗兰兹·卡夫卡创作的中篇小说。《变形记》完成于1912年，1915年首次发表在月刊《白色书刊》10 月号上。 [1]\n\n《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献时，家人一反之前对他的尊敬态度，逐渐显现出冷漠、嫌弃、憎恶的面孔。父亲恶狠狠地用苹果打他，母亲吓得晕倒，妹妹厌弃他。渐渐地，萨姆沙远离了社会，最后孤独痛苦地在饥饿中默默地死去。\n\n卡夫卡以自己独特的艺术笔调，用象征、细节描写等手法对“人变成甲虫事件”进行艺术再造，使作品呈现出荒诞、不可思议的基调。《变形记》反映了20世纪初刚进入工业化时代的人们对生活和命运的焦虑与恐惧，其中承载着卡夫卡对于“孤独”",
    techniques: "",
    excerpts: [],
    insights: "《变形记》是奥地利作家弗兰兹·卡夫卡创作的中篇小说。《变形记》完成于1912年，1915年首次发表在月刊《白色书刊》10 月号上。《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献时，家人一反之前对他的尊敬态度，逐渐显现出冷漠、嫌弃、憎恶的面孔。父亲恶狠狠地用苹果打他，母亲吓得晕倒，妹妹厌弃他。渐渐地，萨姆沙远离了社会，最后孤独痛苦地在饥饿中默默地死去。卡夫卡以自己独特的艺术笔调，用象征、细节描写等手法对“人变成甲虫事件”进行艺术再造，使作品呈现出荒诞、不可思议的基调。《变形记》反映了20世纪初刚进入工业化时代的人们对生活和命运的焦虑与恐惧，其中承载着卡夫卡对于“孤独”与“异化”的深刻思\n《变形记》是奥地利作家弗兰兹·卡夫卡创作的中篇小说。《变形记》完成于1912年，1915年首次发表在月刊《白色书刊》10 月号上。 [1]\n\n《变形记》中主人公格里高尔·萨姆沙在一家公司任旅行推销员，长年奔波在外，辛苦支撑着整个家庭的花销。当萨姆沙还能以微薄的薪金供养他那薄情寡义的家人时，他是家中受到尊敬的长子，父母夸奖他，妹妹爱戴他。当有一天他变成了甲虫，丧失了劳动力，对这个家再也没有物质贡献",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%8F%98%E5%BD%A2%E8%AE%B0", tier: "reference", fetchedAt: "2026-05-21T04:39:58.669Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "waiting-for-godot": {
    id: "waiting-for-godot",
    characters: [
      { name: "Godot", role: "角色", description: "Waiting for Godot 中的主要角色。" }
    ],
    plotSummary: "《等待戈多》（En attendant Godot），又译作《等待果陀》，是爱尔兰现代主义剧作家塞缪尔·贝克特的两幕悲喜剧，1953年首演。《等待戈多》表现的是一个“什么也没有发生，谁也没有来，谁也没有去’’的悲剧。作品着重表现人的心态、心理活动过程以及人的心理活动障碍。作品中的人物没有鲜明的性格，作品没有连贯的故事情节。《等待戈多》是戏剧史上真正的革新，也是第一部演出成功的荒诞派戏剧。\n《等待戈多》（En attendant Godot），又译作《等待果陀》，是爱尔兰现代主义剧作家塞缪尔·贝克特的两幕悲喜剧，1953年首演。\n\n《等待戈多》表现的是一个“什么也没有发生，谁也没有来，谁也没有去’’的悲剧。作品着重表现人的心态、心理活动过程以及人的心理活动障碍。作品中的人物没有鲜明的性格，作品没有连贯的故事情节。 [1]《等待戈多》是戏剧史上真正的革新，也是第一部演出成功的荒诞派戏剧。\n\n第一幕，乡间一条路。一棵树；黄昏。老流浪汉爱斯特拉冈（昵称戈戈）坐在一个土墩上脱靴子，累得筋疲力尽也没能脱下来。另一个老流浪汉弗拉季米尔（昵称狄狄）走上来，两个老朋友交谈几句。狄狄更爱说话，老讲些似乎暗藏哲理的话：“希望迟迟不来，苦死了等的人。你就是这样一个人，脚出了毛病，反倒责怪靴子。”因为无事可做，戈戈提议说：咱们走吧。狄狄回答：咱们不能。戈戈：干吗不能？狄狄：咱们在等待戈多。原来这就是他们来到此地的唯一目的，至于戈多是谁，为什么要等他，连他们自己也搞不清楚。在等待中，他们没事找事，没话找话，吵架，上吊，啃胡萝卜。突然传来一阵响声，一个人手拿鞭子，驱赶着另一个被绳子拴住脖子的人，出现在他们面前。两人一阵惊喜，却马上发现来人并非戈多，而叫做波卓。波卓手里牵的那个人，叫幸运儿。戈戈和狄狄眼看着波卓残酷虐待幸运儿，又聆听幸运儿一番胡言乱语地“有声思想”。之后，波卓赶着幸运儿离去，一个孩子上来报告说，戈多今晚不来了，明天晚上准来。这时夜幕降临，戈戈再次提议离开，狄狄表示同意，但他们仍然坐着不动。幕落。 [2]\n\n剧作中，爱斯特拉冈和弗拉季米尔时而说戈多“可以说是个老相识”，时而又说：“哪儿说得上，我们简直不认识他”，“就是见了他的面也不认得他”。两个流浪汉似乎见过他，但又认不准、说不清。但他们认定只要戈多一来，他们便可“得救”。这样看来，戈多起码是能给他们带来希望的救星。如果说两个流浪汉",
    plotNodes: [
      { label: "Part 1", description: "《等待戈多》（En attendant Godot），又译作《等待果陀》，是爱尔兰现代主义剧作家塞缪尔·贝克特的两幕悲喜剧，1953年首演。《等待戈多》表现的是一个“什么也没有发生，谁也没有来，谁也没有去’’的悲剧。作品着重表现人的心态、心理活动过程以及人的心理活动障碍。作品中的人物没有鲜明的性格，作品没有连贯的故事情节。《等待戈多》是戏剧史上真正的革新，也是第一部演出成功的荒诞派戏剧。" },
      { label: "Part 2", description: "《等待戈多》表现的是一个“什么也没有发生，谁也没有来，谁也没有去’’的悲剧。作品着重表现人的心态、心理活动过程以及人的心理活动障碍。作品中的人物没有鲜明的性格，作品没有连贯的故事情节。" },
      { label: "Part 3", description: "第一幕，乡间一条路。一棵树；黄昏。老流浪汉爱斯特拉冈（昵称戈戈）坐在一个土墩上脱靴子，累得筋疲力尽也没能脱下来。另一个老流浪汉弗拉季米尔（昵称狄狄）走上来，两个老朋友交谈几句。狄狄更爱说话，老讲些似乎暗藏哲理的话：“希望迟迟不来，苦死了等的人。你就是这样一个人，脚出了毛病，反倒责怪靴子。”因为无事可做，戈戈提议说：咱们走吧。狄狄回答：咱们不能。戈戈：干吗不能？狄狄：咱们在等待戈多。原来这就是他们来" },
      { label: "Part 4", description: "剧作中，爱斯特拉冈和弗拉季米尔时而说戈多“可以说是个老相识”，时而又说：“哪儿说得上，我们简直不认识他”，“就是见了他的面也不认得他”。两个流浪汉似乎见过他，但又认不准、说不清。但他们认定只要戈多一来，他们便可“得救”。这样看来，戈多起码是能给他们带来希望的救星。如果说两个流浪汉" }
    ],
    themeAnalysis: "《等待戈多》（En attendant Godot），又译作《等待果陀》，是爱尔兰现代主义剧作家塞缪尔·贝克特的两幕悲喜剧，1953年首演。《等待戈多》表现的是一个“什么也没有发生，谁也没有来，谁也没有去’’的悲剧。作品着重表现人的心态、心理活动过程以及人的心理活动障碍。作品中的人物没有鲜明的性格，作品没有连贯的故事情节。《等待戈多》是戏剧史上真正的革新，也是第一部演出成功的荒诞派戏剧。\n《等待戈多》（En attendant Godot），又译作《等待果陀》，是爱尔兰现代主义剧作家塞缪尔·贝克特的两幕悲喜剧，1953年首演。\n\n《等待戈多》表现的是一个“什么也没有发生，谁也没有来，谁也没有去’’的悲剧。作品着重表现人的心态、心理活动过程以及人的心理活动障碍。作品中的人物没有鲜明的性格，作品没有连贯的故事情节。 [1]《等待戈多》是戏剧史上真正的革新，也是第一部演出成功的荒诞派戏剧。\n\n第一幕，乡间一条路。一棵树；黄昏。老流浪汉爱斯特拉冈（昵称戈戈）坐在一个土墩上脱靴子，累得筋疲力尽也没能脱下来。另一个老流浪汉弗拉季米尔（昵称狄狄）走上来，两个老朋友交谈几句。狄狄更爱说话，老讲些似乎暗藏哲理的话：“希望迟迟不来，苦死了等的人。你就是这样一个人，脚出了毛病，反倒责怪靴子。”因为无事可做，戈戈提议说：咱们走吧。狄狄回答：咱们不能。戈戈：干吗不能？狄狄：咱们在等待戈多。原来这就是他们来到此地的唯一目的，至于戈多是谁，为什么要等他，连他们自己也搞不清楚。在等待中，他们没事找事，没话找话，吵架，上吊，啃胡萝卜。突然传来一阵响声，一个人手拿鞭子，驱赶着另一个被绳子拴住脖子的人，出现在他们面前。两人一阵惊喜，却马上发现来人并非戈多，而叫做波卓。波卓手里牵的那个人，叫幸运儿。戈戈和狄狄眼看着波卓残酷虐待幸运儿，又聆听幸运儿一番胡言乱语地“有声思想”。之后，波卓赶着幸运儿离去，一个孩子上来报",
    techniques: "",
    excerpts: [],
    insights: "《等待戈多》（En attendant Godot），又译作《等待果陀》，是爱尔兰现代主义剧作家塞缪尔·贝克特的两幕悲喜剧，1953年首演。《等待戈多》表现的是一个“什么也没有发生，谁也没有来，谁也没有去’’的悲剧。作品着重表现人的心态、心理活动过程以及人的心理活动障碍。作品中的人物没有鲜明的性格，作品没有连贯的故事情节。《等待戈多》是戏剧史上真正的革新，也是第一部演出成功的荒诞派戏剧。\n《等待戈多》（En attendant Godot），又译作《等待果陀》，是爱尔兰现代主义剧作家塞缪尔·贝克特的两幕悲喜剧，1953年首演。\n\n《等待戈多》表现的是一个“什么也没有发生，谁也没有来，谁也没有去’’的悲剧。作品着重表现人的心态、心理活动过程以及人的心理活动障碍。作品中的人物没有鲜明的性格，作品没有连贯的故事情节。 [1]《等待戈多》是戏剧史上真正的革新，也是第一部演出成功的荒诞派戏剧。\n\n第一幕，乡间一条路。一棵树；黄昏。老流浪汉爱斯特拉冈（昵称戈戈）坐在一个土墩上脱靴子，累得筋疲力尽也没能脱下来。另一个老流浪汉弗拉季米尔（昵称狄狄）走上来，两个老朋友交谈几句。狄狄更爱说话，老讲些似乎暗藏哲理的话：“希望迟迟不来，苦死了等的人。你就是这样一个人，脚出了毛病，反倒责怪靴子。”因为无事可做，戈戈提议说：咱们走吧。狄狄回答：咱们不能。戈戈：干吗不能？狄狄：咱们在等待戈多。原来这就是他们来到",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E7%AD%89%E5%BE%85%E6%88%88%E5%A4%9A", tier: "reference", fetchedAt: "2026-05-21T04:48:27.204Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "dolls-house": {
    id: "dolls-house",
    characters: [
      { name: "Subjects", role: "角色", description: "\"A Doll's House\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Drama", role: "角色", description: "\"A Doll's House\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Marriage", role: "角色", description: "\"A Doll's House\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Norwegian", role: "角色", description: "\"A Doll's House\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Translations", role: "角色", description: "\"A Doll's House\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "English", role: "角色", description: "\"A Doll's House\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Wives", role: "角色", description: "\"A Doll's House\" 中出现的角色。更多信息请通过搜索链接核实。" }
    ],
    plotSummary: "《玩偶之家》是作家张系国创作的科幻小说，以人类文明崩溃后机器人主宰世界为背景。作品通过人机地位倒置的设定，探讨了技术发展中的人类主体性危机，并融入对中国传统文化元素的运用。该小说在科幻框架下坚守“文以载道”理念，既批判技术异化现象，又通过机器人遵循“保护人类”原则的情节暗示人机和谐共处的可能性。\n《玩偶之家》是作家张系国创作的科幻小说，以人类文明崩溃后机器人主宰世界为背景。作品通过人机地位倒置的设定，探讨了技术发展中的人类主体性危机，并融入对中国传统文化元素的运用。该小说在科幻框架下坚守“文以载道”理念，既批判技术异化现象，又通过机器人遵循“保护人类”原则的情节暗示人机和谐共处的可能性。\n\n「玩偶之家」选自张系国的科幻小说「星云组曲」。「星云组曲」由十个故事构成，勾绘从二十世纪到二百世纪的未来世界，这十个故事是：（1）归。（2）望子成龙。（3）岂有此理。（4）翦梦奇缘。（5）铜像城。",
    plotNodes: [
      { label: "第 1 部分", description: "《玩偶之家》是作家张系国创作的科幻小说，以人类文明崩溃后机器人主宰世界为背景。作品通过人机地位倒置的设定，探讨了技术发展中的人类主体性危机，并融入对中国传统文化元素的运用。该小说在科幻框架下坚守“文以载道”理念，既批判技术异化现象，又通过机器人遵循“保护人类”原则的情节暗示人机和谐共处的可能性。 《玩偶之家》是作家张系国创作的科幻小说，以人类文明崩溃后机器人主宰世界为背景。作品通过人机地位倒置的设" },
      { label: "第 2 部分", description: "「玩偶之家」选自张系国的科幻小说「星云组曲」。「星云组曲」由十个故事构成，勾绘从二十世纪到二百世纪的未来世界，这十个故事是：（1）归。（2）望子成龙。（3）岂有此理。（4）翦梦奇缘。（5）铜像城。（6）青春泉。（7）翻译绝唱。（8）倾城之恋。（9）玩偶之家。（10）归。" }
    ],
    themeAnalysis: "《玩偶之家》是作家张系国创作的科幻小说，以人类文明崩溃后机器人主宰世界为背景。作品通过人机地位倒置的设定，探讨了技术发展中的人类主体性危机，并融入对中国传统文化元素的运用。该小说在科幻框架下坚守“文以载道”理念，既批判技术异化现象，又通过机器人遵循“保护人类”原则的情节暗示人机和谐共处的可能性。\n《玩偶之家》是作家张系国创作的科幻小说，以人类文明崩溃后机器人主宰世界为背景。作品通过人机地位倒置的设定，探讨了技术发展中的人类主体性危机，并融入对中国传统文化元素的运用。该小说在科幻框架下坚守“文以载道”理念，既批判技术异化现象，又通过机器人遵循“保护人类”原则的情节暗示人机和谐共处的可能性。\n\n「玩偶之家」选自张系国的科幻小说「星云组曲」。「星云组曲」由十个故事构成，勾绘从二十世纪到二百世纪的未来世界，这十个故事是：（1）归。（2）望子成龙。（3）岂有此理。（4）翦梦奇缘。（5）铜像城。（6）青春泉。（7）翻译绝唱。（8）倾城之恋。（9）玩偶之家。（10）归。",
    techniques: "《玩偶之家》是作家张系国创作的科幻小说，以人类文明崩溃后机器人主宰世界为背景。作品通过人机地位倒置的设定，探讨了技术发展中的人类主体性危机，并融入对中国传统文化元素的运用。该小说在科幻框架下坚守“文以载道”理念，既批判技术异化现象，又通过机器人遵循“保护人类”原则的情节暗示人机和谐共处的可能性。\n《玩偶之家》是作家张系国创作的科幻小说，以人类文明崩溃后机器人主宰世界为背景。作品通过人机地位倒置的设定，探讨了技术发展中的人类主体性危机，并融入对中国传统文化元素的运用。该小说在科幻框架下坚守“文以载道”理念，既批判技术异化现象，又通过机器人遵循“保护人类”原则的情节暗示人机和谐共处的可能性。\n\n「玩偶之家」选自张系国的科幻小说「星云组曲」。「星云组曲」由十个故事构成，勾绘从二十世纪到二百世纪的未来世界，这十个故事是：（1）归。（2）望子成龙。（3）岂有此理。（4）翦梦奇缘。（5）铜像城。",
    excerpts: [],
    insights: "《玩偶之家》是作家张系国创作的科幻小说，以人类文明崩溃后机器人主宰世界为背景。作品通过人机地位倒置的设定，探讨了技术发展中的人类主体性危机，并融入对中国传统文化元素的运用。该小说在科幻框架下坚守“文以载道”理念，既批判技术异化现象，又通过机器人遵循“保护人类”原则的情节暗示人机和谐共处的可能性。\n《玩偶之家》是作家张系国创作的科幻小说，以人类文明崩溃后机器人主宰世界为背景。作品通过人机地位倒置的设定，探讨了技术发展中的人类主体性危机，并融入对中国传统文化元素的运用。该小说在科幻框架下坚守“文以载道”理念，既批判技术异化现象，又通过机器人遵循“保护人类”原则的情节暗示人机和谐共处的可能性。\n\n「玩偶之家」选自张系国的科幻小说「星云组曲」。「星云组曲」由十个故事构成，勾绘从二十世纪到二百世纪的未来世界，这十个故事是：（1）归。（2）望子成龙。（3）岂有此理。（4）翦梦奇缘。（5）铜像城。",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E7%8E%A9%E5%81%B6%E4%B9%8B%E5%AE%B6", tier: "reference", fetchedAt: "2026-05-21T04:34:25.053Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
        { label: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/2542", tier: "original_text", fetchedAt: "2026-05-21T04:34:39.265Z", contributedFields: ["insights"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=A%20Doll's%20House%20Henrik%20Ibsen" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=A%20Doll's%20House%20Henrik%20Ibsen" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=A%20Doll's%20House" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=A%20Doll's%20House" },
      ],
    },
  },

  // ==================== 非洲 ====================

  "things-fall-apart": {
    id: "things-fall-apart",
    characters: [
      { name: "奥孔库沃", role: "主人公", description: "伊博族乌姆奥菲亚村最著名的战士和摔跤手。他的一生被一个恐惧所驱动——害怕变得像他那个懒惰懦弱的父亲一样。这种恐惧使他走向了对力量与冷酷的极端追求，也最终导致了他的毁灭。" },
      { name: "恩沃耶", role: "长子", description: "奥孔库沃的长子，敏感而不同于父亲的刚硬。奥孔库沃认为他像自己的父亲一样软弱，但恩沃耶的敏感让他更早地感知到了即将降临的变化。" },
      { name: "伊克梅富纳", role: "养子/祭品", description: "从邻村来的人质，被奥孔库沃抚养长大，两人之间产生了真正的父子之情。但神谕要求处死他时，奥孔库沃亲手执行了处决——这是全书最令人心碎的情节之一。" },
      { name: "布朗先生", role: "传教士", description: "第一个来到乌姆奥菲亚的白人传教士。他尊重伊博文化，通过对话而非强迫传播基督教，获得了族人的尊敬。" },
      { name: "史密斯牧师", role: "传教士", description: "布朗的继任者。他视伊博传统为'野蛮'，以不容置疑的傲慢对待一切，激化了基督教与原住民之间的冲突。" },
    ],
    plotSummary: "在十九世纪末尼日利亚的伊博族村庄乌姆奥菲亚，奥孔库沃凭自己的努力从一个贫穷之子成长为最著名的战士。他的生活围绕着一个核心恐惧：不能像他的父亲那样软弱无能。当一个邻村少年伊克梅富纳被送到乌姆奥菲亚作为和平祭品时，奥孔库沃收留了他，并在这三年间与他建立了父子般的感情。然而神谕要求处死伊克梅富纳，奥孔库沃为了不表现出'软弱'，亲手执行了处决。后来，在一次葬礼上奥孔库沃的枪意外走火杀死了族人的儿子，他被流放七年。流放期间，白人传教士来到了伊博族的土地上。当他七年后返回时，村庄已经面目全非——教堂、学校、殖民地政府已经瓦解了传统的社会结构。奥孔库沃试图发动族人反抗，却发现无人响应。最终，他在绝望中自缢——这是伊博文化中最耻辱的死亡方式——讽刺的是，他一辈子都在逃避'软弱'的标签，却以最不体面的方式结束了生命。",
    plotNodes: [
      { label: "荣耀的起点", description: "奥孔库沃以摔跤击败'猫王'阿玛林兹而成名，从此以力量与勇猛为人生信条，誓不做父亲那样的'懦夫'" },
      { label: "养子之死", description: "神谕要求处死伊克梅富纳。奥孔库沃为证明自己不是'软弱的女人'，亲手杀死了这个他视如己出的孩子" },
      { label: "流放七年", description: "意外杀人后被放逐到母亲的故乡。在流放中他听说白人来了——但他无法回去阻止正在发生的一切" },
      { label: "殖民者的到来", description: "白人传教士和殖民政府进入伊博地区。他们用宗教、教育和贸易瓦解了传统社会的基础" },
      { label: "恩沃耶的背叛", description: "奥孔库沃的长子恩沃耶加入了基督教会。对奥孔库沃来说，没有什么比儿子的'背叛'更令他心碎" },
      { label: "自缢", description: "奥孔库沃杀死了一个殖民地信使，试图唤醒族人反抗，却发现已经没有人愿意跟随他。他选择了自缢——一个不被允许被族人埋葬的死亡" },
    ],
    themeAnalysis: "《瓦解》的标题本身就道出了核心主题——一个完整世界的崩溃。阿契贝展现了殖民主义如何从内部和外部同时摧毁了伊博社会：外部是殖民政府和教会的强制力量，内部是传统社会自身的裂缝和弱点。但阿契贝拒绝简单的'好人vs坏人'叙事——伊博文化有其黑暗面（如弃婴、残酷的神谕），传教士中既有傲慢的史密斯也有温和的布朗。更深层的是关于'男性气质'的批判——奥孔库沃对'软弱'的恐惧驱使他走向极端的冷酷，这种'有毒的男子气概'不仅是他的个人悲剧，也是整个社会的病症。小说的标题取自叶芝的诗《第二次降临》：'万物分崩离析，中心不再把持'——这不仅是对伊博社会的描述，也是一种人类普遍处境的寓言。",
    techniques: "阿契贝的叙事艺术在于将伊博口头传统与英语小说形式无缝融合。他在英语文句中融入了伊博语的谚语、节奏和意象，创造了一种独特的'非洲英语'文学语言。叙事结构上，小说分为三部分，对应奥孔库沃的崛起、流放和毁灭——这是一个古典悲剧的架构，但填充了非洲文化的内容。人物塑造上，阿契贝让奥孔库沃既是一个英雄又是一个可厌的人物——读者既同情他又不认同他，这种复杂性使小说超越了简单的'抗议文学'范畴。结尾部分以殖民地专员的视角收束——他将奥孔库沃的故事压缩为'一个关于野蛮人的有趣段落'——这种叙事视角的突然转换，辛辣地揭示了殖民话语对非洲经验的暴力性简化。",
    excerpts: [
      { quote: "当一个人对他所生活的世界感到不满时，他必须面对改变。", context: "这句宣示可以有多重解读：既指向奥孔库沃对自身命运的抗争，也指向伊博社会面对殖民冲击时的抉择。" },
      { quote: "他一生都在害怕一件事：害怕被人认为像他的父亲那样软弱。", context: "奥孔库沃的核心心理动机，也是导致他所有悲剧的根源——以恐惧驱动的力量终将破碎。" },
      { quote: "如果我们自己不做点什么，我们的孩子会诅咒我们，因为我们没有保护他们应该继承的东西。", context: "奥孔库沃在试图唤醒族人反抗时的话语，反映了他对文化传承的深切忧虑。" },
    ],
    insights: "《瓦解》的伟大之处在于，它用一个人和一个村庄的故事，讲述了整个非洲大陆在后殖民时代所面临的普遍困境。奥孔库沃的悲剧不仅仅属于他个人，也属于所有在历史洪流中试图保持尊严却最终被淹没的人们。阿契贝以无可辩驳的文学力量证明：非洲人不是历史的被动接受者，他们有自己的声音、自己的故事、自己的悲剧与荣光。今天重读这部小说，它提醒我们思考：在面对不可抵抗的外部变化时，如何在保持自我认同与适应新世界之间找到平衡？那些'瓦解'了的东西，是否有可能以新的方式被重建？",
  },

  // ==================== 非洲 — 其他 ====================

  "arrow-of-god": {
    id: "arrow-of-god",
    characters: [
      { name: "Arrow", role: "角色", description: "Arrow of God 中的主要角色。" },
      { name: "Chinua Achebe", role: "角色", description: "Arrow of God 中的主要角色。" },
      { name: "Characters", role: "角色", description: "Arrow of God 中的主要角色。" },
      { name: "Characterization", role: "角色", description: "Arrow of God 中的主要角色。" },
      { name: "Themes", role: "角色", description: "Arrow of God 中的主要角色。" },
      { name: "Novel", role: "角色", description: "Arrow of God 中的主要角色。" },
      { name: "English", role: "角色", description: "Arrow of God 中的主要角色。" },
      { name: "Chinua Achebe Plot", role: "角色", description: "Arrow of God 中的主要角色。" }
    ],
    plotSummary: "Get ready to explore Arrow of God and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide Arrow of God Chinua Achebe Arrow of God Chinua Achebe 53 pages • 1-hour read Chinua Achebe Arrow of God Fiction | Novel | Adult | Published in 1964 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Chapter Summaries & Analyses Chapters 1-3 Chapters 4-6 Chapters 7-9 Chapters 10-12 Chapters 13-15 Chapters 16-19 Character Analysis Themes Symbols & Motifs Important Quotes Essay Topics Quizzes NEW Reading Tools Discussion Questions Games Plot Scramble NEW True or False NEW Summary and Study Guide Overview Chinua Achebe’s 1964 nov",
    plotNodes: [
      { label: "Part 1", description: "Get ready to explore Arrow of God and its meaning." },
      { label: "Part 2", description: "Study Guide Arrow of God Chinua Achebe Arrow of God Chinua Achebe 53 pages • 1-hour read Chinua Achebe Arrow of God Fiction | Novel | Adult | Published in 1964 A modern alternative to SparkNotes and C" }
    ],
    themeAnalysis: "Get ready to explore Arrow of God and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide Arrow of God Chinua Achebe Arrow of God Chinua Achebe 53 pages • 1-hour read Chinua Achebe Arrow of God Fiction | Novel | Adult | Published in 1964 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Chapter Summaries & Analyses Chapters 1-3 Chapters 4-6 Chapters 7-9 Chapters 10-12 Chapters 13-15 Chapters 16-19 Character Analysis",
    techniques: "[Chinua Achebe Writing Styles in Arrow of God - BookRags.com] A detailed discussion of the writing styles used running throughout Arrow of God including including point of view, structure, language, and meaning.\n\n[Arrow of God by Chinua Achebe | Literature and Writing - EBSCO] \"Arrow of God\" is a novel by Chinua Achebe set in the 1920s during a pivotal ... novel poignantly explores themes of power, identity, and cultural conflict.\n\nGet ready to explore Arrow of God and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to he",
    excerpts: [],
    insights: "[Arrow of God Summary - GradeSaver] In Arrow of God, we see the calendar, religion, social mores, customary dress, and other facets of Igbo culture imperiled by the religious, ...\n\n[Arrow of God Summary and Study Guide - SuperSummary] Chinua Achebe's 1964 novel Arrow of God portrays an Ibo leader as he confronts the British administrators and missionaries in his town.\n\n[Arrow of God - Wikipedia] Arrow of God, published in 1964, is the third novel by Chinua Achebe. Along with Things Fall Apart and No Longer at Ease, it is considered part of The ...\n\n[Chinua Achebe Writing Styles in Arrow of God",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E7%A5%9E%E7%AE%AD", tier: "reference", fetchedAt: "2026-05-21T04:51:58.700Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "grain-of-wheat": {
    id: "grain-of-wheat",
    plotSummary: "[Summary of \"A Grain of Wheat\" | PDF - Scribd] A Grain of Wheat is a complex novel by Ngugi wa Thiong'o that explores the Mau Mau struggle for independence in Kenya through multiple intertwining ...\n\n[(PDF) Stylistic/Textual Analysis of Narrative Techniques in Ngugi Wa ...] In A Grain of Wheat, Ngugi Wa Thiong'o demonstrates his mastery of language for both narration and description. In the plot, while telling ...\n\n[A Grain of Wheat - Wikipedia] A Grain of Wheat is a historical novel written by Kenyan novelist Ngũgĩ wa Thiong'o, first published as part of the influential Heinemann African Writers ...\n\n[Summary and analysis of A Grain of Wheat by Ngũgĩ wa Thiong'o] Summary and analysis of A Grain of Wheat by Ngũgĩ wa Thiong'o. 3.6K views · 11 months ago ...more. English literature. 16.4K. Subscribe.\n\n[(DOC) Analysis of A grain of wheat - Academia.edu] The analysis of Ngugi wa Thiong'o's novel A Grain of Wheat offers an in-depth exploration of its themes of betrayal, personal and societa",
    plotNodes: [
      { label: "Part 1", description: "[Summary of \"A Grain of Wheat\" | PDF - Scribd] A Grain of Wheat is a complex novel by Ngugi wa Thiong'o that explores the Mau Mau struggle for independence in Kenya through multiple intertwining ..." },
      { label: "Part 2", description: "[(PDF) Stylistic/Textual Analysis of Narrative Techniques in Ngugi Wa ...] In A Grain of Wheat, Ngugi Wa Thiong'o demonstrates his mastery of language for both narration and description." },
      { label: "Part 3", description: "[A Grain of Wheat - Wikipedia] A Grain of Wheat is a historical novel written by Kenyan novelist Ngũgĩ wa Thiong'o, first published as part of the influential Heinemann African Writers ..." },
      { label: "Part 4", description: "[Summary and analysis of A Grain of Wheat by Ngũgĩ wa Thiong'o] Summary and analysis of A Grain of Wheat by Ngũgĩ wa Thiong'o." },
      { label: "Part 5", description: "[(DOC) Analysis of A grain of wheat - Academia.edu] The analysis of Ngugi wa Thiong'o's novel A Grain of Wheat offers an in-depth exploration of its themes of betrayal, personal and societa" }
    ],
    themeAnalysis: "[(DOC) Analysis of A grain of wheat - Academia.edu] The analysis of Ngugi wa Thiong'o's novel A Grain of Wheat offers an in-depth exploration of its themes of betrayal, personal and societal responsibilities.\n\n[Themes in A Grain of Wheat | A Novel by Ngũgĩ wa Thiong'o] Uncover the powerful themes and symbolism in Ngũgĩ wa Thiong'o's novel, A Grain of Wheat. Discover the themes of colonialism, betrayal, ...\n\n[A Grain of Wheat Themes | GradeSaver] A Grain of Wheat Themes · Colonialism and its Legacies · Individuals and the Community · Betrayal, Guilt, and Redemption · Forgiveness · Power of ...\n\n[Summary and analysis of A Grain of Wheat by Ngũgĩ wa Thiong'o] Summary and analysis of A Grain of Wheat by Ngũgĩ wa Thiong'o. 3.6K views · 11 months ago ...more. English literature. 16.4K. Subscribe",
    techniques: "[(PDF) Stylistic/Textual Analysis of Narrative Techniques in Ngugi Wa ...] In A Grain of Wheat, Ngugi Wa Thiong'o demonstrates his mastery of language for both narration and description. In the plot, while telling ...",
    excerpts: [],
    insights: "[A Grain of Wheat Study Guide | Literature Guide - LitCharts] A Grain of Wheat is set in the four days preceding Kenyan Independence in December 1963, but the author recalls events as far back as British settlement in ...\n\n[A Grain of Wheat Themes | GradeSaver] A Grain of Wheat Themes · Colonialism and its Legacies · Individuals and the Community · Betrayal, Guilt, and Redemption · Forgiveness · Power of ...\n\n[A Grain of Wheat - Wikipedia] A Grain of Wheat is a historical novel written by Kenyan novelist Ngũgĩ wa Thiong'o, first published as part of the influential Heinemann African Writers ..",
  },

  "disgrace": {
    id: "disgrace",
    plotSummary: "Disgrace is a novel by J.M. Coetzee that was first published in 1999. It caused fierce debates in South Africa over its portrayal of the new social and political order.",
    plotNodes: [
      { label: "第 1 部分", description: "Disgrace is a novel by J.M. Coetzee that was first published in 1999." }
    ],
    themeAnalysis: "耻（拼音：chǐ）是汉语一级通用规范汉字（常用字）。据已有古文字材料，此字最古形体为战国文字，也见于战国前的著作《诗经》。“耻”原作“恥”，从心耳声，耳兼表义。至汉代“恥”里的心变为止。“耻”本义指声誉上受到的损害，即耻辱，用作动词指羞辱、侮辱，引申为感到羞愧。\n耻（拼音：chǐ）是汉语一级通用规范汉字（常用字） [2]。据已有古文字材料，此字最古形体为战国文字，也见于战国前的著作《诗经》。“耻”原作“恥”，从心耳声，耳兼表义。至汉代“恥”里的心变为止。“耻”本义指声誉上受到的损害，即耻辱，用作动词指羞辱、侮辱，引申为感到羞愧。 [14]\n\n“耻”最初写作“恥”。图A是战国时期的郭店楚简上的文字，图1是小篆，字形稍有差异，结构基本相同。汉隶或作上下结构（图2），上为“耳”，下为“心”。“恥”由“心”和“耳”两部分组成。左部“耳”表示听；右部“心”表示与心理活动相关，“耻辱”是一种情感，故以“心”为形符。所以，“恥”字本义有听到批评后内心感到羞愧之意。“恥（耻）”字中的“耳”兼有表音作用，恥（耻）、耳上古音都在之部，中古音恥（耻）为日母上声止韵，耳为彻母上声止韵，两字读音接近。",
    techniques: "耻（拼音：chǐ）是汉语一级通用规范汉字（常用字）。据已有古文字材料，此字最古形体为战国文字，也见于战国前的著作《诗经》。“耻”原作“恥”，从心耳声，耳兼表义。至汉代“恥”里的心变为止。“耻”本义指声誉上受到的损害，即耻辱，用作动词指羞辱、侮辱，引申为感到羞愧。\n耻（拼音：chǐ）是汉语一级通用规范汉字（常用字） [2]。据已有古文字材料，此字最古形体为战国文字，也见于战国前的著作《诗经》。“耻”原作“恥”，从心耳声，耳兼表义。至汉代“恥”里的心变为止。“耻”本义指声誉上受到的损害，即耻辱，用作动词指羞辱、侮辱，引申为感到羞愧。 [14]\n\n“耻”最初写作“恥”。图A是战国时期的郭店楚简上的文字，图1是小篆，字形稍有差异，结构基本相同。汉隶或作上下结构（图2），上为“耳”，下为“心”。“恥”由“心”和“耳”两部分组成。",
    excerpts: [
      { quote: "耻匹夫不可以无备，况耻国乎？是以圣王务行礼，不求耻人。", context: "来源：Disgrace" },
      { quote: "耻匹夫不可以无备，况耻国乎？是以圣王务行礼，不求耻人。", context: "来源：Disgrace" }
    ],
    insights: "耻（拼音：chǐ）是汉语一级通用规范汉字（常用字）。据已有古文字材料，此字最古形体为战国文字，也见于战国前的著作《诗经》。“耻”原作“恥”，从心耳声，耳兼表义。至汉代“恥”里的心变为止。“耻”本义指声誉上受到的损害，即耻辱，用作动词指羞辱、侮辱，引申为感到羞愧。\n耻（拼音：chǐ）是汉语一级通用规范汉字（常用字） [2]。据已有古文字材料，此字最古形体为战国文字，也见于战国前的著作《诗经》。“耻”原作“恥”，从心耳声，耳兼表义。至汉代“恥”里的心变为止。“耻”本义指声誉上受到的损害，即耻辱，用作动词指羞辱、侮辱，引申为感到羞愧。 [14]\n\n“耻”最初写作“恥”。图A是战国时期的郭店楚简上的文字，图1是小篆，字形稍有差异，结构基本相同。汉隶或作上下结构（图2），上为“耳”，下为“心”。“恥”由“心”和“耳”两部分组成。",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E8%80%BB", tier: "reference", fetchedAt: "2026-05-21T04:40:31.050Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
        { label: "Britannica", url: "https://www.britannica.com/topic/Disgrace", tier: "reference", fetchedAt: "2026-05-21T04:40:44.694Z", contributedFields: ["plotSummary", "themeAnalysis"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=Disgrace%20J.%20M.%20Coetzee" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=Disgrace%20J.%20M.%20Coetzee" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=Disgrace" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=Disgrace" },
      ],
    },
  },

  "so-long-a-letter": {
    id: "so-long-a-letter",
    characters: [
      { name: "So Long", role: "角色", description: "So Long a Letter 中的主要角色。" },
      { name: "Letter Summary", role: "角色", description: "So Long a Letter 中的主要角色。" },
      { name: "Analysis", role: "角色", description: "So Long a Letter 中的主要角色。" },
      { name: "Letter", role: "角色", description: "So Long a Letter 中的主要角色。" },
      { name: "Mariama", role: "角色", description: "So Long a Letter 中的主要角色。" }
    ],
    plotSummary: "[So Long a Letter Summary and Analysis of Chapter 1-5 - GradeSaver] So Long a Letter study guide contains a biography of Mariama Bâ, literature essays, quiz questions, major themes, characters, and a full ...\n\n[Summary And Analysis Of So Long A Letter By Mariama Ba] Firstly, the novels topic is the state of ladies in Western African culture. So Long a Letter, Mariama Bâ's first novel, is actually composed as ...\n\n[So Long a Letter by Mariama Bâ Plot Summary - LitCharts] So Long a Letter begins when Ramatoulaye, a Senegalese woman living in Dakar, the country's capital, decides to write a letter to her old friend Aissatou, who ...\n\n[So Long A Letter Summary and Study Guide | SuperSummary] So Long A Letter follows the story of two women from Senegal, Ramatoulaye and Aissatou. They are childhood friends whose paths diverge in adulthood.\n\n[Summary and analysis of So Long a Letter by Mariama Bâ - YouTube] Summary and analysis of So Long a Letter by Mariama Bâ. 3.2K views · 1 year ago ...mor",
    plotNodes: [
      { label: "Part 1", description: "[So Long a Letter Summary and Analysis of Chapter 1-5 - GradeSaver] So Long a Letter study guide contains a biography of Mariama Bâ, literature essays, quiz questions, major themes, characters, and a " },
      { label: "Part 2", description: "[Summary And Analysis Of So Long A Letter By Mariama Ba] Firstly, the novels topic is the state of ladies in Western African culture." },
      { label: "Part 3", description: "[So Long a Letter by Mariama Bâ Plot Summary - LitCharts] So Long a Letter begins when Ramatoulaye, a Senegalese woman living in Dakar, the country's capital, decides to write a letter to her old frie" },
      { label: "Part 4", description: "[So Long A Letter Summary and Study Guide | SuperSummary] So Long A Letter follows the story of two women from Senegal, Ramatoulaye and Aissatou." },
      { label: "Part 5", description: "[Summary and analysis of So Long a Letter by Mariama Bâ - YouTube] Summary and analysis of So Long a Letter by Mariama Bâ." }
    ],
    themeAnalysis: "[So Long a Letter Summary and Analysis of Chapter 1-5 - GradeSaver] So Long a Letter study guide contains a biography of Mariama Bâ, literature essays, quiz questions, major themes, characters, and a full ...\n\n[So Long a Letter - Wikipedia] Its theme is the condition of women in Western African society. So Long a Letter. Author, Mariama Bâ. Original title, Une si ...\n\n[Summary and analysis of So Long a Letter by Mariama Bâ - YouTube] Summary and analysis of So Long a Letter by Mariama Bâ. 3.2K views · 1 year ago ...more. English literature. 16.4K. Subscribe. 41. Share.\n\n[[PDF] Mariama Ba So Long A Letter - ftp.arcchurches.com] Key Themes in \"So Long a Letter\". Gender Roles and Feminism. 1. One of the most prominent themes is the exploration of traditional gender roles and the ...\n\n[Summary",
    techniques: "",
    excerpts: [],
    insights: "[So Long a Letter by Mariama Bâ Plot Summary - LitCharts] So Long a Letter begins when Ramatoulaye, a Senegalese woman living in Dakar, the country's capital, decides to write a letter to her old friend Aissatou, who ...\n\n[So Long a Letter - Wikipedia] Its theme is the condition of women in Western African society. So Long a Letter. Author, Mariama Bâ. Original title, Une si ...\n\n[So Long a Letter Summary and Analysis of Chapter 1-5 - GradeSaver] So Long a Letter study guide contains a biography of Mariama Bâ, literature essays, quiz questions, major themes, characters, and a full ...\n\n[So Lon",
  },

  "gods-bits-of-wood": {
    id: "gods-bits-of-wood",
    characters: [
      { name: "Bits", role: "角色", description: "God's Bits of Wood 中的主要角色。" },
      { name: "Wood Summary", role: "角色", description: "God's Bits of Wood 中的主要角色。" },
      { name: "Study Guide", role: "角色", description: "God's Bits of Wood 中的主要角色。" },
      { name: "Wood", role: "角色", description: "God's Bits of Wood 中的主要角色。" },
      { name: "Analysis", role: "角色", description: "God's Bits of Wood 中的主要角色。" },
      { name: "Major Characters", role: "角色", description: "God's Bits of Wood 中的主要角色。" },
      { name: "African", role: "角色", description: "God's Bits of Wood 中的主要角色。" },
      { name: "Wood Characters", role: "角色", description: "God's Bits of Wood 中的主要角色。" }
    ],
    plotSummary: "Get ready to explore God&#x27;s Bits Of Wood and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide God’s Bits of Wood Ousmane Sembène God’s Bits of Wood Ousmane Sembène 46 pages • 1-hour read Ousmane Sembène God’s Bits of Wood Fiction | Novel | Adult | Published in 1960 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Chapter Summaries & Analyses Chapters 1-3 Chapters 4-6 Chapters 7-9 Chapters 10-12 Chapters 13-16 Chapters 17-20 Character List NEW Character Analysis Themes Symbols & Motifs Important Quotes Essay Topics Quizzes NEW Reading Tools Discussion Questions Games Plot Scramble NEW True or False NEW Sum",
    plotNodes: [
      { label: "Part 1", description: "Get ready to explore God&#x27;s Bits Of Wood and its meaning." },
      { label: "Part 2", description: "Study Guide God’s Bits of Wood Ousmane Sembène God’s Bits of Wood Ousmane Sembène 46 pages • 1-hour read Ousmane Sembène God’s Bits of Wood Fiction | Novel | Adult | Published in 1960 A modern alterna" }
    ],
    themeAnalysis: "Get ready to explore God&#x27;s Bits Of Wood and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide God’s Bits of Wood Ousmane Sembène God’s Bits of Wood Ousmane Sembène 46 pages • 1-hour read Ousmane Sembène God’s Bits of Wood Fiction | Novel | Adult | Published in 1960 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Chapter Summaries & Analyses Chapters 1-3 Chapters 4-6 Chapters 7-9 Chapters 10-12 Chapters 13-16",
    techniques: "Get ready to explore God&#x27;s Bits Of Wood and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide God’s Bits of Wood Ousmane Sembène God’s Bits of Wood Ousmane Sembène 46 pages • 1-hour read Ousmane Sembène God’s Bits of Wood Fiction | Novel | Adult | Published in 1960 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Do",
    excerpts: [],
    insights: "[God's Bits of Wood Summary & Study Guide - BookRags.com] God's Bits of Wood Summary & Study Guide includes detailed chapter summaries and analysis, quotes, character descriptions, themes, and more.\n\n[God's Bits Of Wood Summary and Study Guide | SuperSummary] God's Bits of Wood (1960) by Ousmane Sembène is a novel based on actual events surrounding the Senegalese railway workers strike of 1947.\n\n[God's Bits of Wood (docx) - CliffsNotes] God's Bits of Wood by Ousmane Sembene is about the 1947-48 strike where workers walked off the job on the railroad from Dakar in Senegal to Bamako on the Niger",
  },

  "children-of-gebelawi": {
    id: "children-of-gebelawi",
    plotSummary: "Children of Gebelawi (Arabic: أولاد حارتنا, romanized: ʾawlād ḥāratnā) is a novel by the Egyptian writer and Nobel laureate Naguib Mahfouz. Its Egyptian dialectal transliteration is Awlad Haretna. An alternative English title is Children of the Alley.",
    themeAnalysis: "Children of Gebelawi (Arabic: أولاد حارتنا, romanized: ʾawlād ḥāratnā) is a novel by the Egyptian writer and Nobel laureate Naguib Mahfouz. Its Egyptian dialectal transliteration is Awlad Haretna. An alternative English title is Children of the Alley.",
    techniques: "Children of Gebelawi (Arabic: أولاد حارتنا, romanized: ʾawlād ḥāratnā) is a novel by the Egyptian writer and Nobel laureate Naguib Mahfouz. Its Egyptian dialectal transliteration is Awlad Haretna. An alternative English title is Children of the Alley.",
    excerpts: [],
    insights: "Children of Gebelawi (Arabic: أولاد حارتنا, romanized: ʾawlād ḥāratnā) is a novel by the Egyptian writer and Nobel laureate Naguib Mahfouz. Its Egyptian dialectal transliteration is Awlad Haretna. An alternative English title is Children of the Alley.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Children%20of%20Gebelawi"
    // }
  },

  "efuru": {
    id: "efuru",
    characters: [
      { name: "Efuru", role: "角色", description: "Efuru 中的主要角色。" },
      { name: "Flora Nwapa", role: "角色", description: "Efuru 中的主要角色。" },
      { name: "Igbo Nigerian", role: "角色", description: "Efuru 中的主要角色。" },
      { name: "Igbo", role: "角色", description: "Efuru 中的主要角色。" },
      { name: "An Analysis", role: "角色", description: "Efuru 中的主要角色。" },
      { name: "Women", role: "角色", description: "Efuru 中的主要角色。" },
      { name: "Culture", role: "角色", description: "Efuru 中的主要角色。" },
      { name: "Fiction", role: "角色", description: "Efuru 中的主要角色。" }
    ],
    plotSummary: "[Efuru: A Feminist Igbo Narrative | PDF - Scribd] Throughout the story, Efuru wishes to be a mother but struggles with infertility in her marriages. The novel provides insights into Igbo culture, including ...\n\n[Flora Nwapa's Efuru and toxic masculinity in Igbo Nigerian society] This work focuses on the concept of toxic masculinity in Igbo society, in relation to the two major male characters in Flora Nwapa's 1966 novel, Efuru.\n\n[[PDF] An Analysis of Women and Culture in Flora Nwapa's Fiction] As Florence Stratton points out, Palmer charges Nwapa's Efuru with a whole litany of deficiencies: theme, character, plot, setting, and language ...\n\n[Efuru - Wikipedia] The book is about Efuru, an Igbo woman who lives in a small village in colonial West Africa. Throughout the story, Efuru wishes to be a mother.\n\n[Summary and analysis of Efuru by Flora Nwapa - YouTube] Sign in. This content isn't available. Summary and analysis of Efuru by Flora Nwapa. 864 views · 11 months ago ...more. English l",
    plotNodes: [
      { label: "Part 1", description: "[Efuru: A Feminist Igbo Narrative | PDF - Scribd] Throughout the story, Efuru wishes to be a mother but struggles with infertility in her marriages." },
      { label: "Part 2", description: "[Flora Nwapa's Efuru and toxic masculinity in Igbo Nigerian society] This work focuses on the concept of toxic masculinity in Igbo society, in relation to the two major male characters in Flora Nwapa'" },
      { label: "Part 3", description: "[[PDF] An Analysis of Women and Culture in Flora Nwapa's Fiction] As Florence Stratton points out, Palmer charges Nwapa's Efuru with a whole litany of deficiencies: theme, character, plot, setting, an" },
      { label: "Part 4", description: "[Efuru - Wikipedia] The book is about Efuru, an Igbo woman who lives in a small village in colonial West Africa." },
      { label: "Part 5", description: "[Summary and analysis of Efuru by Flora Nwapa - YouTube] Sign in." }
    ],
    themeAnalysis: "[[PDF] An Analysis of Women and Culture in Flora Nwapa's Fiction] As Florence Stratton points out, Palmer charges Nwapa's Efuru with a whole litany of deficiencies: theme, character, plot, setting, and language ...\n\n[Summary and analysis of Efuru by Flora Nwapa - YouTube] Sign in. This content isn't available. Summary and analysis of Efuru by Flora Nwapa. 864 views · 11 months ago ...more. English literature. 16.4 ...\n\n[The Works of Flora Nwapa, Mother of Modern African Literature] Traditional values, independence, and life from the Igbo woman's perspective are important themes that made Efuru a notable work, as well a ...",
    techniques: "[Efuru: A Feminist Igbo Narrative | PDF - Scribd] Throughout the story, Efuru wishes to be a mother but struggles with infertility in her marriages. The novel provides insights into Igbo culture, including ...",
    excerpts: [],
    insights: "[Efuru - Wikipedia] The book is about Efuru, an Igbo woman who lives in a small village in colonial West Africa. Throughout the story, Efuru wishes to be a mother.\n\n[Summary and analysis of Efuru by Flora Nwapa - YouTube] Sign in. This content isn't available. Summary and analysis of Efuru by Flora Nwapa. 864 views · 11 months ago ...more. English literature. 16.4 ...\n\n[Efuru: A Feminist Igbo Narrative | PDF - Scribd] Throughout the story, Efuru wishes to be a mother but struggles with infertility in her marriages. The novel provides insights into Igbo culture, including ...\n\n[Flora Nwapa's Ef",
  },

  "joys-of-motherhood": {
    id: "joys-of-motherhood",
    characters: [
      { name: "The Joys", role: "角色", description: "The Joys of Motherhood 中的主要角色。" },
      { name: "Motherhood Summary", role: "角色", description: "The Joys of Motherhood 中的主要角色。" },
      { name: "Motherhood", role: "角色", description: "The Joys of Motherhood 中的主要角色。" },
      { name: "Study Guide", role: "角色", description: "The Joys of Motherhood 中的主要角色。" }
    ],
    plotSummary: "Get ready to explore The Joys of Motherhood and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide The Joys of Motherhood Buchi Emecheta The Joys of Motherhood Buchi Emecheta 49 pages • 1-hour read Buchi Emecheta The Joys of Motherhood Fiction | Novel | Adult | Published in 1979 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Background Chapter Summaries & Analyses Chapters 1-4 Chapters 5-9 Chapters 10-12 Chapters 13-15 Chapters 16-18 Character Analysis Themes Symbols & Motifs Important Quotes Essay Topics Quizzes NEW Reading Tools Discussion Questions Summary and Study Guide Overview The Joys of Motherhood (1",
    plotNodes: [
      { label: "Part 1", description: "Get ready to explore The Joys of Motherhood and its meaning." },
      { label: "Part 2", description: "Study Guide The Joys of Motherhood Buchi Emecheta The Joys of Motherhood Buchi Emecheta 49 pages • 1-hour read Buchi Emecheta The Joys of Motherhood Fiction | Novel | Adult | Published in 1979 A moder" }
    ],
    themeAnalysis: "Get ready to explore The Joys of Motherhood and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide The Joys of Motherhood Buchi Emecheta The Joys of Motherhood Buchi Emecheta 49 pages • 1-hour read Buchi Emecheta The Joys of Motherhood Fiction | Novel | Adult | Published in 1979 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Background Chapter Summaries & Analyses Chapters 1-4 Chapters 5-9 Chapters 10-12 Chapters",
    techniques: "",
    excerpts: [
      { quote: "The Joys of Motherhood", context: "From The Joys of Motherhood" }
    ],
    insights: "[The Joys of Motherhood: Full Book Summary | SparkNotes] A short summary of Buchi Emecheta's The Joys of Motherhood. This free synopsis covers all the crucial plot points of The Joys of Motherhood.\n\n[The Joys of Motherhood Summary | SuperSummary] Get ready to explore The Joys of Motherhood and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and ...\n\n[The Joys of Motherhood Summary & Study Guide - BookRags.com] The Joys of Motherhood Summary & Study Guide includes detailed chapter summaries and analysis, quotes, character descriptions, themes,",
  },

  "weep-not-child": {
    id: "weep-not-child",
    characters: [
      { name: "Weep Not", role: "角色", description: "Weep Not, Child 中的主要角色。" },
      { name: "Child Summary", role: "角色", description: "Weep Not, Child 中的主要角色。" },
      { name: "Analysis", role: "角色", description: "Weep Not, Child 中的主要角色。" },
      { name: "Chapters", role: "角色", description: "Weep Not, Child 中的主要角色。" },
      { name: "Child", role: "角色", description: "Weep Not, Child 中的主要角色。" },
      { name: "Ngugi Wa Thiong", role: "角色", description: "Weep Not, Child 中的主要角色。" },
      { name: "Weep Not Child", role: "角色", description: "Weep Not, Child 中的主要角色。" },
      { name: "Characters Analysis", role: "角色", description: "Weep Not, Child 中的主要角色。" }
    ],
    plotSummary: "[Weep Not Child by Ngugi Wa Thiong'o - Characters Analysis and ...] Weep Not Child by Ngugi Wa Thiong'o - Themes in the Novel. English ... Weep Not Child by Ngugi Wa Thiong'o - Plot Summary and Analysis.\n\n[Weep Not, Child Summary & Study Guide - BookRags.com] Weep Not, Child is the story of a boy, Njoroge, growing up through the years of the Kenyan Emergency. In this time, the Mau Mau fighters commit many acts of ...\n\n[Weep Not, Child Summary and Analysis of Chapters 1-3 - GradeSaver] Weep Not, Child study guide contains a biography of Ngugi Wa Thiong'o, literature essays, quiz questions, major themes, characters, ...\n\n[[PDF] This project analyses Ngũgĩ wa Thiong'o's novel Weep Not, Child ...] In Weep Not, Child, the story is told from a third-person, omniscient unintrusive point of view, with the focus on character shifting between the themes that ...\n\n[Weep Not, Child Themes - LitCharts] Based on a turbulent period of Kenyan history that saw the slow upheaval of British colonial rule",
    plotNodes: [
      { label: "Part 1", description: "[Weep Not Child by Ngugi Wa Thiong'o - Characters Analysis and ...] Weep Not Child by Ngugi Wa Thiong'o - Themes in the Novel." },
      { label: "Part 2", description: "[Weep Not, Child Summary & Study Guide - BookRags.com] Weep Not, Child is the story of a boy, Njoroge, growing up through the years of the Kenyan Emergency." },
      { label: "Part 3", description: "[Weep Not, Child Summary and Analysis of Chapters 1-3 - GradeSaver] Weep Not, Child study guide contains a biography of Ngugi Wa Thiong'o, literature essays, quiz questions, major themes, characters, " },
      { label: "Part 4", description: "[[PDF] This project analyses Ngũgĩ wa Thiong'o's novel Weep Not, Child ...] In Weep Not, Child, the story is told from a third-person, omniscient unintrusive point of view, with the focus on character" },
      { label: "Part 5", description: "[Weep Not, Child Themes - LitCharts] Based on a turbulent period of Kenyan history that saw the slow upheaval of British colonial rule" }
    ],
    themeAnalysis: "[Weep Not, Child Summary and Analysis of Chapters 1-3 - GradeSaver] Weep Not, Child study guide contains a biography of Ngugi Wa Thiong'o, literature essays, quiz questions, major themes, characters, ...\n\n[Weep Not Child by Ngugi Wa Thiong'o - Characters Analysis and ...] Weep Not Child by Ngugi Wa Thiong'o - Themes in the Novel. English ... Weep Not Child by Ngugi Wa Thiong'o - Plot Summary and Analysis.\n\n[Weep Not, Child Themes - LitCharts] Based on a turbulent period of Kenyan history that saw the slow upheaval of British colonial rule, Weep Not, Child examines the impact of cultural division.\n\n[Weep Not, Child: Summary and Analysis | PDF - Scribd] Weep Not, Child: Summary and Analysis. The story follows Njoroge, a Kenyan boy who dreams of getting an education. However, rising tensions",
    techniques: "",
    excerpts: [
      { quote: "the bewildering dispossession of an entire people from their ancestral land.", context: "From Weep Not, Child" }
    ],
    insights: "[Weep Not, Child Themes - LitCharts] Based on a turbulent period of Kenyan history that saw the slow upheaval of British colonial rule, Weep Not, Child examines the impact of cultural division.\n\n[Weep Not, Child Summary & Study Guide - BookRags.com] Weep Not, Child is the story of a boy, Njoroge, growing up through the years of the Kenyan Emergency. In this time, the Mau Mau fighters commit many acts of ...\n\n[Weep Not, Child Summary and Analysis of Chapters 1-3 - GradeSaver] Weep Not, Child study guide contains a biography of Ngugi Wa Thiong'o, literature essays, quiz questions, major themes,",
  },

  "season-of-migration": {
    id: "season-of-migration",
    characters: [
      { name: "Themes", role: "角色", description: "Season of Migration to the North 中的主要角色。" },
      { name: "Colors", role: "角色", description: "Season of Migration to the North 中的主要角色。" },
      { name: "Season", role: "角色", description: "Season of Migration to the North 中的主要角色。" },
      { name: "Migration", role: "角色", description: "Season of Migration to the North 中的主要角色。" },
      { name: "North", role: "角色", description: "Season of Migration to the North 中的主要角色。" },
      { name: "Gender", role: "角色", description: "Season of Migration to the North 中的主要角色。" },
      { name: "Violence In Tayeb", role: "角色", description: "Season of Migration to the North 中的主要角色。" },
      { name: "Salih", role: "角色", description: "Season of Migration to the North 中的主要角色。" }
    ],
    plotSummary: "Get ready to explore Season of Migration to the North and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nSTUDY + TEACHING GUIDE Season of Migration to the North Tayeb Salih Season of Migration to the North Tayeb Salih 81 pages • 2-hour read Tayeb Salih Season of Migration to the North Fiction | Novel | Adult | Published in 1966 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. For select classroom titles, we also provide Teaching Guides with discussion and quiz questions to prompt student engagement. Download PDF Play Audio Download PDF Play Audio Study Guide Teaching Guide Book Brief Summaries & Analyses Plot Summary Chapter Summaries & Analyses Chapters 1-2 Chapters 3-4 Chapters 5-6 Chapters 7-8 Chapters 9-10 Character L",
    plotNodes: [
      { label: "Part 1", description: "Get ready to explore Season of Migration to the North and its meaning." },
      { label: "Part 2", description: "STUDY + TEACHING GUIDE Season of Migration to the North Tayeb Salih Season of Migration to the North Tayeb Salih 81 pages • 2-hour read Tayeb Salih Season of Migration to the North Fiction | Novel | A" }
    ],
    themeAnalysis: "Get ready to explore Season of Migration to the North and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nSTUDY + TEACHING GUIDE Season of Migration to the North Tayeb Salih Season of Migration to the North Tayeb Salih 81 pages • 2-hour read Tayeb Salih Season of Migration to the North Fiction | Novel | Adult | Published in 1966 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. For select classroom titles, we also provide Teaching Guides with discussion and quiz questions to prompt student engagement. Download PDF Play Audio Do",
    techniques: "[Season of Migration to the North Study Guide - Course Hero] This study guide for Tayeb Salih's Season of Migration to the North offers summary and analysis on themes, symbols, and other literary devices found in the text ...\n\nGet ready to explore Season of Migration to the North and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nSTUDY + TEACHING GUIDE Season of Migration to the North Tayeb Salih Season of Migration to the North Tayeb Salih 81 pages • 2-hour r",
    excerpts: [
      { quote: "My students can't get enough of your charts and their results have gone through the roof.", context: "From Season of Migration to the North" }
    ],
    insights: "[Season of Migration to the North Themes - LitCharts] In Tayeb Salih's Season of Migration to the North, relations between men and women are characterized by violence. During his time in England, the Sudanese ...\n\n[Season of Migration to the North Summary and Study Guide] Get ready to explore Season of Migration to the North and its meaning. Our full analysis and study guide provides an even deeper dive with character ...\n\n[Season of Migration to the North Summary - GradeSaver] Season of Migration to the North study guide contains a biography of Tayeb Salih, quiz questions, major themes, chara",
  },

  "the-beautyful-ones": {
    id: "the-beautyful-ones",
    characters: [
      { name: "The Beautyful Ones", role: "角色", description: "The Beautyful Ones Are Not Yet Born 中的主要角色。" },
      { name: "Are Not Yet", role: "角色", description: "The Beautyful Ones Are Not Yet Born 中的主要角色。" },
      { name: "Born Characters", role: "角色", description: "The Beautyful Ones Are Not Yet Born 中的主要角色。" },
      { name: "Born", role: "角色", description: "The Beautyful Ones Are Not Yet Born 中的主要角色。" },
      { name: "Koomson", role: "角色", description: "The Beautyful Ones Are Not Yet Born 中的主要角色。" },
      { name: "Teacher", role: "角色", description: "The Beautyful Ones Are Not Yet Born 中的主要角色。" },
      { name: "Study Guide The", role: "角色", description: "The Beautyful Ones Are Not Yet Born 中的主要角色。" },
      { name: "Beautyful Ones Are", role: "角色", description: "The Beautyful Ones Are Not Yet Born 中的主要角色。" }
    ],
    plotSummary: "Get ready to explore The Beautyful Ones Are Not Yet Born and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide The Beautyful Ones Are Not Yet Born Ayi Kwei Armah The Beautyful Ones Are Not Yet Born Ayi Kwei Armah 35 pages • 1-hour read Ayi Kwei Armah The Beautyful Ones Are Not Yet Born Fiction | Novel | Adult | Published in 1969 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Chapter Summaries & Analyses Chapters 1-3 Chapters 4-6 Chapters 7-9 Chapters 10-12 Chapters 13-15 Character Analysis Themes Symbols & Motifs Important Quotes Essay Topics Quizzes NEW Reading Tools Discussion Questions Games Plot Scramble",
    plotNodes: [
      { label: "Part 1", description: "Get ready to explore The Beautyful Ones Are Not Yet Born and its meaning." },
      { label: "Part 2", description: "Study Guide The Beautyful Ones Are Not Yet Born Ayi Kwei Armah The Beautyful Ones Are Not Yet Born Ayi Kwei Armah 35 pages • 1-hour read Ayi Kwei Armah The Beautyful Ones Are Not Yet Born Fiction | No" }
    ],
    themeAnalysis: "Get ready to explore The Beautyful Ones Are Not Yet Born and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide The Beautyful Ones Are Not Yet Born Ayi Kwei Armah The Beautyful Ones Are Not Yet Born Ayi Kwei Armah 35 pages • 1-hour read Ayi Kwei Armah The Beautyful Ones Are Not Yet Born Fiction | Novel | Adult | Published in 1969 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Chapter Summaries & Analyses Chapters",
    techniques: "",
    excerpts: [
      { quote: " | PDF | Ghana - Scribd] ", context: "From The Beautyful Ones Are Not Yet Born" },
      { quote: "The Beautyful Ones Are Not Yet Born", context: "From The Beautyful Ones Are Not Yet Born" }
    ],
    insights: "[The Beautyful Ones Are Not Yet Born Summary and Study Guide] The Beautyful Ones Are Not Yet Born focuses on life in post-independence Ghana and takes place between Passion Week in 1965 and February 25, 1966 (the day after ...\n\n[Beautiful Ones Are Not Yet Born by Ayi Kwei Armah | Goodreads] The Beautyful Ones are Not Yet Born is a novel set during the last days of the Nkrumah government in Ghana. It's about a man resisting corruption, quixotically ...\n\n[The Beautyful Ones Are Not Yet Born: Analysis of Major Characters] The Beautyful Ones Are Not Yet Born is a novel set in post-independence Gha",
  },

  "nervous-conditions": {
    id: "nervous-conditions",
    characters: [
      { name: "Nervous Conditions", role: "角色", description: "Nervous Conditions 中的主要角色。" },
      { name: "Themes", role: "角色", description: "Nervous Conditions 中的主要角色。" },
      { name: "Western", role: "角色", description: "Nervous Conditions 中的主要角色。" },
      { name: "Nervous Conditions Character", role: "角色", description: "Nervous Conditions 中的主要角色。" },
      { name: "Analysis", role: "角色", description: "Nervous Conditions 中的主要角色。" },
      { name: "Need", role: "角色", description: "Nervous Conditions 中的主要角色。" },
      { name: "Tsitsi Dangarembga", role: "角色", description: "Nervous Conditions 中的主要角色。" },
      { name: "Check", role: "角色", description: "Nervous Conditions 中的主要角色。" }
    ],
    plotSummary: "[Summary & Study Guide Nervous Conditions by Tsitsi ... - Amazon.com] Summary & Study Guide Nervous Conditions by Tsitsi Dangarembga ... Analysis ... plot, key themes, important characters, and quotes of almost any story.\n\n[Nervous Conditions by Tsitsi Dangarembga - Plot Summary and ...] ... Tsitsi Dangarembga - Plot Summary and Analysis ... NERVOUS CONDITIONS by TSITSI DANGAREMBGA Explained | Summary | Analysis | Themes | Context.\n\n[Nervous Conditions Chapter 10 Summary - Course Hero] This study guide and infographic for Tsitsi Dangarembga's Nervous Conditions offer summary and analysis on themes, symbols, and other literary devices found ...\n\n[Nervous Conditions: Themes | SparkNotes] Nervous Conditions are conflicts between those characters who endorse traditional ways and those who look to Western or so-called “modern” answers to problems ...\n\n[Nervous Conditions Character Analysis - LitCharts] Need help on characters in Tsitsi Dangarembga's Nervous Conditions? Check out our detaile",
    plotNodes: [
      { label: "Part 1", description: "[Summary & Study Guide Nervous Conditions by Tsitsi ..." },
      { label: "Part 2", description: "[Nervous Conditions by Tsitsi Dangarembga - Plot Summary and ...] ..." },
      { label: "Part 3", description: "[Nervous Conditions Chapter 10 Summary - Course Hero] This study guide and infographic for Tsitsi Dangarembga's Nervous Conditions offer summary and analysis on themes, symbols, and other literary dev" },
      { label: "Part 4", description: "[Nervous Conditions: Themes | SparkNotes] Nervous Conditions are conflicts between those characters who endorse traditional ways and those who look to Western or so-called “modern” answers to problems" },
      { label: "Part 5", description: "[Nervous Conditions Character Analysis - LitCharts] Need help on characters in Tsitsi Dangarembga's Nervous Conditions?" }
    ],
    themeAnalysis: "[Nervous Conditions by Tsitsi Dangarembga - Plot Summary and ...] ... Tsitsi Dangarembga - Plot Summary and Analysis ... NERVOUS CONDITIONS by TSITSI DANGAREMBGA Explained | Summary | Analysis | Themes | Context.\n\n[Nervous Conditions Chapter 10 Summary - Course Hero] This study guide and infographic for Tsitsi Dangarembga's Nervous Conditions offer summary and analysis on themes, symbols, and other literary devices found ...\n\n[Summary & Study Guide Nervous Conditions by Tsitsi ... - Amazon.com] Summary & Study Guide Nervous Conditions by Tsitsi Dangarembga ... Analysis ... plot, key themes, important characters, and quotes of almost any story.\n\n[Nervous Conditions: Themes | SparkNotes] Nervous Conditions are conflicts between those characters who endorse traditional ways and those who look",
    techniques: "[Nervous Conditions Chapter 10 Summary - Course Hero] This study guide and infographic for Tsitsi Dangarembga's Nervous Conditions offer summary and analysis on themes, symbols, and other literary devices found ...",
    excerpts: [],
    insights: "[Nervous Conditions: Themes | SparkNotes] Nervous Conditions are conflicts between those characters who endorse traditional ways and those who look to Western or so-called “modern” answers to problems ...\n\n[Nervous Conditions Character Analysis - LitCharts] Need help on characters in Tsitsi Dangarembga's Nervous Conditions? Check out our detailed character descriptions.\n\n[Nervous Conditions by Tsitsi Dangarembga - Plot Summary and ...] ... Tsitsi Dangarembga - Plot Summary and Analysis ... NERVOUS CONDITIONS by TSITSI DANGAREMBGA Explained | Summary | Analysis | Themes | Context.\n\n[Nervous Con",
  },

  "houseboy": {
    id: "houseboy",
    characters: [
      { name: "Houseboy Character Analysis", role: "角色", description: "Houseboy 中的主要角色。" },
      { name: "Houseboy", role: "角色", description: "Houseboy 中的主要角色。" },
      { name: "Analysis", role: "角色", description: "Houseboy 中的主要角色。" },
      { name: "Ferdinand Oyono", role: "角色", description: "Houseboy 中的主要角色。" },
      { name: "Racism", role: "角色", description: "Houseboy 中的主要角色。" },
      { name: "Scribd", role: "角色", description: "Houseboy 中的主要角色。" },
      { name: "Africans", role: "角色", description: "Houseboy 中的主要角色。" },
      { name: "Europeans", role: "角色", description: "Houseboy 中的主要角色。" }
    ],
    plotSummary: "Get ready to explore Houseboy and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide Houseboy Ferdinand Oyono Houseboy Ferdinand Oyono 28 pages • 56-minute read Ferdinand Oyono Houseboy Fiction | Novel | Adult | Published in 1956 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Chapter Summaries & Analyses Prologue and First Exercise Book Second Exercise Book Character Analysis Themes Symbols & Motifs Important Quotes Essay Topics Quizzes NEW Reading Tools Discussion Questions Games Plot Scramble NEW True or False NEW Summary and Study Guide Overview Houseboy (1956) is a riveting narrative by Ferdinand Oyono. T",
    plotNodes: [
      { label: "Part 1", description: "Get ready to explore Houseboy and its meaning." },
      { label: "Part 2", description: "Study Guide Houseboy Ferdinand Oyono Houseboy Ferdinand Oyono 28 pages • 56-minute read Ferdinand Oyono Houseboy Fiction | Novel | Adult | Published in 1956 A modern alternative to SparkNotes and Clif" }
    ],
    themeAnalysis: "Get ready to explore Houseboy and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide Houseboy Ferdinand Oyono Houseboy Ferdinand Oyono 28 pages • 56-minute read Ferdinand Oyono Houseboy Fiction | Novel | Adult | Published in 1956 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Chapter Summaries & Analyses Prologue and First Exercise Book Second Exercise Book Character Analysis Themes Symbols & Motifs Important Quo",
    techniques: "[Literary Analysis – Houseboy by Ferdinand Oyono - Cameroon] In Houseboy by Ferdinand Oyono, the protagonist, Toundi Onduo struggles with his social identity and writes about his experiences in a diary which is the style ...\n\n[#Book_Review Houseboy, by Ferdinand Oyono, is an ... - Facebook] Houseboy begins with an unusual narrative technique, as the main character is found near-death by a vacationing Frenchman in what was then ...\n\n[Critical Analysis of Major Themes in Ferdinand Oyono's Houseboy] Houseboy (1956) is a riveting narrative by Ferdinand Oyono. Though shorter in length than most nov",
    excerpts: [],
    insights: "[Houseboy Summary and Study Guide - SuperSummary] He is beaten badly, so much so that he dies after fleeing to Spanish Guinea. Houseboy addresses themes of sexuality, Christianity, the abuse of power, and the ...\n\n[Houseboy Character Analysis | SuperSummary] Get ready to explore Houseboy and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained ...\n\n[Analysis of Ferdinand Oyono's Houseboy | PDF | Racism - Scribd] \"Houseboy\" explores racial prejudice through the personal relationships between Africans and Europeans. Characters l",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/Houseboy", tier: "reference", fetchedAt: "2026-05-21T04:48:52.740Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "the-palm-wine-drinkard": {
    id: "the-palm-wine-drinkard",
    characters: [
      { name: "The Palm", role: "角色", description: "The Palm-Wine Drinkard 中的主要角色。" },
      { name: "Wine Drinkard Characters", role: "角色", description: "The Palm-Wine Drinkard 中的主要角色。" },
      { name: "Wine Drinkard", role: "角色", description: "The Palm-Wine Drinkard 中的主要角色。" },
      { name: "Amos Tutuola", role: "角色", description: "The Palm-Wine Drinkard 中的主要角色。" },
      { name: "Summary", role: "角色", description: "The Palm-Wine Drinkard 中的主要角色。" },
      { name: "Study Guide", role: "角色", description: "The Palm-Wine Drinkard 中的主要角色。" },
      { name: "Plot Summary", role: "角色", description: "The Palm-Wine Drinkard 中的主要角色。" },
      { name: "Chapter Summaries", role: "角色", description: "The Palm-Wine Drinkard 中的主要角色。" }
    ],
    plotSummary: "[The Palm-Wine Drinkard by Amos Tutuola l Summary & Study Guide] This study guide includes a detailed Plot Summary, Chapter Summaries & Analysis, Character Descriptions, Objects/Places, Themes, Styles, Quotes, and Topics for ...\n\n[[Solved] Plot dramatic elements thematic preoccupation ... - Studocu] \"The Palm-Wine Drinkard\" is a novel written by Amos Tutuola, a Nigerian author. It tells the story of a young man, the drinkard, who embarks on a journey to ...\n\n[The Palm-Wine Drinkard Characters - eNotes.com] The main characters in The Palm-Wine Drinkard are the narrator, the palm-wine tapster, and the narrator's wife. The narrator is the novel's protagonist, ...\n\n[CHARACTERS AND JOURNEY IN AMOS TUTUOLA'S THE PALM ...] This project work deals with a critical analysis of characters and their journey using the novels of Amos Tutuola's The Palm- wine Drinkard and Gabriel A.\n\n[The Palm-Wine Drinkard: Analysis of Setting | Literature and Writing] The narrative follows the journey of the palm-w",
    plotNodes: [
      { label: "Part 1", description: "[The Palm-Wine Drinkard by Amos Tutuola l Summary & Study Guide] This study guide includes a detailed Plot Summary, Chapter Summaries & Analysis, Character Descriptions, Objects/Places, Themes, Styles" },
      { label: "Part 2", description: "[[Solved] Plot dramatic elements thematic preoccupation ..." },
      { label: "Part 3", description: "[The Palm-Wine Drinkard Characters - eNotes.com] The main characters in The Palm-Wine Drinkard are the narrator, the palm-wine tapster, and the narrator's wife." },
      { label: "Part 4", description: "[CHARACTERS AND JOURNEY IN AMOS TUTUOLA'S THE PALM ...] This project work deals with a critical analysis of characters and their journey using the novels of Amos Tutuola's The Palm- wine Drinkard and " },
      { label: "Part 5", description: "[The Palm-Wine Drinkard: Analysis of Setting | Literature and Writing] The narrative follows the journey of the palm-w" }
    ],
    themeAnalysis: "[The Palm-Wine Drinkard by Amos Tutuola l Summary & Study Guide] This study guide includes a detailed Plot Summary, Chapter Summaries & Analysis, Character Descriptions, Objects/Places, Themes, Styles, Quotes, and Topics for ...\n\n[The Palm-Wine Drinkard: Analysis of Setting | Literature and Writing] The narrative follows the journey of the palm-wine drinkard and his wife as they traverse a wild and uncharted bush that evokes both the natural beauty and ...\n\n[Summary and analysis of The Palm Wine Drinkard by Amos Tutuola] This content isn't available. Summary and analysis of The Palm Wine Drinkard by Amos Tutuola. 2.8K views · 11 months ago ...more. English ...\n\n[CHARACTERS AND JOURNEY IN AMOS TUTUOLA'S THE PALM ...] This project work deals with a critical analysis of characters and their j",
    techniques: "[The Palm-Wine Drinkard: Analysis of Setting | Literature and Writing] The narrative follows the journey of the palm-wine drinkard and his wife as they traverse a wild and uncharted bush that evokes both the natural beauty and ...\n\n[The Palm-Wine Drinkard by Amos Tutuola l Summary & Study Guide] This study guide includes a detailed Plot Summary, Chapter Summaries & Analysis, Character Descriptions, Objects/Places, Themes, Styles, Quotes, and Topics for ...",
    excerpts: [
      { quote: "The Palm-Wine Drinkard", context: "From The Palm-Wine Drinkard" }
    ],
    insights: "[The Palm-wine Drinkard and His Dead Palm-wine Tapster in the Dead] When the palm-wine drinkard hears that the dead do not go straight to heaven but live in other towns, he decides to go find his dead tapster. The drinkard is ...\n\n[The Palm-Wine Drinkard: Analysis of Setting | Literature and Writing] The narrative follows the journey of the palm-wine drinkard and his wife as they traverse a wild and uncharted bush that evokes both the natural beauty and ...\n\n[The Palm-Wine Drinkard Characters - eNotes.com] The main characters in The Palm-Wine Drinkard are the narrator, the palm-wine tapster, a",
  },

  "mine-boy": {
    id: "mine-boy",
    characters: [
      { name: "Mine Boy Character", role: "角色", description: "Mine Boy 中的主要角色。" },
      { name: "List", role: "角色", description: "Mine Boy 中的主要角色。" },
      { name: "Mine Boy", role: "角色", description: "Mine Boy 中的主要角色。" },
      { name: "Peter Abrahams", role: "角色", description: "Mine Boy 中的主要角色。" },
      { name: "Mine Boy Themes", role: "角色", description: "Mine Boy 中的主要角色。" },
      { name: "Literature Analysis", role: "角色", description: "Mine Boy 中的主要角色。" },
      { name: "Characters", role: "角色", description: "Mine Boy 中的主要角色。" },
      { name: "Themes", role: "角色", description: "Mine Boy 中的主要角色。" }
    ],
    plotSummary: "[[Solved] Summary of the novel mine boy by Peter Abrahams Include ...] \"Mine Boy\" is a novel by Peter Abrahams that tells the story of Xuma, a young man who leaves his rural village to seek work in Johannesburg's gold mines.\n\n[Mine Boy Character List - GradeSaver] Mine Boy study guide contains a biography of Peter Abrahams, literature essays, quiz questions, major themes, characters, and a full summary ...\n\n[Mine Boy Themes - GradeSaver] Mine Boy study guide contains a biography of Peter Abrahams, literature essays, quiz questions, major themes, characters, and a full summary ...\n\n[Themes and Summary of Mine Boy | PDF | Shanty Town - Scribd] Mine Boy is a 1946 South African novel by Peter Abrahams that explores the life of Xuma, a young black man who migrates to Johannesburg in search of work in ...\n\n[Literature Analysis of 'Mine Boy': Characters, Themes, and Social ...] Major Themes in Mine Boy. The novel explores several significant themes relevant to apartheid South Africa. Rural vs",
    plotNodes: [
      { label: "Part 1", description: "[[Solved] Summary of the novel mine boy by Peter Abrahams Include ...] \"Mine Boy\" is a novel by Peter Abrahams that tells the story of Xuma, a young man who leaves his rural village to seek work in Jo" },
      { label: "Part 2", description: "[Mine Boy Character List - GradeSaver] Mine Boy study guide contains a biography of Peter Abrahams, literature essays, quiz questions, major themes, characters, and a full summary ..." },
      { label: "Part 3", description: "[Mine Boy Themes - GradeSaver] Mine Boy study guide contains a biography of Peter Abrahams, literature essays, quiz questions, major themes, characters, and a full summary ..." },
      { label: "Part 4", description: "[Themes and Summary of Mine Boy | PDF | Shanty Town - Scribd] Mine Boy is a 1946 South African novel by Peter Abrahams that explores the life of Xuma, a young black man who migrates to Johannesburg in" },
      { label: "Part 5", description: "[Literature Analysis of 'Mine Boy': Characters, Themes, and Social ...] Major Themes in Mine Boy." }
    ],
    themeAnalysis: "[Literature Analysis of 'Mine Boy': Characters, Themes, and Social ...] Major Themes in Mine Boy. The novel explores several significant themes relevant to apartheid South Africa. Rural vs. Urban Life: Xuma's journey ...\n\n[Themes of Mine Boy by Peter ABRAHAMS//October 25, 2023] Summary and analysis of Mine Boy by Peter Abrahams. English ... Mine Boy - Peter Abrahams | book summary & review. GMBookshop•1.8K views.\n\n[Mine Boy Character List - GradeSaver] Mine Boy study guide contains a biography of Peter Abrahams, literature essays, quiz questions, major themes, characters, and a full summary ...\n\n[Mine Boy Themes - GradeSaver] Mine Boy study guide contains a biography of Peter Abrahams, literature essays, quiz questions, major themes, characters, and a full summary ...\n\n[Themes and Summary",
    techniques: "",
    excerpts: [],
    insights: "[Mine Boy Character List - GradeSaver] Mine Boy study guide contains a biography of Peter Abrahams, literature essays, quiz questions, major themes, characters, and a full summary ...\n\n[Mine Boy Themes - GradeSaver] Mine Boy study guide contains a biography of Peter Abrahams, literature essays, quiz questions, major themes, characters, and a full summary ...\n\n[Themes and Summary of Mine Boy | PDF | Shanty Town - Scribd] Mine Boy is a 1946 South African novel by Peter Abrahams that explores the life of Xuma, a young black man who migrates to Johannesburg in search of work in ...\n\n[Literature An",
  },

  // ==================== 美洲 ====================

  "love-in-cholera": {
    id: "love-in-cholera",
    plotSummary: "《霍乱时期的爱情》是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，首次出版于1985年。该小说是作者结合自己父母的爱情故事，以及一些新闻素材创作而成。该小说讲述了费尔明娜、阿里萨、乌尔诺比三人长达半个世纪的三角恋情：年轻的电报员阿里萨在第一眼见到“花冠女神”费尔明娜时，便深深地爱上了她，在疯狂追求女神的同时却遭到女方父亲洛伦索·达萨的强烈反对。后来，虽然有其父的授意，但主要还是费尔明娜自己的抉择，她与身份高贵的胡维纳尔·乌尔诺比医生结了婚。历经半个世纪，在乌尔比诺意外去世后，费尔明娜和阿里萨终于在古稀之年寻觅回迷失的爱情。该小说不仅表达了“经历爱情的折磨是一种尊严”，更重要的是展现了哥伦比亚的历史。战争和霍乱威胁着拉美人民的生命，而人为的破坏加剧了人与自然的对立，人的社会孤独感使人与人之间缺乏理解信任，心理距离加大。在艺术手法上，该小说采用的是法国后期浪漫主义爱情小说的笔法。小说对加勒比海城\n《霍乱时期的爱情》是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，首次出版于1985年。 [23]该小说是作者结合自己父母的爱情故事，以及一些新闻素材创作而成。 [11]\n\n该小说讲述了费尔明娜、阿里萨、乌尔诺比三人长达半个世纪的三角恋情：年轻的电报员阿里萨在第一眼见到“花冠女神”费尔明娜时，便深深地爱上了她，在疯狂追求女神的同时却遭到女方父亲洛伦索·达萨的强烈反对。后来，虽然有其父的授意，但主要还是费尔明娜自己的抉择，她与身份高贵的胡维纳尔·乌尔诺比医生结了婚。历经半个世纪，在乌尔比诺意外去世后，费尔明娜和阿里萨终于在古稀之年寻觅回迷失的爱情。 [10]该小说不仅表达了“经历爱情的折磨是一种尊严”，更重要的是展现了哥伦比亚的历史。战争和霍乱威胁着拉美人民的生命，而人为的破坏加剧了人与自然的对立，人的社会孤独感使人与人之间缺乏理解信任，心理距离加大。 [1]在艺术手法上，该小说采用的是法国后期浪漫主义爱情小说的笔法。小说对加勒比海城市及世俗风貌的描写，对热带丛林及河流沿岸景象的描绘，以及人物的处世和心理，又都是典型的拉美风格。 [13]\n\n1985年，该小说出版，立即在拉美文坛上引起反响，第一版即出书120万册，销售一空；围绕小说的评论更是连篇累牍，世界各国纷纷翻译出版。 [5]2007年，由该小说改编的同名电影上映，该片由迈克·内威尔执导。 [6]\n\n《瘟疫年纪事》（A Jour",
    plotNodes: [
      { label: "Part 1", description: "《霍乱时期的爱情》是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，首次出版于1985年。该小说是作者结合自己父母的爱情故事，以及一些新闻素材创作而成。该小说讲述了费尔明娜、阿里萨、乌尔诺比三人长达半个世纪的三角恋情：年轻的电报员阿里萨在第一眼见到“花冠女神”费尔明娜时，便深深地爱上了她，在疯狂追求女神的同时却遭到女方父亲洛伦索·达萨的强烈反对。后来，虽然有其父的授意，但主要还是费尔明娜自己的抉择，她" },
      { label: "Part 2", description: "该小说讲述了费尔明娜、阿里萨、乌尔诺比三人长达半个世纪的三角恋情：年轻的电报员阿里萨在第一眼见到“花冠女神”费尔明娜时，便深深地爱上了她，在疯狂追求女神的同时却遭到女方父亲洛伦索·达萨的强烈反对。后来，虽然有其父的授意，但主要还是费尔明娜自己的抉择，她与身份高贵的胡维纳尔·乌尔诺比医生结了婚。历经半个世纪，在乌尔比诺意外去世后，费尔明娜和阿里萨终于在古稀之年寻觅回迷失的爱情。" },
      { label: "Part 3", description: "1985年，该小说出版，立即在拉美文坛上引起反响，第一版即出书120万册，销售一空；围绕小说的评论更是连篇累牍，世界各国纷纷翻译出版。" }
    ],
    themeAnalysis: "《霍乱时期的爱情》是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，首次出版于1985年。该小说是作者结合自己父母的爱情故事，以及一些新闻素材创作而成。该小说讲述了费尔明娜、阿里萨、乌尔诺比三人长达半个世纪的三角恋情：年轻的电报员阿里萨在第一眼见到“花冠女神”费尔明娜时，便深深地爱上了她，在疯狂追求女神的同时却遭到女方父亲洛伦索·达萨的强烈反对。后来，虽然有其父的授意，但主要还是费尔明娜自己的抉择，她与身份高贵的胡维纳尔·乌尔诺比医生结了婚。历经半个世纪，在乌尔比诺意外去世后，费尔明娜和阿里萨终于在古稀之年寻觅回迷失的爱情。该小说不仅表达了“经历爱情的折磨是一种尊严”，更重要的是展现了哥伦比亚的历史。战争和霍乱威胁着拉美人民的生命，而人为的破坏加剧了人与自然的对立，人的社会孤独感使人与人之间缺乏理解信任，心理距离加大。在艺术手法上，该小说采用的是法国后期浪漫主义爱情小说的笔法。小说对加勒比海城\n《霍乱时期的爱情》是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，首次出版于1985年。 [23]该小说是作者结合自己父母的爱情故事，以及一些新闻素材创作而成。 [11]\n\n该小说讲述了费尔明娜、阿里萨、乌尔诺比三人长达半个世纪的三角恋情：年轻的电报员阿里萨在第一眼见到“花冠女神”费尔明娜时，便深深地爱上了她，在疯狂追求女神的同时却遭到女方父亲洛伦索·达萨的强烈反对。后来，虽然有其父的授意，但主要还是费尔明娜自己的抉择，她与身份高贵的胡维纳尔·乌尔诺比医生结了婚。历经半个世纪，在乌尔比诺意外去世后，费尔明娜和阿里萨终于在古稀之年寻觅回迷失的爱情。 [10]该小说不仅表达了“经历爱情的折磨是一种尊严”，更重要的是展现了哥伦比亚的历史。战争和霍乱威胁着拉美人民的生命，而人为的破坏加剧了人与自然的对立，人的社会孤独感使人与人之间缺乏理解信任，心理距离加大。 [1]在艺术手法上，该小说采用的是法国",
    techniques: "",
    excerpts: [],
    insights: "《霍乱时期的爱情》是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，首次出版于1985年。该小说是作者结合自己父母的爱情故事，以及一些新闻素材创作而成。该小说讲述了费尔明娜、阿里萨、乌尔诺比三人长达半个世纪的三角恋情：年轻的电报员阿里萨在第一眼见到“花冠女神”费尔明娜时，便深深地爱上了她，在疯狂追求女神的同时却遭到女方父亲洛伦索·达萨的强烈反对。后来，虽然有其父的授意，但主要还是费尔明娜自己的抉择，她与身份高贵的胡维纳尔·乌尔诺比医生结了婚。历经半个世纪，在乌尔比诺意外去世后，费尔明娜和阿里萨终于在古稀之年寻觅回迷失的爱情。该小说不仅表达了“经历爱情的折磨是一种尊严”，更重要的是展现了哥伦比亚的历史。战争和霍乱威胁着拉美人民的生命，而人为的破坏加剧了人与自然的对立，人的社会孤独感使人与人之间缺乏理解信任，心理距离加大。在艺术手法上，该小说采用的是法国后期浪漫主义爱情小说的笔法。小说对加勒比海城\n《霍乱时期的爱情》是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，首次出版于1985年。 [23]该小说是作者结合自己父母的爱情故事，以及一些新闻素材创作而成。 [11]\n\n该小说讲述了费尔明娜、阿里萨、乌尔诺比三人长达半个世纪的三角恋情：年轻的电报员阿里萨在第一眼见到“花冠女神”费尔明娜时，便深深地爱上了她，在疯狂追求女神的同时却遭到女方父亲洛伦索·达萨的强烈反对。后来，虽然有其父的授意，但主要",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E9%9C%8D%E4%B9%B1%E6%97%B6%E6%9C%9F%E7%9A%84%E7%88%B1%E6%83%85", tier: "reference", fetchedAt: "2026-05-21T04:44:13.699Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "ficciones": {
    id: "ficciones",
    plotSummary: "《虚构集》是阿根廷作家豪·路·博尔赫斯创作的小说集，由1941年的《小径分岔的花园》与1944年的《杜撰集》合并而成，中文版由王永年翻译，浙江文艺出版社于2008年首次出版。全书以短篇形式融合侦探、幻想等多元体裁，收录《环形废墟》《巴比伦彩票》《通天塔图书馆》等作品，构建虚实交织的叙事迷宫，探讨时间、无限性与存在本质等哲学命题。文本打破传统线性结构，通过嵌套叙事、镜像对称等手法呈现思辨实验，例如《小径分岔的花园》以“时间分叉”构建宇宙模型，《南方》则暗藏日常场景中的命运隐喻。书中常以文学评论或考据为外壳，通过文本互涉挑战真实性边界，语言兼具智性密度与诗意留白，开创了拉美文学的新叙事范式。\n《虚构集》是阿根廷作家豪·路·博尔赫斯创作的小说集，由1941年的《小径分岔的花园》与1944年的《杜撰集》合并而成，中文版由王永年翻译，浙江文艺出版社于2008年首次出版 [1] [3-4]。全书以短篇形式融合侦探、幻想等多元体裁，收录《环形废墟》《巴比伦彩票》《通天塔图书馆》等作品，构建虚实交织的叙事迷宫，探讨时间、无限性与存在本质等哲学命题。\n\n文本打破传统线性结构，通过嵌套叙事、镜像对称等手法呈现思辨实验，例如《小径分岔的花园》以“时间分叉”构建宇宙模型，《南方》则暗藏日常场景中的命运隐喻。书中常以文学评论或考据为外壳，通过文本互涉挑战真实性边界，语言兼具智性密度与诗意留白，开创了拉美文学的新叙事范式 [2]。\n\n《虚构集》是小说集，给博尔赫斯带来巨大声誉。《虚构集》是其作者发表于1944年，含《小径分岔的花园》和《杜撰集》两个部分。博尔赫斯令人耳目一新的文风得到了最大限度的体现。 [2]\n\n这个集子里的故事不需要很多诠释。第七篇（《小径分岔的花园》）是侦探小说；读者看到一桩罪行的实施过程和全部准备工作，在最后一段之前，对作案目的也许有所察觉，但不一定理解。另外几篇是幻想小说；其中的《巴比伦彩票》有象征主义色彩。我不是第一个叙说《通天塔图书馆》故事的人；……《环形废墟》纯属虚构；《<吉诃德>的作者皮埃尔?梅纳尔》的虚构成分是它的主人公的命运所决定的，我归诸他的一份作品清单不太有趣，但也不是毫无根据的，那是他的心灵历程的图解……\n\n《南方》也许是我最得意的故事，我要说的只是既可以把它当作传奇故事的直接叙述来看，也可以从别的角度来看。\n\n智利伟大诗人、诺贝尔文学奖得主聂鲁达说：",
    plotNodes: [
      { label: "Part 1", description: "《虚构集》是阿根廷作家豪·路·博尔赫斯创作的小说集，由1941年的《小径分岔的花园》与1944年的《杜撰集》合并而成，中文版由王永年翻译，浙江文艺出版社于2008年首次出版。全书以短篇形式融合侦探、幻想等多元体裁，收录《环形废墟》《巴比伦彩票》《通天塔图书馆》等作品，构建虚实交织的叙事迷宫，探讨时间、无限性与存在本质等哲学命题。文本打破传统线性结构，通过嵌套叙事、镜像对称等手法呈现思辨实验，例如《" },
      { label: "Part 2", description: "文本打破传统线性结构，通过嵌套叙事、镜像对称等手法呈现思辨实验，例如《小径分岔的花园》以“时间分叉”构建宇宙模型，《南方》则暗藏日常场景中的命运隐喻。书中常以文学评论或考据为外壳，通过文本互涉挑战真实性边界，语言兼具智性密度与诗意留白，开创了拉美文学的新叙事范式 [2]。" },
      { label: "Part 3", description: "《虚构集》是小说集，给博尔赫斯带来巨大声誉。《虚构集》是其作者发表于1944年，含《小径分岔的花园》和《杜撰集》两个部分。博尔赫斯令人耳目一新的文风得到了最大限度的体现。" },
      { label: "Part 4", description: "这个集子里的故事不需要很多诠释。第七篇（《小径分岔的花园》）是侦探小说；读者看到一桩罪行的实施过程和全部准备工作，在最后一段之前，对作案目的也许有所察觉，但不一定理解。另外几篇是幻想小说；其中的《巴比伦彩票》有象征主义色彩。我不是第一个叙说《通天塔图书馆》故事的人；……《环形废墟》纯属虚构；《<吉诃德>的作者皮埃尔?梅纳尔》的虚构成分是它的主人公的命运所决定的，我归诸他的一份作品清单不太有趣，但也" },
      { label: "Part 5", description: "《南方》也许是我最得意的故事，我要说的只是既可以把它当作传奇故事的直接叙述来看，也可以从别的角度来看。" }
    ],
    themeAnalysis: "《虚构集》是阿根廷作家豪·路·博尔赫斯创作的小说集，由1941年的《小径分岔的花园》与1944年的《杜撰集》合并而成，中文版由王永年翻译，浙江文艺出版社于2008年首次出版。全书以短篇形式融合侦探、幻想等多元体裁，收录《环形废墟》《巴比伦彩票》《通天塔图书馆》等作品，构建虚实交织的叙事迷宫，探讨时间、无限性与存在本质等哲学命题。文本打破传统线性结构，通过嵌套叙事、镜像对称等手法呈现思辨实验，例如《小径分岔的花园》以“时间分叉”构建宇宙模型，《南方》则暗藏日常场景中的命运隐喻。书中常以文学评论或考据为外壳，通过文本互涉挑战真实性边界，语言兼具智性密度与诗意留白，开创了拉美文学的新叙事范式。\n《虚构集》是阿根廷作家豪·路·博尔赫斯创作的小说集，由1941年的《小径分岔的花园》与1944年的《杜撰集》合并而成，中文版由王永年翻译，浙江文艺出版社于2008年首次出版 [1] [3-4]。全书以短篇形式融合侦探、幻想等多元体裁，收录《环形废墟》《巴比伦彩票》《通天塔图书馆》等作品，构建虚实交织的叙事迷宫，探讨时间、无限性与存在本质等哲学命题。\n\n文本打破传统线性结构，通过嵌套叙事、镜像对称等手法呈现思辨实验，例如《小径分岔的花园》以“时间分叉”构建宇宙模型，《南方》则暗藏日常场景中的命运隐喻。书中常以文学评论或考据为外壳，通过文本互涉挑战真实性边界，语言兼具智性密度与诗意留白，开创了拉美文学的新叙事范式 [2]。\n\n《虚构集》是小说集，给博尔赫斯带来巨大声誉。《虚构集》是其作者发表于1944年，含《小径分岔的花园》和《杜撰集》两个部分。博尔赫斯令人耳目一新的文风得到了最大限度的体现。 [2]\n\n这个集子里的故事不需要很多诠释。第七篇（《小径分岔的花园》）是侦探小说；读者看到一桩罪行的实施过程和全部准备工作，在最后一段之前，对作案目的也许有所察觉，但不一定理解。另外几篇是幻想小说；其中",
    techniques: "",
    excerpts: [],
    insights: "《虚构集》是阿根廷作家豪·路·博尔赫斯创作的小说集，由1941年的《小径分岔的花园》与1944年的《杜撰集》合并而成，中文版由王永年翻译，浙江文艺出版社于2008年首次出版。全书以短篇形式融合侦探、幻想等多元体裁，收录《环形废墟》《巴比伦彩票》《通天塔图书馆》等作品，构建虚实交织的叙事迷宫，探讨时间、无限性与存在本质等哲学命题。文本打破传统线性结构，通过嵌套叙事、镜像对称等手法呈现思辨实验，例如《小径分岔的花园》以“时间分叉”构建宇宙模型，《南方》则暗藏日常场景中的命运隐喻。书中常以文学评论或考据为外壳，通过文本互涉挑战真实性边界，语言兼具智性密度与诗意留白，开创了拉美文学的新叙事范式。\n《虚构集》是阿根廷作家豪·路·博尔赫斯创作的小说集，由1941年的《小径分岔的花园》与1944年的《杜撰集》合并而成，中文版由王永年翻译，浙江文艺出版社于2008年首次出版 [1] [3-4]。全书以短篇形式融合侦探、幻想等多元体裁，收录《环形废墟》《巴比伦彩票》《通天塔图书馆》等作品，构建虚实交织的叙事迷宫，探讨时间、无限性与存在本质等哲学命题。\n\n文本打破传统线性结构，通过嵌套叙事、镜像对称等手法呈现思辨实验，例如《小径分岔的花园》以“时间分叉”构建宇宙模型，《南方》则暗藏日常场景中的命运隐喻。书中常以文学评论或考据为外壳，通过文本互涉挑战真实性边界，语言兼具智性密度与诗意留白，开创了拉美文学",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E8%99%9A%E6%9E%84%E9%9B%86", tier: "reference", fetchedAt: "2026-05-21T04:46:04.174Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "pedro-paramo": {
    id: "pedro-paramo",
    characters: [
      { name: "Pedro", role: "角色", description: "Pedro Paramo 中的主要角色。" },
      { name: "Character Analysis", role: "角色", description: "Pedro Paramo 中的主要角色。" },
      { name: "Juan Preciado", role: "角色", description: "Pedro Paramo 中的主要角色。" },
      { name: "Susana San Juan", role: "角色", description: "Pedro Paramo 中的主要角色。" },
      { name: "Pedro Paramo", role: "角色", description: "Pedro Paramo 中的主要角色。" }
    ],
    plotSummary: "Get ready to explore Pedro Paramo and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide Pedro Paramo Juan Rulfo Pedro Paramo Juan Rulfo 58 pages • 1-hour read Juan Rulfo Pedro Paramo Fiction | Novel | Adult | Published in 1955 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Background Chapter Summaries & Analyses Pages 1-29 Pages 29-58 Pages 58-83 Pages 83-111 Pages 111-140 Character List NEW Character Analysis Themes Symbols & Motifs Important Quotes Essay Topics Quizzes NEW Reading Tools Discussion Questions Games Plot Scramble NEW True or False NEW Summary and Study Guide Overview Pedro Paramo is a 1955 no",
    plotNodes: [
      { label: "Part 1", description: "Get ready to explore Pedro Paramo and its meaning." },
      { label: "Part 2", description: "Study Guide Pedro Paramo Juan Rulfo Pedro Paramo Juan Rulfo 58 pages • 1-hour read Juan Rulfo Pedro Paramo Fiction | Novel | Adult | Published in 1955 A modern alternative to SparkNotes and CliffsNote" }
    ],
    themeAnalysis: "Get ready to explore Pedro Paramo and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide Pedro Paramo Juan Rulfo Pedro Paramo Juan Rulfo 58 pages • 1-hour read Juan Rulfo Pedro Paramo Fiction | Novel | Adult | Published in 1955 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Background Chapter Summaries & Analyses Pages 1-29 Pages 29-58 Pages 58-83 Pages 83-111 Pages 111-140 Character List NEW Character Analysis T",
    techniques: "[Pedro Paramo Summary - SuperSummary] In the past narrative, Pedro Paramo is a young farmer. He runs errands while thinking about the girl of his dreams, Susana. In the present, Eduviges tells Juan ...\n\n[[PDF] Pedro Paramo Sparknotes - ftp.arcchurches.com] This article provides a comprehensive, expert analysis of Pedro Páramo through the lens of SparkNotes—exploring its plot, themes, characters, literary devices, ...\n\n[Pedro Páramo: Analysis of Major Characters | Literature and Writing] His quest leads him to confront the legacy of his father, Pedro Páramo, a tyrannical and emotionally barren",
    excerpts: [],
    insights: "[Pedro Paramo Summary & Study Guide - BookRags.com] Pedro Paramo Summary & Study Guide includes detailed chapter summaries and analysis, quotes, character descriptions, themes, and more.\n\n[Pedro Páramo Character Analysis - LitCharts] Pedro Páramo is one of the three protagonists of the novel along with Juan Preciado (Pedro's son) and Susana San Juan (Pedro's childhood sweetheart).\n\n[Pedro Paramo Summary - SuperSummary] In the past narrative, Pedro Paramo is a young farmer. He runs errands while thinking about the girl of his dreams, Susana. In the present, Eduviges tells Juan ...\n\n[Pedro Param",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E4%BD%A9%E5%BE%B7%E7%BD%97%C2%B7%E5%B7%B4%E6%8B%89%E8%8E%AB", tier: "reference", fetchedAt: "2026-05-21T05:00:53.225Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "house-of-spirits": {
    id: "house-of-spirits",
    characters: [
      { name: "The House", role: "角色", description: "The House of the Spirits 中的主要角色。" },
      { name: "Spirits", role: "角色", description: "The House of the Spirits 中的主要角色。" },
      { name: "Themes", role: "角色", description: "The House of the Spirits 中的主要角色。" },
      { name: "Wikipedia", role: "角色", description: "The House of the Spirits 中的主要角色。" },
      { name: "Contents", role: "角色", description: "The House of the Spirits 中的主要角色。" },
      { name: "Plot", role: "角色", description: "The House of the Spirits 中的主要角色。" },
      { name: "Main", role: "角色", description: "The House of the Spirits 中的主要角色。" },
      { name: "Publication", role: "角色", description: "The House of the Spirits 中的主要角色。" }
    ],
    plotSummary: "Welcome to the LitCharts study guide on Isabel Allende s The House of the Spirits . Created by the original team behind SparkNotes, LitCharts are the world's best literature guides. The House of the Spirits: Introduction A concise biography of Isabel Allende plus historical and literary context for The House of the Spirits . The House of the Spirits: Plot Summary A quick-reference summary: The House of the Spirits on a single page. The House of the Spirits: Detailed Summary & Analysis In-depth summary and analysis of every chapter of The House of the Spirits . Visual theme-tracking, too. The House of the Spirits: Themes Explanations, analysis, and visualizations of The House of the Spirits 's themes. The House of the Spirits: Quotes The House of the Spirits 's important quotes, sortable by theme, character, or chapter. The House of the Spirits: Characters Description, analysis, and timelines for The House of the Spirits 's characters. The House of the Spirits: Symbols Explanations of T",
    plotNodes: [
      { label: "Part 1", description: "Welcome to the LitCharts study guide on Isabel Allende s The House of the Spirits ." }
    ],
    themeAnalysis: "[The House of the Spirits Study Guide | Literature Guide - LitCharts] In-depth summary and analysis of every chapter of The House of the Spirits. Visual theme-tracking, too.\n\n[The House of the Spirits: Analysis of Major Characters - EBSCO] The House of the Spirits features a rich tapestry of characters whose lives intertwine across generations, exploring themes of love, power, and social change.\n\nWelcome to the LitCharts study guide on Isabel Allende s The House of the Spirits . Created by the original team behind SparkNotes, LitCharts are the world's best literature guides. The House of the Spirits: Introduction A concise biography of Isabel Allende plus historical and literary context for The House of the Spirits . The House of the Spirits: Plot Summary A quick-reference summary: The Hou",
    techniques: "Welcome to the LitCharts study guide on Isabel Allende s The House of the Spirits . Created by the original team behind SparkNotes, LitCharts are the world's best literature guides. The House of the Spirits: Introduction A concise biography of Isabel Allende plus historical and literary context for The House of the Spirits . The House of the Spirits: Plot Summary A quick-reference summary: The House of the Spirits on a single page. The House of the Spirits: Detailed Summary & Analysis In-depth summary and analysis of every chapter of The House of the Spirits . Visual theme-tracking, too. The H",
    excerpts: [
      { quote: "The House of the Spirits", context: "From The House of the Spirits" },
      { quote: "My students can't get enough of your charts and their results have gone through the roof.", context: "From The House of the Spirits" }
    ],
    insights: "[The House of the Spirits: Themes | SparkNotes] The major characters in The House of the Spirits come from two opposing classes: the landed aristocracy and the peasants.\n\n[The House of the Spirits Study Guide | Literature Guide - LitCharts] In-depth summary and analysis of every chapter of The House of the Spirits. Visual theme-tracking, too.\n\n[The House of the Spirits - Wikipedia] The House of the Spirits · Contents · Plot summary · Main characters · Publication history · School curricula · Traditions · Film, theatrical and television ...\n\n[Analysis of Isabel Allende's The House of the Spirit",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%B9%BD%E7%81%B5%E4%B9%8B%E5%AE%B6", tier: "reference", fetchedAt: "2026-05-21T05:12:37.846Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "canto-general": {
    id: "canto-general",
    plotSummary: "Canto General is Pablo Neruda's tenth book of poems. It was first published in Mexico in 1950, by Talleres Gráficos de la Nación. Neruda began to compose it in 1938. \"Canto General\" (\"General Song\") consists of 15 sections, 231 poems, and more than 15,000 lines. This work attempts to be a history or encyclopedia of the entire American Western Hemisphere, or New World, from a Hispanic American perspective.",
    themeAnalysis: "Canto General is Pablo Neruda's tenth book of poems. It was first published in Mexico in 1950, by Talleres Gráficos de la Nación. Neruda began to compose it in 1938. \"Canto General\" (\"General Song\") consists of 15 sections, 231 poems, and more than 15,000 lines.",
    techniques: "Canto General is Pablo Neruda's tenth book of poems. It was first published in Mexico in 1950, by Talleres Gráficos de la Nación. Neruda began to compose it in 1938. \"Canto General\" (\"General Song\") consists of 15 sections, 231 poems, and more than 15,000 lines.",
    excerpts: [],
    insights: "Canto General is Pablo Neruda's tenth book of poems. It was first published in Mexico in 1950, by Talleres Gráficos de la Nación. Neruda began to compose it in 1938. \"Canto General\" (\"General Song\") consists of 15 sections, 231 poems, and more than 15,000 lines.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Canto%20General"
    // }
  },

  "hopscotch": {
    id: "hopscotch",
    characters: [
      { name: "Hopscotch", role: "角色", description: "Hopscotch 中的主要角色。" },
      { name: "Analysis", role: "角色", description: "Hopscotch 中的主要角色。" },
      { name: "Major Characters", role: "角色", description: "Hopscotch 中的主要角色。" },
      { name: "Literature", role: "角色", description: "Hopscotch 中的主要角色。" },
      { name: "Writing", role: "角色", description: "Hopscotch 中的主要角色。" },
      { name: "Julio Cort", role: "角色", description: "Hopscotch 中的主要角色。" },
      { name: "Horacio Oliveira", role: "角色", description: "Hopscotch 中的主要角色。" },
      { name: "Literary Theory", role: "角色", description: "Hopscotch 中的主要角色。" }
    ],
    plotSummary: "[Hopscotch Summary & Study Guide - BookRags.com] Hopscotch is a portrait of a creative soul stymied by an inability to act. The story opens with Horacio searching the bridges of Paris for his mistress La Maga, ...\n\n[Hopscotch: Analysis of Major Characters | Literature and Writing] \"Hopscotch\" is a complex novel by Julio Cortázar that weaves together the lives of its major characters, primarily focusing on Horacio Oliveira, ...\n\n[Hopscotch, Discussion 1, Chapters 73-15 : r/TrueLit - Reddit] Discussion about Hopscotch by Julio Cortázar. Best insights on Hopscotch novel. Understanding themes in Hopscotch. Tips for reading Rayuela by ...\n\n[Delve Seminar Summary: Julio Cortazar: Hopscotch & Blow-Up] Hopscotch is for those that feel it is time to go beyond what we pretend or chase. Perhaps some of us can accept this better when not faced with ...\n\n[Julio Cortázar: 'Hopscotch' — Paola Caronni] Like in the hopscotch game, Horacio moves from one square to another, alone, in search for the unatt",
    plotNodes: [
      { label: "Part 1", description: "[Hopscotch Summary & Study Guide - BookRags.com] Hopscotch is a portrait of a creative soul stymied by an inability to act." },
      { label: "Part 2", description: "[Hopscotch: Analysis of Major Characters | Literature and Writing] \"Hopscotch\" is a complex novel by Julio Cortázar that weaves together the lives of its major characters, primarily focusing on Horaci" },
      { label: "Part 3", description: "[Hopscotch, Discussion 1, Chapters 73-15 : r/TrueLit - Reddit] Discussion about Hopscotch by Julio Cortázar." },
      { label: "Part 4", description: "[Delve Seminar Summary: Julio Cortazar: Hopscotch & Blow-Up] Hopscotch is for those that feel it is time to go beyond what we pretend or chase." },
      { label: "Part 5", description: "[Julio Cortázar: 'Hopscotch' — Paola Caronni] Like in the hopscotch game, Horacio moves from one square to another, alone, in search for the unatt" }
    ],
    themeAnalysis: "[Hopscotch: Analysis of Major Characters | Literature and Writing] \"Hopscotch\" is a complex novel by Julio Cortázar that weaves together the lives of its major characters, primarily focusing on Horacio Oliveira, ...\n\n[Analysis of Julio Cortázar's Hopscotch - Literary Theory and Criticism] The protagonist of Hopscotch is the bohemian Horacio Oliveira, a writer and Argentinean expatriate living in Paris, heartsick over the dissolution of his ...\n\n[Julio Cortázar's Hopscotch (1963) | Book Review, Analysis, and ...] A reflection on Julio Cortázar's Hopscotch (Rayuela), which was published 60 years ago today. This video tries to adopt a structure similar ...\n\n[Hopscotch, Discussion 1, Chapters 73-15 : r/TrueLit - Reddit] Discussion about Hopscotch by Julio Cortázar. Best insights on Hopscotch n",
    techniques: "[Hopscotch: Analysis of Major Characters | Literature and Writing] \"Hopscotch\" is a complex novel by Julio Cortázar that weaves together the lives of its major characters, primarily focusing on Horacio Oliveira, ...\n\n[Analysis of Julio Cortázar's Hopscotch - Literary Theory and Criticism] The protagonist of Hopscotch is the bohemian Horacio Oliveira, a writer and Argentinean expatriate living in Paris, heartsick over the dissolution of his ...\n\n[Julio Cortázar's Hopscotch (1963) | Book Review, Analysis, and ...] A reflection on Julio Cortázar's Hopscotch (Rayuela), which was published 60 years",
    excerpts: [],
    insights: "[Hopscotch Summary & Study Guide - BookRags.com] Hopscotch is a portrait of a creative soul stymied by an inability to act. The story opens with Horacio searching the bridges of Paris for his mistress La Maga, ...\n\n[Delve Seminar Summary: Julio Cortazar: Hopscotch & Blow-Up] Hopscotch is for those that feel it is time to go beyond what we pretend or chase. Perhaps some of us can accept this better when not faced with ...\n\n[Hopscotch: Analysis of Major Characters | Literature and Writing] \"Hopscotch\" is a complex novel by Julio Cortázar that weaves together the lives of its major characters, pr",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/Hopscotch", tier: "reference", fetchedAt: "2026-05-21T05:11:46.424Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "time-of-hero": {
    id: "time-of-hero",
    characters: [
      { name: "The Time", role: "角色", description: "\"The Time of the Hero\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Hero", role: "角色", description: "\"The Time of the Hero\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Faber", role: "角色", description: "\"The Time of the Hero\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Mario Vargas Llosa", role: "角色", description: "\"The Time of the Hero\" 中出现的角色。更多信息请通过搜索链接核实。" }
    ],
    plotSummary: "《The Time of the Hero》是1995年Faber &#38; Faber出版的图书，作者是Mario Vargas Llosa。\n《The Time of the Hero》是1995年Faber & Faber出版的图书，作者是Mario Vargas Llosa。 [1]\n\nSubjects: Josephine, Empress, consort of Napoleon I, Emperor of the French, 1763-1814 -- Correspondence; Napoleon I, Emperor of the French, 1769-1821 -- Correspondence",
    plotNodes: [
      { label: "第 1 部分", description: "《The Time of the Hero》是1995年Faber &#38; Faber出版的图书，作者是Mario Vargas Llosa。 《The Time of the Hero》是1995年Faber & Faber出版的图书，作者是Mario Vargas Llosa。" },
      { label: "第 2 部分", description: "Subjects: Josephine, Empress, consort of Napoleon I, Emperor of the French, 1763-1814 -- Correspondence; Napoleon I, Emperor of the French, 1769-1821 -- Correspondence" }
    ],
    themeAnalysis: "《The Time of the Hero》是1995年Faber &#38; Faber出版的图书，作者是Mario Vargas Llosa。\n《The Time of the Hero》是1995年Faber & Faber出版的图书，作者是Mario Vargas Llosa。 [1]\n\nSubjects: Josephine, Empress, consort of Napoleon I, Emperor of the French, 1763-1814 -- Correspondence; Napoleon I, Emperor of the French, 1769-1821 -- Correspondence",
    techniques: "《The Time of the Hero》是1995年Faber &#38; Faber出版的图书，作者是Mario Vargas Llosa。\n《The Time of the Hero》是1995年Faber & Faber出版的图书，作者是Mario Vargas Llosa。 [1]\n\nSubjects: Josephine, Empress, consort of Napoleon I, Emperor of the French, 1763-1814 -- Correspondence; Napoleon I, Emperor of the French, 1769-1821 -- Correspondence",
    excerpts: [],
    insights: "《The Time of the Hero》是1995年Faber &#38; Faber出版的图书，作者是Mario Vargas Llosa。\n《The Time of the Hero》是1995年Faber & Faber出版的图书，作者是Mario Vargas Llosa。 [1]\n\nSubjects: Josephine, Empress, consort of Napoleon I, Emperor of the French, 1763-1814 -- Correspondence; Napoleon I, Emperor of the French, 1769-1821 -- Correspondence",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/The%20Time%20of%20the%20Hero", tier: "reference", fetchedAt: "2026-05-21T04:42:02.798Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
        { label: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/37499", tier: "original_text", fetchedAt: "2026-05-21T04:42:22.776Z", contributedFields: ["insights"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=The%20Time%20of%20the%20Hero%20Mario%20Vargas%20Llosa" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=The%20Time%20of%20the%20Hero%20Mario%20Vargas%20Llosa" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=The%20Time%20of%20the%20Hero" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=The%20Time%20of%20the%20Hero" },
      ],
    },
  },

  "death-of-artemio-cruz": {
    id: "death-of-artemio-cruz",
    characters: [
      { name: "The Death Of", role: "角色", description: "The Death of Artemio Cruz 中的主要角色。" },
      { name: "Artemio Cruz Summary", role: "角色", description: "The Death of Artemio Cruz 中的主要角色。" },
      { name: "Study Guide", role: "角色", description: "The Death of Artemio Cruz 中的主要角色。" },
      { name: "The Death", role: "角色", description: "The Death of Artemio Cruz 中的主要角色。" },
      { name: "Artemio Cruz", role: "角色", description: "The Death of Artemio Cruz 中的主要角色。" },
      { name: "Plot Summary", role: "角色", description: "The Death of Artemio Cruz 中的主要角色。" },
      { name: "Chapter Summaries", role: "角色", description: "The Death of Artemio Cruz 中的主要角色。" },
      { name: "Analyses", role: "角色", description: "The Death of Artemio Cruz 中的主要角色。" }
    ],
    plotSummary: "Get ready to explore The Death Of Artemio Cruz and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide The Death of Artemio Cruz Carlos Fuentes, Transl. Alfred J. MacAdam The Death of Artemio Cruz Carlos Fuentes, Transl. Alfred J. MacAdam 42 pages • 1-hour read Carlos Fuentes, Transl. Alfred J. MacAdam The Death of Artemio Cruz Fiction | Novel | Adult | Published in 1962 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Chapter Summaries & Analyses Introduction-Chapter 2 Chapters 3-4 Chapters 5-6 Chapters 7-9 Chapters 10-12 Character List NEW Character Analysis Themes Symbols & Motifs Important Quotes Essay Topic",
    plotNodes: [
      { label: "Part 1", description: "Get ready to explore The Death Of Artemio Cruz and its meaning." },
      { label: "Part 2", description: "Study Guide The Death of Artemio Cruz Carlos Fuentes, Transl." }
    ],
    themeAnalysis: "Get ready to explore The Death Of Artemio Cruz and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide The Death of Artemio Cruz Carlos Fuentes, Transl. Alfred J. MacAdam The Death of Artemio Cruz Carlos Fuentes, Transl. Alfred J. MacAdam 42 pages • 1-hour read Carlos Fuentes, Transl. Alfred J. MacAdam The Death of Artemio Cruz Fiction | Novel | Adult | Published in 1962 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summ",
    techniques: "[The Death of Artemio Cruz by Carlos Fuentes | Literature and Writing] A twelve-page discussion of The Death of Artemio Cruz treats the novel's tone, structure, point of view, and treatment of time, followed by more detailed ...\n\nGet ready to explore The Death Of Artemio Cruz and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide The Death of Artemio Cruz Carlos Fuentes, Transl. Alfred J. MacAdam The Death of Artemio Cruz Carlos Fuentes, Transl. Alfred",
    excerpts: [],
    insights: "[The Death Of Artemio Cruz Summary and Study Guide] The Death of Artemio Cruz · Plot Summary · Chapter Summaries & Analyses · Character Analysis · Themes · Symbols & Motifs · Important Quotes · Essay Topics.\n\n[The Death of Artemio Cruz Summary & Study Guide - BookRags.com] The Death of Artemio Cruz Summary & Study Guide includes detailed chapter summaries and analysis, quotes, character descriptions, themes, and more.\n\n[The Death of Artemio Cruz - Wikipedia] The Death of Artemio Cruz is an historical fiction novel published in 1962 by Mexican writer Carlos Fuentes. An English translation by Sa",
  },

  "moby-dick": {
    id: "moby-dick",
    characters: [
      { name: "以实玛利", role: "叙述者", description: "全书唯一的幸存者，故事的讲述者。'叫我以实玛利'——这五个字开启了世界文学中最伟大的航海叙事。他上船是为了逃避陆地上压迫性的自我，却撞进了一场人与命运的终极战争。" },
      { name: "亚哈船长", role: "主人公", description: "裴廓德号的独腿船长，被白鲸莫比·迪克咬断了一条腿后，以恶魔般的执念追杀这条巨鲸。他不是在与鲸鱼作战——他是在与整个宇宙的'恶'和'冷漠'对抗。他的疯狂是哲学意义上的：一个有限的人试图超越自身的极限去攻击无限。" },
      { name: "莫比·迪克", role: "白鲸", description: "一条白色的抹香鲸，既是真实的动物也是全书巨大的象征核心——它可以是上帝、自然、命运或一切人类无法征服的力量。它的'白'是全书最令人着迷的空白。" },
      { name: "魁魁格", role: "重要人物", description: "一个来自南海岛屿的原住民鱼叉手，以实玛利在旅店中与他同床共枕——他们的'非自然友谊'打破了种族、文化和宗教的壁垒。他是梅尔维尔对19世纪文明偏见的优雅反驳。" },
    ],
    plotSummary: "叫我以实玛利。一个厌倦了陆上生活的青年上了一艘名为裴廓德号的捕鲸船，却发现这艘船真正的使命不是捕鲸，而是它的船长亚哈对一条白色巨鲸莫比·迪克的疯狂追猎。亚哈曾被这条巨鲸咬断了一条腿，现在他以宗教般的执念驾驶着整艘船——以及来自世界各地的船员——驶向三大洋寻找那条白色的象征。在以实玛利百科全书式的叙述中，鲸鱼被解剖学式地描述、捕鲸业被历史性地考证、鲸的白色被哲学性地沉思。最终莫比·迪克摧毁了裴廓德号——全船只有以实玛利一人幸存，漂在一口棺材上被救起。",
    plotNodes: [
      { label: "叫我以实玛利", description: "年轻水手以实玛利与南海鱼叉手魁魁格在旅店同床共枕。他们的跨种族友谊是对19世纪偏见的无声反驳" },
      { label: "亚哈登场", description: "裴廓德号出海多日，船长亚哈终于出现在甲板上。那条象牙假腿和脸上的伤疤讲述了一个关于白鲸的故事" },
      { label: "金币的悬赏", description: "亚哈将一枚金币钉在桅杆上——给第一个发现白鲸的人。全船被纳入了亚哈的疯狂使命" },
      { label: "鲸的白色", description: "在著名的第42章中，以实玛利沉思鲸之白色的意义——白色既是一切色彩的总和，也是虚无的颜色" },
      { label: "最后的三天", description: "三天追逐后，莫比·迪克撞沉裴廓德号。亚哈被自己的鱼叉绳缠住拖入海底" },
      { label: "尾声", description: "以实玛利漂在一口棺材上被救起——他是必须活着讲述这个故事的人" }
    ],
    themeAnalysis: "《白鲸》的结构就是意义的迷宫。莫比·迪克是什么？它是自然的冷漠力量、是上帝的不可知面孔、是命运、是恶——或者只是一种白色的鲸鱼，是人类疯狂地将自己的意义投射到它白白的身躯之上。亚哈的追猎是对人类存在处境的终极寓言：一个有限的、受伤的造物，试图攻击那无限的、冷漠的存在本身。以实玛利的存在提供了另一种可能性——不是对抗，而是理解和叙述。小说的百科全书部分构成了一种试图通过知识来理解不可知者的努力——但最终，鲸鱼逃脱了所有分类，就像意义本身。",
    techniques: "梅尔维尔的叙事实验在美国文学中达到了前所未有的高度。以实玛利的声音可以在史诗的庄严、百科全书的学究气、戏剧的独白和粗粝的航海俚语之间自由切换——这种语言多样性本身就是对单一真理的拒绝。小说的结构是断裂的、百科全书式的、看似混乱的——但这正呼应了以实玛利试图理解一个不可能被理解的事件的努力。大量的鲸学章节不是赘肉——它们是小说的哲学核心。这些章节的反讽在于：它们越详尽地描述鲸鱼，莫比·迪克就越逃避被定义。",
    excerpts: [
      { quote: "叫我以实玛利。", context: "世界文学中最著名的开篇句之一——五个词建立了一个叙述者、一个故事和一种亲密的口吻。" },
      { quote: "我所有的手段都是理智的——但我的动机和目标是疯狂的。", context: "亚哈对自己猎鲸计划的惊人诚实的自我诊断——理智与疯狂共生在同一颗心中。" }
    ],
    insights: "《白鲸》是一本无法被归类的书——这也是它在一百多年后仍然活着的原因。它可以是关于捕鲸的科普、关于友谊的故事、关于复仇的悲剧、关于存在的寓言。每次重读都会发现之前错过的东西。也许这正是以实玛利想要告诉我们的：生命拒绝被简化为任何一个单一的意义——我们唯一能做的，就是在被大海吞噬之前，尽力讲述我们所见证的一切。",
  },

  "leaves-of-grass": {
    id: "leaves-of-grass",
    characters: [
      { name: "Leaves", role: "角色", description: "Leaves of Grass 中的主要角色。" },
      { name: "Grass Themes", role: "角色", description: "Leaves of Grass 中的主要角色。" },
      { name: "Grass", role: "角色", description: "Leaves of Grass 中的主要角色。" },
      { name: "Grass Study Guide", role: "角色", description: "Leaves of Grass 中的主要角色。" },
      { name: "Course Hero", role: "角色", description: "Leaves of Grass 中的主要角色。" },
      { name: "Walt Whitman", role: "角色", description: "Leaves of Grass 中的主要角色。" },
      { name: "Summary", role: "角色", description: "Leaves of Grass 中的主要角色。" },
      { name: "Study Guide Leaves", role: "角色", description: "Leaves of Grass 中的主要角色。" }
    ],
    plotSummary: "[Summary & Study Guide Leaves of Grass by Walt ... - Amazon.com] 38 pages of chapter summaries, quotes, character analysis, themes, and more – everything you need to sharpen your knowledge of Leaves of Grass by Walt Whitman.\n\n[Leaves of Grass Themes | SuperSummary] Get ready to explore Leaves of Grass and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes ...\n\n[Leaves of Grass Summary - GradeSaver] Leaves of Grass is a collection of poetry written over Walt Whitman's entire lifetime organized thematically into sections.\n\n[Leaves of Grass Study Guide - Course Hero] This study guide and infographic for Walt Whitman's Leaves of Grass offer summary and analysis on themes, symbols, and other literary devices found in the text.\n\n[Song of Myself by Walt Whitman | Summary, Themes - Scribd] 'I celebrate myself,' declares Walt Whitman's sprawling poem 'Song of Myself.' First published in 1855 in Whitman's collection Leaves of Grass, 'So",
    plotNodes: [
      { label: "Part 1", description: "[Summary & Study Guide Leaves of Grass by Walt ..." },
      { label: "Part 2", description: "[Leaves of Grass Themes | SuperSummary] Get ready to explore Leaves of Grass and its meaning." },
      { label: "Part 3", description: "[Leaves of Grass Summary - GradeSaver] Leaves of Grass is a collection of poetry written over Walt Whitman's entire lifetime organized thematically into sections." },
      { label: "Part 4", description: "[Leaves of Grass Study Guide - Course Hero] This study guide and infographic for Walt Whitman's Leaves of Grass offer summary and analysis on themes, symbols, and other literary devices found in the t" },
      { label: "Part 5", description: "[Song of Myself by Walt Whitman | Summary, Themes - Scribd] 'I celebrate myself,' declares Walt Whitman's sprawling poem 'Song of Myself.' First published in 1855 in Whitman's collection Leaves of Gra" }
    ],
    themeAnalysis: "[Leaves of Grass Themes | SuperSummary] Get ready to explore Leaves of Grass and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes ...\n\n[Leaves of Grass Study Guide - Course Hero] This study guide and infographic for Walt Whitman's Leaves of Grass offer summary and analysis on themes, symbols, and other literary devices found in the text.\n\n[Summary & Study Guide Leaves of Grass by Walt ... - Amazon.com] 38 pages of chapter summaries, quotes, character analysis, themes, and more – everything you need to sharpen your knowledge of Leaves of Grass by Walt Whitman.\n\n《草叶集》是美国诗人沃尔特·惠特曼创作的诗集，首次出版于1855年。《草叶集》是浪漫主义诗集，共收有诗歌300余首。诗歌奔腾壮阔，大气飞扬，汪洋恣肆，豪放不羁；使用朴实粗犷的语言，创造出独具一格的自由体，近于口语，节奏鲜明。《草叶集》是美国诗人惠特曼的代表作，是美国文学史上第一部具有美国民族气派和民族风格的诗集。它开创了一代诗风，对美国诗坛",
    techniques: "[Leaves of Grass - Wikipedia] Leaves of Grass is a poetry collection by American poet Walt Whitman. After self-publishing it in 1855, he spent most of his professional life writing, ...\n\n[Leaves of Grass Study Guide - Course Hero] This study guide and infographic for Walt Whitman's Leaves of Grass offer summary and analysis on themes, symbols, and other literary devices found in the text.",
    excerpts: [],
    insights: "[Leaves of Grass - Wikipedia] Leaves of Grass is a poetry collection by American poet Walt Whitman. After self-publishing it in 1855, he spent most of his professional life writing, ...\n\n[Whitman's Poetry: Symbols | SparkNotes] The title Leaves of Grass highlights another of Whitman's themes: the beauty of the individual. Each leaf or blade of grass possesses its own distinct ...\n\n[from Preface to Leaves of Grass, first edition | The Poetry Foundation] In Leaves of Grass (1855, 1891-2), he celebrated democracy, nature, love, and friendship. This monumental work chanted praises to the body as .",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E8%8D%89%E5%8F%B6%E9%9B%86", tier: "reference", fetchedAt: "2026-05-21T04:56:44.397Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "huckleberry-finn": {
    id: "huckleberry-finn",
    characters: [
      { name: "The Adventures", role: "角色", description: "Adventures of Huckleberry Finn 中的主要角色。" },
      { name: "Huckleberry Finn", role: "角色", description: "Adventures of Huckleberry Finn 中的主要角色。" },
      { name: "Character List", role: "角色", description: "Adventures of Huckleberry Finn 中的主要角色。" },
      { name: "Huckleberry", role: "角色", description: "Adventures of Huckleberry Finn 中的主要角色。" },
      { name: "Huck", role: "角色", description: "Adventures of Huckleberry Finn 中的主要角色。" },
      { name: "Finn", role: "角色", description: "Adventures of Huckleberry Finn 中的主要角色。" },
      { name: "Summary", role: "角色", description: "Adventures of Huckleberry Finn 中的主要角色。" },
      { name: "Analysis", role: "角色", description: "Adventures of Huckleberry Finn 中的主要角色。" }
    ],
    plotSummary: "[A Summary and Analysis on Characters, Themes and Mark Twain] Today's lesson gives you a first hand look at Mark Twain and The Adventures of Huckleberry Finn! How do you read a novel or non-fiction work ...\n\n《哈克贝利·费恩历险记》是美国作家马克·吐温创作的长篇小说，为《汤姆·索亚历险记》的续集，1884年首次出版。小说描写哈克被道格拉斯寡妇收养后，对资产阶级家庭刻板单调的生活极不习惯，对学校的死板教育也感到厌烦，一心向往自由的生活。此时，他的酒鬼父亲突然归来，强行把他带到森林，过起了渔猎生活。但父亲常常发酒疯毒打他。哈克设计逃走，在一个小岛上遇到逃亡黑奴吉姆。二人结伴同行，乘木筏顺密西西比河而下，准备逃到不买卖黑奴的自由州去。一路上他们经常上岸，遇见过各种各样的人。最后他们也没能达到目的地，但吉姆的主人临终前给了他自由，他再也不需要逃亡了。小说通过白人小孩哈克跟逃亡黑奴吉姆结伴在密西西比河流浪的故事，不仅批判封建家庭结仇械斗的野蛮，揭露私刑的毫无人性，而且讽刺宗教的虚伪愚昧，谴责蓄奴制度的罪恶，并歌颂了黑奴的优秀品质，宣传不分种族地位人人都享有自由权利的进步主张。小说用第一人称叙述，大量运用\n《哈克贝利·费恩历险记》是美国作家马克·吐温创作的长篇小说，为《汤姆·索亚历险记》的续集，1884年首次出版。 [32]\n\n小说描写哈克被道格拉斯寡妇收养后，对资产阶级家庭刻板单调的生活极不习惯，对学校的死板教育也感到厌烦，一心向往自由的生活。此时，他的酒鬼父亲突然归来，强行把他带到森林，过起了渔猎生活。但父亲常常发酒疯毒打他。哈克设计逃走，在一个小岛上遇到逃亡黑奴吉姆。二人结伴同行，乘木筏顺密西西比河而下，准备逃到不买卖黑奴的自由州去。一路上他们经常上岸，遇见过各种各样的人。最后他们也没能达到目的地，但吉姆的主人临终前给了他自由，他再也不需要逃亡了。 [12]小说通过白人小孩哈克跟逃亡黑奴吉姆结伴在密西西比河流浪的故事，不仅批判封建家庭结仇械斗的野蛮，揭露私刑的毫无人性，而且讽刺宗教的虚伪愚昧，谴责蓄奴制度的罪恶，并歌颂了黑奴的优秀品质，宣传不分种族地位人人都享有自由权",
    plotNodes: [
      { label: "Part 1", description: "[A Summary and Analysis on Characters, Themes and Mark Twain] Today's lesson gives you a first hand look at Mark Twain and The Adventures of Huckleberry Finn!" },
      { label: "Part 2", description: "《哈克贝利·费恩历险记》是美国作家马克·吐温创作的长篇小说，为《汤姆·索亚历险记》的续集，1884年首次出版。小说描写哈克被道格拉斯寡妇收养后，对资产阶级家庭刻板单调的生活极不习惯，对学校的死板教育也感到厌烦，一心向往自由的生活。此时，他的酒鬼父亲突然归来，强行把他带到森林，过起了渔猎生活。但父亲常常发酒疯毒打他。哈克设计逃走，在一个小岛上遇到逃亡黑奴吉姆。二人结伴同行，乘木筏顺密西西比河而下，准" },
      { label: "Part 3", description: "小说描写哈克被道格拉斯寡妇收养后，对资产阶级家庭刻板单调的生活极不习惯，对学校的死板教育也感到厌烦，一心向往自由的生活。此时，他的酒鬼父亲突然归来，强行把他带到森林，过起了渔猎生活。但父亲常常发酒疯毒打他。哈克设计逃走，在一个小岛上遇到逃亡黑奴吉姆。二人结伴同行，乘木筏顺密西西比河而下，准备逃到不买卖黑奴的自由州去。一路上他们经常上岸，遇见过各种各样的人。最后他们也没能达到目的地，但吉姆的主人临终" }
    ],
    themeAnalysis: "[Adventures of Huckleberry Finn Study Guide - LitCharts] In-depth summary and analysis of every chapter of Adventures of Huckleberry Finn. Visual theme-tracking, too.\n\n[The Adventures of Huckleberry Finn: Themes and Analysis - Video] This video explores the lasting impact and themes of Mark Twain's \"The Adventures of Huckleberry Finn.\" The novel's messages of friendship, independence, and ...\n\n[A Summary and Analysis on Characters, Themes and Mark Twain] Today's lesson gives you a first hand look at Mark Twain and The Adventures of Huckleberry Finn! How do you read a novel or non-fiction work ...\n\n[Adventures of Huckleberry Finn: Analysis of Major Characters] \"Adventures of Huckleberry Finn,\" written by Mark Twain, features a rich tapestry of characters that illuminate themes of race, mora",
    techniques: "",
    excerpts: [
      { quote: "The Adventures of Huckleberry Finn.", context: "From Adventures of Huckleberry Finn" },
      { quote: "Adventures of Huckleberry Finn,", context: "From Adventures of Huckleberry Finn" }
    ],
    insights: "[Adventures of Huckleberry Finn - Wikipedia] Adventures of Huckleberry Finn is an often scathing satire on entrenched attitudes, particularly racism.\n\n[Adventures of Huckleberry Finn Study Guide - LitCharts] In-depth summary and analysis of every chapter of Adventures of Huckleberry Finn. Visual theme-tracking, too.\n\n[The Adventures of Huckleberry Finn: Character List | SparkNotes] A list of all the characters in The Adventures of Huckleberry Finn. The Adventures of Huckleberry Finn characters include: Huckleberry “Huck” Finn, ...\n\n[The Adventures of Huckleberry Finn: Themes and Analysis - Vid",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%93%88%E5%85%8B%E8%B4%9D%E5%88%A9%C2%B7%E8%B4%B9%E6%81%A9%E5%8E%86%E9%99%A9%E8%AE%B0", tier: "reference", fetchedAt: "2026-05-21T04:58:37.740Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "great-gatsby": {
    id: "great-gatsby",
    characters: [
      { name: "杰伊·盖茨比", role: "主人公", description: "出身贫寒的詹姆斯·盖兹通过非法私酒生意成为百万富翁后，在西卵买下豪宅——只为每晚看着海湾对岸黛西家那盏绿灯。他的'了不起'在于他将整个生命投注到一个梦想之中——即使那个梦想永远无法实现。" },
      { name: "尼克·卡拉威", role: "叙述者", description: "一个来自中西部的年轻人，在纽约做债券销售。他搬到了盖茨比的隔壁，成为整个悲剧的见证者和讲述者。他的道德敏感使他成为菲茨杰拉德笔下最可靠的'不可靠叙述者'。" },
      { name: "黛西·布坎南", role: "女主角", description: "盖茨比一生追逐的对象，一个美丽的声音——'她的声音里充满了金钱'。她曾爱过盖茨比，但她更爱安全感和地位。她的浅薄和自私是'美国梦'空洞内核的化身。" },
    ],
    plotSummary: "在长岛的西卵，神秘的百万富翁杰伊·盖茨比每周末举办盛大的派对——爵士时代的香槟、音乐和舞蹈从不间断。但盖茨比举办这些派对的唯一目的是希望住在海湾对面东卵的黛西·布坎南——他多年前爱上的女人——有一天会走进来。在叙述者尼克·卡拉威的安排下，盖茨比与黛西重逢，旧情复燃。但黛西已经嫁给了粗野但富有的汤姆·布坎南，而盖茨比的财富来源于非法私酒生意。一场车祸、一次嫁祸、一声枪响——盖茨比的梦想和他的生命在汤姆的阴谋中一并终结。在他的葬礼上，只有尼克和盖茨比的父亲在场。那个绿灯——盖茨比每夜凝望的黛西家码头上的绿灯——继续闪烁着，但永远无法触及。",
    plotNodes: [
      { label: "西卵的邻居", description: "尼克·卡拉威搬到了长岛西卵，成为了神秘的盖茨比的邻居。盖茨比的庭院灯火通明，派对夜夜笙歌" },
      { label: "绿灯", description: "尼克第一次注意到盖茨比——他站在码头上，伸出手臂朝着海湾对面东卵的方向，那里有一盏绿色的灯" },
      { label: "重逢", description: "尼克安排盖茨比与黛西在自己家中重逢。盖茨比紧张得像个少年——多年来他所有的梦想都押注在这一刻" },
      { label: "摊牌", description: "在纽约的酒店房间里，盖茨比与汤姆当面对质。盖茨比要求黛西说她从未爱过汤姆——但她做不到" },
      { label: "死亡", description: "黛西开着盖茨比的车撞死了汤姆的情妇默特尔。汤姆告诉默特尔的丈夫威尔逊——盖茨比是凶手。威尔逊枪杀了盖茨比后自尽" },
      { label: "葬礼", description: "盖茨比的葬礼上只有尼克、他的父亲和那个戴猫头鹰眼镜的人。黛西和汤姆已经离开，连一通电话也没有" }
    ],
    themeAnalysis: "《了不起的盖茨比》是对美国梦最锋利的解剖。盖茨比从贫穷的詹姆斯·盖兹通过非法私酒生意成为百万富翁——他实现了美国梦的物质层面。但他真正追求的不是财富，而是用财富重新赢回黛西——也就是赢回过去本身。而正是在这一点上，他的梦想注定要失败——因为过去是无法被复制的，黛西的声音里充满了金钱，她永远不可能放弃汤姆为她提供的安全感和地位。美国梦的空洞内核就在于此：它承诺任何人都可以通过努力获得任何东西——但它没有告诉你，有些东西是无法被购买的。",
    techniques: "菲茨杰拉德的叙事技艺在《了不起的盖茨比》中达到了高度自觉的完美。尼克的叙述视角既是一个参与者的介入，又是一个观察者的外在——他既崇拜盖茨比的梦想又清醒地看到其注定失败。这种双重视角赋予了小说独特的道德复杂性。语言的质地令人赞叹——从派对场景的感官轰炸到盖茨比之死的沉静，菲茨杰拉德对节奏和色彩的控制精确而优雅。象征系统——绿灯、灰烬谷的艾克尔堡医生之眼、东西卵的地理区隔——精密而不生硬地承载着小说的核心主题。",
    excerpts: [
      { quote: "于是我们奋力前行，逆水行舟，却不断被浪潮推回过去。", context: "全书的最后一句——将盖茨比的个人悲剧升华为一个关于所有人类奋斗的隐喻。" },
      { quote: "她的声音里充满了金钱。", context: "尼克对黛西声音的描述——八个词总结了爵士时代上流社会最本质的空洞。" }
    ],
    insights: "盖茨比的悲剧在于：他相信美国梦的承诺——相信只要足够努力，就可以重新创造过去。但他真正想要的不是财富，而是被财富所代表的地位和爱情所认可。而那个绿灯所指向的世界——黛西和汤姆的世界——永远不会真正接纳他。菲茨杰拉德在不到两百页的篇幅中创造了美国文学最完美的悲剧：不是关于一个坏人的毁灭，而是关于一个好梦的不可实现。",
  },

  "sound-and-fury": {
    id: "sound-and-fury",
    characters: [
      { name: "The Sound", role: "角色", description: "The Sound and the Fury 中的主要角色。" },
      { name: "Fury", role: "角色", description: "The Sound and the Fury 中的主要角色。" }
    ],
    plotSummary: "《喧哗与骚动》（The Sound and the Fury）是美国作家威廉·福克纳创作的长篇小说，首次出版于1929年。作品以杰弗逊镇上的律师康普生一家三代生活经历为主线，描写了他们混乱的思想、沉沦的道德和必然没落的阶级命运，反映了南方庄园的没落与解体和社会的严重精神危机。小说中康普生夫妇生有三男一女：大儿子昆丁、二儿子杰生、小儿子班吉和女儿凯蒂。全书分为四个部分：班吉部分、昆丁部分、杰生部分和迪尔西部分。该书以“意识流”的手法通过一个旧家庭的分崩离析和趋于死亡，真实地呈现了美国南方历史性变化的一个侧面。福克纳用扑朔迷离的叙述手法为他心爱的南方描绘了一幅色调惨淡而又凄凉无比的夕阳晚景，既体现了南方的必然崩溃，又表达了他本人对资本主义价值标准的批判。《喧哗与骚动》的艺术风格奇特、新颖：多角度的叙述、意识流、神话模式、象征、隐喻、对位等现代技巧令人眼花缭乱。书名更暗示了一代知识分子的幻灭感和\n《喧哗与骚动》（The Sound and the Fury）是美国作家威廉·福克纳创作的长篇小说，首次出版于1929年。 [16]\n\n作品以杰弗逊镇上的律师康普生一家三代生活经历为主线，描写了他们混乱的思想、沉沦的道德和必然没落的阶级命运，反映了南方庄园的没落与解体和社会的严重精神危机。小说中康普生夫妇生有三男一女：大儿子昆丁、二儿子杰生、小儿子班吉和女儿凯蒂。全书分为四个部分：班吉部分、昆丁部分、杰生部分和迪尔西部分。 [9]该书以“意识流”的手法通过一个旧家庭的分崩离析和趋于死亡，真实地呈现了美国南方历史性变化的一个侧面。福克纳用扑朔迷离的叙述手法为他心爱的南方描绘了一幅色调惨淡而又凄凉无比的夕阳晚景，既体现了南方的必然崩溃，又表达了他本人对资本主义价值标准的批判。 [15]《喧哗与骚动》的艺术风格奇特、新颖：多角度的叙述、意识流、神话模式、象征、隐喻、对位等现代技巧令人眼花缭乱。书名更暗示了一代知识分子的幻灭感和精神危机。 [12]\n\n《喧哗与骚动》是福克纳重要的长篇小说代表作之一，是公认的20世纪美国文学经典，或许因为其片段式、非时间顺序的结构，这部作品当时出版后并未立即取得很大成功。不过，此书还是赢得了评论界的关注。 [6] [23]2015年，由该小说改编、詹姆斯·弗兰科执导的同名电影上映。 [22]\n\n关于《喧哗与骚动》，福克纳在1933年写的一篇文章里说：“在这",
    plotNodes: [
      { label: "Part 1", description: "《喧哗与骚动》（The Sound and the Fury）是美国作家威廉·福克纳创作的长篇小说，首次出版于1929年。作品以杰弗逊镇上的律师康普生一家三代生活经历为主线，描写了他们混乱的思想、沉沦的道德和必然没落的阶级命运，反映了南方庄园的没落与解体和社会的严重精神危机。小说中康普生夫妇生有三男一女：大儿子昆丁、二儿子杰生、小儿子班吉和女儿凯蒂。全书分为四个部分：班吉部分、昆丁部分、杰生部分和" },
      { label: "Part 2", description: "作品以杰弗逊镇上的律师康普生一家三代生活经历为主线，描写了他们混乱的思想、沉沦的道德和必然没落的阶级命运，反映了南方庄园的没落与解体和社会的严重精神危机。小说中康普生夫妇生有三男一女：大儿子昆丁、二儿子杰生、小儿子班吉和女儿凯蒂。全书分为四个部分：班吉部分、昆丁部分、杰生部分和迪尔西部分。" },
      { label: "Part 3", description: "《喧哗与骚动》是福克纳重要的长篇小说代表作之一，是公认的20世纪美国文学经典，或许因为其片段式、非时间顺序的结构，这部作品当时出版后并未立即取得很大成功。不过，此书还是赢得了评论界的关注。" }
    ],
    themeAnalysis: "《喧哗与骚动》（The Sound and the Fury）是美国作家威廉·福克纳创作的长篇小说，首次出版于1929年。作品以杰弗逊镇上的律师康普生一家三代生活经历为主线，描写了他们混乱的思想、沉沦的道德和必然没落的阶级命运，反映了南方庄园的没落与解体和社会的严重精神危机。小说中康普生夫妇生有三男一女：大儿子昆丁、二儿子杰生、小儿子班吉和女儿凯蒂。全书分为四个部分：班吉部分、昆丁部分、杰生部分和迪尔西部分。该书以“意识流”的手法通过一个旧家庭的分崩离析和趋于死亡，真实地呈现了美国南方历史性变化的一个侧面。福克纳用扑朔迷离的叙述手法为他心爱的南方描绘了一幅色调惨淡而又凄凉无比的夕阳晚景，既体现了南方的必然崩溃，又表达了他本人对资本主义价值标准的批判。《喧哗与骚动》的艺术风格奇特、新颖：多角度的叙述、意识流、神话模式、象征、隐喻、对位等现代技巧令人眼花缭乱。书名更暗示了一代知识分子的幻灭感和\n《喧哗与骚动》（The Sound and the Fury）是美国作家威廉·福克纳创作的长篇小说，首次出版于1929年。 [16]\n\n作品以杰弗逊镇上的律师康普生一家三代生活经历为主线，描写了他们混乱的思想、沉沦的道德和必然没落的阶级命运，反映了南方庄园的没落与解体和社会的严重精神危机。小说中康普生夫妇生有三男一女：大儿子昆丁、二儿子杰生、小儿子班吉和女儿凯蒂。全书分为四个部分：班吉部分、昆丁部分、杰生部分和迪尔西部分。 [9]该书以“意识流”的手法通过一个旧家庭的分崩离析和趋于死亡，真实地呈现了美国南方历史性变化的一个侧面。福克纳用扑朔迷离的叙述手法为他心爱的南方描绘了一幅色调惨淡而又凄凉无比的夕阳晚景，既体现了南方的必然崩溃，又表达了他本人对资本主义价值标准的批判。 [15]《喧哗与骚动》的艺术风格奇特、新颖：多角度的叙述、意识流、神话模式、象征、隐喻、对位等现代技巧令人眼花缭乱。",
    techniques: "",
    excerpts: [],
    insights: "《喧哗与骚动》（The Sound and the Fury）是美国作家威廉·福克纳创作的长篇小说，首次出版于1929年。作品以杰弗逊镇上的律师康普生一家三代生活经历为主线，描写了他们混乱的思想、沉沦的道德和必然没落的阶级命运，反映了南方庄园的没落与解体和社会的严重精神危机。小说中康普生夫妇生有三男一女：大儿子昆丁、二儿子杰生、小儿子班吉和女儿凯蒂。全书分为四个部分：班吉部分、昆丁部分、杰生部分和迪尔西部分。该书以“意识流”的手法通过一个旧家庭的分崩离析和趋于死亡，真实地呈现了美国南方历史性变化的一个侧面。福克纳用扑朔迷离的叙述手法为他心爱的南方描绘了一幅色调惨淡而又凄凉无比的夕阳晚景，既体现了南方的必然崩溃，又表达了他本人对资本主义价值标准的批判。《喧哗与骚动》的艺术风格奇特、新颖：多角度的叙述、意识流、神话模式、象征、隐喻、对位等现代技巧令人眼花缭乱。书名更暗示了一代知识分子的幻灭感和\n《喧哗与骚动》（The Sound and the Fury）是美国作家威廉·福克纳创作的长篇小说，首次出版于1929年。 [16]\n\n作品以杰弗逊镇上的律师康普生一家三代生活经历为主线，描写了他们混乱的思想、沉沦的道德和必然没落的阶级命运，反映了南方庄园的没落与解体和社会的严重精神危机。小说中康普生夫妇生有三男一女：大儿子昆丁、二儿子杰生、小儿子班吉和女儿凯蒂。全书分为四个部分：班吉部分、昆丁",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%96%A7%E5%93%97%E4%B8%8E%E9%AA%9A%E5%8A%A8", tier: "reference", fetchedAt: "2026-05-21T04:46:36.344Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "old-man-and-sea": {
    id: "old-man-and-sea",
    characters: [
      { name: "圣地亚哥", role: "主人公", description: "一个年迈的古巴渔夫，连续八十四天没有捕到鱼。第八十五天，他独自出海钓到了一条十八英尺长的大马林鱼——在与这条鱼的搏斗中，他证明了一个人可以被打败，但不能被摧毁。" },
      { name: "马诺林", role: "男孩/徒弟", description: "一个曾跟随圣地亚哥打鱼的男孩。虽然他的父母禁止他再上老人的船，但他始终照顾着老人——为他端咖啡、收拾渔具。他是老人的精神支柱，代表了年轻一代对传统价值的继承。" },
    ],
    plotSummary: "圣地亚哥——一个年迈的古巴渔夫——已经连续八十四天没有捕到鱼了。曾经跟着他的男孩马诺林被父母禁止再上他的小船，但男孩每天仍然来为老人端咖啡、收拾渔具。第八十五天，圣地亚哥独自驾着小船出海，在湾流深处钓到了一条十八英尺长的大马林鱼。在与这条鱼的搏斗中——持续了两天两夜——老人和鱼之间产生了一种奇异的惺惺相惜：鱼是他的对手，也是他的兄弟。最终老人杀死了大鱼，把它绑在船舷上返航。但鲨鱼一拨又一拨地追来，等他回到港口时，大鱼只剩下一副骨架。老人回到自己的棚屋，睡着了——梦见了狮子。",
    plotNodes: [
      { label: "八十四天的枯竭", description: "圣地亚哥已经连续八十四天没有捕到鱼。男孩马诺林被禁止再跟他出海，但每天仍来照顾他" },
      { label: "第八十五天出海", description: "老人独自驾着小船驶向远海。他在黎明前的黑暗中划着桨，他知道今天会是不同的一天" },
      { label: "与大鱼的搏斗", description: "一条巨大的马林鱼上钩了。老人与它搏斗了两天两夜——鱼拖着小船在海上航行" },
      { label: "杀死大鱼", description: "在精疲力竭的边缘，老人终于杀死了大鱼。他把它绑在船舷上开始返航" },
      { label: "鲨鱼来袭", description: "鲨鱼闻到血腥味赶来。老人用鱼叉、桨、舵柄与它们战斗——但他打不过所有的鲨鱼" },
      { label: "梦中的狮子", description: "老人带着一副十八英尺长的骨架回到港口。他筋疲力尽地睡去——梦里，他看见了年轻时在非洲看到的狮子在海滩上漫步" }
    ],
    themeAnalysis: "《老人与海》是海明威冰山理论最精炼的体现。表面上是关于一个老人和一条鱼的故事，但水面之下是对人类尊严的最纯粹的表达。圣地亚哥说出了海明威最重要的哲学命题：人可以被毁灭，但不能被打败。大马林鱼是他的对手也是他的兄弟——它代表了自然的壮丽和人类对伟大事物的尊重。鲨鱼代表的是一种不可抵抗的、盲目的毁灭——它不区分伟大与渺小，不尊重任何价值。老人与鲨鱼的战斗是必输的，但战斗本身——他的顽强、他的技巧、他拒绝放弃——定义了何为人的尊严。",
    techniques: "海明威的风格在《老人与海》中达到了极致的纯净。语言被削减到了最精炼的程度——没有形容词的堆砌，没有情感的渲染，只有准确的事实和动作。这种语言的克制不是情感的空缺，而是情感的极度压缩——就像冰山的八分之一露在水面上，八分之七在水下。第三人称叙述在大部分时间保持在圣地亚哥的意识附近，但偶尔上升到一个更广阔的全知视角，赋予故事一种史诗的广阔感。全书的节奏精确地配合着海上捕鱼的自然节奏——漫长的等待、突然的爆发、疲惫的争斗、最后的释然。",
    excerpts: [
      { quote: "人可以被毁灭，但不能被打败。", context: "圣地亚哥的核心信条——海明威对人之尊严的最精炼表述。" },
      { quote: "鱼啊，我会跟你耗到底，直到死。", context: "老人对马林鱼的宣言——一种混合了尊重、竞争和爱意的复杂情感。" }
    ],
    insights: "圣地亚哥带着一副骨架回到了港口——从世俗的眼光看，他失败了。但海明威在追问另一个问题：什么是真正的胜利？在那个精疲力竭的深渊中，老人证明了他永远不会放弃——证明了他的尊严和勇气是不可剥夺的。马诺林继续来照顾他，老人在梦中看见了狮子。生活继续——不是以胜利者或失败者的身份，而是以一个人的身份。",
  },

  "beloved": {
    id: "beloved",
    plotSummary: "《宠儿》是美国作家托妮·莫里森创作的长篇小说，取材于19世纪黑奴玛格丽特·加纳的真实事件，以1873年美国俄亥俄州辛辛那提镇为背景，讲述黑人女性塞丝在奴隶制废除后仍被弑婴往事纠缠的故事。该作于1987年出版，是莫里森的第五部小说，小说通过弑婴母亲塞丝、还魂女儿宠儿和幸存者丹芙三代女性的命运，展现奴隶制对黑人群体造成的持续性精神创伤。塞丝后背形如“苦樱桃树”的伤痕象征种族压迫的历史记忆，宠儿的鬼魂形象则折射出六千万黑奴贸易受难者的集体创伤。作品采用时空交错的多重视角叙事，将现实与回忆交织，通过意识流手法打破线性时间结构，形成历史与现实的多声部对话。莫里森在文本中融入了黑人传统文化元素，包括民间信仰、口述传统和神话原型，构建出独特的黑人文学表述体系。1988年，小说获普利策奖，1993年助推作者获得诺贝尔文学奖。\n《宠儿》是美国作家托妮·莫里森创作的长篇小说，取材于19世纪黑奴玛格丽特·加纳的真实事件，以1873年美国俄亥俄州辛辛那提镇为背景，讲述黑人女性塞丝在奴隶制废除后仍被弑婴往事纠缠的故事。 [1] [3] [11]\n\n该作于1987年出版，是莫里森的第五部小说，小说通过弑婴母亲塞丝、还魂女儿宠儿和幸存者丹芙三代女性的命运，展现奴隶制对黑人群体造成的持续性精神创伤。塞丝后背形如“苦樱桃树”的伤痕象征种族压迫的历史记忆，宠儿的鬼魂形象则折射出六千万黑奴贸易受难者的集体创伤。 [2-3] [8]作品采用时空交错的多重视角叙事，将现实与回忆交织，通过意识流手法打破线性时间结构，形成历史与现实的多声部对话。 [5-6]莫里森在文本中融入了黑人传统文化元素，包括民间信仰、口述传统和神话原型，构建出独特的黑人文学表述体系。 [4] [8]\n\n1988年，小说获普利策奖，1993年助推作者获得诺贝尔文学奖。 [2] [10]\n\n《宠儿》讲述一个叫塞丝的黑奴为了获取自由，只身从“甜蜜之家”的肯塔基农庄逃亡到辛辛那提的农舍。一个月后，她被奴隶主追捕，为了让自己的孩子摆脱做奴隶的悲惨命运，她毅然将孩子的喉咙割断后下葬。这个惨死在亲生母亲手里的孩子，被取名为“宠儿”。她也因为亲手杀死了自己的孩子，在后来一直受到社区人们的仇视和排斥并忍受着良知的折磨和巨大的孤独。宠儿阴魂不散，于十八年后重返人间，她化作少女，搅得家里鸡犬不宁，不仅向母亲讨爱债，还不择手段地引诱和纠缠保罗，将母亲刚刚稳定和",
    plotNodes: [
      { label: "Part 1", description: "《宠儿》是美国作家托妮·莫里森创作的长篇小说，取材于19世纪黑奴玛格丽特·加纳的真实事件，以1873年美国俄亥俄州辛辛那提镇为背景，讲述黑人女性塞丝在奴隶制废除后仍被弑婴往事纠缠的故事。该作于1987年出版，是莫里森的第五部小说，小说通过弑婴母亲塞丝、还魂女儿宠儿和幸存者丹芙三代女性的命运，展现奴隶制对黑人群体造成的持续性精神创伤。塞丝后背形如“苦樱桃树”的伤痕象征种族压迫的历史记忆，宠儿的鬼魂形" },
      { label: "Part 2", description: "该作于1987年出版，是莫里森的第五部小说，小说通过弑婴母亲塞丝、还魂女儿宠儿和幸存者丹芙三代女性的命运，展现奴隶制对黑人群体造成的持续性精神创伤。塞丝后背形如“苦樱桃树”的伤痕象征种族压迫的历史记忆，宠儿的鬼魂形象则折射出六千万黑奴贸易受难者的集体创伤。" },
      { label: "Part 3", description: "1988年，小说获普利策奖，1993年助推作者获得诺贝尔文学奖。" },
      { label: "Part 4", description: "《宠儿》讲述一个叫塞丝的黑奴为了获取自由，只身从“甜蜜之家”的肯塔基农庄逃亡到辛辛那提的农舍。一个月后，她被奴隶主追捕，为了让自己的孩子摆脱做奴隶的悲惨命运，她毅然将孩子的喉咙割断后下葬。这个惨死在亲生母亲手里的孩子，被取名为“宠儿”。她也因为亲手杀死了自己的孩子，在后来一直受到社区人们的仇视和排斥并忍受着良知的折磨和巨大的孤独。宠儿阴魂不散，于十八年后重返人间，她化作少女，搅得家里鸡犬不宁，不仅" }
    ],
    themeAnalysis: "《宠儿》是美国作家托妮·莫里森创作的长篇小说，取材于19世纪黑奴玛格丽特·加纳的真实事件，以1873年美国俄亥俄州辛辛那提镇为背景，讲述黑人女性塞丝在奴隶制废除后仍被弑婴往事纠缠的故事。该作于1987年出版，是莫里森的第五部小说，小说通过弑婴母亲塞丝、还魂女儿宠儿和幸存者丹芙三代女性的命运，展现奴隶制对黑人群体造成的持续性精神创伤。塞丝后背形如“苦樱桃树”的伤痕象征种族压迫的历史记忆，宠儿的鬼魂形象则折射出六千万黑奴贸易受难者的集体创伤。作品采用时空交错的多重视角叙事，将现实与回忆交织，通过意识流手法打破线性时间结构，形成历史与现实的多声部对话。莫里森在文本中融入了黑人传统文化元素，包括民间信仰、口述传统和神话原型，构建出独特的黑人文学表述体系。1988年，小说获普利策奖，1993年助推作者获得诺贝尔文学奖。\n《宠儿》是美国作家托妮·莫里森创作的长篇小说，取材于19世纪黑奴玛格丽特·加纳的真实事件，以1873年美国俄亥俄州辛辛那提镇为背景，讲述黑人女性塞丝在奴隶制废除后仍被弑婴往事纠缠的故事。 [1] [3] [11]\n\n该作于1987年出版，是莫里森的第五部小说，小说通过弑婴母亲塞丝、还魂女儿宠儿和幸存者丹芙三代女性的命运，展现奴隶制对黑人群体造成的持续性精神创伤。塞丝后背形如“苦樱桃树”的伤痕象征种族压迫的历史记忆，宠儿的鬼魂形象则折射出六千万黑奴贸易受难者的集体创伤。 [2-3] [8]作品采用时空交错的多重视角叙事，将现实与回忆交织，通过意识流手法打破线性时间结构，形成历史与现实的多声部对话。 [5-6]莫里森在文本中融入了黑人传统文化元素，包括民间信仰、口述传统和神话原型，构建出独特的黑人文学表述体系。 [4] [8]\n\n1988年，小说获普利策奖，1993年助推作者获得诺贝尔文学奖。 [2] [10]\n\n《宠儿》讲述一个叫塞丝的黑奴为了获取自由，只身从“甜蜜之家",
    techniques: "",
    excerpts: [],
    insights: "《宠儿》是美国作家托妮·莫里森创作的长篇小说，取材于19世纪黑奴玛格丽特·加纳的真实事件，以1873年美国俄亥俄州辛辛那提镇为背景，讲述黑人女性塞丝在奴隶制废除后仍被弑婴往事纠缠的故事。该作于1987年出版，是莫里森的第五部小说，小说通过弑婴母亲塞丝、还魂女儿宠儿和幸存者丹芙三代女性的命运，展现奴隶制对黑人群体造成的持续性精神创伤。塞丝后背形如“苦樱桃树”的伤痕象征种族压迫的历史记忆，宠儿的鬼魂形象则折射出六千万黑奴贸易受难者的集体创伤。作品采用时空交错的多重视角叙事，将现实与回忆交织，通过意识流手法打破线性时间结构，形成历史与现实的多声部对话。莫里森在文本中融入了黑人传统文化元素，包括民间信仰、口述传统和神话原型，构建出独特的黑人文学表述体系。1988年，小说获普利策奖，1993年助推作者获得诺贝尔文学奖。\n《宠儿》是美国作家托妮·莫里森创作的长篇小说，取材于19世纪黑奴玛格丽特·加纳的真实事件，以1873年美国俄亥俄州辛辛那提镇为背景，讲述黑人女性塞丝在奴隶制废除后仍被弑婴往事纠缠的故事。 [1] [3] [11]\n\n该作于1987年出版，是莫里森的第五部小说，小说通过弑婴母亲塞丝、还魂女儿宠儿和幸存者丹芙三代女性的命运，展现奴隶制对黑人群体造成的持续性精神创伤。塞丝后背形如“苦樱桃树”的伤痕象征种族压迫的历史记忆，宠儿的鬼魂形象则折射出六千万黑奴贸易受难者的集体创伤。 [2-",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E5%AE%A0%E5%84%BF", tier: "reference", fetchedAt: "2026-05-21T04:42:55.182Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "invisible-man": {
    id: "invisible-man",
    plotSummary: "[Invisible Man by Ralph Ellison | Summary & Analysis - YouTube] ... analysis of the plot, characters, themes, and symbols in Ralph Ellison's novel Invisible Man. Download the free study guide and infographic ...\n\n《看不见的人》是美国黑人作家拉尔夫·艾里森创作的长篇小说。小说讲述了一位黑人青年在白人主导的社会里饱受种族歧视，不断寻找民族文化和自我身份的过程。该小说自1952年出版后，在美国文学界和美国社会引起了巨大反响。1953年相继获得美国国家图书奖和“芝加哥保卫者” 奖，并被认为是一部经典的著作。\n《看不见的人》是美国黑人作家拉尔夫·艾里森创作的长篇小说。小说讲述了一位黑人青年在白人主导的社会里饱受种族歧视，不断寻找民族文化和自我身份的过程。\n\n该小说自1952年出版后，在美国文学界和美国社会引起了巨大反响。1953年相继获得美国国家图书奖和“芝加哥保卫者” 奖，并被认为是一部经典的著作。\n\n艾里森从构思到写成《看不见的人》，历时五年。当时，第二次世界大战以纳粹的覆灭告终，但美国人民并未得到真正的自由、民主和幸福，美国社会原有的矛盾，没有因此消除，也不可能消除。相反，纳粹集中营的残酷暴行，原子弹的毁灭性破坏，深深地惊慑着美国人民的心灵，并对美国的文化艺术、精神道德等方面产生了极大的影响。1950年发生的侵朝战争，更激起美国人民的不满和焦虑。另一方面，第二次世界大战所掩盖的种族矛盾，在战后暴露得更为明显，战时消声匿迹的法西斯团体又死灰复燃。仅1947年一年，美国发生的私刑迫害事件就达五百三十起。在国内外重重矛盾下，一部分异常敏感的知识分子产生了对西方资本主义社会的危机感，促使他们重新思考和探索，力图认识人的处境，人的价值和人生的意义等问题。 [2]\n\n主人公是一个十七、八岁的黑人青年。他曾是南方的一个好孩子，从懂事起就一直努力按照学校教育所灌输的一整套价值观念塑造自己。在白人俱乐部里他为了能演讲而违心参与黑人少年之间的格斗，爬过带电的毯子去抢钱币；为了使演讲继续他吞下口里的血水。为了得到白人的认可他将脱口而出的“平等”改成“义务”。为此他得到白人给予的一只",
    plotNodes: [
      { label: "Part 1", description: "[Invisible Man by Ralph Ellison | Summary & Analysis - YouTube] ..." },
      { label: "Part 2", description: "《看不见的人》是美国黑人作家拉尔夫·艾里森创作的长篇小说。小说讲述了一位黑人青年在白人主导的社会里饱受种族歧视，不断寻找民族文化和自我身份的过程。该小说自1952年出版后，在美国文学界和美国社会引起了巨大反响。1953年相继获得美国国家图书奖和“芝加哥保卫者” 奖，并被认为是一部经典的著作。" },
      { label: "Part 3", description: "该小说自1952年出版后，在美国文学界和美国社会引起了巨大反响。1953年相继获得美国国家图书奖和“芝加哥保卫者” 奖，并被认为是一部经典的著作。" },
      { label: "Part 4", description: "艾里森从构思到写成《看不见的人》，历时五年。当时，第二次世界大战以纳粹的覆灭告终，但美国人民并未得到真正的自由、民主和幸福，美国社会原有的矛盾，没有因此消除，也不可能消除。相反，纳粹集中营的残酷暴行，原子弹的毁灭性破坏，深深地惊慑着美国人民的心灵，并对美国的文化艺术、精神道德等方面产生了极大的影响。1950年发生的侵朝战争，更激起美国人民的不满和焦虑。另一方面，第二次世界大战所掩盖的种族矛盾，在战" },
      { label: "Part 5", description: "主人公是一个十七、八岁的黑人青年。他曾是南方的一个好孩子，从懂事起就一直努力按照学校教育所灌输的一整套价值观念塑造自己。在白人俱乐部里他为了能演讲而违心参与黑人少年之间的格斗，爬过带电的毯子去抢钱币；为了使演讲继续他吞下口里的血水。为了得到白人的认可他将脱口而出的“平等”改成“义务”。为此他得到白人给予的一只" }
    ],
    themeAnalysis: "[Invisible Man by Ralph Ellison | Summary & Analysis - YouTube] ... analysis of the plot, characters, themes, and symbols in Ralph Ellison's novel Invisible Man. Download the free study guide and infographic ...\n\n[Analysis of Ralph Ellison's Invisible Man] The title applies to the novel's themes of evasion and discovery of identity, which Ellison explored so masterfully in Invisible Man. Major ...\n\n[Invisible Man Study Guide | Course Hero] This study guide and infographic for Ralph Ellison's Invisible Man offer summary and analysis on themes, symbols, and other literary devices found in the text.\n\n《看不见的人》是美国黑人作家拉尔夫·艾里森创作的长篇小说。小说讲述了一位黑人青年在白人主导的社会里饱受种族歧视，不断寻找民族文化和自我身份的过程。该小说自1952年出版后，在美国文学界和美国社会引起了巨大反响。1953年相继获得美国国家图书奖和“芝加哥保卫者” 奖，并被认为是一部经典的著作。\n《看不见的人》是美国黑人作家拉尔夫·艾里森创作的长篇小说。小说讲述了一位黑人青年在白人主导的社会",
    techniques: "[Invisible Man: Analysis of Setting | Literature and Writing - EBSCO] \"Invisible Man\" explores the profound implications of setting in shaping the narrator's experiences and identity within a racially divided society.\n\n[Invisible Man Study Guide | Course Hero] This study guide and infographic for Ralph Ellison's Invisible Man offer summary and analysis on themes, symbols, and other literary devices found in the text.",
    excerpts: [],
    insights: "[Invisible Man Prologue Summary & Analysis - LitCharts] An unnamed narrator introduces himself as an “invisible man.” He says that he is a real man of flesh and bone, and that he possesses a mind.\n\n[Invisible Man: Full Book Summary | SparkNotes] The narrator begins telling his story with the claim that he is an “invisible man.” His invisibility, he says, is not a physical condition—he is not literally ...\n\n[Invisible Man by Ralph Ellison | Summary, Plot & Analysis - Study.com] The plot of Invisible Man is the story of a man who lives underground and reflects on his college years and the time h",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E7%9C%8B%E4%B8%8D%E8%A7%81%E7%9A%84%E4%BA%BA", tier: "reference", fetchedAt: "2026-05-21T04:59:19.544Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "lolita": {
    id: "lolita",
    plotSummary: "《洛丽塔》（又译为《洛莉塔》《洛丽泰》《罗莉泰》）是俄裔美国作家弗拉基米尔·纳博科夫创作的长篇小说，完稿于1954年初，1955年在法国首次出版，1958年在美国问世。该小说的主人公亨伯特是一位来自欧洲的绅士、学者，13岁时与同龄的安娜贝尔恋爱，但安娜贝尔不幸夭折，亨伯特成年后仍沉浸在对性感少女的欲望中。来到美国后他遇到了房东家12岁的洛丽塔，陷入痴迷，假意亲近她的寡居母亲并与之结婚，以图伺机占有洛丽塔。事情暴露后愤怒的妻子尚未发出揭露信件便遭遇车祸死亡。为避免有人发现真相，亨伯特开车带着洛丽塔在美国四处游走，使得洛丽塔陷入不正常的生活之中。亨伯特的欲望没有穷尽，对洛丽塔的掌控也越来越严厉，最终洛丽塔借机逃走，陷入有性怪癖的戏剧家奎尔第之手，得知真相后的亨伯特枪杀了奎尔第，在监狱中写下了这本忏悔录式的《洛丽塔》。小说的结构精巧复杂，叙事暗藏玄机，小说中对主观化叙事策略的巧妙运用，让读者稍不\n《洛丽塔》（又译为《洛莉塔》《洛丽泰》《罗莉泰》）是俄裔美国作家弗拉基米尔·纳博科夫创作的长篇小说，完稿于1954年初 [9]，1955年在法国首次出版，1958年在美国问世。 [10]\n\n该小说的主人公亨伯特是一位来自欧洲的绅士、学者，13岁时与同龄的安娜贝尔恋爱，但安娜贝尔不幸夭折，亨伯特成年后仍沉浸在对性感少女的欲望中。来到美国后他遇到了房东家12岁的洛丽塔，陷入痴迷，假意亲近她的寡居母亲并与之结婚，以图伺机占有洛丽塔。事情暴露后愤怒的妻子尚未发出揭露信件便遭遇车祸死亡。为避免有人发现真相，亨伯特开车带着洛丽塔在美国四处游走，使得洛丽塔陷入不正常的生活之中。亨伯特的欲望没有穷尽，对洛丽塔的掌控也越来越严厉，最终洛丽塔借机逃走，陷入有性怪癖的戏剧家奎尔第之手，得知真相后的亨伯特枪杀了奎尔第，在监狱中写下了这本忏悔录式的《洛丽塔》。 [11]小说的结构精巧复杂，叙事暗藏玄机，小说中对主观化叙事策略的巧妙运用，让读者稍不留神就会受小说主观叙事的影响，这也是小说引发诸多争议和误读的一个重要原因。 [13]\n\n《洛丽塔》是俄裔作家纳博科夫的成名作，被誉为20世纪世界最具争议和影响力的小说之一。 [13]由于小说情节中对违背道德观念的两性描写和对汉贝特迷恋“性感少女”内心世界美学价值的评判，小说在问世时即引起人们广泛的质疑和抨击。 [12]《洛丽塔》已成为美国大、中学语文课的必读范本，",
    plotNodes: [
      { label: "Part 1", description: "《洛丽塔》（又译为《洛莉塔》《洛丽泰》《罗莉泰》）是俄裔美国作家弗拉基米尔·纳博科夫创作的长篇小说，完稿于1954年初，1955年在法国首次出版，1958年在美国问世。该小说的主人公亨伯特是一位来自欧洲的绅士、学者，13岁时与同龄的安娜贝尔恋爱，但安娜贝尔不幸夭折，亨伯特成年后仍沉浸在对性感少女的欲望中。来到美国后他遇到了房东家12岁的洛丽塔，陷入痴迷，假意亲近她的寡居母亲并与之结婚，以图伺机占有" },
      { label: "Part 2", description: "该小说的主人公亨伯特是一位来自欧洲的绅士、学者，13岁时与同龄的安娜贝尔恋爱，但安娜贝尔不幸夭折，亨伯特成年后仍沉浸在对性感少女的欲望中。来到美国后他遇到了房东家12岁的洛丽塔，陷入痴迷，假意亲近她的寡居母亲并与之结婚，以图伺机占有洛丽塔。事情暴露后愤怒的妻子尚未发出揭露信件便遭遇车祸死亡。为避免有人发现真相，亨伯特开车带着洛丽塔在美国四处游走，使得洛丽塔陷入不正常的生活之中。亨伯特的欲望没有穷尽" },
      { label: "Part 3", description: "《洛丽塔》是俄裔作家纳博科夫的成名作，被誉为20世纪世界最具争议和影响力的小说之一。" }
    ],
    themeAnalysis: "[Lolita by Vladimir Nabokov (Book Analysis): Detailed Summary ...] A detailed analysis of \"Lolita\", examining the controversial relationship between a middle-aged man and his young stepdaughter, exploring key themes and ...\n\n[Analysis of Vladimir Nabokov's Novel Lolita and its Themes] \"Lolita\" by Vladimir Nabokov is a controversial novel that tells the story of Humbert Humbert, a middle-aged literature professor who ...\n\n《洛丽塔》（又译为《洛莉塔》《洛丽泰》《罗莉泰》）是俄裔美国作家弗拉基米尔·纳博科夫创作的长篇小说，完稿于1954年初，1955年在法国首次出版，1958年在美国问世。该小说的主人公亨伯特是一位来自欧洲的绅士、学者，13岁时与同龄的安娜贝尔恋爱，但安娜贝尔不幸夭折，亨伯特成年后仍沉浸在对性感少女的欲望中。来到美国后他遇到了房东家12岁的洛丽塔，陷入痴迷，假意亲近她的寡居母亲并与之结婚，以图伺机占有洛丽塔。事情暴露后愤怒的妻子尚未发出揭露信件便遭遇车祸死亡。为避免有人发现真相，亨伯特开车带着洛丽塔在美国四处游走，使得洛丽塔陷入不正常的生活之中。亨伯特的欲望没有穷尽，对洛丽塔的掌控也越来越严厉，最终洛丽塔借机逃走，陷入有性怪癖的戏剧家奎尔第之手，得知真相后的亨伯特枪杀了奎尔第，在监狱中写下了这本忏悔录式的《洛丽塔》。小说的结构精巧复杂，叙事暗藏",
    techniques: "[Analysis of Vladimir Nabokov's Lolita - Literary Theory and Criticism] When Humbert meets and seduces Lolita as a middle-aged man many years later, he attempts to relive an experience of childhood happiness. The ...\n\n[Lolita: Analysis of Setting | Literature and Writing | Research Starters] \"Lolita: Analysis of Setting\" explores the varied and contrasting locations within Vladimir Nabokov's controversial novel \"Lolita,\" as narrated by the character",
    excerpts: [
      { quote: "Lolita: Analysis of Setting", context: "From Lolita" },
      { quote: " as narrated by the character\n[Analysis of Vladimir Nabokov's Novel Lolita and its Themes] ", context: "From Lolita" }
    ],
    insights: "[Lolita - Wikipedia] In Vladimir Nabokov's 1955 novel, Lolita, the character Lolita is a child who is sexually victimized by the book's narrator. The word Lolita has, however ...\n\n[Lolita: Themes | SparkNotes] The Power of Language. Nabokov revered words and believed that the proper language could elevate any material to the level of art. In Lolita, language ...\n\n[Lolita Character Analysis - LitCharts] The narrator of Lolita. Humbert is a highly educated, mentally unstable, literarily gifted European man with an uncontrollable desire for young girls, ...\n\n[Lolita by Vladimir Nabokov (Book Anal",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E6%B4%9B%E4%B8%BD%E5%A1%94", tier: "reference", fetchedAt: "2026-05-21T05:00:11.061Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "catcher-in-the-rye": {
    id: "catcher-in-the-rye",
    characters: [
      { name: "霍尔顿·考尔菲尔德", role: "叙述者/主人公", description: "一个被学校开除的十六岁少年，在纽约街头漫游了三天。他讨厌'假惺惺'的成人世界——他唯一想做的事是站在麦田的悬崖边上，接住每一个跑过来的孩子。这个'麦田守望者'的梦想使他成为了一代又一代不适应的少年的声音。" },
      { name: "菲比", role: "妹妹", description: "霍尔顿的十岁妹妹，全书唯一一个霍尔顿毫无保留喜欢的人。她是霍尔顿的'真相探测器'——在旋转木马上，她原谅了霍尔顿的所有失败。那个场景是小说最温暖的核心。" },
    ],
    plotSummary: "霍尔顿·考尔菲尔德——一个十六岁的少年——在圣诞节前夕被宾夕法尼亚预科学校开除了。这是他第四所被开除的学校，但他不在乎。在离校后的三天里，霍尔顿在纽约街头漫无目的地游走：他与虚伪的历史老师告别，在旅馆里被皮条客和电梯工敲诈，和过去的女孩萨莉约会却以吵架收场，偷偷回到家里去看他十岁的妹妹菲比——那个他现在唯一还喜欢的人。他唯一想做的事——他告诉菲比——是站在麦田边上悬崖旁，接住每一个跑过来的孩子：当一个麦田里的守望者。最终当菲比带着行李要跟他一起出走时，霍尔顿留了下来——看着菲比在旋转木马上旋转，他第一次感到了真正的快乐。",
    plotNodes: [
      { label: "被开除", description: "霍尔顿从潘西预科学校被开除——这是他第四所学校。他去看望了患有肺结核的历史老师斯宾塞，然后逃离了学校" },
      { label: "纽约之夜", description: "霍尔顿在纽约旅馆住下。他在夜总会跳舞、被皮条客敲诈、与过去的女孩约会——每件事情都让他更加孤独" },
      { label: "回家看菲比", description: "霍尔顿偷偷溜回家看望妹妹菲比。菲比是他唯一还信任的人——她问他喜欢什么，他列出了所有他喜欢的东西" },
      { label: "麦田守望者", description: "霍尔顿告诉菲比他唯一想做的事情：当麦田里的守望者——站在悬崖边接住每一个跑过来的孩子" },
      { label: "安托利尼先生", description: "霍尔顿去了前老师安托利尼家。安托利尼的忠告——为谦卑而学习——是小说中最接近智慧的言论" },
      { label: "旋转木马", description: "菲比带着行李箱要跟霍尔顿一起出走。霍尔顿拒绝了，带她去了公园的旋转木马。看着菲比在雨中旋转，霍尔顿体会到了真正的快乐" }
    ],
    themeAnalysis: "《麦田里的守望者》在表面上是一个青少年叛逆的故事，但它真正追问的是：如何在不需要变得虚伪的前提下长大？霍尔顿最常用的词是phony——假惺惺。他憎恨成人世界的方方面面：学校的口号与实际做法之间的差距、社交场上的虚假、语言的空洞。但他自己也用假名、编故事、伪装——他不是一个圣人，他是一个困惑的青少年。麦田守望者的梦想——在悬崖边接住孩子们——正是对童年纯真的挽歌：霍尔顿想要保护的，也许正是他自己内心那个在悬崖边奔跑的孩子。",
    techniques: "塞林格创造了一个完全独特的叙述声音。霍尔顿的口头禅（phony、and all、it kills me）、他的偏离和游离、他时而暴怒时而温柔的语调——这种声音如此真实，以至于一代又一代的读者感到自己就是霍尔顿。叙事的时间结构——在疗养院中倒叙过去三天的经历——赋予了全部故事一种事后反思的忧郁。霍尔顿的叙述既是一个叛逆少年的愤怒控诉，也是一个受伤灵魂的脆弱独白。小说的开放性结尾——霍尔顿说你不应该告诉任何人任何事情，因为那样你反而会开始想念每一个人——拒绝提供任何简单的解决方案。",
    excerpts: [
      { quote: "我老是想象，一大群小孩儿在一大块麦田里做游戏。成千成万的小孩儿，除了我没有别的大人——我呢，就站在那该死的悬崖边上。我做的事就是：有哪个小孩儿要跑到悬崖边了，我就把他接住。", context: "霍尔顿对菲比坦露的梦想——麦田守望者的意象是20世纪文学中最令人心碎的隐喻之一。" },
      { quote: "对一个人来说，最糟糕的事情是：你还没说完话，他就已经决定了你是哪一种人。", context: "霍尔顿对成人世界判断力的抗议——也是塞林格对一切标签化和类别化思维的反驳。" }
    ],
    insights: "《麦田里的守望者》在今天仍然是一本危险的、不安的、未被驯服的书。它拒绝提供成长指南——霍尔顿没有变成一个好学生，没有找到一个好女孩，没有学会言行一致。他只是在旋转木马旁站了一会儿，看着菲比在雨中转圈，感到了快乐。也许这就是塞林格能提供的最真实的东西：不是解决问题的方案，而是一个值得坚守的瞬间。",
  },

  "to-kill-mockingbird": {
    id: "to-kill-mockingbird",
    plotSummary: "《杀死一只知更鸟》是美国女作家哈珀·李创作的半自传体长篇小说，首次发表于1960年。该小说的部分情节是基于作者父亲年轻时的一次真实经历。该小说一开始围绕怪人阿瑟·拉德利开展叙事，芬奇兄妹与小伙伴迪尔控制不住自己的好奇心，与怪人阿瑟·拉德利之间发生了一系列带着疑问又温馨的故事。之后围绕黑人汤姆·鲁滨逊被诬告强奸白人马耶拉·尤厄尔，以汤姆被宣告有罪，最后无辜惨死。白人之间因处理黑人与白人之间的矛盾而产生不满和冲突，即鲍伯·尤厄尔不满阿蒂克斯·芬奇在法庭上对自己的反驳，但又无力对其进行直接报复，因而将矛头指向阿蒂克斯家两个年幼脆弱的孩子，在危急时刻怪人阿瑟·拉德利挺身而出，保护了孩子们免遭严重伤害。最后，以恶人鲍伯·尤厄尔被杀结束。小说从儿童视角以第一人称叙述了斯库特六岁时对家人和邻居生活的观察，反映了经济大萧条时期美国的儿童教育问题、种族问题、司法公正问题等社会问题。斯库特成长于单亲家庭，父亲\n《杀死一只知更鸟》是美国女作家哈珀·李创作的半自传体长篇小说，首次发表于1960年。 [11] [34]\n\n该小说的部分情节是基于作者父亲年轻时的一次真实经历。 [14]该小说一开始围绕怪人阿瑟·拉德利开展叙事，芬奇兄妹与小伙伴迪尔控制不住自己的好奇心，与怪人阿瑟·拉德利之间发生了一系列带着疑问又温馨的故事。之后围绕黑人汤姆·鲁滨逊被诬告强奸白人马耶拉·尤厄尔，以汤姆被宣告有罪，最后无辜惨死。白人之间因处理黑人与白人之间的矛盾而产生不满和冲突，即鲍伯·尤厄尔不满阿蒂克斯·芬奇在法庭上对自己的反驳，但又无力对其进行直接报复，因而将矛头指向阿蒂克斯家两个年幼脆弱的孩子，在危急时刻怪人阿瑟·拉德利挺身而出，保护了孩子们免遭严重伤害。最后，以恶人鲍伯·尤厄尔被杀结束。 [14]小说从儿童视角以第一人称叙述了斯库特六岁时对家人和邻居生活的观察，反映了经济大萧条时期美国的儿童教育问题、种族问题、司法公正问题等社会问题。斯库特成长于单亲家庭，父亲阿蒂克斯在小说中是正直律师的典范。 [12]同时受美国南方哥特文学传统的影响，哈珀·李在小说中融入了大量哥特风格的细节，丰富了故事背景和情节。 [16]\n\n《杀死一只知更鸟》是哈珀·李的代表作品，1961年获普利策奖。该小说被美国《时代周刊》杂志评为中学生必读的十大经典书目之一，被翻译成40多种文字。该小说于1962年改编为同名电影，主人公阿蒂克斯在好",
    plotNodes: [
      { label: "Part 1", description: "《杀死一只知更鸟》是美国女作家哈珀·李创作的半自传体长篇小说，首次发表于1960年。该小说的部分情节是基于作者父亲年轻时的一次真实经历。该小说一开始围绕怪人阿瑟·拉德利开展叙事，芬奇兄妹与小伙伴迪尔控制不住自己的好奇心，与怪人阿瑟·拉德利之间发生了一系列带着疑问又温馨的故事。之后围绕黑人汤姆·鲁滨逊被诬告强奸白人马耶拉·尤厄尔，以汤姆被宣告有罪，最后无辜惨死。白人之间因处理黑人与白人之间的矛盾而产" },
      { label: "Part 2", description: "该小说的部分情节是基于作者父亲年轻时的一次真实经历。" },
      { label: "Part 3", description: "《杀死一只知更鸟》是哈珀·李的代表作品，1961年获普利策奖。该小说被美国《时代周刊》杂志评为中学生必读的十大经典书目之一，被翻译成40多种文字。该小说于1962年改编为同名电影，主人公阿蒂克斯在好" }
    ],
    themeAnalysis: "《杀死一只知更鸟》是美国女作家哈珀·李创作的半自传体长篇小说，首次发表于1960年。该小说的部分情节是基于作者父亲年轻时的一次真实经历。该小说一开始围绕怪人阿瑟·拉德利开展叙事，芬奇兄妹与小伙伴迪尔控制不住自己的好奇心，与怪人阿瑟·拉德利之间发生了一系列带着疑问又温馨的故事。之后围绕黑人汤姆·鲁滨逊被诬告强奸白人马耶拉·尤厄尔，以汤姆被宣告有罪，最后无辜惨死。白人之间因处理黑人与白人之间的矛盾而产生不满和冲突，即鲍伯·尤厄尔不满阿蒂克斯·芬奇在法庭上对自己的反驳，但又无力对其进行直接报复，因而将矛头指向阿蒂克斯家两个年幼脆弱的孩子，在危急时刻怪人阿瑟·拉德利挺身而出，保护了孩子们免遭严重伤害。最后，以恶人鲍伯·尤厄尔被杀结束。小说从儿童视角以第一人称叙述了斯库特六岁时对家人和邻居生活的观察，反映了经济大萧条时期美国的儿童教育问题、种族问题、司法公正问题等社会问题。斯库特成长于单亲家庭，父亲\n《杀死一只知更鸟》是美国女作家哈珀·李创作的半自传体长篇小说，首次发表于1960年。 [11] [34]\n\n该小说的部分情节是基于作者父亲年轻时的一次真实经历。 [14]该小说一开始围绕怪人阿瑟·拉德利开展叙事，芬奇兄妹与小伙伴迪尔控制不住自己的好奇心，与怪人阿瑟·拉德利之间发生了一系列带着疑问又温馨的故事。之后围绕黑人汤姆·鲁滨逊被诬告强奸白人马耶拉·尤厄尔，以汤姆被宣告有罪，最后无辜惨死。白人之间因处理黑人与白人之间的矛盾而产生不满和冲突，即鲍伯·尤厄尔不满阿蒂克斯·芬奇在法庭上对自己的反驳，但又无力对其进行直接报复，因而将矛头指向阿蒂克斯家两个年幼脆弱的孩子，在危急时刻怪人阿瑟·拉德利挺身而出，保护了孩子们免遭严重伤害。最后，以恶人鲍伯·尤厄尔被杀结束。 [14]小说从儿童视角以第一人称叙述了斯库特六岁时对家人和邻居生活的观察，反映了经济大萧条时期美国的儿童教育问题、种族问题、司法",
    techniques: "",
    excerpts: [],
    insights: "《杀死一只知更鸟》是美国女作家哈珀·李创作的半自传体长篇小说，首次发表于1960年。该小说的部分情节是基于作者父亲年轻时的一次真实经历。该小说一开始围绕怪人阿瑟·拉德利开展叙事，芬奇兄妹与小伙伴迪尔控制不住自己的好奇心，与怪人阿瑟·拉德利之间发生了一系列带着疑问又温馨的故事。之后围绕黑人汤姆·鲁滨逊被诬告强奸白人马耶拉·尤厄尔，以汤姆被宣告有罪，最后无辜惨死。白人之间因处理黑人与白人之间的矛盾而产生不满和冲突，即鲍伯·尤厄尔不满阿蒂克斯·芬奇在法庭上对自己的反驳，但又无力对其进行直接报复，因而将矛头指向阿蒂克斯家两个年幼脆弱的孩子，在危急时刻怪人阿瑟·拉德利挺身而出，保护了孩子们免遭严重伤害。最后，以恶人鲍伯·尤厄尔被杀结束。小说从儿童视角以第一人称叙述了斯库特六岁时对家人和邻居生活的观察，反映了经济大萧条时期美国的儿童教育问题、种族问题、司法公正问题等社会问题。斯库特成长于单亲家庭，父亲\n《杀死一只知更鸟》是美国女作家哈珀·李创作的半自传体长篇小说，首次发表于1960年。 [11] [34]\n\n该小说的部分情节是基于作者父亲年轻时的一次真实经历。 [14]该小说一开始围绕怪人阿瑟·拉德利开展叙事，芬奇兄妹与小伙伴迪尔控制不住自己的好奇心，与怪人阿瑟·拉德利之间发生了一系列带着疑问又温馨的故事。之后围绕黑人汤姆·鲁滨逊被诬告强奸白人马耶拉·尤厄尔，以汤姆被宣告有罪，最后无辜惨死。白",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/%E6%9D%80%E6%AD%BB%E4%B8%80%E5%8F%AA%E7%9F%A5%E6%9B%B4%E9%B8%9F", tier: "reference", fetchedAt: "2026-05-21T04:45:31.977Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "medium",
    },
  },

  "dom-casmurro": {
    id: "dom-casmurro",
    characters: [
      { name: "Comparative Perspectives", role: "角色", description: "Dom Casmurro 中的主要角色。" },
      { name: "Rise", role: "角色", description: "Dom Casmurro 中的主要角色。" },
      { name: "Brazilian Novel", role: "角色", description: "Dom Casmurro 中的主要角色。" },
      { name: "Dom Casmurro", role: "角色", description: "Dom Casmurro 中的主要角色。" },
      { name: "Machado", role: "角色", description: "Dom Casmurro 中的主要角色。" },
      { name: "Assis", role: "角色", description: "Dom Casmurro 中的主要角色。" },
      { name: "Study Guide Dom", role: "角色", description: "Dom Casmurro 中的主要角色。" },
      { name: "Casmurro Joaquim Maria", role: "角色", description: "Dom Casmurro 中的主要角色。" }
    ],
    plotSummary: "Get ready to explore Dom Casmurro and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide Dom Casmurro Joaquim Maria Machado de Assis Dom Casmurro Joaquim Maria Machado de Assis 74 pages • 2-hour read Joaquim Maria Machado de Assis Dom Casmurro Fiction | Novel | Adult | Published in 1899 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Background Chapter Summaries & Analyses Chapters 1-30 Chapters 31-60 Chapters 61-90 Chapters 91-120 Chapters 121-148 Character Analysis Themes Symbols & Motifs Important Quotes Essay Topics Quizzes NEW Reading Tools Discussion Questions Summary and Study Guide Overview Dom Casmurr",
    plotNodes: [
      { label: "Part 1", description: "Get ready to explore Dom Casmurro and its meaning." },
      { label: "Part 2", description: "Study Guide Dom Casmurro Joaquim Maria Machado de Assis Dom Casmurro Joaquim Maria Machado de Assis 74 pages • 2-hour read Joaquim Maria Machado de Assis Dom Casmurro Fiction | Novel | Adult | Publish" }
    ],
    themeAnalysis: "Get ready to explore Dom Casmurro and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes explained to help you discover the complexity and beauty of this book.\n\nStudy Guide Dom Casmurro Joaquim Maria Machado de Assis Dom Casmurro Joaquim Maria Machado de Assis 74 pages • 2-hour read Joaquim Maria Machado de Assis Dom Casmurro Fiction | Novel | Adult | Published in 1899 A modern alternative to SparkNotes and CliffsNotes, SuperSummary offers high-quality Study Guides with detailed chapter summaries and analysis of major themes, characters, and more. Download PDF Play Audio Download PDF Play Audio Study Guide Book Brief Summaries & Analyses Plot Summary Background Chapter Summaries & Analyses Chapters 1-30 Chapters 31-60 Chapters 61-",
    techniques: "[Dom Casmurro: A Deep Dive Review | PDF - Scribd] The document is a book review of 'Dom Casmurro' by Machado de Assis, focusing on the narrative perspective of the character Bentinho and his complex ...\n\n[Dom Casmurro Themes - eNotes.com] The main themes in Dom Casmurro are love and jealousy, religious vocation, and status and dependency. Love and jealousy: The narrative reveals the deep ...",
    excerpts: [
      { quote: ", hence the title of the ...\n[", context: "From Dom Casmurro" },
      { quote: " is a novel written by Brazilian author Joaquim ...] ", context: "From Dom Casmurro" },
      { quote: " is not only a compelling story about love and betrayal but also a profound exploration of the human psyche, making it a ...\n[Summary of Dom Casmurro - Machado de Assis - YouTube] ", context: "From Dom Casmurro" }
    ],
    insights: "[Dom Casmurro Summary and Study Guide - SuperSummary] Get ready to explore Dom Casmurro and its meaning. Our full analysis and study guide provides an even deeper dive with character analysis and quotes ...\n\n[Dom Casmurro - Wikipedia] Set in Rio de Janeiro during the Second Reign, the novel begins with a recent episode in which the narrator is nicknamed \"Dom Casmurro\", hence the title of the ...\n\n[\"Dom Casmurro\" is a novel written by Brazilian author Joaquim ...] \"Dom Casmurro\" is not only a compelling story about love and betrayal but also a profound exploration of the human psyche, making it",
  },

  "labyrinth-of-solitude": {
    id: "labyrinth-of-solitude",
    plotSummary: "The Labyrinth of Solitude (Spanish: El laberinto de la soledad) is a 1950 book-length essay by the Mexican poet Octavio Paz. One of his most famous works, it consists of nine parts: \"The Pachuco and other extremes\", \"Mexican Masks\", \"The Day of the Dead\", \"The Sons of La Malinche\", \"The Conquest and Colonialism\", \"From Independence to the Revolution\", \"The Mexican Intelligence\", \"The Present Day\" and \"The Dialectic of Solitude\".",
    plotNodes: [
      { label: "Part 1", description: "The Labyrinth of Solitude (Spanish: El laberinto de la soledad) is a 1950 book-length essay by the Mexican poet Octavio Paz." },
      { label: "Part 2", description: "Solitude is the profoundest fact of the human condition." }
    ],
    themeAnalysis: "The Labyrinth of Solitude (Spanish: El laberinto de la soledad) is a 1950 book-length essay by the Mexican poet Octavio Paz. One of his most famous works, it consists of nine parts: \"The Pachuco and other extremes\", \"Mexican Masks\", \"The Day of the Dead\", \"The Sons of La Malinche\", \"The Conquest and Colonialism\", \"From Independence to the Revolution\", \"The Mexican Intelligence\", \"The Present Day\" ...",
    techniques: "The Labyrinth of Solitude (Spanish: El laberinto de la soledad) is a 1950 book-length essay by the Mexican poet Octavio Paz. One of his most famous works, it consists of nine parts: \"The Pachuco and other extremes\", \"Mexican Masks\", \"The Day of the Dead\", \"The Sons of La Malinche\", \"The Conquest and Colonialism\", \"From Independence to the Revolution\", \"The Mexican Intelligence\", \"The Present Day\" ...",
    excerpts: [
      { quote: "The Pachuco and other extremes", context: "From The Labyrinth of Solitude" },
      { quote: "From Independence to the Revolution", context: "From The Labyrinth of Solitude" },
      { quote: ". After 1975 some editions included the three-part essay ", context: "From The Labyrinth of Solitude" }
    ],
    insights: "The Labyrinth of Solitude (Spanish: El laberinto de la soledad) is a 1950 book-length essay by the Mexican poet Octavio Paz. One of his most famous works, it consists of nine parts: \"The Pachuco and other extremes\", \"Mexican Masks\", \"The Day of the Dead\", \"The Sons of La Malinche\", \"The Conquest and Colonialism\", \"From Independence to the Revolution\", \"The Mexican Intelligence\", \"The Present Day\" ...",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/The%20Labyrinth%20of%20Solitude"
    // }
  },

  "the-devils-to-pay": {
    id: "the-devils-to-pay",
    characters: [
      { name: "The Devil", role: "角色", description: "The Devil to Pay in the Backlands 中的主要角色。" },
      { name: "Backlands", role: "角色", description: "The Devil to Pay in the Backlands 中的主要角色。" },
      { name: "Rosa Showing", role: "角色", description: "The Devil to Pay in the Backlands 中的主要角色。" },
      { name: "The Devil To", role: "角色", description: "The Devil to Pay in the Backlands 中的主要角色。" },
      { name: "Pay In The", role: "角色", description: "The Devil to Pay in the Backlands 中的主要角色。" },
      { name: "Guimar", role: "角色", description: "The Devil to Pay in the Backlands 中的主要角色。" },
      { name: "Rosa", role: "角色", description: "The Devil to Pay in the Backlands 中的主要角色。" },
      { name: "Analysis", role: "角色", description: "The Devil to Pay in the Backlands 中的主要角色。" }
    ],
    plotSummary: "[Summary of The Devil to Pay in the Backlands - Guimarães Rosa] \"The Devil to Pay in the Backlands\" by João Guimarães Rosa is a complex and richly woven narrative set in the harsh Brazilian sertão.\n\nOther articles where The Devil to Pay in the Backlands is discussed: Brazilian literature: The novel: The Devil to Pay in the Backlands), his 600-page epic masterpiece on honour, courage, love, and treachery that takes the form of a first-person monologue by a backlands outlaw who makes a pact with the Devil to gain revenge.\n\nThe Devil to Pay in the Backlands References The Devil to Pay in the Backlands work by Guimarães Rosa Ask Anything Homework Help Also known as: “Grande sertão: veredas” Written by The Information Architects of Encyclopaedia Britannica The Information Architects maintain a master list of the topics included in the corpus of Encyclopædia Britannica , and create and manage the relationships between them. The Information Architects of Encyclopaedia Britannica Britannica AI",
    plotNodes: [
      { label: "Part 1", description: "[Summary of The Devil to Pay in the Backlands - Guimarães Rosa] \"The Devil to Pay in the Backlands\" by João Guimarães Rosa is a complex and richly woven narrative set in the harsh Brazilian sertão." },
      { label: "Part 2", description: "Other articles where The Devil to Pay in the Backlands is discussed: Brazilian literature: The novel: The Devil to Pay in the Backlands), his 600-page epic masterpiece on honour, courage, love, and tr" },
      { label: "Part 3", description: "The Devil to Pay in the Backlands References The Devil to Pay in the Backlands work by Guimarães Rosa Ask Anything Homework Help Also known as: “Grande sertão: veredas” Written by The Information Arch" }
    ],
    themeAnalysis: "[The Devil to Pay in the Backlands: Analysis of Major Characters] \"The Devil to Pay in the Backlands\" explores the complexities of its major characters against a backdrop of conflict and personal transformation within ...\n\n[Guimarães Rosa: The Devil to Pay in the Backlands] João Guimarães Rosa: Grande sertão: veredas (The Devil to Pay in the Backlands) ... In short, this novel has two key themes. Firstly, it is about the quest ...",
    techniques: "[Summary of The Devil to Pay in the Backlands - Guimarães Rosa] \"The Devil to Pay in the Backlands\" by João Guimarães Rosa is a complex and richly woven narrative set in the harsh Brazilian sertão.",
    excerpts: [
      { quote: "The Devil to Pay in the Backlands", context: "From The Devil to Pay in the Backlands" },
      { quote: "The Devil to Pay in the Backlands", context: "From The Devil to Pay in the Backlands" },
      { quote: "The Devil to Pay in the Backlands", context: "From The Devil to Pay in the Backlands" }
    ],
    insights: "[The Devil to Pay in the Backlands - Wikipedia] The Devil to Pay in the Backlands is a novel published in 1956 by the Brazilian writer João Guimarães Rosa. The Devil to Pay in the Backlands ...\n\n[The Devil to Pay in the Backlands | work by Guimarães Rosa] The Devil to Pay in the Backlands), his 600-page epic masterpiece on honour, courage, love, and treachery that takes the form of a first-person monologue by a ...\n\n[The Devil to Pay in the Backlands - JoaoGuimaraes Rosa Showing ...] The Devil To Pay In The Backlands by João Guimarães Rosa also known ... The main character is an interesting yo",
  },

  // ==================== 大洋洲 ====================

  "voss": {
    id: "voss",
    plotSummary: "Voss (1957) is the fifth published novel by Patrick White. It is based upon the life of the 19th-century Prussian explorer and naturalist Ludwig Leichhardt, who disappeared while on an expedition into the Australian outback.",
    themeAnalysis: "Voss (1957) is the fifth published novel by Patrick White. It is based upon the life of the 19th-century Prussian explorer and naturalist Ludwig Leichhardt, who disappeared while on an expedition into the Australian outback.",
    techniques: "Voss (1957) is the fifth published novel by Patrick White. It is based upon the life of the 19th-century Prussian explorer and naturalist Ludwig Leichhardt, who disappeared while on an expedition into the Australian outback.",
    excerpts: [],
    insights: "Voss (1957) is the fifth published novel by Patrick White. It is based upon the life of the 19th-century Prussian explorer and naturalist Ludwig Leichhardt, who disappeared while on an expedition into the Australian outback.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Voss%20(novel)"
    // }
  },

  "the-bone-people": {
    id: "the-bone-people",
    plotSummary: "The Bone People, styled by the writer and in some editions as the bone people, is a 1984 novel by New Zealand writer Keri Hulme. Set on the coast of the South Island of New Zealand, the novel focuses on three characters, all of whom are isolated in different ways: a reclusive artist, a mute child, and the child's foster father. Over the course of the novel the trio develop a tentative relationship, are driven apart by violence, and reunite. Māori and Pākehā (New Zealand European) culture, myths and language are blended through the novel.",
    themeAnalysis: "The Bone People, styled by the writer and in some editions as the bone people, is a 1984 novel by New Zealand writer Keri Hulme. Set on the coast of the South Island of New Zealand, the novel focuses on three characters, all of whom are isolated in different ways: a reclusive artist, a mute child, and the child's foster father.",
    techniques: "The Bone People, styled by the writer and in some editions as the bone people, is a 1984 novel by New Zealand writer Keri Hulme. Set on the coast of the South Island of New Zealand, the novel focuses on three characters, all of whom are isolated in different ways: a reclusive artist, a mute child, and the child's foster father.",
    excerpts: [],
    insights: "The Bone People, styled by the writer and in some editions as the bone people, is a 1984 novel by New Zealand writer Keri Hulme. Set on the coast of the South Island of New Zealand, the novel focuses on three characters, all of whom are isolated in different ways: a reclusive artist, a mute child, and the child's foster father.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/The%20Bone%20People"
    // }
  },

  "oscar-and-lucinda": {
    id: "oscar-and-lucinda",
    plotSummary: "彼得·凯里是当代澳大利亚文学的领军人物，被誉为“澳大利亚最有才华和最令人激动的作家之一”。\n彼得·凯里是当代澳大利亚文学的领军人物，被誉为“澳大利亚最有才华和最令人激动的作家之一”。 [1]\n\n他凭借《奥斯卡与露辛达》(1988)和《凯利帮真史》(2001)两次获得布克奖，是仅有的两位两度荣获布克奖殊荣的作家之一(另一位则是诺贝尔文学奖得主库切)。凯里的作品怪诞、幽默，具有寓言式小说和科幻小说的特征。 [1]",
    plotNodes: [
      { label: "第 1 部分", description: "彼得·凯里是当代澳大利亚文学的领军人物，被誉为“澳大利亚最有才华和最令人激动的作家之一”。 彼得·凯里是当代澳大利亚文学的领军人物，被誉为“澳大利亚最有才华和最令人激动的作家之一”。" },
      { label: "第 2 部分", description: "他凭借《奥斯卡与露辛达》(1988)和《凯利帮真史》(2001)两次获得布克奖，是仅有的两位两度荣获布克奖殊荣的作家之一(另一位则是诺贝尔文学奖得主库切)。凯里的作品怪诞、幽默，具有寓言式小说和科幻小说的特征。 [1]" }
    ],
    themeAnalysis: "彼得·凯里是当代澳大利亚文学的领军人物，被誉为“澳大利亚最有才华和最令人激动的作家之一”。\n彼得·凯里是当代澳大利亚文学的领军人物，被誉为“澳大利亚最有才华和最令人激动的作家之一”。 [1]\n\n他凭借《奥斯卡与露辛达》(1988)和《凯利帮真史》(2001)两次获得布克奖，是仅有的两位两度荣获布克奖殊荣的作家之一(另一位则是诺贝尔文学奖得主库切)。凯里的作品怪诞、幽默，具有寓言式小说和科幻小说的特征。 [1]",
    techniques: "彼得·凯里是当代澳大利亚文学的领军人物，被誉为“澳大利亚最有才华和最令人激动的作家之一”。\n彼得·凯里是当代澳大利亚文学的领军人物，被誉为“澳大利亚最有才华和最令人激动的作家之一”。 [1]\n\n他凭借《奥斯卡与露辛达》(1988)和《凯利帮真史》(2001)两次获得布克奖，是仅有的两位两度荣获布克奖殊荣的作家之一(另一位则是诺贝尔文学奖得主库切)。凯里的作品怪诞、幽默，具有寓言式小说和科幻小说的特征。 [1]",
    excerpts: [],
    insights: "彼得·凯里是当代澳大利亚文学的领军人物，被誉为“澳大利亚最有才华和最令人激动的作家之一”。\n彼得·凯里是当代澳大利亚文学的领军人物，被誉为“澳大利亚最有才华和最令人激动的作家之一”。 [1]\n\n他凭借《奥斯卡与露辛达》(1988)和《凯利帮真史》(2001)两次获得布克奖，是仅有的两位两度荣获布克奖殊荣的作家之一(另一位则是诺贝尔文学奖得主库切)。凯里的作品怪诞、幽默，具有寓言式小说和科幻小说的特征。 [1]",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/Oscar%20and%20Lucinda", tier: "reference", fetchedAt: "2026-05-21T04:50:16.882Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=Oscar%20and%20Lucinda%20Peter%20Carey" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=Oscar%20and%20Lucinda%20Peter%20Carey" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=Oscar%20and%20Lucinda" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=Oscar%20and%20Lucinda" },
      ],
    },
  },

  "the-tree-of-man": {
    id: "the-tree-of-man",
    characters: [
      { name: "Subjects", role: "角色", description: "\"The Tree of Man\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Bakers", role: "角色", description: "\"The Tree of Man\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Fiction", role: "角色", description: "\"The Tree of Man\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Barbers", role: "角色", description: "\"The Tree of Man\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Cannibalism", role: "角色", description: "\"The Tree of Man\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "Fleet Street", role: "角色", description: "\"The Tree of Man\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "London", role: "角色", description: "\"The Tree of Man\" 中出现的角色。更多信息请通过搜索链接核实。" },
      { name: "England", role: "角色", description: "\"The Tree of Man\" 中出现的角色。更多信息请通过搜索链接核实。" }
    ],
    plotSummary: "Subjects: Bakers -- Fiction; Barbers -- Fiction; Cannibalism -- Fiction; Fleet Street (London, England) -- Fiction; Historical fiction; Horror tales; London (England) -- Social life and customs -- 18th century -- Fiction; Missing persons -- Fiction; Murder -- Fiction; Mystery fiction; Revenge -- Fiction; Suspense fiction; Todd, Sweeney (Legendary character) -- Fiction; Young women -- Fiction",
    plotNodes: [
      { label: "第 1 部分", description: "Subjects: Bakers -- Fiction; Barbers -- Fiction; Cannibalism -- Fiction; Fleet Street (London, England) -- Fiction; Historical fiction; Horror tales; London (England) -- Social life and customs -- 18t" }
    ],
    themeAnalysis: "Subjects: Bakers -- Fiction; Barbers -- Fiction; Cannibalism -- Fiction; Fleet Street (London, England) -- Fiction; Historical fiction; Horror tales; London (England) -- Social life and customs -- 18th century -- Fiction; Missing persons -- Fiction; Murder -- Fiction; Mystery fiction; Revenge -- Fiction; Suspense fiction; Todd, Sweeney (Legendary character) -- Fiction; Young women -- Fiction",
    techniques: "Subjects: Bakers -- Fiction; Barbers -- Fiction; Cannibalism -- Fiction; Fleet Street (London, England) -- Fiction; Historical fiction; Horror tales; London (England) -- Social life and customs -- 18th century -- Fiction; Missing persons -- Fiction; Murder -- Fiction; Mystery fiction; Revenge -- Fiction; Suspense fiction; Todd, Sweeney (Legendary character) -- Fiction; Young women -- Fiction",
    excerpts: [],
    insights: "Subjects: Bakers -- Fiction; Barbers -- Fiction; Cannibalism -- Fiction; Fleet Street (London, England) -- Fiction; Historical fiction; Horror tales; London (England) -- Social life and customs -- 18th century -- Fiction; Missing persons -- Fiction; Murder -- Fiction; Mystery fiction; Revenge -- Fiction; Suspense fiction; Todd, Sweeney (Legendary character) -- Fiction; Young women -- Fiction",
    sourceAttribution: {
      sources: [
        { label: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/59828", tier: "original_text", fetchedAt: "2026-05-21T04:53:05.177Z", contributedFields: ["insights"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=The%20Tree%20of%20Man%20Patrick%20White" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=The%20Tree%20of%20Man%20Patrick%20White" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=The%20Tree%20of%20Man" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=The%20Tree%20of%20Man" },
      ],
    },
  },

  "once-were-warriors": {
    id: "once-were-warriors",
    plotSummary: "Once Were Warriors is New Zealand author Alan Duff's bestselling first novel, published in 1990. It tells the story of an urban Māori family, the Hekes, and portrays the reality of domestic violence in New Zealand. It was the basis of a 1994 film of the same title, directed by Lee Tamahori and starring Rena Owen and Temuera Morrison, which made its U.S. premiere at the Hawaii International Film Festival. The novel was followed by two sequels, What Becomes of the Broken Hearted? (1996) and Jake's Long Shadow (2002).",
    themeAnalysis: "Once Were Warriors is New Zealand author Alan Duff's bestselling first novel, published in 1990. It tells the story of an urban Māori family, the Hekes, and portrays the reality of domestic violence in New Zealand. It was the basis of a 1994 film of the same title, directed by Lee Tamahori and starring Rena Owen and Temuera Morrison, which made its U.S.",
    techniques: "Once Were Warriors is New Zealand author Alan Duff's bestselling first novel, published in 1990. It tells the story of an urban Māori family, the Hekes, and portrays the reality of domestic violence in New Zealand. It was the basis of a 1994 film of the same title, directed by Lee Tamahori and starring Rena Owen and Temuera Morrison, which made its U.S.",
    excerpts: [],
    insights: "Once Were Warriors is New Zealand author Alan Duff's bestselling first novel, published in 1990. It tells the story of an urban Māori family, the Hekes, and portrays the reality of domestic violence in New Zealand. It was the basis of a 1994 film of the same title, directed by Lee Tamahori and starring Rena Owen and Temuera Morrison, which made its U.S.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Once%20Were%20Warriors"
    // }
  },

  "true-history-kelly-gang": {
    id: "true-history-kelly-gang",
    plotSummary: "True History of the Kelly Gang is a 2000 novel by Australian writer Peter Carey, loosely based on the life of Ned Kelly and his gang. Written as a fictional memoir in Kelly's voice, the novel draws on the style of the bushranger's Jerilderie Letter and reimagines the events of his life in colonial Australia. It was first published in Australia by the University of Queensland Press. Despite its title, the work is a piece of historical fiction that explores themes of identity, myth-making, and the tension between personal narrative and recorded history.",
    themeAnalysis: "True History of the Kelly Gang is a 2000 novel by Australian writer Peter Carey, loosely based on the life of Ned Kelly and his gang. Written as a fictional memoir in Kelly's voice, the novel draws on the style of the bushranger's Jerilderie Letter and reimagines the events of his life in colonial Australia. It was first published in Australia by the University of Queensland Press.",
    techniques: "True History of the Kelly Gang is a 2000 novel by Australian writer Peter Carey, loosely based on the life of Ned Kelly and his gang. Written as a fictional memoir in Kelly's voice, the novel draws on the style of the bushranger's Jerilderie Letter and reimagines the events of his life in colonial Australia. It was first published in Australia by the University of Queensland Press.",
    excerpts: [],
    insights: "True History of the Kelly Gang is a 2000 novel by Australian writer Peter Carey, loosely based on the life of Ned Kelly and his gang. Written as a fictional memoir in Kelly's voice, the novel draws on the style of the bushranger's Jerilderie Letter and reimagines the events of his life in colonial Australia. It was first published in Australia by the University of Queensland Press.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/True%20History%20of%20the%20Kelly%20Gang"
    // }
  },

  "carpentaria": {
    id: "carpentaria",
    characters: [
      { name: "Carpentaria", role: "角色", description: "\"Carpentaria\" 中出现的角色。更多信息请通过搜索链接核实。" }
    ],
    plotSummary: "Carpentaria是英语名词，音标为[kɑ:pən&#39;teəriə]，专指澳大利亚东北部的卡奔塔利亚湾及其周边区域，用于描述澳大利亚北部与新几内亚南部之间的海域，并与阿拉弗拉海相邻。作为地理术语，Carpentaria主要指代卡奔塔利亚湾这一宽阔浅海湾，属阿拉弗拉海的一部分；其衍生名称如Carpentaria acuminata（东澳棕）和N. carpentaria睡莲为该地区相关物种，卡奔塔利亚湾有牵牛花云现象。该名称最早见于17世纪荷兰东印度公司的航海记录，1606年荷兰船只“杜伊芬号”首次航行至该海湾并进行地理标注。\nCarpentaria是英语名词，音标为[kɑ:pən&#x27;teəriə]，专指澳大利亚东北部的卡奔塔利亚湾及其周边区域，用于描述澳大利亚北部与新几内亚南部之间的海域，并与阿拉弗拉海相邻。",
    plotNodes: [
      { label: "第 1 部分", description: "Carpentaria是英语名词，音标为[kɑ:pən&#39;teəriə]，专指澳大利亚东北部的卡奔塔利亚湾及其周边区域，用于描述澳大利亚北部与新几内亚南部之间的海域，并与阿拉弗拉海相邻。作为地理术语，Carpentaria主要指代卡奔塔利亚湾这一宽阔浅海湾，属阿拉弗拉海的一部分；其衍生名称如Carpentaria acuminata（东澳棕）和N. carpentaria睡莲为该地区相关物种" },
      { label: "第 2 部分", description: "作为地理术语，Carpentaria主要指代卡奔塔利亚湾这一宽阔浅海湾，属阿拉弗拉海的一部分；其衍生名称如Carpentaria acuminata（东澳棕）和N. carpentaria睡莲为该地区相关物种，卡奔塔利亚湾有牵牛花云现象。" },
      { label: "第 3 部分", description: "该名称最早见于17世纪荷兰东印度公司的航海记录，1606年荷兰船只“杜伊芬号”首次航行至该海湾并进行地理标注。 [1] [4]" },
      { label: "第 4 部分", description: "Gulf of Carpentaria 卡奔塔利亚湾 ; 即卡奔塔利亚湾 ; 卡奔塔利亚海湾 ; 亚湾" },
      { label: "第 5 部分", description: "An intermittent river of northeast Australia flowing about 837 km (520 mi) northwest to the Gulf of Carpentaria." }
    ],
    themeAnalysis: "Carpentaria是英语名词，音标为[kɑ:pən&#39;teəriə]，专指澳大利亚东北部的卡奔塔利亚湾及其周边区域，用于描述澳大利亚北部与新几内亚南部之间的海域，并与阿拉弗拉海相邻。作为地理术语，Carpentaria主要指代卡奔塔利亚湾这一宽阔浅海湾，属阿拉弗拉海的一部分；其衍生名称如Carpentaria acuminata（东澳棕）和N. carpentaria睡莲为该地区相关物种，卡奔塔利亚湾有牵牛花云现象。该名称最早见于17世纪荷兰东印度公司的航海记录，1606年荷兰船只“杜伊芬号”首次航行至该海湾并进行地理标注。\nCarpentaria是英语名词，音标为[kɑ:pən&#x27;teəriə]，专指澳大利亚东北部的卡奔塔利亚湾及其周边区域，用于描述澳大利亚北部与新几内亚南部之间的海域，并与阿拉弗拉海相邻。 [1-2] [5]\n\n作为地理术语，Carpentaria主要指代卡奔塔利亚湾这一宽阔浅海湾，属阿拉弗拉海的一部分；其衍生名称如Carpentaria acuminata（东澳棕）和N. carpentaria睡莲为该地区相关物种，卡奔塔利亚湾有牵牛花云现象。",
    techniques: "Carpentaria是英语名词，音标为[kɑ:pən&#39;teəriə]，专指澳大利亚东北部的卡奔塔利亚湾及其周边区域，用于描述澳大利亚北部与新几内亚南部之间的海域，并与阿拉弗拉海相邻。作为地理术语，Carpentaria主要指代卡奔塔利亚湾这一宽阔浅海湾，属阿拉弗拉海的一部分；其衍生名称如Carpentaria acuminata（东澳棕）和N. carpentaria睡莲为该地区相关物种，卡奔塔利亚湾有牵牛花云现象。该名称最早见于17世纪荷兰东印度公司的航海记录，1606年荷兰船只“杜伊芬号”首次航行至该海湾并进行地理标注。\nCarpentaria是英语名词，音标为[kɑ:pən&#x27;teəriə]，专指澳大利亚东北部的卡奔塔利亚湾及其周边区域，用于描述澳大利亚北部与新几内亚南部之间的海域，并与阿拉弗拉海相邻。",
    excerpts: [],
    insights: "Carpentaria是英语名词，音标为[kɑ:pən&#39;teəriə]，专指澳大利亚东北部的卡奔塔利亚湾及其周边区域，用于描述澳大利亚北部与新几内亚南部之间的海域，并与阿拉弗拉海相邻。作为地理术语，Carpentaria主要指代卡奔塔利亚湾这一宽阔浅海湾，属阿拉弗拉海的一部分；其衍生名称如Carpentaria acuminata（东澳棕）和N. carpentaria睡莲为该地区相关物种，卡奔塔利亚湾有牵牛花云现象。该名称最早见于17世纪荷兰东印度公司的航海记录，1606年荷兰船只“杜伊芬号”首次航行至该海湾并进行地理标注。\nCarpentaria是英语名词，音标为[kɑ:pən&#x27;teəriə]，专指澳大利亚东北部的卡奔塔利亚湾及其周边区域，用于描述澳大利亚北部与新几内亚南部之间的海域，并与阿拉弗拉海相邻。",
    sourceAttribution: {
      sources: [
        { label: "百度百科", url: "https://baike.baidu.com/item/Carpentaria", tier: "reference", fetchedAt: "2026-05-21T04:38:25.411Z", contributedFields: ["plotSummary", "characters", "themeAnalysis"] },
      ],
      reliability: "fallback",
      disclaimer: "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。",
      searchLinks: [
        { label: "Google Books 搜索", url: "https://www.google.com/search?tbm=bks&q=Carpentaria%20Alexis%20Wright" },
        { label: "Wikipedia 搜索", url: "https://en.wikipedia.org/w/index.php?search=Carpentaria%20Alexis%20Wright" },
        { label: "百度百科 搜索", url: "https://baike.baidu.com/search?word=Carpentaria" },
        { label: "豆瓣读书 搜索", url: "https://book.douban.com/subject_search?search_text=Carpentaria" },
      ],
    },
  },

  "hundred-years-solitude": {
    id: "hundred-years-solitude",
    plotSummary: "One Hundred Years of Solitude (Spanish: Cien años de soledad, Latin American Spanish: [sjen ˈaɲos ðe soleˈðað]) is a 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the fictitious town of Macondo. The novel is often cited as one of the supreme achievements in world literature. It was recognized as one of the most important works of the Spanish language during the 4th International Conference of the Spanish Language held in Cartagena de Indias in March 2007.",
    themeAnalysis: "One Hundred Years of Solitude (Spanish: Cien años de soledad, Latin American Spanish: [sjen ˈaɲos ðe soleˈðað]) is a 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the fictitious town of Macondo. The novel is often cited as one of the supreme achievements in world literature.",
    techniques: "One Hundred Years of Solitude (Spanish: Cien años de soledad, Latin American Spanish: [sjen ˈaɲos ðe soleˈðað]) is a 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the fictitious town of Macondo. The novel is often cited as one of the supreme achievements in world literature.",
    excerpts: [],
    insights: "One Hundred Years of Solitude (Spanish: Cien años de soledad, Latin American Spanish: [sjen ˈaɲos ðe soleˈðað]) is a 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the fictitious town of Macondo. The novel is often cited as one of the supreme achievements in world literature.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/One%20Hundred%20Years%20of%20Solitude"
    // }
  },

  "buddenbrooks": {
    id: "buddenbrooks",
    plotSummary: "Buddenbrooks (German: [ˈbʊdn̩ˌbʁoːks] ) is a 1901 novel by Thomas Mann, chronicling the decline of a wealthy north German merchant family over the course of four generations, incidentally portraying the manner of life and mores of the Hanseatic bourgeoisie in the years from 1835 to 1877. Mann drew deeply from the history of his own family, the Mann family of Lübeck, and their milieu. It was Mann's first novel, published when he was twenty-six years old. With the publication of the second edition in 1903, Buddenbrooks became a literary success.",
    themeAnalysis: "Buddenbrooks (German: [ˈbʊdn̩ˌbʁoːks] ) is a 1901 novel by Thomas Mann, chronicling the decline of a wealthy north German merchant family over the course of four generations, incidentally portraying the manner of life and mores of the Hanseatic bourgeoisie in the years from 1835 to 1877. Mann drew deeply from the history of his own family, the Mann family of Lübeck, and their milieu.",
    techniques: "Buddenbrooks (German: [ˈbʊdn̩ˌbʁoːks] ) is a 1901 novel by Thomas Mann, chronicling the decline of a wealthy north German merchant family over the course of four generations, incidentally portraying the manner of life and mores of the Hanseatic bourgeoisie in the years from 1835 to 1877. Mann drew deeply from the history of his own family, the Mann family of Lübeck, and their milieu.",
    excerpts: [],
    insights: "Buddenbrooks (German: [ˈbʊdn̩ˌbʁoːks] ) is a 1901 novel by Thomas Mann, chronicling the decline of a wealthy north German merchant family over the course of four generations, incidentally portraying the manner of life and mores of the Hanseatic bourgeoisie in the years from 1835 to 1877. Mann drew deeply from the history of his own family, the Mann family of Lübeck, and their milieu.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Buddenbrooks"
    // }
  },

  "hunger": {
    id: "hunger",
    plotSummary: "In politics, humanitarian aid, and the social sciences, hunger is defined as a condition in which an individual does not have the physical or financial capability to consume sufficient food to meet basic nutritional needs for a sustained period. In the field of hunger relief, the term hunger is used in a sense that surpasses the typical desire for food that all humans experience, also referred to as an appetite.",
    plotNodes: [
      { label: "Part 1", description: "In politics, humanitarian aid, and the social sciences, hunger is defined as a condition in which an individual does not have the physical or financial capability to consume sufficient food to meet ba" },
      { label: "Part 2", description: "Throughout history, portions of the world's population have often suffered sustained periods of hunger." }
    ],
    themeAnalysis: "In politics, humanitarian aid, and the social sciences, hunger is defined as a condition in which an individual does not have the physical or financial capability to consume sufficient food to meet basic nutritional needs for a sustained period.",
    techniques: "In politics, humanitarian aid, and the social sciences, hunger is defined as a condition in which an individual does not have the physical or financial capability to consume sufficient food to meet basic nutritional needs for a sustained period.",
    excerpts: [],
    insights: "In politics, humanitarian aid, and the social sciences, hunger is defined as a condition in which an individual does not have the physical or financial capability to consume sufficient food to meet basic nutritional needs for a sustained period.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Hunger"
    // }
  },

  "2666": {
    id: "2666",
    plotSummary: "2666 is the final novel by Roberto Bolaño. It was released posthumously in 2004, a year following his death. It is over 1100 pages long in the original Spanish. It is divided into five parts. An English-language translation by Natasha Wimmer was published in the United States in 2008 by Farrar, Straus and Giroux and in the United Kingdom in 2009 by Picador. It is a fragmentary novel.",
    themeAnalysis: "2666 is the final novel by Roberto Bolaño. It was released posthumously in 2004, a year following his death. It is over 1100 pages long in the original Spanish. It is divided into five parts. An English-language translation by Natasha Wimmer was published in the United States in 2008 by Farrar, Straus and Giroux and in the United Kingdom in 2009 by Picador. It is a fragmentary novel.",
    techniques: "2666 is the final novel by Roberto Bolaño. It was released posthumously in 2004, a year following his death. It is over 1100 pages long in the original Spanish. It is divided into five parts. An English-language translation by Natasha Wimmer was published in the United States in 2008 by Farrar, Straus and Giroux and in the United Kingdom in 2009 by Picador. It is a fragmentary novel.",
    excerpts: [],
    insights: "2666 is the final novel by Roberto Bolaño. It was released posthumously in 2004, a year following his death. It is over 1100 pages long in the original Spanish. It is divided into five parts. An English-language translation by Natasha Wimmer was published in the United States in 2008 by Farrar, Straus and Giroux and in the United Kingdom in 2009 by Picador. It is a fragmentary novel.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/2666"
    // }
  },

  "catch-22": {
    id: "catch-22",
    plotSummary: "Catch-22 is a satirical war novel by American author Joseph Heller. It is his debut novel. He began writing it in 1953; the novel was first published in 1961. Often cited as one of the most significant novels of the 20th century, it uses a distinctive non-chronological third-person omniscient narration, describing events from the points of view of different characters. The separate storylines are out of sequence so the timeline develops along with the plot. The novel satirizes military bureaucracy and greed. The novel is set during World War II, from 1942 to 1944.",
    themeAnalysis: "Catch-22 is a satirical war novel by American author Joseph Heller. It is his debut novel. He began writing it in 1953; the novel was first published in 1961. Often cited as one of the most significant novels of the 20th century, it uses a distinctive non-chronological third-person omniscient narration, describing events from the points of view of different characters.",
    techniques: "Catch-22 is a satirical war novel by American author Joseph Heller. It is his debut novel. He began writing it in 1953; the novel was first published in 1961. Often cited as one of the most significant novels of the 20th century, it uses a distinctive non-chronological third-person omniscient narration, describing events from the points of view of different characters.",
    excerpts: [],
    insights: "Catch-22 is a satirical war novel by American author Joseph Heller. It is his debut novel. He began writing it in 1953; the novel was first published in 1961. Often cited as one of the most significant novels of the 20th century, it uses a distinctive non-chronological third-person omniscient narration, describing events from the points of view of different characters.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Catch-22"
    // }
  },

  "walden": {
    id: "walden",
    plotSummary: "Walden (; first published as Walden; or, Life in the Woods) is an 1854 book by American transcendentalist writer Henry David Thoreau. The text is a reflection upon the author's simple living in natural surroundings. The work is part personal declaration of independence, social experiment, voyage of spiritual discovery, satire, and—to some degree—a manual for self-reliance.",
    themeAnalysis: "Walden (; first published as Walden; or, Life in the Woods) is an 1854 book by American transcendentalist writer Henry David Thoreau. The text is a reflection upon the author's simple living in natural surroundings. The work is part personal declaration of independence, social experiment, voyage of spiritual discovery, satire, and—to some degree—a manual for self-reliance.",
    techniques: "Walden (; first published as Walden; or, Life in the Woods) is an 1854 book by American transcendentalist writer Henry David Thoreau. The text is a reflection upon the author's simple living in natural surroundings. The work is part personal declaration of independence, social experiment, voyage of spiritual discovery, satire, and—to some degree—a manual for self-reliance.",
    excerpts: [],
    insights: "Walden (; first published as Walden; or, Life in the Woods) is an 1854 book by American transcendentalist writer Henry David Thoreau. The text is a reflection upon the author's simple living in natural surroundings. The work is part personal declaration of independence, social experiment, voyage of spiritual discovery, satire, and—to some degree—a manual for self-reliance.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Walden"
    // }
  },

  "trilce": {
    id: "trilce",
    plotSummary: "Trilce (Lima, 1922) is the best-known book by the Peruvian poet César Vallejo, and is considered, thanks to its lexicographical and syntactical boldness, as a major work of international modernism and a poetic masterpiece of the avant-garde in Spanish.",
    themeAnalysis: "Trilce (Lima, 1922) is the best-known book by the Peruvian poet César Vallejo, and is considered, thanks to its lexicographical and syntactical boldness, as a major work of international modernism and a poetic masterpiece of the avant-garde in Spanish.",
    techniques: "Trilce (Lima, 1922) is the best-known book by the Peruvian poet César Vallejo, and is considered, thanks to its lexicographical and syntactical boldness, as a major work of international modernism and a poetic masterpiece of the avant-garde in Spanish.",
    excerpts: [],
    insights: "Trilce (Lima, 1922) is the best-known book by the Peruvian poet César Vallejo, and is considered, thanks to its lexicographical and syntactical boldness, as a major work of international modernism and a poetic masterpiece of the avant-garde in Spanish.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Trilce"
    // }
  },

  "upanishads": {
    id: "upanishads",
    plotSummary: "The Upanishads (; Sanskrit: उपनिषद्, IAST: Upaniṣad, pronounced [ˈupɐniʂɐd]) are Sanskrit texts of the late Vedic and post-Vedic periods that \"document the transition from the archaic ritualism of the Veda into new religious ideas and institutions\" and the emergence of the central religious concepts of Hinduism. They are the most recent addition to the Vedas, the oldest scriptures of Hinduism, and deal with meditation, philosophy, consciousness, and ontological knowledge. Earlier parts of the Vedas dealt with mantras, benedictions, rituals, ceremonies, and sacrifices.",
    themeAnalysis: "The Upanishads (; Sanskrit: उपनिषद्, IAST: Upaniṣad, pronounced [ˈupɐniʂɐd]) are Sanskrit texts of the late Vedic and post-Vedic periods that \"document the transition from the archaic ritualism of the Veda into new religious ideas and institutions\" and the emergence of the central religious concepts of Hinduism.",
    techniques: "The Upanishads (; Sanskrit: उपनिषद्, IAST: Upaniṣad, pronounced [ˈupɐniʂɐd]) are Sanskrit texts of the late Vedic and post-Vedic periods that \"document the transition from the archaic ritualism of the Veda into new religious ideas and institutions\" and the emergence of the central religious concepts of Hinduism.",
    excerpts: [
      { quote: "document the transition from the archaic ritualism of the Veda into new religious ideas and institutions", context: "From upanishads" },
      { quote: "rites, incantations, and esoteric knowledge", context: "From upanishads" },
      { quote: "summit of the hierarchically arranged and interconnected universe", context: "From upanishads" }
    ],
    insights: "The Upanishads (; Sanskrit: उपनिषद्, IAST: Upaniṣad, pronounced [ˈupɐniʂɐd]) are Sanskrit texts of the late Vedic and post-Vedic periods that \"document the transition from the archaic ritualism of the Veda into new religious ideas and institutions\" and the emergence of the central religious concepts of Hinduism.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Upanishads"
    // }
  },

  "quran": {
    id: "quran",
    plotSummary: "The Quran (Arabic: الْقُرْآن, lit. 'the recitation' or 'the lecture'), also romanized Qur'an or Koran, is the central religious text of Islam, believed by Muslims to be a revelation directly from God (Allāh). It is organized in 114 chapters (sūrah, pl. suwar) which consist of individual verses (āyah). Besides its religious significance, it is widely regarded as the finest work in Arabic literature, and has significantly influenced the Arabic language.",
    themeAnalysis: "The Quran (Arabic: الْقُرْآن, lit. 'the recitation' or 'the lecture'), also romanized Qur'an or Koran, is the central religious text of Islam, believed by Muslims to be a revelation directly from God (Allāh). It is organized in 114 chapters (sūrah, pl. suwar) which consist of individual verses (āyah).",
    techniques: "The Quran (Arabic: الْقُرْآن, lit. 'the recitation' or 'the lecture'), also romanized Qur'an or Koran, is the central religious text of Islam, believed by Muslims to be a revelation directly from God (Allāh). It is organized in 114 chapters (sūrah, pl. suwar) which consist of individual verses (āyah).",
    excerpts: [],
    insights: "The Quran (Arabic: الْقُرْآن, lit. 'the recitation' or 'the lecture'), also romanized Qur'an or Koran, is the central religious text of Islam, believed by Muslims to be a revelation directly from God (Allāh). It is organized in 114 chapters (sūrah, pl. suwar) which consist of individual verses (āyah).",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Quran"
    // }
  },

  "kathasaritsagara": {
    id: "kathasaritsagara",
    plotSummary: "The Kathāsaritsāgara (\"Ocean of the Streams of Stories\") (Devanagari: कथासरित्सागर) is a famous 11th-century collection of Indian legends and folk tales as retold in Sanskrit by the Shaivite Somadeva from Kashmir. Kathāsaritsāgara contains multiple layers of story within a story and is said to have been adopted from Guṇāḍhya's Bṛhatkathā (\"the Great Narrative\"), which was written in a poorly-understood language known as Paiśāchī. The Bṛhatkathā is no longer extant but several later adaptations still exist — the Kathāsaritsāgara, Bṛhatkathamanjari and Bṛhatkathāślokasaṃgraha.",
    themeAnalysis: "The Kathāsaritsāgara (\"Ocean of the Streams of Stories\") (Devanagari: कथासरित्सागर) is a famous 11th-century collection of Indian legends and folk tales as retold in Sanskrit by the Shaivite Somadeva from Kashmir. Kathāsaritsāgara contains multiple layers of story within a story and is said to have been adopted from Guṇāḍhya's Bṛhatkathā (\"the Great Narrative\"), which was written in a poorly-under...",
    techniques: "The Kathāsaritsāgara (\"Ocean of the Streams of Stories\") (Devanagari: कथासरित्सागर) is a famous 11th-century collection of Indian legends and folk tales as retold in Sanskrit by the Shaivite Somadeva from Kashmir. Kathāsaritsāgara contains multiple layers of story within a story and is said to have been adopted from Guṇāḍhya's Bṛhatkathā (\"the Great Narrative\"), which was written in a poorly-under...",
    excerpts: [
      { quote: "Ocean of the Streams of Stories", context: "From kathasaritsagara" }
    ],
    insights: "The Kathāsaritsāgara (\"Ocean of the Streams of Stories\") (Devanagari: कथासरित्सागर) is a famous 11th-century collection of Indian legends and folk tales as retold in Sanskrit by the Shaivite Somadeva from Kashmir. Kathāsaritsāgara contains multiple layers of story within a story and is said to have been adopted from Guṇāḍhya's Bṛhatkathā (\"the Great Narrative\"), which was written in a poorly-under...",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Kathasaritsagara"
    // }
  },

  "family": {
    id: "family",
    plotSummary: "Family (from Latin: familia) is a group of people related either by consanguinity (by recognized birth) or affinity (by marriage or other relationship). It forms the basis for social order. Ideally, families offer predictability, structure, and safety as members mature and learn to participate in the community. Historically, most human societies use family as the primary purpose of attachment, nurturance, and socialization.",
    themeAnalysis: "Family (from Latin: familia) is a group of people related either by consanguinity (by recognized birth) or affinity (by marriage or other relationship). It forms the basis for social order. Ideally, families offer predictability, structure, and safety as members mature and learn to participate in the community.",
    techniques: "Family (from Latin: familia) is a group of people related either by consanguinity (by recognized birth) or affinity (by marriage or other relationship). It forms the basis for social order. Ideally, families offer predictability, structure, and safety as members mature and learn to participate in the community.",
    excerpts: [],
    insights: "Family (from Latin: familia) is a group of people related either by consanguinity (by recognized birth) or affinity (by marriage or other relationship). It forms the basis for social order. Ideally, families offer predictability, structure, and safety as members mature and learn to participate in the community.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Family"
    // }
  },

  "ramakien": {
    id: "ramakien",
    plotSummary: "The Ramakien (Thai: รามเกียรติ์, RTGS: Rammakian, pronounced [rāːm.mā.kīa̯n]; lit. 'Glory of Rama'; sometimes also spelled Ramakian) is one of Thailand's national epics. It is a Thai version of the ancient Indian Hindu epic Ramayana, and an important part of the Thai literary canon. King Rama VI was the first person to shed light first on the Ramayana studies in Thailand, by tracing the sources of the Ramakien, comparing it with the Sanskrit Valmiki Ramayana. He found that the Ramakien was influenced by three sources: the Valmiki's Ramayana, the Vishnu Purana, and Hanuman Nataka.",
    themeAnalysis: "The Ramakien (Thai: รามเกียรติ์, RTGS: Rammakian, pronounced [rāːm.mā.kīa̯n]; lit. 'Glory of Rama'; sometimes also spelled Ramakian) is one of Thailand's national epics. It is a Thai version of the ancient Indian Hindu epic Ramayana, and an important part of the Thai literary canon.",
    techniques: "The Ramakien (Thai: รามเกียรติ์, RTGS: Rammakian, pronounced [rāːm.mā.kīa̯n]; lit. 'Glory of Rama'; sometimes also spelled Ramakian) is one of Thailand's national epics. It is a Thai version of the ancient Indian Hindu epic Ramayana, and an important part of the Thai literary canon.",
    excerpts: [],
    insights: "The Ramakien (Thai: รามเกียรติ์, RTGS: Rammakian, pronounced [rāːm.mā.kīa̯n]; lit. 'Glory of Rama'; sometimes also spelled Ramakian) is one of Thailand's national epics. It is a Thai version of the ancient Indian Hindu epic Ramayana, and an important part of the Thai literary canon.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Ramakien"
    // }
  },

  "wandering": {
    id: "wandering",
    plotSummary: "Wandering may refer to: Wandering (dementia) Wandering (EP), a 2021 EP by JO1 Wandering, Western Australia, a town located in the Wheatbelt region of Western Australia Shire of Wandering, a local government area in the Wheatbelt region of Western Australia \"Wandering\", a song by the Cat Empire, a B-side to \"Days Like These\"",
    themeAnalysis: "Wandering may refer to: Wandering (dementia) Wandering (EP), a 2021 EP by JO1 Wandering, Western Australia, a town located in the Wheatbelt region of Western Australia Shire of Wandering, a local government area in the Wheatbelt region of Western Australia \"Wandering\", a song by the Cat Empire, a B-side to \"Days Like These\"",
    techniques: "Wandering may refer to: Wandering (dementia) Wandering (EP), a 2021 EP by JO1 Wandering, Western Australia, a town located in the Wheatbelt region of Western Australia Shire of Wandering, a local government area in the Wheatbelt region of Western Australia \"Wandering\", a song by the Cat Empire, a B-side to \"Days Like These\"",
    excerpts: [
      { quote: ", a song by the Cat Empire, a B-side to ", context: "From wandering" }
    ],
    insights: "Wandering may refer to: Wandering (dementia) Wandering (EP), a 2021 EP by JO1 Wandering, Western Australia, a town located in the Wheatbelt region of Western Australia Shire of Wandering, a local government area in the Wheatbelt region of Western Australia \"Wandering\", a song by the Cat Empire, a B-side to \"Days Like These\"",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Wandering"
    // }
  },

  "gulistan": {
    id: "gulistan",
    plotSummary: "Gulistan, Golestan or Golastan (Persian: گلستان) means \"flower land\" or \"rose garden\" in Persian language (gol meaning \"flower\" or \"rose\", and -stan meaning \"land\" or \"garden\"). It may refer to:",
    themeAnalysis: "Gulistan, Golestan or Golastan (Persian: گلستان) means \"flower land\" or \"rose garden\" in Persian language (gol meaning \"flower\" or \"rose\", and -stan meaning \"land\" or \"garden\"). It may refer to:",
    techniques: "Gulistan, Golestan or Golastan (Persian: گلستان) means \"flower land\" or \"rose garden\" in Persian language (gol meaning \"flower\" or \"rose\", and -stan meaning \"land\" or \"garden\"). It may refer to:",
    excerpts: [
      { quote: " in Persian language (gol meaning ", context: "From gulistan" }
    ],
    insights: "Gulistan, Golestan or Golastan (Persian: گلستان) means \"flower land\" or \"rose garden\" in Persian language (gol meaning \"flower\" or \"rose\", and -stan meaning \"land\" or \"garden\"). It may refer to:",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Gulistan"
    // }
  },

  "tsurezuregusa": {
    id: "tsurezuregusa",
    plotSummary: "Tsurezuregusa (徒然草; Japanese pronunciation: [tsɯ.ɾe.(d)zɯ.ɾeꜜ.ɡɯ.sa, -ŋɯ.sa]) is a collection of essays written by the Japanese monk Kenkō (兼好) between 1330 and 1332. The work is widely considered a gem of medieval Japanese literature and one of the three representative works of the zuihitsu genre, along with The Pillow Book and the Hōjōki.",
    themeAnalysis: "Tsurezuregusa (徒然草; Japanese pronunciation: [tsɯ.ɾe.(d)zɯ.ɾeꜜ.ɡɯ.sa, -ŋɯ.sa]) is a collection of essays written by the Japanese monk Kenkō (兼好) between 1330 and 1332. The work is widely considered a gem of medieval Japanese literature and one of the three representative works of the zuihitsu genre, along with The Pillow Book and the Hōjōki.",
    techniques: "Tsurezuregusa (徒然草; Japanese pronunciation: [tsɯ.ɾe.(d)zɯ.ɾeꜜ.ɡɯ.sa, -ŋɯ.sa]) is a collection of essays written by the Japanese monk Kenkō (兼好) between 1330 and 1332. The work is widely considered a gem of medieval Japanese literature and one of the three representative works of the zuihitsu genre, along with The Pillow Book and the Hōjōki.",
    excerpts: [],
    insights: "Tsurezuregusa (徒然草; Japanese pronunciation: [tsɯ.ɾe.(d)zɯ.ɾeꜜ.ɡɯ.sa, -ŋɯ.sa]) is a collection of essays written by the Japanese monk Kenkō (兼好) between 1330 and 1332. The work is widely considered a gem of medieval Japanese literature and one of the three representative works of the zuihitsu genre, along with The Pillow Book and the Hōjōki.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Tsurezuregusa"
    // }
  },

  "panchatantra": {
    id: "panchatantra",
    plotSummary: "The Panchatantra (IAST and ISO: Pañcatantra; Sanskrit: पञ्चतन्त्र; lit. 'Five Treatises') is an ancient Indian collection of interrelated animal fables in Sanskrit verse and prose, arranged within a frame story. The text's author is unknown, but it has been attributed to Vishnu Sharma in some recensions and Vasubhaga in others, both of which may be fictitious pen names. It is likely a Hindu text, and based on older oral traditions with \"animal fables that are as old as we are able to imagine\".",
    plotNodes: [
      { label: "Part 1", description: "The Panchatantra (IAST and ISO: Pañcatantra; Sanskrit: पञ्चतन्त्र; lit." },
      { label: "Part 2", description: "...before 1600 it existed in Greek, Latin, Spanish, Italian, German, English, Old Slavonic, Czech, and perhaps other Slavonic languages." }
    ],
    themeAnalysis: "The Panchatantra (IAST and ISO: Pañcatantra; Sanskrit: पञ्चतन्त्र; lit. 'Five Treatises') is an ancient Indian collection of interrelated animal fables in Sanskrit verse and prose, arranged within a frame story. The text's author is unknown, but it has been attributed to Vishnu Sharma in some recensions and Vasubhaga in others, both of which may be fictitious pen names.",
    techniques: "The Panchatantra (IAST and ISO: Pañcatantra; Sanskrit: पञ्चतन्त्र; lit. 'Five Treatises') is an ancient Indian collection of interrelated animal fables in Sanskrit verse and prose, arranged within a frame story. The text's author is unknown, but it has been attributed to Vishnu Sharma in some recensions and Vasubhaga in others, both of which may be fictitious pen names.",
    excerpts: [
      { quote: "animal fables that are as old as we are able to imagine", context: "From panchatantra" },
      { quote: "certainly the most frequently translated literary product of India", context: "From panchatantra" }
    ],
    insights: "The Panchatantra (IAST and ISO: Pañcatantra; Sanskrit: पञ्चतन्त्र; lit. 'Five Treatises') is an ancient Indian collection of interrelated animal fables in Sanskrit verse and prose, arranged within a frame story. The text's author is unknown, but it has been attributed to Vishnu Sharma in some recensions and Vasubhaga in others, both of which may be fictitious pen names.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Panchatantra"
    // }
  },

  "zhuangzi": {
    id: "zhuangzi",
    plotSummary: "Zhuangzi may refer to: Zhuangzi (book) (莊子), an ancient Chinese collection of anecdotes and fables, one of the foundational texts of Taoism Zhuang Zhou (莊周), the historical figure known as \"Master Zhuang\" (\"Zhuangzi\") and traditional author of the eponymous book Old Zhuang script (古壮字, the script used by the Zhuang people in ancient times, also known as Sawndip",
    themeAnalysis: "Zhuangzi may refer to: Zhuangzi (book) (莊子), an ancient Chinese collection of anecdotes and fables, one of the foundational texts of Taoism Zhuang Zhou (莊周), the historical figure known as \"Master Zhuang\" (\"Zhuangzi\") and traditional author of the eponymous book Old Zhuang script (古壮字, the script used by the Zhuang people in ancient times, also known as Sawndip",
    techniques: "Zhuangzi may refer to: Zhuangzi (book) (莊子), an ancient Chinese collection of anecdotes and fables, one of the foundational texts of Taoism Zhuang Zhou (莊周), the historical figure known as \"Master Zhuang\" (\"Zhuangzi\") and traditional author of the eponymous book Old Zhuang script (古壮字, the script used by the Zhuang people in ancient times, also known as Sawndip",
    excerpts: [],
    insights: "Zhuangzi may refer to: Zhuangzi (book) (莊子), an ancient Chinese collection of anecdotes and fables, one of the foundational texts of Taoism Zhuang Zhou (莊周), the historical figure known as \"Master Zhuang\" (\"Zhuangzi\") and traditional author of the eponymous book Old Zhuang script (古壮字, the script used by the Zhuang people in ancient times, also known as Sawndip",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Zhuangzi"
    // }
  },

  "antigone": {
    id: "antigone",
    plotSummary: "In Greek mythology, Antigone ( ann-TIG-ə-nee; Ancient Greek: Ἀντιγόνη, romanized: Antigónē) was a Theban princess and a character in several ancient Greek tragedies. She was the daughter of Oedipus, king of Thebes; her mother/grandmother was either Jocasta or, in another variation of the myth, Euryganeia. She was the sister of Polynices, Eteocles, and Ismene. Antigone appears in three 5th century BC tragic plays written by Sophocles, known collectively as the three Theban plays, with her being the protagonist of the eponymous tragedy Antigone.",
    themeAnalysis: "In Greek mythology, Antigone ( ann-TIG-ə-nee; Ancient Greek: Ἀντιγόνη, romanized: Antigónē) was a Theban princess and a character in several ancient Greek tragedies. She was the daughter of Oedipus, king of Thebes; her mother/grandmother was either Jocasta or, in another variation of the myth, Euryganeia. She was the sister of Polynices, Eteocles, and Ismene.",
    techniques: "In Greek mythology, Antigone ( ann-TIG-ə-nee; Ancient Greek: Ἀντιγόνη, romanized: Antigónē) was a Theban princess and a character in several ancient Greek tragedies. She was the daughter of Oedipus, king of Thebes; her mother/grandmother was either Jocasta or, in another variation of the myth, Euryganeia. She was the sister of Polynices, Eteocles, and Ismene.",
    excerpts: [],
    insights: "In Greek mythology, Antigone ( ann-TIG-ə-nee; Ancient Greek: Ἀντιγόνη, romanized: Antigónē) was a Theban princess and a character in several ancient Greek tragedies. She was the daughter of Oedipus, king of Thebes; her mother/grandmother was either Jocasta or, in another variation of the myth, Euryganeia. She was the sister of Polynices, Eteocles, and Ismene.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Antigone"
    // }
  },

  "beowulf": {
    id: "beowulf",
    plotSummary: "Beowulf ( ; Old English: Bēowulf [ˈbeːowuɫf]) is an Old English poem, an epic in the tradition of Germanic heroic legend consisting of 3,182 alliterative lines, contained in the Nowell Codex. It is one of the most important and most often translated works of Old English literature. The date of composition is a matter of contention among scholars; the only certain dating is for the manuscript, which was produced between AD 975 and 1025. Scholars call the anonymous author the \"Beowulf poet\". The story is set in pagan Scandinavia in the 5th and 6th centuries.",
    themeAnalysis: "Beowulf ( ; Old English: Bēowulf [ˈbeːowuɫf]) is an Old English poem, an epic in the tradition of Germanic heroic legend consisting of 3,182 alliterative lines, contained in the Nowell Codex. It is one of the most important and most often translated works of Old English literature.",
    techniques: "Beowulf ( ; Old English: Bēowulf [ˈbeːowuɫf]) is an Old English poem, an epic in the tradition of Germanic heroic legend consisting of 3,182 alliterative lines, contained in the Nowell Codex. It is one of the most important and most often translated works of Old English literature.",
    excerpts: [],
    insights: "Beowulf ( ; Old English: Bēowulf [ˈbeːowuɫf]) is an Old English poem, an epic in the tradition of Germanic heroic legend consisting of 3,182 alliterative lines, contained in the Nowell Codex. It is one of the most important and most often translated works of Old English literature.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Beowulf"
    // }
  },

  "oresteia": {
    id: "oresteia",
    plotSummary: "The Oresteia (Ancient Greek: Ὀρέστεια) is a trilogy of Greek tragedies written by Aeschylus in the 5th century BC, concerning the murder of Agamemnon by Clytemnestra, the murder of Clytemnestra by Orestes, the trial of Orestes, the end of the curse on the House of Atreus, and the pacification of the Furies (also called Erinyes or Eumenides). The Oresteia trilogy consists of three plays: Agamemnon, The Libation Bearers, and The Eumenides. It shows how the Greek gods interacted with the characters and influenced their decisions pertaining to events and disputes.",
    themeAnalysis: "The Oresteia (Ancient Greek: Ὀρέστεια) is a trilogy of Greek tragedies written by Aeschylus in the 5th century BC, concerning the murder of Agamemnon by Clytemnestra, the murder of Clytemnestra by Orestes, the trial of Orestes, the end of the curse on the House of Atreus, and the pacification of the Furies (also called Erinyes or Eumenides).",
    techniques: "The Oresteia (Ancient Greek: Ὀρέστεια) is a trilogy of Greek tragedies written by Aeschylus in the 5th century BC, concerning the murder of Agamemnon by Clytemnestra, the murder of Clytemnestra by Orestes, the trial of Orestes, the end of the curse on the House of Atreus, and the pacification of the Furies (also called Erinyes or Eumenides).",
    excerpts: [],
    insights: "The Oresteia (Ancient Greek: Ὀρέστεια) is a trilogy of Greek tragedies written by Aeschylus in the 5th century BC, concerning the murder of Agamemnon by Clytemnestra, the murder of Clytemnestra by Orestes, the trial of Orestes, the end of the curse on the House of Atreus, and the pacification of the Furies (also called Erinyes or Eumenides).",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Oresteia"
    // }
  },

  "gargantua": {
    id: "gargantua",
    plotSummary: "La vie tres horrifique du grand Gargantua, père de Pantagruel jadis composée par M. Alcofribas abstracteur de quinte essence. Livre plein de Pantagruelisme according to François Juste's 1542 edition, or simply Gargantua, is the second novel by François Rabelais, published in 1534 or 1535. Similar in structure to Pantagruel (1532), but written in a more complex style, it recounts the years of apprenticeship and the warlike exploits of the giant Gargantua.",
    themeAnalysis: "La vie tres horrifique du grand Gargantua, père de Pantagruel jadis composée par M. Alcofribas abstracteur de quinte essence. Livre plein de Pantagruelisme according to François Juste's 1542 edition, or simply Gargantua, is the second novel by François Rabelais, published in 1534 or 1535.",
    techniques: "La vie tres horrifique du grand Gargantua, père de Pantagruel jadis composée par M. Alcofribas abstracteur de quinte essence. Livre plein de Pantagruelisme according to François Juste's 1542 edition, or simply Gargantua, is the second novel by François Rabelais, published in 1534 or 1535.",
    excerpts: [],
    insights: "La vie tres horrifique du grand Gargantua, père de Pantagruel jadis composée par M. Alcofribas abstracteur de quinte essence. Livre plein de Pantagruelisme according to François Juste's 1542 edition, or simply Gargantua, is the second novel by François Rabelais, published in 1534 or 1535.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Gargantua"
    // }
  },

  "candide": {
    id: "candide",
    plotSummary: "Candide, ou l'Optimisme ( kon-DEED, French: [kɑ̃did] ) is a French satire written by Voltaire, a philosopher of the Age of Enlightenment, first published in 1759. The novella has been widely translated, with English versions titled Candide: or, All for the Best (1759); Candide: or, The Optimist (1762); and Candide: Optimism (1947). A young man, Candide, lives a sheltered life in an Edenic paradise, being indoctrinated with Leibnizian optimism by his mentor, Professor Pangloss.",
    themeAnalysis: "Candide, ou l'Optimisme ( kon-DEED, French: [kɑ̃did] ) is a French satire written by Voltaire, a philosopher of the Age of Enlightenment, first published in 1759. The novella has been widely translated, with English versions titled Candide: or, All for the Best (1759); Candide: or, The Optimist (1762); and Candide: Optimism (1947).",
    techniques: "Candide, ou l'Optimisme ( kon-DEED, French: [kɑ̃did] ) is a French satire written by Voltaire, a philosopher of the Age of Enlightenment, first published in 1759. The novella has been widely translated, with English versions titled Candide: or, All for the Best (1759); Candide: or, The Optimist (1762); and Candide: Optimism (1947).",
    excerpts: [
      { quote: ", in lieu of the Leibnizian mantra of Pangloss, ", context: "From candide" }
    ],
    insights: "Candide, ou l'Optimisme ( kon-DEED, French: [kɑ̃did] ) is a French satire written by Voltaire, a philosopher of the Age of Enlightenment, first published in 1759. The novella has been widely translated, with English versions titled Candide: or, All for the Best (1759); Candide: or, The Optimist (1762); and Candide: Optimism (1947).",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Candide"
    // }
  },

  "lysistrata": {
    id: "lysistrata",
    plotSummary: "Lysistrata ( or ; Attic Greek: Λυσιστράτη, Lysistrátē, lit. 'army disbander') is an ancient Greek comedy by Aristophanes, first staged in early 411 BCE at Lenaea festival in classical Athens. The play is a comic account of a woman's – Lysistrata's – mission to end the Peloponnesian War between Greek city states by denying sex from all the men of warring parties and occupying the Acropolis of Athens. Lysistrata persuades the women of the warring cities to engage in a sex strike as a means of forcing the men to negotiate peace – a strategy that inflames the battle between the sexes.",
    themeAnalysis: "Lysistrata ( or ; Attic Greek: Λυσιστράτη, Lysistrátē, lit. 'army disbander') is an ancient Greek comedy by Aristophanes, first staged in early 411 BCE at Lenaea festival in classical Athens. The play is a comic account of a woman's – Lysistrata's – mission to end the Peloponnesian War between Greek city states by denying sex from all the men of warring parties and occupying the Acropolis of Athen...",
    techniques: "Lysistrata ( or ; Attic Greek: Λυσιστράτη, Lysistrátē, lit. 'army disbander') is an ancient Greek comedy by Aristophanes, first staged in early 411 BCE at Lenaea festival in classical Athens. The play is a comic account of a woman's – Lysistrata's – mission to end the Peloponnesian War between Greek city states by denying sex from all the men of warring parties and occupying the Acropolis of Athen...",
    excerpts: [],
    insights: "Lysistrata ( or ; Attic Greek: Λυσιστράτη, Lysistrátē, lit. 'army disbander') is an ancient Greek comedy by Aristophanes, first staged in early 411 BCE at Lenaea festival in classical Athens. The play is a comic account of a woman's – Lysistrata's – mission to end the Peloponnesian War between Greek city states by denying sex from all the men of warring parties and occupying the Acropolis of Athen...",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Lysistrata"
    // }
  },

  "germinal": {
    id: "germinal",
    plotSummary: "Germinal may refer to: Germinal (French Republican Calendar), the seventh month of the calendar, approximately March 21 - April 19",
    themeAnalysis: "Germinal may refer to: Germinal (French Republican Calendar), the seventh month of the calendar, approximately March 21 - April 19",
    techniques: "Germinal may refer to: Germinal (French Republican Calendar), the seventh month of the calendar, approximately March 21 - April 19",
    excerpts: [],
    insights: "Germinal may refer to: Germinal (French Republican Calendar), the seventh month of the calendar, approximately March 21 - April 19",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Germinal"
    // }
  },

  "nibelungenlied": {
    id: "nibelungenlied",
    plotSummary: "The Nibelungenlied (German pronunciation: [ˈniːbəlʊŋən-], [ˈnɪbəlʊŋən-] or [ˌniːbəˈlʊŋənˌliːt] ; Middle High German: Der Nibelunge liet or Der Nibelunge nôt), translated as The Song of the Nibelungs, is an epic poem written around 1200 in Middle High German. Its anonymous poet was likely from the region of Passau. The Nibelungenlied is based on an oral tradition of Germanic heroic legend that has some of its origin in historic events and individuals of the 5th and 6th centuries and that spread throughout almost all of Germanic-speaking Europe.",
    themeAnalysis: "The Nibelungenlied (German pronunciation: [ˈniːbəlʊŋən-], [ˈnɪbəlʊŋən-] or [ˌniːbəˈlʊŋənˌliːt] ; Middle High German: Der Nibelunge liet or Der Nibelunge nôt), translated as The Song of the Nibelungs, is an epic poem written around 1200 in Middle High German. Its anonymous poet was likely from the region of Passau.",
    techniques: "The Nibelungenlied (German pronunciation: [ˈniːbəlʊŋən-], [ˈnɪbəlʊŋən-] or [ˌniːbəˈlʊŋənˌliːt] ; Middle High German: Der Nibelunge liet or Der Nibelunge nôt), translated as The Song of the Nibelungs, is an epic poem written around 1200 in Middle High German. Its anonymous poet was likely from the region of Passau.",
    excerpts: [
      { quote: "one of the most impressive, and certainly the most powerful, of the German epics of the Middle Ages", context: "From nibelungenlied" }
    ],
    insights: "The Nibelungenlied (German pronunciation: [ˈniːbəlʊŋən-], [ˈnɪbəlʊŋən-] or [ˌniːbəˈlʊŋənˌliːt] ; Middle High German: Der Nibelunge liet or Der Nibelunge nôt), translated as The Song of the Nibelungs, is an epic poem written around 1200 in Middle High German. Its anonymous poet was likely from the region of Passau.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Nibelungenlied"
    // }
  },

  "atonement": {
    id: "atonement",
    plotSummary: "Atonement, atoning, or making amends is the concept of a person taking action to correct previous wrongdoing on their part, either through direct action to undo the consequences of that act, equivalent action to do good for others, or some other expression of feelings of remorse. Atonement \"is closely associated to forgiveness, reconciliation, sorrow, remorse, repentance, reparation, and guilt\". It can be seen as a necessary step on a path to redemption. Expiation is the related concept of removing guilt, particularly the undoing of sin or other transgressions in religious contexts.",
    themeAnalysis: "Atonement, atoning, or making amends is the concept of a person taking action to correct previous wrongdoing on their part, either through direct action to undo the consequences of that act, equivalent action to do good for others, or some other expression of feelings of remorse. Atonement \"is closely associated to forgiveness, reconciliation, sorrow, remorse, repentance, reparation, and guilt\".",
    techniques: "Atonement, atoning, or making amends is the concept of a person taking action to correct previous wrongdoing on their part, either through direct action to undo the consequences of that act, equivalent action to do good for others, or some other expression of feelings of remorse. Atonement \"is closely associated to forgiveness, reconciliation, sorrow, remorse, repentance, reparation, and guilt\".",
    excerpts: [
      { quote: "is closely associated to forgiveness, reconciliation, sorrow, remorse, repentance, reparation, and guilt", context: "From atonement" }
    ],
    insights: "Atonement, atoning, or making amends is the concept of a person taking action to correct previous wrongdoing on their part, either through direct action to undo the consequences of that act, equivalent action to do good for others, or some other expression of feelings of remorse. Atonement \"is closely associated to forgiveness, reconciliation, sorrow, remorse, repentance, reparation, and guilt\".",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Atonement"
    // }
  },

  "lives": {
    id: "lives",
    plotSummary: "Lives may refer to: The plural form of a life Lives, Iran, a village in Khuzestan Province, Iran The number of lives in a video game Parallel Lives, aka Lives of the Noble Greeks and Romans, a series of biographies of famous men, written by Plutarch and thus often called Plutarch's Lives or The Lives of Plutarch LiVES, a video editing program and VJ tool \"Lives\", a song by Daron Malakian and Scars on Broadway from the album Dictator \"Lives\", a song by Modest Mouse from the album The Moon & Antarctica A short form of Lives of the Most Excellent Painters, Sculptors, and Architects, a 16th-centur...",
    themeAnalysis: "Lives may refer to: The plural form of a life Lives, Iran, a village in Khuzestan Province, Iran The number of lives in a video game Parallel Lives, aka Lives of the Noble Greeks and Romans, a series of biographies of famous men, written by Plutarch and thus often called Plutarch's Lives or The Lives of Plutarch LiVES, a video editing program and VJ tool \"Lives\", a song by Daron Malakian and Scars...",
    techniques: "Lives may refer to: The plural form of a life Lives, Iran, a village in Khuzestan Province, Iran The number of lives in a video game Parallel Lives, aka Lives of the Noble Greeks and Romans, a series of biographies of famous men, written by Plutarch and thus often called Plutarch's Lives or The Lives of Plutarch LiVES, a video editing program and VJ tool \"Lives\", a song by Daron Malakian and Scars...",
    excerpts: [
      { quote: ", a song by Daron Malakian and Scars on Broadway from the album Dictator\n", context: "From lives" }
    ],
    insights: "Lives may refer to: The plural form of a life Lives, Iran, a village in Khuzestan Province, Iran The number of lives in a video game Parallel Lives, aka Lives of the Noble Greeks and Romans, a series of biographies of famous men, written by Plutarch and thus often called Plutarch's Lives or The Lives of Plutarch LiVES, a video editing program and VJ tool \"Lives\", a song by Daron Malakian and Scars...",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Lives"
    // }
  },

  "cloudstreet": {
    id: "cloudstreet",
    plotSummary: "Cloudstreet is a novel by Australian writer Tim Winton published in 1991. It chronicles the lives of two working-class families, the Pickles and the Lambs, who come to live together in a large house called Cloudstreet in Perth, Western Australia, over a period of twenty years, 1943 to 1963. The novel received several awards, including a Miles Franklin Award in 1992, and has been adapted into various forms, including a stage play and a television miniseries.",
    themeAnalysis: "Cloudstreet is a novel by Australian writer Tim Winton published in 1991. It chronicles the lives of two working-class families, the Pickles and the Lambs, who come to live together in a large house called Cloudstreet in Perth, Western Australia, over a period of twenty years, 1943 to 1963.",
    techniques: "Cloudstreet is a novel by Australian writer Tim Winton published in 1991. It chronicles the lives of two working-class families, the Pickles and the Lambs, who come to live together in a large house called Cloudstreet in Perth, Western Australia, over a period of twenty years, 1943 to 1963.",
    excerpts: [],
    insights: "Cloudstreet is a novel by Australian writer Tim Winton published in 1991. It chronicles the lives of two working-class families, the Pickles and the Lambs, who come to live together in a large house called Cloudstreet in Perth, Western Australia, over a period of twenty years, 1943 to 1963.",
    // _sources: {
    //   wikipedia_en: "https://en.wikipedia.org/wiki/Cloudstreet"
    // }
  },
};
