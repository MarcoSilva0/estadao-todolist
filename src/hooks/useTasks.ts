import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../config/api";

const useTasks = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<any[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await api.get("/todos");
      return data;
    },
  });

  const usePostTasks = useMutation({
    mutationFn: async (newTask: any) => {
      const { data } = await api.post("/todos", newTask);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return {
    data,
    isLoading,
    usePostTasks,
  };
};

export default useTasks;
