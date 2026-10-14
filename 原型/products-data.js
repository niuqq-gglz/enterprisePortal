/**
 * 企业员工门户 - 产品与业务数据中心 (products-data.js)
 * 遵循 PRD 6.4 产品与业务 & 4.2 二级栏目 & 4.3 权威归属设计规范
 */

window.PRODUCT_CATEGORIES = [
  { id: "all", label: "全部产品", icon: "grid" },
  { id: "cloud", label: "云计算与算力底座", icon: "cloud", desc: "弹性计算、容器编排、微服务网关与分布式数据库" },
  { id: "collab", label: "智能协同与办公", icon: "users", desc: "企业协同、低代码流程、智能文档与协同空间" },
  { id: "ai", label: "数据智能与AI大模型", icon: "cpu", desc: "企业大模型服务、Agent编排、实时数据中台与智能分析" },
  { id: "commerce", label: "供应链与数字商业", icon: "shopping-bag", desc: "全渠道数字零售、智能供应链与多端履约" },
  { id: "fintech", label: "金融科技与风控", icon: "shield", desc: "实时风控反欺诈、多币种清结算与供应链金融" },
  { id: "security", label: "信息安全与合规", icon: "lock", desc: "零信任访问、态势感知、敏感数据防泄漏与审计" },
];

window.BUSINESS_SCENARIOS = [
  { id: "all", label: "全部业务场景" },
  { id: "global-expansion", label: "跨国协同与全球化出海", color: "blue", desc: "跨地域分布式协同、多语言多币种结算与合规加速" },
  { id: "smart-manufacturing", label: "智能制造与供应链协同", color: "emerald", desc: "全链路物联感知、智能排产与多仓高并发履约" },
  { id: "ai-transformation", label: "企业大模型与知识智变", color: "purple", desc: "私域知识检索问答、自动化Agent编排与智能决策" },
  { id: "financial-security", label: "智慧金融与高可用风控", color: "amber", desc: "毫秒级实时风控识别、分布式高可用账务体系" },
  { id: "omni-retail", label: "全域零售与客户体验", color: "rose", desc: "线上线下一体化中台、精准营销与智能库存调拨" },
  { id: "zero-trust-sec", label: "零信任安全与合规审计", color: "cyan", desc: "端到端身份鉴权、敏感资产追溯与合规审计" }
];

window.PRODUCT_STATUS_LIST = [
  { id: "all", label: "全部状态" },
  { id: "active", label: "在售商用", badgeClass: "status-active", desc: "全量开放商用，提供标准SLA保障与技术支持" },
  { id: "beta", label: "公测试点", badgeClass: "status-beta", desc: "定向邀测与公测试点中，支持新特性优先体验" },
  { id: "incubating", label: "内部孵化", badgeClass: "status-incubating", desc: "集团内部核心系统/创新业务孵化中" },
];

