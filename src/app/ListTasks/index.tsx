"use client";
import { TaskItem } from "./TaskItem";
import { ListTasksContainer } from "./container";

const ListTasks = () => {
  const { tasks } = ListTasksContainer();

  return (
    <ul className="mt-8.5">
      {tasks.map((task) => (
        <TaskItem key={task.id} description={task.description} id={task.id} />
      ))}
    </ul>
  );
};

export { ListTasks };
