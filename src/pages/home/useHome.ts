import { z } from "zod";
import useTasks from "../../hooks/useTasks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const createTaskSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().optional(),
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
    },
  };
};

export default useHome;
