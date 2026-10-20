/* Pathway catalogue — single source for home, pathway, courses and course pages (AR + EN).
   Content from: AI_Leadership_Description_and_Structure.docx
                 AI_for_Government_Development_Professions_Description_and_Structure.docx */

const LANG = document.documentElement.lang === 'en' ? 'en' : 'ar';
const t = v => (v && typeof v === 'object' && !Array.isArray(v) && ('ar' in v || 'en' in v)) ? v[LANG] : v;

const UI = {
  modules: { ar: 'وحدات', en: 'modules' },
  module: { ar: 'الوحدة', en: 'Module' },
  blocks: { ar: 'كتلة تعلّم', en: 'learning blocks' },
  blocksShort: { ar: 'كتل', en: 'blocks' },
  block: { ar: 'الكتلة', en: 'Block' },
  seePathway: { ar: 'عرض المسار', en: 'See Pathway' },
  viewCourse: { ar: 'التفاصيل', en: 'Details' },
  free: { ar: 'مجاني', en: 'Free' },
  learnN: { ar: 'تعلّم', en: 'Learn' },
  freeFor: { ar: 'للموظفين الحكوميين', en: 'for government employees' },
  learn: { ar: 'تعلّم', en: 'Learn' },
  collaborate: { ar: 'تعاون', en: 'Collaborate' },
  apply: { ar: 'طبّق', en: 'Apply' },
};

