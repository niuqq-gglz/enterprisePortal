window.HELP_CHANNELS = [
  {
    id: "it",
    group: "it",
    name: "IT 服务台",
    dept: "信息技术部",
    scope: "账号、邮箱、VPN、终端，以及业务系统无法访问。",
    hours: "工作日 09:00–18:00",
    hoursNote: "紧急故障值班至 21:00",
    email: "it-support@company.internal",
    subject: "IT 服务台咨询",
    ext: "8008",
    extNote: "值班 8888",
    action: "mail"
  },
  {
    id: "hr",
    group: "hr",
    name: "人事服务",
    dept: "人力资源部",
    scope: "入职手续、考勤请假、在职与收入证明、社保公积金咨询。",
    hours: "工作日 09:00–18:00",
    hoursNote: "审批在人事系统办理",
    email: "hr-service@company.internal",
    subject: "人事服务咨询",
    ext: "8101",
    extNote: "",
    action: "mail"
  },
  {
    id: "admin",
    group: "admin",
    name: "行政服务",
    dept: "行政部",
    scope: "工位、门禁、办公设备与用品、会议室和访客接待。",
    hours: "工作日 09:00–18:00",
    hoursNote: "访客提前一个工作日",
    email: "admin-service@company.internal",
    subject: "行政服务申请",
    ext: "8301",
    extNote: "",
    action: "mail"
  },
  {
    id: "finance",
    group: "finance",
    name: "财务服务",
    dept: "财务部",
    scope: "报销标准、发票抬头、付款进度。单据在财务系统提交。",
    hours: "工作日 09:00–18:00",
    hoursNote: "门户不接收报销单据",
    email: "finance-service@company.internal",
    subject: "财务服务咨询",
    ext: "8201",
    extNote: "",
    action: "mail"
  },
  {
    id: "portal",
    group: "portal",
    name: "门户内容反馈",
    dept: "各栏目责任部门",
    scope: "栏目内容有误、资料版本不符、入口缺失或名称不清。",
    hours: "工作日受理",
    hoursNote: "2 个工作日内回复",
    email: "portal-feedback@company.internal",
    subject: "门户内容反馈",
    ext: "",
    extNote: "",
    action: "form"
  }
];

window.HELP_CATEGORIES = [
  { id: "all", label: "全部" },
  { id: "account", label: "账号与网络" },
  { id: "system", label: "系统与设备" },
  { id: "hr", label: "人事" },
  { id: "admin", label: "行政" },
  { id: "finance", label: "财务" },
  { id: "portal", label: "门户" }
];

window.HELP_TYPES = [
  { id: "content", label: "内容有误" },
  { id: "entry", label: "入口缺失或无法打开" },
  { id: "version", label: "资料版本不符" },
  { id: "experience", label: "使用体验" },
  { id: "other", label: "其他" }
];

