import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../config/api";
import { CreateTaskDTO, TasksDTO } from "../models";

const useTasks = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<TasksDTO[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await api.get("/todos");
      return data;
    },
  });

  const useCreateTasks = useMutation({
    mutationFn: async (newTask: CreateTaskDTO) => {
      const { data } = await api.post("/todos", {
        ...newTask,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return {
    data,
    isLoading,
    useCreateTasks: useCreateTasks.mutate,
  };
};

export default useTasks;
