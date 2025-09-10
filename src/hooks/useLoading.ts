import { useEffect, useState } from "react";

export const useLoading = (ms: number = 1200) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setLoading(false), ms);
    return () => clearTimeout(id);
  }, [ms]);
  return loading;
};
