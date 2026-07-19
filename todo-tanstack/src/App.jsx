import TodoCount from "./todoCount"
import TodoList from "./todoList"

function App() {
  return (
    <div style={{ maxWidth: 500, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Todo App</h1>
      <TodoList/>
      <TodoCount/>
    </div>
  )
}

export default App
