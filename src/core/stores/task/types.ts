import React from "react";

interface ITasks {
  id?: string | undefined;
  description: string;
}

interface ITaskStore {
  tasks: ITasks[];
  createTask: (arg0: ITasks) => void;
  updateTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
}

export type { ITasks, ITaskStore };
