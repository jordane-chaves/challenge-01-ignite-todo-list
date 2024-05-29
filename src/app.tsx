import "./global.css";
import styles from "./app.module.css";

import { Header } from "./components/header";
import { NewTask } from "./components/new-task";
import { Tasks } from "./components/tasks";
import { TasksProvider } from "./contexts/tasks";

export function App() {
  return (
    <>
      <TasksProvider>
        <Header />

        <main className={styles.wrapper}>
          <NewTask />
          <Tasks />
        </main>
      </TasksProvider>
    </>
  );
}
