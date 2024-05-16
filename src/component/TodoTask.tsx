import React from "react";
import { IAppProps } from "../interfaces";

interface TodoTaskProps {
  task: IAppProps;
  deleteTask(taskNameToDelete: string): void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
}

const TodoTask: React.FC<TodoTaskProps> = ({ task, deleteTask, handleChange, isChecked }) => {
  return (
    <>
      <div className="p-2 rounded-lg">
        <div className="flex-row rounded shadow-xl">
          <div className="flex items-center justify-between gap-2">
            <input
              id={`checkbox-${task.taskList}`}
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
              className="mx-3 my-1 w-5 h-5 p-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <p className="p-2">{task.taskList}</p>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => {
                if (task.taskList) {
                  deleteTask(task.taskList);
                }
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoTask;