const PATHWAYS = [
  {
    id: 'ai-leadership',
    icon: 'brain-circuit', thumb: 't1',
    field: { ar: 'برامج مركز القيادات الحكومية', en: 'Government Leadership Center Programs' },
    title: { ar: 'قيادة الذكاء الاصطناعي', en: 'AI Leadership' },
    summary: {
      ar: 'بناء القدرة على اتخاذ القرارات المتعلقة بالذكاء الاصطناعي وحوكمتها وقيادتها على مستوى الفريق والمؤسسة والحكومة.',
      en: 'Build the capability to make, govern and lead AI-related decisions at team, organisational and cross-government levels.'
    },
    description: {
      ar: [
        'يبني مسار قيادة الذكاء الاصطناعي القدرة على اتخاذ القرارات المتعلقة بالذكاء الاصطناعي وحوكمتها وقيادتها على مستوى الفريق والمؤسسة والحكومة ككل. وهو موجّه للمشرفين والمديرين والمديرين التنفيذيين والقيادات العليا ممن تشمل مسؤولياتهم تحديد التوجهات، وتخصيص الموارد، والإشراف على المخاطر، أو رعاية التحول المدعوم بالذكاء الاصطناعي.',
        'يجمع المسار بين الاستراتيجية واستشراف المستقبل، والجاهزية المؤسسية، والتنفيذ المرن، والقيادة المستندة إلى البيانات، والذكاء الاصطناعي المسؤول، وحقوق المواطنين، وحوكمة الموردين. ويطبّق المتعلمون هذه المجالات من خلال حالات قيادية، ويختتمون المسار بدمج الأدلة والمتطلبات المؤسسية والحكم المهني في قرار قيادي قابل للدفاع عنه.'
      ],
      en: [
        'AI Leadership builds the capability to make, govern and lead AI-related decisions at team, organisational and cross-government levels. It is intended for supervisors, managers, directors and senior leaders whose responsibilities include setting direction, allocating resources, overseeing risk or sponsoring AI-enabled transformation.',
        'The pathway combines strategy and foresight, organisational readiness, adaptive delivery, data-informed leadership, responsible AI, citizen rights and supplier governance. Learners apply these areas through leadership cases and conclude by integrating evidence, institutional requirements and professional judgement into a defensible leadership decision.'
      ]
    },
    outcomes: {
      ar: [
        'تحليل اتجاهات الذكاء الاصطناعي ذات الصلة، واعتبارات الجاهزية، ومبادئ التنفيذ المرن.',
        'تطبيق تحليل البيانات والحكم المهني لاتخاذ قرارات قيادية مستنيرة ضمن معايير محددة.',
        'تقييم متطلبات الذكاء الاصطناعي المسؤول وحقوق المواطنين وحوكمة الموردين لتحقيق إشراف قيادي فعّال.',
        'تبرير قرار قيادي متكامل باستخدام الأدلة المقدّمة.'
      ],
      en: [
        'Analyze relevant AI trends, readiness considerations, and adaptive delivery principles.',
        'Apply data analysis and professional judgment to make informed leadership decisions within defined parameters.',
        'Assess responsible-AI, citizen-rights, and supplier-governance requirements for effective leadership oversight.',
        'Justify an integrated leadership decision using supplied evidence.'
      ]
    },
    skills: {
      ar: [
        'تحليل اتجاهات الذكاء الاصطناعي والتحول الرقمي والقوى العاملة، وتقييم الجاهزية المؤسسية.',
        'تحديد أولويات مبادرات الذكاء الاصطناعي وتوجيه التنفيذ المرن ضمن الصلاحيات المحددة.',
        'الجمع بين تحليل البيانات والحكم المهني في القرارات القيادية.',
        'تقييم متطلبات الذكاء الاصطناعي المسؤول وحقوق المواطنين والشراكات وحوكمة الموردين.',
        'تبرير قرار قيادي متكامل في الذكاء الاصطناعي والدفاع عنه بالأدلة.'
      ],
      en: [
        'Analyse AI, digital and workforce trends and assess organisational readiness.',
        'Prioritise AI initiatives and guide adaptive delivery within defined authority.',
        'Combine data analysis with professional judgement in leadership decisions.',
        'Assess responsible-AI, citizen-rights, partnership and supplier-governance requirements.',
        'Justify and defend an integrated AI leadership decision using evidence.'
      ]
    },
    knowledge: {
      ar: [
        'الاستشراف الاستراتيجي، والجاهزية للذكاء الاصطناعي، وتحديد أولويات حالات الاستخدام.',
        'التنفيذ المرن، والمشاريع التجريبية، والمنافع، ودورات التعلّم.',
        'اتخاذ القرار المستند إلى البيانات، وحوكمة البيانات بين الوحدات.',
        'الذكاء الاصطناعي المسؤول، وحقوق المواطنين، وإمكانية الوصول، والضمانات، والمراجعة البشرية.',
        'اعتبارات الشراكات والمشتريات وحوكمة الموردين.'
      ],
      en: [
        'Strategic foresight, AI readiness and use-case prioritisation.',
        'Adaptive delivery, pilots, benefits and learning cycles.',
        'Data-driven decision-making and cross-unit data governance.',
        'Responsible AI, citizen rights, accessibility, safeguards and human review.',
        'Partnership, procurement and supplier-governance considerations.'
      ]
    },
    attitude: {
      ar: [
        'حكم قيادي خاضع للمساءلة ومستنير بالأدلة.',
        'قرارات تتمحور حول المواطن، شاملة وشفافة.',
        'الاستعداد لمساءلة الافتراضات وإدارة عدم اليقين.',
        'التعاون عبر الوحدات والتخصصات والشركاء الخارجيين.',
        'الالتزام بالتجريب المسؤول والتحسين المستمر.'
      ],
      en: [
        'Accountable and evidence-informed leadership judgement.',
        'Citizen-centred, inclusive and transparent decision-making.',
        'Readiness to challenge assumptions and manage uncertainty.',
        'Collaboration across units, disciplines and external partners.',
        'Commitment to responsible experimentation and continuous improvement.'
      ]
    },
    audience: {
      ar: 'المشرفون والمديرون والمديرون التنفيذيون والقيادات العليا. يُحدَّد مستوى الكفاءة المناسب وفق صلاحيات المتعلم في اتخاذ القرار، وسلطته المؤسسية، ومستوى مساءلته.',
      en: 'Supervisors, managers, directors and senior leaders. The assigned proficiency stage should reflect the learner\'s decision rights, organisational authority and level of accountability.'
    },
    fields: {
      ar: [
        'الاستراتيجية الحكومية والتخطيط والقيادة المؤسسية',
        'التحول الرقمي ورعاية برامج الذكاء الاصطناعي',
        'التنسيق الحكومي المشترك وحوكمة البيانات',
        'الذكاء الاصطناعي المسؤول وحقوق المواطنين والإشراف على الموردين'
      ],
      en: [
        'Government strategy, planning and organisational leadership',
        'Digital transformation and AI programme sponsorship',
        'Cross-government coordination and data governance',
        'Responsible-AI, citizen-rights and supplier oversight'
      ]
    },
    modules: [
      { icon: 'telescope', thumb: 't1',
        title: { ar: 'أساسيات استراتيجية الذكاء الاصطناعي واستشراف المستقبل', en: 'AI Strategy and Foresight Essentials' },
        blocks: {
          ar: ['التعرّف على اتجاهات الذكاء الاصطناعي واستشرافها', 'تقييم جاهزية المؤسسات للذكاء الاصطناعي', 'مبادئ التنفيذ المرن للذكاء الاصطناعي', 'خيارات المحفظة والاستشراف الاستراتيجي', 'محاكاة حالة: جاهزية الذكاء الاصطناعي وتنفيذه'],
          en: ['Recognizing AI Trends and Foresight', 'Assessing AI Readiness in Organizations', 'Principles of Adaptive AI Delivery', 'Portfolio Choices and Strategic Foresight', 'Case Simulation: AI Readiness and Delivery']
        } },
      { icon: 'bar-chart-3', thumb: 't2',
        title: { ar: 'أساسيات القيادة المستندة إلى البيانات', en: 'Data-Driven Leadership Essentials' },
        blocks: {
          ar: ['أسس اتخاذ القرار المستند إلى البيانات', 'الجمع بين التحليل والحكم المهني', 'قيادة التنفيذ المرن بالبيانات', 'حوكمة البيانات بين الوحدات', 'حالة قيادية تطبيقية: قرار مستند إلى البيانات'],
          en: ['Foundations of Data-Driven Decision Making', 'Combining Analysis with Professional Judgment', 'Leading Adaptive Delivery with Data', 'Cross-Unit Data Governance', 'Applied Leadership Case: Data-Driven Decision']
        } },
      { icon: 'shield-check', thumb: 't3',
        title: { ar: 'أساسيات الذكاء الاصطناعي المسؤول وحقوق المواطنين', en: 'Responsible AI and Citizen Rights Essentials' },
        blocks: {
          ar: ['مبادئ الذكاء الاصطناعي المسؤول وحقوق المواطنين', 'تطبيق ممارسات التمحور حول المواطن وإمكانية الوصول', 'التصعيد والضمانات في مخاطر الذكاء الاصطناعي', 'إدارة شراكات الذكاء الاصطناعي وحوكمة الموردين', 'محاكاة الأثر القيادي وقرارات المخاطر'],
          en: ['Responsible AI Principles and Citizen Rights', 'Applying Citizen-Centric and Accessibility Practices', 'Escalation and Safeguards in AI Risk', 'Managing AI Partnerships and Supplier Governance', 'Leadership Impact and Risk Decision Simulation']
        } },
      { icon: 'gavel', thumb: 't4',
        title: { ar: 'القرار القيادي المتكامل وتبريره', en: 'Integrated Leadership Decision and Justification' },
        blocks: {
          ar: ['مراجعة متطلبات الذكاء الاصطناعي والأدلة', 'تحديد التحدي القيادي المشترك بين الفرق', 'مقارنة مناهج شراكات الذكاء الاصطناعي', 'تجميع الأدلة لدعم القرارات القيادية', 'تبرير القرار القيادي المتكامل'],
          en: ['Reviewing AI-Specific Requirements and Evidence', 'Defining the Cross-Team AI Leadership Challenge', 'Comparing Approaches to AI Partnerships', 'Synthesizing Evidence for Leadership Decisions', 'Integrated Leadership Decision Justification']
        } },
    ],
  },
  {
    id: 'ai-gov-dev',
    icon: 'landmark', thumb: 't5',
    field: { ar: 'برامج التدريب', en: 'Training Programs' },
    title: { ar: 'الذكاء الاصطناعي لمهن التطوير الحكومي', en: 'AI for Government Development Professions' },
    summary: {
      ar: 'تمكين المهنيين الحكوميين من تطبيق الذكاء الاصطناعي بأمان وفعالية في السياسات والمالية والمشتريات والخدمات والموارد البشرية والتعلّم.',
      en: 'Equip government professionals to apply AI safely and effectively across policy, finance, procurement, services, HR and learning.'
    },
    description: {
      ar: [
        'يزوّد هذا المسار المهنيين الحكوميين بالقدرة على تطبيق الذكاء الاصطناعي بأمان وفعالية في مجالات السياسات، والمالية، والمشتريات، والتطوير المؤسسي، والخدمة العامة، وصوت المواطن، والقوى العاملة، والتعلّم.',
        'يجمع المسار بين جوهر مهني في اتخاذ القرار المستنير بالذكاء الاصطناعي، والسياسات الجاهزة للذكاء الاصطناعي، والإشراف المسؤول، وتنفيذ المشاريع، وإدارة التغيير، ومراقبة الأداء، مع تطبيقات مرتبطة بدور كل متعلم. ويتدرّج المتعلمون من حالات محددة النطاق إلى أدلة عمل يُتحقَّق منها بشكل مستقل، وصولاً في المستوى المتقدم إلى تصاميم مؤسسية أو مشاريع تحسين معقدة تحمي القيمة العامة.'
      ],
      en: [
        'AI for Government Development Professions equips government professionals to apply artificial intelligence safely and effectively within policy, finance, procurement, institutional development, public-service, citizen-voice, workforce and learning functions.',
        'The pathway combines a professional core in AI-informed decision-making, AI-ready policy, responsible oversight, project delivery, change and performance monitoring with role-relevant application. Learners progress from bounded cases to independently validated workplace evidence and, at advanced level, to institutional designs or complex improvement projects that protect public value.'
      ]
    },
    outcomes: {
      ar: [
        'تقييم الأدلة والتحليلات التي يولّدها الذكاء الاصطناعي لدعم القرارات الحكومية، مع الحفاظ على الحكم المهني والمساءلة البشرية.',
        'تطبيق مبادئ السياسات والتنظيم الجاهزة للذكاء الاصطناعي ومبادئ الذكاء الاصطناعي المسؤول على السياسات والبرامج والخدمات والقرارات المؤسسية الحكومية.',
        'تخطيط المبادرات المدعومة بالذكاء الاصطناعي وإدارتها باستخدام مناهج مناسبة لتنفيذ المشاريع، وإدارة المخاطر، وإدارة التغيير، ومراقبة الأداء.',
        'تطبيق أساليب الذكاء الاصطناعي ذات الصلة ضمن الدور المهني، بما في ذلك المالية، والمشتريات، والجاهزية المؤسسية، وتصميم الخدمات، وإشراك المواطنين، والموارد البشرية، وتطوير القوى العاملة، والتعلّم المؤسسي.',
        'تصميم تحسينات عملية مدعومة بالذكاء الاصطناعي وخاضعة للحوكمة، تستجيب لاحتياجات المؤسسة وتحمي القيمة العامة.'
      ],
      en: [
        'Evaluate AI-generated evidence and analysis to support government decisions while retaining professional judgement and human accountability.',
        'Apply AI-ready policy, regulatory and responsible-AI principles to government policies, programmes, services and institutional decisions.',
        'Plan and manage AI-enabled initiatives using appropriate project-delivery, risk-management, change-management and performance-monitoring approaches.',
        'Apply relevant AI methods within their professional role, including finance, procurement, institutional readiness, service design, citizen engagement, human resources, workforce development or organisational learning.',
        'Design practical and governed AI-enabled improvements that respond to organisational needs and protect public value.'
      ]
    },
    skills: {
      ar: [
        'تقييم الأدلة التي يولّدها الذكاء الاصطناعي مع الحفاظ على الحكم المهني والمساءلة.',
        'تطبيق مبادئ السياسات والتنظيم الجاهزة للذكاء الاصطناعي ومبادئ الذكاء الاصطناعي المسؤول.',
        'تخطيط المبادرات المدعومة بالذكاء الاصطناعي وإدارة التغيير وتحسين الأداء.',
        'تطبيق أساليب الذكاء الاصطناعي ذات الصلة ضمن دور محدد في التطوير الحكومي.',
        'تصميم تحسينات مؤسسية مدعومة بالذكاء الاصطناعي وخاضعة للحوكمة، والتحقق منها والدفاع عنها.'
      ],
      en: [
        'Evaluate AI-generated evidence while retaining professional judgement and accountability.',
        'Apply AI-ready policy, regulatory and responsible-AI principles.',
        'Plan and manage AI-enabled initiatives, change and performance improvement.',
        'Apply relevant AI methods within an assigned government development role.',
        'Design, validate and defend governed AI-enabled institutional improvements.'
      ]
    },
    knowledge: {
      ar: [
        'دعم القرار المستنير بالذكاء الاصطناعي، ومتطلبات الإشراف والمساءلة البشرية.',
        'السياسات الجاهزة للذكاء الاصطناعي، والتنظيم، وتقييم الأثر، والحوكمة.',
        'تنفيذ المشاريع، والمخاطر، والجاهزية للتغيير، ومراقبة الأداء.',
        'تطبيقات الذكاء الاصطناعي الخاصة بالأدوار في المالية والمشتريات والخدمات وصوت المواطن والموارد البشرية والتعلّم.',
        'القيمة العامة، والعدالة، والخصوصية، وإمكانية الوصول، والتفسير، والتظلّم.'
      ],
      en: [
        'AI-informed decision support, oversight and human-accountability requirements.',
        'AI-ready policy, regulation, impact assessment and governance.',
        'Project delivery, risk, change readiness and performance monitoring.',
        'Role-specific AI applications across finance, procurement, services, citizen voice, HR and learning.',
        'Public value, fairness, privacy, accessibility, explanation and recourse.'
      ]
    },
    attitude: {
      ar: [
        'الحكم المهني والنزاهة والمساءلة.',
        'الالتزام بالعدالة والشمول وحماية القيمة العامة.',
        'اتخاذ القرار المستند إلى الأدلة والمراجعة النقدية لمخرجات الذكاء الاصطناعي.',
        'التعاون عبر الحدود المهنية والمؤسسية.',
        'التعلّم المستمر والانفتاح على التحسين المسؤول.'
      ],
      en: [
        'Professional judgement, integrity and accountability.',
        'Commitment to fairness, inclusion and protection of public value.',
        'Evidence-based decision-making and critical review of AI outputs.',
        'Collaboration across professional and organisational boundaries.',
        'Continuous learning and openness to responsible improvement.'
      ]
    },
    audience: {
      ar: 'المهنيون الحكوميون العاملون في السياسات، والتشريعات، والمالية، والموازنة، والمشتريات، والاستراتيجية المؤسسية، وتصميم الخدمات، وإشراك المواطنين، والموارد البشرية، وتطوير القوى العاملة، والتعلّم والقدرات المؤسسية.',
      en: 'Government professionals working in policy, legislation, finance, budgeting, procurement, institutional strategy, service design, citizen engagement, human resources, workforce development, learning and organisational capability.'
    },
    fields: {
      ar: [
        'السياسات والتشريعات والاستراتيجية المؤسسية',
        'المالية والموازنة والمشتريات',
        'تصميم الخدمات العامة وتحليل صوت المواطن',
        'الموارد البشرية والقوى العاملة والتطوير المؤسسي',
        'التعلّم وبناء القدرات والتحسين المؤسسي'
      ],
      en: [
        'Policy, legislation and institutional strategy',
        'Finance, budgeting and procurement',
        'Public-service design and citizen-voice analysis',
        'Human resources, workforce and organisational development',
        'Learning, capability and institutional improvement'
      ]
    },
    modules: [
      { icon: 'scale', thumb: 't5',
        title: { ar: 'اتخاذ القرار المستنير بالذكاء الاصطناعي والإشراف المسؤول', en: 'AI-Informed Decision-Making and Responsible Oversight' },
        blocks: {
          ar: ['أسس القرارات الحكومية المستنيرة بالذكاء الاصطناعي', 'استخدام تحليلات الذكاء الاصطناعي في قرارات استراتيجية محددة النطاق', 'مساءلة السيناريوهات والمخرجات التي يولّدها الذكاء الاصطناعي', 'الإشراف البشري والتفسير والمساءلة', 'إنتاج مخرجات خاصة بالدور باستخدام أساليب معتمدة', 'أدلة عمل مستقلة وحكم متكامل'],
          en: ['Foundations of AI-Informed Government Decisions', 'Using AI Analysis in Bounded Strategic Decisions', 'Interrogating AI-Generated Scenarios and Outputs', 'Human Oversight, Explanation and Accountability', 'Producing Role-Specific Outputs Using Approved Methods', 'Independent Workplace Evidence and Integrated Judgement']
        } },
      { icon: 'file-text', thumb: 't6',
        title: { ar: 'السياسات والتنظيم الجاهزة للذكاء الاصطناعي ومبادئ الذكاء الاصطناعي المسؤول', en: 'AI-Ready Policy, Regulation and Responsible AI Principles' },
        blocks: {
          ar: ['أسس السياسات والتنظيم الجاهزة للذكاء الاصطناعي', 'تطبيق فحوصات السياسات والتنظيم', 'تحليل الفجوات التنظيمية والمقارنة المعيارية', 'الإشراف المسؤول على الذكاء الاصطناعي وتحديد التحيّز', 'تقييم الأثر واعتبارات حقوق الإنسان', 'إنتاج مخرجات السياسات وفق مبادئ الذكاء الاصطناعي المسؤول'],
          en: ['Foundations of AI-Ready Policy and Regulation', 'Applying Policy and Regulatory Checks', 'Regulatory-Gap Analysis and Benchmarking', 'Responsible AI Oversight and Bias Identification', 'Impact Assessment and Human Rights Considerations', 'Producing Policy Outputs Using Responsible AI Principles']
        } },
      { icon: 'kanban', thumb: 't2',
        title: { ar: 'تنفيذ مشاريع الذكاء الاصطناعي وإدارة التغيير ومراقبة الأداء', en: 'AI Project Delivery, Change Management and Performance Monitoring' },
        blocks: {
          ar: ['أسس تنفيذ مشاريع الذكاء الاصطناعي وإدارة المخاطر', 'تطبيق أدوات مخاطر المشاريع والتنفيذ التكراري', 'تحليل أصحاب المصلحة والجاهزية للتغيير', 'مراقبة الأدلة وانحرافات الأداء', 'دورات التحسين المستندة إلى الأدلة', 'إنتاج مخرجات المشروع والتحقق منها'],
          en: ['Foundations of AI Project Delivery and Risk Management', 'Applying Project-Risk and Iterative-Delivery Tools', 'Stakeholder Analysis and Change Readiness', 'Monitoring Evidence and Performance Deviations', 'Evidence-Based Improvement Cycles', 'Producing and Validating Project Outputs']
        } },
      { icon: 'users-round', thumb: 't4',
        title: { ar: 'أساليب الذكاء الاصطناعي حسب الدور: المالية، المشتريات، تصميم الخدمات، صوت المواطن، الموارد البشرية، القوى العاملة، التعلّم', en: 'Role-Specific AI Methods: Finance, Procurement, Service Design, Citizen Voice, HR, Workforce, Learning' },
        short: { ar: 'أساليب الذكاء الاصطناعي حسب الدور المهني', en: 'Role-Specific AI Methods' },
        blocks: {
          ar: ['تطبيق أساليب الذكاء الاصطناعي في المالية والمشتريات', 'الذكاء الاصطناعي للجاهزية المؤسسية والاستراتيجية', 'تصميم الخدمات وتحليل صوت المواطن بالذكاء الاصطناعي', 'الذكاء الاصطناعي في الموارد البشرية وتطوير القوى العاملة', 'الذكاء الاصطناعي للتعلّم المؤسسي وبناء القدرات', 'إنتاج مخرجات وأدلة الذكاء الاصطناعي الخاصة بالدور'],
          en: ['Applying AI Methods in Finance and Procurement', 'AI for Institutional Readiness and Strategy', 'AI-Enabled Service Design and Citizen Voice Analysis', 'AI in Human Resources and Workforce Development', 'AI for Organisational Learning and Capability', 'Producing Role-Specific AI Outputs and Evidence']
        } },
      { icon: 'sparkles', thumb: 't5',
        title: { ar: 'تصميم التحسينات المؤسسية المدعومة بالذكاء الاصطناعي وقيادتها', en: 'Designing and Leading AI-Enabled Institutional Improvements' },
        blocks: {
          ar: ['أسس التحسين المؤسسي المدعوم بالذكاء الاصطناعي', 'تصميم تحسينات عملية مدعومة بالذكاء الاصطناعي', 'حوكمة التحسينات المدعومة بالذكاء الاصطناعي وحماية القيمة العامة', 'مقارنة التصاميم البديلة للذكاء الاصطناعي والدفاع عنها', 'تحسين خطط التعلّم المؤسسي والدفاع عنها', 'أدلة الملف وعرض التحسين المؤسسي والدفاع عنه'],
          en: ['Foundations of AI-Enabled Institutional Improvement', 'Designing Practical AI-Enabled Improvements', 'Governing AI-Enabled Improvements and Protecting Public Value', 'Comparing and Defending Alternative AI Designs', 'Improving and Defending Organisational Learning Plans', 'Portfolio Evidence and Institutional Improvement Defence']
        } },
    ],
  },
  {
    "id": "ai-digital-practice",
    "icon": "cpu",
    "thumb": "t3",
    "field": {
      "ar": "برامج التدريب",
      "en": "Training Programs"
    },
    "title": {
      "ar": "الممارسة المهنية في الذكاء الاصطناعي والتقنيات الرقمية",
      "en": "AI and Digital Professional Practice"
    },
    "summary": {
      "ar": "تطوير قدرات تقنية متخصصة للمهنيين الذين يصممون أنظمة الذكاء الاصطناعي ويبنونها ويضمنونها وينشرونها ويشغّلونها في الحكومة.",
      "en": "Develop selective technical capability for professionals who design, build, assure, deploy or operate AI systems in government."
    },
    "description": {
      "ar": [
        "يطوّر مسار الممارسة المهنية في الذكاء الاصطناعي والتقنيات الرقمية قدرات تقنية متخصصة للمهنيين الذين يصممون أنظمة الذكاء الاصطناعي أو يبنونها أو يضمنونها أو ينشرونها أو يشغّلونها في الحكومة. ويجمع بين أساس مشترك في الحوكمة التقنية، وتقييم حالات الاستخدام، وتصميم الحلول، والاختبار، والإشراف البشري، وبين ممارسة مرتبطة بالدور تشمل الذكاء الاصطناعي التوليدي والوكيلي، والبنية التحتية، والتكامل، والأمن، والتحقق، والإطلاق، والمراقبة، وإدارة دورة الحياة.",
        "يعتمد المسار على التقديم التخصصي، والممارسة المخبرية تحت الإشراف، والتقييمات العملية المنظّمة، والمراجعة التقنية، وأدلة ملف الإنجاز. وينتج المتعلمون أدلة تقنية قابلة للتكرار، ويوثّقون القيود، ويستخدمون مسارات التصعيد المعتمدة، ويساهمون في تحسين الممارسة. وينبغي أن يتبع التقدّم في المسار الملف المعتمد للدور التقني للمتعلم ومستوى الكفاءة المسند إليه."
      ],
      "en": [
        "AI and Digital Professional Practice develops selective technical capability for professionals who design, build, assure, deploy or operate artificial-intelligence systems in government. It combines a common baseline in technical governance, use-case assessment, solution design, testing and human oversight with role-relevant practice across generative and agentic AI, infrastructure, integration, security, validation, release, monitoring and lifecycle management.",
        "The pathway uses specialist delivery, supervised laboratory practice, structured practical assessments, technical review and portfolio evidence. Learners produce reproducible technical evidence, document limitations, use approved escalation routes and contribute to practice improvement. Progression should follow the learner's approved technical role profile and the assigned proficiency stage."
      ]
    },
    "outcomes": {
      "ar": [
        "تطبيق أساليب الحوكمة التقنية وحالات الاستخدام وتصميم الحلول والضمان الأساسية تحت الإشراف.",
        "توثيق القيود وتصعيد المخاطر عبر القنوات المعتمدة.",
        "إنتاج أدلة مخبرية قابلة للتكرار للوحدات التخصصية المسندة."
      ],
      "en": [
        "Apply core technical governance, use-case, solution-design and assurance methods under supervision.",
        "Document limitations and escalate risks through approved channels.",
        "Produce reproducible laboratory evidence for assigned specialist units."
      ]
    },
    "skills": {
      "ar": [
        "تطبيق أساليب الحوكمة التقنية وتقييم حالات الاستخدام وتصميم الحلول ضمن نطاق معتمد.",
        "إنتاج أدلة مخبرية وتقنية قابلة للتكرار للوحدات التخصصية المسندة.",
        "تطبيق ضوابط الاختبار والتحقق والأمن والإشراف البشري والإطلاق على أنظمة الذكاء الاصطناعي.",
        "توثيق القيود والمخاطر التقنية وتصعيدها عبر القنوات المعتمدة.",
        "إعداد التوثيق التقني، والاستجابة لمراجعة الخبراء، والمساهمة في تحسين المعايير."
      ],
      "en": [
        "Apply technical governance, use-case assessment and solution-design methods within an approved remit.",
        "Produce reproducible laboratory and technical evidence for assigned specialist units.",
        "Apply testing, validation, security, human-oversight and release controls to AI systems.",
        "Document technical limitations and risks and escalate them through approved channels.",
        "Prepare technical documentation, respond to expert review and contribute to standards improvement."
      ]
    },
    "knowledge": {
      "ar": [
        "حوكمة الذكاء الاصطناعي، والامتثال المؤسسي، والاستخدام المسؤول، والمساءلة التقنية.",
        "تقييم حالات الاستخدام، وبنية الحلول، والبنية التحتية، والتكامل، وحوكمة البيانات.",
        "الذكاء الاصطناعي التوليدي والوكيلي، وأنظمة الأوامر، وتكييف النماذج الخاضع للحوكمة.",
        "الأمن، والاختبار، والتحقق، والموثوقية، والإشراف البشري، والجاهزية للإطلاق.",
        "تشغيل الذكاء الاصطناعي، والمراقبة، والصيانة، وإدارة الإصدارات، والاستجابة للحوادث، والإيقاف.",
        "الأدلة التقنية، والمعايير، ومحطات المراجعة، والمساهمة المهنية."
      ],
      "en": [
        "AI governance, institutional compliance, responsible use and technical accountability.",
        "Use-case assessment, solution architecture, infrastructure, integration and data governance.",
        "Generative and agentic AI, prompt systems and governed model adaptation.",
        "Security, testing, validation, reliability, human oversight and release readiness.",
        "AI operations, monitoring, maintenance, versioning, incident response and retirement.",
        "Technical evidence, standards, review milestones and professional contribution."
      ]
    },
    "attitude": {
      "ar": [
        "الدقة وقابلية التكرار والمساءلة في الممارسة التقنية.",
        "الالتزام بالأمن والخصوصية والسلامة والذكاء الاصطناعي المسؤول.",
        "الاستعداد لتحديد القيود وتصعيد المخاطر الجوهرية.",
        "الانفتاح على المراجعة التقنية والتغذية الراجعة والتعاون متعدد التخصصات.",
        "التعلّم المستمر والمساهمة في المعايير المهنية."
      ],
      "en": [
        "Precision, reproducibility and accountability in technical practice.",
        "Commitment to security, privacy, safety and responsible AI.",
        "Readiness to identify limitations and escalate material risks.",
        "Openness to technical review, feedback and multidisciplinary collaboration.",
        "Continuous learning and contribution to professional standards."
      ]
    },
    "audience": {
      "ar": "المهنيون في مجالات الذكاء الاصطناعي والبيانات والبرمجيات والهندسة والبنية المعمارية والضمان والتشغيل في الحكومة. ويشمل ذلك ملفات الأدوار التقنية المعتمدة في حوكمة الذكاء الاصطناعي، وبنية الحلول، والبيانات والبنية التحتية، وهندسة الذكاء الاصطناعي التوليدي أو الوكيلي، والاختبار والضمان، والأمن السيبراني، وتشغيل الذكاء الاصطناعي وMLOps.",
      "en": "AI, data, software, engineering, architecture, assurance and operations professionals in government. This includes approved technical-role profiles in AI governance, solution architecture, data and infrastructure, generative or agentic AI engineering, testing and assurance, cybersecurity, AI operations and MLOps."
    },
    "fields": {
      "ar": [
        "حوكمة الذكاء الاصطناعي وأخلاقياته والامتثال وضوابط الموردين",
        "تقييم حالات الاستخدام والبنية المعمارية والبنية التحتية وحوكمة البيانات",
        "الذكاء الاصطناعي التوليدي وأنظمة الأوامر وتكييف النماذج وهندسة الذكاء الاصطناعي الوكيلي",
        "التكامل والأمن السيبراني والاختبار والتحقق وضمان الموثوقية",
        "النشر والتشغيل والمراقبة والصيانة وإدارة دورة الحياة",
        "المعايير التقنية والمساهمة المهنية وممارسة الخبراء"
      ],
      "en": [
        "AI governance, ethics, compliance and vendor controls",
        "AI use-case assessment, architecture, infrastructure and data governance",
        "Generative AI, prompt systems, model adaptation and agentic AI engineering",
        "AI integration, cybersecurity, testing, validation and reliability assurance",
        "AI deployment, operations, monitoring, maintenance and lifecycle management",
        "Technical standards, professional contribution and expert practice"
      ]
    },
    "modules": [
      {
        "icon": "shield-check",
        "thumb": "t3",
        "title": {
          "ar": "أسس حوكمة الذكاء الاصطناعي والممارسة التقنية",
          "en": "Foundations of AI Governance and Technical Practice"
        },
        "blocks": {
          "ar": [
            "تفويض ممارسة الخبراء ونطاق المعايير",
            "تقييم حالات استخدام الذكاء الاصطناعي وتحديد أولوياتها",
            "أسس بنية الحلول والبنية التحتية",
            "حوكمة البيانات وجودتها وقابلية التشغيل البيني",
            "تقييم المخاطر الأخلاقية في حالات استخدام الذكاء الاصطناعي",
            "توثيق الأدلة التقنية واحتياجات التصعيد"
          ],
          "en": [
            "Expert Practice Mandate and Standards Remit",
            "AI Use Case Assessment and Prioritization",
            "Solution Architecture and Infrastructure Foundations",
            "Data Governance, Quality, and Interoperability",
            "Ethical Risk Assessment in AI Use Cases",
            "Documenting Technical Evidence and Escalation Needs"
          ]
        },
        "subs": {
          "ar": [
            "تحديد تفويض ممارسة الخبراء لعمليات أنظمة الذكاء الاصطناعي، بما في ذلك نطاق المعايير، والأدلة المسموح بها، ومحطات المراجعة.",
            "تطبيق الأساليب الأساسية لتقييم حالات استخدام الذكاء الاصطناعي وتحديد أولوياتها تحت الإشراف.",
            "التعرّف على متطلبات البنية التحتية وبنية الحلول الأساسية لأنظمة الذكاء الاصطناعي ووصفها.",
            "تطبيق متطلبات حوكمة البيانات وجودتها والبيانات الوصفية وقابلية التشغيل البيني على مشاريع الذكاء الاصطناعي المسندة.",
            "تقييم المخاطر الأخلاقية في حالات الاستخدام التقنية للذكاء الاصطناعي وتوثيق القيود لتصعيدها.",
            "توثيق الأدلة التقنية المنجزة تحت الإشراف والقيود واحتياجات التصعيد بصيغة مناسبة للمراجعة التقنية."
          ],
          "en": [
            "Define the expert practice mandate for AI systems operations, including standards remit, permitted evidence, and review milestones.",
            "Apply foundational methods for AI use-case assessment and prioritization under supervision.",
            "Recognise and describe core infrastructure and solution architecture requirements for AI systems.",
            "Apply data-governance, quality, metadata, and interoperability requirements to assigned AI projects.",
            "Assess ethical risks in technical AI use cases and document limitations for escalation.",
            "Document supervised technical evidence, limitations, and escalation needs in a form suitable for technical review."
          ]
        },
        "acts": [
          [
            5,
            1,
            2
          ],
          [
            5,
            2,
            2
          ],
          [
            5,
            1,
            2
          ],
          [
            5,
            2,
            2
          ],
          [
            5,
            2,
            1
          ],
          [
            5,
            2,
            1
          ]
        ],
        "activities": [
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Defining the Expert Practice Mandate for AI Systems Operations",
                "ar": "تحديد تفويض ممارسة الخبراء لعمليات أنظمة الذكاء الاصطناعي"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Mapping Standards Remit to AI Governance Frameworks",
                "ar": "ربط نطاق المعايير بأطر حوكمة الذكاء الاصطناعي"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Permitted Evidence Types in AI Systems Operations",
                "ar": "أنواع الأدلة المسموح بها في عمليات أنظمة الذكاء الاصطناعي"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Establishing Review Milestones for AI Practice Agreements",
                "ar": "تحديد محطات المراجعة في اتفاقيات ممارسة الذكاء الاصطناعي"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: ISO/IEC 22989:2022 Section 5 – AI System Lifecycle and Governance",
                "ar": "قراءة: ISO/IEC 22989:2022 القسم 5 – دورة حياة أنظمة الذكاء الاصطناعي وحوكمتها"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Interpreting the Expert Practice Mandate in Different AI Domains",
                "ar": "نقاش: تفسير تفويض ممارسة الخبراء في مجالات ذكاء اصطناعي مختلفة"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Identify Standards Remit, Evidence Types, and Review Milestones",
                "ar": "اختبار: تحديد نطاق المعايير وأنواع الأدلة ومحطات المراجعة"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Define the Expert Practice Mandate for a Provided AI Use Case",
                "ar": "واجب: تحديد تفويض ممارسة الخبراء لحالة استخدام مقدّمة"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "AI Use Case Assessment Criteria in ISO/IEC 22989",
                "ar": "معايير تقييم حالات استخدام الذكاء الاصطناعي في ISO/IEC 22989"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Mapping Business Objectives to AI Use Cases in Practice",
                "ar": "ربط أهداف العمل بحالات استخدام الذكاء الاصطناعي عملياً"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Prioritization Matrix for AI Use Cases: Step-by-Step Walkthrough",
                "ar": "مصفوفة تحديد أولويات حالات الاستخدام: شرح خطوة بخطوة"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Worked Example: Assessing Feasibility and Impact of an AI Use Case",
                "ar": "مثال تطبيقي: تقييم جدوى حالة استخدام وأثرها"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Read: ISO/IEC 22989 Section 7.2 – Use Case Assessment Requirements",
                "ar": "قراءة: ISO/IEC 22989 القسم 7.2 – متطلبات تقييم حالات الاستخدام"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Trade-offs in Prioritizing Competing AI Use Cases",
                "ar": "نقاش: الموازنات في تحديد أولويات حالات استخدام متنافسة"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Critique a Classmate’s Use Case Assessment Matrix",
                "ar": "مراجعة الأقران: نقد مصفوفة تقييم حالات الاستخدام لزميل"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Identify Gaps in Sample AI Use Case Assessments",
                "ar": "اختبار: تحديد الثغرات في تقييمات نموذجية لحالات الاستخدام"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Apply a Prioritization Matrix to Three Proposed AI Use Cases",
                "ar": "واجب: تطبيق مصفوفة الأولويات على ثلاث حالات استخدام مقترحة"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "AI System Solution Architecture Patterns",
                "ar": "أنماط بنية حلول أنظمة الذكاء الاصطناعي"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Infrastructure Components for AI Workloads: Compute, Storage, and Networking",
                "ar": "مكوّنات البنية التحتية لأحمال الذكاء الاصطناعي: الحوسبة والتخزين والشبكات"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Deployment Topologies for AI Solutions: Cloud, On-Premises, and Hybrid",
                "ar": "طوبولوجيا نشر حلول الذكاء الاصطناعي: السحابي والمحلي والهجين"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "AI Solution Architecture: Traceability and Documentation Tools",
                "ar": "بنية حلول الذكاء الاصطناعي: أدوات التتبّع والتوثيق"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Read: NIST AI RMF Section 2 – Technical Infrastructure Requirements",
                "ar": "قراءة: NIST AI RMF القسم 2 – متطلبات البنية التحتية التقنية"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Compare Solution Architecture Diagrams for AI Use Cases",
                "ar": "نقاش: مقارنة مخططات بنية الحلول لحالات الاستخدام"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Identify Infrastructure Requirements in Sample AI Scenarios",
                "ar": "اختبار: تحديد متطلبات البنية التحتية في سيناريوهات نموذجية"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Describe Core Infrastructure and Solution Architecture for a Provided AI Use Case",
                "ar": "واجب: وصف البنية التحتية وبنية الحل لحالة استخدام مقدّمة"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Data Governance Frameworks in AI (ISO/IEC 38505, 23894)",
                "ar": "أطر حوكمة البيانات في الذكاء الاصطناعي (ISO/IEC 38505، 23894)"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Metadata Management with Data Catalog Tools (e.g., Collibra, DataHub)",
                "ar": "إدارة البيانات الوصفية بأدوات فهارس البيانات (مثل Collibra وDataHub)"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Assessing Data Quality Dimensions (Accuracy, Completeness, Consistency)",
                "ar": "تقييم أبعاد جودة البيانات (الدقة والاكتمال والاتساق)"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Interoperability Standards for AI Data Exchange (e.g., OpenAPI, JSON-LD, HL7 FHIR)",
                "ar": "معايير التشغيل البيني لتبادل بيانات الذكاء الاصطناعي (OpenAPI وJSON-LD وHL7 FHIR)"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Read: ISO/IEC 38505-1:2017 Section 5 – Principles for Data Governance",
                "ar": "قراءة: ISO/IEC 38505-1:2017 القسم 5 – مبادئ حوكمة البيانات"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Compare Data Quality Assessment Approaches in AI Projects",
                "ar": "نقاش: مقارنة مناهج تقييم جودة البيانات في مشاريع الذكاء الاصطناعي"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Evaluate Metadata Management Plans for Assigned AI Use Cases",
                "ar": "مراجعة الأقران: تقييم خطط إدارة البيانات الوصفية لحالات استخدام مسندة"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Identify Data Interoperability Failures in AI System Scenarios",
                "ar": "اختبار: تحديد إخفاقات التشغيل البيني للبيانات في سيناريوهات أنظمة الذكاء الاصطناعي"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Apply Data Governance, Quality, Metadata, and Interoperability Requirements to an AI Project Brief",
                "ar": "واجب: تطبيق متطلبات الحوكمة والجودة والبيانات الوصفية والتشغيل البيني على موجز مشروع"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Ethical Risk Identification with the AI Risk Matrix",
                "ar": "تحديد المخاطر الأخلاقية باستخدام مصفوفة مخاطر الذكاء الاصطناعي"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Stakeholder Mapping for Ethical Impact Analysis",
                "ar": "خرائط أصحاب المصلحة لتحليل الأثر الأخلاقي"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Documenting Limitations and Escalation Triggers in AI Systems",
                "ar": "توثيق القيود ومحفّزات التصعيد في أنظمة الذكاء الاصطناعي"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Ethical Risk Assessment: Case Study Walkthrough",
                "ar": "تقييم المخاطر الأخلاقية: شرح دراسة حالة"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: IEEE Ethically Aligned Design Section on Risk Assessment",
                "ar": "قراءة: IEEE Ethically Aligned Design – قسم تقييم المخاطر"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Challenge and Defend an Ethical Risk Assessment",
                "ar": "نقاش: مساءلة تقييم للمخاطر الأخلاقية والدفاع عنه"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Annotate a Classmate’s Risk Documentation",
                "ar": "مراجعة الأقران: التعليق على توثيق المخاطر لزميل"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Assess Ethical Risks in a Provided AI Use Case and Document Limitations for Escalation",
                "ar": "واجب: تقييم المخاطر الأخلاقية في حالة استخدام مقدّمة وتوثيق القيود للتصعيد"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Technical Evidence Documentation Templates in AI Projects",
                "ar": "قوالب توثيق الأدلة التقنية في مشاريع الذكاء الاصطناعي"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Recording Supervised Technical Evidence Using Version Control Systems",
                "ar": "تسجيل الأدلة التقنية تحت الإشراف باستخدام أنظمة إدارة الإصدارات"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Identifying and Documenting Limitations in AI System Outputs",
                "ar": "تحديد القيود في مخرجات أنظمة الذكاء الاصطناعي وتوثيقها"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Escalation Pathways for Technical Risks in AI Practice",
                "ar": "مسارات تصعيد المخاطر التقنية في ممارسة الذكاء الاصطناعي"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Read: Organisation’s Approved Technical Evidence and Escalation Policy",
                "ar": "قراءة: سياسة المؤسسة المعتمدة للأدلة التقنية والتصعيد"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Challenges in Documenting Limitations and Escalation Needs",
                "ar": "نقاش: تحديات توثيق القيود واحتياجات التصعيد"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Evaluate a Classmate’s Technical Evidence Documentation",
                "ar": "مراجعة الأقران: تقييم توثيق الأدلة التقنية لزميل"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Document Supervised Technical Evidence, Limitations, and Escalation Needs for a Provided AI Use Case",
                "ar": "واجب: توثيق الأدلة التقنية والقيود واحتياجات التصعيد لحالة استخدام مقدّمة"
              }
            }
          ]
        ]
      },
      {
        "icon": "sparkles",
        "thumb": "t1",
        "title": {
          "ar": "أسس هندسة الذكاء الاصطناعي التوليدي والوكيلي",
          "en": "Generative and Agentic AI Engineering Foundations"
        },
        "blocks": {
          "ar": [
            "نظرة عامة على الذكاء الاصطناعي التوليدي وأنظمة الأوامر",
            "تكييف النماذج وهندسة الذكاء الاصطناعي الوكيلي",
            "العرض والتقييم التقني تحت الإشراف",
            "توثيق القيود في ممارسة الذكاء الاصطناعي التوليدي",
            "تقييم عملي منظّم: الذكاء الاصطناعي التوليدي",
            "المراجعة التقنية والتغذية الراجعة في الذكاء الاصطناعي التوليدي"
          ],
          "en": [
            "Generative AI and Prompt Systems Overview",
            "Model Adaptation and Agentic AI Engineering",
            "Supervised Technical Demonstration and Assessment",
            "Documenting Limitations in Generative AI Practice",
            "Structured Practical Assessment: Generative AI",
            "Technical Review and Feedback in Generative AI"
          ]
        },
        "subs": {
          "ar": [
            "وصف المفاهيم الأساسية للذكاء الاصطناعي التوليدي وأنظمة الأوامر ذات الصلة بالممارسة المهنية.",
            "شرح مناهج تكييف النماذج وهندسة الذكاء الاصطناعي الوكيلي تحت الإشراف.",
            "إنتاج أدلة تقنية قابلة للتكرار لوحدات الذكاء الاصطناعي التوليدي والوكيلي المسندة.",
            "توثيق القيود وتصعيد المخاطر التي تظهر في هندسة الذكاء الاصطناعي التوليدي والوكيلي.",
            "إكمال تقييم عملي منظّم يُظهر أدلة قابلة للتكرار في الذكاء الاصطناعي التوليدي.",
            "إعداد التوثيق التقني للمراجعة والاستجابة للتغذية الراجعة حول أدلة الذكاء الاصطناعي التوليدي."
          ],
          "en": [
            "Describe the foundational concepts of generative AI and prompt systems relevant to professional practice.",
            "Explain model adaptation and agentic AI engineering approaches under supervision.",
            "Produce reproducible technical evidence for assigned generative and agentic AI units.",
            "Document limitations and escalate risks encountered in generative and agentic AI engineering.",
            "Complete a structured practical assessment demonstrating reproducible evidence in generative AI.",
            "Prepare technical documentation for review and respond to feedback on generative AI evidence."
          ]
        },
        "acts": [
          [
            5,
            1,
            2
          ],
          [
            5,
            2,
            2
          ],
          [
            5,
            1,
            1
          ],
          [
            6,
            1,
            1
          ],
          [
            4,
            2,
            1
          ],
          [
            5,
            1,
            1
          ]
        ],
        "activities": [
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Defining Generative AI in Professional Contexts"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Prompt Engineering Techniques with OpenAI API"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Light Board",
              "t": {
                "en": "Comparing Prompt System Architectures: Templates, Chains, and Agents"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Evaluating Generative AI Use Cases in Professional Practice"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: NIST AI Risk Management Framework Section 2.1 (Generative AI)"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Share and Critique Example Prompts for a Professional Task"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Identify Key Concepts in Generative AI and Prompt Systems"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Describe the Role of Prompt Systems in a Chosen Professional Use Case"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Model Adaptation Techniques in Generative AI (Transfer Learning, Fine-Tuning, Prompt Engineering)"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Agentic AI Engineering Approaches: Orchestration, Autonomy, and Supervision"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstration: Adapting a Pre-trained Model Using Prompt Engineering"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstration: Configuring an Agentic Workflow with a Multi-Agent Framework"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: Model Adaptation and Agentic AI Engineering in Practice (Authoritative Paper or Standard)"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Compare Approaches to Model Adaptation in Assigned Use Cases"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Challenges and Supervision in Agentic AI Engineering"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Identify Model Adaptation and Agentic Engineering Methods in Example Scenarios"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Explain Model Adaptation and Agentic AI Engineering Approaches for a Given Use Case"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Screen Recording: Producing Reproducible Evidence with Jupyter Notebooks"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Screen Recording: Capturing Model Adaptation Steps for Reproducibility"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Screen Recording: Exporting and Versioning Prompt Engineering Artefacts"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Screen Recording: Documenting Agentic AI Workflow Evidence"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Screen Recording: Validating Reproducibility with Automated Testing Tools"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Exchange and Critique Reproducible Evidence Artefacts"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Produce and Submit Reproducible Technical Evidence for Assigned Generative and Agentic AI Units"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: NIST AI Risk Management Framework Section 3.2 (Limitations and Risks)"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Video: Identifying Model Limitations in Generative AI Outputs"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Video: Documenting Escalation Procedures for AI Risks"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Video: Common Failure Modes in Generative and Agentic AI Systems"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Video: Professional Standards for Documenting Limitations (IEEE/ISO Examples)"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Video: Escalation Decision-Making in Generative AI Teams"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Peer Review of Draft Limitation Statements for a Provided AI Output"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Document Limitations and Escalate Risks for a Generative AI Use Case"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Structured Assessment Brief: Generative AI Evidence Requirements"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstration: Reproducible Prompt Engineering Workflow in OpenAI Playground"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstration: Capturing and Documenting Generative AI Outputs for Reproducibility"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstration: Validating Consistency and Reproducibility in Generative AI Outputs"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Challenges in Achieving Reproducibility with Generative AI"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Exchange and Critique Reproducible Generative AI Evidence"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Produce and Submit Reproducible Generative AI Evidence for Structured Assessment"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: IEEE 7001-2021 Standard for Transparency of Autonomous Systems"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Video: Structure of Technical Documentation for Generative AI Evidence"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Video: Common Feedback Patterns in Generative AI Technical Reviews"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Video: Techniques for Responding to Technical Review Feedback"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Video: Escalating Unresolved Issues in Generative AI Documentation"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Peer Review of Generative AI Technical Documentation"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Prepare and Revise Generative AI Technical Documentation in Response to Feedback"
              }
            }
          ]
        ]
      },
      {
        "icon": "server",
        "thumb": "t6",
        "title": {
          "ar": "البنية التحتية للذكاء الاصطناعي والتكامل والأمن",
          "en": "AI Infrastructure, Integration, and Security"
        },
        "blocks": {
          "ar": [
            "متطلبات البنية التحتية والتكامل الأساسية",
            "ضوابط الأمن والنشر لأنظمة الذكاء الاصطناعي",
            "الأدلة التقنية للبنية التحتية والأمن",
            "توثيق القيود والتصعيد في البنية التحتية",
            "تقييم عملي منظّم: البنية التحتية والأمن",
            "المراجعة التقنية والتغذية الراجعة: البنية التحتية والأمن"
          ],
          "en": [
            "Core Infrastructure and Integration Requirements",
            "Security and Deployment Controls for AI Systems",
            "Technical Evidence for Infrastructure and Security",
            "Documenting Limitations and Escalation in Infrastructure",
            "Structured Practical Assessment: Infrastructure and Security",
            "Technical Review and Feedback: Infrastructure and Security"
          ]
        },
        "subs": {
          "ar": [
            "تحديد متطلبات البنية التحتية والتكامل الأساسية لنشر الذكاء الاصطناعي وشرحها.",
            "تطبيق ضوابط الأمن والنشر على أنظمة الذكاء الاصطناعي تحت الإشراف.",
            "إنتاج أدلة تقنية قابلة للتكرار لوحدات البنية التحتية والتكامل والأمن.",
            "توثيق القيود وتصعيد المخاطر المحددة في ممارسات البنية التحتية والأمن.",
            "إكمال تقييم عملي منظّم يُظهر أدلة قابلة للتكرار في البنية التحتية والأمن.",
            "إعداد التوثيق التقني للمراجعة والاستجابة للتغذية الراجعة حول أدلة البنية التحتية والأمن."
          ],
          "en": [
            "Identify and explain core infrastructure and integration requirements for AI deployment.",
            "Apply security and deployment controls to AI systems under supervision.",
            "Produce reproducible technical evidence for infrastructure, integration, and security units.",
            "Document limitations and escalate risks identified in infrastructure and security practice.",
            "Complete a structured practical assessment demonstrating reproducible evidence in infrastructure and security.",
            "Prepare technical documentation for review and respond to feedback on infrastructure and security evidence."
          ]
        },
        "acts": [
          [
            5,
            1,
            2
          ],
          [
            5,
            2,
            2
          ],
          [
            5,
            2,
            1
          ],
          [
            5,
            2,
            1
          ],
          [
            4,
            2,
            1
          ],
          [
            5,
            1,
            1
          ]
        ],
        "activities": [
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "AI Infrastructure Components in Cloud and On-Premises Environments"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Integration Patterns for AI Systems (APIs, Pipelines, Microservices)"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Light Board",
              "t": {
                "en": "Defining Infrastructure Requirements from Use Cases"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Infrastructure Constraints and Scalability Considerations in AI Deployment"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Read: NIST AI Infrastructure Guidance (NIST SP 1270)"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Compare Infrastructure Requirements for Two AI Use Cases"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Identify Core Infrastructure Components in Example Scenarios"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Explain Infrastructure and Integration Requirements for a Provided AI Use Case"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Security Controls in AI System Deployment Pipelines (CI/CD)"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Role-Based Access Control (RBAC) for AI Services"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Container Security Scanning with Trivy"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Secrets Management with HashiCorp Vault"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Read: NIST SP 800-53 Controls for AI System Security"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Trade-offs in Security vs. Deployment Speed for AI Systems"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Evaluate a Classmate’s Security Control Plan for an AI Deployment"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Identify Security Gaps in AI Deployment Scenarios"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Apply Security and Deployment Controls to a Provided AI System Scenario"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstrating Infrastructure-as-Code with Terraform for AI Environments"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Configuring Secure Network Segmentation with Virtual Private Clouds (VPCs)"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Automating Security Controls with Ansible Playbooks"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Collecting and Presenting Evidence with Jupyter Notebooks"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: NIST SP 800-53 Security and Privacy Controls for Information Systems"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Share and Critique Example Infrastructure Evidence Artefacts"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Evaluate Reproducibility of a Classmate's Security Evidence"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Produce and Submit Reproducible Technical Evidence for Infrastructure and Security"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Identifying Infrastructure Limitations Using System Logs"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Documenting Security Risks in Infrastructure Change Requests"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Escalation Pathways for Infrastructure Risks: Roles and Responsibilities"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "TH + SC",
              "t": {
                "en": "Case Study Walkthrough: Escalating a Critical Infrastructure Limitation"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: ISO/IEC 27035-1:2016 Incident Management Documentation Requirements"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Comparing Approaches to Documenting Infrastructure Limitations"
              }
            },
            {
              "k": "C",
              "type": "Activity",
              "v": "",
              "t": {
                "en": "Peer Review: Evaluate a Classmate’s Escalation Documentation Against Best Practice"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Document and Escalate a Limitation in a Provided Infrastructure Scenario"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstrating Infrastructure Provisioning with Terraform"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Configuring Security Groups and Network Policies in Cloud Environments"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Implementing Role-Based Access Control (RBAC) for AI Services"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Monitoring and Logging Security Events with Prometheus and Grafana"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Infrastructure and Security Evidence Submission"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Collaborative Threat Modelling for AI Infrastructure"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Produce and Submit Reproducible Evidence: Infrastructure and Security Assessment"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Structuring Technical Documentation for Infrastructure and Security Review"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstrating Evidence of Security Controls in Documentation"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Responding to Technical Review Feedback Using Change Tracking Tools"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Framing Limitations and Escalation in Infrastructure Documentation"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: NIST SP 800-53 Security and Privacy Controls for Information Systems and Organizations (Selected Sections)"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Peer Review of Infrastructure and Security Documentation Drafts"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Prepare and Submit Technical Documentation with Tracked Responses to Feedback"
              }
            }
          ]
        ]
      },
      {
        "icon": "drafting-compass",
        "thumb": "t2",
        "title": {
          "ar": "تصميم حلول الذكاء الاصطناعي والتحقق منها وإطلاقها",
          "en": "AI Solutions Design, Validation, and Release"
        },
        "blocks": {
          "ar": [
            "أسس تصميم حلول الذكاء الاصطناعي وتطويرها",
            "جمع أدلة التحقق والإطلاق",
            "توثيق القيود في التحقق من حلول الذكاء الاصطناعي",
            "تقييم عملي منظّم: تصميم حلول الذكاء الاصطناعي",
            "المراجعة التقنية والتغذية الراجعة: تصميم حلول الذكاء الاصطناعي",
            "المساهمة المهنية وتحسين المعايير"
          ],
          "en": [
            "AI Solutions Design and Development Foundations",
            "Validation and Release Evidence Collection",
            "Documenting Limitations in AI Solution Validation",
            "Structured Practical Assessment: AI Solutions Design",
            "Technical Review and Feedback: AI Solutions Design",
            "Professional Contribution and Standards Improvement"
          ]
        },
        "subs": {
          "ar": [
            "تطبيق الأساليب الأساسية لتصميم حلول الذكاء الاصطناعي وتطويرها تحت الإشراف.",
            "جمع أدلة التحقق والإطلاق القابلة للتكرار لحلول الذكاء الاصطناعي وتوثيقها.",
            "توثيق القيود وتصعيد المخاطر المحددة أثناء التحقق من حلول الذكاء الاصطناعي وإطلاقها.",
            "إكمال تقييم عملي منظّم يُظهر أدلة قابلة للتكرار في تصميم حلول الذكاء الاصطناعي.",
            "إعداد التوثيق التقني للمراجعة والاستجابة للتغذية الراجعة حول أدلة تصميم حلول الذكاء الاصطناعي.",
            "إنتاج تحسين أصيل في الممارسة أو معيار جديد ضمن مجال حلول الذكاء الاصطناعي المسند والتحقق منه."
          ],
          "en": [
            "Apply foundational methods for AI solutions design and development under supervision.",
            "Collect and document reproducible validation and release evidence for AI solutions.",
            "Document limitations and escalate risks identified during AI solution validation and release.",
            "Complete a structured practical assessment demonstrating reproducible evidence in AI solutions design.",
            "Prepare technical documentation for review and respond to feedback on AI solutions design evidence.",
            "Produce and validate an original practice improvement or standard within the assigned AI solutions domain."
          ]
        },
        "acts": [
          [
            5,
            2,
            2
          ],
          [
            5,
            2,
            1
          ],
          [
            5,
            2,
            2
          ],
          [
            4,
            2,
            1
          ],
          [
            4,
            2,
            1
          ],
          [
            5,
            1,
            1
          ]
        ],
        "activities": [
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "AI Solution Design Lifecycle in Practice"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Requirements Elicitation with AI Use Case Cards"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Solution Architecture Diagramming with Draw.io"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Documenting Solution Assumptions and Constraints"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: AI Solution Design Competency Card 4.6"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Trade-offs in AI Solution Design Decisions"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Solution Architecture Diagrams"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Identify Solution Design Stages and Artefacts"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Apply Foundational Methods to Design an AI Solution for a Given Use Case"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Validation Evidence Types in AI Solution Release Documentation"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstrating Reproducibility with Version Control Tools (e.g., Git)"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Documenting Validation Results Using Structured Templates"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Capturing and Attributing Validation Failures and Revisions"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: AI Validation and Release Evidence Requirements (HTUx Reference)"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Challenges in Collecting Reproducible Validation Evidence"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Evaluate a Classmate's Validation Evidence Documentation"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Collect and Document Reproducible Validation and Release Evidence for an AI Solution"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Identifying Limitation Types in AI Solution Validation Reports"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstrating Limitation Documentation in AI Validation Templates"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Escalation Pathways for AI Solution Risks: Roles and Channels"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Worked Example: Documenting a Limitation and Escalating a Risk in a Validation Scenario"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: ISO/IEC 24029-1:2021 Guidelines on AI System Limitations Documentation"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Challenges in Identifying and Escalating Limitations in AI Validation"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Critique a Classmate's Limitation Documentation and Escalation Rationale"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Identify Correct Limitation Types and Escalation Steps in Sample Scenarios"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Document and Escalate Limitations in a Provided AI Validation Case Study"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Walkthrough: Completing the AI Solution Design Evidence Template"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstration: Documenting Reproducibility in AI Solution Design"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Worked Example: Validating AI Solution Design Against Competency Cards"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Explainer: Critical-Fail Criteria in AI Solution Design Assessment"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Exchange and Critique AI Solution Design Evidence"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Collaborative Mapping: Aligning Solution Evidence to Competency Codes"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Submit: Complete and Validate Structured Practical Assessment for AI Solution Design"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Structuring Technical Documentation for AI Solution Design Review"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstrating Traceability in AI Solution Design Documents"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Responding to Technical Feedback Using Commenting Tools"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Documenting Limitations and Escalation Points in AI Solution Design"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Critiquing a Sample AI Solution Design Document"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Collaborative Editing: Addressing Reviewer Comments in a Shared Document"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Submit: Prepare and Respond to Technical Review of AI Solution Design Documentation"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reviewing Authoritative Competency Cards for Standards Improvement"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Video Walkthrough: Identifying Gaps in Existing AI Practice Standards"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Video Demonstration: Documenting Practice Improvements for AI Solutions"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Video Guide: Validating Practice Improvements Against Competency Criteria"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Video Example: Justifying the Need for a New Standard or Improvement"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Peer Review of Proposed Practice Improvements"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Produce and Validate an Original Practice Improvement or Standard"
              }
            }
          ]
        ]
      },
      {
        "icon": "activity",
        "thumb": "t3",
        "title": {
          "ar": "تشغيل الذكاء الاصطناعي ومراقبته وإدارة دورة حياته",
          "en": "AI Operations, Monitoring, and Lifecycle Management"
        },
        "blocks": {
          "ar": [
            "دليل تشغيل الذكاء الاصطناعي وسجل الحوادث",
            "مراقبة أنظمة الذكاء الاصطناعي وصيانتها",
            "جمع أدلة دورة الحياة وتوثيقها",
            "توثيق القيود والتصعيد في العمليات",
            "قرارات الإيقاف والاستبدال في دورة حياة الذكاء الاصطناعي",
            "تقديم ملف الإنجاز ومراجعة لجنة الخبراء"
          ],
          "en": [
            "AI Operations Runbook and Incident Record",
            "Monitoring and Maintenance of AI Systems",
            "Lifecycle Evidence Collection and Documentation",
            "Documenting Limitations and Escalation in Operations",
            "Retirement and Replacement Decisions in AI Lifecycle",
            "Portfolio Submission and Expert Panel Review"
          ]
        },
        "subs": {
          "ar": [
            "الدفاع عن دليل تشغيل الذكاء الاصطناعي وسجل الحوادث تحت الإشراف.",
            "إعداد واجهات المراقبة وتطبيق ممارسات الصيانة لأنظمة الذكاء الاصطناعي.",
            "جمع أدلة دورة الحياة القابلة للتكرار لتشغيل الذكاء الاصطناعي وصيانته وتوثيقها.",
            "توثيق القيود وتصعيد المخاطر المحددة أثناء تشغيل الذكاء الاصطناعي وصيانته.",
            "توثيق قرارات إيقاف أنظمة الذكاء الاصطناعي أو استبدالها وتبريرها.",
            "تقديم ملف من الأدلة القابلة للتكرار لمراجعة لجنة الخبراء في تشغيل الذكاء الاصطناعي وإدارة دورة حياته."
          ],
          "en": [
            "Defend the AI operations runbook and incident record under supervision.",
            "Configure monitoring views and implement maintenance practices for AI systems.",
            "Collect and document reproducible lifecycle evidence for AI operations and maintenance.",
            "Document limitations and escalate risks identified during AI operations and maintenance.",
            "Document and justify retirement or replacement decisions for AI systems.",
            "Submit a portfolio of reproducible evidence for expert panel review in AI operations and lifecycle management."
          ]
        },
        "acts": [
          [
            5,
            2,
            2
          ],
          [
            5,
            2,
            2
          ],
          [
            4,
            2,
            1
          ],
          [
            5,
            2,
            2
          ],
          [
            5,
            2,
            2
          ],
          [
            4,
            2,
            1
          ]
        ],
        "activities": [
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "AI Operations Runbook Structure in Service Environments"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Incident Record Lifecycle and Documentation Standards"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Defensible Controls in AI Operations Runbooks"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Worked Example: Completing an Incident Record for an AI System"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: AI Operations Runbook and Incident Record Standards (NIST SP 800-61r2 Excerpts)"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Challenges in Defending AI Operations Runbooks"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Critique a Classmate's Incident Record Draft"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Identify Gaps in Sample AI Operations Runbooks"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Defend an AI Operations Runbook and Incident Record for a Given Scenario"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Configuring Monitoring Views in Prometheus"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Setting Up Alerting Rules in Grafana"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Maintenance Practices for AI Model Drift Detection"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Incident Response Workflow in AI Operations"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: Monitoring and Maintenance Requirements from NIST AI RMF"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Challenges in Monitoring AI Systems for Performance and Fairness"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Critique a Classmate's Monitoring Configuration Proposal"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Identify Monitoring Gaps in Sample AI System Logs"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Configure and Document a Monitoring View for a Sample AI System"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Lifecycle Evidence Collection Standards (ISO/IEC 24765, NIST SP 800-53)"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstration: Logging AI System Events for Lifecycle Traceability"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Walkthrough: Version Control for AI Lifecycle Artefacts (Git, DVC)"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstration: Documenting Maintenance and Incident Records in AI Operations"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Challenges in Achieving Reproducibility in AI Operations Evidence"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Evaluate a Classmate’s Lifecycle Evidence Documentation"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Collect and Document Lifecycle Evidence for a Provided AI System"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Identifying Operational Limitations in AI Systems Using Incident Logs"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Documenting Limitations with the AI Operations Runbook Template"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Escalation Protocols for AI Operational Risks: Roles and Channels"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "TH + SC",
              "t": {
                "en": "Case Study Walkthrough: Escalating a Model Drift Incident"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: AI Operations Escalation Policy (Internal Standard)"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Challenges in Documenting Limitations and Escalating Risks"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Evaluate a Classmate's Limitation Documentation"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Identify Correct Escalation Steps for Given AI Incidents"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Document Limitations and Escalate a Risk in a Provided AI Operations Scenario"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Lifecycle Documentation Standards for AI System Retirement"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Screening Criteria for AI System Retirement and Replacement Decisions"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Documenting Evidence for AI System Retirement: Example Walkthrough"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Justifying AI System Replacement: Case Study Analysis"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: IEEE Standard 7000-2021 Guidance on AI System Lifecycle Termination"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Challenges in Documenting AI System Retirement Decisions"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Critique a Classmate's AI System Retirement Documentation"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Identify Valid and Invalid Retirement Justifications"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Document and Justify a Retirement or Replacement Decision for a Provided AI System Scenario"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Portfolio Structure and Evidence Requirements for AI Operations"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstrating Reproducibility in AI Lifecycle Evidence"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Expert Panel Review Criteria and Assessment Process"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Common Pitfalls in Portfolio Evidence Submission"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Exchange and Critique Portfolio Drafts"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Panel Q&A: Addressing Reviewer Questions on Evidence"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Submit Portfolio of Reproducible Evidence for Expert Panel Review"
              }
            }
          ]
        ]
      },
      {
        "icon": "graduation-cap",
        "thumb": "t4",
        "title": {
          "ar": "المساهمة المهنية والمعايير والتحضير للاختبار",
          "en": "Professional Contribution, Standards, and Exam Preparation"
        },
        "blocks": {
          "ar": [
            "المساهمة المهنية ووضع المعايير",
            "توثيق القيود وتصعيدها في الممارسة المهنية",
            "تقييم عملي منظّم: المساهمة المهنية",
            "المراجعة التقنية والتغذية الراجعة: المساهمة المهنية",
            "التحضير للاختبار وترسيخ المعرفة",
            "الاختبار النهائي: الممارسة المهنية في الذكاء الاصطناعي والتقنيات الرقمية"
          ],
          "en": [
            "Professional Contribution and Standards Setting",
            "Documenting and Escalating Limitations in Professional Practice",
            "Structured Practical Assessment: Professional Contribution",
            "Technical Review and Feedback: Professional Contribution",
            "Exam Preparation and Consolidation",
            "Final Exam: AI and Digital Professional Practice"
          ]
        },
        "subs": {
          "ar": [
            "إنتاج تحسين أصيل في الممارسة أو معيار جديد ضمن المجال المسند والتحقق منه.",
            "توثيق القيود وتصعيد المخاطر التي تظهر أثناء المساهمة المهنية ووضع المعايير.",
            "إكمال تقييم عملي منظّم يُظهر أدلة قابلة للتكرار في المساهمة المهنية ووضع المعايير.",
            "إعداد التوثيق التقني للمراجعة والاستجابة للتغذية الراجعة حول أدلة المساهمة المهنية.",
            "ترسيخ فهم حوكمة الذكاء الاصطناعي التقنية وتصميم الحلول وأساليب الضمان استعداداً للاختبار النهائي.",
            "إثبات القدرة على تطبيق أساليب الحوكمة التقنية وحالات الاستخدام وتصميم الحلول والضمان في ظروف الاختبار."
          ],
          "en": [
            "Produce and validate an original practice improvement or standard within their assigned domain.",
            "Document limitations and escalate risks encountered during professional contribution and standards setting.",
            "Complete a structured practical assessment demonstrating reproducible evidence in professional contribution and standards setting.",
            "Prepare technical documentation for review and respond to feedback on professional contribution evidence.",
            "Consolidate their understanding of technical governance, solution design, and assurance methods in preparation for the final exam.",
            "Demonstrate their ability to apply core technical governance, use-case, solution-design, and assurance methods under exam conditions."
          ]
        },
        "acts": [
          [
            5,
            1,
            1
          ],
          [
            5,
            1,
            2
          ],
          [
            5,
            1,
            1
          ],
          [
            5,
            1,
            1
          ],
          [
            4,
            2,
            2
          ],
          [
            4,
            1,
            2
          ]
        ],
        "activities": [
          [
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Read ISO/IEC 22989:2022 AI Standards for Professional Practice"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Video: Framing Professional Contribution in AI Practice"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Video: Identifying Gaps in Existing AI Standards"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Video: Documenting and Justifying Practice Improvements"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Video: Validating a New Standard or Practice Improvement"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Critique a Peer’s Proposed Practice Improvement"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Produce and Validate an Original Practice Improvement or Standard"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Identifying Limitation Types in AI Professional Practice"
              }
            },
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Reading: ISO/IEC 22989 Guidance on AI System Limitations"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Demonstrating Limitation Documentation in a Technical Report Template"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Escalation Channels and Protocols for AI Risk Reporting"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "TH + SC",
              "t": {
                "en": "Case Study: Documenting and Escalating a Model Bias Limitation"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Peer Review of Limitation Documentation Drafts"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Recognizing Proper Limitation Documentation and Escalation Steps"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Document and Escalate a Limitation from a Provided AI Use Case"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Video Walkthrough: Structuring Reproducible Evidence for Professional Contribution"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Screen Cast: Documenting Standards Setting in AI Professional Practice"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Video Case Study: Validating a Practice Improvement or Standard"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Screen Cast: Using Templates for Professional Contribution Evidence"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Video: Common Pitfalls in Reproducible Evidence Submission"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Discussion: Peer Review of Professional Contribution Evidence Drafts"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Produce and Submit Reproducible Evidence for Professional Contribution"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Reading",
              "v": "",
              "t": {
                "en": "Read IEEE 829 Standard for Software and System Test Documentation"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Watch: Structuring Technical Documentation for AI Professional Contribution"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Watch: Identifying and Incorporating Feedback in Technical Documentation"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Watch: Common Pitfalls in Technical Documentation for Professional Contribution"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Watch: Responding to Reviewer Comments in Professional Practice"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Exchange and Critique Draft Technical Documentation"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Revise and Submit Technical Documentation with Response to Feedback"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Consolidation of Technical Governance Methods in AI Practice"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Reviewing Solution Design Artefacts for Assurance Readiness"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Assurance Methods: Worked Example of a Technical Review"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Examining Use-Case Assessment Criteria in AI Governance"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Assurance Checklist for AI Solution Design (Practice Exercise)"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Review: Technical Governance Evidence for Exam Preparation"
              }
            },
            {
              "k": "A",
              "type": "Quiz",
              "v": "",
              "t": {
                "en": "Quiz: Identify Gaps in Solution Design and Assurance Documentation"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Assignment: Analyse a Provided AI Use Case for Governance and Assurance Readiness"
              }
            }
          ],
          [
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Exam Structure and Competency Card Alignment Overview"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Worked Example: Applying Technical Governance Methods to a Novel AI Use Case"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Screen Cast",
              "t": {
                "en": "Worked Example: Solution Design and Assurance Evidence for AI Systems"
              }
            },
            {
              "k": "L",
              "type": "Video",
              "v": "Talking Head",
              "t": {
                "en": "Exam Technique: Time Management and Critical-Fail Criteria"
              }
            },
            {
              "k": "C",
              "type": "Discussion",
              "v": "",
              "t": {
                "en": "Peer Discussion: Interpreting Competency Card Evidence Requirements"
              }
            },
            {
              "k": "A",
              "type": "Assignment",
              "v": "",
              "t": {
                "en": "Exam Practice: Analyse a Provided AI Use Case for Governance and Solution Design"
              }
            },
            {
              "k": "A",
              "type": "F2F Assignment",
              "v": "",
              "t": {
                "en": "Final Exam: Apply Technical Governance, Solution Design, and Assurance Methods to a Novel Scenario"
              }
            }
          ]
        ]
      }
    ]
  }
];

