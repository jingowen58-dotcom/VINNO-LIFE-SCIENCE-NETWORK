export const statusIds = ["implemented", "in_progress", "planned", "vision", "potential"] as const;

export type StatusId = (typeof statusIds)[number];

export const statusCatalog: Record<StatusId, { en: string; zh: string }> = {
  implemented: { en: "Implemented", zh: "已实现" },
  in_progress: { en: "In progress", zh: "建设中" },
  planned: { en: "In preparation", zh: "研究准备" },
  vision: { en: "Future direction", zh: "未来规划" },
  potential: { en: "Potential collaboration", zh: "潜在合作" },
};

export function aggregateStatus(ids: StatusId[]): StatusId {
  if (ids.length === 0) return "vision";
  if (ids.every((id) => id === "implemented")) return "implemented";
  if (ids.every((id) => id === "vision")) return "vision";
  if (ids.every((id) => id === "planned")) return "planned";
  if (ids.some((id) => id === "implemented" || id === "in_progress")) return "in_progress";
  if (ids.some((id) => id === "planned")) return "planned";
  return "vision";
}
