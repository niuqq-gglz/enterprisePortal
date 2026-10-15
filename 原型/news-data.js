/**
 * 企业员工门户 - 新闻公告数据
 * 对应方案 6.6：新闻与公告分开展示，各自只维护一条详情。
 */

window.PORTAL_NEWS = [
  {
    id: "NEWS-2026-013",
    title: "2026 全员协同新体验：静态企业门户正式上线",
    summary: "员工门户已于 10 月 13 日对内启用。常用应用、公告、制度资料和新闻改由首页进入，业务仍在原系统中办理。",
    publishAt: "2026-10-13",
    authorDepartment: "综合管理部",
    cover: "spotlight_cover_hd.jpg",
    coverAlt: "开放办公区，靠窗排列着工位",
    coverCaption: "北京办公区",
    relatedIds: ["NEWS-2026-008", "NEWS-2026-009", "NEWS-2026-011"],
    body: [
      { type: "p", text: "综合管理部与信息技术部于 10 月 13 日启用员工门户一期。员工使用现有账号登录后，可从首页进入常用应用、查看公告，并查阅制度与资料的现行版本。" },
      { type: "p", text: "一期栏目包括应用中心、制度与资料、新闻、公告和帮助支持。门户提供入口和说明，不替代各业务系统中的审批与数据。报销、请假、用印仍按原流程办理。" },
      { type: "h", text: "新闻与公告如何区分" },
      { type: "p", text: "需要员工知晓或办理的事项，发布为公告，并写明适用对象、要完成的动作和责任部门。公司动态按发布日期排列，不作为办事依据。" },
      { type: "p", text: "首页只引用最新几条新闻摘要，以及置顶公告。其余内容在新闻、公告页面按页查看。" },
      { type: "p", text: "使用中如无法登录、入口有误，或看到的资料版本与正文不符，请通过帮助支持联系信息技术部。内容勘误由责任部门修订后发布，不以邮件转发件作为最新版本。" }
    ]
  },
  {
    id: "NEWS-2026-012",
    title: "真空噪声量子随机数芯片完成金融行业试点验收",
    summary: "试点批次于 10 月 8 日完成验收。范围包括出厂测试记录、接口说明和现场运行日志，不包含客户业务数据。",
    publishAt: "2026-10-08",
    authorDepartment: "产品与解决方案部",
    cover: "images/news/chip.jpg",
    coverAlt: "电路板上的芯片近景",
    coverCaption: "量子随机数芯片所在电路",
    relatedIds: ["NEWS-2026-010", "NEWS-2026-009", "NEWS-2026-008"],
    body: [
      { type: "p", text: "真空噪声量子随机数芯片的金融行业试点，已于 10 月 8 日完成验收。试点自 8 月启动，由产品与解决方案部牵头，制造与工艺部提供批次测试记录。" },
      { type: "p", text: "验收核对了三部分材料：出厂测试记录、对外接口说明，以及试点期间的运行日志。日志只记录设备状态和调用次数，不包含客户侧业务数据。验收结论已写入项目档案，编号见协同办公中的试点结项单。" },
      { type: "h", text: "后续安排" },
      { type: "p", text: "通过验收的批次可以按已有交付流程供货。新的接口变更仍须走产品变更评审，不因本次验收自动放开。对外口径由品牌与市场部统一，业务部门不单独向客户发送未经确认的测试数据。" },
      { type: "p", text: "参与试点的同事如需引用结论，请使用结项单中的表述。个人总结、聊天记录不作为对客户的正式说明。" }
    ]
  },
  {
    id: "NEWS-2026-011",
    title: "秋季技术开放日定于 10 月 24 日举行",
    summary: "开放日面向全体员工及已报名的客户技术接口人。上午为产品讲解，下午参观封测相关工位。报名截止 10 月 20 日 18:00。",
    publishAt: "2026-10-06",
    authorDepartment: "品牌与市场部",
    cover: "images/news/hall.jpg",
    coverAlt: "会议厅内就座的听众",
    coverCaption: "往期技术交流现场",
    relatedIds: ["NEWS-2026-009", "NEWS-2026-007", "NEWS-2026-013"],
    body: [
      { type: "p", text: "2026 年秋季技术开放日定于 10 月 24 日（星期五）在北京办公区举行。活动由品牌与市场部主办，研发中心、量子通信事业部和产品与解决方案部分别讲解。" },
      { type: "p", text: "上午在一楼报告厅，下午参观封测相关工位。参观线路限 30 人，须穿着实验服，由现场工程师带队。未列入参观名单的人员留在报告厅继续交流，不进入实验区。" },
      { type: "h", text: "当日安排" },
      { type: "ul", items: [
        "09:00–09:20　签到。请携带工牌；客户接口人凭报名回执。",
        "09:20–11:30　量子随机数、量子密钥分发和测量产品说明。",
        "13:30–15:30　封测工位参观。每组不超过 10 人。",
        "15:30–16:00　问题收集。会后由对口部门书面回复，不在现场承诺交付日期。"
      ]},
      { type: "figure", src: "images/news/lab.jpg", alt: "工程师在产线工位上使用笔记本电脑调试设备", caption: "下午参观线路经过封测联调工位" },
      { type: "p", text: "员工报名请见同日公告，截止时间为 10 月 20 日 18:00。部门对外邀请客户技术接口人的，须在 10 月 17 日前把名单交给品牌与市场部，便于办理入园。" }
    ]
  },
  {
    id: "NEWS-2026-010",
    title: "量子密钥分发设备完成省级电力试点接入",
    summary: "试点链路于 9 月 16 日完成接入测试。公司负责设备、接口和值守说明，电力业务系统仍由客户运维。",
    publishAt: "2026-09-18",
    authorDepartment: "量子通信事业部",
    cover: "images/news/power.jpg",
    coverAlt: "日落时分的输电线路与铁塔",
    coverCaption: "试点所在区域的输电线路",
    relatedIds: ["NEWS-2026-012", "NEWS-2026-009", "NEWS-2026-013"],
    body: [
      { type: "p", text: "量子密钥分发设备与一家省级电力公司调度相关链路的试点接入，已于 9 月 16 日完成。量子通信事业部 9 月 18 日确认测试记录归档。" },
      { type: "p", text: "本次接入只验证密钥分发设备与客户指定接口的连通和稳定性。电力业务系统的配置、权限和运行数据由客户自行维护，公司人员不登录客户业务系统。" },
      { type: "h", text: "值守与移交" },
      { type: "p", text: "公司侧现场值守到 9 月 30 日结束。10 月起改为月度巡检，由量子通信事业部按项目计划执行，不再派专人常驻。故障报修走原项目接口人，不在门户内另开通道。" },
      { type: "p", text: "对外介绍此事时，请使用本页标题和摘要中的范围，不扩展为“已全面替换客户原有通信”。材料若需用于投标，先经品牌与市场部审核。" }
    ]
  },
  {
    id: "NEWS-2026-009",
    title: "研发中心光学实验室完成改造并恢复使用",
    summary: "光学实验室于 9 月 8 日恢复预约。进入人员须提前登记，外部访客由对口工程师陪同，不得单独停留。",
    publishAt: "2026-09-08",
    authorDepartment: "研发中心",
    cover: "images/news/lab.jpg",
    coverAlt: "工程师在联调工位前操作笔记本电脑",
    coverCaption: "封测联调工位",
    relatedIds: ["NEWS-2026-011", "NEWS-2026-012", "NEWS-2026-008"],
    body: [
      { type: "p", text: "研发中心光学实验室的改造已结束，自 9 月 8 日起恢复预约使用。改造内容为地面、送排风和工位电源，实验装置的归属和操作规程没有变化。" },
      { type: "p", text: "工作日 9:00–17:30 可预约。预约在行政系统中提交，至少提前一个工作日。外部访客须由陪同工程师登记，并在门岗核验，不得单独进入实验室或封测区。" },
      { type: "p", text: "临时取消预约的，请在开始前两小时在系统中撤销，以便把时段让给其他实验。连续两周预约未到、又未提前撤销的，下月暂停该账号的实验室预约权限，由部门负责人申请恢复。" },
      { type: "p", text: "访客登记的具体要求见行政部公告。本新闻只说明实验室已恢复使用，不替代进入流程。" }
    ]
  },
  {
    id: "NEWS-2026-008",
    title: "信息安全规范修订说明会纪要",
    summary: "9 月 2 日说明会解释了《信息安全行为规范》v1.6 的主要变化：账号、资料外发和远程办公。阅读确认的截止时间以公告为准。",
    publishAt: "2026-09-02",
    authorDepartment: "信息安全与合规部",
    cover: "images/news/board.jpg",
    coverAlt: "带有长会议桌和投影仪的会议室",
    coverCaption: "说明会使用的会议室",
    relatedIds: ["NEWS-2026-013", "NEWS-2026-007", "NEWS-2026-012"],
    body: [
      { type: "p", text: "信息安全与合规部于 9 月 2 日召开《信息安全行为规范》修订说明会，对象为各部门接口人。规范文本的现行版本为 v1.6，自 9 月 20 日起作为制度执行，正文在制度与资料中维护。" },
      { type: "h", text: "会上确认的三点变化" },
      { type: "ul", items: [
        "账号不得出借。共用终端须使用个人账号登录，临时账号由信息技术部开通并写明停用日期。",
        "对外提供制度、图纸和客户材料，须走原审批。聊天工具中的文件不视为已完成审批。",
        "远程办公使用公司指定的接入方式。个人电脑不得保存标注为内部的原稿。"
      ]},
      { type: "p", text: "说明会没有布置新的考试。全员需要完成的是阅读确认，截止时间和入口以信息安全公告为准。未出席说明会的接口人，向本部门已参会同事取用纪要即可，不必单独补会。" }
    ]
  },
  {
    id: "NEWS-2026-007",
    title: "2027 届校园招聘宣讲安排",
    summary: "宣讲从 11 月 3 日开始，覆盖北京、合肥、上海三场。岗位说明和简历投递入口由人力资源部在协同办公发布，本页不接收简历。",
    publishAt: "2026-08-28",
    authorDepartment: "人力资源部",
    cover: "images/news/campus.jpg",
    coverAlt: "仰视的城市商务楼群",
    coverCaption: "宣讲所在城市",
    relatedIds: ["NEWS-2026-011", "NEWS-2026-013", "NEWS-2026-008"],
    body: [
      { type: "p", text: "人力资源部公布 2027 届校园招聘宣讲安排。对象为在校学生，员工可把日程转给符合岗位条件的同学。简历不通过门户收取。" },
      { type: "ul", items: [
        "11 月 3 日　北京。下午场，具体教室以学校就业网当日通知为准。",
        "11 月 6 日　合肥。下午场。",
        "11 月 10 日　上海。晚上场。"
      ]},
      { type: "p", text: "每场由人力资源部与一名业务工程师共同出席。工程师只介绍岗位日常工作，不在现场承诺录用、薪资或实习转正。提问若涉及未发布的产品计划，统一回答“以公司正式发布为准”。" },
      { type: "p", text: "有意担任业务讲解的同事，请于 10 月 22 日前通过部门负责人向人力资源部报名。同一场不安排两名以上业务讲解人。" }
    ]
  },
  {
    id: "NEWS-2026-006",
    title: "合肥研发园区二期工位完成分配",
    summary: "二期工位自 8 月 18 日起按部门领取。钥匙和门禁由行政部在当日下午集中发放，未到场的改至次日。",
    publishAt: "2026-08-18",
    authorDepartment: "行政部",
    cover: "images/news/campus.jpg",
    coverAlt: "仰视的城市商务楼群",
    coverCaption: "合肥研发园区",
    relatedIds: ["NEWS-2026-009", "NEWS-2026-013"],
    body: [
      { type: "p", text: "合肥研发园区二期工位已完成分配，自 8 月 18 日起按部门领取。行政部在一楼大厅发放钥匙和门禁卡，领取时核对工位编号。" },
      { type: "p", text: "公共会议室仍按原系统预约。二期走廊的打印和茶水间于 8 月 20 日启用，启用前请使用一期设备。" }
    ]
  },
  {
    id: "NEWS-2026-005",
    title: "量子测量产品完成内部演示环境搭建",
    summary: "演示环境设在北京办公区三层。对外演示须提前两个工作日预约，演示数据使用样例，不接入客户网络。",
    publishAt: "2026-08-04",
    authorDepartment: "产品与解决方案部",
    cover: "images/news/lab.jpg",
    coverAlt: "工程师在联调工位前操作笔记本电脑",
    coverCaption: "内部演示工位",
    relatedIds: ["NEWS-2026-012", "NEWS-2026-010"],
    body: [
      { type: "p", text: "量子测量产品的内部演示环境已在北京办公区三层就绪。环境只使用样例数据，不接入客户网络，也不保存客户配置。" },
      { type: "p", text: "对外演示须提前两个工作日向产品与解决方案部预约，并说明来访人数。现场讲解以已发布的产品说明为准。" }
    ]
  },
  {
    id: "NEWS-2026-004",
    title: "上半年质量回顾会纪要",
    summary: "7 月 22 日回顾会核对了出厂测试、客诉闭环和纠正措施。未关闭事项由质量部按清单跟踪，不在会上另行承诺日期。",
    publishAt: "2026-07-22",
    authorDepartment: "质量部",
    cover: "images/news/board.jpg",
    coverAlt: "带有长会议桌和投影仪的会议室",
    coverCaption: "质量回顾会现场",
    relatedIds: ["NEWS-2026-008", "NEWS-2026-012"],
    body: [
      { type: "p", text: "质量部于 7 月 22 日召开上半年质量回顾会。会议核对出厂测试记录、客诉闭环和纠正措施完成情况。" },
      { type: "p", text: "未关闭事项维持原责任人和计划日期，由质量部按清单跟踪。会上没有新增交付承诺。" }
    ]
  },
  {
    id: "NEWS-2026-003",
    title: "暑期实习生入园安排",
    summary: "暑期实习生自 7 月 6 日起分批入园。导师在入园当日带领办理门禁，实习电脑由信息技术部按批次发放。",
    publishAt: "2026-07-01",
    authorDepartment: "人力资源部",
    cover: "spotlight_cover_hd.jpg",
    coverAlt: "开放办公区，靠窗排列着工位",
    coverCaption: "实习生工位区",
    relatedIds: ["NEWS-2026-007", "NEWS-2026-013"],
    body: [
      { type: "p", text: "2026 年暑期实习生自 7 月 6 日起分批入园。名单和批次由人力资源部发给各部门导师。" },
      { type: "p", text: "入园当日由导师带领办理门禁和工位。实习用电脑由信息技术部按批次发放，不使用个人电脑处理内部材料。" }
    ]
  },
  {
    id: "NEWS-2026-002",
    title: "封测联调产能按周公布",
    summary: "自 6 月 16 日起，封测联调的当周可用时段在内部看板上更新。临时插单须经制造与工艺部确认，不直接占用已排定的批次。",
    publishAt: "2026-06-16",
    authorDepartment: "制造与工艺部",
    cover: "images/news/chip.jpg",
    coverAlt: "电路板上的芯片近景",
    coverCaption: "封测联调工位",
    relatedIds: ["NEWS-2026-011", "NEWS-2026-009"],
    body: [
      { type: "p", text: "封测联调的当周可用时段，自 6 月 16 日起改为每周一在内部看板上更新。部门按看板预约，不再用邮件临时占位。" },
      { type: "p", text: "临时插单须经制造与工艺部确认。已排定的批次不因口头安排被替换。" }
    ]
  },
  {
    id: "NEWS-2026-001",
    title: "开放日参观路线说明会纪要",
    summary: "6 月 3 日说明会确定了开放日参观的集合点、人数上限和禁止拍摄的区域。对外邀请仍由品牌与市场部统一登记。",
    publishAt: "2026-06-03",
    authorDepartment: "品牌与市场部",
    cover: "images/news/hall.jpg",
    coverAlt: "会议厅内就座的听众",
    coverCaption: "路线说明会",
    relatedIds: ["NEWS-2026-011", "NEWS-2026-008"],
    body: [
      { type: "p", text: "品牌与市场部于 6 月 3 日说明开放日参观路线。集合点在一楼大厅，每组不超过 10 人，实验区禁止拍摄。" },
      { type: "p", text: "对外邀请仍由品牌与市场部统一登记。部门不单独向客户发送参观路线图。" }
    ]
  },
  {
    id: "NEWS-2025-012",
    title: "年会报名于 12 月 5 日截止",
    summary: "年会定于 12 月 20 日晚在北京办公区举行。报名在协同办公提交，不接收口头报名。未报名人员不安排座位。",
    publishAt: "2025-11-28",
    authorDepartment: "综合管理部",
    cover: "images/news/hall.jpg",
    coverAlt: "会议厅内就座的听众",
    coverCaption: "年会场地",
    relatedIds: ["NEWS-2026-013", "NEWS-2026-007"],
    body: [
      { type: "p", text: "公司年会定于 12 月 20 日晚在北京办公区举行。报名于 12 月 5 日 18:00 截止，入口在协同办公。" },
      { type: "p", text: "未报名人员不安排座位，也不补发礼品。合肥、上海同事如到场，交通按差旅标准报销。" }
    ]
  },
  {
    id: "NEWS-2025-011",
    title: "供应商年度评审结果已归档",
    summary: "年度评审于 11 月 14 日完成。继续合作、观察和停用三类名单由采购部归档，业务部门不另行公布评分明细。",
    publishAt: "2025-11-14",
    authorDepartment: "采购部",
    cover: "images/news/board.jpg",
    coverAlt: "带有长会议桌和投影仪的会议室",
    coverCaption: "评审会会议室",
    relatedIds: ["NEWS-2026-004", "NEWS-2026-012"],
    body: [
      { type: "p", text: "供应商年度评审已于 11 月 14 日完成，结果分为继续合作、观察和停用三类，由采购部归档。" },
      { type: "p", text: "评分明细不对外发送。新的采购仍按现行流程询价，不因本次评审自动续约。" }
    ]
  },
  {
    id: "NEWS-2025-010",
    title: "信息安全月活动回顾",
    summary: "10 月的信息安全月完成了钓鱼邮件演练和账号自查。演练结果只反馈到部门负责人，不在全员频道点名。",
    publishAt: "2025-10-31",
    authorDepartment: "信息安全与合规部",
    cover: "images/news/board.jpg",
    coverAlt: "带有长会议桌和投影仪的会议室",
    coverCaption: "安全月分享会",
    relatedIds: ["NEWS-2026-008", "NEWS-2026-013"],
    body: [
      { type: "p", text: "信息安全月于 10 月结束。活动包括钓鱼邮件演练和账号自查，演练结果只反馈给部门负责人。" },
      { type: "p", text: "需要补做确认的同事，按部门负责人转发的链接完成，不在门户重复提交。" }
    ]
  },
  {
    id: "NEWS-2025-009",
    title: "北京办公区消防演练通知预告",
    summary: "演练定于 10 月 17 日 15:00。听到警报后按楼层引导员指示下到集合点，演练期间电梯停用。",
    publishAt: "2025-10-10",
    authorDepartment: "行政部",
    cover: "spotlight_cover_hd.jpg",
    coverAlt: "开放办公区，靠窗排列着工位",
    coverCaption: "北京办公区",
    relatedIds: ["NEWS-2026-006", "NEWS-2026-009"],
    body: [
      { type: "p", text: "北京办公区消防演练定于 10 月 17 日 15:00 开始。听到警报后停止手头工作，按楼层引导员指示下楼。" },
      { type: "p", text: "演练期间电梯停用。行动不便的同事提前告知行政部，由引导员协助。" }
    ]
  },
  {
    id: "NEWS-2025-008",
    title: "量子随机数接口说明更新至 v2.3",
    summary: "接口说明 v2.3 已替换 v2.2。变更限于错误码和超时建议，不改变现有调用地址。对外发送前仍须走文档评审。",
    publishAt: "2025-09-19",
    authorDepartment: "产品与解决方案部",
    cover: "images/news/chip.jpg",
    coverAlt: "电路板上的芯片近景",
    coverCaption: "接口说明所对应的芯片",
    relatedIds: ["NEWS-2026-012", "NEWS-2026-005"],
    body: [
      { type: "p", text: "量子随机数接口说明已更新至 v2.3，替换 v2.2。变更限于错误码补充和超时建议，调用地址不变。" },
      { type: "p", text: "对外发送仍须经文档评审。聊天中转发的旧版 PDF 不作为现行说明。" }
    ]
  },
  {
    id: "NEWS-2025-007",
    title: "新员工导师名单公布",
    summary: "第三季度入职同事的导师名单已在人事系统公布。导师在入职两周内完成工位、账号和首周安排的核对。",
    publishAt: "2025-09-02",
    authorDepartment: "人力资源部",
    cover: "spotlight_cover_hd.jpg",
    coverAlt: "开放办公区，靠窗排列着工位",
    coverCaption: "新员工工位",
    relatedIds: ["NEWS-2026-003", "NEWS-2026-007"],
    body: [
      { type: "p", text: "第三季度入职同事的导师名单已在人事系统公布。查询路径为个人档案中的入职信息。" },
      { type: "p", text: "导师在入职两周内完成工位、账号和首周安排的核对，并在系统中确认。门户不另行收集确认回执。" }
    ]
  }
];


