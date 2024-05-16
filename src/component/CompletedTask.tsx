import React from "react";
import { IAppProps } from "../interfaces";

interface CompletedProps {
  completeTask: IAppProps[];
  deleteInCompletedTask(taskNameToDelete: string): void;
}

const CompletedList: React.FC<CompletedProps> = ({
  completeTask,
  deleteInCompletedTask,
}: CompletedProps) => {
  console.log(completeTask);

  return (
    <>
      {completeTask.length > 0 && (
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">COMPLETED LIST</div>
          </div>
          <div className="px-6 py-4">
            {completeTask.map((compeleted) => (
              <div key={compeleted.id} className="py-2 rounded-lg">
                <div className="flex-row rounded shadow-xl">
                  <div className="flex items-center justify-between gap-2">
                    <p className="p-2 text-center">{compeleted.taskList}</p>
                    <button
                      type="button"
                      onClick={() => {
                        if (compeleted.taskList) {
                          deleteInCompletedTask(compeleted.taskList);
                        }
                      }}
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CompletedList;
