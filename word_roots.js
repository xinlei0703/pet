const WORD_ROOTS = {
  "unusual": {
    root: "us(e)",
    rootMeaning: "用，使用",
    prefix: "un-",
    prefixMeaning: "不，否定",
    suffix: "-ual",
    suffixMeaning: "形容词后缀",
    analysis: "un(不) + usu(用→常用的) + al(形容词) = 不寻常的",
    related: [
      { word: "usual", pos: "adj.", meaning: "通常的", exam: "高考" },
      { word: "usually", pos: "adv.", meaning: "通常地", exam: "高考" },
      { word: "use", pos: "v./n.", meaning: "使用；用途", exam: "高考" },
      { word: "useful", pos: "adj.", meaning: "有用的", exam: "高考" },
      { word: "useless", pos: "adj.", meaning: "无用的", exam: "四级" },
      { word: "usage", pos: "n.", meaning: "用法；使用", exam: "四级" },
      { word: "abuse", pos: "v./n.", meaning: "滥用；虐待", exam: "六级/考研" }
    ]
  },
  "appearance": {
    root: "par/pear",
    rootMeaning: "出现，显现",
    prefix: "ap-",
    prefixMeaning: "加强",
    suffix: "-ance",
    suffixMeaning: "名词后缀，表状态",
    analysis: "ap(加强) + pear(出现) + ance(名词) = 外貌，出现",
    related: [
      { word: "appear", pos: "v.", meaning: "出现；似乎", exam: "高考" },
      { word: "disappear", pos: "v.", meaning: "消失", exam: "高考" },
      { word: "apparent", pos: "adj.", meaning: "明显的", exam: "四级" },
      { word: "apparently", pos: "adv.", meaning: "显然地", exam: "四级" },
      { word: "disappearance", pos: "n.", meaning: "消失", exam: "六级" },
      { word: "transparent", pos: "adj.", meaning: "透明的", exam: "六级/考研" }
    ]
  },
  "location": {
    root: "loc",
    rootMeaning: "地方，位置",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ation",
    suffixMeaning: "名词后缀，表行为/结果",
    analysis: "loc(地方) + ation(名词) = 位置，地点",
    related: [
      { word: "locate", pos: "v.", meaning: "找出位置；坐落于", exam: "四级" },
      { word: "local", pos: "adj.", meaning: "当地的", exam: "高考" },
      { word: "allocate", pos: "v.", meaning: "分配", exam: "六级/考研" },
      { word: "dislocate", pos: "v.", meaning: "使脱臼；打乱", exam: "考研" },
      { word: "locomotive", pos: "n.", meaning: "火车头", exam: "六级" },
      { word: "relocate", pos: "v.", meaning: "重新安置", exam: "六级" }
    ]
  },
  "locate": {
    root: "loc",
    rootMeaning: "地方，位置",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ate",
    suffixMeaning: "动词后缀",
    analysis: "loc(地方) + ate(动词) = 找出位置",
    related: [
      { word: "location", pos: "n.", meaning: "位置；地点", exam: "高考" },
      { word: "local", pos: "adj.", meaning: "当地的", exam: "高考" },
      { word: "allocate", pos: "v.", meaning: "分配", exam: "六级/考研" },
      { word: "relocate", pos: "v.", meaning: "重新安置", exam: "六级" }
    ]
  },
  "decorate": {
    root: "decor",
    rootMeaning: "装饰，美化",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ate",
    suffixMeaning: "动词后缀",
    analysis: "decor(装饰) + ate(动词) = 装饰",
    related: [
      { word: "decoration", pos: "n.", meaning: "装饰；装饰品", exam: "四级" },
      { word: "decorative", pos: "adj.", meaning: "装饰性的", exam: "六级" },
      { word: "decorator", pos: "n.", meaning: "装饰者", exam: "四级" },
      { word: "décor", pos: "n.", meaning: "装潢风格", exam: "六级" }
    ]
  },
  "marriage": {
    root: "marr/mari",
    rootMeaning: "婚姻，结合",
    prefix: "",
    prefixMeaning: "",
    suffix: "-age",
    suffixMeaning: "名词后缀，表状态/行为",
    analysis: "marri(结婚) + age(名词) = 婚姻",
    related: [
      { word: "marry", pos: "v.", meaning: "结婚", exam: "高考" },
      { word: "married", pos: "adj.", meaning: "已婚的", exam: "高考" },
      { word: "unmarried", pos: "adj.", meaning: "未婚的", exam: "四级" }
    ]
  },
  "marry": {
    root: "marr/mari",
    rootMeaning: "婚姻，结合",
    prefix: "",
    prefixMeaning: "",
    suffix: "",
    suffixMeaning: "",
    analysis: "marr(结婚) + y = 结婚",
    related: [
      { word: "marriage", pos: "n.", meaning: "婚姻", exam: "高考" },
      { word: "married", pos: "adj.", meaning: "已婚的", exam: "高考" },
      { word: "unmarried", pos: "adj.", meaning: "未婚的", exam: "四级" }
    ]
  },
  "ceremony": {
    root: "cere",
    rootMeaning: "仪式，庄重",
    prefix: "",
    prefixMeaning: "",
    suffix: "-mony",
    suffixMeaning: "名词后缀，表状态",
    analysis: "cere(仪式) + mony(名词) = 典礼",
    related: [
      { word: "ceremonial", pos: "adj.", meaning: "仪式的", exam: "六级" },
      { word: "ceremonious", pos: "adj.", meaning: "隆重的", exam: "考研" }
    ]
  },
  "childhood": {
    root: "child",
    rootMeaning: "孩子",
    prefix: "",
    prefixMeaning: "",
    suffix: "-hood",
    suffixMeaning: "名词后缀，表时期/状态",
    analysis: "child(孩子) + hood(时期) = 童年",
    related: [
      { word: "child", pos: "n.", meaning: "孩子", exam: "高考" },
      { word: "children", pos: "n.", meaning: "孩子们", exam: "高考" },
      { word: "childish", pos: "adj.", meaning: "幼稚的", exam: "四级" },
      { word: "childlike", pos: "adj.", meaning: "天真的", exam: "四级" },
      { word: "neighborhood", pos: "n.", meaning: "社区", exam: "高考" },
      { word: "likelihood", pos: "n.", meaning: "可能性", exam: "六级/考研" },
      { word: "adulthood", pos: "n.", meaning: "成年", exam: "四级" }
    ]
  },
  "surround": {
    root: "round",
    rootMeaning: "圆，环绕",
    prefix: "sur-",
    prefixMeaning: "超过，在上面",
    suffix: "",
    suffixMeaning: "",
    analysis: "sur(在上面) + round(环绕) = 包围",
    related: [
      { word: "surrounding", pos: "adj.", meaning: "周围的", exam: "四级" },
      { word: "surroundings", pos: "n.", meaning: "环境", exam: "四级" },
      { word: "round", pos: "adj./prep.", meaning: "圆的；围绕", exam: "高考" },
      { word: "around", pos: "prep./adv.", meaning: "在周围", exam: "高考" },
      { word: "ground", pos: "n.", meaning: "地面", exam: "高考" }
    ]
  },
  "mention": {
    root: "ment/min",
    rootMeaning: "思考，记忆",
    prefix: "",
    prefixMeaning: "",
    suffix: "-tion",
    suffixMeaning: "名词后缀",
    analysis: "men(思考) + tion = 提到，提及",
    related: [
      { word: "mental", pos: "adj.", meaning: "精神的；心理的", exam: "四级" },
      { word: "comment", pos: "n./v.", meaning: "评论", exam: "四级" },
      { word: "remind", pos: "v.", meaning: "提醒", exam: "高考" },
      { word: "mind", pos: "n./v.", meaning: "头脑；介意", exam: "高考" },
      { word: "memory", pos: "n.", meaning: "记忆", exam: "高考" }
    ]
  },
  "meaning": {
    root: "mean",
    rootMeaning: "意思，意味",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ing",
    suffixMeaning: "名词后缀，表行为/结果",
    analysis: "mean(意味) + ing(名词) = 意义",
    related: [
      { word: "mean", pos: "v./adj.", meaning: "意味着；吝啬的", exam: "高考" },
      { word: "means", pos: "n.", meaning: "方式；手段", exam: "高考" },
      { word: "meaningful", pos: "adj.", meaning: "有意义的", exam: "四级" },
      { word: "meaningless", pos: "adj.", meaning: "无意义的", exam: "四级" },
      { word: "meanwhile", pos: "adv.", meaning: "同时", exam: "四级" }
    ]
  },
  "meanwhile": {
    root: "mean/while",
    rootMeaning: "中间 + 时间段",
    prefix: "",
    prefixMeaning: "",
    suffix: "",
    suffixMeaning: "",
    analysis: "mean(中间) + while(一段时间) = 在此期间",
    related: [
      { word: "while", pos: "conj./n.", meaning: "当…时；一会儿", exam: "高考" },
      { word: "worthwhile", pos: "adj.", meaning: "值得的", exam: "四级" },
      { word: "meantime", pos: "n./adv.", meaning: "其间；同时", exam: "四级" }
    ]
  },
  "nightmare": {
    root: "night + mare",
    rootMeaning: "夜晚 + 噩梦妖怪",
    prefix: "",
    prefixMeaning: "",
    suffix: "",
    suffixMeaning: "",
    analysis: "night(夜晚) + mare(梦魇) = 噩梦",
    related: [
      { word: "night", pos: "n.", meaning: "夜晚", exam: "高考" },
      { word: "midnight", pos: "n.", meaning: "午夜", exam: "高考" },
      { word: "overnight", pos: "adv./adj.", meaning: "一夜之间", exam: "四级" },
      { word: "daydream", pos: "n./v.", meaning: "白日梦", exam: "四级" },
      { word: "dream", pos: "n./v.", meaning: "梦；梦想", exam: "高考" }
    ]
  },
  "occasion": {
    root: "cas/cid",
    rootMeaning: "落下，发生",
    prefix: "oc-",
    prefixMeaning: "朝向",
    suffix: "-ion",
    suffixMeaning: "名词后缀",
    analysis: "oc(朝向) + cas(落下→发生) + ion(名词) = 时机，场合",
    related: [
      { word: "occasional", pos: "adj.", meaning: "偶尔的", exam: "四级" },
      { word: "occasionally", pos: "adv.", meaning: "偶尔地", exam: "四级" },
      { word: "case", pos: "n.", meaning: "情况；案例", exam: "高考" },
      { word: "accident", pos: "n.", meaning: "事故；意外", exam: "高考" },
      { word: "incident", pos: "n.", meaning: "事件", exam: "四级" }
    ]
  },
  "casual": {
    root: "cas",
    rootMeaning: "落下，偶然发生",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ual",
    suffixMeaning: "形容词后缀",
    analysis: "cas(偶然发生) + ual(形容词) = 随意的，非正式的",
    related: [
      { word: "casually", pos: "adv.", meaning: "随意地", exam: "四级" },
      { word: "casualty", pos: "n.", meaning: "伤亡人员", exam: "六级/考研" },
      { word: "case", pos: "n.", meaning: "情况；案例", exam: "高考" },
      { word: "occasion", pos: "n.", meaning: "场合", exam: "四级" }
    ]
  },
  "romance": {
    root: "rom",
    rootMeaning: "罗马（浪漫故事起源）",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ance",
    suffixMeaning: "名词后缀",
    analysis: "rom(罗马) + ance(名词) = 浪漫，恋爱",
    related: [
      { word: "romantic", pos: "adj.", meaning: "浪漫的", exam: "高考" },
      { word: "romantically", pos: "adv.", meaning: "浪漫地", exam: "六级" }
    ]
  },
  "district": {
    root: "strict/string",
    rootMeaning: "拉紧，束缚",
    prefix: "dis-",
    prefixMeaning: "分开",
    suffix: "",
    suffixMeaning: "",
    analysis: "dis(分开) + strict(拉紧→划分) = 区域",
    related: [
      { word: "strict", pos: "adj.", meaning: "严格的", exam: "高考" },
      { word: "strictly", pos: "adv.", meaning: "严格地", exam: "四级" },
      { word: "restrict", pos: "v.", meaning: "限制", exam: "四级" },
      { word: "restriction", pos: "n.", meaning: "限制；约束", exam: "四级" },
      { word: "construct", pos: "v.", meaning: "建造", exam: "四级" },
      { word: "instruct", pos: "v.", meaning: "指导", exam: "四级" }
    ]
  },
  "rent": {
    root: "rend/rent",
    rootMeaning: "给予，回报",
    prefix: "",
    prefixMeaning: "",
    suffix: "",
    suffixMeaning: "",
    analysis: "rent(给予→支付) = 租金，租用",
    related: [
      { word: "rental", pos: "n./adj.", meaning: "租金；出租的", exam: "四级" },
      { word: "render", pos: "v.", meaning: "使成为；提供", exam: "六级/考研" }
    ]
  },
  "cottage": {
    root: "cot",
    rootMeaning: "小屋",
    prefix: "",
    prefixMeaning: "",
    suffix: "-age",
    suffixMeaning: "名词后缀，表场所",
    analysis: "cot(小屋) + tage(名词) = 村舍",
    related: [
      { word: "village", pos: "n.", meaning: "村庄", exam: "高考" },
      { word: "passage", pos: "n.", meaning: "通道；段落", exam: "高考" },
      { word: "storage", pos: "n.", meaning: "储存", exam: "四级" },
      { word: "shortage", pos: "n.", meaning: "短缺", exam: "四级" }
    ]
  },
  "curly": {
    root: "curl",
    rootMeaning: "卷曲",
    prefix: "",
    prefixMeaning: "",
    suffix: "-y",
    suffixMeaning: "形容词后缀",
    analysis: "curl(卷曲) + y(形容词) = 卷曲的",
    related: [
      { word: "curl", pos: "v./n.", meaning: "卷曲；卷发", exam: "四级" },
      { word: "curling", pos: "n.", meaning: "冰壶运动", exam: "四级" }
    ]
  },
  "wedding": {
    root: "wed",
    rootMeaning: "结婚，誓约",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ding",
    suffixMeaning: "名词后缀",
    analysis: "wed(结婚) + ding(名词) = 婚礼",
    related: [
      { word: "wed", pos: "v.", meaning: "结婚", exam: "四级" },
      { word: "bride", pos: "n.", meaning: "新娘", exam: "四级" },
      { word: "groom", pos: "n.", meaning: "新郎", exam: "四级" },
      { word: "engagement", pos: "n.", meaning: "订婚", exam: "四级" }
    ]
  },
  "honeymoon": {
    root: "honey + moon",
    rootMeaning: "蜂蜜 + 月亮",
    prefix: "",
    prefixMeaning: "",
    suffix: "",
    suffixMeaning: "",
    analysis: "honey(蜂蜜→甜蜜) + moon(月) = 蜜月",
    related: [
      { word: "honey", pos: "n.", meaning: "蜂蜜", exam: "高考" },
      { word: "moon", pos: "n.", meaning: "月亮", exam: "高考" },
      { word: "moonlight", pos: "n.", meaning: "月光", exam: "四级" }
    ]
  },
  "cosy": {
    root: "cos",
    rootMeaning: "舒适（斯堪的纳维亚语源）",
    prefix: "",
    prefixMeaning: "",
    suffix: "-y",
    suffixMeaning: "形容词后缀",
    analysis: "cos(舒适) + y(形容词) = 温暖舒适的",
    related: [
      { word: "cozy", pos: "adj.", meaning: "舒适的（美式拼写）", exam: "四级" },
      { word: "comfortable", pos: "adj.", meaning: "舒适的", exam: "高考" },
      { word: "comfort", pos: "n./v.", meaning: "舒适；安慰", exam: "高考" }
    ]
  },
  "handsome": {
    root: "hand",
    rootMeaning: "手",
    prefix: "",
    prefixMeaning: "",
    suffix: "-some",
    suffixMeaning: "形容词后缀，有…特征的",
    analysis: "hand(手→灵巧的) + some(有特征的) = 英俊的",
    related: [
      { word: "hand", pos: "n./v.", meaning: "手；递给", exam: "高考" },
      { word: "handle", pos: "v./n.", meaning: "处理；把手", exam: "高考" },
      { word: "handful", pos: "n.", meaning: "一把；少数", exam: "四级" },
      { word: "awesome", pos: "adj.", meaning: "极好的", exam: "四级" },
      { word: "troublesome", pos: "adj.", meaning: "麻烦的", exam: "四级" }
    ]
  },
  "property": {
    root: "propri",
    rootMeaning: "自己的，拥有",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ty",
    suffixMeaning: "名词后缀",
    analysis: "propri(拥有) + ty(名词) = 财产，房产",
    related: [
      { word: "proper", pos: "adj.", meaning: "适当的；正确的", exam: "高考" },
      { word: "properly", pos: "adv.", meaning: "适当地", exam: "四级" },
      { word: "appropriate", pos: "adj.", meaning: "适当的", exam: "四级" },
      { word: "improper", pos: "adj.", meaning: "不适当的", exam: "六级" }
    ]
  },
  "neighbourhood": {
    root: "neigh/nigh",
    rootMeaning: "近，邻近",
    prefix: "",
    prefixMeaning: "",
    suffix: "-hood",
    suffixMeaning: "名词后缀，表范围/状态",
    analysis: "neighbour(邻居) + hood(范围) = 街区",
    related: [
      { word: "neighbour", pos: "n.", meaning: "邻居", exam: "高考" },
      { word: "neighbouring", pos: "adj.", meaning: "邻近的", exam: "四级" },
      { word: "childhood", pos: "n.", meaning: "童年", exam: "高考" },
      { word: "likelihood", pos: "n.", meaning: "可能性", exam: "六级/考研" },
      { word: "adulthood", pos: "n.", meaning: "成年", exam: "四级" }
    ]
  },
  "occasionally": {
    root: "cas/cid",
    rootMeaning: "落下，发生",
    prefix: "oc-",
    prefixMeaning: "朝向",
    suffix: "-ally",
    suffixMeaning: "副词后缀",
    analysis: "oc(朝向) + cas(发生) + ion + al + ly = 偶尔地",
    related: [
      { word: "occasion", pos: "n.", meaning: "场合；时机", exam: "四级" },
      { word: "occasional", pos: "adj.", meaning: "偶尔的", exam: "四级" },
      { word: "accident", pos: "n.", meaning: "事故", exam: "高考" },
      { word: "accidental", pos: "adj.", meaning: "意外的", exam: "四级" },
      { word: "incident", pos: "n.", meaning: "事件", exam: "四级" }
    ]
  },
  "alarm": {
    root: "arm",
    rootMeaning: "武器，武装",
    prefix: "al-",
    prefixMeaning: "到，向（意大利语源）",
    suffix: "",
    suffixMeaning: "",
    analysis: "al(到) + arm(武器→拿起武器) = 警报",
    related: [
      { word: "alarming", pos: "adj.", meaning: "令人担忧的", exam: "四级" },
      { word: "alarmed", pos: "adj.", meaning: "惊恐的", exam: "四级" },
      { word: "arm", pos: "n./v.", meaning: "手臂；武装", exam: "高考" },
      { word: "army", pos: "n.", meaning: "军队", exam: "高考" },
      { word: "disarm", pos: "v.", meaning: "解除武装", exam: "六级/考研" }
    ]
  },
  "repair": {
    root: "par",
    rootMeaning: "准备，安排",
    prefix: "re-",
    prefixMeaning: "重新",
    suffix: "",
    suffixMeaning: "",
    analysis: "re(重新) + pair(准备→修整) = 修理",
    related: [
      { word: "prepare", pos: "v.", meaning: "准备", exam: "高考" },
      { word: "preparation", pos: "n.", meaning: "准备", exam: "四级" },
      { word: "separate", pos: "v./adj.", meaning: "分开", exam: "高考" },
      { word: "compare", pos: "v.", meaning: "比较", exam: "高考" },
      { word: "comparison", pos: "n.", meaning: "比较", exam: "四级" }
    ]
  },
  "electrical": {
    root: "electr",
    rootMeaning: "电",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ical",
    suffixMeaning: "形容词后缀",
    analysis: "electr(电) + ical(形容词) = 电的",
    related: [
      { word: "electric", pos: "adj.", meaning: "电的；电动的", exam: "高考" },
      { word: "electricity", pos: "n.", meaning: "电；电力", exam: "高考" },
      { word: "electronic", pos: "adj.", meaning: "电子的", exam: "高考" },
      { word: "electronics", pos: "n.", meaning: "电子学", exam: "四级" },
      { word: "electron", pos: "n.", meaning: "电子", exam: "六级" }
    ]
  },
  "microwave": {
    root: "micro + wave",
    rootMeaning: "微小 + 波",
    prefix: "micro-",
    prefixMeaning: "微小的",
    suffix: "",
    suffixMeaning: "",
    analysis: "micro(微小) + wave(波) = 微波炉",
    related: [
      { word: "wave", pos: "n./v.", meaning: "波浪；挥手", exam: "高考" },
      { word: "microscope", pos: "n.", meaning: "显微镜", exam: "四级" },
      { word: "microphone", pos: "n.", meaning: "麦克风", exam: "四级" },
      { word: "Microsoft", pos: "n.", meaning: "微软", exam: "高考" }
    ]
  },
  "loan": {
    root: "loan/lend",
    rootMeaning: "借",
    prefix: "",
    prefixMeaning: "",
    suffix: "",
    suffixMeaning: "",
    analysis: "loan(借出→贷款)",
    related: [
      { word: "lend", pos: "v.", meaning: "借出", exam: "高考" },
      { word: "borrow", pos: "v.", meaning: "借入", exam: "高考" },
      { word: "debt", pos: "n.", meaning: "债务", exam: "四级" }
    ]
  },
  "situated": {
    root: "sit/situ",
    rootMeaning: "放置，位置",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ated",
    suffixMeaning: "形容词后缀",
    analysis: "situ(位置) + ated(形容词) = 位于…的",
    related: [
      { word: "situation", pos: "n.", meaning: "情况；形势", exam: "高考" },
      { word: "site", pos: "n.", meaning: "地点；网站", exam: "高考" },
      { word: "website", pos: "n.", meaning: "网站", exam: "高考" },
      { word: "position", pos: "n.", meaning: "位置；职位", exam: "高考" }
    ]
  },
  "messy": {
    root: "mess",
    rootMeaning: "混乱",
    prefix: "",
    prefixMeaning: "",
    suffix: "-y",
    suffixMeaning: "形容词后缀",
    analysis: "mess(混乱) + y(形容词) = 凌乱的",
    related: [
      { word: "mess", pos: "n./v.", meaning: "混乱；弄乱", exam: "四级" },
      { word: "message", pos: "n.", meaning: "消息", exam: "高考" },
      { word: "messenger", pos: "n.", meaning: "信使", exam: "四级" }
    ]
  },
  "dusty": {
    root: "dust",
    rootMeaning: "灰尘",
    prefix: "",
    prefixMeaning: "",
    suffix: "-y",
    suffixMeaning: "形容词后缀",
    analysis: "dust(灰尘) + y(形容词) = 布满灰尘的",
    related: [
      { word: "dust", pos: "n./v.", meaning: "灰尘；除尘", exam: "高考" },
      { word: "dustbin", pos: "n.", meaning: "垃圾箱", exam: "四级" },
      { word: "dusty", pos: "adj.", meaning: "布满灰尘的", exam: "四级" },
      { word: "industrial", pos: "adj.", meaning: "工业的", exam: "四级" }
    ]
  },
  "channel": {
    root: "can/chan",
    rootMeaning: "管道，水道",
    prefix: "",
    prefixMeaning: "",
    suffix: "-el",
    suffixMeaning: "名词后缀",
    analysis: "chan(管道) + nel = 频道，渠道",
    related: [
      { word: "canal", pos: "n.", meaning: "运河", exam: "四级" },
      { word: "cancel", pos: "v.", meaning: "取消", exam: "高考" }
    ]
  },
  "handle": {
    root: "hand",
    rootMeaning: "手",
    prefix: "",
    prefixMeaning: "",
    suffix: "-le",
    suffixMeaning: "动词后缀，表反复动作",
    analysis: "hand(手) + le(动词) = 用手操作→处理",
    related: [
      { word: "hand", pos: "n./v.", meaning: "手；递给", exam: "高考" },
      { word: "handsome", pos: "adj.", meaning: "英俊的", exam: "高考" },
      { word: "handful", pos: "n.", meaning: "一把；少数", exam: "四级" },
      { word: "handwriting", pos: "n.", meaning: "笔迹", exam: "四级" }
    ]
  },
  "rebuild": {
    root: "build",
    rootMeaning: "建造",
    prefix: "re-",
    prefixMeaning: "重新",
    suffix: "",
    suffixMeaning: "",
    analysis: "re(重新) + build(建造) = 重建",
    related: [
      { word: "build", pos: "v.", meaning: "建造", exam: "高考" },
      { word: "building", pos: "n.", meaning: "建筑物", exam: "高考" },
      { word: "builder", pos: "n.", meaning: "建筑工人", exam: "四级" },
      { word: "rebuild", pos: "v.", meaning: "重建", exam: "四级" }
    ]
  },
  "annual": {
    root: "ann/enn",
    rootMeaning: "年",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ual",
    suffixMeaning: "形容词后缀",
    analysis: "ann(年) + ual(形容词) = 每年的",
    related: [
      { word: "anniversary", pos: "n.", meaning: "周年纪念", exam: "四级" },
      { word: "annually", pos: "adv.", meaning: "每年地", exam: "四级" },
      { word: "perennial", pos: "adj.", meaning: "长期的；多年生的", exam: "六级/考研" }
    ]
  },
  "knock": {
    root: "knock",
    rootMeaning: "敲击",
    prefix: "",
    prefixMeaning: "",
    suffix: "",
    suffixMeaning: "",
    analysis: "knock = 敲，击（拟声词）",
    related: [
      { word: "knock down", pos: "phr.", meaning: "拆掉；撞倒", exam: "高考" },
      { word: "knock out", pos: "phr.", meaning: "击倒；淘汰", exam: "四级" },
      { word: "knock off", pos: "phr.", meaning: "下班；停止", exam: "四级" }
    ]
  },
  "asleep": {
    root: "sleep",
    rootMeaning: "睡眠",
    prefix: "a-",
    prefixMeaning: "处于…状态",
    suffix: "",
    suffixMeaning: "",
    analysis: "a(处于状态) + sleep(睡眠) = 睡着的",
    related: [
      { word: "sleep", pos: "v./n.", meaning: "睡觉", exam: "高考" },
      { word: "sleepy", pos: "adj.", meaning: "困倦的", exam: "高考" },
      { word: "asleep", pos: "adj.", meaning: "睡着的", exam: "高考" },
      { word: "awake", pos: "adj.", meaning: "醒着的", exam: "高考" },
      { word: "alive", pos: "adj.", meaning: "活着的", exam: "高考" },
      { word: "alone", pos: "adj.", meaning: "独自的", exam: "高考" }
    ]
  },
  "translate": {
    root: "lat/fer",
    rootMeaning: "搬运，传递",
    prefix: "trans-",
    prefixMeaning: "跨越，转移",
    suffix: "-ate",
    suffixMeaning: "动词后缀",
    analysis: "trans(跨越) + late(搬运) = 翻译",
    related: [
      { word: "translation", pos: "n.", meaning: "翻译", exam: "高考" },
      { word: "translator", pos: "n.", meaning: "翻译者", exam: "四级" },
      { word: "transfer", pos: "v.", meaning: "转移", exam: "四级" },
      { word: "transport", pos: "v./n.", meaning: "运输", exam: "高考" },
      { word: "transform", pos: "v.", meaning: "转变", exam: "四级" }
    ]
  },
  "biography": {
    root: "bio + graph",
    rootMeaning: "生命 + 写",
    prefix: "",
    prefixMeaning: "",
    suffix: "-y",
    suffixMeaning: "名词后缀",
    analysis: "bio(生命) + graph(写) + y = 传记",
    related: [
      { word: "biology", pos: "n.", meaning: "生物学", exam: "高考" },
      { word: "autobiography", pos: "n.", meaning: "自传", exam: "六级" },
      { word: "geography", pos: "n.", meaning: "地理", exam: "高考" },
      { word: "photograph", pos: "n.", meaning: "照片", exam: "高考" }
    ]
  },
  "careless": {
    root: "care",
    rootMeaning: "关心，小心",
    prefix: "",
    prefixMeaning: "",
    suffix: "-less",
    suffixMeaning: "形容词后缀，表否定",
    analysis: "care(小心) + less(没有) = 粗心的",
    related: [
      { word: "care", pos: "n./v.", meaning: "关心；照料", exam: "高考" },
      { word: "careful", pos: "adj.", meaning: "仔细的", exam: "高考" },
      { word: "carefully", pos: "adv.", meaning: "仔细地", exam: "高考" },
      { word: "carelessness", pos: "n.", meaning: "粗心", exam: "四级" },
      { word: "hopeless", pos: "adj.", meaning: "无望的", exam: "四级" },
      { word: "homeless", pos: "adj.", meaning: "无家可归的", exam: "四级" }
    ]
  },
  "celebrate": {
    root: "celebr",
    rootMeaning: "荣耀，著名",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ate",
    suffixMeaning: "动词后缀",
    analysis: "celebr(荣耀) + ate(动词) = 庆祝",
    related: [
      { word: "celebration", pos: "n.", meaning: "庆祝", exam: "高考" },
      { word: "celebrity", pos: "n.", meaning: "名人", exam: "四级" },
      { word: "celebrated", pos: "adj.", meaning: "著名的", exam: "六级" }
    ]
  },
  "celebration": {
    root: "celebr",
    rootMeaning: "荣耀，著名",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ation",
    suffixMeaning: "名词后缀，表行为/结果",
    analysis: "celebr(荣耀) + ation(名词) = 庆典",
    related: [
      { word: "celebrate", pos: "v.", meaning: "庆祝", exam: "高考" },
      { word: "celebrity", pos: "n.", meaning: "名人", exam: "四级" }
    ]
  },
  "central": {
    root: "centr",
    rootMeaning: "中心",
    prefix: "",
    prefixMeaning: "",
    suffix: "-al",
    suffixMeaning: "形容词后缀",
    analysis: "centr(中心) + al(形容词) = 中央的",
    related: [
      { word: "center/centre", pos: "n.", meaning: "中心", exam: "高考" },
      { word: "concentrate", pos: "v.", meaning: "集中", exam: "四级" },
      { word: "concentration", pos: "n.", meaning: "集中；浓度", exam: "四级" }
    ]
  },
  "diagram": {
    root: "dia + gram",
    rootMeaning: "穿过 + 写/画",
    prefix: "dia-",
    prefixMeaning: "穿过，通过",
    suffix: "",
    suffixMeaning: "",
    analysis: "dia(穿过) + gram(画) = 图表",
    related: [
      { word: "grammar", pos: "n.", meaning: "语法", exam: "高考" },
      { word: "program", pos: "n.", meaning: "程序；节目", exam: "高考" },
      { word: "telegram", pos: "n.", meaning: "电报", exam: "四级" }
    ]
  },
  "effect": {
    root: "fect/fac",
    rootMeaning: "做，制造",
    prefix: "ef-",
    prefixMeaning: "出，向外",
    suffix: "",
    suffixMeaning: "",
    analysis: "ef(出) + fect(做) = 做出来的→效果",
    related: [
      { word: "effective", pos: "adj.", meaning: "有效的", exam: "四级" },
      { word: "affect", pos: "v.", meaning: "影响", exam: "高考" },
      { word: "perfect", pos: "adj.", meaning: "完美的", exam: "高考" },
      { word: "infect", pos: "v.", meaning: "感染", exam: "四级" },
      { word: "defect", pos: "n.", meaning: "缺陷", exam: "六级" }
    ]
  },
  "incorrect": {
    root: "rect/reg",
    rootMeaning: "直，正",
    prefix: "in-",
    prefixMeaning: "不，否定",
    suffix: "",
    suffixMeaning: "",
    analysis: "in(不) + cor(加强) + rect(正) = 不正确的",
    related: [
      { word: "correct", pos: "adj./v.", meaning: "正确的；纠正", exam: "高考" },
      { word: "direction", pos: "n.", meaning: "方向", exam: "高考" },
      { word: "direct", pos: "adj./v.", meaning: "直接的；指导", exam: "高考" },
      { word: "director", pos: "n.", meaning: "导演；主管", exam: "高考" }
    ]
  },
  "intermediate": {
    root: "medi",
    rootMeaning: "中间",
    prefix: "inter-",
    prefixMeaning: "在…之间",
    suffix: "-ate",
    suffixMeaning: "形容词后缀",
    analysis: "inter(之间) + medi(中间) + ate = 中间的",
    related: [
      { word: "media", pos: "n.", meaning: "媒体", exam: "高考" },
      { word: "medium", pos: "n./adj.", meaning: "媒介；中等的", exam: "四级" },
      { word: "immediate", pos: "adj.", meaning: "立即的", exam: "四级" },
      { word: "international", pos: "adj.", meaning: "国际的", exam: "高考" }
    ]
  },
  "political": {
    root: "polit/polis",
    rootMeaning: "城邦，政治",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ical",
    suffixMeaning: "形容词后缀",
    analysis: "polit(政治) + ical(形容词) = 政治的",
    related: [
      { word: "politics", pos: "n.", meaning: "政治", exam: "四级" },
      { word: "politician", pos: "n.", meaning: "政治家", exam: "四级" },
      { word: "policy", pos: "n.", meaning: "政策", exam: "四级" },
      { word: "police", pos: "n.", meaning: "警察", exam: "高考" }
    ]
  },
  "registration": {
    root: "reg/rect",
    rootMeaning: "统治，管理",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ation",
    suffixMeaning: "名词后缀",
    analysis: "regist(登记) + ration(名词) = 注册",
    related: [
      { word: "register", pos: "v./n.", meaning: "登记；注册", exam: "四级" },
      { word: "region", pos: "n.", meaning: "地区", exam: "四级" },
      { word: "regular", pos: "adj.", meaning: "规律的", exam: "四级" }
    ]
  },
  "translation": {
    root: "lat/fer",
    rootMeaning: "搬运，传递",
    prefix: "trans-",
    prefixMeaning: "跨越，转移",
    suffix: "-tion",
    suffixMeaning: "名词后缀",
    analysis: "trans(跨越) + lat(搬运) + ion(名词) = 翻译",
    related: [
      { word: "translate", pos: "v.", meaning: "翻译", exam: "高考" },
      { word: "translator", pos: "n.", meaning: "翻译者", exam: "四级" },
      { word: "transfer", pos: "v.", meaning: "转移", exam: "四级" }
    ]
  },
  "underline": {
    root: "line",
    rootMeaning: "线",
    prefix: "under-",
    prefixMeaning: "在…下面",
    suffix: "",
    suffixMeaning: "",
    analysis: "under(下面) + line(线) = 画底线",
    related: [
      { word: "line", pos: "n.", meaning: "线；行", exam: "高考" },
      { word: "online", pos: "adj.", meaning: "在线的", exam: "高考" },
      { word: "outline", pos: "n./v.", meaning: "轮廓；概述", exam: "四级" },
      { word: "understand", pos: "v.", meaning: "理解", exam: "高考" }
    ]
  },
  "vegetarian": {
    root: "veget",
    rootMeaning: "蔬菜，植物",
    prefix: "",
    prefixMeaning: "",
    suffix: "-arian",
    suffixMeaning: "名词后缀，表…的人",
    analysis: "veget(蔬菜) + arian(…的人) = 素食者",
    related: [
      { word: "vegetable", pos: "n.", meaning: "蔬菜", exam: "高考" },
      { word: "vegetation", pos: "n.", meaning: "植被", exam: "六级" }
    ]
  },
  "liquid": {
    root: "liqu",
    rootMeaning: "液体，流动",
    prefix: "",
    prefixMeaning: "",
    suffix: "-id",
    suffixMeaning: "形容词/名词后缀",
    analysis: "liqu(流动) + id = 液体",
    related: [
      { word: "liquor", pos: "n.", meaning: "烈酒", exam: "四级" }
    ]
  },
  "select": {
    root: "lect/leg",
    rootMeaning: "选择，收集",
    prefix: "se-",
    prefixMeaning: "分开",
    suffix: "",
    suffixMeaning: "",
    analysis: "se(分开) + lect(选择) = 挑选",
    related: [
      { word: "selection", pos: "n.", meaning: "选择", exam: "四级" },
      { word: "elect", pos: "v.", meaning: "选举", exam: "四级" },
      { word: "election", pos: "n.", meaning: "选举", exam: "四级" },
      { word: "collect", pos: "v.", meaning: "收集", exam: "高考" },
      { word: "collection", pos: "n.", meaning: "收藏", exam: "四级" }
    ]
  },
  "complaint": {
    root: "plain/plaint",
    rootMeaning: "抱怨，悲叹",
    prefix: "com-",
    prefixMeaning: "加强",
    suffix: "",
    suffixMeaning: "",
    analysis: "com(加强) + plaint(抱怨) = 投诉",
    related: [
      { word: "complain", pos: "v.", meaning: "抱怨", exam: "高考" },
      { word: "explain", pos: "v.", meaning: "解释", exam: "高考" },
      { word: "explanation", pos: "n.", meaning: "解释", exam: "四级" },
      { word: "plain", pos: "adj.", meaning: "朴素的；清楚的", exam: "四级" }
    ]
  },
  "increase": {
    root: "cre/creas",
    rootMeaning: "生长，增加",
    prefix: "in-",
    prefixMeaning: "向内，加强",
    suffix: "",
    suffixMeaning: "",
    analysis: "in(加强) + crease(增长) = 增加",
    related: [
      { word: "decrease", pos: "v./n.", meaning: "减少", exam: "四级" },
      { word: "create", pos: "v.", meaning: "创造", exam: "高考" },
      { word: "creative", pos: "adj.", meaning: "有创造力的", exam: "四级" },
      { word: "creature", pos: "n.", meaning: "生物", exam: "四级" }
    ]
  },
  "recent": {
    root: "rec",
    rootMeaning: "新的，新近",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ent",
    suffixMeaning: "形容词后缀",
    analysis: "rec(新近) + ent(形容词) = 最近的",
    related: [
      { word: "recently", pos: "adv.", meaning: "最近", exam: "高考" }
    ]
  },
  "greeting": {
    root: "greet",
    rootMeaning: "问候",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ing",
    suffixMeaning: "名词后缀",
    analysis: "greet(问候) + ing(名词) = 问候",
    related: [
      { word: "greet", pos: "v.", meaning: "问候", exam: "高考" }
    ]
  },
  "laundry": {
    root: "lav/laund",
    rootMeaning: "洗",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ry",
    suffixMeaning: "名词后缀，表场所",
    analysis: "laund(洗) + ry(场所) = 洗衣店",
    related: [
      { word: "lavatory", pos: "n.", meaning: "厕所", exam: "四级" }
    ]
  },
  "quantity": {
    root: "quant",
    rootMeaning: "多少，数量",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ity",
    suffixMeaning: "名词后缀，表性质",
    analysis: "quant(数量) + ity(名词) = 数量",
    related: [
      { word: "quality", pos: "n.", meaning: "质量", exam: "高考" },
      { word: "quarter", pos: "n.", meaning: "四分之一", exam: "高考" }
    ]
  },
  "signature": {
    root: "sign",
    rootMeaning: "标记，签名",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ature",
    suffixMeaning: "名词后缀",
    analysis: "sign(签名) + ature(名词) = 签名",
    related: [
      { word: "sign", pos: "n./v.", meaning: "标志；签名", exam: "高考" },
      { word: "signal", pos: "n./v.", meaning: "信号", exam: "四级" },
      { word: "significant", pos: "adj.", meaning: "重要的", exam: "四级" },
      { word: "design", pos: "n./v.", meaning: "设计", exam: "高考" },
      { word: "assign", pos: "v.", meaning: "分配", exam: "六级" }
    ]
  },
  "unfit": {
    root: "fit",
    rootMeaning: "适合",
    prefix: "un-",
    prefixMeaning: "不，否定",
    suffix: "",
    suffixMeaning: "",
    analysis: "un(不) + fit(适合) = 不适合的",
    related: [
      { word: "fit", pos: "adj./v.", meaning: "适合的；安装", exam: "高考" },
      { word: "fitness", pos: "n.", meaning: "健康", exam: "四级" },
      { word: "outfit", pos: "n.", meaning: "全套服装", exam: "四级" },
      { word: "benefit", pos: "n./v.", meaning: "利益；受益", exam: "四级" }
    ]
  },
  "double": {
    root: "dupl/doubl",
    rootMeaning: "二，双",
    prefix: "",
    prefixMeaning: "",
    suffix: "",
    suffixMeaning: "",
    analysis: "doubl(双) + e = 两倍的",
    related: [
      { word: "doubt", pos: "n./v.", meaning: "怀疑", exam: "高考" },
      { word: "couple", pos: "n.", meaning: "一对；夫妇", exam: "高考" },
      { word: "duplicate", pos: "v./n.", meaning: "复制", exam: "六级" }
    ]
  },
  "beyond": {
    root: "yond",
    rootMeaning: "那边",
    prefix: "be-",
    prefixMeaning: "在…旁边",
    suffix: "",
    suffixMeaning: "",
    analysis: "be(在) + yond(那边) = 超出",
    related: [
      { word: "beside", pos: "prep.", meaning: "在…旁边", exam: "高考" },
      { word: "behind", pos: "prep.", meaning: "在…后面", exam: "高考" },
      { word: "below", pos: "prep.", meaning: "在…下面", exam: "高考" },
      { word: "beneath", pos: "prep.", meaning: "在…之下", exam: "四级" }
    ]
  },
  "behaviour": {
    root: "hav", rootMeaning: "拥有；持有",
    prefix: "be-", prefixMeaning: "使；加强",
    suffix: "-iour", suffixMeaning: "行为（名词后缀）",
    analysis: "be(加强) + hav(持有) + iour(行为) = 持有的表现方式 → 行为",
    related: [
      { word: "behave", pos: "v.", meaning: "表现；举止", exam: "高考" },
      { word: "misbehave", pos: "v.", meaning: "行为不端", exam: "六级" },
      { word: "behavioral", pos: "adj.", meaning: "行为的", exam: "四级" }
    ]
  },
  "cathedral": {
    root: "cathedra", rootMeaning: "座椅（主教之座）",
    prefix: "", prefixMeaning: "",
    suffix: "-al", suffixMeaning: "与…有关的",
    analysis: "cathedra(主教座) + al(有关的) = 主教座堂",
    related: [
      { word: "category", pos: "n.", meaning: "类别", exam: "四级" },
      { word: "catalog", pos: "n.", meaning: "目录", exam: "四级" }
    ]
  },
  "grateful": {
    root: "grat", rootMeaning: "感谢；高兴",
    prefix: "", prefixMeaning: "",
    suffix: "-ful", suffixMeaning: "充满…的",
    analysis: "grat(感谢) + ful(充满) = 充满感谢的 → 感激的",
    related: [
      { word: "gratitude", pos: "n.", meaning: "感激", exam: "四级" },
      { word: "congratulate", pos: "v.", meaning: "祝贺", exam: "高考" },
      { word: "ungrateful", pos: "adj.", meaning: "忘恩负义的", exam: "六级" }
    ]
  },
  "historical": {
    root: "histor", rootMeaning: "历史",
    prefix: "", prefixMeaning: "",
    suffix: "-ical", suffixMeaning: "与…有关的",
    analysis: "histor(历史) + ical(有关的) = 有关历史的",
    related: [
      { word: "history", pos: "n.", meaning: "历史", exam: "高考" },
      { word: "historian", pos: "n.", meaning: "历史学家", exam: "四级" },
      { word: "historic", pos: "adj.", meaning: "有历史意义的", exam: "四级" },
      { word: "prehistoric", pos: "adj.", meaning: "史前的", exam: "六级" }
    ]
  },
  "relation": {
    root: "relat", rootMeaning: "带回；联系",
    prefix: "re-", prefixMeaning: "回；再",
    suffix: "-ion", suffixMeaning: "行为/状态（名词后缀）",
    analysis: "re(回) + lat(带) + ion(名词) = 带回联系 → 关系",
    related: [
      { word: "relate", pos: "v.", meaning: "联系；叙述", exam: "四级" },
      { word: "relative", pos: "n./adj.", meaning: "亲戚；相对的", exam: "高考" },
      { word: "relationship", pos: "n.", meaning: "关系", exam: "高考" },
      { word: "related", pos: "adj.", meaning: "有关的", exam: "高考" }
    ]
  },
  "silence": {
    root: "sil", rootMeaning: "安静",
    prefix: "", prefixMeaning: "",
    suffix: "-ence", suffixMeaning: "状态（名词后缀）",
    analysis: "sil(安静) + ence(状态) = 安静的状态 → 沉默",
    related: [
      { word: "silent", pos: "adj.", meaning: "沉默的", exam: "高考" },
      { word: "silently", pos: "adv.", meaning: "安静地", exam: "高考" }
    ]
  },
  "silent": {
    root: "sil", rootMeaning: "安静",
    prefix: "", prefixMeaning: "",
    suffix: "-ent", suffixMeaning: "具有…性质的",
    analysis: "sil(安静) + ent(形容词后缀) = 安静的 → 沉默的",
    related: [
      { word: "silence", pos: "n.", meaning: "沉默；寂静", exam: "高考" },
      { word: "silently", pos: "adv.", meaning: "安静地", exam: "高考" }
    ]
  },
  "soundtrack": {
    root: "sound + track", rootMeaning: "声音 + 轨道",
    prefix: "", prefixMeaning: "",
    suffix: "", suffixMeaning: "",
    analysis: "sound(声音) + track(轨道) = 声音轨道 → 配乐",
    related: [
      { word: "sound", pos: "n.", meaning: "声音", exam: "高考" },
      { word: "track", pos: "n.", meaning: "轨道；小路", exam: "高考" },
      { word: "backtrack", pos: "v.", meaning: "原路返回", exam: "六级" }
    ]
  },
  "uninteresting": {
    root: "interest", rootMeaning: "兴趣",
    prefix: "un-", prefixMeaning: "不；否定",
    suffix: "-ing", suffixMeaning: "令人…的",
    analysis: "un(不) + interest(兴趣) + ing(令人…的) = 令人无趣的",
    related: [
      { word: "interesting", pos: "adj.", meaning: "有趣的", exam: "高考" },
      { word: "interested", pos: "adj.", meaning: "感兴趣的", exam: "高考" },
      { word: "interest", pos: "n./v.", meaning: "兴趣；使感兴趣", exam: "高考" }
    ]
  },
  "subtract": {
    root: "tract", rootMeaning: "拉；拖",
    prefix: "sub-", prefixMeaning: "在下面",
    suffix: "", suffixMeaning: "",
    analysis: "sub(在下面) + tract(拉) = 从下面拉走 → 减去",
    related: [
      { word: "attract", pos: "v.", meaning: "吸引", exam: "高考" },
      { word: "extract", pos: "v.", meaning: "提取", exam: "四级" },
      { word: "distract", pos: "v.", meaning: "分散注意力", exam: "四级" },
      { word: "abstract", pos: "adj.", meaning: "抽象的", exam: "四级" }
    ]
  },
  "amount": {
    root: "mount", rootMeaning: "山；上升",
    prefix: "a-", prefixMeaning: "向；到",
    suffix: "", suffixMeaning: "",
    analysis: "a(向) + mount(上升) = 向上累积 → 数量",
    related: [
      { word: "mount", pos: "v.", meaning: "攀登；增加", exam: "四级" },
      { word: "mountain", pos: "n.", meaning: "山", exam: "高考" },
      { word: "surmount", pos: "v.", meaning: "克服", exam: "六级" }
    ]
  },
  "routine": {
    root: "rout", rootMeaning: "路线",
    prefix: "", prefixMeaning: "",
    suffix: "-ine", suffixMeaning: "与…有关的",
    analysis: "rout(路线) + ine(有关的) = 固定路线 → 惯例",
    related: [
      { word: "route", pos: "n.", meaning: "路线", exam: "高考" },
      { word: "router", pos: "n.", meaning: "路由器", exam: "四级" }
    ]
  },
  "reader": {
    root: "read", rootMeaning: "阅读",
    prefix: "", prefixMeaning: "",
    suffix: "-er", suffixMeaning: "做…的人",
    analysis: "read(阅读) + er(做…的人) = 阅读的人 → 读者",
    related: [
      { word: "read", pos: "v.", meaning: "阅读", exam: "高考" },
      { word: "reading", pos: "n.", meaning: "阅读；读物", exam: "高考" },
      { word: "readable", pos: "adj.", meaning: "可读的", exam: "四级" }
    ]
  },
  "rider": {
    root: "ride", rootMeaning: "骑",
    prefix: "", prefixMeaning: "",
    suffix: "-er", suffixMeaning: "做…的人",
    analysis: "ride(骑) + er(做…的人) = 骑行的人 → 骑手",
    related: [
      { word: "ride", pos: "v.", meaning: "骑", exam: "高考" },
      { word: "riding", pos: "n.", meaning: "骑马", exam: "高考" },
      { word: "override", pos: "v.", meaning: "推翻；凌驾", exam: "六级" }
    ]
  },
  "notepaper": {
    root: "note + paper", rootMeaning: "笔记 + 纸",
    prefix: "", prefixMeaning: "",
    suffix: "", suffixMeaning: "",
    analysis: "note(笔记) + paper(纸) = 写笔记的纸 → 信纸",
    related: [
      { word: "note", pos: "n.", meaning: "笔记；便条", exam: "高考" },
      { word: "notebook", pos: "n.", meaning: "笔记本", exam: "高考" },
      { word: "newspaper", pos: "n.", meaning: "报纸", exam: "高考" }
    ]
  },
  "dancing": {
    root: "danc", rootMeaning: "跳舞",
    prefix: "", prefixMeaning: "",
    suffix: "-ing", suffixMeaning: "动作/活动（名词后缀）",
    analysis: "danc(跳舞) + ing(活动) = 跳舞活动 → 舞蹈",
    related: [
      { word: "dance", pos: "v./n.", meaning: "跳舞；舞蹈", exam: "高考" },
      { word: "dancer", pos: "n.", meaning: "舞者", exam: "高考" }
    ]
  },
  "curious": {
    root: "cur", rootMeaning: "关心；注意",
    prefix: "", prefixMeaning: "",
    suffix: "-ious", suffixMeaning: "充满…的",
    analysis: "cur(关心) + ious(充满…的) = 充满关心的 → 好奇的",
    related: [
      { word: "curiosity", pos: "n.", meaning: "好奇心", exam: "四级" },
      { word: "curiously", pos: "adv.", meaning: "好奇地", exam: "四级" },
      { word: "cure", pos: "v./n.", meaning: "治愈", exam: "高考" }
    ]
  },
  "original": {
    root: "origin", rootMeaning: "起源",
    prefix: "", prefixMeaning: "",
    suffix: "-al", suffixMeaning: "与…有关的",
    analysis: "origin(起源) + al(有关的) = 与起源有关的 → 起初的；独创的",
    related: [
      { word: "origin", pos: "n.", meaning: "起源", exam: "四级" },
      { word: "originally", pos: "adv.", meaning: "最初地", exam: "四级" },
      { word: "originate", pos: "v.", meaning: "起源于", exam: "六级" }
    ]
  },
  "positive": {
    root: "posit", rootMeaning: "放置；确定",
    prefix: "", prefixMeaning: "",
    suffix: "-ive", suffixMeaning: "有…性质的",
    analysis: "posit(确定) + ive(有…性质的) = 确定的 → 积极的",
    related: [
      { word: "position", pos: "n.", meaning: "位置", exam: "高考" },
      { word: "negative", pos: "adj.", meaning: "消极的", exam: "高考" },
      { word: "deposit", pos: "n./v.", meaning: "存款；沉积", exam: "四级" }
    ]
  },
  "election": {
    root: "lect", rootMeaning: "选择",
    prefix: "e-", prefixMeaning: "出",
    suffix: "-ion", suffixMeaning: "行为/状态",
    analysis: "e(出) + lect(选择) + ion(行为) = 选出 → 选举",
    related: [
      { word: "elect", pos: "v.", meaning: "选举", exam: "四级" },
      { word: "select", pos: "v.", meaning: "挑选", exam: "高考" },
      { word: "collect", pos: "v.", meaning: "收集", exam: "高考" }
    ]
  },
  "ending": {
    root: "end", rootMeaning: "结束",
    prefix: "", prefixMeaning: "",
    suffix: "-ing", suffixMeaning: "动作/结果",
    analysis: "end(结束) + ing(结果) = 结束的结果 → 结尾",
    related: [
      { word: "end", pos: "n./v.", meaning: "结束", exam: "高考" },
      { word: "endless", pos: "adj.", meaning: "无尽的", exam: "高考" },
      { word: "endlessly", pos: "adv.", meaning: "无止境地", exam: "四级" }
    ]
  },
  "religion": {
    root: "lig", rootMeaning: "绑；联系",
    prefix: "re-", prefixMeaning: "再；反复",
    suffix: "-ion", suffixMeaning: "行为/状态",
    analysis: "re(反复) + lig(绑) + ion(状态) = 反复联系（神灵）→ 宗教",
    related: [
      { word: "religious", pos: "adj.", meaning: "宗教的", exam: "高考" },
      { word: "obligation", pos: "n.", meaning: "义务", exam: "四级" },
      { word: "league", pos: "n.", meaning: "联盟", exam: "四级" }
    ]
  },
  "shocked": {
    root: "shock", rootMeaning: "震动",
    prefix: "", prefixMeaning: "",
    suffix: "-ed", suffixMeaning: "感到…的",
    analysis: "shock(震动) + ed(感到…的) = 感到震动的 → 震惊的",
    related: [
      { word: "shock", pos: "n./v.", meaning: "震惊", exam: "高考" },
      { word: "shocking", pos: "adj.", meaning: "令人震惊的", exam: "高考" }
    ]
  },
  "surprising": {
    root: "surpris", rootMeaning: "出其不意",
    prefix: "sur-", prefixMeaning: "超过；在上",
    suffix: "-ing", suffixMeaning: "令人…的",
    analysis: "sur(超过) + pris(抓住) + ing(令人…的) = 令人措手不及的 → 令人吃惊的",
    related: [
      { word: "surprise", pos: "n./v.", meaning: "惊喜；使惊讶", exam: "高考" },
      { word: "surprised", pos: "adj.", meaning: "感到惊讶的", exam: "高考" },
      { word: "surprisingly", pos: "adv.", meaning: "令人惊讶地", exam: "四级" }
    ]
  },
  "anniversary": {
    root: "ann/annu", rootMeaning: "年",
    prefix: "", prefixMeaning: "",
    suffix: "-ary", suffixMeaning: "与…有关的",
    analysis: "anni(年) + vers(转) + ary(有关的) = 每年转回来 → 周年纪念日",
    related: [
      { word: "annual", pos: "adj.", meaning: "每年的", exam: "四级" },
      { word: "anniversary", pos: "n.", meaning: "周年纪念日", exam: "四级" }
    ]
  },
  "attraction": {
    root: "tract", rootMeaning: "拉；拖",
    prefix: "at-", prefixMeaning: "向；朝",
    suffix: "-ion", suffixMeaning: "行为/状态",
    analysis: "at(向) + tract(拉) + ion(行为) = 向…拉 → 吸引",
    related: [
      { word: "attract", pos: "v.", meaning: "吸引", exam: "高考" },
      { word: "attractive", pos: "adj.", meaning: "有吸引力的", exam: "高考" },
      { word: "distract", pos: "v.", meaning: "分散注意力", exam: "四级" }
    ]
  },
  "comment": {
    root: "ment", rootMeaning: "思考",
    prefix: "com-", prefixMeaning: "共同",
    suffix: "", suffixMeaning: "",
    analysis: "com(共同) + ment(思考) = 共同思考 → 评论",
    related: [
      { word: "commentary", pos: "n.", meaning: "评论；解说", exam: "六级" },
      { word: "mental", pos: "adj.", meaning: "精神的", exam: "四级" },
      { word: "mention", pos: "v.", meaning: "提到", exam: "高考" }
    ]
  },
  "correction": {
    root: "rect", rootMeaning: "正；直",
    prefix: "cor-", prefixMeaning: "共同；加强",
    suffix: "-ion", suffixMeaning: "行为/状态",
    analysis: "cor(加强) + rect(正) + ion(行为) = 使之正确 → 纠正",
    related: [
      { word: "correct", pos: "adj./v.", meaning: "正确的；纠正", exam: "高考" },
      { word: "direct", pos: "adj./v.", meaning: "直接的；指导", exam: "高考" },
      { word: "incorrect", pos: "adj.", meaning: "不正确的", exam: "四级" }
    ]
  },
  "convenient": {
    root: "ven", rootMeaning: "来",
    prefix: "con-", prefixMeaning: "共同；一起",
    suffix: "-ient", suffixMeaning: "具有…性质的",
    analysis: "con(一起) + ven(来) + ient(性质) = 一起来到的 → 方便的",
    related: [
      { word: "convenience", pos: "n.", meaning: "便利", exam: "四级" },
      { word: "inconvenient", pos: "adj.", meaning: "不方便的", exam: "四级" },
      { word: "convention", pos: "n.", meaning: "惯例；大会", exam: "四级" }
    ]
  },
  "elderly": {
    root: "eld", rootMeaning: "老",
    prefix: "", prefixMeaning: "",
    suffix: "-erly", suffixMeaning: "具有…特征的",
    analysis: "eld(老) + erly(特征) = 有老的特征 → 上年纪的",
    related: [
      { word: "elder", pos: "adj./n.", meaning: "年长的；长辈", exam: "高考" },
      { word: "eldest", pos: "adj.", meaning: "最年长的", exam: "高考" },
      { word: "old", pos: "adj.", meaning: "老的", exam: "高考" }
    ]
  },
  "typically": {
    root: "typ", rootMeaning: "类型；模式",
    prefix: "", prefixMeaning: "",
    suffix: "-ically", suffixMeaning: "以…方式地",
    analysis: "typ(类型) + ical(有关的) + ly(地) = 以典型方式地 → 通常",
    related: [
      { word: "typical", pos: "adj.", meaning: "典型的", exam: "四级" },
      { word: "type", pos: "n.", meaning: "类型", exam: "高考" },
      { word: "atypical", pos: "adj.", meaning: "非典型的", exam: "六级" }
    ]
  },
  "background": {
    root: "back + ground", rootMeaning: "后面 + 地面",
    prefix: "", prefixMeaning: "",
    suffix: "", suffixMeaning: "",
    analysis: "back(后面) + ground(地面) = 后面的场地 → 背景",
    related: [
      { word: "foreground", pos: "n.", meaning: "前景", exam: "六级" },
      { word: "underground", pos: "adj./n.", meaning: "地下的", exam: "高考" },
      { word: "playground", pos: "n.", meaning: "操场", exam: "高考" }
    ]
  },
  "cardboard": {
    root: "card + board", rootMeaning: "卡片 + 板",
    prefix: "", prefixMeaning: "",
    suffix: "", suffixMeaning: "",
    analysis: "card(卡片) + board(板) = 卡片板 → 硬纸板",
    related: [
      { word: "board", pos: "n.", meaning: "板；董事会", exam: "高考" },
      { word: "blackboard", pos: "n.", meaning: "黑板", exam: "高考" },
      { word: "skateboard", pos: "n.", meaning: "滑板", exam: "高考" }
    ]
  },
  "arrangement": {
    root: "rang", rootMeaning: "排列",
    prefix: "ar-", prefixMeaning: "加强",
    suffix: "-ment", suffixMeaning: "行为/结果",
    analysis: "ar(加强) + range(排列) + ment(结果) = 排列的结果 → 安排",
    related: [
      { word: "arrange", pos: "v.", meaning: "安排", exam: "高考" },
      { word: "range", pos: "n.", meaning: "范围", exam: "四级" },
      { word: "rearrange", pos: "v.", meaning: "重新安排", exam: "四级" }
    ]
  },
  "initial": {
    root: "init", rootMeaning: "开始",
    prefix: "", prefixMeaning: "",
    suffix: "-ial", suffixMeaning: "与…有关的",
    analysis: "init(开始) + ial(有关的) = 与开始有关的 → 最初的；首字母",
    related: [
      { word: "initiate", pos: "v.", meaning: "发起；开始", exam: "四级" },
      { word: "initially", pos: "adv.", meaning: "最初地", exam: "四级" },
      { word: "initiative", pos: "n.", meaning: "主动性", exam: "六级" }
    ]
  },
  "eastern": {
    root: "east", rootMeaning: "东方",
    prefix: "", prefixMeaning: "",
    suffix: "-ern", suffixMeaning: "方向的",
    analysis: "east(东方) + ern(方向的) = 东方的 → 东部的",
    related: [
      { word: "east", pos: "n./adj.", meaning: "东方", exam: "高考" },
      { word: "western", pos: "adj.", meaning: "西部的", exam: "高考" },
      { word: "northern", pos: "adj.", meaning: "北部的", exam: "高考" },
      { word: "southern", pos: "adj.", meaning: "南部的", exam: "高考" }
    ]
  },
  "valuable": {
    root: "valu", rootMeaning: "价值",
    prefix: "", prefixMeaning: "",
    suffix: "-able", suffixMeaning: "能…的",
    analysis: "valu(价值) + able(能…的) = 有价值的 → 宝贵的",
    related: [
      { word: "value", pos: "n./v.", meaning: "价值；重视", exam: "高考" },
      { word: "invaluable", pos: "adj.", meaning: "无价的", exam: "六级" },
      { word: "evaluate", pos: "v.", meaning: "评估", exam: "四级" }
    ]
  },
  "version": {
    root: "vers", rootMeaning: "转",
    prefix: "", prefixMeaning: "",
    suffix: "-ion", suffixMeaning: "行为/状态",
    analysis: "vers(转) + ion(状态) = 转变的状态 → 版本",
    related: [
      { word: "reverse", pos: "v./adj.", meaning: "颠倒；相反的", exam: "四级" },
      { word: "universe", pos: "n.", meaning: "宇宙", exam: "高考" },
      { word: "conversation", pos: "n.", meaning: "对话", exam: "高考" }
    ]
  },
  "unwell": {
    root: "well", rootMeaning: "好",
    prefix: "un-", prefixMeaning: "不；否定",
    suffix: "", suffixMeaning: "",
    analysis: "un(不) + well(好) = 不好的 → 不舒服的",
    related: [
      { word: "well", pos: "adj./adv.", meaning: "好的；好地", exam: "高考" },
      { word: "unfit", pos: "adj.", meaning: "不适合的", exam: "四级" },
      { word: "unhealthy", pos: "adj.", meaning: "不健康的", exam: "高考" }
    ]
  },
  "introduction": {
    root: "duc/duct", rootMeaning: "引导",
    prefix: "intro-", prefixMeaning: "向内",
    suffix: "-ion", suffixMeaning: "行为/状态",
    analysis: "intro(向内) + duc(引导) + tion(行为) = 引导进入 → 介绍",
    related: [
      { word: "introduce", pos: "v.", meaning: "介绍", exam: "高考" },
      { word: "produce", pos: "v.", meaning: "生产", exam: "高考" },
      { word: "reduce", pos: "v.", meaning: "减少", exam: "高考" },
      { word: "conduct", pos: "v./n.", meaning: "指挥；行为", exam: "四级" }
    ]
  },
  "perfectly": {
    root: "fect", rootMeaning: "做",
    prefix: "per-", prefixMeaning: "完全",
    suffix: "-ly", suffixMeaning: "以…方式地",
    analysis: "per(完全) + fect(做) + ly(地) = 完全做好地 → 完美地",
    related: [
      { word: "perfect", pos: "adj.", meaning: "完美的", exam: "高考" },
      { word: "imperfect", pos: "adj.", meaning: "不完美的", exam: "四级" },
      { word: "effect", pos: "n.", meaning: "效果", exam: "高考" }
    ]
  },
  "slightly": {
    root: "slight", rootMeaning: "轻微的",
    prefix: "", prefixMeaning: "",
    suffix: "-ly", suffixMeaning: "以…方式地",
    analysis: "slight(轻微的) + ly(地) = 轻微地",
    related: [
      { word: "slight", pos: "adj.", meaning: "轻微的", exam: "四级" },
      { word: "lightly", pos: "adv.", meaning: "轻轻地", exam: "高考" }
    ]
  },
  "babysitter": {
    root: "baby + sit", rootMeaning: "婴儿 + 坐",
    prefix: "", prefixMeaning: "",
    suffix: "-er", suffixMeaning: "做…的人",
    analysis: "baby(婴儿) + sit(坐/照看) + ter(人) = 照看婴儿的人 → 保姆",
    related: [
      { word: "babysit", pos: "v.", meaning: "临时照看", exam: "四级" },
      { word: "sitter", pos: "n.", meaning: "看护人", exam: "四级" }
    ]
  },
  "housework": {
    root: "house + work", rootMeaning: "房子 + 工作",
    prefix: "", prefixMeaning: "",
    suffix: "", suffixMeaning: "",
    analysis: "house(房子) + work(工作) = 房子里的工作 → 家务",
    related: [
      { word: "homework", pos: "n.", meaning: "家庭作业", exam: "高考" },
      { word: "teamwork", pos: "n.", meaning: "团队合作", exam: "高考" },
      { word: "framework", pos: "n.", meaning: "框架", exam: "四级" }
    ]
  },
  "politician": {
    root: "polit", rootMeaning: "城邦；政治",
    prefix: "", prefixMeaning: "",
    suffix: "-ician", suffixMeaning: "从事…的人",
    analysis: "polit(政治) + ician(从事…的人) = 从事政治的人 → 政治家",
    related: [
      { word: "politics", pos: "n.", meaning: "政治", exam: "高考" },
      { word: "political", pos: "adj.", meaning: "政治的", exam: "四级" },
      { word: "policy", pos: "n.", meaning: "政策", exam: "四级" }
    ]
  },
  "unemployment": {
    root: "employ", rootMeaning: "雇用",
    prefix: "un-", prefixMeaning: "不；否定",
    suffix: "-ment", suffixMeaning: "行为/状态",
    analysis: "un(不) + employ(雇用) + ment(状态) = 未被雇用的状态 → 失业",
    related: [
      { word: "employ", pos: "v.", meaning: "雇用", exam: "高考" },
      { word: "employer", pos: "n.", meaning: "雇主", exam: "四级" },
      { word: "employee", pos: "n.", meaning: "雇员", exam: "四级" },
      { word: "employment", pos: "n.", meaning: "就业", exam: "四级" }
    ]
  },
  "transfer": {
    root: "fer", rootMeaning: "带；搬运",
    prefix: "trans-", prefixMeaning: "跨越；转",
    suffix: "", suffixMeaning: "",
    analysis: "trans(跨越) + fer(搬运) = 跨越搬运 → 转移",
    related: [
      { word: "differ", pos: "v.", meaning: "不同", exam: "四级" },
      { word: "offer", pos: "v.", meaning: "提供", exam: "高考" },
      { word: "prefer", pos: "v.", meaning: "更喜欢", exam: "高考" },
      { word: "refer", pos: "v.", meaning: "参考", exam: "四级" }
    ]
  },
  "architecture": {
    root: "arch + tect", rootMeaning: "首要 + 建造",
    prefix: "", prefixMeaning: "",
    suffix: "-ure", suffixMeaning: "行为/结果",
    analysis: "archi(首要) + tect(建造) + ure(结果) = 首要的建造 → 建筑学",
    related: [
      { word: "architect", pos: "n.", meaning: "建筑师", exam: "四级" },
      { word: "architectural", pos: "adj.", meaning: "建筑的", exam: "六级" }
    ]
  },
  "astronaut": {
    root: "astro + naut", rootMeaning: "星 + 航行",
    prefix: "", prefixMeaning: "",
    suffix: "", suffixMeaning: "",
    analysis: "astro(星) + naut(航行) = 星际航行者 → 宇航员",
    related: [
      { word: "astronomy", pos: "n.", meaning: "天文学", exam: "四级" },
      { word: "astronomer", pos: "n.", meaning: "天文学家", exam: "四级" }
    ]
  },
  "honestly": {
    root: "honest", rootMeaning: "诚实的",
    prefix: "", prefixMeaning: "",
    suffix: "-ly", suffixMeaning: "以…方式地",
    analysis: "honest(诚实的) + ly(地) = 诚实地",
    related: [
      { word: "honest", pos: "adj.", meaning: "诚实的", exam: "高考" },
      { word: "honesty", pos: "n.", meaning: "诚实", exam: "高考" },
      { word: "dishonest", pos: "adj.", meaning: "不诚实的", exam: "四级" }
    ]
  },
  "romantic": {
    root: "roman",
    rootMeaning: "罗马的，浪漫故事",
    prefix: "",
    prefixMeaning: "",
    suffix: "-tic",
    suffixMeaning: "具有…性质的",
    analysis: "roman（浪漫故事）+ -tic（形容词后缀）→ 浪漫的",
    related: [
      { word: "romance", pos: "n.", meaning: "浪漫故事；恋爱关系", exam: "四级" },
      { word: "romantically", pos: "adv.", meaning: "浪漫地", exam: "六级" },
      { word: "romanticize", pos: "v.", meaning: "使浪漫化", exam: "六级" }
    ]
  },
  "addition": {
    root: "add",
    rootMeaning: "加，增加",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ition",
    suffixMeaning: "表示行为/状态",
    analysis: "add（加）+ -ition（名词后缀）→ 添加；附加物",
    related: [
      { word: "add", pos: "v.", meaning: "增加；添加", exam: "高考" },
      { word: "additional", pos: "adj.", meaning: "额外的", exam: "四级" },
      { word: "additionally", pos: "adv.", meaning: "此外", exam: "四级" }
    ]
  },
  "divide": {
    root: "div",
    rootMeaning: "分开",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ide",
    suffixMeaning: "动词后缀",
    analysis: "div（分开）+ -ide → 分开；划分",
    related: [
      { word: "division", pos: "n.", meaning: "分开；部门", exam: "四级" },
      { word: "dividend", pos: "n.", meaning: "红利；被除数", exam: "六级" },
      { word: "individual", pos: "adj./n.", meaning: "个人的；个人", exam: "四级" }
    ]
  },
  "permission": {
    root: "miss/mit",
    rootMeaning: "送，放",
    prefix: "per-",
    prefixMeaning: "完全，贯穿",
    suffix: "-ion",
    suffixMeaning: "表示行为/状态",
    analysis: "per-（完全）+ miss（放）+ -ion（名词后缀）→ 完全放行 → 许可",
    related: [
      { word: "permit", pos: "v./n.", meaning: "允许；许可证", exam: "四级" },
      { word: "permissible", pos: "adj.", meaning: "可允许的", exam: "六级" },
      { word: "mission", pos: "n.", meaning: "使命；任务", exam: "四级" }
    ]
  },
  "permit": {
    root: "mit",
    rootMeaning: "送，放",
    prefix: "per-",
    prefixMeaning: "完全，贯穿",
    suffix: "",
    suffixMeaning: "",
    analysis: "per-（完全）+ mit（放）→ 完全放行 → 允许",
    related: [
      { word: "permission", pos: "n.", meaning: "许可；允许", exam: "四级" },
      { word: "submit", pos: "v.", meaning: "提交；屈服", exam: "四级" },
      { word: "admit", pos: "v.", meaning: "承认；准许进入", exam: "四级" }
    ]
  },
  "separate": {
    root: "par",
    rootMeaning: "准备，分开",
    prefix: "se-",
    prefixMeaning: "分离",
    suffix: "-ate",
    suffixMeaning: "动词/形容词后缀",
    analysis: "se-（分离）+ par（分开）+ -ate → 使分开",
    related: [
      { word: "separation", pos: "n.", meaning: "分离；分开", exam: "四级" },
      { word: "separately", pos: "adv.", meaning: "分别地", exam: "四级" },
      { word: "prepare", pos: "v.", meaning: "准备", exam: "高考" }
    ]
  },
  "sincerely": {
    root: "sincer",
    rootMeaning: "真诚的",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ly",
    suffixMeaning: "副词后缀",
    analysis: "sincere（真诚的）+ -ly（副词后缀）→ 真诚地",
    related: [
      { word: "sincere", pos: "adj.", meaning: "真诚的", exam: "四级" },
      { word: "sincerity", pos: "n.", meaning: "真诚", exam: "六级" },
      { word: "insincere", pos: "adj.", meaning: "不真诚的", exam: "六级" }
    ]
  },
  "sociable": {
    root: "soci",
    rootMeaning: "社会，同伴",
    prefix: "",
    prefixMeaning: "",
    suffix: "-able",
    suffixMeaning: "能…的",
    analysis: "soci（社会）+ -able（能…的）→ 善于社交的",
    related: [
      { word: "social", pos: "adj.", meaning: "社会的；社交的", exam: "高考" },
      { word: "society", pos: "n.", meaning: "社会", exam: "高考" },
      { word: "socialize", pos: "v.", meaning: "社交；交际", exam: "四级" }
    ]
  },
  "stressful": {
    root: "stress",
    rootMeaning: "压力",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ful",
    suffixMeaning: "充满…的",
    analysis: "stress（压力）+ -ful（充满…的）→ 有压力的",
    related: [
      { word: "stress", pos: "n./v.", meaning: "压力；强调", exam: "高考" },
      { word: "stressed", pos: "adj.", meaning: "焦虑的", exam: "高考" },
      { word: "distress", pos: "n.", meaning: "痛苦；忧虑", exam: "四级" }
    ]
  },
  "sunbathe": {
    root: "bath",
    rootMeaning: "沐浴",
    prefix: "sun-",
    prefixMeaning: "太阳",
    suffix: "-e",
    suffixMeaning: "",
    analysis: "sun（太阳）+ bathe（沐浴）→ 日光浴",
    related: [
      { word: "bathe", pos: "v.", meaning: "沐浴；洗澡", exam: "高考" },
      { word: "sunshine", pos: "n.", meaning: "阳光", exam: "高考" },
      { word: "sunburn", pos: "n.", meaning: "晒伤", exam: "四级" }
    ]
  },
  "presenter": {
    root: "present",
    rootMeaning: "呈现，展示",
    prefix: "",
    prefixMeaning: "",
    suffix: "-er",
    suffixMeaning: "做…的人",
    analysis: "present（呈现）+ -er（人）→ 主持人；展示者",
    related: [
      { word: "present", pos: "v./n.", meaning: "呈现；礼物", exam: "高考" },
      { word: "presentation", pos: "n.", meaning: "展示；演讲", exam: "四级" },
      { word: "represent", pos: "v.", meaning: "代表", exam: "四级" }
    ]
  },
  "youth": {
    root: "youth",
    rootMeaning: "年轻",
    prefix: "",
    prefixMeaning: "",
    suffix: "",
    suffixMeaning: "",
    analysis: "youth 源自古英语 geoguþ（年轻），与 young 同源",
    related: [
      { word: "young", pos: "adj.", meaning: "年轻的", exam: "高考" },
      { word: "youthful", pos: "adj.", meaning: "年轻的；朝气蓬勃的", exam: "四级" },
      { word: "youngster", pos: "n.", meaning: "年轻人", exam: "四级" }
    ]
  },
  "announcement": {
    root: "nounce/nunci",
    rootMeaning: "报告，宣布",
    prefix: "an-",
    prefixMeaning: "向，对",
    suffix: "-ment",
    suffixMeaning: "名词后缀，表行为/结果",
    analysis: "an-（向）+ nounce（宣布）+ -ment（名词后缀）→ 公告",
    related: [
      { word: "announce", pos: "v.", meaning: "宣布；宣告", exam: "高考" },
      { word: "announcer", pos: "n.", meaning: "播音员", exam: "四级" },
      { word: "pronounce", pos: "v.", meaning: "发音；宣布", exam: "四级" }
    ]
  },
  "currency": {
    root: "curr",
    rootMeaning: "跑，流通",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ency",
    suffixMeaning: "表状态/性质",
    analysis: "curr（流通）+ -ency（名词后缀）→ 流通物 → 货币",
    related: [
      { word: "current", pos: "adj./n.", meaning: "当前的；水流", exam: "四级" },
      { word: "occur", pos: "v.", meaning: "发生", exam: "四级" },
      { word: "curriculum", pos: "n.", meaning: "课程", exam: "四级" }
    ]
  },
  "depart": {
    root: "part",
    rootMeaning: "部分，分开",
    prefix: "de-",
    prefixMeaning: "离开，分离",
    suffix: "",
    suffixMeaning: "",
    analysis: "de-（离开）+ part（分开）→ 离开；启程",
    related: [
      { word: "departure", pos: "n.", meaning: "离开；出发", exam: "四级" },
      { word: "department", pos: "n.", meaning: "部门", exam: "高考" },
      { word: "apart", pos: "adv.", meaning: "分开地", exam: "四级" }
    ]
  },
  "immigration": {
    root: "migr",
    rootMeaning: "迁移",
    prefix: "im-",
    prefixMeaning: "进入",
    suffix: "-ation",
    suffixMeaning: "表行为/状态",
    analysis: "im-（进入）+ migr（迁移）+ -ation（名词后缀）→ 移入 → 移民",
    related: [
      { word: "immigrant", pos: "n.", meaning: "移民", exam: "四级" },
      { word: "emigrate", pos: "v.", meaning: "移居国外", exam: "六级" },
      { word: "migrate", pos: "v.", meaning: "迁移", exam: "四级" }
    ]
  },
  "reservation": {
    root: "serv",
    rootMeaning: "保持，保留",
    prefix: "re-",
    prefixMeaning: "再，回",
    suffix: "-ation",
    suffixMeaning: "表行为/状态",
    analysis: "re-（再）+ serv（保留）+ -ation（名词后缀）→ 预留 → 预订",
    related: [
      { word: "reserve", pos: "v./n.", meaning: "预订；保留", exam: "四级" },
      { word: "preserve", pos: "v.", meaning: "保存；保护", exam: "四级" },
      { word: "conserve", pos: "v.", meaning: "保存；节约", exam: "六级" }
    ]
  },
  "monument": {
    root: "mon",
    rootMeaning: "提醒，警告",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ment",
    suffixMeaning: "名词后缀",
    analysis: "mon（提醒）+ u + -ment（名词后缀）→ 提醒人们的东西 → 纪念碑",
    related: [
      { word: "monumental", pos: "adj.", meaning: "纪念碑的；巨大的", exam: "六级" },
      { word: "monitor", pos: "n./v.", meaning: "监视器；监控", exam: "四级" },
      { word: "remind", pos: "v.", meaning: "提醒", exam: "高考" }
    ]
  },
  "enquire": {
    root: "quir/quest",
    rootMeaning: "寻求，询问",
    prefix: "en-",
    prefixMeaning: "使，进入",
    suffix: "",
    suffixMeaning: "",
    analysis: "en-（进入）+ quire（询问）→ 询问；打听",
    related: [
      { word: "enquiry", pos: "n.", meaning: "询问；调查", exam: "四级" },
      { word: "require", pos: "v.", meaning: "需要；要求", exam: "高考" },
      { word: "acquire", pos: "v.", meaning: "获得", exam: "四级" }
    ]
  },
  "enquiry": {
    root: "quir/quest",
    rootMeaning: "寻求，询问",
    prefix: "en-",
    prefixMeaning: "使，进入",
    suffix: "-y",
    suffixMeaning: "名词后缀",
    analysis: "en-（进入）+ quir（询问）+ -y（名词后缀）→ 询问；调查",
    related: [
      { word: "enquire", pos: "v.", meaning: "询问", exam: "四级" },
      { word: "inquiry", pos: "n.", meaning: "调查；询问", exam: "四级" },
      { word: "requirement", pos: "n.", meaning: "要求；需求", exam: "四级" }
    ]
  },
  "agency": {
    root: "ag/act",
    rootMeaning: "做，行动",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ency",
    suffixMeaning: "表状态/机构",
    analysis: "ag（做）+ -ency（机构后缀）→ 代理机构",
    related: [
      { word: "agent", pos: "n.", meaning: "代理人", exam: "四级" },
      { word: "agenda", pos: "n.", meaning: "议程", exam: "四级" },
      { word: "action", pos: "n.", meaning: "行动", exam: "高考" }
    ]
  },
  "criminal": {
    root: "crim",
    rootMeaning: "罪，控告",
    prefix: "",
    prefixMeaning: "",
    suffix: "-inal",
    suffixMeaning: "形容词后缀",
    analysis: "crim（罪）+ -inal（形容词后缀）→ 犯罪的",
    related: [
      { word: "crime", pos: "n.", meaning: "犯罪；罪行", exam: "高考" },
      { word: "criminology", pos: "n.", meaning: "犯罪学", exam: "六级" },
      { word: "discriminate", pos: "v.", meaning: "歧视；区分", exam: "四级" }
    ]
  },
  "environment": {
    root: "viron",
    rootMeaning: "周围",
    prefix: "en-",
    prefixMeaning: "使，在…中",
    suffix: "-ment",
    suffixMeaning: "名词后缀",
    analysis: "en-（在…中）+ viron（周围）+ -ment（名词后缀）→ 周围的事物 → 环境",
    related: [
      { word: "environmental", pos: "adj.", meaning: "环境的", exam: "四级" },
      { word: "environmentalist", pos: "n.", meaning: "环保主义者", exam: "四级" },
      { word: "environ", pos: "v.", meaning: "围绕", exam: "六级" }
    ]
  },
  "government": {
    root: "govern",
    rootMeaning: "统治，管理",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ment",
    suffixMeaning: "名词后缀",
    analysis: "govern（统治）+ -ment（名词后缀）→ 政府",
    related: [
      { word: "govern", pos: "v.", meaning: "统治；管理", exam: "四级" },
      { word: "governor", pos: "n.", meaning: "州长；总督", exam: "四级" },
      { word: "governance", pos: "n.", meaning: "治理；管理", exam: "六级" }
    ]
  },
  "ambition": {
    root: "ambi/it",
    rootMeaning: "走，行走",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ion",
    suffixMeaning: "名词后缀",
    analysis: "ambit（走动，四处游说）+ -ion（名词后缀）→ 到处奔走争取 → 雄心",
    related: [
      { word: "ambitious", pos: "adj.", meaning: "有雄心的", exam: "四级" },
      { word: "ambitiously", pos: "adv.", meaning: "雄心勃勃地", exam: "六级" }
    ]
  },
  "northern": {
    root: "north",
    rootMeaning: "北方",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ern",
    suffixMeaning: "方向形容词后缀",
    analysis: "north（北方）+ -ern（方向后缀）→ 北方的",
    related: [
      { word: "north", pos: "n./adj.", meaning: "北方；北方的", exam: "高考" },
      { word: "northeast", pos: "n./adj.", meaning: "东北", exam: "四级" },
      { word: "northwest", pos: "n./adj.", meaning: "西北", exam: "四级" }
    ]
  },
  "southern": {
    root: "south",
    rootMeaning: "南方",
    prefix: "",
    prefixMeaning: "",
    suffix: "-ern",
    suffixMeaning: "方向形容词后缀",
    analysis: "south（南方）+ -ern（方向后缀）→ 南方的",
    related: [
      { word: "south", pos: "n./adj.", meaning: "南方；南方的", exam: "高考" },
      { word: "southeast", pos: "n./adj.", meaning: "东南", exam: "四级" },
      { word: "southwest", pos: "n./adj.", meaning: "西南", exam: "四级" }
    ]
  }
};
