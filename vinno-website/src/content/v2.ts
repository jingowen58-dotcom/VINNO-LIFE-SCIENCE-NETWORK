import type { Locale } from "@/content/types";

export const productSlugs = ["senior-probiotic", "joint-support", "complete-nutrition"] as const;
export type ProductSlug = (typeof productSlugs)[number];

export type ProductCopy = {
  slug: ProductSlug;
  name: string;
  stage: string;
  summary: string;
  intended: string;
  formula: string;
  evidence: string;
  scope: string;
  use: string;
  safety: string;
  questions: { q: string; a: string }[];
};

type V2Copy = {
  brandTitle: string;
  brandBody: string[];
  scienceTitle: string;
  scienceBody: string;
  sciencePoints: string[];
  healthTitle: string;
  healthBody: string;
  healthPoints: string[];
  productsTitle: string;
  productsBody: string;
  notForSale: string;
  roadmapNote: string;
  scienceIntro: string;
  scienceLinks: { href: string; title: string; text: string }[];
  emptyDirectory: string;
  healthIntro: string;
  healthLimits: string[];
  aboutTitle: string;
  aboutBody: string[];
  products: ProductCopy[];
  assessment: {
    title: string;
    intro: string;
    notSaved: string;
    notDiagnosis: string;
    sections: { profile: string; life: string; concerns: string; health: string };
    fields: {
      species: string;
      breed: string;
      age: string;
      weight: string;
      sex: string;
      neutered: string;
      diet: string;
      activity: string;
      environment: string;
      history: string;
      medications: string;
      medicationDetail: string;
      symptoms: string;
      symptomDetail: string;
      allergies: string;
      exam: string;
    };
    species: { dog: string; cat: string; other: string };
    sex: { female: string; male: string; unknown: string };
    yes: string;
    no: string;
    unknown: string;
    concernOptions: { id: string; label: string }[];
    submit: string;
    reset: string;
    summaryTitle: string;
    provided: string;
    missing: string;
    vetTitle: string;
    vetBody: string;
    directionsTitle: string;
    directionsNote: string;
    catNote: string;
    otherNote: string;
  };
};

