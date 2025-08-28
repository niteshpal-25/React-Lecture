import AppName from "../src/components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Renew Car Insurance",
      dueDate: "28-02-2026",
    },
  ];

  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <div className="items-container">
          {todoItems.map((value) => (
            <TodoItem name={value.name} dueDate={value.dueDate}></TodoItem>
          ))}
        </div>
      </center>
    </>
  );
}

export default App;
