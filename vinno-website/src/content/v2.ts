import type { Locale } from "@/content/types";

export const productSlugs = ["senior-probiotic", "joint-support", "complete-nutrition"] as const;
export type ProductSlug = (typeof productSlugs)[number];

export type ProductCopy = {
  slug: ProductSlug;
  name: string;
  summary: string;
  image: string;
  safety: string;
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
    sections: {
      pet: string;
      body: string;
      diet: string;
      activity: string;
      observation: string;
      concern: string;
      safety: string;
    };
    fields: {
      name: string;
      species: string;
      age: string;
      weight: string;
      body: string;
      food: string;
      habit: string;
      habitNote: string;
      activity: string;
      activityNote: string;
      stool: string;
      water: string;
      observationNote: string;
      concern: string;
      concernNote: string;
      symptoms: string;
      medications: string;
    };
    species: { dog: string; cat: string };
    bodyOptions: { id: string; label: string }[];
    habitOptions: { id: string; label: string }[];
    activityOptions: { id: string; label: string }[];
    stoolOptions: { id: string; label: string }[];
    waterOptions: { id: string; label: string }[];
    concernOptions: { id: string; label: string }[];
    yes: string;
    no: string;
    submit: string;
    reset: string;
    summaryTitle: string;
    missing: string;
    missingNone: string;
    emptyValue: string;
    paragraphs: { who: string; body: string; diet: string; activity: string; observation: string; concern: string };
    vetTitle: string;
    vetBody: string;
    productsTitle: string;
    productsNote: string;
    catNote: string;
  };
};

const zh: V2Copy = {
  brandTitle: "从宠物健康寿命开始，探索生命的更多可能。",
  brandBody: [
    "宠物的日常状态、饮食、体重和活动，会随着年龄变化。把这些观察记清楚，是以后讨论健康管理的起点。",
    "VINNO 想把这件事放在可核对的数据标准上。现在公开的基础，是家犬观察草案和参考验证工具。一次填写不是科研参与，也不是寿命结果。",
  ],
  scienceTitle: "让健康观察更有结构。",
  scienceBody: "科研页面保留六层架构、VULS、研究方向和路线图。转动地球仪放在 VULS 技术页，表示把观察放进同一套结构，不是合作地图或实时数据库。数据库、AI 引擎和国际合作仍按真实进度标注。",
  sciencePoints: ["家犬 VULS 草案", "参考验证工具", "五个研究方向", "公开的建设状态"],
  healthTitle: "按生命阶段看日常健康，先不承诺结果。",
  healthBody: "健康评估用来整理你提供的信息。它不诊断疾病，也不预测还能陪伴多久。",
  healthPoints: ["建立一份当时填写的档案", "标出缺失和需要确认的信息", "有症状或正在用药时，先咨询兽医"],
  productsTitle: "老龄犬益生菌、关节营养与复合营养",
  productsBody: "消化、关节和日常营养。",
  roadmapNote: "路线图仍区分已经落地的草案和后面的规划。",
  scienceIntro: "这里集中放置已经公开的标准、研究方向和建设状态。没有正式合作或公开来源的机构、专家和论文，不会被写成 VINNO 的成果。",
  scienceLinks: [
    { href: "/science/technology", title: "VULS 与六层架构", text: "数据标准、参考验证器和从数据来源到开放网络的层次。" },
    { href: "/science/progress", title: "研究进展", text: "已实现、建设中、研究准备、未来规划和潜在合作。" },
  ],
  emptyDirectory: "全球机构目录、专家名单和论文库尚未收录。潜在合作只在有公开来源、且尚未建立正式关系时才会出现。",
  healthIntro: "从饮食、活动和生命阶段看宠物的日常健康。",
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
      summary: "面向老龄犬的日常消化支持。",
      image: "/images/products/probiotic.jpg",
      safety: "有消化道症状、慢性病、过敏或正在用药时，先咨询兽医。",
    },
    {
      slug: "joint-support",
      name: "关节营养",
      summary: "面向日常活动与关节的营养补充。",
      image: "/images/products/joint.jpg",
      safety: "跛行、疼痛、慢性病或正在用药时，先咨询兽医。",
    },
    {
      slug: "complete-nutrition",
      name: "复合营养",
      summary: "面向日常基础营养。",
      image: "/images/products/nutrition.jpg",
      safety: "过敏、慢性病或正在用药时，先咨询兽医。",
    },
  ],
  assessment: {
    title: "宠物日常健康观察档案",
    intro: "填写本次看到的日常情况。提交后，档案生成在这页下方。",
    notSaved: "本次内容只存在于这个打开的页面。刷新或离开后消失。",
    notDiagnosis: "这是主人本次观察到的记录，不是兽医诊断，也不预测寿命。",
    sections: {
      pet: "1. 宠物",
      body: "2. 体况",
      diet: "3. 饮食",
      activity: "4. 活动",
      observation: "5. 观察",
      concern: "6. 主人关注",
      safety: "提交前确认",
    },
    fields: {
      name: "宠物名字",
      species: "物种",
      age: "年龄（岁）",
      weight: "体重（千克）",
      body: "体型",
      food: "当前主粮",
      habit: "饮食习惯",
      habitNote: "饮食补充",
      activity: "日常活动",
      activityNote: "活动补充",
      stool: "排便",
      water: "饮水",
      observationNote: "观察补充",
      concern: "主人关注",
      concernNote: "最想先看的问题",
      symptoms: "目前是否有明显不适",
      medications: "是否正在用药",
    },
    species: { dog: "家犬", cat: "家猫" },
    bodyOptions: [
      { id: "lean", label: "偏瘦" },
      { id: "moderate", label: "适中" },
      { id: "heavy", label: "偏胖" },
      { id: "unknown", label: "不清楚" },
    ],
    habitOptions: [
      { id: "scheduled", label: "定时" },
      { id: "free", label: "自由采食" },
      { id: "treats", label: "常有零食" },
      { id: "recent-change", label: "近期换粮" },
    ],
    activityOptions: [
      { id: "little", label: "很少" },
      { id: "walks", label: "日常散步" },
      { id: "runs", label: "经常跑跳" },
      { id: "unknown", label: "不清楚" },
    ],
    stoolOptions: [
      { id: "normal", label: "正常" },
      { id: "soft", label: "偏软" },
      { id: "dry", label: "偏干" },
      { id: "variable", label: "不稳定" },
      { id: "unobserved", label: "未观察" },
    ],
    waterOptions: [
      { id: "same", label: "和平时差不多" },
      { id: "less", label: "比平时少" },
      { id: "more", label: "比平时多" },
      { id: "unobserved", label: "未观察" },
    ],
    concernOptions: [
      { id: "nutrition", label: "日常营养" },
      { id: "joints", label: "关节活动" },
      { id: "digestion", label: "消化" },
      { id: "skin", label: "皮肤毛发" },
      { id: "oral", label: "口腔" },
      { id: "weight", label: "体重管理" },
    ],
    yes: "是",
    no: "否",
    submit: "生成档案",
    reset: "清空",
    summaryTitle: "宠物日常健康观察档案",
    missing: "本次未填写",
    missingNone: "本次主要项目都已填写。",
    emptyValue: "未填写",
    paragraphs: {
      who: "这是谁",
      body: "现在的体况",
      diet: "吃什么",
      activity: "活动如何",
      observation: "排便和饮水",
      concern: "主人最想先看的问题",
    },
    vetTitle: "请把这份记录交给兽医",
    vetBody: "你填写了明显不适或正在用药。请把这份记录交给兽医。",
    productsTitle: "相关产品",
    productsNote: "按你勾选的关注点列出可以继续查看的产品。",
    catNote: "这份档案只留在本次页面，不写入家犬数据标准。",
  },
};