const zh: V2Copy = {
  brandTitle: "从宠物健康寿命开始，探索生命的更多可能。",
  brandBody: [
    "宠物的日常状态、饮食、体重和活动，会随着年龄变化。把这些观察记清楚，是以后讨论健康管理的起点。",
    "VINNO 想把这件事放在可核对的数据标准上。现在公开的基础，是家犬观察草案和参考验证工具。营养产品和长期服务还在准备，不会把一次填写说成科研参与或寿命结果。",
  ],
  scienceTitle: "让健康观察更有结构。",
  scienceBody: "科研页面保留六层架构、VULS、研究方向和路线图。转动地球仪放在 VULS 技术页，表示把观察放进同一套结构，不是合作地图或实时数据库。数据库、AI 引擎和国际合作仍按真实进度标注。",
  sciencePoints: ["家犬 VULS 草案", "参考验证工具", "五个研究方向", "公开的建设状态"],
  healthTitle: "按生命阶段看日常健康，先不承诺结果。",
  healthBody: "健康评估用来整理你提供的信息。它不诊断疾病，不预测还能陪伴多久，也不会在没有在售产品时推荐购买。",
  healthPoints: ["建立一份当时填写的档案", "标出缺失和需要确认的信息", "有症状或正在用药时，先咨询兽医"],
  productsTitle: "三个营养方向，目前都还不能购买",
  productsBody: "老龄犬益生菌、关节营养和复合营养是产品方向。配方、含量、检测报告和合规审核完成之前，不标价格，也不提供购买。",
  notForSale: "尚未在售。此页不提供价格、库存或下单。",
  roadmapNote: "路线图仍区分已经落地的草案和后面的规划。",
  scienceIntro: "这里集中放置已经公开的标准、研究方向和建设状态。没有正式合作或公开来源的机构、专家和论文，不会被写成 VINNO 的成果。",
  scienceLinks: [
    { href: "/science/technology", title: "VULS 与六层架构", text: "数据标准、参考验证器和从数据来源到开放网络的层次。" },
    { href: "/science/progress", title: "研究进展", text: "已实现、建设中、研究准备、未来规划和潜在合作。" },
  ],
  emptyDirectory: "全球机构目录、专家名单和论文库尚未收录。潜在合作只在有公开来源、且尚未建立正式关系时才会出现。",
  healthIntro: "宠物健康页说明 VINNO 希望如何陪伴日常管理。购买和会员还没有开通。",
  healthLimits: ["不替代兽医问诊", "不保存你填写的内容", "不把商业档案自动变成科研数据"],
  aboutTitle: "关于 VINNO",
  aboutBody: [
    "VINNO 正在建设面向生命与健康的开放科研网络，并从宠物健康寿命切入。",
    "商业上的宠物信息和以后可能的科研数据分开治理。用户填写或购买，本身不是科研授权。",
  ],
  products: [
    {
      slug: "senior-probiotic",
      name: "老龄犬益生菌",
      stage: "产品方向",
      summary: "面向老龄犬日常消化支持的一个方向。具体菌株、含量和适用标签尚未公布。",
      intended: "准备讨论消化和日常饮食配合。不是疾病治疗。",
      formula: "配方、含量和原料来源尚未公布。",
      evidence: "没有在此页引用具体论文。证据需要在配方确定后逐条核对。",
      scope: "预期讨论对象是家犬。年龄和体重范围尚未制定。",
      use: "用量、方式和周期尚未制定。",
      safety: "有消化道症状、慢性病、过敏或正在用药时，先咨询兽医，不要自行判断能否使用。",
      questions: [
        { q: "现在可以买到吗？", a: "不能。此方向尚未在售。" },
        { q: "填写评估会生成订单吗？", a: "不会。评估不保存，也不下单。" },
      ],
    },
    {
      slug: "joint-support",
      name: "关节营养",
      stage: "产品方向",
      summary: "面向活动能力和关节关注的一个营养方向。成分和剂量尚未公布。",
      intended: "准备讨论体重、活动和关节相关的日常管理。不是骨科诊断。",
      formula: "配方、含量和原料来源尚未公布。",
      evidence: "没有在此页引用具体论文。证据需要在配方确定后逐条核对。",
      scope: "预期讨论对象是家犬。适用年龄和体重尚未制定。",
      use: "用量、方式和周期尚未制定。",
      safety: "跛行、疼痛、慢性病或正在用药时，先咨询兽医。",
      questions: [
        { q: "评估里选择关节，就会推荐这款吗？", a: "不会推荐购买。最多提示这是一个尚未在售的方向。" },
      ],
    },
    {
      slug: "complete-nutrition",
      name: "复合营养",
      stage: "产品方向",
      summary: "面向日常基础营养的一个方向，不是已经确定的配方或套餐。",
      intended: "准备作为日常营养讨论的起点。不能代替完整口粮或兽医方案。",
      formula: "配方、含量和原料来源尚未公布。",
      evidence: "没有在此页引用具体论文。",
      scope: "预期讨论对象是家犬。生命阶段尚未划分成可售规格。",
      use: "用量、方式和周期尚未制定。",
      safety: "过敏、慢性病或正在用药时，先咨询兽医。",
      questions: [{ q: "有订阅吗？", a: "没有。订阅、会员和支付都还未开通。" }],
    },
  ],
  assessment: {
    title: "宠物健康信息评估",
    intro: "把你现在知道的情况整理成一份摘要。结果只存在于这次打开的页面里。",
    notSaved: "演示不会保存。刷新或离开后，填写内容即消失。",
    notDiagnosis: "这不是兽医诊断，不预测寿命，也不产生订单。",
    sections: { profile: "1. 宠物档案", life: "2. 生活方式", concerns: "3. 健康关注", health: "4. 健康信息" },
    fields: {
      species: "物种",
      breed: "品种",
      age: "年龄（岁）",
      weight: "体重（千克）",
      sex: "性别",
      neutered: "是否绝育",
      diet: "目前饮食",
      activity: "日常活动",
      environment: "生活环境",
      history: "既往病史",
      medications: "是否正在用药",
      medicationDetail: "药物说明",
      symptoms: "目前是否有明显症状",
      symptomDetail: "症状说明",
      allergies: "过敏或不耐受",
      exam: "近期体检或检查",
    },
    species: { dog: "家犬", cat: "家猫", other: "其他" },
    sex: { female: "母", male: "公", unknown: "不清楚" },
    yes: "是",
    no: "否",
    unknown: "不清楚",
    concernOptions: [
      { id: "nutrition", label: "日常营养" },
      { id: "joints", label: "关节活动" },
      { id: "digestion", label: "消化" },
      { id: "skin", label: "皮肤毛发" },
      { id: "oral", label: "口腔" },
      { id: "weight", label: "体重管理" },
    ],
    submit: "生成摘要",
    reset: "清空",
    summaryTitle: "健康信息摘要",
    provided: "你提供的信息",
    missing: "还缺少或需要再确认",
    vetTitle: "请先咨询兽医",
    vetBody: "你填写了明显症状或正在用药。这里不给出营养方向，也不展示套餐。请把现有病历和用药情况交给兽医判断。",
    directionsTitle: "可以继续了解的方向",
    directionsNote: "这些只是尚未在售的产品方向，不是购买建议。",
    catNote: "家猫数据配置仍是研究准备，当前草案不接受猫的记录。",
    otherNote: "其他物种还没有数据配置。",
  },
};

