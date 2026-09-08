export type Language = 'zh' | 'en';
export type BilingualText = Record<Language, string>;

export const profile = {
  name: { zh: '尹积余', en: 'Jiyu Yin' },
  email: 'birenyin@gmail.com',
  github: 'https://github.com/birenyin',
  bio: {
    zh: '我是厦门大学博士研究生，关注自然语言处理、知识图谱、多模态数据分析与医学人工智能。我的研究经历涉及开放域事件抽取、知识图谱推理、医学文本处理，以及大语言模型与智能体应用。',
    en: 'I am a PhD candidate at Xiamen University. My interests span natural language processing, knowledge graphs, multimodal data analysis, and medical AI. My research experience includes open-domain event extraction, knowledge graph reasoning, medical text processing, and applications of large language models and AI agents.',
  },
  education: [
    { date: { zh: '当前', en: 'Present' }, school: { zh: '厦门大学', en: 'Xiamen University' }, degree: { zh: '博士研究生', en: 'PhD candidate' } },
    { date: { zh: '2023 — 2026', en: '2023 — 2026' }, school: { zh: '华侨大学', en: 'Huaqiao University' }, degree: { zh: '软件工程 · 硕士阶段', en: 'Graduate studies in Software Engineering' } },
    { date: { zh: '2019 — 2023', en: '2019 — 2023' }, school: { zh: '赣南医科大学', en: 'Gannan Medical University' }, degree: { zh: '物联网工程 · 本科', en: 'Undergraduate studies in Internet of Things Engineering' } },
  ],
  research: [
    {
      title: { zh: '自然语言处理', en: 'Natural language processing' },
      detail: { zh: '围绕事件语义建模与开放域无监督事件抽取，结合 AMR 语义图和机器阅读理解，研究事件论元的抽取、补全与合并。', en: 'Event semantics and unsupervised open-domain event extraction, combining AMR semantic graphs and machine reading comprehension to extract, complete, and merge event arguments.' },
      tags: { zh: '事件抽取 / 语义理解', en: 'Event extraction / Semantic understanding' },
    },
    {
      title: { zh: '知识图谱与推理', en: 'Knowledge graphs & reasoning' },
      detail: { zh: '参与跨语言知识图谱合规服务研究，关注知识抽取与融合、可解释推理、智能问答，以及知识驱动的辅助决策。', en: 'Cross-lingual knowledge graphs for compliance services, with work on knowledge extraction and fusion, explainable reasoning, question answering, and knowledge-based decision support.' },
      tags: { zh: '知识表示 / 智能决策', en: 'Knowledge representation / Decision support' },
    },
    {
      title: { zh: '医学人工智能', en: 'Medical artificial intelligence' },
      detail: { zh: '开展医学文本结构化、医疗对话数据与护理知识服务相关研究，探索基于知识图谱和多层次评估的护理序贯决策方法。', en: 'Structured medical text, medical dialogue data, and nursing knowledge services, including knowledge graph methods and multi-level evaluation for nursing sequential decision support.' },
      tags: { zh: '医学文本 / 护理知识图谱', en: 'Medical text / Nursing knowledge graphs' },
    },
  ],
  publications: [
    {
      title: { zh: '基于事件语义学的开放域无监督事件抽取', en: 'Unsupervised Open Domain Event Extraction Based on Event Semantics' },
      authors: { zh: '尹积余、许晶晶、王兆阳、王华珍、周浩', en: 'Jiyu Yin, Jingjing Xu, Zhaoyang Wang, Huazhen Wang, Hao Zhou' },
      venue: { zh: '华侨大学学报（自然科学版）', en: 'Journal of Huaqiao University (Natural Science)' },
      status: 'accepted', year: '2026', firstAuthor: true,
      doi: 'https://doi.org/10.11830/ISSN.1000-5013.202510064',
    },
    {
      title: { zh: '基于大语言模型与自动化指令的医疗对话数据集生成', en: 'LLM-based medical dialogue dataset generation with automated instructions' },
      authors: { zh: 'Hao Zhou, Xuanlang Hu, Ting He, Haibin You, Jiyu Yin, Jingjing Xu, Zhizhong Lin, Huazhen Wang', en: 'Hao Zhou, Xuanlang Hu, Ting He, Haibin You, Jiyu Yin, Jingjing Xu, Zhizhong Lin, Huazhen Wang' },
      venue: { zh: 'Scientific Reports · 16, 12410', en: 'Scientific Reports · 16, 12410' },
      status: 'published', year: '2026', firstAuthor: false,
      doi: 'https://www.nature.com/articles/s41598-025-34835-1',
    },
    {
      title: { zh: '基于知识图谱多层次评估策略的护理序贯决策方法', en: 'Multi-level Evaluation Strategy of Knowledge Graph for Nursing Sequential Decision' },
      authors: { zh: '尹积余、方昱龙、杨盛兰、吴谨准、尤海滨、陈坚、王华珍', en: 'Jiyu Yin et al.' },
      venue: { zh: '中国数字医学 · 20(6): 103–110', en: 'China Digital Medicine · 20(6): 103–110' },
      status: 'published', year: '2025', firstAuthor: true,
      doi: 'https://doi.org/10.3969/j.issn.1673-7571.2025.06.017',
    },
  ],
  awards: [
    { year: '2025', title: { zh: '研究生国家奖学金', en: 'National Scholarship for Graduate Students' } },
    { year: '2024', title: { zh: '华为杯研究生数学建模竞赛 · 国家一等奖', en: 'National First Prize, Huawei Cup China Postgraduate Mathematical Contest in Modeling' } },
    { year: '2024', title: { zh: 'MathorCup 数学应用挑战赛大数据竞赛 · 国家一等奖', en: 'National First Prize, MathorCup Big Data Competition' } },
  ],
  projects: [
    {
      name: 'MathModel-Agent', category: 'MATHEMATICAL MODELING',
      description: { zh: '面向数学建模竞赛与科研写作的桌面智能体，支持分阶段工作流、本地文件管理，以及 LaTeX 编辑和编译。', en: 'A desktop agent for mathematical modeling competitions and research writing, with staged workflows, local file management, and LaTeX editing and compilation.' },
      url: 'https://github.com/birenyin/MathModel-Agent',
      tags: { zh: ['数学建模', '科研写作', 'LaTeX'], en: ['Mathematical modeling', 'Research writing', 'LaTeX'] },
    },
    {
      name: 'grid_video_agent', category: 'VIDEO WORKFLOW',
      description: { zh: '将电网新闻、科普内容和网页正文转为短视频任务的本地工作台，支持分镜、中文配音、字幕与视频合成。', en: 'A local workspace that turns power-grid news, science communication, and web articles into short-video workflows, with storyboards, Chinese voiceovers, subtitles, and video assembly.' },
      url: 'https://github.com/birenyin/grid_video_agent',
      tags: { zh: ['短视频', '内容工作流', '语音与字幕'], en: ['Short video', 'Content workflows', 'Voice & subtitles'] },
    },
  ],
};