const en: V2Copy = {
  brandTitle: "Begin with pet healthspan.",
  brandBody: [
    "Day-to-day condition, diet, weight, and activity change as an animal ages. A clear record is the starting point for any later health discussion.",
    "VINNO wants that record to sit on a checkable data standard. What is public today is a draft for domestic dogs and a reference validator. Filling in a form is not research participation and not a lifespan result.",
  ],
  scienceTitle: "Give health observations a structure.",
  scienceBody: "The science pages keep the six-layer architecture, VULS, research directions, and roadmap. The rotating globe lives on the VULS page: it pictures one structure for observations, not a partner map or a live database. Databases, the AI engine, and institutional collaboration stay labeled by their real status.",
  sciencePoints: ["Canine VULS draft", "Reference validator", "Five research directions", "Public build status"],
  healthTitle: "Everyday health, by life stage. No promised outcome.",
  healthBody: "The review organizes information you supply. It does not diagnose disease or estimate remaining years.",
  healthPoints: ["A profile for this visit only", "Missing items called out", "Symptoms or current medication lead to a veterinarian, not a bundle"],
  productsTitle: "Senior probiotic, joint nutrition, and complete nutrition",
  productsBody: "Digestion, joints, and everyday nutrition.",
  roadmapNote: "The roadmap still separates the draft that exists from later plans.",
  scienceIntro: "These pages collect the public standard, research directions, and build status. Institutions, experts, and papers are not listed as VINNO results without a public source and a stated relationship.",
  scienceLinks: [
    { href: "/science/technology", title: "VULS and the six layers", text: "The data standard, the reference validator, and the path from sources to an open network." },
    { href: "/science/progress", title: "Progress", text: "Implemented, in progress, in preparation, future direction, and potential collaboration." },
  ],
  emptyDirectory: "No institution directory, expert list, or paper library has been published. Potential collaboration is used only when a public source exists and no formal relationship has been established.",
  healthIntro: "Everyday care, seen through diet, activity, and life stage.",
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
      summary: "Everyday digestive support for older dogs.",
      image: "/images/products/probiotic.jpg",
      safety: "Digestive signs, chronic disease, allergy, or current medication should go to a veterinarian first.",
    },
    {
      slug: "joint-support",
      name: "Joint nutrition",
      summary: "Nutrition for everyday activity and joints.",
      image: "/images/products/joint.jpg",
      safety: "Lameness, pain, chronic disease, or current medication should go to a veterinarian first.",
    },
    {
      slug: "complete-nutrition",
      name: "Complete nutrition",
      summary: "Everyday foundational nutrition.",
      image: "/images/products/nutrition.jpg",
      safety: "Allergy, chronic disease, or current medication should go to a veterinarian first.",
    },
  ],
  assessment: {
    title: "Daily pet observation record",
    intro: "Enter what you see today. The record appears below after you submit.",
    notSaved: "This stays on the open page only. Refreshing or leaving clears it.",
    notDiagnosis: "This is the owner’s observation from this visit. It is not a veterinary diagnosis and it does not estimate lifespan.",
    sections: {
      pet: "1. Pet",
      body: "2. Condition",
      diet: "3. Diet",
      activity: "4. Activity",
      observation: "5. Observation",
      concern: "6. What you want to look at",
      safety: "Before submitting",
    },
    fields: {
      name: "Pet name",
      species: "Species",
      age: "Age (years)",
      weight: "Weight (kg)",
      body: "Body shape",
      food: "Current staple food",
      habit: "Eating habits",
      habitNote: "Diet note",
      activity: "Daily activity",
      activityNote: "Activity note",
      stool: "Stool",
      water: "Drinking",
      observationNote: "Observation note",
      concern: "Owner’s focus",
      concernNote: "The question you most want to look at",
      symptoms: "Any clear discomfort now",
      medications: "Any current medication",
    },
    species: { dog: "Dog", cat: "Cat" },
    bodyOptions: [
      { id: "lean", label: "Lean" },
      { id: "moderate", label: "Moderate" },
      { id: "heavy", label: "Heavy" },
      { id: "unknown", label: "Not sure" },
    ],
    habitOptions: [
      { id: "scheduled", label: "Scheduled meals" },
      { id: "free", label: "Free feeding" },
      { id: "treats", label: "Treats are common" },
      { id: "recent-change", label: "Food changed recently" },
    ],
    activityOptions: [
      { id: "little", label: "Very little" },
      { id: "walks", label: "Daily walks" },
      { id: "runs", label: "Often runs and jumps" },
      { id: "unknown", label: "Not sure" },
    ],
    stoolOptions: [
      { id: "normal", label: "Usual" },
      { id: "soft", label: "Softer" },
      { id: "dry", label: "Drier" },
      { id: "variable", label: "Variable" },
      { id: "unobserved", label: "Not observed" },
    ],
    waterOptions: [
      { id: "same", label: "About the same" },
      { id: "less", label: "Less than usual" },
      { id: "more", label: "More than usual" },
      { id: "unobserved", label: "Not observed" },
    ],
    concernOptions: [
      { id: "nutrition", label: "Daily nutrition" },
      { id: "joints", label: "Joints and activity" },
      { id: "digestion", label: "Digestion" },
      { id: "skin", label: "Skin and coat" },
      { id: "oral", label: "Mouth" },
      { id: "weight", label: "Weight" },
    ],
    yes: "Yes",
    no: "No",
    submit: "Create the record",
    reset: "Clear",
    summaryTitle: "Daily pet observation record",
    missing: "Not entered this time",
    missingNone: "The main items are filled in.",
    emptyValue: "Not entered",
    paragraphs: {
      who: "Who this is",
      body: "Current condition",
      diet: "What they eat",
      activity: "How they move",
      observation: "Stool and drinking",
      concern: "What you most want to look at",
    },
    vetTitle: "Take this record to a veterinarian",
    vetBody: "You reported clear discomfort or current medication. Take this record to a veterinarian.",
    productsTitle: "Related products",
    productsNote: "These follow the items you selected.",
    catNote: "This record stays on this page. It is not written into the canine data standard.",
  },
};

export function getV2(locale: Locale) {
  return locale === "zh" ? zh : en;
}

export function getProduct(locale: Locale, slug: string) {
  return getV2(locale).products.find((item) => item.slug === slug);
}
