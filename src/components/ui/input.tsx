import { InputHTMLAttributes, forwardRef } from "react";

import styles from "./input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input className={styles.input} ref={ref} {...props} />;
});
