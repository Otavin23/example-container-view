"use client";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { TaskAddContainer } from "./container";

const TaskAdd = () => {
  const { description, handleCreateTask } = TaskAddContainer();

  return (
    <div className="flex items-center">
      <Input
        type="text"
        placeholder="Digite alguma coisa."
        className=" w-[350px] mr-4.5"
        ref={description}
      />
      <Button onClick={handleCreateTask}>Adicionar</Button>
    </div>
  );
};

export { TaskAdd };
