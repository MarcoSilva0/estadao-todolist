import { z } from "zod";
import useTasks from "../../hooks/useTasks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskStatus, TaskStatusDTO } from "../../models";
import { useMemo } from "react";

const createTaskSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().optional(),
  status: z.nativeEnum(TaskStatusDTO),
});

type createTaskFormData = z.infer<typeof createTaskSchema>;

const useHome = () => {
  const { data, isLoading, useCreateTasks } = useTasks();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createTaskFormData>({
    resolver: zodResolver(createTaskSchema),
  });

  const STATUS_OPTIONS = useMemo(
    () =>
      Object.entries(TaskStatus).map((status) => ({
        id: status[0],
        label: status[1],
      })),
    []
  );

  const onSubmit = (data: any) => {
    useCreateTasks(data);
    console.log(data);
  };

  return {
    data,
    isLoading,
    form: {
      register,
      handleSubmit,
      onSubmit,
      errors,
      STATUS_OPTIONS,
    },
  };
};

export default useHome;
