import { useEffect } from "react";

export default function useUnmount(func) {
  useEffect(() => {
    return func;
  }, []);
}
