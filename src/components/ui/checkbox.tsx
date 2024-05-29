import { InputHTMLAttributes } from "react";

import checkIcon from '../../assets/check.svg'
import styles from "./checkbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <label className={styles.checkbox}>
      <input {...props} className="sr-only" type="checkbox" />
      <img src={checkIcon} />
    </label>
  );
}
