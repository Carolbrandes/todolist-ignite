import { CreateNewTask } from "./components/CreateNewTask";
import { EmptyTodo } from "./components/EmptyTodo";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { TodosCounters } from "./components/TodosCounters";
import { TodoProvider } from "./hooks/useTodo";
import "./styles/global.scss";

function App() {
  return (
    <TodoProvider>
      <Header />
      <div className="container">
        <CreateNewTask />
        <TodosCounters />
        <EmptyTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
