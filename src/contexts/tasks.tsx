import { ReactNode, createContext, useContext, useState } from "react";

export interface Task {
  id: string;
  completed: boolean;
  content: string;
}

interface TaskContext {
  tasks: Task[];
  tasksCount: number;
  completedTasksCount: number;
  addNewTask: (content: string) => void;
  deleteTask: (task: Task) => void;
  toggleCompleteTask: (id: string) => void;
}

export const TasksContext = createContext({} as TaskContext);

interface TasksProviderProps {
  children: ReactNode;
}

export function useTasks() {
  const context = useContext(TasksContext);
  return context;
}

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const tasksCount = tasks.length;
  const completedTasksCount = tasks.filter((task) => task.completed).length;

  function addNewTask(content: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      completed: false,
      content,
    };

    setTasks((state) => [...state, newTask]);
  }

  function deleteTask(task: Task) {
    const tasksWithoutRemovedOne = tasks.filter((item) => item.id !== task.id);
    setTasks(tasksWithoutRemovedOne);
  }

  function toggleCompleteTask(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        completedTasksCount,
        tasksCount,
        addNewTask,
        deleteTask,
        toggleCompleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
