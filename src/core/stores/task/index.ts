import { create } from "zustand";
import { ITaskStore, ITasks } from "./types";

const useTaskStore = create<ITaskStore>((set) => ({
  tasks: [],

  createTask: (obj: ITasks) =>
    set((state) => ({
      tasks: [...state.tasks, obj],
    })),

  updateTasks: (newTask: any) => set({ tasks: newTask }),
}));

export default useTaskStore;
