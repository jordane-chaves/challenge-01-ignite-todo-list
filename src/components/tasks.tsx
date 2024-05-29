import styles from "./tasks.module.css";

import emptyImage from "../assets/empty.png";
import { useTasks } from "../contexts/tasks";
import { Task } from "./task";

export function Tasks() {
  const { completedTasksCount, tasks, tasksCount } = useTasks();

  const isEmptyTasks = tasksCount === 0;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.info}>
          <strong>Tarefas criadas</strong>
          <span>{tasksCount}</span>
        </div>

        <div className={styles.info}>
          <strong data-color="secondary">Concluídas</strong>
          {tasksCount > 0 ? (
            <span>
              {completedTasksCount} de {tasksCount}
            </span>
          ) : (
            <span>0</span>
          )}
        </div>
      </div>

      <div className={styles.tasks}>
        {isEmptyTasks ? (
          <div className={styles.empty}>
            <img src={emptyImage} alt="Ilustração de um ícone de um papel" />

            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        ) : (
          <div>
            {tasks.map((task) => (
              <Task key={task.content} task={task} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
