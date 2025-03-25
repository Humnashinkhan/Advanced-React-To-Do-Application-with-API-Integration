import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ text: task, priority: "Medium" }));
      setTask("");
    }
  };

  return (
    <div className="p-4 flex">
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="p-2 border rounded-l-lg w-full"
      />
      <button
        onClick={handleAddTask}
        className="px-6 bg-blue-500 text-white font-bold rounded-r-md text-[15px] cursor-pointer"
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
