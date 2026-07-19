import React, { useState } from "react";
import axios from "axios";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useTodos } from "./Hooks/useTodos";

function TodoList() {
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const {data: todos, isLoading, error} = useTodos()

  const addTodo = async (newTodo) => {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      newTodo,
    );
    return res.data;
  };

  const mutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    mutation.mutate({ title, completed: false });
    setTitle("");
  };

  const deleteTodo = async (id) => {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
  };

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isLoading) return <Loader2>Loading...</Loader2>;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo title"
        />
        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Adding..." : "Add"}
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteMutation.mutate(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