const blockCount = p => p.modules.reduce((n, m) => n + m.blocks.en.length, 0);
const moduleTitle = m => t(m.short || m.title);
const findPathway = id => PATHWAYS.find(p => p.id === id) || PATHWAYS[0];

/* ---------- activities (Moodle activity view) ---------- */
const ACT_TYPES = {
  Video:      { icon: 'play',            label: { ar: 'فيديو', en: 'Video' },      tone: 'video' },
  Reading:    { icon: 'book-open-text',  label: { ar: 'قراءة', en: 'Reading' },    tone: 'read' },
  Discussion: { icon: 'messages-square', label: { ar: 'منتدى نقاش', en: 'Forum' },  tone: 'forum' },
  Quiz:       { icon: 'list-checks',     label: { ar: 'اختبار', en: 'Quiz' },       tone: 'quiz' },
  Assignment: { icon: 'file-pen-line',   label: { ar: 'واجب', en: 'Assignment' },  tone: 'assign' },
  File:       { icon: 'file-text',       label: { ar: 'ملف', en: 'File' },          tone: 'read' },
};
const PHASES = { L: { ar: 'تعلّم', en: 'Learn' }, C: { ar: 'تعاون', en: 'Collaborate' }, A: { ar: 'طبّق', en: 'Apply' }, G: { ar: 'عام', en: 'General' } };

