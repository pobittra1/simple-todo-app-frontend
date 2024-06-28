const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-gray-500 w-full h-full rounded-xl p-5 space-y-4">
        <div className="bg-green-400 text-center p-2">
          <p className="font-semibold capitalize">There is no task</p>
        </div>
      </div>
    </div>
  );
};
export default TodoContainer;
