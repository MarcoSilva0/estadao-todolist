export enum TaskStatusDTO {
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  BLOCKED = "BLOCKED",
}

export type TaskStatus =
  (typeof TaskStatus)[keyof typeof TaskStatus];

export const TaskStatus = {
  COMPLETED: "Completed",
  IN_PROGRESS: "In Progress",
  PENDING: "Pending",
  BLOCKED: "Blocked",
} as const;
