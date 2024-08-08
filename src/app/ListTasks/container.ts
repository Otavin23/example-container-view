import useTaskStore from "@/core/stores/task";

const ListTasksContainer = () => {
  const useTask = useTaskStore();
  const updateTask = useTaskStore((store) => store.updateTasks);

  const handleDeleteTask = (id: string | undefined) => {
    useTask.tasks.forEach((task, index) => {
      if (task.id === id) {
        useTask.tasks.splice(index, 1);
      }
    });

    updateTask(useTask.tasks);
  };

  return {
    tasks: useTask.tasks,
    handleDeleteTask,
  };
};

export { ListTasksContainer };
