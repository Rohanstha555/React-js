import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTodos = async () => {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    return res.data;
    console.log(res.data);
    console.log(res);
    
  } catch (error) {
    console.error("Failed to fetch todos:", error);
    throw error;
  }
};

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
}

