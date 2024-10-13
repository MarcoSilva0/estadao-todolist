import useTasks from "../../hooks/useTasks";

const useHome = () => {
  const { data, isLoading } = useTasks();

  return {
    data,
    isLoading,
  };
};

export default useHome;
