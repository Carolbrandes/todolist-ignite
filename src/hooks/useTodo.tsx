import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface TodoProviderProps {
  children: ReactNode;
}

export interface TodoProps {
  id: string;
  task: string;
  isConcluded: boolean;
}


interface NewTodoProps {
  task: string
}

interface TodoContextData {
  todoList: TodoProps[];
  addNewTodo: (todo: NewTodoProps) => void
  changeStatus: (id: string ) => void
  removeTodo: (id: string) => void
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export function TodoProvider({ children }: TodoProviderProps): JSX.Element {
  const [todoList, setTodoList] = useState<TodoProps[]>([]);

  const addNewTodo = (todo: NewTodoProps) => {
    const newTodo: TodoProps = {
        id:todo.task,
        task: todo.task,
        isConcluded: false,
    }

    setTodoList(prevTodoList => [...prevTodoList, newTodo])
 
  }

  const changeStatus = (id: string) => {
    console.log('fn changeStatus')
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === id ? { ...todo, isConcluded: !todo.isConcluded } : todo
      )
    );
  };


  const removeTodo = (id: string) => {
    setTodoList(prevTodoList => prevTodoList.filter(todo => todo.id !== id))
  }


  useEffect(() => {
    console.log('todolist in useTodo =>', todoList)
  }, [todoList])

  return <TodoContext.Provider value={{todoList, addNewTodo, changeStatus, removeTodo}}>{children}</TodoContext.Provider>;
}

export function useTodo(): TodoContextData {
  const context = useContext(TodoContext);

  return context;
}
