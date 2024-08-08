import { Trash } from "lucide-react";
import { ListTasksContainer } from "./container";
import { ITasks } from "@/core/stores/task/types";

const TaskItem = ({ description, id }: ITasks) => {
  const { handleDeleteTask } = ListTasksContainer();

  return (
    <li className="flex justify-between items-center py-4.5 px-4.5 border-t-[1px] cursor-pointer border-t-[#cccccce] hover:bg-[#f8f8f8]">
      {description}
      <div>
        <Trash
          onClick={() => handleDeleteTask(id)}
          className="mr-2.5"
          width={20}
          height={20}
        />
      </div>
    </li>
  );
};

export { TaskItem };
