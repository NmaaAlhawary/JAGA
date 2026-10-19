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
];

const blockCount = p => p.modules.reduce((n, m) => n + m.blocks.en.length, 0);
const moduleTitle = m => t(m.short || m.title);
const findPathway = id => PATHWAYS.find(p => p.id === id) || PATHWAYS[0];
