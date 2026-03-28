const WORD_PHRASES = {
  "wedding": [
    { phrase: "wedding ceremony", meaning: "婚礼仪式", example: "The wedding ceremony was held in a church." },
    { phrase: "wedding dress", meaning: "婚纱", example: "She looked beautiful in her wedding dress." },
    { phrase: "wedding ring", meaning: "结婚戒指", example: "He put the wedding ring on her finger." },
    { phrase: "wedding anniversary", meaning: "结婚纪念日", example: "They celebrated their wedding anniversary." }
  ],
  "antique": [
    { phrase: "antique shop", meaning: "古董店", example: "We found a beautiful vase in an antique shop." },
    { phrase: "antique furniture", meaning: "古董家具", example: "The room was filled with antique furniture." }
  ],
  "vase": [
    { phrase: "flower vase", meaning: "花瓶", example: "She put the roses in a flower vase." },
    { phrase: "a vase of flowers", meaning: "一瓶花", example: "There was a vase of flowers on the table." }
  ],
  "unusual": [
    { phrase: "it is unusual for sb. to do", meaning: "某人做某事不寻常", example: "It is unusual for him to be late." },
    { phrase: "unusual experience", meaning: "不寻常的经历", example: "It was an unusual experience for all of us." },
    { phrase: "nothing unusual", meaning: "没什么不寻常的", example: "There was nothing unusual about his behavior." }
  ],
  "marriage": [
    { phrase: "by marriage", meaning: "通过婚姻关系", example: "They are related by marriage." },
    { phrase: "a happy marriage", meaning: "幸福的婚姻", example: "They have a very happy marriage." },
    { phrase: "marriage certificate", meaning: "结婚证", example: "You need a marriage certificate to apply." }
  ],
  "ceremony": [
    { phrase: "opening ceremony", meaning: "开幕式", example: "The opening ceremony was spectacular." },
    { phrase: "closing ceremony", meaning: "闭幕式", example: "Athletes gathered for the closing ceremony." },
    { phrase: "award ceremony", meaning: "颁奖典礼", example: "She attended the award ceremony last night." },
    { phrase: "graduation ceremony", meaning: "毕业典礼", example: "Parents came to the graduation ceremony." }
  ],
  "childhood": [
    { phrase: "in one's childhood", meaning: "在某人童年时", example: "In my childhood, I lived in a small village." },
    { phrase: "childhood friend", meaning: "儿时好友", example: "He is my childhood friend." },
    { phrase: "childhood memory", meaning: "童年记忆", example: "It is one of my happiest childhood memories." }
  ],
  "honeymoon": [
    { phrase: "go on honeymoon", meaning: "去度蜜月", example: "They went on honeymoon to Paris." },
    { phrase: "honeymoon period", meaning: "蜜月期（比喻初期）", example: "The honeymoon period of the new job is over." }
  ],
  "occasion": [
    { phrase: "on occasion", meaning: "偶尔", example: "I visit my grandparents on occasion." },
    { phrase: "on this/that occasion", meaning: "在这/那个场合", example: "On this occasion, I'd like to thank everyone." },
    { phrase: "a special occasion", meaning: "特殊场合", example: "We only eat out on special occasions." },
    { phrase: "rise to the occasion", meaning: "应对挑战", example: "She rose to the occasion and gave a great speech." }
  ],
  "neither": [
    { phrase: "neither...nor...", meaning: "既不…也不…", example: "Neither he nor I was invited." },
    { phrase: "neither of", meaning: "两者都不", example: "Neither of them knew the answer." },
    { phrase: "me neither", meaning: "我也不", example: "— I don't like it. — Me neither." }
  ],
  "cosy": [
    { phrase: "a cosy room", meaning: "温馨的房间", example: "We sat in a cosy room by the fire." },
    { phrase: "cosy atmosphere", meaning: "温馨的氛围", example: "The restaurant has a cosy atmosphere." }
  ],
  "casual": [
    { phrase: "casual clothes", meaning: "休闲服装", example: "You can wear casual clothes to the party." },
    { phrase: "casual conversation", meaning: "随意的交谈", example: "We had a casual conversation over coffee." },
    { phrase: "casual worker", meaning: "临时工", example: "The company hired some casual workers." }
  ],
  "meanwhile": [
    { phrase: "in the meanwhile", meaning: "在此期间", example: "The bus won't come for an hour. In the meanwhile, let's walk." },
    { phrase: "meanwhile, ...", meaning: "与此同时，…", example: "She was cooking. Meanwhile, he set the table." }
  ],
  "surround": [
    { phrase: "be surrounded by/with", meaning: "被…包围", example: "The house is surrounded by trees." },
    { phrase: "surround oneself with", meaning: "让自己身边都是…", example: "She surrounds herself with positive people." },
    { phrase: "surrounding area", meaning: "周边地区", example: "We explored the surrounding area." }
  ],
  "romance": [
    { phrase: "a holiday romance", meaning: "假期恋情", example: "It was just a holiday romance." },
    { phrase: "romance novel", meaning: "言情小说", example: "She loves reading romance novels." }
  ],
  "tower": [
    { phrase: "tower over/above", meaning: "高耸于…之上", example: "The building towers over the city." },
    { phrase: "clock tower", meaning: "钟楼", example: "The clock tower is the symbol of the town." },
    { phrase: "control tower", meaning: "控制塔台", example: "The pilot contacted the control tower." }
  ],
  "locate": [
    { phrase: "be located in/at", meaning: "位于", example: "The hotel is located in the city center." },
    { phrase: "locate the source", meaning: "找到来源", example: "We need to locate the source of the problem." }
  ],
  "district": [
    { phrase: "business district", meaning: "商业区", example: "The office is in the business district." },
    { phrase: "school district", meaning: "学区", example: "They moved to a better school district." },
    { phrase: "residential district", meaning: "住宅区", example: "It's a quiet residential district." }
  ],
  "in love": [
    { phrase: "fall in love with", meaning: "爱上", example: "He fell in love with her at first sight." },
    { phrase: "be in love with", meaning: "与…相爱", example: "They have been in love with each other for years." }
  ],
  "appearance": [
    { phrase: "make an appearance", meaning: "露面；出席", example: "The star made a brief appearance at the event." },
    { phrase: "by/from appearance", meaning: "从外表看", example: "You can't judge people by appearance." },
    { phrase: "keep up appearances", meaning: "维持体面", example: "She tried to keep up appearances after losing her job." },
    { phrase: "to/by all appearances", meaning: "从各方面看来", example: "To all appearances, they are a happy couple." }
  ],
  "marry": [
    { phrase: "get married (to sb.)", meaning: "（和某人）结婚", example: "They got married last summer." },
    { phrase: "marry into", meaning: "嫁入/娶入（家庭）", example: "She married into a wealthy family." },
    { phrase: "be married to", meaning: "与…结婚", example: "He has been married to her for ten years." }
  ],
  "rent": [
    { phrase: "for rent", meaning: "出租", example: "There is a room for rent on the second floor." },
    { phrase: "rent out", meaning: "出租（给别人）", example: "They rent out their house in summer." },
    { phrase: "pay the rent", meaning: "付房租", example: "I need to pay the rent by Friday." }
  ],
  "location": [
    { phrase: "on location", meaning: "在外景地", example: "The movie was filmed on location in Italy." },
    { phrase: "prime location", meaning: "黄金地段", example: "The shop is in a prime location." }
  ],
  "cottage": [
    { phrase: "country cottage", meaning: "乡间小屋", example: "They spent the weekend in a country cottage." },
    { phrase: "cottage industry", meaning: "家庭手工业", example: "Weaving was once a cottage industry." }
  ],
  "sleep": [
    { phrase: "go to sleep", meaning: "入睡", example: "I couldn't go to sleep last night." },
    { phrase: "fall asleep", meaning: "睡着", example: "She fell asleep on the sofa." },
    { phrase: "sleep in", meaning: "睡懒觉", example: "I like to sleep in on weekends." },
    { phrase: "lose sleep over", meaning: "为…失眠/担忧", example: "Don't lose sleep over the exam." }
  ],
  "board": [
    { phrase: "on board", meaning: "在船/飞机上；加入", example: "Welcome on board!" },
    { phrase: "board game", meaning: "桌游", example: "Let's play a board game tonight." },
    { phrase: "across the board", meaning: "全面地", example: "Prices have risen across the board." },
    { phrase: "bulletin board", meaning: "公告栏", example: "Check the bulletin board for updates." }
  ],
  "name": [
    { phrase: "by name", meaning: "名叫；按名字", example: "I know her by name only." },
    { phrase: "in the name of", meaning: "以…的名义", example: "He spoke in the name of the company." },
    { phrase: "make a name for oneself", meaning: "出名", example: "She made a name for herself as a writer." },
    { phrase: "name after", meaning: "以…命名", example: "The city was named after a famous explorer." }
  ],
  "seat": [
    { phrase: "take a seat", meaning: "请坐", example: "Please take a seat." },
    { phrase: "have a seat", meaning: "坐下", example: "Have a seat and wait here." },
    { phrase: "window/aisle seat", meaning: "靠窗/靠过道座位", example: "I'd like a window seat, please." },
    { phrase: "back seat", meaning: "后座；次要地位", example: "Safety should never take a back seat." }
  ],
  "decorate": [
    { phrase: "decorate...with...", meaning: "用…装饰…", example: "They decorated the room with flowers." },
    { phrase: "be decorated with", meaning: "装饰着", example: "The walls were decorated with paintings." }
  ],
  "rose": [
    { phrase: "a bunch of roses", meaning: "一束玫瑰", example: "He gave her a bunch of roses." },
    { phrase: "a bed of roses", meaning: "称心如意的境遇", example: "Life is not always a bed of roses." }
  ],
  "meaning": [
    { phrase: "the meaning of", meaning: "…的意义", example: "What's the meaning of this word?" },
    { phrase: "double meaning", meaning: "双关含义", example: "The sentence has a double meaning." },
    { phrase: "full of meaning", meaning: "意味深长的", example: "She gave him a look full of meaning." }
  ],
  "mention": [
    { phrase: "not to mention", meaning: "更不用说", example: "He can speak French, not to mention English." },
    { phrase: "don't mention it", meaning: "不客气", example: "— Thank you! — Don't mention it." },
    { phrase: "mention sth. to sb.", meaning: "向某人提到某事", example: "She mentioned the plan to her boss." },
    { phrase: "at the mention of", meaning: "一提到", example: "He smiled at the mention of her name." }
  ],
  "nightmare": [
    { phrase: "have a nightmare", meaning: "做噩梦", example: "I had a terrible nightmare last night." },
    { phrase: "a nightmare scenario", meaning: "噩梦般的情景", example: "Traffic jams are a nightmare scenario for drivers." },
    { phrase: "living nightmare", meaning: "活生生的噩梦", example: "The experience was a living nightmare." }
  ],
  "break in": [
    { phrase: "break in", meaning: "强行闯入", example: "Someone broke in and stole the TV." },
    { phrase: "break into", meaning: "闯入；突然开始", example: "He broke into a run when he saw the bus." },
    { phrase: "break in on", meaning: "打断（谈话）", example: "Sorry to break in on your conversation." }
  ],
  "twin": [
    { phrase: "twin brother/sister", meaning: "双胞胎兄弟/姐妹", example: "She has a twin sister." },
    { phrase: "identical twins", meaning: "同卵双胞胎", example: "The identical twins look exactly alike." },
    { phrase: "twin room", meaning: "双床房", example: "I'd like to book a twin room, please." }
  ],
  "nephew": [
    { phrase: "nephew and niece", meaning: "侄子和侄女", example: "I have two nephews and one niece." }
  ],
  "niece": [
    { phrase: "nephew and niece", meaning: "侄子和侄女", example: "My nephew and niece visited us last weekend." }
  ],
  "curly": [
    { phrase: "curly hair", meaning: "卷发", example: "She has beautiful curly hair." }
  ],
  "hand-held": [
    { phrase: "hand-held device", meaning: "手持设备", example: "Smartphones are the most common hand-held devices." }
  ],
  "bride": [
    { phrase: "bride and groom", meaning: "新娘和新郎", example: "The bride and groom looked very happy." },
    { phrase: "bride-to-be", meaning: "准新娘", example: "The bride-to-be was busy planning the wedding." }
  ],
  "handsome": [
    { phrase: "a handsome man", meaning: "英俊的男人", example: "He grew up to be a handsome man." },
    { phrase: "a handsome salary", meaning: "可观的薪水", example: "She earns a handsome salary." }
  ],
  "cheek": [
    { phrase: "cheek to cheek", meaning: "脸贴脸", example: "They danced cheek to cheek." },
    { phrase: "turn the other cheek", meaning: "逆来顺受；忍让", example: "Instead of fighting back, he turned the other cheek." }
  ],
  "fountain": [
    { phrase: "drinking fountain", meaning: "饮水喷泉", example: "There is a drinking fountain in the hallway." },
    { phrase: "fountain pen", meaning: "钢笔", example: "He signed the letter with a fountain pen." }
  ],
  "mate": [
    { phrase: "classmate", meaning: "同学", example: "She is my classmate from primary school." },
    { phrase: "roommate", meaning: "室友", example: "My roommate is very friendly." },
    { phrase: "teammate", meaning: "队友", example: "He passed the ball to his teammate." },
    { phrase: "soul mate", meaning: "灵魂伴侣", example: "She finally found her soul mate." }
  ],
  "mend": [
    { phrase: "mend one's ways", meaning: "改过自新", example: "He promised to mend his ways." },
    { phrase: "on the mend", meaning: "在好转中", example: "The patient is on the mend." }
  ],
  "loan": [
    { phrase: "take out a loan", meaning: "贷款", example: "They took out a loan to buy a house." },
    { phrase: "on loan", meaning: "借出的", example: "The painting is on loan from the museum." },
    { phrase: "pay off a loan", meaning: "还清贷款", example: "It took them ten years to pay off the loan." }
  ],
  "property": [
    { phrase: "private property", meaning: "私有财产", example: "This is private property. No trespassing." },
    { phrase: "property market", meaning: "房地产市场", example: "The property market is booming." },
    { phrase: "intellectual property", meaning: "知识产权", example: "The company protects its intellectual property." }
  ],
  "kid": [
    { phrase: "no kidding", meaning: "不是开玩笑", example: "No kidding, I really saw a bear!" },
    { phrase: "kid around", meaning: "开玩笑", example: "Stop kidding around and be serious." }
  ],
  "bath": [
    { phrase: "have/take a bath", meaning: "洗澡", example: "I usually take a bath before bed." },
    { phrase: "bathroom", meaning: "浴室；卫生间", example: "Where is the bathroom?" },
    { phrase: "bathrobe", meaning: "浴袍", example: "She put on a bathrobe after the bath." }
  ],
  "situated": [
    { phrase: "be situated in/on", meaning: "位于", example: "The town is situated on the coast." },
    { phrase: "be well situated", meaning: "处于有利位置", example: "The hotel is well situated for the beach." }
  ],
  "neighbourhood": [
    { phrase: "in the neighbourhood of", meaning: "在…附近；大约", example: "The cost is in the neighbourhood of $500." },
    { phrase: "neighbourhood watch", meaning: "邻里守望（治安）", example: "They set up a neighbourhood watch program." }
  ],
  "look up": [
    { phrase: "look up a word", meaning: "查单词", example: "Look up the word in the dictionary." },
    { phrase: "look up to sb.", meaning: "尊敬某人", example: "Children look up to their parents." },
    { phrase: "things are looking up", meaning: "情况在好转", example: "After months of struggle, things are looking up." }
  ],
  "occasionally": [
    { phrase: "only occasionally", meaning: "只是偶尔", example: "I only occasionally eat fast food." }
  ],
  "lock": [
    { phrase: "lock up", meaning: "锁好；关押", example: "Don't forget to lock up before you leave." },
    { phrase: "lock sb. out", meaning: "把某人锁在外面", example: "I locked myself out of the house." },
    { phrase: "under lock and key", meaning: "锁起来；安全保管", example: "The documents are kept under lock and key." }
  ],
  "alarm": [
    { phrase: "alarm clock", meaning: "闹钟", example: "I set my alarm clock for 6 a.m." },
    { phrase: "fire alarm", meaning: "火警", example: "The fire alarm went off at midnight." },
    { phrase: "raise the alarm", meaning: "发出警报", example: "A neighbour raised the alarm when he saw smoke." },
    { phrase: "false alarm", meaning: "虚惊一场", example: "It turned out to be a false alarm." }
  ],
  "ground": [
    { phrase: "on the ground", meaning: "在地面上", example: "The children were sitting on the ground." },
    { phrase: "ground floor", meaning: "一楼（英式）", example: "The shop is on the ground floor." },
    { phrase: "break new ground", meaning: "开辟新天地", example: "The research breaks new ground in medicine." },
    { phrase: "from the ground up", meaning: "从头开始", example: "They built the company from the ground up." }
  ],
  "dust": [
    { phrase: "dust off", meaning: "掸去灰尘；重新启用", example: "She dusted off her old guitar." },
    { phrase: "bite the dust", meaning: "失败；死亡", example: "Another plan bites the dust." }
  ],
  "repair": [
    { phrase: "in good/bad repair", meaning: "保养良好/不善", example: "The building is in good repair." },
    { phrase: "beyond repair", meaning: "无法修复", example: "The car was damaged beyond repair." },
    { phrase: "under repair", meaning: "在修理中", example: "The road is under repair." }
  ],
  "pipe": [
    { phrase: "water pipe", meaning: "水管", example: "The water pipe burst in winter." },
    { phrase: "pipe dream", meaning: "白日梦；空想", example: "Winning the lottery is just a pipe dream." }
  ],
  "electrical": [
    { phrase: "electrical equipment", meaning: "电气设备", example: "Keep electrical equipment away from water." },
    { phrase: "electrical appliance", meaning: "电器", example: "The store sells various electrical appliances." }
  ],
  "microwave": [
    { phrase: "microwave oven", meaning: "微波炉", example: "Heat it in the microwave oven for two minutes." }
  ],
  "load": [
    { phrase: "a load of", meaning: "大量的", example: "I have a load of homework to do." },
    { phrase: "loads of", meaning: "许多", example: "There are loads of things to see here." },
    { phrase: "take a load off", meaning: "坐下休息", example: "Come in and take a load off." }
  ],
  "bring up": [
    { phrase: "bring up a child", meaning: "养育孩子", example: "She brought up three children on her own." },
    { phrase: "bring up a topic", meaning: "提出话题", example: "He brought up an interesting topic at the meeting." },
    { phrase: "be brought up", meaning: "被抚养长大", example: "I was brought up in the countryside." }
  ],
  "messy": [
    { phrase: "a messy room", meaning: "凌乱的房间", example: "His room is always messy." },
    { phrase: "messy situation", meaning: "混乱的局面", example: "It's a messy situation with no easy solution." }
  ],
  "tidy up": [
    { phrase: "tidy up the room", meaning: "收拾房间", example: "Please tidy up your room before dinner." },
    { phrase: "tidy up after", meaning: "在…之后收拾", example: "You should tidy up after yourself." }
  ],
  "line": [
    { phrase: "in line", meaning: "排队；一致", example: "Please wait in line." },
    { phrase: "on the line", meaning: "处于危险中", example: "His job is on the line." },
    { phrase: "draw the line", meaning: "划定界限", example: "You have to draw the line somewhere." },
    { phrase: "bottom line", meaning: "底线；关键", example: "The bottom line is we need more money." }
  ],
  "balcony": [
    { phrase: "on the balcony", meaning: "在阳台上", example: "She was standing on the balcony." }
  ],
  "kettle": [
    { phrase: "put the kettle on", meaning: "烧水", example: "I'll put the kettle on for tea." },
    { phrase: "a different kettle of fish", meaning: "完全不同的事", example: "That's a different kettle of fish entirely." }
  ],
  "basin": [
    { phrase: "wash basin", meaning: "洗脸盆", example: "There is a wash basin in the bathroom." },
    { phrase: "river basin", meaning: "流域", example: "The Amazon river basin is the largest in the world." }
  ],
  "blind": [
    { phrase: "turn a blind eye to", meaning: "对…视而不见", example: "You can't turn a blind eye to bullying." },
    { phrase: "the blind", meaning: "盲人（总称）", example: "The guide dog helps the blind cross the street." },
    { phrase: "blind spot", meaning: "盲点", example: "Every driver has a blind spot." }
  ],
  "bucket": [
    { phrase: "a bucket of water", meaning: "一桶水", example: "He carried a bucket of water from the well." },
    { phrase: "kick the bucket", meaning: "去世（口语）", example: "The old man finally kicked the bucket at 95." }
  ],
  "candle": [
    { phrase: "light a candle", meaning: "点蜡烛", example: "She lit a candle and placed it on the cake." },
    { phrase: "burn the candle at both ends", meaning: "过度劳累", example: "You'll get sick if you keep burning the candle at both ends." }
  ],
  "cellar": [
    { phrase: "wine cellar", meaning: "酒窖", example: "The restaurant has an excellent wine cellar." },
    { phrase: "in the cellar", meaning: "在地窖里", example: "We store potatoes in the cellar." }
  ],
  "channel": [
    { phrase: "change the channel", meaning: "换台", example: "Can you change the channel? This show is boring." },
    { phrase: "the English Channel", meaning: "英吉利海峡", example: "She swam across the English Channel." },
    { phrase: "communication channel", meaning: "沟通渠道", example: "Email is an important communication channel." }
  ],
  "remote control": [
    { phrase: "by remote control", meaning: "通过遥控", example: "The toy car is operated by remote control." }
  ],
  "duvet": [
    { phrase: "duvet cover", meaning: "被套", example: "I need to wash the duvet cover this weekend." },
    { phrase: "under the duvet", meaning: "在被子里", example: "She stayed under the duvet all morning." }
  ],
  "grill": [
    { phrase: "grilled meat", meaning: "烤肉", example: "We had grilled meat for dinner." },
    { phrase: "under the grill", meaning: "在烤架下", example: "Put the cheese under the grill for two minutes." }
  ],
  "handle": [
    { phrase: "handle with care", meaning: "小心轻放", example: "The box is fragile — handle with care." },
    { phrase: "door handle", meaning: "门把手", example: "Turn the door handle to open it." },
    { phrase: "handle a situation", meaning: "处理局面", example: "She handled the situation very well." }
  ],
  "heat": [
    { phrase: "in the heat of", meaning: "在…的高潮中", example: "In the heat of the argument, he said something rude." },
    { phrase: "heat up", meaning: "加热；升温", example: "Heat up the soup before serving." },
    { phrase: "body heat", meaning: "体温", example: "Penguins huddle together to share body heat." }
  ],
  "iron": [
    { phrase: "iron out", meaning: "解决（问题）", example: "We need to iron out a few problems before the launch." },
    { phrase: "made of iron", meaning: "铁制的", example: "The gate is made of iron." },
    { phrase: "iron will", meaning: "钢铁般的意志", example: "She has an iron will and never gives up." }
  ],
  "plug": [
    { phrase: "plug in", meaning: "插上电源", example: "Plug in the charger before the battery dies." },
    { phrase: "pull the plug", meaning: "终止；拔掉插头", example: "They decided to pull the plug on the project." }
  ],
  "switch": [
    { phrase: "switch on/off", meaning: "打开/关闭", example: "Switch off the lights when you leave." },
    { phrase: "switch to", meaning: "切换到", example: "She switched to a different topic." },
    { phrase: "light switch", meaning: "电灯开关", example: "The light switch is by the door." }
  ],
  "tap": [
    { phrase: "turn on/off the tap", meaning: "打开/关上水龙头", example: "Turn off the tap while brushing your teeth." },
    { phrase: "tap water", meaning: "自来水", example: "Is the tap water safe to drink here?" },
    { phrase: "tap on the shoulder", meaning: "拍肩膀", example: "Someone gave me a tap on the shoulder." }
  ],
  "babysit": [
    { phrase: "babysit for sb.", meaning: "帮某人看孩子", example: "Can you babysit for us on Saturday night?" },
    { phrase: "babysitter", meaning: "临时保姆", example: "We need to find a babysitter for tonight." }
  ],
  "born": [
    { phrase: "be born in", meaning: "出生于", example: "She was born in London in 1990." },
    { phrase: "born and raised", meaning: "土生土长", example: "He was born and raised in this small town." },
    { phrase: "a born leader", meaning: "天生的领导者", example: "She is a born leader." }
  ],
  "lighter": [
    { phrase: "cigarette lighter", meaning: "打火机", example: "He took out a cigarette lighter from his pocket." }
  ],
  "lonely": [
    { phrase: "feel lonely", meaning: "感到孤独", example: "She felt lonely after moving to a new city." },
    { phrase: "a lonely place", meaning: "偏僻的地方", example: "The cabin is in a lonely place in the mountains." }
  ],
  "mess": [
    { phrase: "make a mess", meaning: "弄得一团糟", example: "The kids made a mess in the kitchen." },
    { phrase: "in a mess", meaning: "乱七八糟", example: "My room is in a mess." },
    { phrase: "mess up", meaning: "搞砸", example: "I really messed up the exam." }
  ],
  "rebuild": [
    { phrase: "rebuild from scratch", meaning: "从头重建", example: "After the fire, they had to rebuild from scratch." },
    { phrase: "rebuild one's life", meaning: "重建生活", example: "She is trying to rebuild her life after the divorce." }
  ],
  "shut": [
    { phrase: "shut down", meaning: "关闭；停业", example: "The factory was shut down last year." },
    { phrase: "shut up", meaning: "闭嘴（口语）", example: "He told me to shut up." },
    { phrase: "shut out", meaning: "把…关在外面", example: "Don't shut me out of your life." }
  ],
  "shave": [
    { phrase: "have a shave", meaning: "刮脸", example: "He has a shave every morning." },
    { phrase: "a close shave", meaning: "侥幸脱险", example: "That was a close shave — the car nearly hit me!" }
  ],
  "knock": [
    { phrase: "knock on/at the door", meaning: "敲门", example: "Someone is knocking at the door." },
    { phrase: "knock over", meaning: "打翻", example: "The cat knocked over the vase." },
    { phrase: "knock out", meaning: "击倒；淘汰", example: "The boxer knocked out his opponent in the third round." }
  ],
  "knock down": [
    { phrase: "knock down a building", meaning: "拆除建筑", example: "They knocked down the old building to build a new one." },
    { phrase: "be knocked down by", meaning: "被…撞倒", example: "The boy was knocked down by a car." }
  ],
  "lay": [
    { phrase: "lay the table", meaning: "摆桌子", example: "Can you lay the table for dinner?" },
    { phrase: "lay eggs", meaning: "下蛋", example: "The hen lays eggs every day." },
    { phrase: "lay down", meaning: "放下；制定", example: "The government laid down new rules." }
  ],
  "asleep": [
    { phrase: "fall asleep", meaning: "入睡", example: "The baby fell asleep in my arms." },
    { phrase: "fast asleep", meaning: "熟睡", example: "The children were fast asleep by nine." },
    { phrase: "half asleep", meaning: "半睡半醒", example: "I was still half asleep when the phone rang." }
  ],
  "dirt": [
    { phrase: "dirt road", meaning: "土路", example: "We drove along a dirt road to the farm." },
    { phrase: "dirt cheap", meaning: "非常便宜", example: "The clothes at that market are dirt cheap." }
  ],
  "male": [
    { phrase: "male and female", meaning: "男性和女性", example: "The survey included both male and female students." },
    { phrase: "male voice", meaning: "男声", example: "A deep male voice answered the phone." }
  ],
  "sex": [
    { phrase: "the opposite sex", meaning: "异性", example: "Teenagers often feel shy around the opposite sex." },
    { phrase: "sex education", meaning: "性教育", example: "Sex education is part of the school curriculum." }
  ],
  "annual": [
    { phrase: "annual report", meaning: "年度报告", example: "The company published its annual report." },
    { phrase: "annual income", meaning: "年收入", example: "His annual income is about $50,000." },
    { phrase: "annual meeting", meaning: "年会", example: "The annual meeting will be held in December." }
  ],
  "translate": [
    { phrase: "translate...into...", meaning: "把…翻译成…", example: "Can you translate this article into English?" },
    { phrase: "translate into action", meaning: "转化为行动", example: "We need to translate our ideas into action." }
  ],
  "translation": [
    { phrase: "in translation", meaning: "在翻译中", example: "Some meaning is lost in translation." },
    { phrase: "a literal translation", meaning: "直译", example: "A literal translation doesn't always make sense." }
  ],
  "biography": [
    { phrase: "write a biography", meaning: "写传记", example: "She wrote a biography of her grandmother." },
    { phrase: "authorized biography", meaning: "授权传记", example: "The authorized biography was published last year." }
  ],
  "care": [
    { phrase: "take care of", meaning: "照顾", example: "She takes care of her younger brother after school." },
    { phrase: "care about", meaning: "关心", example: "He really cares about the environment." },
    { phrase: "with care", meaning: "小心地", example: "Handle the glass with care." }
  ],
  "careless": [
    { phrase: "careless mistake", meaning: "粗心的错误", example: "She lost marks because of careless mistakes." },
    { phrase: "be careless about", meaning: "对…不在意", example: "Don't be careless about your health." }
  ],
  "celebrate": [
    { phrase: "celebrate one's birthday", meaning: "庆祝生日", example: "We celebrated his birthday at a restaurant." },
    { phrase: "celebrate a victory", meaning: "庆祝胜利", example: "The team celebrated their victory with a party." }
  ],
  "celebration": [
    { phrase: "in celebration of", meaning: "为了庆祝", example: "A party was held in celebration of her success." },
    { phrase: "birthday celebration", meaning: "生日庆祝", example: "The birthday celebration lasted all evening." }
  ],
  "central": [
    { phrase: "central heating", meaning: "中央供暖", example: "The house has central heating." },
    { phrase: "play a central role", meaning: "起核心作用", example: "Technology plays a central role in modern education." }
  ],
  "diagram": [
    { phrase: "draw a diagram", meaning: "画图表", example: "Draw a diagram to show the process." },
    { phrase: "flow diagram", meaning: "流程图", example: "The flow diagram shows each step clearly." }
  ],
  "edge": [
    { phrase: "on the edge of", meaning: "在…边缘", example: "The house is on the edge of the forest." },
    { phrase: "have an edge over", meaning: "比…有优势", example: "She has an edge over other candidates." }
  ],
  "effect": [
    { phrase: "have an effect on", meaning: "对…有影响", example: "Diet has a big effect on health." },
    { phrase: "side effect", meaning: "副作用", example: "This medicine may cause side effects." },
    { phrase: "in effect", meaning: "实际上；生效", example: "The new law is now in effect." }
  ],
  "examiner": [
    { phrase: "the examiner", meaning: "考官", example: "The examiner will ask you some questions." }
  ],
  "false": [
    { phrase: "true or false", meaning: "判断对错", example: "Read the sentences and decide if they are true or false." },
    { phrase: "false alarm", meaning: "虚惊一场", example: "It was just a false alarm." },
    { phrase: "false impression", meaning: "错误印象", example: "Don't give people a false impression." }
  ],
  "incorrect": [
    { phrase: "incorrect answer", meaning: "错误答案", example: "Two of your answers are incorrect." },
    { phrase: "politically incorrect", meaning: "政治不正确的", example: "That comment was considered politically incorrect." }
  ],
  "intermediate": [
    { phrase: "intermediate level", meaning: "中级水平", example: "This book is for intermediate level students." },
    { phrase: "intermediate stage", meaning: "中间阶段", example: "The project is at an intermediate stage." }
  ],
  "political": [
    { phrase: "political party", meaning: "政党", example: "He joined a political party at university." },
    { phrase: "political system", meaning: "政治制度", example: "Every country has its own political system." }
  ],
  "politics": [
    { phrase: "talk politics", meaning: "谈论政治", example: "My parents often talk politics at dinner." },
    { phrase: "get into politics", meaning: "从政", example: "She decided to get into politics after university." }
  ],
  "registration": [
    { phrase: "registration form", meaning: "登记表", example: "Please fill in the registration form." },
    { phrase: "registration fee", meaning: "注册费", example: "The registration fee is $50." }
  ],
  "tick": [
    { phrase: "tick the box", meaning: "在方框里打勾", example: "Tick the box if you agree." },
    { phrase: "tick off", meaning: "逐一核对；惹恼", example: "She ticked off each item on the list." }
  ],
  "underline": [
    { phrase: "underline the key words", meaning: "在关键词下画线", example: "Underline the key words in each question." }
  ],
  "ink": [
    { phrase: "in ink", meaning: "用墨水", example: "Please write in ink, not pencil." },
    { phrase: "ink cartridge", meaning: "墨盒", example: "The printer needs a new ink cartridge." }
  ],
  "roommate": [
    { phrase: "college roommate", meaning: "大学室友", example: "My college roommate became my best friend." }
  ],
  "break up": [
    { phrase: "break up with sb.", meaning: "与某人分手", example: "She broke up with her boyfriend last month." },
    { phrase: "break up a fight", meaning: "制止打架", example: "The teacher broke up the fight between the two boys." }
  ],
  "notice board": [
    { phrase: "on the notice board", meaning: "在布告栏上", example: "Check the notice board for the latest news." }
  ],
  "stay behind": [
    { phrase: "stay behind after class", meaning: "课后留下", example: "The teacher asked him to stay behind after class." }
  ],
  "pronunciation": [
    { phrase: "correct pronunciation", meaning: "正确发音", example: "Listen carefully to the correct pronunciation." },
    { phrase: "pronunciation guide", meaning: "发音指南", example: "The dictionary has a pronunciation guide." }
  ],
  "revision": [
    { phrase: "do revision", meaning: "复习", example: "I need to do some revision for the test." },
    { phrase: "revision notes", meaning: "复习笔记", example: "She made revision notes for every subject." }
  ],
  "talent": [
    { phrase: "have a talent for", meaning: "有…天赋", example: "She has a talent for painting." },
    { phrase: "talent show", meaning: "才艺表演", example: "He won first prize in the talent show." }
  ],
  "phrase": [
    { phrase: "key phrase", meaning: "关键短语", example: "Learn the key phrases before your trip." },
    { phrase: "noun/verb phrase", meaning: "名词/动词短语", example: "Identify the noun phrase in this sentence." }
  ],
  "bitter": [
    { phrase: "bitter cold", meaning: "严寒", example: "We walked home in the bitter cold." },
    { phrase: "bitter taste", meaning: "苦味", example: "The medicine has a bitter taste." },
    { phrase: "bitter enemy", meaning: "死敌", example: "They were bitter enemies for years." }
  ],
  "bunch": [
    { phrase: "a bunch of", meaning: "一束；一群", example: "She received a bunch of flowers on her birthday." },
    { phrase: "a bunch of grapes", meaning: "一串葡萄", example: "I bought a bunch of grapes from the market." }
  ],
  "canteen": [
    { phrase: "school canteen", meaning: "学校食堂", example: "The school canteen serves lunch from 12 to 1." }
  ],
  "herb": [
    { phrase: "fresh herbs", meaning: "新鲜香草", example: "Add some fresh herbs to the salad." },
    { phrase: "herbal tea", meaning: "花草茶", example: "She drinks herbal tea before bed." }
  ],
  "jug": [
    { phrase: "a jug of water", meaning: "一壶水", example: "Could you bring us a jug of water, please?" },
    { phrase: "a jug of milk", meaning: "一壶牛奶", example: "There's a jug of milk in the fridge." }
  ],
  "pea": [
    { phrase: "green peas", meaning: "青豌豆", example: "We had fish and green peas for dinner." },
    { phrase: "like two peas in a pod", meaning: "一模一样", example: "The twins are like two peas in a pod." }
  ],
  "peanut": [
    { phrase: "peanut butter", meaning: "花生酱", example: "I love peanut butter sandwiches." },
    { phrase: "peanut allergy", meaning: "花生过敏", example: "He has a serious peanut allergy." }
  ],
  "saucepan": [
    { phrase: "a saucepan of water", meaning: "一锅水", example: "Boil a saucepan of water for the pasta." }
  ],
  "vegetarian": [
    { phrase: "vegetarian food", meaning: "素食", example: "This restaurant serves excellent vegetarian food." },
    { phrase: "become a vegetarian", meaning: "成为素食者", example: "She became a vegetarian two years ago." }
  ],
  "basket": [
    { phrase: "shopping basket", meaning: "购物篮", example: "She filled her shopping basket with fruit." },
    { phrase: "a basket of", meaning: "一篮…", example: "He brought a basket of apples." }
  ],
  "dozen": [
    { phrase: "a dozen", meaning: "一打（12个）", example: "I'd like a dozen eggs, please." },
    { phrase: "dozens of", meaning: "许多", example: "Dozens of people came to the party." }
  ],
  "gum": [
    { phrase: "chewing gum", meaning: "口香糖", example: "Would you like a piece of chewing gum?" },
    { phrase: "bubble gum", meaning: "泡泡糖", example: "The children were blowing bubble gum." }
  ],
  "liquid": [
    { phrase: "liquid soap", meaning: "洗手液", example: "Use liquid soap to wash your hands." },
    { phrase: "clear liquid", meaning: "透明液体", example: "The bottle contained a clear liquid." }
  ],
  "out of date": [
    { phrase: "go out of date", meaning: "过期", example: "This yogurt has gone out of date." },
    { phrase: "out-of-date information", meaning: "过时的信息", example: "The guidebook has out-of-date information." }
  ],
  "peel": [
    { phrase: "peel off", meaning: "剥落", example: "The paint is peeling off the wall." },
    { phrase: "peel an orange", meaning: "剥橙子", example: "She peeled an orange and shared it with me." }
  ],
  "powder": [
    { phrase: "milk powder", meaning: "奶粉", example: "Mix the milk powder with warm water." },
    { phrase: "washing powder", meaning: "洗衣粉", example: "We've run out of washing powder." }
  ],
  "select": [
    { phrase: "select from", meaning: "从…中选择", example: "You can select from a range of colours." },
    { phrase: "carefully selected", meaning: "精心挑选的", example: "The team was carefully selected." }
  ],
  "sour": [
    { phrase: "go sour", meaning: "变酸；变糟", example: "The milk has gone sour." },
    { phrase: "sweet and sour", meaning: "糖醋的", example: "I ordered sweet and sour chicken." }
  ],
  "by accident": [
    { phrase: "by accident", meaning: "偶然地", example: "I found the letter by accident." },
    { phrase: "by accident or design", meaning: "偶然或有意", example: "Whether by accident or design, they arrived at the same time." }
  ],
  "well done": [
    { phrase: "well done!", meaning: "做得好！", example: "Well done! You got full marks!" },
    { phrase: "well-done steak", meaning: "全熟牛排", example: "I'd like my steak well done, please." }
  ],
  "complaint": [
    { phrase: "make a complaint", meaning: "投诉", example: "I'd like to make a complaint about the service." },
    { phrase: "complaint about", meaning: "关于…的投诉", example: "We received several complaints about the noise." }
  ],
  "madam": [
    { phrase: "Dear Madam", meaning: "尊敬的女士", example: "Dear Madam, I am writing to apply for the position." }
  ],
  "greeting": [
    { phrase: "exchange greetings", meaning: "互相问候", example: "They exchanged greetings at the door." },
    { phrase: "greetings card", meaning: "贺卡", example: "She sent a greetings card for Christmas." }
  ],
  "increase": [
    { phrase: "increase in", meaning: "…的增加", example: "There has been an increase in crime." },
    { phrase: "on the increase", meaning: "在增加中", example: "Online shopping is on the increase." },
    { phrase: "increase by", meaning: "增加了…", example: "Sales increased by 20% last year." }
  ],
  "recent": [
    { phrase: "in recent years", meaning: "近年来", example: "In recent years, the city has changed a lot." },
    { phrase: "recent news", meaning: "最近的新闻", example: "Have you heard the recent news?" }
  ],
  "report": [
    { phrase: "report on", meaning: "关于…的报告", example: "She wrote a report on climate change." },
    { phrase: "news report", meaning: "新闻报道", example: "I saw it on a news report." },
    { phrase: "report to", meaning: "向…汇报", example: "You should report to the manager." }
  ],
  "sense": [
    { phrase: "make sense", meaning: "有道理", example: "What you said makes sense." },
    { phrase: "common sense", meaning: "常识", example: "It's just common sense to wear a seatbelt." },
    { phrase: "a sense of humour", meaning: "幽默感", example: "She has a great sense of humour." }
  ],
  "take away": [
    { phrase: "take away food", meaning: "外卖食物", example: "Let's get some take away food tonight." },
    { phrase: "take sth. away", meaning: "拿走某物", example: "The waiter took away our plates." }
  ],
  "cucumber": [
    { phrase: "cool as a cucumber", meaning: "非常冷静", example: "She was cool as a cucumber during the interview." }
  ],
  "weigh": [
    { phrase: "weigh up", meaning: "权衡", example: "You need to weigh up the pros and cons." },
    { phrase: "weigh oneself", meaning: "称体重", example: "She weighs herself every morning." }
  ],
  "gorgeous": [
    { phrase: "absolutely gorgeous", meaning: "非常漂亮", example: "The sunset was absolutely gorgeous." },
    { phrase: "gorgeous weather", meaning: "极好的天气", example: "We had gorgeous weather all week." }
  ],
  "cashpoint": [
    { phrase: "find a cashpoint", meaning: "找自动取款机", example: "I need to find a cashpoint to get some cash." }
  ],
  "handkerchief": [
    { phrase: "blow one's nose on a handkerchief", meaning: "用手帕擤鼻子", example: "He blew his nose on a handkerchief." }
  ],
  "laundry": [
    { phrase: "do the laundry", meaning: "洗衣服", example: "I do the laundry every Saturday." },
    { phrase: "laundry basket", meaning: "脏衣篓", example: "Put your dirty clothes in the laundry basket." }
  ],
  "old-fashioned": [
    { phrase: "old-fashioned ideas", meaning: "过时的想法", example: "He has some very old-fashioned ideas about women." },
    { phrase: "old-fashioned style", meaning: "复古风格", example: "The café has a charming old-fashioned style." }
  ],
  "backpack": [
    { phrase: "carry a backpack", meaning: "背双肩包", example: "She carries a heavy backpack to school every day." }
  ],
  "fold": [
    { phrase: "fold up", meaning: "折叠起来", example: "Fold up the map and put it in your pocket." },
    { phrase: "fold one's arms", meaning: "双臂交叉", example: "He folded his arms and waited." }
  ],
  "go with": [
    { phrase: "go with the flow", meaning: "随大流", example: "Sometimes it's easier to just go with the flow." },
    { phrase: "go well with", meaning: "与…搭配", example: "This tie goes well with your shirt." }
  ],
  "beyond": [
    { phrase: "beyond doubt", meaning: "毫无疑问", example: "His guilt was proved beyond doubt." },
    { phrase: "beyond one's reach", meaning: "够不着；力所不及", example: "The top shelf is beyond my reach." },
    { phrase: "go beyond", meaning: "超越", example: "His kindness goes beyond what is expected." }
  ],
  "bank account": [
    { phrase: "open a bank account", meaning: "开银行账户", example: "I opened a bank account when I was 16." },
    { phrase: "savings account", meaning: "储蓄账户", example: "She put the money in her savings account." }
  ],
  "coin": [
    { phrase: "toss a coin", meaning: "抛硬币", example: "Let's toss a coin to decide who goes first." },
    { phrase: "the other side of the coin", meaning: "事情的另一面", example: "But the other side of the coin is the cost." }
  ],
  "quantity": [
    { phrase: "a large quantity of", meaning: "大量的", example: "A large quantity of water was wasted." },
    { phrase: "in quantity", meaning: "大量地", example: "It's cheaper to buy in quantity." }
  ],
  "link": [
    { phrase: "link to/with", meaning: "与…联系", example: "The new road links the village with the town." },
    { phrase: "a link between", meaning: "…之间的联系", example: "There is a link between smoking and cancer." }
  ],
  "deal with": [
    { phrase: "deal with a problem", meaning: "处理问题", example: "We need to deal with this problem immediately." },
    { phrase: "deal with customers", meaning: "接待顾客", example: "She deals with customers every day." }
  ],
  "double": [
    { phrase: "double room", meaning: "双人间", example: "I'd like to book a double room." },
    { phrase: "double check", meaning: "再次确认", example: "Double check your answers before handing in the paper." }
  ],
  "owe": [
    { phrase: "owe sb. money", meaning: "欠某人钱", example: "I owe him twenty dollars." },
    { phrase: "owe sth. to sb.", meaning: "把…归功于某人", example: "I owe my success to my parents." }
  ],
  "parking": [
    { phrase: "parking lot", meaning: "停车场", example: "The parking lot is full." },
    { phrase: "parking space", meaning: "停车位", example: "I can't find a parking space." },
    { phrase: "no parking", meaning: "禁止停车", example: "There's a no parking sign here." }
  ],
  "signature": [
    { phrase: "put one's signature", meaning: "签名", example: "Please put your signature here." },
    { phrase: "signature dish", meaning: "招牌菜", example: "The roast duck is the restaurant's signature dish." }
  ],
  "stall": [
    { phrase: "market stall", meaning: "市场摊位", example: "She runs a market stall selling flowers." },
    { phrase: "book stall", meaning: "书摊", example: "I found a rare book at a book stall." }
  ],
  "buyer": [
    { phrase: "first-time buyer", meaning: "首次购房者", example: "The government helps first-time buyers." },
    { phrase: "potential buyer", meaning: "潜在买家", example: "Several potential buyers visited the house." }
  ],
  "unfit": [
    { phrase: "unfit for", meaning: "不适合…", example: "The building was declared unfit for use." },
    { phrase: "physically unfit", meaning: "身体不健康", example: "He became physically unfit after years of no exercise." }
  ],
  "quietly": [
    { phrase: "speak quietly", meaning: "轻声说话", example: "Please speak quietly in the library." },
    { phrase: "sit quietly", meaning: "安静地坐着", example: "The children sat quietly during the concert." }
  ],
  "kilogramme": [
    { phrase: "a kilogramme of", meaning: "一公斤…", example: "I'd like a kilogramme of apples, please." }
  ],
  "pence": [
    { phrase: "fifty pence", meaning: "五十便士", example: "The bus fare is fifty pence." }
  ],
  "nightlife": [
    { phrase: "enjoy the nightlife", meaning: "享受夜生活", example: "Tourists come here to enjoy the nightlife." },
    { phrase: "vibrant nightlife", meaning: "丰富多彩的夜生活", example: "The city is famous for its vibrant nightlife." }
  ],
  "torch": [
    { phrase: "shine a torch", meaning: "照手电筒", example: "She shone a torch into the dark room." },
    { phrase: "carry a torch", meaning: "拿着手电筒", example: "He carried a torch to find his way through the cave." }
  ],
  "bar": [
    { phrase: "go to a bar", meaning: "去酒吧", example: "Let's go to a bar after work." },
    { phrase: "a bar of chocolate", meaning: "一条巧克力", example: "She bought a bar of chocolate from the shop." },
    { phrase: "behind bars", meaning: "在监狱里", example: "The thief was put behind bars for two years." }
  ],
  "behaviour": [
    { phrase: "good behaviour", meaning: "良好行为", example: "The teacher praised the students for their good behaviour." },
    { phrase: "bad behaviour", meaning: "不良行为", example: "Bad behaviour in class will not be tolerated." },
    { phrase: "change one's behaviour", meaning: "改变行为", example: "He promised to change his behaviour after the warning." }
  ],
  "cathedral": [
    { phrase: "visit a cathedral", meaning: "参观大教堂", example: "We visited a beautiful cathedral in the old town." },
    { phrase: "ancient cathedral", meaning: "古老的大教堂", example: "The ancient cathedral dates back to the 12th century." }
  ],
  "grateful": [
    { phrase: "be grateful for", meaning: "对…感激", example: "I'm grateful for your help with the project." },
    { phrase: "be grateful to someone", meaning: "感激某人", example: "She was grateful to her teacher for the advice." },
    { phrase: "deeply grateful", meaning: "深深感激", example: "We are deeply grateful for your generous donation." }
  ],
  "historical": [
    { phrase: "historical event", meaning: "历史事件", example: "The teacher explained the most important historical events." },
    { phrase: "historical site", meaning: "历史遗迹", example: "This historical site attracts thousands of visitors each year." },
    { phrase: "of historical importance", meaning: "具有历史意义的", example: "The building is of great historical importance." }
  ],
  "kitten": [
    { phrase: "a little kitten", meaning: "一只小猫", example: "The little kitten was playing with a ball of wool." },
    { phrase: "adopt a kitten", meaning: "领养一只小猫", example: "We decided to adopt a kitten from the shelter." }
  ],
  "mood": [
    { phrase: "in a good mood", meaning: "心情好", example: "She's always in a good mood on Fridays." },
    { phrase: "in a bad mood", meaning: "心情不好", example: "Don't talk to him — he's in a bad mood today." },
    { phrase: "change someone's mood", meaning: "改变某人的心情", example: "A walk in the park can change your mood." }
  ],
  "photo": [
    { phrase: "take a photo", meaning: "拍照", example: "Can you take a photo of us in front of the castle?" },
    { phrase: "post a photo", meaning: "发布照片", example: "She posted a photo of her holiday on social media." }
  ],
  "reader": [
    { phrase: "keen reader", meaning: "热心读者", example: "He's been a keen reader since childhood." },
    { phrase: "slow reader", meaning: "阅读速度慢的人", example: "Don't worry if you're a slow reader — take your time." }
  ],
  "relation": [
    { phrase: "in relation to", meaning: "关于；与…有关", example: "I have a question in relation to the homework." },
    { phrase: "close relation", meaning: "近亲", example: "She is a close relation of mine." },
    { phrase: "bear no relation to", meaning: "与…无关", example: "The film bears no relation to the original book." }
  ],
  "routine": [
    { phrase: "daily routine", meaning: "日常惯例", example: "Exercise is part of my daily routine." },
    { phrase: "morning routine", meaning: "早晨惯例", example: "Her morning routine includes yoga and breakfast." },
    { phrase: "break the routine", meaning: "打破常规", example: "Let's break the routine and try something new today." }
  ],
  "silence": [
    { phrase: "in silence", meaning: "沉默地", example: "They sat in silence, waiting for the results." },
    { phrase: "break the silence", meaning: "打破沉默", example: "Nobody wanted to break the silence." },
    { phrase: "complete silence", meaning: "完全安静", example: "The exam was held in complete silence." }
  ],
  "silent": [
    { phrase: "remain silent", meaning: "保持沉默", example: "He remained silent during the whole meeting." },
    { phrase: "fall silent", meaning: "安静下来", example: "The crowd fell silent when the speaker began." },
    { phrase: "silent film", meaning: "无声电影", example: "Charlie Chaplin was famous for his silent films." }
  ],
  "soundtrack": [
    { phrase: "film soundtrack", meaning: "电影配乐", example: "The film soundtrack was composed by a famous musician." },
    { phrase: "listen to the soundtrack", meaning: "听配乐", example: "I love listening to the soundtrack of that movie." }
  ],
  "statue": [
    { phrase: "a statue of", meaning: "…的雕像", example: "There is a statue of a lion in the town square." },
    { phrase: "bronze statue", meaning: "铜像", example: "The bronze statue has stood there for over a hundred years." }
  ],
  "tear": [
    { phrase: "burst into tears", meaning: "突然大哭", example: "She burst into tears when she heard the sad news." },
    { phrase: "in tears", meaning: "流着泪", example: "He was in tears after losing the match." },
    { phrase: "tear apart", meaning: "撕碎", example: "The dog tore the newspaper apart." }
  ],
  "uninteresting": [
    { phrase: "find something uninteresting", meaning: "觉得某事无趣", example: "Most students found the lecture uninteresting." },
    { phrase: "rather uninteresting", meaning: "相当无趣", example: "The book was rather uninteresting, so I stopped reading." }
  ],
  "ballet": [
    { phrase: "ballet dancer", meaning: "芭蕾舞演员", example: "She dreams of becoming a professional ballet dancer." },
    { phrase: "go to the ballet", meaning: "去看芭蕾", example: "We went to the ballet last Saturday evening." }
  ],
  "amount": [
    { phrase: "a large amount of", meaning: "大量的", example: "A large amount of money was spent on the project." },
    { phrase: "a small amount of", meaning: "少量的", example: "Add a small amount of salt to the soup." },
    { phrase: "the total amount", meaning: "总量", example: "The total amount came to fifty pounds." }
  ],
  "subtract": [
    { phrase: "subtract from", meaning: "从…中减去", example: "Subtract 5 from 12 and you get 7." },
    { phrase: "subtract the cost", meaning: "扣除费用", example: "They will subtract the cost of delivery from your refund." }
  ],
  "rider": [
    { phrase: "horse rider", meaning: "骑马者", example: "The horse rider won first place in the competition." },
    { phrase: "experienced rider", meaning: "有经验的骑手", example: "Only experienced riders should try this trail." }
  ],
  "by hand": [
    { phrase: "made by hand", meaning: "手工制作的", example: "This scarf was made by hand using local wool." },
    { phrase: "write by hand", meaning: "手写", example: "Please write the letter by hand, not on a computer." }
  ],
  "skill": [
    { phrase: "learn a skill", meaning: "学习技能", example: "It's never too late to learn a new skill." },
    { phrase: "communication skills", meaning: "沟通技巧", example: "Good communication skills are important for any job." },
    { phrase: "basic skills", meaning: "基本技能", example: "Reading and writing are basic skills for every child." }
  ],
  "tense": [
    { phrase: "past tense", meaning: "过去时", example: "The past tense of 'go' is 'went'." },
    { phrase: "present tense", meaning: "现在时", example: "Write the sentence in the present tense." }
  ],
  "notepaper": [
    { phrase: "a sheet of notepaper", meaning: "一张信纸", example: "She took a sheet of notepaper and began to write." },
    { phrase: "write on notepaper", meaning: "在信纸上写", example: "He wrote the letter on fine notepaper." }
  ],
  "dancing": [
    { phrase: "go dancing", meaning: "去跳舞", example: "We go dancing every Friday night." },
    { phrase: "dancing class", meaning: "舞蹈课", example: "She signed up for a dancing class at the community centre." }
  ],
  "curious": [
    { phrase: "be curious about", meaning: "对…好奇", example: "Children are always curious about the world around them." },
    { phrase: "curious to know", meaning: "想知道", example: "I'm curious to know what happened at the meeting." }
  ],
  "original": [
    { phrase: "the original plan", meaning: "最初的计划", example: "We had to change the original plan because of the rain." },
    { phrase: "original idea", meaning: "独创的想法", example: "She always comes up with original ideas for the school project." }
  ],
  "positive": [
    { phrase: "positive attitude", meaning: "积极的态度", example: "A positive attitude can help you overcome difficulties." },
    { phrase: "positive feedback", meaning: "正面反馈", example: "The teacher gave positive feedback on my essay." }
  ],
  "election": [
    { phrase: "win an election", meaning: "赢得选举", example: "She won the election and became class president." },
    { phrase: "hold an election", meaning: "举行选举", example: "The school will hold an election for the student council next week." }
  ],
  "ending": [
    { phrase: "happy ending", meaning: "圆满结局", example: "Most fairy tales have a happy ending." },
    { phrase: "surprise ending", meaning: "出人意料的结局", example: "The film had a surprise ending that nobody expected." }
  ],
  "end up": [
    { phrase: "end up doing", meaning: "最终做了", example: "We ended up staying at home because of the storm." },
    { phrase: "end up with", meaning: "最终得到", example: "If you don't study, you'll end up with bad grades." }
  ],
  "enemy": [
    { phrase: "make enemies", meaning: "树敌", example: "He made many enemies because of his rude behaviour." },
    { phrase: "natural enemy", meaning: "天敌", example: "The cat is the natural enemy of the mouse." }
  ],
  "hidden": [
    { phrase: "hidden meaning", meaning: "隐含的意思", example: "There is a hidden meaning behind his words." },
    { phrase: "hidden treasure", meaning: "隐藏的宝藏", example: "The children went looking for hidden treasure in the garden." }
  ],
  "religion": [
    { phrase: "freedom of religion", meaning: "宗教自由", example: "Everyone has the right to freedom of religion." },
    { phrase: "practise a religion", meaning: "信仰宗教", example: "Many people in this area practise the same religion." }
  ],
  "annoy": [
    { phrase: "be annoyed with", meaning: "对…生气", example: "She was annoyed with her brother for breaking her phone." },
    { phrase: "be annoyed at/about", meaning: "因…恼怒", example: "He was annoyed about the delay of the flight." }
  ],
  "shocked": [
    { phrase: "be shocked by", meaning: "被…震惊", example: "We were shocked by the sudden change in weather." },
    { phrase: "deeply shocked", meaning: "深感震惊", example: "The whole school was deeply shocked by the accident." }
  ],
  "shocking": [
    { phrase: "shocking news", meaning: "令人震惊的消息", example: "The shocking news spread quickly through the town." },
    { phrase: "absolutely shocking", meaning: "极其令人震惊的", example: "The conditions in the old building were absolutely shocking." }
  ],
  "surprising": [
    { phrase: "not surprising", meaning: "不足为奇", example: "It's not surprising that she passed the exam — she studied very hard." },
    { phrase: "surprising result", meaning: "出人意料的结果", example: "The match had a surprising result that nobody predicted." }
  ],
  "anniversary": [
    { phrase: "wedding anniversary", meaning: "结婚纪念日", example: "My parents celebrated their 25th wedding anniversary last month." },
    { phrase: "on the anniversary of", meaning: "在…周年纪念日", example: "A ceremony was held on the anniversary of the school's founding." }
  ],
  "attraction": [
    { phrase: "tourist attraction", meaning: "旅游景点", example: "The Great Wall is one of China's most famous tourist attractions." },
    { phrase: "main attraction", meaning: "主要吸引力", example: "The main attraction of the festival is the fireworks show." }
  ],
  "brief": [
    { phrase: "in brief", meaning: "简言之", example: "In brief, we need to finish the project by Friday." },
    { phrase: "a brief introduction", meaning: "简短的介绍", example: "The teacher gave a brief introduction to the new topic." }
  ],
  "comma": [
    { phrase: "put a comma", meaning: "加逗号", example: "Put a comma between the two clauses." },
    { phrase: "comma splice", meaning: "逗号拼接（语法错误）", example: "Avoid using a comma splice in your writing." }
  ],
  "comment": [
    { phrase: "make a comment", meaning: "发表评论", example: "He made a comment about the quality of the food." },
    { phrase: "no comment", meaning: "无可奉告", example: "When asked about the incident, she said 'no comment'." }
  ],
  "consist": [
    { phrase: "consist of", meaning: "由…组成", example: "The class consists of 30 students from different countries." },
    { phrase: "consist in", meaning: "在于", example: "True happiness consists in being content with what you have." }
  ],
  "dull": [
    { phrase: "dull day", meaning: "沉闷的一天", example: "It was a dull day with grey clouds and no sunshine." },
    { phrase: "never a dull moment", meaning: "从不无聊", example: "With three children at home, there's never a dull moment." }
  ],
  "convenient": [
    { phrase: "convenient for", meaning: "对…方便", example: "The hotel is convenient for the train station." },
    { phrase: "at a convenient time", meaning: "在方便的时候", example: "Please call me back at a convenient time." }
  ],
  "cross out": [
    { phrase: "cross out a word", meaning: "划掉一个词", example: "Cross out the wrong answer and write the correct one." },
    { phrase: "cross out a mistake", meaning: "划掉错误", example: "She crossed out the mistake and rewrote the sentence." }
  ],
  "correction": [
    { phrase: "make a correction", meaning: "做出更正", example: "The teacher made several corrections to my homework." },
    { phrase: "correction fluid", meaning: "修正液", example: "Use correction fluid to cover the mistake." }
  ],
  "court": [
    { phrase: "go to court", meaning: "上法庭", example: "The case will go to court next month." },
    { phrase: "tennis court", meaning: "网球场", example: "We booked a tennis court for Saturday afternoon." },
    { phrase: "basketball court", meaning: "篮球场", example: "The boys are playing on the basketball court." }
  ],
  "contents": [
    { phrase: "table of contents", meaning: "目录", example: "Check the table of contents to find the right chapter." },
    { phrase: "the contents of", meaning: "…的内容", example: "She emptied the contents of her bag onto the table." }
  ],
  "vote": [
    { phrase: "vote for", meaning: "投票支持", example: "Most students voted for the new school uniform design." },
    { phrase: "vote against", meaning: "投票反对", example: "Several members voted against the proposal." }
  ],
  "up to": [
    { phrase: "up to now", meaning: "到目前为止", example: "Up to now, we have collected over 200 books for the library." },
    { phrase: "up to 50", meaning: "多达50", example: "The bus can carry up to 50 passengers." }
  ],
  "up to date": [
    { phrase: "keep up to date", meaning: "保持最新", example: "It's important to keep your computer software up to date." },
    { phrase: "up-to-date information", meaning: "最新信息", example: "The website provides up-to-date information about the weather." }
  ],
  "elderly": [
    { phrase: "elderly people", meaning: "老年人", example: "We should always be kind and helpful to elderly people." },
    { phrase: "care for the elderly", meaning: "照顾老人", example: "The community centre offers services to care for the elderly." }
  ],
  "doubt": [
    { phrase: "no doubt", meaning: "毫无疑问", example: "No doubt she will pass the exam — she's very clever." },
    { phrase: "without doubt", meaning: "毫无疑问地", example: "He is without doubt the best player on the team." },
    { phrase: "have doubts about", meaning: "对…有疑虑", example: "I have doubts about whether this plan will work." }
  ],
  "lip": [
    { phrase: "bite one's lip", meaning: "咬嘴唇", example: "She bit her lip to stop herself from crying." },
    { phrase: "upper/lower lip", meaning: "上/下嘴唇", example: "He had a small cut on his lower lip." }
  ],
  "typically": [
    { phrase: "typically British", meaning: "典型的英国式", example: "Fish and chips is a typically British meal." },
    { phrase: "typically last", meaning: "通常持续", example: "The lessons typically last about 45 minutes." }
  ],
  "shiny": [
    { phrase: "shiny new", meaning: "崭新发亮的", example: "He was proud of his shiny new bicycle." },
    { phrase: "bright and shiny", meaning: "明亮闪耀的", example: "The coins were bright and shiny." }
  ],
  "background": [
    { phrase: "family background", meaning: "家庭背景", example: "Students come from different family backgrounds." },
    { phrase: "in the background", meaning: "在背景中", example: "You can hear music playing in the background." }
  ],
  "cardboard": [
    { phrase: "cardboard box", meaning: "纸板箱", example: "We packed the books into a cardboard box." },
    { phrase: "a piece of cardboard", meaning: "一块硬纸板", example: "She drew a picture on a piece of cardboard." }
  ],
  "until": [
    { phrase: "not until", meaning: "直到…才", example: "I didn't go to bed until midnight." },
    { phrase: "until now", meaning: "直到现在", example: "Until now, nobody has found the answer." }
  ],
  "arrangement": [
    { phrase: "make arrangements", meaning: "做安排", example: "We need to make arrangements for the school trip." },
    { phrase: "travel arrangements", meaning: "旅行安排", example: "Have you finished the travel arrangements yet?" }
  ],
  "burn": [
    { phrase: "burn down", meaning: "烧毁", example: "The old factory burned down last night." },
    { phrase: "get burned", meaning: "被烧伤", example: "Be careful not to get burned by the hot water." }
  ],
  "burning": [
    { phrase: "burning hot", meaning: "灼热的", example: "The sand was burning hot under the summer sun." },
    { phrase: "burning question", meaning: "急切的问题", example: "The burning question is how to reduce pollution." }
  ],
  "initial": [
    { phrase: "initial stage", meaning: "初始阶段", example: "The project is still in its initial stage." },
    { phrase: "write your initials", meaning: "写上你的首字母", example: "Please write your initials at the top of the form." }
  ],
  "eastern": [
    { phrase: "eastern part", meaning: "东部地区", example: "The eastern part of the country gets more rain." },
    { phrase: "Eastern Europe", meaning: "东欧", example: "She travelled through Eastern Europe last summer." }
  ],
  "western": [
    { phrase: "western culture", meaning: "西方文化", example: "Western culture has influenced many countries around the world." },
    { phrase: "western part", meaning: "西部地区", example: "The western part of the island has beautiful beaches." }
  ],
  "urgent": [
    { phrase: "urgent message", meaning: "紧急消息", example: "There's an urgent message for you from the hospital." },
    { phrase: "urgent need", meaning: "迫切需要", example: "There is an urgent need for more doctors in rural areas." }
  ],
  "valuable": [
    { phrase: "valuable experience", meaning: "宝贵的经验", example: "Working abroad was a valuable experience for her." },
    { phrase: "valuable information", meaning: "有价值的信息", example: "The police received valuable information from a witness." }
  ],
  "version": [
    { phrase: "latest version", meaning: "最新版本", example: "Please download the latest version of the software." },
    { phrase: "original version", meaning: "原始版本", example: "I prefer the original version of the song." }
  ],
  "unwell": [
    { phrase: "feel unwell", meaning: "感到不舒服", example: "If you feel unwell, you should see a doctor." },
    { phrase: "look unwell", meaning: "看起来不舒服", example: "You look unwell — maybe you should go home and rest." }
  ],
  "update": [
    { phrase: "software update", meaning: "软件更新", example: "A new software update is available for your phone." },
    { phrase: "keep someone updated", meaning: "让某人了解最新情况", example: "Please keep me updated on the progress of the project." }
  ],
  "gap": [
    { phrase: "gap year", meaning: "间隔年", example: "Many students take a gap year before going to university." },
    { phrase: "bridge the gap", meaning: "弥合差距", example: "Education can help bridge the gap between rich and poor." }
  ],
  "introduction": [
    { phrase: "give an introduction", meaning: "做介绍", example: "The guide gave a brief introduction to the museum." },
    { phrase: "letter of introduction", meaning: "介绍信", example: "He brought a letter of introduction from his professor." }
  ],
  "ironing": [
    { phrase: "do the ironing", meaning: "熨衣服", example: "I usually do the ironing on Sunday evenings." },
    { phrase: "ironing board", meaning: "熨衣板", example: "Put the shirt on the ironing board." }
  ],
  "perfectly": [
    { phrase: "perfectly fine", meaning: "完全没问题", example: "Don't worry — everything is perfectly fine." },
    { phrase: "perfectly clear", meaning: "非常清楚", example: "The teacher made the instructions perfectly clear." }
  ],
  "plain": [
    { phrase: "plain language", meaning: "简明的语言", example: "Please explain it in plain language." },
    { phrase: "plain clothes", meaning: "便衣", example: "The detective was wearing plain clothes." }
  ],
  "type": [
    { phrase: "type of", meaning: "…的类型", example: "What type of music do you like?" },
    { phrase: "blood type", meaning: "血型", example: "Do you know your blood type?" }
  ],
  "slightly": [
    { phrase: "slightly different", meaning: "略有不同", example: "The two paintings are slightly different in colour." },
    { phrase: "slightly better", meaning: "稍好一些", example: "I feel slightly better today than yesterday." }
  ],
  "measure": [
    { phrase: "take measures", meaning: "采取措施", example: "The government took measures to protect the environment." },
    { phrase: "measure the distance", meaning: "测量距离", example: "We used a ruler to measure the distance between the two points." }
  ],
  "depend on/upon": [
    { phrase: "depend on someone", meaning: "依靠某人", example: "Young children depend on their parents for everything." },
    { phrase: "it depends", meaning: "视情况而定", example: "Are you coming to the party? — It depends." }
  ],
  "give back": [
    { phrase: "give it back", meaning: "把它还回来", example: "That's my pen — please give it back." },
    { phrase: "give back to the community", meaning: "回馈社区", example: "She wants to give back to the community by volunteering." }
  ],
  "in half": [
    { phrase: "cut in half", meaning: "切成两半", example: "Cut the sandwich in half so we can share it." },
    { phrase: "break in half", meaning: "折成两半", example: "The stick broke in half when I stepped on it." }
  ],
  "in two": [
    { phrase: "cut in two", meaning: "切成两段", example: "She cut the rope in two with a pair of scissors." },
    { phrase: "break in two", meaning: "断成两截", example: "The branch broke in two during the strong wind." }
  ],
  "babysitter": [
    { phrase: "hire a babysitter", meaning: "雇保姆", example: "We need to hire a babysitter for Saturday night." },
    { phrase: "find a babysitter", meaning: "找保姆", example: "It's hard to find a good babysitter at short notice." }
  ],
  "housework": [
    { phrase: "do the housework", meaning: "做家务", example: "Everyone in the family should help do the housework." },
    { phrase: "share the housework", meaning: "分担家务", example: "My parents share the housework equally." }
  ],
  "butcher": [
    { phrase: "the local butcher", meaning: "当地的肉贩", example: "We always buy our meat from the local butcher." }
  ],
  "butcher's": [
    { phrase: "go to the butcher's", meaning: "去肉店", example: "I need to go to the butcher's to buy some chicken." }
  ],
  "officer": [
    { phrase: "police officer", meaning: "警官", example: "The police officer asked to see my driving licence." },
    { phrase: "customs officer", meaning: "海关官员", example: "The customs officer checked our passports at the border." }
  ],
  "poet": [
    { phrase: "famous poet", meaning: "著名诗人", example: "Shakespeare is one of the most famous poets in history." },
    { phrase: "romantic poet", meaning: "浪漫主义诗人", example: "Keats was a great romantic poet." }
  ],
  "policewoman": [
    { phrase: "a policewoman on duty", meaning: "值班女警", example: "A policewoman on duty helped direct the traffic." }
  ],
  "politician": [
    { phrase: "local politician", meaning: "当地政治家", example: "The local politician visited our school last week." },
    { phrase: "experienced politician", meaning: "经验丰富的政治家", example: "She is an experienced politician who has served for 20 years." }
  ],
  "president": [
    { phrase: "class president", meaning: "班长", example: "She was elected class president by her classmates." },
    { phrase: "president of the company", meaning: "公司总裁", example: "The president of the company gave a speech at the meeting." }
  ],
  "salesassistant": [
    { phrase: "ask the sales assistant", meaning: "问销售助理", example: "If you can't find it, ask the sales assistant for help." }
  ],
  "travel agent": [
    { phrase: "book through a travel agent", meaning: "通过旅行社预订", example: "We booked our holiday through a travel agent." }
  ],
  "wage": [
    { phrase: "minimum wage", meaning: "最低工资", example: "The government raised the minimum wage this year." },
    { phrase: "earn a wage", meaning: "挣工资", example: "He earns a good wage working at the factory." }
  ],
  "banking": [
    { phrase: "online banking", meaning: "网上银行", example: "Most people use online banking to pay their bills." },
    { phrase: "banking industry", meaning: "银行业", example: "The banking industry has changed a lot in recent years." }
  ],
  "hairdryer": [
    { phrase: "use a hairdryer", meaning: "用吹风机", example: "She uses a hairdryer every morning after washing her hair." }
  ],
  "keeper": [
    { phrase: "zookeeper", meaning: "动物园管理员", example: "The zookeeper feeds the animals twice a day." },
    { phrase: "goalkeeper", meaning: "守门员", example: "The goalkeeper made a brilliant save." }
  ],
  "section": [
    { phrase: "in this section", meaning: "在这个部分", example: "In this section, we will learn about grammar." },
    { phrase: "sports section", meaning: "体育版", example: "I always read the sports section of the newspaper first." }
  ],
  "spy": [
    { phrase: "spy on", meaning: "暗中监视", example: "The children were spying on their neighbours through the fence." },
    { phrase: "spy film", meaning: "间谍电影", example: "James Bond is the most famous character in spy films." }
  ],
  "toward": [
    { phrase: "walk toward", meaning: "朝…走去", example: "She walked toward the door and opened it." },
    { phrase: "attitude toward", meaning: "对…的态度", example: "His attitude toward school has improved a lot." }
  ],
  "transfer": [
    { phrase: "transfer to", meaning: "转到", example: "She transferred to a new school last month." },
    { phrase: "bank transfer", meaning: "银行转账", example: "You can pay by bank transfer." }
  ],
  "unemployment": [
    { phrase: "unemployment rate", meaning: "失业率", example: "The unemployment rate has fallen to 5% this year." },
    { phrase: "high unemployment", meaning: "高失业率", example: "The area suffers from high unemployment." }
  ],
  "out of work": [
    { phrase: "be out of work", meaning: "失业", example: "Many people were out of work after the factory closed." }
  ],
  "alike": [
    { phrase: "look alike", meaning: "看起来相似", example: "The twins look so alike that I can't tell them apart." },
    { phrase: "think alike", meaning: "想法相似", example: "Great minds think alike." }
  ],
  "moustache": [
    { phrase: "grow a moustache", meaning: "留胡子", example: "He decided to grow a moustache for the first time." },
    { phrase: "thick moustache", meaning: "浓密的胡子", example: "The man with the thick moustache sat in the corner." }
  ],
  "union": [
    { phrase: "trade union", meaning: "工会", example: "The workers joined a trade union to protect their rights." },
    { phrase: "European Union", meaning: "欧盟", example: "The European Union was founded to promote peace in Europe." }
  ],
  "astronaut": [
    { phrase: "become an astronaut", meaning: "成为宇航员", example: "Her dream is to become an astronaut and travel to space." }
  ],
  "architect": [
    { phrase: "famous architect", meaning: "著名建筑师", example: "The museum was designed by a famous architect." }
  ],
  "architecture": [
    { phrase: "modern architecture", meaning: "现代建筑", example: "The city is known for its modern architecture." },
    { phrase: "study architecture", meaning: "学建筑学", example: "She went to university to study architecture." }
  ],
  "army": [
    { phrase: "join the army", meaning: "参军", example: "He joined the army when he was eighteen." },
    { phrase: "army officer", meaning: "军官", example: "His father was an army officer." }
  ],
  "airforce": [
    { phrase: "join the air force", meaning: "加入空军", example: "She joined the air force after finishing university." },
    { phrase: "air force base", meaning: "空军基地", example: "There is an air force base near our town." }
  ],
  "well-dressed": [
    { phrase: "well-dressed man/woman", meaning: "衣着讲究的男/女士", example: "A well-dressed woman entered the restaurant." }
  ],
  "unless": [
    { phrase: "unless you", meaning: "除非你", example: "You'll be late unless you leave now." },
    { phrase: "not unless", meaning: "除非…否则不", example: "I won't go to the party, not unless you come with me." }
  ],
  "honestly": [
    { phrase: "honestly speaking", meaning: "老实说", example: "Honestly speaking, I don't think this plan will work." },
    { phrase: "answer honestly", meaning: "诚实地回答", example: "Please answer the questions honestly." }
  ],
  "CV": [
    { phrase: "send a CV", meaning: "发送简历", example: "She sent her CV to several companies." },
    { phrase: "update your CV", meaning: "更新简历", example: "You should update your CV before applying for the job." }
  ],
  "gun": [
    { phrase: "toy gun", meaning: "玩具枪", example: "The boy was playing with a toy gun in the garden." },
    { phrase: "water gun", meaning: "水枪", example: "The children had fun with water guns on a hot day." }
  ],
  "disc": [
    { phrase: "disc jockey", meaning: "唱片骑师；DJ", example: "The disc jockey played great music at the party." },
    { phrase: "compact disc", meaning: "光盘；CD", example: "I still have a collection of compact discs at home." }
  ],
  "DJ": [
    { phrase: "DJ set", meaning: "DJ表演", example: "The DJ set lasted for two hours at the festival." },
    { phrase: "guest DJ", meaning: "客座DJ", example: "A famous guest DJ performed at the club last night." }
  ],
  "poem": [
    { phrase: "write a poem", meaning: "写诗", example: "She wrote a poem about the beauty of nature." },
    { phrase: "love poem", meaning: "情诗", example: "He read a love poem to her on Valentine's Day." },
    { phrase: "recite a poem", meaning: "朗诵诗歌", example: "The student recited a poem in front of the class." }
  ],
  "presenter": [
    { phrase: "TV presenter", meaning: "电视主持人", example: "She works as a TV presenter for a morning show." },
    { phrase: "news presenter", meaning: "新闻主播", example: "The news presenter reported on the latest events." }
  ],
  "romantic": [
    { phrase: "romantic film", meaning: "爱情电影", example: "They watched a romantic film together on Friday night." },
    { phrase: "romantic dinner", meaning: "浪漫晚餐", example: "He planned a romantic dinner for their anniversary." },
    { phrase: "romantic relationship", meaning: "恋爱关系", example: "They have been in a romantic relationship for two years." }
  ],
  "selfie": [
    { phrase: "take a selfie", meaning: "自拍", example: "Let's take a selfie in front of the castle." },
    { phrase: "selfie stick", meaning: "自拍杆", example: "She used a selfie stick to get everyone in the photo." }
  ],
  "thriller": [
    { phrase: "psychological thriller", meaning: "心理惊悚片", example: "This psychological thriller kept me on the edge of my seat." },
    { phrase: "crime thriller", meaning: "犯罪惊悚片", example: "The crime thriller was based on a true story." }
  ],
  "addition": [
    { phrase: "in addition", meaning: "此外", example: "In addition, we need to buy some drinks for the party." },
    { phrase: "in addition to", meaning: "除…之外还", example: "In addition to English, she also speaks French." },
    { phrase: "a welcome addition", meaning: "受欢迎的新成员", example: "The new teacher is a welcome addition to the school." }
  ],
  "divide": [
    { phrase: "divide into", meaning: "分成", example: "The teacher divided the class into four groups." },
    { phrase: "divide up", meaning: "分配；瓜分", example: "They divided up the pizza equally among themselves." },
    { phrase: "divide by", meaning: "除以", example: "If you divide 20 by 4, you get 5." }
  ],
  "lottery": [
    { phrase: "win the lottery", meaning: "中彩票", example: "He dreamed of winning the lottery one day." },
    { phrase: "lottery ticket", meaning: "彩票", example: "She bought a lottery ticket every week." }
  ],
  "nightclub": [
    { phrase: "go to a nightclub", meaning: "去夜店", example: "They went to a nightclub to celebrate his birthday." },
    { phrase: "nightclub owner", meaning: "夜店老板", example: "The nightclub owner hired a famous DJ for the weekend." }
  ],
  "permission": [
    { phrase: "ask for permission", meaning: "请求许可", example: "You should ask for permission before using someone's phone." },
    { phrase: "give permission", meaning: "给予许可", example: "The teacher gave permission for the students to leave early." },
    { phrase: "without permission", meaning: "未经许可", example: "He took the car without permission." }
  ],
  "permit": [
    { phrase: "parking permit", meaning: "停车许可证", example: "You need a parking permit to park in this area." },
    { phrase: "work permit", meaning: "工作许可证", example: "She applied for a work permit to work abroad." },
    { phrase: "permit sb to do sth", meaning: "允许某人做某事", example: "The rules do not permit students to use phones in class." }
  ],
  "separate": [
    { phrase: "separate from", meaning: "与…分开", example: "The children were separated from their parents during the trip." },
    { phrase: "keep separate", meaning: "保持分开", example: "Keep your work and personal life separate." },
    { phrase: "separate into", meaning: "分成", example: "The river separates into two branches near the village." }
  ],
  "sincerely": [
    { phrase: "yours sincerely", meaning: "您真诚的（信件结尾）", example: "She ended the letter with 'Yours sincerely'." },
    { phrase: "sincerely hope", meaning: "真诚地希望", example: "I sincerely hope you enjoy your stay here." }
  ],
  "single": [
    { phrase: "single ticket", meaning: "单程票", example: "I'd like a single ticket to London, please." },
    { phrase: "every single", meaning: "每一个", example: "She checked every single answer before handing in the test." },
    { phrase: "single room", meaning: "单人间", example: "I booked a single room at the hotel." }
  ],
  "smile": [
    { phrase: "smile at", meaning: "对…微笑", example: "She smiled at the baby in the pram." },
    { phrase: "big smile", meaning: "灿烂的笑容", example: "He greeted us with a big smile." },
    { phrase: "smile on one's face", meaning: "脸上的笑容", example: "There was a smile on her face when she heard the news." }
  ],
  "smooth": [
    { phrase: "smooth surface", meaning: "光滑的表面", example: "The table has a very smooth surface." },
    { phrase: "smooth skin", meaning: "光滑的皮肤", example: "Babies have incredibly smooth skin." },
    { phrase: "go smoothly", meaning: "进展顺利", example: "The meeting went smoothly without any problems." }
  ],
  "sociable": [
    { phrase: "sociable person", meaning: "善于社交的人", example: "Tom is a very sociable person who loves meeting new people." },
    { phrase: "sociable atmosphere", meaning: "友好的氛围", example: "The café has a warm and sociable atmosphere." }
  ],
  "soul": [
    { phrase: "soul music", meaning: "灵魂乐", example: "She loves listening to soul music from the 1960s." },
    { phrase: "heart and soul", meaning: "全心全意", example: "He put his heart and soul into the project." }
  ],
  "stress": [
    { phrase: "under stress", meaning: "在压力下", example: "People often make mistakes when they are under stress." },
    { phrase: "stress out", meaning: "使紧张焦虑", example: "Don't stress out about the exam — you'll do fine." },
    { phrase: "cause stress", meaning: "造成压力", example: "Too much homework can cause stress for students." }
  ],
  "stressful": [
    { phrase: "stressful job", meaning: "压力大的工作", example: "Being a doctor can be a very stressful job." },
    { phrase: "stressful situation", meaning: "紧张的局面", example: "She stayed calm in a stressful situation." }
  ],
  "sunbathe": [
    { phrase: "sunbathe on the beach", meaning: "在海滩上晒日光浴", example: "We spent the afternoon sunbathing on the beach." },
    { phrase: "go sunbathing", meaning: "去晒日光浴", example: "Let's go sunbathing by the pool this weekend." }
  ],
  "tune": [
    { phrase: "play a tune", meaning: "演奏一首曲子", example: "He played a beautiful tune on the piano." },
    { phrase: "in tune", meaning: "音调准确；协调", example: "Make sure your guitar is in tune before the concert." },
    { phrase: "out of tune", meaning: "走调", example: "She sang completely out of tune during the performance." }
  ],
  "trumpet": [
    { phrase: "play the trumpet", meaning: "吹小号", example: "He has been playing the trumpet since he was ten." },
    { phrase: "trumpet player", meaning: "小号手", example: "The trumpet player performed a wonderful solo." }
  ],
  "youth": [
    { phrase: "youth club", meaning: "青年俱乐部", example: "The youth club organizes activities every Saturday." },
    { phrase: "youth hostel", meaning: "青年旅舍", example: "We stayed at a youth hostel during our trip to Europe." },
    { phrase: "in one's youth", meaning: "在某人年轻时", example: "In his youth, he travelled around the world." }
  ],
  "film-maker": [
    { phrase: "independent film-maker", meaning: "独立电影制作人", example: "She is an independent film-maker who makes documentaries." },
    { phrase: "famous film-maker", meaning: "著名电影制作人", example: "The famous film-maker won several awards." }
  ],
  "jazz music": [
    { phrase: "listen to jazz music", meaning: "听爵士乐", example: "I like to listen to jazz music while I relax." },
    { phrase: "jazz music festival", meaning: "爵士音乐节", example: "The jazz music festival attracts thousands of visitors every year." }
  ],
  "get rid of": [
    { phrase: "get rid of sth", meaning: "摆脱；丢弃某物", example: "I need to get rid of these old clothes." },
    { phrase: "get rid of a habit", meaning: "改掉一个习惯", example: "He's trying to get rid of his bad habit of staying up late." }
  ],
  "hold up": [
    { phrase: "hold up one's hand", meaning: "举起手", example: "Hold up your hand if you know the answer." },
    { phrase: "hold up traffic", meaning: "阻碍交通", example: "The accident held up traffic for over an hour." }
  ],
  "make sure": [
    { phrase: "make sure of", meaning: "确保", example: "Make sure of the time before you leave for the airport." },
    { phrase: "make sure that", meaning: "确保…", example: "Make sure that you lock the door when you go out." }
  ],
  "announcement": [
    { phrase: "make an announcement", meaning: "发布公告", example: "The headteacher made an announcement about the school trip." },
    { phrase: "public announcement", meaning: "公开声明", example: "The company issued a public announcement about the new product." }
  ],
  "by land": [
    { phrase: "travel by land", meaning: "陆路旅行", example: "It takes longer to travel by land than by air." },
    { phrase: "by land and sea", meaning: "水陆并进", example: "The goods were transported by land and sea." }
  ],
  "car alarm": [
    { phrase: "set off a car alarm", meaning: "触发汽车报警器", example: "The cat jumped on the car and set off the car alarm." },
    { phrase: "car alarm system", meaning: "汽车报警系统", example: "This car alarm system can be controlled by your phone." }
  ],
  "check out": [
    { phrase: "check out of", meaning: "从…退房", example: "We checked out of the hotel at 10 a.m." },
    { phrase: "check out time", meaning: "退房时间", example: "The check out time is 12 noon." }
  ],
  "currency": [
    { phrase: "foreign currency", meaning: "外币", example: "You can buy foreign currency at the bank." },
    { phrase: "local currency", meaning: "当地货币", example: "You should pay in the local currency when travelling abroad." }
  ],
  "customs": [
    { phrase: "go through customs", meaning: "过海关", example: "We had to go through customs when we arrived at the airport." },
    { phrase: "customs officer", meaning: "海关官员", example: "The customs officer checked our passports and bags." }
  ],
  "depart": [
    { phrase: "depart from", meaning: "从…出发", example: "The flight departs from Gate 12 at 3 p.m." },
    { phrase: "depart for", meaning: "出发前往", example: "We will depart for Paris early tomorrow morning." }
  ],
  "double room": [
    { phrase: "book a double room", meaning: "预订双人间", example: "I'd like to book a double room for three nights." },
    { phrase: "double room with a view", meaning: "有景观的双人间", example: "We requested a double room with a view of the sea." }
  ],
  "exchange rate": [
    { phrase: "current exchange rate", meaning: "当前汇率", example: "What is the current exchange rate for US dollars?" },
    { phrase: "exchange rate fluctuation", meaning: "汇率波动", example: "Exchange rate fluctuations can affect the cost of your holiday." }
  ],
  "fare": [
    { phrase: "bus fare", meaning: "公交车费", example: "The bus fare is two pounds for a single journey." },
    { phrase: "air fare", meaning: "机票价格", example: "Air fares are usually cheaper if you book early." },
    { phrase: "pay the fare", meaning: "付车费", example: "You need to pay the fare when you get on the bus." }
  ],
  "ferry": [
    { phrase: "take a ferry", meaning: "乘渡轮", example: "We took a ferry from Dover to Calais." },
    { phrase: "ferry service", meaning: "渡轮服务", example: "The ferry service runs every hour during the summer." }
  ],
  "handlebar": [
    { phrase: "hold the handlebars", meaning: "握住车把", example: "Always hold the handlebars with both hands when cycling." },
    { phrase: "handlebar grips", meaning: "车把握套", example: "I need to replace the handlebar grips on my bicycle." }
  ],
  "immigration": [
    { phrase: "immigration control", meaning: "入境检查", example: "There was a long queue at immigration control." },
    { phrase: "immigration officer", meaning: "移民官员", example: "The immigration officer asked to see my visa." }
  ],
  "reservation": [
    { phrase: "make a reservation", meaning: "预订", example: "I'd like to make a reservation for dinner tonight." },
    { phrase: "hotel reservation", meaning: "酒店预订", example: "Don't forget to confirm your hotel reservation before you travel." },
    { phrase: "cancel a reservation", meaning: "取消预订", example: "She had to cancel her reservation because of illness." }
  ],
  "monument": [
    { phrase: "historical monument", meaning: "历史纪念碑", example: "The city is full of historical monuments from the Roman period." },
    { phrase: "war monument", meaning: "战争纪念碑", example: "They laid flowers at the war monument." }
  ],
  "enquire": [
    { phrase: "enquire about", meaning: "询问关于", example: "I called to enquire about the train times." },
    { phrase: "enquire into", meaning: "调查", example: "The police are enquiring into the cause of the accident." }
  ],
  "enquiry": [
    { phrase: "make an enquiry", meaning: "进行询问", example: "She made an enquiry about the price of the tickets." },
    { phrase: "enquiry desk", meaning: "问询处", example: "You can get a map at the enquiry desk." }
  ],
  "hostel": [
    { phrase: "youth hostel", meaning: "青年旅舍", example: "We stayed at a youth hostel to save money." },
    { phrase: "hostel accommodation", meaning: "旅舍住宿", example: "Hostel accommodation is much cheaper than a hotel." }
  ],
  "hurry": [
    { phrase: "in a hurry", meaning: "匆忙地", example: "I can't talk now — I'm in a hurry." },
    { phrase: "hurry up", meaning: "快点", example: "Hurry up or we'll miss the bus!" },
    { phrase: "no hurry", meaning: "不急", example: "There's no hurry — take your time." }
  ],
  "hut": [
    { phrase: "wooden hut", meaning: "木屋", example: "The shepherd lived in a small wooden hut on the hill." },
    { phrase: "beach hut", meaning: "海滩小屋", example: "We rented a beach hut for the afternoon." }
  ],
  "identity card": [
    { phrase: "show your identity card", meaning: "出示身份证", example: "You must show your identity card at the entrance." },
    { phrase: "carry an identity card", meaning: "携带身份证", example: "In some countries, you must carry an identity card at all times." }
  ],
  "set out": [
    { phrase: "set out on a journey", meaning: "踏上旅程", example: "They set out on a journey across the desert." },
    { phrase: "set out early", meaning: "早早出发", example: "We set out early to avoid the traffic." }
  ],
  "set up": [
    { phrase: "set up a business", meaning: "创办企业", example: "She set up her own business after leaving university." },
    { phrase: "set up a meeting", meaning: "安排会议", example: "Can you set up a meeting for next Monday?" }
  ],
  "lorry": [
    { phrase: "lorry driver", meaning: "卡车司机", example: "Her father works as a lorry driver." },
    { phrase: "lorry load", meaning: "一卡车的量", example: "A lorry load of furniture arrived this morning." }
  ],
  "boot": [
    { phrase: "car boot", meaning: "汽车后备箱", example: "Put the shopping bags in the car boot." },
    { phrase: "boot sale", meaning: "后备箱集市", example: "We found some great bargains at the car boot sale." }
  ],
  "tyre": [
    { phrase: "flat tyre", meaning: "瘪胎", example: "We got a flat tyre on the motorway." },
    { phrase: "spare tyre", meaning: "备用轮胎", example: "Make sure you have a spare tyre in the boot." },
    { phrase: "change a tyre", meaning: "换轮胎", example: "Do you know how to change a tyre?" }
  ],
  "agency": [
    { phrase: "travel agency", meaning: "旅行社", example: "We booked our flights through a travel agency." },
    { phrase: "employment agency", meaning: "职业介绍所", example: "He found his job through an employment agency." }
  ],
  "sign": [
    { phrase: "road sign", meaning: "路标", example: "Follow the road signs to the city centre." },
    { phrase: "sign language", meaning: "手语", example: "She learned sign language to communicate with deaf people." },
    { phrase: "a sign of", meaning: "…的迹象", example: "Dark clouds are a sign of rain." }
  ],
  "shark": [
    { phrase: "shark attack", meaning: "鲨鱼袭击", example: "Shark attacks are very rare in this area." },
    { phrase: "great white shark", meaning: "大白鲨", example: "The great white shark is the largest predatory fish." }
  ],
  "cod": [
    { phrase: "cod and chips", meaning: "炸鳕鱼薯条", example: "I'll have cod and chips, please." },
    { phrase: "cod liver oil", meaning: "鱼肝油", example: "Cod liver oil is rich in vitamins A and D." }
  ],
  "calf": [
    { phrase: "newborn calf", meaning: "新生小牛", example: "The farmer helped the newborn calf stand up." },
    { phrase: "calf muscle", meaning: "小腿肌肉", example: "She pulled her calf muscle while running." }
  ],
  "bull": [
    { phrase: "bull market", meaning: "牛市", example: "Investors are happy during a bull market." },
    { phrase: "like a bull", meaning: "像公牛一样", example: "He charged at the door like a bull." }
  ],
  "monster": [
    { phrase: "sea monster", meaning: "海怪", example: "Sailors used to tell stories about sea monsters." },
    { phrase: "monster truck", meaning: "怪兽卡车", example: "The children loved watching the monster truck show." }
  ],
  "dig": [
    { phrase: "dig a hole", meaning: "挖洞", example: "The dog dug a hole in the garden." },
    { phrase: "dig up", meaning: "挖出", example: "They dug up some old coins in the field." }
  ],
  "fur": [
    { phrase: "fur coat", meaning: "皮草大衣", example: "She wore a warm fur coat in winter." },
    { phrase: "fur trade", meaning: "毛皮贸易", example: "The fur trade was once very important in Canada." }
  ],
  "shoot": [
    { phrase: "shoot at", meaning: "向…射击", example: "The hunter shot at the bird but missed." },
    { phrase: "shoot a film", meaning: "拍摄电影", example: "They shot the film in a small village in Italy." }
  ],
  "arrest": [
    { phrase: "under arrest", meaning: "被逮捕", example: "You are under arrest for stealing." },
    { phrase: "arrest sb for", meaning: "因…逮捕某人", example: "The police arrested him for dangerous driving." }
  ],
  "crime": [
    { phrase: "commit a crime", meaning: "犯罪", example: "He committed a serious crime and went to prison." },
    { phrase: "crime rate", meaning: "犯罪率", example: "The crime rate has fallen in recent years." },
    { phrase: "crime scene", meaning: "犯罪现场", example: "The police examined the crime scene carefully." }
  ],
  "criminal": [
    { phrase: "criminal record", meaning: "犯罪记录", example: "He couldn't get the job because of his criminal record." },
    { phrase: "criminal law", meaning: "刑法", example: "She studied criminal law at university." }
  ],
  "vanilla": [
    { phrase: "vanilla ice cream", meaning: "香草冰淇淋", example: "I'd like two scoops of vanilla ice cream, please." },
    { phrase: "vanilla flavour", meaning: "香草味", example: "This cake has a lovely vanilla flavour." }
  ],
  "virus": [
    { phrase: "computer virus", meaning: "电脑病毒", example: "A computer virus destroyed all the files on my laptop." },
    { phrase: "spread a virus", meaning: "传播病毒", example: "Washing your hands helps stop spreading viruses." }
  ],
  "war": [
    { phrase: "at war", meaning: "处于战争状态", example: "The two countries were at war for many years." },
    { phrase: "world war", meaning: "世界大战", example: "World War II ended in 1945." },
    { phrase: "war zone", meaning: "战区", example: "Aid workers risked their lives in the war zone." }
  ],
  "jungle": [
    { phrase: "tropical jungle", meaning: "热带丛林", example: "Many rare species live in the tropical jungle." },
    { phrase: "jungle animal", meaning: "丛林动物", example: "Tigers and monkeys are jungle animals." }
  ],
  "flood": [
    { phrase: "flash flood", meaning: "山洪", example: "A flash flood swept through the village after heavy rain." },
    { phrase: "flood damage", meaning: "洪水损害", example: "The flood damage cost millions of pounds to repair." }
  ],
  "environment": [
    { phrase: "protect the environment", meaning: "保护环境", example: "We should all do our part to protect the environment." },
    { phrase: "natural environment", meaning: "自然环境", example: "Animals should live in their natural environment." },
    { phrase: "working environment", meaning: "工作环境", example: "A good working environment helps people do their best." }
  ],
  "freeze": [
    { phrase: "freeze to death", meaning: "冻死", example: "Without warm clothes, you could freeze to death in this weather." },
    { phrase: "freezing cold", meaning: "极冷的", example: "It's freezing cold outside — put on a coat." }
  ],
  "range": [
    { phrase: "a wide range of", meaning: "各种各样的", example: "The library has a wide range of books to choose from." },
    { phrase: "age range", meaning: "年龄范围", example: "The course is suitable for the age range of 12 to 16." },
    { phrase: "mountain range", meaning: "山脉", example: "The Andes is the longest mountain range in the world." }
  ],
  "direct": [
    { phrase: "direct flight", meaning: "直飞航班", example: "Is there a direct flight from London to Beijing?" },
    { phrase: "direct sb to", meaning: "给某人指路", example: "Could you direct me to the nearest station?" }
  ],
  "battle": [
    { phrase: "battle against", meaning: "与…作斗争", example: "She fought a brave battle against her illness." },
    { phrase: "battle field", meaning: "战场", example: "The old battle field is now a peaceful park." }
  ],
  "cable": [
    { phrase: "cable car", meaning: "缆车", example: "We took the cable car up the mountain." },
    { phrase: "cable TV", meaning: "有线电视", example: "We get over 200 channels on cable TV." }
  ],
  "government": [
    { phrase: "local government", meaning: "地方政府", example: "The local government is building a new park." },
    { phrase: "government policy", meaning: "政府政策", example: "The new government policy aims to reduce pollution." }
  ],
  "groom": [
    { phrase: "groom a horse", meaning: "给马梳毛", example: "She spent an hour grooming the horse before the show." },
    { phrase: "bride and groom", meaning: "新娘和新郎", example: "The bride and groom looked very happy at the wedding." }
  ],
  "limit": [
    { phrase: "speed limit", meaning: "速度限制", example: "The speed limit on this road is 60 miles per hour." },
    { phrase: "time limit", meaning: "时间限制", example: "There is a time limit of one hour for the test." },
    { phrase: "within limits", meaning: "在限度内", example: "You can eat what you like, within limits." }
  ],
  "ambition": [
    { phrase: "achieve one's ambition", meaning: "实现抱负", example: "She finally achieved her ambition of becoming a pilot." },
    { phrase: "lifelong ambition", meaning: "毕生的志向", example: "It was his lifelong ambition to climb Mount Everest." }
  ],
  "neat": [
    { phrase: "neat and tidy", meaning: "整整齐齐", example: "Please keep your room neat and tidy." },
    { phrase: "neat handwriting", meaning: "工整的字迹", example: "The teacher praised her neat handwriting." }
  ],
  "northeast": [
    { phrase: "in the northeast", meaning: "在东北部", example: "Newcastle is in the northeast of England." },
    { phrase: "northeast wind", meaning: "东北风", example: "A cold northeast wind blew across the fields." }
  ],
  "northern": [
    { phrase: "northern hemisphere", meaning: "北半球", example: "Most of Europe is in the northern hemisphere." },
    { phrase: "Northern Ireland", meaning: "北爱尔兰", example: "Belfast is the capital of Northern Ireland." }
  ],
  "southern": [
    { phrase: "southern hemisphere", meaning: "南半球", example: "Australia is in the southern hemisphere." },
    { phrase: "southern coast", meaning: "南部海岸", example: "The southern coast has many beautiful beaches." }
  ],
  "southwest": [
    { phrase: "in the southwest", meaning: "在西南部", example: "Cornwall is in the southwest of England." },
    { phrase: "southwest wind", meaning: "西南风", example: "A warm southwest wind brought mild weather." }
  ],
  "peace": [
    { phrase: "at peace", meaning: "处于和平状态", example: "The country has been at peace for over fifty years." },
    { phrase: "peace of mind", meaning: "内心的平静", example: "Knowing my family is safe gives me peace of mind." },
    { phrase: "world peace", meaning: "世界和平", example: "Many people dream of world peace." }
  ],
  "for ages": [
    { phrase: "wait for ages", meaning: "等了很久", example: "We waited for ages at the bus stop." },
    { phrase: "haven't seen sb for ages", meaning: "很久没见某人", example: "I haven't seen you for ages — how are you?" }
  ],
  "call for": [
    { phrase: "call for help", meaning: "呼救", example: "She called for help when she saw the fire." },
    { phrase: "call for action", meaning: "呼吁行动", example: "The report calls for action to reduce pollution." }
  ]
};
