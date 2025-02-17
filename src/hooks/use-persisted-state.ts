import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

export function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storageState = localStorage.getItem(key);

    if (storageState) {
      return JSON.parse(storageState);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
