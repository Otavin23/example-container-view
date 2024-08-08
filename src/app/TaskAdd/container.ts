import useTaskStore from "@/core/stores/task";
import { useRef, useState } from "react";
import { v4 as uuid4 } from "uuid";

export const TaskAddContainer = () => {
  const createTask = useTaskStore((store) => store.createTask);

  const description = useRef();

  const handleCreateTask = () =>
    createTask({
      id: uuid4(),
      description: description.current.value,
    });

  return {
    description,
    handleCreateTask,
  };
};