const en: V2Copy = {
  brandTitle: "Begin with pet healthspan.",
  brandBody: [
    "Day-to-day condition, diet, weight, and activity change as an animal ages. A clear record is the starting point for any later health discussion.",
    "VINNO wants that record to sit on a checkable data standard. What is public today is a draft for domestic dogs and a reference validator. Nutrition products and ongoing services are still in preparation. Filling in a form is not research participation and not a lifespan result.",
  ],
  scienceTitle: "Give health observations a structure.",
  scienceBody: "The science pages keep the six-layer architecture, VULS, research directions, and roadmap. The rotating globe lives on the VULS page: it pictures one structure for observations, not a partner map or a live database. Databases, the AI engine, and institutional collaboration stay labeled by their real status.",
  sciencePoints: ["Canine VULS draft", "Reference validator", "Five research directions", "Public build status"],
  healthTitle: "Everyday health, by life stage. No promised outcome.",
  healthBody: "The review organizes information you supply. It does not diagnose disease, estimate remaining years, or recommend a purchase when no product is on sale.",
  healthPoints: ["A profile for this visit only", "Missing items called out", "Symptoms or current medication lead to a veterinarian, not a bundle"],
  productsTitle: "Three nutrition directions. None are for sale.",
  productsBody: "Senior-dog probiotics, joint nutrition, and complete nutrition are directions. Until a formula, assay reports, and compliance review exist, there is no price and no checkout.",
  notForSale: "Not for sale. This page has no price, stock, or order action.",
  roadmapNote: "The roadmap still separates the draft that exists from later plans.",
  scienceIntro: "These pages collect the public standard, research directions, and build status. Institutions, experts, and papers are not listed as VINNO results without a public source and a stated relationship.",
  scienceLinks: [
    { href: "/science/technology", title: "VULS and the six layers", text: "The data standard, the reference validator, and the path from sources to an open network." },
    { href: "/science/progress", title: "Progress", text: "Implemented, in progress, in preparation, future direction, and potential collaboration." },
  ],
  emptyDirectory: "No institution directory, expert list, or paper library has been published. Potential collaboration is used only when a public source exists and no formal relationship has been established.",
  healthIntro: "This page describes how VINNO hopes to support day-to-day care. Purchase and membership are not open.",
  healthLimits: ["Not a veterinary consultation", "Nothing you type is stored", "A commercial profile does not become research data"],
  aboutTitle: "About VINNO",
  aboutBody: [
    "VINNO is building an open science network for life and health, starting from pet healthspan.",
    "Commercial pet information and any future research data are governed separately. A form or a purchase is not research consent.",
  ],
  products: [
    {
      slug: "senior-probiotic",
      name: "Senior dog probiotic",
      stage: "Direction",
      summary: "A direction for digestive support in older dogs. Strains, amounts, and label rules are not published.",
      intended: "A place to discuss digestion and daily diet. Not a treatment.",
      formula: "Formula, amount, and ingredient source are not published.",
      evidence: "No paper is cited here. Evidence has to be checked after a formula exists.",
      scope: "The expected discussion is domestic dogs. Age and weight ranges are not set.",
      use: "Dose, method, and duration are not set.",
      safety: "If there are digestive signs, chronic disease, allergy, or current medication, ask a veterinarian before considering any product.",
      questions: [
        { q: "Can I buy this now?", a: "No. This direction is not for sale." },
        { q: "Does the review create an order?", a: "No. The review is not stored and does not check out." },
      ],
    },
    {
      slug: "joint-support",
      name: "Joint nutrition",
      stage: "Direction",
      summary: "A nutrition direction for activity and joint concerns. Ingredients and doses are not published.",
      intended: "A place to discuss weight, activity, and day-to-day joint care. Not an orthopedic diagnosis.",
      formula: "Formula, amount, and ingredient source are not published.",
      evidence: "No paper is cited here.",
      scope: "The expected discussion is domestic dogs. Age and weight ranges are not set.",
      use: "Dose, method, and duration are not set.",
      safety: "Lameness, pain, chronic disease, or current medication should go to a veterinarian first.",
      questions: [{ q: "If I select joints, is this recommended for purchase?", a: "No purchase is recommended. The result can only point at a direction that is not for sale." }],
    },
    {
      slug: "complete-nutrition",
      name: "Complete nutrition",
      stage: "Direction",
      summary: "A direction for everyday nutrition, not a finished formula or bundle.",
      intended: "A starting point for a daily nutrition discussion. It does not replace a complete diet or a veterinary plan.",
      formula: "Formula, amount, and ingredient source are not published.",
      evidence: "No paper is cited here.",
      scope: "The expected discussion is domestic dogs. Life-stage sizes are not defined for sale.",
      use: "Dose, method, and duration are not set.",
      safety: "Allergy, chronic disease, or current medication should go to a veterinarian first.",
      questions: [{ q: "Is there a subscription?", a: "No. Subscriptions, membership, and payment are not open." }],
    },
  ],
  assessment: {
    title: "Pet health review",
    intro: "Organize what you know into a summary. The result exists only on this open page.",
    notSaved: "This demo stores nothing. Refreshing or leaving clears what you typed.",
    notDiagnosis: "This is not a veterinary diagnosis, a lifespan estimate, or an order.",
    sections: { profile: "1. Profile", life: "2. Daily life", concerns: "3. Areas of attention", health: "4. Health information" },
    fields: {
      species: "Species",
      breed: "Breed",
      age: "Age (years)",
      weight: "Weight (kg)",
      sex: "Sex",
      neutered: "Neutered",
      diet: "Current diet",
      activity: "Daily activity",
      environment: "Living environment",
      history: "Past conditions",
      medications: "Any current medication",
      medicationDetail: "Medication notes",
      symptoms: "Any clear symptoms now",
      symptomDetail: "Symptom notes",
      allergies: "Allergies or intolerances",
      exam: "Recent examination",
    },
    species: { dog: "Dog", cat: "Cat", other: "Other" },
    sex: { female: "Female", male: "Male", unknown: "Unknown" },
    yes: "Yes",
    no: "No",
    unknown: "Unknown",
    concernOptions: [
      { id: "nutrition", label: "Daily nutrition" },
      { id: "joints", label: "Joints and activity" },
      { id: "digestion", label: "Digestion" },
      { id: "skin", label: "Skin and coat" },
      { id: "oral", label: "Mouth" },
      { id: "weight", label: "Weight" },
    ],
    submit: "Create summary",
    reset: "Clear",
    summaryTitle: "Health information summary",
    provided: "What you entered",
    missing: "Still missing or worth confirming",
    vetTitle: "Talk with a veterinarian first",
    vetBody: "You reported clear symptoms or current medication. This page will not suggest a nutrition direction or a bundle. Bring the history and the medication list to a veterinarian.",
    directionsTitle: "Directions you can read about",
    directionsNote: "These are unpublished directions, not purchase advice.",
    catNote: "A cat data profile is still in preparation. The current draft does not accept cat records.",
    otherNote: "No data profile exists for other species.",
  },
};

export function getV2(locale: Locale) {
  return locale === "zh" ? zh : en;
}

export function getProduct(locale: Locale, slug: string) {
  return getV2(locale).products.find((item) => item.slug === slug);
}