// introduction section shared by every module
const introActivities = () => [
  { k: 'G', type: 'File', v: '', t: { ar: 'دليل المتعلّم ومخطط الوحدة', en: 'Learner guide and module outline' } },
  { k: 'G', type: 'Discussion', v: '', t: { ar: 'الإعلانات', en: 'Announcements' } },
  { k: 'G', type: 'Quiz', v: '', t: { ar: 'التقييم القبلي', en: 'Pre-assessment' } },
];

// real activities when the outline provides them, otherwise a standard Learn / Collaborate / Apply set
function getActivities(p, mi, bi) {
  if (bi < 0) return introActivities();
  const m = p.modules[mi];
  if (m.activities && m.activities[bi]) return m.activities[bi];
  const b = { ar: m.blocks.ar[bi], en: m.blocks.en[bi] };
  return [
    { k: 'L', type: 'Video', v: 'Talking Head', t: { ar: `مقدمة: ${b.ar}`, en: `Introduction: ${b.en}` } },
    { k: 'L', type: 'Video', v: 'Screen Cast', t: { ar: `شرح تطبيقي: ${b.ar}`, en: `Walkthrough: ${b.en}` } },
    { k: 'L', type: 'Reading', v: '', t: { ar: `قراءة: ${b.ar}`, en: `Reading: ${b.en}` } },
    { k: 'C', type: 'Discussion', v: '', t: { ar: `نقاش: ${b.ar}`, en: `Discussion: ${b.en}` } },
    { k: 'A', type: 'Quiz', v: '', t: { ar: `اختبار: ${b.ar}`, en: `Quiz: ${b.en}` } },
    { k: 'A', type: 'Assignment', v: '', t: { ar: `واجب: ${b.ar}`, en: `Assignment: ${b.en}` } },
  ];
}
// Arabic falls back to English where only the English title exists
const actTitle = a => a.t[LANG] || a.t.en;