window.PRODUCTS = [
  // 1. 云计算与算力底座
  {
    id: "PROD-CLOUD-001",
    name: "OctoCloud 弹性分布式算力平台",
    code: "OctoCloud Compute",
    category: "cloud",
    categoryLabel: "云计算与算力底座",
    tagline: "企业级多云算力纳管与高性能容器编排平台，提供极致弹性算力与资源利用率优化。",
    status: "active",
    statusLabel: "在售商用",
    version: "v4.6.0 LTS",
    scenarios: ["跨国协同与全球化出海", "智能制造与供应链协同"],
    scenarioIds: ["global-expansion", "smart-manufacturing"],
    highlights: ["异构算力纳管与调度", "毫秒级冷启动容器编排", "全球多区域跨云容灾", "动态资源用量超卖降本"],
    featured: true,
    featuredRank: 1,
    featuredBadge: "核心基建",
    metrics: [
      { label: "管理算力节点", value: "85,000+" },
      { label: "资源利用率提升", value: "38.5%" },
      { label: "可用性保障", value: "99.995%" }
    ],
    officialUrl: "https://octocloud.example.internal/portal",
    systemUrl: "https://octocloud-console.example.internal",
    manualId: "DOC-PROD-001",
    manualTitle: "《OctoCloud 算力平台架构与接入白皮书》",
    owner: "陈晓东",
    ownerDept: "云原生与基础设施部",
    contactEmail: "chenxd@example.com",
    contactTel: "8201",
    iconBg: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    iconSymbol: "☁️",
    overview: "OctoCloud 是集团自主研发的企业级分布式异构云算力管理平台。支持公有云、私有云和边缘节点的统一调度与弹性伸缩，提供自研的高性能容器编排调度器，已为集团全线业务提供底层坚实支撑。",
    architecture: [
      { layer: "接入层", desc: "全球边缘Anycast网关、智能DNS调度与零信任鉴权" },
      { layer: "核心引擎", desc: "自研Octo-Scheduler弹性编排引擎、异构GPU/NPU算力虚拟化" },
      { layer: "存储底座", desc: "分布式极速块存储、共享文件存储与跨域对象存储同步" },
      { layer: "运维治理", desc: "全链路智能压测、成本洞察分析引擎与自动故障自愈" }
    ],
    useCases: [
      "支撑电商大促峰值每秒千万级并发请求的高弹性伸缩",
      "AI大模型训练与推理集群的万卡级算力统一调度",
      "全球分支机构边缘网关微节点的轻量级部署与远程管控"
    ],
    updatedAt: "2026-09-18"
  },
  {
    id: "PROD-CLOUD-002",
    name: "StarGate 云原生微服务网关",
    code: "StarGate Gateway",
    category: "cloud",
    categoryLabel: "云计算与算力底座",
    tagline: "高性能、全托管的企业级流量入口网关，集成API全生命周期治理与动态熔断限流。",
    status: "active",
    statusLabel: "在售商用",
    version: "v3.2.1",
    scenarios: ["跨国协同与全球化出海", "智慧金融与高可用风控"],
    scenarioIds: ["global-expansion", "financial-security"],
    highlights: ["超低延迟无损热更新", "精细化多租户流量隔离", "内置WAF与防爬引擎", "全链路OpenTelemetry追踪"],
    featured: false,
    metrics: [
      { label: "日均路由请求", value: "24亿+" },
      { label: "平均路由延迟", value: "< 0.8ms" }
    ],
    officialUrl: "https://stargate.example.internal/docs",
    systemUrl: "https://stargate-console.example.internal",
    manualId: "DOC-PROD-002",
    manualTitle: "《StarGate API 网关开发与路由配置规范》",
    owner: "李明宇",
    ownerDept: "架构技术部",
    contactEmail: "limy@example.com",
    contactTel: "8204",
    iconBg: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
    iconSymbol: "🚪",
    overview: "StarGate 承担集团所有对外业务与内部微服务交互的核心流量咽喉。具备高吞吐、毫秒级动态路由下发及完备的安全防护策略，支持跨机房容灾自动切换。",
    architecture: [
      { layer: "数据面", desc: "基于Rust高性能内核构建的非阻塞事件循环路由引擎" },
      { layer: "控制面", desc: "多数据中心高可用配置集群，支持秒级路由与策略热生效" },
      { layer: "安全插件", desc: "动态签名校验、国密加密传输、自适应IP限流与防刷机制" }
    ],
    useCases: [
      "全渠道多端App与开放平台API请求的统一安全接入",
      "核心微服务金丝雀灰度发布与AB测试流量智能染色切流"
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "PROD-CLOUD-003",
    name: "NovaDB 分布式超融合数据库",
    code: "NovaDB HTAP",
    category: "cloud",
    categoryLabel: "云计算与算力底座",
    tagline: "强一致、高可用的一体化分布式数据库，支持海量OLTP交易与实时OLAP即席分析。",
    status: "active",
    statusLabel: "在售商用",
    version: "v5.0.0 Enterprise",
    scenarios: ["智慧金融与高可用风控", "智能制造与供应链协同"],
    scenarioIds: ["financial-security", "smart-manufacturing"],
    highlights: ["金融级RPO=0/RTO<10s", "存算分离弹性扩展", "行列混存HTAP架构", "多活数据中心容灾"],
    featured: false,
    metrics: [
      { label: "单集群最大容量", value: "2.5 PB" },
      { label: "交易吞吐TPS", value: "120万+" }
    ],
    officialUrl: "https://novadb.example.internal/intro",
    systemUrl: "https://novadb-admin.example.internal",
    manualId: "DOC-PROD-003",
    manualTitle: "《NovaDB 分布式数据库运维与迁移指引》",
    owner: "刘宏伟",
    ownerDept: "数据存储技术部",
    contactEmail: "liuhw@example.com",
    contactTel: "8208",
    iconBg: "linear-gradient(135deg, #3730a3 0%, #6366f1 100%)",
    iconSymbol: "🗄️",
    overview: "NovaDB 针对企业核心交易与高并发分析场景设计，兼容标准SQL与主流生态。具备自动化水平扩展、强一致性副本与故障自愈能力，已在金融账务、订单系统规模化落地。",
    architecture: [
      { layer: "计算层 NovaSQL", desc: "无状态分布式SQL解析、智能代价优化器与分布式执行引擎" },
      { layer: "存储层 NovaKV", desc: "基于Raft共识算法的强一致性多副本分布式键值存储" },
      { layer: "分析层 NovaColumn", desc: "实时行转列同步引擎与向量化SIMD并行查询加速" }
    ],
    useCases: [
      "集团核心清结算与账户流水系统高可靠存储",
      "全链路订单海量历史数据实时检索与实时风控特征计算"
    ],
    updatedAt: "2026-09-05"
  },

  // 2. 智能协同与办公
  {
    id: "PROD-COLLAB-001",
    name: "WorkPulse 智能协同办公套件",
    code: "WorkPulse Suite",
    category: "collab",
    categoryLabel: "智能协同与办公",
    tagline: "新一代现代化数字化办公枢纽，深度集成IM通信、日程日历、视频会议与任务待办。",
    status: "active",
    statusLabel: "在售商用",
    version: "v4.2.0",
    scenarios: ["跨国协同与全球化出海", "企业大模型与知识智变"],
    scenarioIds: ["global-expansion", "ai-transformation"],
    highlights: ["跨国多时区智能排程", "会议AI实时纪要与转译", "组织架构多维权限树", "多端实时无缝同步"],
    featured: true,
    featuredRank: 2,
    featuredBadge: "全员协同",
    metrics: [
      { label: "活跃员工覆盖", value: "100%" },
      { label: "跨部门协同效率提升", value: "45%" },
      { label: "AI纪要准确率", value: "98.2%" }
    ],
    officialUrl: "https://workpulse.example.internal/home",
    systemUrl: "https://workpulse-app.example.internal",
    manualId: "DOC-HR-001",
    manualTitle: "《WorkPulse 企业办公协同操作手册》",
    owner: "张雅欣",
    ownerDept: "数字办公产品部",
    contactEmail: "zhangyx@example.com",
    contactTel: "8310",
    iconBg: "linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)",
    iconSymbol: "💼",
    overview: "WorkPulse 是企业员工开展日常协作的核心载体。通过整合即时沟通、会议、日历与任务流，结合AI自动化助理，为全员创造敏捷高效、无边界的协同工作体验。",
    architecture: [
      { layer: "通讯底座", desc: "端到端双重加密IM通道与千万级并发长连接中继" },
      { layer: "协同引擎", desc: "OT协同算法、富文本即时广播与多端离线冲突合并" },
      { layer: "AI 助理层", desc: "嵌入式WorkAI智能助手，支持日程自动规划、会话纪要提炼" }
    ],
    useCases: [
      "跨部门大型项目虚拟战队快速建群与任务看板协同",
      "全球多语言实时字幕与会议决议自动追踪分派"
    ],
    updatedAt: "2026-09-28"
  },
  {
    id: "PROD-COLLAB-002",
    name: "FlowCraft 低代码流程与表单引擎",
    code: "FlowCraft BPM",
    category: "collab",
    categoryLabel: "智能协同与办公",
    tagline: "可视化拖拽式企业业务流程构建平台，快速打通审批链条与异构业务系统集成。",
    status: "active",
    statusLabel: "在售商用",
    version: "v3.8.5",
    scenarios: ["跨国协同与全球化出海", "智能制造与供应链协同"],
    scenarioIds: ["global-expansion", "smart-manufacturing"],
    highlights: ["复杂会签/加签分支支持", "低代码动态表单设计器", "50+标准连接器开箱即用", "移动端一键秒级审批"],
    featured: false,
    metrics: [
      { label: "上线业务流程", value: "420+ 套" },
      { label: "审批流平均耗时缩短", value: "62%" }
    ],
    officialUrl: "https://flowcraft.example.internal",
    systemUrl: "https://flowcraft-designer.example.internal",
    manualId: "DOC-PROC-001",
    manualTitle: "《FlowCraft 企业流程设计与接入指南》",
    owner: "王建军",
    ownerDept: "企业应用数字化部",
    contactEmail: "wangjj@example.com",
    contactTel: "8315",
    iconBg: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
    iconSymbol: "⚡",
    overview: "FlowCraft 帮助企业业务人员无需专业编程即可在数小时内快速搭建符合合规要求的请假、采购、报销、商务合同审批流，实现全集团业务流程规范化、自动化。",
    architecture: [
      { layer: "设计引擎", desc: "BPMN 2.0规范可视化画布，支持分支、并行、动态加签" },
      { layer: "表单解析", desc: "动态JSON Schema渲染引擎，支持复杂关联校验与子表联动" },
      { layer: "集成网关", desc: "支持Webhook、RESTful接口与企业主数据中心双向打通" }
    ],
    useCases: [
      "财务报销、行政领用与IT资产领用的标准化线上审批",
      "跨系统合同评审与法务合规会签全生命周期追溯"
    ],
    updatedAt: "2026-09-12"
  },
  {
    id: "PROD-COLLAB-003",
    name: "DocuHub 智能知识库与文档空间",
    code: "DocuHub Wiki",
    category: "collab",
    categoryLabel: "智能协同与办公",
    tagline: "结构化沉淀企业知识资产的多人实时协作文档，支持智能语义检索与版本回溯。",
    status: "active",
    statusLabel: "在售商用",
    version: "v2.9.0",
    scenarios: ["企业大模型与知识智变", "跨国协同与全球化出海"],
    scenarioIds: ["ai-transformation", "global-expansion"],
    highlights: ["多人毫秒级协同编辑", "知识图谱与文档双向链接", "精细到行级的权限控制", "企业级水印与防泄漏"],
    featured: false,
    metrics: [
      { label: "沉淀知识页面", value: "180万+" },
      { label: "每日文档查阅量", value: "35万次" }
    ],
    officialUrl: "https://docuhub.example.internal",
    systemUrl: "https://docuhub-workspace.example.internal",
    manualId: "DOC-TMP-001",
    manualTitle: "《DocuHub 知识库搭建与最佳实践指南》",
    owner: "赵雪",
    ownerDept: "企业知识管理部",
    contactEmail: "zhaoxue@example.com",
    contactTel: "8322",
    iconBg: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    iconSymbol: "📚",
    overview: "DocuHub 作为集团统一的数字知识大脑，提供从团队Wiki、产品文档、技术白皮书到制度汇编的完整载体，助力组织经验沉淀与跨部门信息透明。",
    architecture: [
      { layer: "协同内核", desc: "基于CRDT算法的多人实时协同冲突解决引擎" },
      { layer: "内容存储", desc: "Git-like多分支版本历史管理与富文本块级存储模型" },
      { layer: "智能检索", desc: "混合向量与全文倒排索引，精准定位跨格式文档内容" }
    ],
    useCases: [
      "产研团队敏捷PRD、接口文档与架构演进沉淀",
      "新人入职指引与业务知识库的自助检索学习"
    ],
    updatedAt: "2026-08-20"
  },

  // 3. 数据智能与AI大模型
  {
    id: "PROD-AI-001",
    name: "NovaAI 智元企业大模型服务平台",
    code: "NovaAI Engine",
    category: "ai",
    categoryLabel: "数据智能与AI大模型",
    tagline: "企业私有化大模型基础设施与Agent编排中枢，提供开箱即用的AI助理与领域微调能力。",
    status: "active",
    statusLabel: "在售商用",
    version: "v3.0.0 Pro",
    scenarios: ["企业大模型与知识智变", "智慧金融与高可用风控", "全域零售与客户体验"],
    scenarioIds: ["ai-transformation", "financial-security", "omni-retail"],
    highlights: ["支持多模态私有化模型接入", "企业级RAG混合知识检索", "多Agent智能协同编排", "合规内容安全过滤网关"],
    featured: true,
    featuredRank: 3,
    featuredBadge: "AI 旗舰",
    metrics: [
      { label: "日调用 Token 规模", value: "15亿+" },
      { label: "问答语义准确率", value: "96.8%" },
      { label: "接入内部系统", value: "80+" }
    ],
    officialUrl: "https://novaai.example.internal/portal",
    systemUrl: "https://novaai-studio.example.internal",
    manualId: "DOC-PROD-004",
    manualTitle: "《NovaAI 平台接入规范与 Prompt 工程开发手册》",
    owner: "黄智峰",
    ownerDept: "人工智能创新实验室",
    contactEmail: "huangzf@example.com",
    contactTel: "8401",
    iconBg: "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)",
    iconSymbol: "🤖",
    overview: "NovaAI 为企业各业务场景提供强大而安全的认知智能底座。支持接入国内外主流大模型及集团私有微调模型，提供可视化 Prompt 编排、知识库构建、工作流编排与安全防护网关。",
    architecture: [
      { layer: "模型基座", desc: "多基座大模型（LLM/VLM/Embedding）统一推理调度与分流" },
      { layer: "RAG 增强", desc: "多路召回重排引擎（向量检索 + BM25 + Cross-Encoder）" },
      { layer: "Agent 编排", desc: "支持 ReAct / Plan-and-Solve 范式的智能体自治协作引擎" },
      { layer: "安全审计", desc: "输入隐私数据脱敏、Prompt 注入防御与输出合规风控过滤" }
    ],
    useCases: [
      "智能内部客服机器人，7x24小时解答IT/HR/制度问题，解决率达85%",
      "研发代码智能补全与单元测试自动生成，研发提效25%",
      "营销文案多语言智能生成与合规批量审核"
    ],
    updatedAt: "2026-10-02"
  },
  {
    id: "PROD-AI-002",
    name: "DataMatrix 全域实时湖仓中台",
    code: "DataMatrix Lakehouse",
    category: "ai",
    categoryLabel: "数据智能与AI大模型",
    tagline: "一站式现代数据开发与治理平台，实现批流一体、实时计算与全域数据资产标准化。",
    status: "active",
    statusLabel: "在售商用",
    version: "v4.1.2",
    scenarios: ["企业大模型与知识智变", "全域零售与客户体验", "智能制造与供应链协同"],
    scenarioIds: ["ai-transformation", "omni-retail", "smart-manufacturing"],
    highlights: ["批流一体实时计算引擎", "全链路数据血缘追溯", "数据指标规范化建模", "资产集市自助分析"],
    featured: false,
    metrics: [
      { label: "日处理实时事件", value: "120亿条" },
      { label: "数据同步延迟", value: "< 3秒" }
    ],
    officialUrl: "https://datamatrix.example.internal",
    systemUrl: "https://datamatrix-dev.example.internal",
    manualId: "DOC-PROD-005",
    manualTitle: "《DataMatrix 湖仓开发与数据治理规范》",
    owner: "周天成",
    ownerDept: "大数据技术部",
    contactEmail: "zhoutc@example.com",
    contactTel: "8412",
    iconBg: "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)",
    iconSymbol: "📊",
    overview: "DataMatrix 解决企业数据孤岛问题，整合各业务线海量数据。支持从数据采集、清洗、实时计算、指标建模到数据服务的全生命周期管理，为精准运营与经营分析提供可信数据底座。",
    architecture: [
      { layer: "计算引擎", desc: "Flink批流一体计算引擎与Spark大规模离线分析集群" },
      { layer: "湖仓存储", desc: "基于Iceberg/Parquet的高性能湖仓存储与元数据中心" },
      { layer: "资产治理", desc: "指标语义层定义、数据质量智能稽核与敏感字段级血缘图谱" }
    ],
    useCases: [
      "全渠道销售订单实时大屏与经营驾驶舱秒级刷新",
      "用户全生命周期标签画像与智能分群推荐模型底座"
    ],
    updatedAt: "2026-09-15"
  },
  {
    id: "PROD-AI-003",
    name: "DeepInsight 智能商业分析与报表BI",
    code: "DeepInsight BI",
    category: "ai",
    categoryLabel: "数据智能与AI大模型",
    tagline: "对话式交互与低代码拖拽的下一代智能BI平台，让人人都能用自然语言洞察业务数据。",
    status: "active",
    statusLabel: "在售商用",
    version: "v2.5.0",
    scenarios: ["企业大模型与知识智变", "全域零售与客户体验"],
    scenarioIds: ["ai-transformation", "omni-retail"],
    highlights: ["自然语言Text-to-SQL", "30+专业图表组件库", "异动数据智能归因分析", "移动端报表实时推送"],
    featured: false,
    metrics: [
      { label: "生成报表与看板", value: "3,600+" },
      { label: "数据洞察提效", value: "70%" }
    ],
    officialUrl: "https://deepinsight.example.internal",
    systemUrl: "https://deepinsight-app.example.internal",
    manualId: "DOC-PROD-006",
    manualTitle: "《DeepInsight 自助分析与大屏制作手册》",
    owner: "沈悦",
    ownerDept: "商业智能部",
    contactEmail: "shenyue@example.com",
    contactTel: "8420",
    iconBg: "linear-gradient(135deg, #be185d 0%, #f472b6 100%)",
    iconSymbol: "📈",
    overview: "DeepInsight 融合生成式AI与传统商业智能，业务人员只需提问“上月华东区营收为何下降”，系统即可自动生成交叉分析看板与关键归因结论，大幅降低数据消费门槛。",
    architecture: [
      { layer: "自然语言层", desc: "领域NL2SQL语义解析器，结合Schema Linking精准生成查询" },
      { layer: "可视化渲染", desc: "基于WebGL/Canvas的高性能海量数据可视化图表引擎" },
      { layer: "智能预警", desc: "时间序列异常检测算法与多维下钻归因根因分析引擎" }
    ],
    useCases: [
      "管理层经营分析会议实时互动问答看板",
      "区域销售人员日常业绩追踪与客户流失风险预警"
    ],
    updatedAt: "2026-08-10"
  },
  {
    id: "PROD-AI-004",
    name: "PromptHub 提示词工程与Agent实验室",
    code: "PromptHub Lab",
    category: "ai",
    categoryLabel: "数据智能与AI大模型",
    tagline: "面向全员的生成式AI实验创新工坊，支持Prompt协同评测、私域知识挂载与场景应用一键发布。",
    status: "beta",
    statusLabel: "公测试点",
    version: "v1.2.0-beta",
    scenarios: ["企业大模型与知识智变"],
    scenarioIds: ["ai-transformation"],
    highlights: ["Prompt版本对比与盲测", "开箱即用插件生态", "无代码轻量Agent构建", "API一键转微服务发布"],
    featured: false,
    metrics: [
      { label: "内部孵化Agent", value: "650+" },
      { label: "参与测试员工", value: "2,800+" }
    ],
    officialUrl: "https://prompthub.example.internal/lab",
    systemUrl: "https://prompthub-studio.example.internal",
    manualId: "DOC-PROD-007",
    manualTitle: "《PromptHub 企业Agent开发与评测指引》",
    owner: "徐子航",
    ownerDept: "AI创新实验室",
    contactEmail: "xuzh@example.com",
    contactTel: "8433",
    iconBg: "linear-gradient(135deg, #4338ca 0%, #818cf8 100%)",
    iconSymbol: "🧪",
    overview: "PromptHub 旨在激发全员AI创新。任何岗位的员工都可以在画布上通过积木式拼接，快速构建符合自己日常业务流程的专业Agent，并在部门内分享使用。",
    architecture: [
      { layer: "可视化编排", desc: "基于节点流图的可视化逻辑连接器与上下文记忆注入" },
      { layer: "自动化评测", desc: "多指标自动打分（幻觉率/相关性/完整度）与AB对比" },
      { layer: "沙箱执行", desc: "隔离安全的Python代码执行与外部工具API鉴权沙盒" }
    ],
    useCases: [
      "招聘团队简历结构化提取与多维度匹配智能Agent",
      "法务合同条款违规风险点秒级识别与批注意见生成"
    ],
    updatedAt: "2026-09-22"
  },

  // 4. 供应链与数字商业
  {
    id: "PROD-COMM-001",
    name: "OmniCommerce 全渠道数字商业中台",
    code: "OmniCommerce Core",
    category: "commerce",
    categoryLabel: "供应链与数字商业",
    tagline: "打通线上自营、三方电商与线下门店的全渠道商品、订单、库存与会员交易中枢。",
    status: "active",
    statusLabel: "在售商用",
    version: "v5.2.0",
    scenarios: ["全域零售与客户体验", "跨国协同与全球化出海"],
    scenarioIds: ["omni-retail", "global-expansion"],
    highlights: ["千万级商品统一SPU/SKU", "跨渠道库存实时共享防超卖", "复杂促销营销引擎", "全渠道会员积分通兑"],
    featured: true,
    featuredRank: 4,
    featuredBadge: "商业核心",
    metrics: [
      { label: "年支撑商品交易额", value: "260亿+" },
      { label: "大促峰值订单并发", value: "85,000 单/秒" }
    ],
    officialUrl: "https://omnicommerce.example.internal",
    systemUrl: "https://omnicommerce-admin.example.internal",
    manualId: "DOC-PROD-008",
    manualTitle: "《OmniCommerce 全渠道业务中台操作与集成规范》",
    owner: "郭晓峰",
    ownerDept: "新零售产品研发部",
    contactEmail: "guoxf@example.com",
    contactTel: "8501",
    iconBg: "linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)",
    iconSymbol: "🛍️",
    overview: "OmniCommerce 是集团零售业务的核心数字化支柱。统一管理全国数千家门店与线上全网数十个电商平台的商品信息、交易订单流与资金结算，实现一盘货统管与精准履约。",
    architecture: [
      { layer: "商品中心", desc: "多组织、多品牌、多层级类目SPU/SKU主数据统一建模" },
      { layer: "订单履约", desc: "分布式订单流水线，智能分单、拆单、路由至最优就近发货仓" },
      { layer: "库存中心", desc: "分布式极速内存库存预扣减与全链路物理/逻辑库存对账" }
    ],
    useCases: [
      "全国连锁门店‘线上下单、门店自提/小时达’即时零售履约",
      "跨境电商多币种、多清关主体订单合规流转与自动清分"
    ],
    updatedAt: "2026-09-10"
  },
  {
    id: "PROD-COMM-002",
    name: "ChainLink 智能供应链与物流履约中枢",
    code: "ChainLink SCM",
    category: "commerce",
    categoryLabel: "供应链与数字商业",
    tagline: "端到端可视化智能供应链系统，覆盖采购寻源、智能仓储WMS、干线运输TMS与智能补货。",
    status: "active",
    statusLabel: "在售商用",
    version: "v3.6.0",
    scenarios: ["智能制造与供应链协同", "全域零售与客户体验"],
    scenarioIds: ["smart-manufacturing", "omni-retail"],
    highlights: ["AI销量预测与智能动态补货", "3D可视化仓储作业调度", "车辆路径算法优化(VRP)", "全流程冷链与物联温控溯源"],
    featured: false,
    metrics: [
      { label: "平均库存周转天数降低", value: "22%" },
      { label: "干线物流运输成本节省", value: "15.4%" }
    ],
    officialUrl: "https://chainlink.example.internal",
    systemUrl: "https://chainlink-tms.example.internal",
    manualId: "DOC-PROD-009",
    manualTitle: "《ChainLink 智能供应链操作手册与接口文档》",
    owner: "孙浩",
    ownerDept: "供应链科技部",
    contactEmail: "sunhao@example.com",
    contactTel: "8515",
    iconBg: "linear-gradient(135deg, #c2410c 0%, #f97316 100%)",
    iconSymbol: "🚚",
    overview: "ChainLink 融合物联网与运筹优化算法，连接供应商、中央大仓、前置网点与物流承运商，实现供应链从源头采购到终端交付的全链路可视化透明与智能化调度。",
    architecture: [
      { layer: "寻源协同", desc: "SRM供应商全生命周期管理、电子招投标与在线对账" },
      { layer: "仓储引擎", desc: "智能波次合单、AGV机器人路径规划与高架立体库管理" },
      { layer: "运输大脑", desc: "自研GIS地图算法、智能配载与干支线路径综合最优求解" }
    ],
    useCases: [
      "全国多仓智能协同调拨与保质期临期智能预警",
      "供应链金融授信下的货押监管与实时电子仓单签发"
    ],
    updatedAt: "2026-08-25"
  },

  // 5. 金融科技与风控
  {
    id: "PROD-FIN-001",
    name: "FinGuard 毫秒级交易风控与反欺诈引擎",
    code: "FinGuard Risk",
    category: "fintech",
    categoryLabel: "金融科技与风控",
    tagline: "基于图计算与流式机器学习的实时交易风控平台，毫秒级识别羊毛党、盗刷与黑产攻击。",
    status: "active",
    statusLabel: "在售商用",
    version: "v4.0.0 Enterprise",
    scenarios: ["智慧金融与高可用风控", "全域零售与客户体验"],
    scenarioIds: ["financial-security", "omni-retail"],
    highlights: ["15ms内完成超200个规则决策", "万亿级关联实体关系图谱", "自适应无监督异常行为检测", "风险特征热更新无需重启"],
    featured: false,
    metrics: [
      { label: "日均拦截恶意交易", value: "280万+" },
      { label: "平均决策响应耗时", value: "11.2 ms" },
      { label: "拦截挽回损失", value: "1.2亿+ 元" }
    ],
    officialUrl: "https://finguard.example.internal",
    systemUrl: "https://finguard-console.example.internal",
    manualId: "DOC-PROD-010",
    manualTitle: "《FinGuard 实时风控规则引擎配置与使用手册》",
    owner: "赵德森",
    ownerDept: "风险合规技术部",
    contactEmail: "zhaods@example.com",
    contactTel: "8601",
    iconBg: "linear-gradient(135deg, #047857 0%, #10b981 100%)",
    iconSymbol: "🛡️",
    overview: "FinGuard 是保障企业全域资金交易与业务合规的核心防火墙。具备全链路实时特征计算、动态黑白名单库与关联图网络分析，有效防范套现、虚假交易、账号被盗与营销作弊。",
    architecture: [
      { layer: "特征计算", desc: "基于流式计算的滑窗计数、频次统计与设备指纹关联" },
      { layer: "规则图谱", desc: "自研高性能动态规则解释器与分布式分布式知识图数据库" },
      { layer: "风控模型", desc: "集成GBDT、图神经网络(GNN)与大语言模型协同风险研判" }
    ],
    useCases: [
      "大促营销补贴防黄牛刷单与机器抢券秒级拦截",
      "企业大额转账多因子人脸识别与异地环境风险核验"
    ],
    updatedAt: "2026-09-08"
  },
  {
    id: "PROD-FIN-002",
    name: "PayLink 全球多币种清结算网关",
    code: "PayLink Gateway",
    category: "fintech",
    categoryLabel: "金融科技与风控",
    tagline: "安全合规的一站式全球多币种支付接入与智能分账平台，支持多国本地主流支付方式与实时对账。",
    status: "active",
    statusLabel: "在售商用",
    version: "v3.1.0",
    scenarios: ["跨国协同与全球化出海", "智慧金融与高可用风控"],
    scenarioIds: ["global-expansion", "financial-security"],
    highlights: ["支持40+国家及地区本地钱包", "智能最优汇率与费率路由", "自动化双向差错对账与平账", "PCI-DSS Level 1安全认证"],
    featured: false,
    metrics: [
      { label: "接入支付渠道", value: "65+" },
      { label: "交易成功率", value: "99.85%" }
    ],
    officialUrl: "https://paylink.example.internal",
    systemUrl: "https://paylink-merchant.example.internal",
    manualId: "DOC-PROD-011",
    manualTitle: "《PayLink 全球支付网关技术接入规范》",
    owner: "高雅",
    ownerDept: "跨境支付产品部",
    contactEmail: "gaoya@example.com",
    contactTel: "8618",
    iconBg: "linear-gradient(135deg, #0e7490 0%, #06b6d4 100%)",
    iconSymbol: "💳",
    overview: "PayLink 为集团出海业务及境内外商户提供全流程安全、透明、合规的资金流转服务。支持聚合收单、多层级分账、跨币种兑换及自动化对账处理。",
    architecture: [
      { layer: "渠道适配", desc: "标准化协议封装多国银行卡网关、本地电子钱包与加密通道" },
      { layer: "路由清算", desc: "多通道实时可用性探测、费率最优动态路由与合规申报" },
      { layer: "账务对账", desc: "高可靠分布式双账本体系、自动化T+0/T+1多源账单平账" }
    ],
    useCases: [
      "海外电商站点本地化信用卡、Apple Pay、本地电子钱包聚合收款",
      "平台多商户入驻即时分账与自动化合规纳税代扣"
    ],
    updatedAt: "2026-08-18"
  },

  // 6. 信息安全与合规
  {
    id: "PROD-SEC-001",
    name: "ShieldMesh 零信任安全访问与边缘防御网关",
    code: "ShieldMesh ZeroTrust",
    category: "security",
    categoryLabel: "信息安全与合规",
    tagline: "以身份为中心的企业无边界安全访问控制体系，彻底替代传统低效脆弱的VPN连接。",
    status: "active",
    statusLabel: "在售商用",
    version: "v2.8.0",
    scenarios: ["零信任安全与合规审计", "跨国协同与全球化出海"],
    scenarioIds: ["zero-trust-sec", "global-expansion"],
    highlights: ["持续自适应身份与环境信任评估", "业务系统隐藏不暴露公网IP", "微隔离精准至API接口级别", "极简客户端单点登录"],
    featured: false,
    metrics: [
      { label: "日常受保护访问", value: "100万+ 次/天" },
      { label: "公网暴露面缩减", value: "92%" }
    ],
    officialUrl: "https://shieldmesh.example.internal",
    systemUrl: "https://shieldmesh-admin.example.internal",
    manualId: "DOC-HR-003",
    manualTitle: "《信息安全行为规范与零信任安全连接指引》",
    owner: "严峻",
    ownerDept: "信息安全与合规部",
    contactEmail: "yanjun@example.com",
    contactTel: "8008",
    iconBg: "linear-gradient(135deg, #475569 0%, #1e293b 100%)",
    iconSymbol: "🔒",
    overview: "ShieldMesh 践行‘从不信任，始终验证’理念。员工无论身处办公室、家中还是差旅途中，均需通过动态生物验证与设备安全健康度检查，以最小权限安全访问内网资源。",
    architecture: [
      { layer: "控制中心", desc: "统一身份认证源(IdP)、动态权限策略引擎与设备合规检查" },
      { layer: "接入代理", desc: "全球边缘部署的安全反向代理集群，支持TLS 1.3国密加密" },
      { layer: "审计追踪", desc: "每次访问会话完整指令级记录与异常大流量下载实时阻断" }
    ],
    useCases: [
      "居家与差旅办公人员无感免配快速安全直连内网办公系统",
      "外包研发团队特定代码仓库与测试环境的安全隔离访问"
    ],
    updatedAt: "2026-09-20"
  },
  {
    id: "PROD-SEC-002",
    name: "DataPrivacy 敏感数据发现与合规审计平台",
    code: "DataPrivacy Audit",
    category: "security",
    categoryLabel: "信息安全与合规",
    tagline: "全自动化敏感数据资产测绘、动态脱敏与泄密溯源审计，助力企业符合GDPR与数据安全法。",
    status: "incubating",
    statusLabel: "内部孵化",
    version: "v1.0.0-rc",
    scenarios: ["零信任安全与合规审计", "跨国协同与全球化出海"],
    scenarioIds: ["zero-trust-sec", "global-expansion"],
    highlights: ["NLP智能识别身份证/银行卡/手机号", "透明无感知动态脱敏", "暗水印泄密精准溯源", "合规风险自动化生成体检报告"],
    featured: false,
    metrics: [
      { label: "敏感字段自动识别率", value: "99.4%" },
      { label: "测绘数据库实例", value: "450+" }
    ],
    officialUrl: "https://dataprivacy.example.internal",
    systemUrl: "https://dataprivacy-console.example.internal",
    manualId: "DOC-SEC-002",
    manualTitle: "《企业敏感数据分类分级与安全防护指南》",
    owner: "韩雪丽",
    ownerDept: "法务与合规部",
    contactEmail: "hanxl@example.com",
    contactTel: "8015",
    iconBg: "linear-gradient(135deg, #334155 0%, #64748b 100%)",
    iconSymbol: "🕵️",
    overview: "DataPrivacy 自动扫描集团各库表、日志与文件共享目录，建立敏感数据资产分布全景图。在员工查询开发或导出时执行动态脱敏，并为所有文件嵌入不可见暗水印，从根本上防止核心数据外泄。",
    architecture: [
      { layer: "探针测绘", desc: "无侵入分布式数据库探针与文件内容正则/NLP特征扫描" },
      { layer: "动态脱敏", desc: "SQL语法解析与替换引擎，支持保留格式脱敏(FPE)" },
      { layer: "水印追溯", desc: "抗截图、抗拍照、抗打印的频域盲水印嵌入与逆向提取" }
    ],
    useCases: [
      "客服系统查询用户手机号与详细住址的自动掩码脱敏",
      "开发与测试环境真实生产数据一键自动仿真脱敏导出"
    ],
    updatedAt: "2026-09-25"
  }
];

// 业务场景解决方案矩阵映射关系 (用于矩阵视图与全景导航)
window.SCENARIO_SOLUTIONS = [
  {
    id: "global-expansion",
    title: "跨国协同与全球化出海解决方案",
    tagline: "为跨国业务、出海电商与多地域分布式团队提供底层算力、协同办公与全球结算一体化支撑。",
    coverGradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    icon: "🌐",
    keyBenefits: ["全球分布式节点网络延迟 < 50ms", "支持多语言多币种自动清分与报税", "跨时区团队无缝协同与会议翻译"],
    productIds: ["PROD-CLOUD-001", "PROD-COLLAB-001", "PROD-FIN-002", "PROD-SEC-001"],
    caseHighlight: "赋能海外独立站电商业务，实现40+国支付接入，大促期间全球协同零故障。"
  },
  {
    id: "ai-transformation",
    title: "企业大模型赋能与知识智变解决方案",
    tagline: "以私有化大模型为核心，将企业沉淀的文档、代码与流程资产转化为智能协同生产力。",
    coverGradient: "linear-gradient(135deg, #581c87 0%, #a855f7 100%)",
    icon: "✨",
    keyBenefits: ["私域知识问答准确率达 96.8%", "全员自动化 Agent 快速低代码构建", "研发编码与营销文案提效 30%+"],
    productIds: ["PROD-AI-001", "PROD-AI-004", "PROD-COLLAB-003", "PROD-AI-003"],
    caseHighlight: "全集团上线智能服务助手，月均处理35万次业务咨询与知识问答，提效显著。"
  },
  {
    id: "omni-retail",
    title: "全域数字零售与智慧供应链解决方案",
    tagline: "统一全渠道商品、库存、订单与结算，打造线上线下一体化的高并发零售闭环体系。",
    coverGradient: "linear-gradient(135deg, #991b1b 0%, #f43f5e 100%)",
    icon: "🛒",
    keyBenefits: ["跨渠道一盘货统管，库存周转提升22%", "千万级高并发秒杀峰值毫秒级响应", "智能动态补货与干线运输成本优化"],
    productIds: ["PROD-COMM-001", "PROD-COMM-002", "PROD-AI-002", "PROD-FIN-001"],
    caseHighlight: "支撑全国数千家门店大促活动，实现实时库存防超卖与极速就近履约。"
  },
  {
    id: "financial-security",
    title: "智慧金融与高可用交易风控解决方案",
    tagline: "金融级高可用分布式数据库底座，配合毫秒级智能风控反欺诈，全面护航核心交易合规与安全。",
    coverGradient: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
    icon: "🛡️",
    keyBenefits: ["数据库 RPO=0 / RTO < 10秒", "15ms 内完成超200项风控规则决策", "万亿级资金清结算账务实时平账"],
    productIds: ["PROD-CLOUD-003", "PROD-FIN-001", "PROD-CLOUD-002", "PROD-AI-001"],
    caseHighlight: "全年无故障支撑核心账务流转，累计成功阻断数千万元恶意作弊欺诈交易。"
  },
  {
    id: "smart-manufacturing",
    title: "智能制造与供应链数字化协同解决方案",
    tagline: "打通物联感知、生产排程、仓储调度与采购流程，实现工业制造与供应链全链路降本增效。",
    coverGradient: "linear-gradient(135deg, #9a3412 0%, #f97316 100%)",
    icon: "🏭",
    keyBenefits: ["全链路生产与物流作业状态透明可见", "复杂采购与审批流全自动化串联", "算力与数据中台实时处理物联海量数据"],
    productIds: ["PROD-COMM-002", "PROD-COLLAB-002", "PROD-CLOUD-001", "PROD-AI-002"],
    caseHighlight: "协助工业协同园区实现设备联网与智能巡检，工单流转耗时缩短50%以上。"
  },
  {
    id: "zero-trust-sec",
    title: "零信任安全访问与数据合规治理解决方案",
    tagline: "以身份为基准的动态信任评估，结合敏感数据全链路加密与盲水印溯源，保障核心资产安全。",
    coverGradient: "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
    icon: "🔐",
    keyBenefits: ["公网暴露面降低 90% 以上", "敏感数据全自动识别与动态脱敏", "泄密事故支持盲水印逆向取证溯源"],
    productIds: ["PROD-SEC-001", "PROD-SEC-002", "PROD-CLOUD-002"],
    caseHighlight: "通过国内外多项权威安全等级认证，为全员居家与远程办公构筑坚固防护盾牌。"
  }
];
