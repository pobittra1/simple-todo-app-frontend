import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  //*from local state
  // const { todos } = useAppSelector((state) => state.todos);
  //from server
  const { data: todos, isLoading } = useGetTodosQuery(priority);
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  return (
    <div>
      <div className="flex justify-between items-center py-2 mb-3">
        <AddTodoModal></AddTodoModal>
        <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded p-1 space-y-4">
        <div className="bg-white p-3">
          {todos?.data?.map((item) => (
            <TodoCard {...item}></TodoCard>
          ))}
        </div>
        {/* <div className="bg-green-400 text-center p-2">
          <p className="font-semibold capitalize">There is no task</p>
        </div> */}
      </div>
    </div>
  );
};
export default TodoContainer;
