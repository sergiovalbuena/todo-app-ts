import { useState } from "react";
import { Todos } from "./components/Todos";

const mockTodos = [
  {
    id: 1,
    text: "Buy milk",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Buy eggs",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Buy bread",
    isCompleted: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = (id: number): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos onRemoveTodo={handleRemove} todos={todos} />
    </div>
  );
};

export default App;
