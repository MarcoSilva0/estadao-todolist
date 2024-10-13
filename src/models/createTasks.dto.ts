import { TaskStatus } from "./tasksStatus.dto";

export type CreateTaskDTO = {
  title: string;
  description?: string;
  status: TaskStatus;
};
