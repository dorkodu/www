import { useEffect, useState } from "react";

export function useDelay(delay: number = 100) {
  const [state, setState] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setState(false), delay);
    return () => clearTimeout(timeout);
  }, []);

  return state;
}