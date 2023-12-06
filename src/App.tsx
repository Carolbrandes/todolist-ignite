import { CreateNewTask } from "./components/CreateNewTask";
import { EmptyTodo } from "./components/EmptyTodo";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { TodosCounters } from "./components/TodosCounters";
import { useTodo } from "./hooks/useTodo";
import "./styles/global.scss";

function App() {
  const { todoList } = useTodo();

  return (
    <>
      <Header />
      <div className="container">
        <CreateNewTask />
        <TodosCounters />

        {todoList.length > 0 ? <TodoList /> : <EmptyTodo />}
      </div>
    </>
  );
}

export default App;