window.PORTAL_NOTICES = [
  {
    id: "NTC-ACC-20261014",
    title: "关于规范物资收货验收工作的通知",
    summary: "物资到货后须在约定期限内完成验收并签署《验收报告》。企业微信入库时须随附该报告，未附报告的不予入库。",
    publishAt: "2026-10-14",
    effectiveFrom: "2026-10-14",
    effectiveTo: "",
    validityText: "自发布之日起",
    pinned: true,
    audience: "公司各部门",
    owner: "北京中科国光量子科技有限公司",
    contact: "",
    file: "files/notices/acceptance-20261014.pdf",
    fileName: "关于规范物资收货验收工作的通知.pdf"
  },
  {
    id: "NTC-PEST-20261010",
    title: "关于进行有害生物防制作业的通知",
    summary: "10月11日至10月15日对园区公共区域进行有害生物防制。消杀期间请关闭门窗，避免药物气味飘入室内。",
    publishAt: "2026-10-10",
    effectiveFrom: "2026-10-11",
    effectiveTo: "2026-10-15",
    validityText: "10月11日 – 10月15日",
    pinned: false,
    audience: "园区在岗人员",
    owner: "经开区信创园起步区项目部",
    contact: "",
    file: "files/notices/pest-control-20261010.pdf",
    fileName: "关于进行有害生物防制作业的通知.pdf"
  },
  {
    id: "NTC-WALL-20261008",
    title: "关于园区外墙清洗的通知",
    summary: "10月9日至10月31日清洗 A、B 区外墙、幕墙玻璃和雨搭。请关闭窗户，并清理窗台及靠窗物品。",
    publishAt: "2026-10-08",
    effectiveFrom: "2026-10-09",
    effectiveTo: "2026-10-31",
    validityText: "10月9日 – 10月31日",
    pinned: false,
    audience: "园区在岗人员",
    owner: "经开区信创园起步区项目部",
    contact: "物业客服 87163920；紧急联系 A 区 87163930，B 区 87163113",
    file: "files/notices/facade-cleaning-20261008.pdf",
    fileName: "关于园区外墙清洗的通知.pdf"
  },
  {
    id: "NTC-LAB-20260920",
    title: "关于光学实验室恢复预约的通知",
    summary: "光学实验室自 9 月 20 日起恢复预约。进入人员须提前登记，外部访客由陪同工程师带领。",
    publishAt: "2026-09-08",
    effectiveFrom: "2026-09-20",
    effectiveTo: "",
    validityText: "自 9月20日起",
    pinned: false,
    audience: "研发及访客陪同人员",
    owner: "研发中心",
    contact: "",
    file: "files/notices/acceptance-20261014.pdf",
    fileName: "关于光学实验室恢复预约的通知.pdf"
  },
  {
    id: "NTC-SEC-20260901",
    title: "关于完成信息安全规范阅读确认的通知",
    summary: "《信息安全行为规范》v1.6 的阅读确认截止 9 月 30 日。确认入口在协同办公，门户不接收回执。",
    publishAt: "2026-09-01",
    effectiveFrom: "2026-09-01",
    effectiveTo: "2026-09-30",
    validityText: "9月1日 – 9月30日",
    pinned: false,
    audience: "全体员工",
    owner: "信息安全与合规部",
    contact: "",
    file: "files/notices/acceptance-20261014.pdf",
    fileName: "关于完成信息安全规范阅读确认的通知.pdf"
  },
  {
    id: "NTC-OPEN-20261006",
    title: "关于秋季技术开放日报名的通知",
    summary: "10 月 24 日开放日面向全体员工。报名截止 10 月 20 日 18:00，参观名额 30 人。",
    publishAt: "2026-10-06",
    effectiveFrom: "2026-10-06",
    effectiveTo: "2026-10-20",
    validityText: "10月6日 – 10月20日",
    pinned: false,
    audience: "全体员工",
    owner: "品牌与市场部",
    contact: "",
    file: "files/notices/pest-control-20261010.pdf",
    fileName: "关于秋季技术开放日报名的通知.pdf"
  },
  {
    id: "NTC-FIRE-20261016",
    title: "关于北京办公区消防演练的通知",
    summary: "10 月 17 日 15:00 进行消防演练。听到警报后按引导下楼，演练期间电梯停用。",
    publishAt: "2026-10-16",
    effectiveFrom: "2026-10-17",
    effectiveTo: "2026-10-17",
    validityText: "10月17日 15:00",
    pinned: false,
    audience: "北京办公区在岗人员",
    owner: "行政部",
    contact: "",
    file: "files/notices/facade-cleaning-20261008.pdf",
    fileName: "关于北京办公区消防演练的通知.pdf"
  },
  {
    id: "NTC-PARK-20260818",
    title: "关于合肥园区二期工位领取的通知",
    summary: "二期工位钥匙和门禁于 8 月 18 日下午在一楼大厅发放。请携带工牌，按部门顺序领取。",
    publishAt: "2026-08-12",
    effectiveFrom: "2026-08-18",
    effectiveTo: "2026-08-19",
    validityText: "8月18日 – 8月19日",
    pinned: false,
    audience: "合肥研发园区各部门",
    owner: "行政部",
    contact: "",
    file: "files/notices/acceptance-20261014.pdf",
    fileName: "关于合肥园区二期工位领取的通知.pdf"
  },
  {
    id: "NTC-TRAVEL-20260715",
    title: "关于暑期差旅预订提前量的通知",
    summary: "7 月 20 日至 8 月 31 日出差，机票和酒店须提前 5 个工作日在商旅系统提交。",
    publishAt: "2026-07-15",
    effectiveFrom: "2026-07-20",
    effectiveTo: "2026-08-31",
    validityText: "7月20日 – 8月31日",
    pinned: false,
    audience: "有差旅安排的员工",
    owner: "行政部",
    contact: "",
    file: "files/notices/pest-control-20261010.pdf",
    fileName: "关于暑期差旅预订提前量的通知.pdf"
  },
  {
    id: "NTC-POWER-20261102",
    title: "关于 11 月园区停电检修的通知",
    summary: "11 月 2 日 8:00 至 12:00 对 B 区进行停电检修。请提前保存文件，并关闭实验设备。",
    publishAt: "2026-10-15",
    effectiveFrom: "2026-11-02",
    effectiveTo: "2026-11-02",
    validityText: "11月2日 8:00 – 12:00",
    pinned: false,
    audience: "B 区在岗人员",
    owner: "行政部",
    contact: "物业客服 87163920",
    file: "files/notices/facade-cleaning-20261008.pdf",
    fileName: "关于11月园区停电检修的通知.pdf"
  },
  {
    id: "NTC-BADGE-20260601",
    title: "关于工牌补办时限的通知",
    summary: "工牌遗失后 2 个工作日内在行政系统提交补办。补办期间使用临时凭证进出，不得转借。",
    publishAt: "2026-06-01",
    effectiveFrom: "2026-06-01",
    effectiveTo: "",
    validityText: "自发布之日起",
    pinned: false,
    audience: "全体员工",
    owner: "行政部",
    contact: "",
    file: "files/notices/acceptance-20261014.pdf",
    fileName: "关于工牌补办时限的通知.pdf"
  },
  {
    id: "NTC-MEET-20260520",
    title: "关于会议室超时释放的通知",
    summary: "预约开始 15 分钟仍无人到场的，会议室自动释放。连续三次爽约的账号当月暂停预约。",
    publishAt: "2026-05-20",
    effectiveFrom: "2026-06-01",
    effectiveTo: "",
    validityText: "自 6月1日起",
    pinned: false,
    audience: "全体员工",
    owner: "行政部",
    contact: "",
    file: "files/notices/pest-control-20261010.pdf",
    fileName: "关于会议室超时释放的通知.pdf"
  },
  {
    id: "NTC-VPN-20260408",
    title: "关于远程接入客户端升级的通知",
    summary: "4 月 20 日前将 VPN 客户端升级至 v3.8。旧版本于 4 月 21 日停止接入。",
    publishAt: "2026-04-08",
    effectiveFrom: "2026-04-08",
    effectiveTo: "2026-04-20",
    validityText: "4月8日 – 4月20日",
    pinned: false,
    audience: "使用远程接入的员工",
    owner: "信息技术部",
    contact: "",
    file: "files/notices/acceptance-20261014.pdf",
    fileName: "关于远程接入客户端升级的通知.pdf"
  },
  {
    id: "NTC-MAIL-20260312",
    title: "关于邮箱容量清理的通知",
    summary: "个人邮箱超过 20 GB 的，请在 3 月 31 日前清理或归档。到期未处理的由信息技术部协助迁移到归档库。",
    publishAt: "2026-03-12",
    effectiveFrom: "2026-03-12",
    effectiveTo: "2026-03-31",
    validityText: "3月12日 – 3月31日",
    pinned: false,
    audience: "全体员工",
    owner: "信息技术部",
    contact: "",
    file: "files/notices/pest-control-20261010.pdf",
    fileName: "关于邮箱容量清理的通知.pdf"
  },
  {
    id: "NTC-VISITOR-20260202",
    title: "关于访客提前报备的通知",
    summary: "外部访客须提前一个工作日在门禁系统登记。未登记人员不予放行，由接待人到门岗办理。",
    publishAt: "2026-02-02",
    effectiveFrom: "2026-02-09",
    effectiveTo: "",
    validityText: "自 2月9日起",
    pinned: false,
    audience: "有接待安排的员工",
    owner: "行政部",
    contact: "",
    file: "files/notices/facade-cleaning-20261008.pdf",
    fileName: "关于访客提前报备的通知.pdf"
  },
  {
    id: "NTC-YEAR-20251205",
    title: "关于年会报名截止的通知",
    summary: "年会报名于 12 月 5 日 18:00 截止。未报名不安排座位，也不补发礼品。",
    publishAt: "2025-11-28",
    effectiveFrom: "2025-11-28",
    effectiveTo: "2025-12-05",
    validityText: "11月28日 – 12月5日",
    pinned: false,
    audience: "全体员工",
    owner: "综合管理部",
    contact: "",
    file: "files/notices/acceptance-20261014.pdf",
    fileName: "关于年会报名截止的通知.pdf"
  }
];
