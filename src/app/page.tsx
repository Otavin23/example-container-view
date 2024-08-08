"use client";
import { ListTasks } from "./ListTasks";
import { TaskAdd } from "./TaskAdd";

const Home = () => {
  return (
    <main className="flex justify-center mt-7.5">
      <div className="flex flex-col">
        <TaskAdd />

        <ListTasks />
      </div>
    </main>
  );
};

export default Home;
