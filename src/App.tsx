import { CreateNewTask } from "./components/CreateNewTask";
import { EmptyTodo } from "./components/EmptyTodo";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { TodosCounters } from "./components/TodosCounters";
import "./styles/global.scss";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <CreateNewTask />
        <TodosCounters />
        <EmptyTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
