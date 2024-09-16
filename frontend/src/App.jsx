import { useRecoilState } from "recoil"
import InputContainer, { TodoRenderer } from "./components/Input"
import { todosAtom} from "./store/atoms/todoAtom"

// main app
function App() {
  const [todos, setTodos] = useRecoilState(todosAtom);


  return <div>
    <InputContainer />

    {todos.map((todo, index) => {
      return (
      <TodoRenderer key={todo.todoId} serial={index+1} title={todo.title} description={todo.description} todoId={todo.todoId}/>)
    })}
  </div>
}

export default App