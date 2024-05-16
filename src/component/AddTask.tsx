import React from "react";
// import { IAppProps } from "../interfaces";

interface Props {
  task: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTaskList(task: string): void;
}

const AddTask = ({ handleChange, addTaskList, task }: Props) => {
  return (
    <>
      <div className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Masukan Todo List"
            id="todolist"
            required
            value={task}
            onChange={handleChange}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={() => {
              addTaskList(task);
            }}
          >
            Tambahkan
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
