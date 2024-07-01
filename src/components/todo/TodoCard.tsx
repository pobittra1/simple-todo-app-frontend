import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";

type TTodoCardProps = {
  id: string;
  title: string;
  desc: string;
  isComplete: boolean;
  priority: string;
};

const TodoCard = ({
  title,
  desc,
  id,
  isComplete,
  priority,
}: TTodoCardProps) => {
  const dispatch = useAppDispatch();
  const toggleState = () => {
    dispatch(toggleComplete(id));
  };
  return (
    <div>
      <div className="bg-gray-400 rounded-md p-2 my-2 flex justify-between items-center ">
        <input
          className="me-3"
          onChange={toggleState}
          type="checkbox"
          name="complete"
          id="complete"
        />
        <p className="font-semibold">{title}</p>
        {/* <p>time</p> */}

        <div className="flex items-center gap-2 justify-center flex-1">
          <div
            className={`size-3 rounded-full ${
              priority === "high"
                ? "bg-red-500"
                : priority === "medium"
                ? "bg-green-500"
                : "bg-yellow-500"
            }`}
          ></div>
          <p className="">{priority}</p>
        </div>
        <p className="flex-[2]">{desc}</p>
        {isComplete ? (
          <p className="bg-green-500 px-3 py-2  text-white rounded">Done</p>
        ) : (
          <p className="bg-red-500 px-3 py-2  text-white rounded">Pending</p>
        )}

        <div className="flex gap-4 ms-3">
          <Button className="bg-gray-400 text-black hover:bg-black hover:text-white border  border-black font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </Button>
          <Button
            onClick={() => dispatch(removeTodo(id))}
            className="bg-red-500 text-white hover:bg-black hover:text-white   font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
