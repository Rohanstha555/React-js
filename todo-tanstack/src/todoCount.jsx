import React from "react";
import { useTodos } from "./Hooks/useTodos";

function TodoCount() {
  const { data: todos, isLoading } = useTodos()
  if (isLoading) return <p>Loading count...</p>;

  return <p>You have {todos.length} todos</p>;
}

export default TodoCount;