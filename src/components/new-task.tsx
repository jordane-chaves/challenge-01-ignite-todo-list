import { ChangeEvent, FormEvent, useRef, useState } from "react";

import plusIcon from "../assets/plus.svg";
import styles from "./new-task.module.css";
import { useTasks } from "../contexts/tasks";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function NewTask() {
  const { addNewTask } = useTasks();

  const [content, setContent] = useState("");

  const input = useRef<HTMLInputElement>(null);

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    addNewTask(content);
    setContent("");
    input.current?.focus();
  }

  function handleChangeContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }

  return (
    <form className={styles.newTaskForm} onSubmit={handleCreateTask}>
      <Input
        ref={input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleChangeContent}
        value={content}
        autoFocus
        required
      />

      <Button type="submit">
        Criar
        <img src={plusIcon} />
      </Button>
    </form>
  );
}
