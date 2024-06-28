import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { removeTodo } from "@/redux/features/todoSlice";

type TTodoCardProps = {
  id: string;
  title: string;
  desc: string;
};

const TodoCard = ({ title, desc, id }: TTodoCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="bg-gray-400 rounded-md p-2 my-2 flex justify-between items-center ">
        <input type="checkbox" name="" id="" />
        <p className="font-semibold">{title}</p>
        {/* <p>time</p> */}
        <p>{desc}</p>
        <div className="flex gap-4">
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
