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
  const [todos] = useState(mockTodos);

  return (
    <div>
      <Todos todos={todos} />
    </div>
  );
};

export default App;
