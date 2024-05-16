import React, { useState } from "react";
import AddTask from "../component/AddTask";
import TodoTask from "../component/TodoTask";
import { IAppProps } from "../interfaces";
import CompletedList from "../component/CompletedTask";

const Todolist: React.FC<IAppProps> = () => {
  const [task, setTask] = useState<string>("");
  const [todolist, setTodolist] = useState<IAppProps[]>([]);
  const [completeTask, setCompleteTask] = useState<IAppProps[]>([]);
  const [checkedTasks, setCheckedTasks] = useState<boolean[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addTaskList = (task: string) => {
    if (task === "") {
      return alert("Task tidak boleh kosong");
    } else {
      const newID = Math.floor(Math.random() * 1000).toString();
      const newTask = { id: newID, taskList: task };
      setTodolist([...todolist, newTask]);
      setCheckedTasks([...checkedTasks, false]);
      setTask("");
    }
  };

  const deleteTask = (taskNameToDelete: string) => {
    setTodolist(todolist.filter((task) => task.taskList !== taskNameToDelete));
    const taskIndex = todolist.findIndex((task) => task.taskList === taskNameToDelete);
    const newCheckedTasks = [...checkedTasks];
    newCheckedTasks.splice(taskIndex, 1);
    setCheckedTasks(newCheckedTasks);
  };

  const deleteInCompletedTask = (taskNameToDelete: string) => {
    setCompleteTask(completeTask.filter((task) => task.taskList !== taskNameToDelete));
    const taskIndex = completeTask.findIndex((task) => task.taskList === taskNameToDelete);
    const newCheckedTasks = [...checkedTasks];
    newCheckedTasks.splice(taskIndex, 1);
    setCheckedTasks(newCheckedTasks);
  };

  const completedTask = (id: string) => {
    const updatedTodos = todolist.map((todo) => {
      if (todo.id === id) {
        const updatedTodo = { ...todo, completed: !todo.completed };
        if (updatedTodo.completed) {
          setCompleteTask((prevState) => [...prevState, updatedTodo]);
        } else {
          setCompleteTask((prevState) => prevState.filter((task) => task.id !== id));
        }
        return updatedTodo;
      }
      return todo;
    });

    // Perbarui checkedTasks sesuai dengan tugas yang dicentang
    const checkedState = updatedTodos.map((todo) => todo.completed || false);
    setCheckedTasks(checkedState);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen gap-3">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">TODO LIST</div>
            <AddTask handleChange={handleChange} addTaskList={addTaskList} task={task} />
          </div>
          <div className="px-6 py-4">
            {todolist.map((task: IAppProps, index: number) => (
              <TodoTask
                key={index}
                task={task}
                deleteTask={deleteTask}
                isChecked={task.completed}
                handleChange={() => completedTask(task.id)}
              />
            ))}
          </div>
        </div>
        <CompletedList completeTask={completeTask} deleteInCompletedTask={deleteInCompletedTask} />
      </div>
    </>
  );
};

export default Todolist;