window.HELP_FAQS = [
  {
    id: "FAQ-IT-001",
    group: "it",
    category: "account",
    title: "如何申请 VPN？",
    owner: "信息技术部",
    updatedAt: "2026-09-18",
    aliases: ["vpn", "远程", "外网", "证书"],
    paragraphs: [
      "在应用中心下载企业 VPN 客户端，使用企业邮箱登录。首次连接前按安装说明导入企业根证书，服务器地址为 vpn.company.internal。",
      "身处公司网络以外、需要访问内网业务系统时，应先连接 VPN。安装失败或证书报错，联系 IT 服务台，内线 8008。"
    ],
    links: [
      { label: "前往应用中心", href: "apps.html" },
      { label: "联系 IT 服务台", href: "#it" }
    ]
  },
  {
    id: "FAQ-IT-002",
    group: "it",
    category: "account",
    title: "企业邮箱无法登录怎么办？",
    owner: "信息技术部",
    updatedAt: "2026-09-18",
    aliases: ["邮箱", "outlook", "登录", "锁定"],
    paragraphs: [
      "确认使用的是企业邮箱全称，并检查动态口令是否开启。连续失败后不要反复尝试，以免账号被锁定。",
      "仍无法登录时，联系 IT 服务台，说明邮箱地址、大致失败时间，以及当时是否在公司网络。服务台核验身份后处理。不要在邮件正文中发送密码。"
    ],
    links: [
      { label: "联系 IT 服务台", href: "#it" }
    ]
  },
  {
    id: "FAQ-IT-003",
    group: "it",
    category: "system",
    title: "无法打开某个业务系统怎么办？",
    owner: "信息技术部",
    updatedAt: "2026-10-08",
    aliases: ["打不开", "系统", "入口", "报错"],
    paragraphs: [
      "先确认三件事：外网访问时是否已连接 VPN，账号是否已经开通，入口是否来自应用中心。",
      "仍无法打开时，记下系统名称、发生时间和界面上的错误码，通过 IT 服务台提交。门户只提供入口，不替代原系统登录，也不能代为审批。"
    ],
    links: [
      { label: "前往应用中心", href: "apps.html" },
      { label: "联系 IT 服务台", href: "#it" }
    ]
  },
  {
    id: "FAQ-IT-004",
    group: "it",
    category: "account",
    title: "忘记密码或收不到验证码怎么办？",
    owner: "信息技术部",
    updatedAt: "2026-09-02",
    aliases: ["密码", "验证码", "重置", "手机"],
    paragraphs: [
      "在统一登录页使用「忘记密码」。验证码发到企业邮箱，或人事系统中登记的手机号。收不到时，先查看垃圾邮件，并核对手机号是否仍为在用号码。",
      "不要把密码、验证码或密钥发给同事、服务台，或写进门户反馈。需要人工处理时，拨 IT 服务台内线 8008，由服务台核验身份。"
    ],
    links: [
      { label: "联系 IT 服务台", href: "#it" }
    ]
  },
  {
    id: "FAQ-IT-005",
    group: "it",
    category: "system",
    title: "办公软件或安全客户端在哪里下载？",
    owner: "信息技术部",
    updatedAt: "2026-08-21",
    aliases: ["下载", "安装", "客户端", "软件"],
    paragraphs: [
      "工作所需的客户端、安全软件和安装说明在应用中心获取。下载后核对页面标注的版本。",
      "不要从外部网站下载同名软件。安装报错时联系 IT 服务台，内线 8008；紧急故障可拨值班内线 8888。"
    ],
    links: [
      { label: "前往应用中心", href: "apps.html" },
      { label: "联系 IT 服务台", href: "#it" }
    ]
  },
  {
    id: "FAQ-AD-001",
    group: "admin",
    category: "admin",
    title: "如何申请办公设备？",
    owner: "行政部",
    updatedAt: "2026-09-12",
    aliases: ["电脑", "显示器", "设备", "办公用品"],
    paragraphs: [
      "办公电脑、显示器、外设和日常办公用品由行政部受理。发送邮件至 admin-service@company.internal，写明物品名称、使用人、部门和工位。",
      "常规申请在 2 个工作日内回复。设备无法开机或无法入网时，同时联系 IT 服务台。软件安装包仍在应用中心下载。"
    ],
    links: [
      { label: "联系行政服务", href: "#admin" },
      { label: "联系 IT 服务台", href: "#it" }
    ]
  },
  {
    id: "FAQ-AD-002",
    group: "admin",
    category: "admin",
    title: "门禁、工位和会议室如何办理？",
    owner: "行政部",
    updatedAt: "2026-09-12",
    aliases: ["门禁", "工位", "会议室", "访客"],
    paragraphs: [
      "新工位、门禁权限、会议室和访客接待由行政部办理，内线 8301，邮箱 admin-service@company.internal。",
      "访客须提前一个工作日申请。门禁卡遗失后不要转借他人卡片，直接联系行政服务台登记。"
    ],
    links: [
      { label: "联系行政服务", href: "#admin" }
    ]
  },
  {
    id: "FAQ-HR-001",
    group: "hr",
    category: "hr",
    title: "请假和考勤异常找谁处理？",
    owner: "人力资源部",
    updatedAt: "2026-10-09",
    aliases: ["请假", "考勤", "外出", "假期"],
    paragraphs: [
      "请假、外出和考勤异常在人事系统中提交，由直属主管按制度审批。门户不办理审批。",
      "对规则有疑问，或在系统中找不到对应流程，联系人力资源部，内线 8101。制度正文以制度与资料中的现行版本为准。"
    ],
    links: [
      { label: "查阅考勤相关制度", href: "resources.html?category=policy&q=考勤" },
      { label: "联系人事服务", href: "#hr" }
    ]
  },
  {
    id: "FAQ-HR-002",
    group: "hr",
    category: "hr",
    title: "在职证明或收入证明如何开具？",
    owner: "人力资源部",
    updatedAt: "2026-08-26",
    aliases: ["证明", "收入", "在职", "离职"],
    paragraphs: [
      "在职证明和收入证明由人力资源部开具。发送邮件至 hr-service@company.internal，说明证明类型、用途、份数和领取方式。",
      "收入证明涉及薪酬信息。不要通过门户反馈或群聊提交证件号和银行卡号。一般在 3 个工作日内答复。"
    ],
    links: [
      { label: "联系人事服务", href: "#hr" }
    ]
  },
  {
    id: "FAQ-FI-001",
    group: "finance",
    category: "finance",
    title: "报销模板在哪里下载？",
    owner: "财务部",
    updatedAt: "2026-10-08",
    aliases: ["报销", "模板", "差旅", "费用"],
    paragraphs: [
      "在制度与资料的「模板与文件」中检索「报销」，下载标注为现行有效的模板。已被替换或废止的版本不要使用。",
      "填报和审批在财务系统中完成。模板找不到，或与财务通知不一致，联系财务部，内线 8201。"
    ],
    links: [
      { label: "下载报销模板", href: "resources.html?category=template&q=报销" },
      { label: "联系财务服务", href: "#finance" }
    ]
  },
  {
    id: "FAQ-FI-002",
    group: "finance",
    category: "finance",
    title: "发票抬头和报销时限以哪里为准？",
    owner: "财务部",
    updatedAt: "2026-09-30",
    aliases: ["发票", "抬头", "时限", "付款"],
    paragraphs: [
      "发票抬头、附件要求和提交时限，以财务部发布的现行说明为准，不以内外部转发的旧邮件为准。",
      "付款进度联系财务部，邮箱 finance-service@company.internal。门户不接收报销单据，也不查询个人付款。"
    ],
    links: [
      { label: "查阅财务相关资料", href: "resources.html?category=process&q=报销" },
      { label: "联系财务服务", href: "#finance" }
    ]
  },
  {
    id: "FAQ-PT-001",
    group: "portal",
    category: "portal",
    title: "制度版本和正文不一致怎么办？",
    owner: "各栏目责任部门",
    updatedAt: "2026-10-11",
    aliases: ["版本", "不一致", "勘误", "附件"],
    paragraphs: [
      "以资料页标注的现行版本、生效日期和责任部门为准。若标题、摘要或附件与该版本不符，在本页提交门户反馈，并填写资料编号。",
      "内容由责任部门修订后重新发布。修订完成前，不要把邮件转发件当作最新版本。"
    ],
    links: [
      { label: "前往制度与资料", href: "resources.html" },
      { label: "提交门户反馈", href: "#feedback" }
    ]
  },
  {
    id: "FAQ-PT-002",
    group: "portal",
    category: "portal",
    title: "门户里找不到某个系统入口怎么办？",
    owner: "信息技术部",
    updatedAt: "2026-10-11",
    aliases: ["找不到", "入口", "缺失", "名称"],
    paragraphs: [
      "先在应用中心按系统名称或用途检索。确认本应对全员开放、但入口缺失或名称有误时，提交门户反馈，写明系统名称和所属部门。",
      "入口存在但打不开，不作为内容问题处理，请联系 IT 服务台。"
    ],
    links: [
      { label: "前往应用中心", href: "apps.html" },
      { label: "提交门户反馈", href: "#feedback" }
    ]
  }
];
