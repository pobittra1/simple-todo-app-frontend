const TodoCard = () => {
  return (
    <div>
      <div className="bg-white rounded-md p-2 flex justify-between items-center">
        <input type="checkbox" name="" id="" />
        <p className="font-semibold">todo title</p>
        <p>time</p>
        <p>description</p>
        <div className="flex gap-4">
          <div>del</div>
          <div>edit</div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