export const labels = {
  zh: {
    skip: '跳转到正文', home: '尹积余的个人主页', nav: '主要导航', about: '关于', research: '研究', publications: '论文', projects: '项目', contact: '联系',
    subtitle: '厦门大学 · 博士研究生', romanName: 'Jiyu Yin', contactMe: '联系我', education: '教育经历', researchTitle: '研究方向', publicationTitle: '论文成果', awardTitle: '荣誉与奖励', projectsTitle: '开源项目',
    published: '已发表', accepted: '已录用', firstAuthor: '第一作者', paperLink: '论文链接', allProjects: '全部 GitHub 仓库', contactTitle: '保持联系', contactText: '欢迎通过邮件与我交流研究和项目。', backTop: '回到顶部',
    language: 'Switch to English', logo: '余与鱼融合的个人标识', logoMeaning: '以鱼写余，寓意有余与从容。', subjectTags: ['自然语言处理', '知识图谱', '医学人工智能'],
    heroKicker: '探索语言、知识与智能', identityCaption: '厦门大学 · 博士研究生', portrait: '尹积余的个人照片', switchLabel: 'English', researchKicker: '研究兴趣', publicationKicker: '学术成果', awardKicker: '荣誉与奖励', projectKicker: '开源与实践', contactKicker: '交流与合作', educationKicker: '求学经历',
  },
  en: {
    skip: 'Skip to content', home: 'Jiyu Yin’s personal homepage', nav: 'Main navigation', about: 'About', research: 'Research', publications: 'Publications', projects: 'Projects', contact: 'Contact',
    subtitle: 'PhD candidate · Xiamen University', romanName: '尹积余', contactMe: 'Email me', education: 'Education', researchTitle: 'Research interests', publicationTitle: 'Publications', awardTitle: 'Selected honors', projectsTitle: 'Open-source projects',
    published: 'Published', accepted: 'Accepted', firstAuthor: 'First author', paperLink: 'View paper', allProjects: 'All GitHub repositories', contactTitle: 'Get in touch', contactText: 'Feel free to reach out about research and projects.', backTop: 'Back to top',
    language: '切换到中文', logo: 'Personal emblem combining a fish and the Chinese character 余', logoMeaning: 'A fish-shaped 余: a symbol of abundance and composure.', subjectTags: ['Natural language processing', 'Knowledge graphs', 'Medical AI'],
    heroKicker: 'Exploring language, knowledge & intelligence', identityCaption: 'PhD candidate · Xiamen University', portrait: 'Portrait of Jiyu Yin', switchLabel: '中文', researchKicker: 'Research interests', publicationKicker: 'Academic work', awardKicker: 'Recognition', projectKicker: 'Open source & practice', contactKicker: 'Connect & collaborate', educationKicker: 'Academic journey',
  },
};
