import { useRecoilValue } from "recoil";
import { todosAtom } from "./store/atoms/todoAtom";
import InputContainer from "./components/Input";
import TodoRenderer from "./components/Todo";

// main app
function App() {
  const todos = useRecoilValue(todosAtom);
  return (
    // this div contains the whole app
    <div>
      {/* this div contains the main app */}
      <div className="p-2">
        {/* this div contains the inputs from the user */}
        <div>
          <InputContainer />
        </div>

        {/* this div renders the todos */}
        <div>
          {todos.length === 0 ? (
            <h1 className="text-3xl text-center italic">
              No todos yet. Add todos
            </h1>
          ) : (
            todos.map((todo, index) => {
              return (
                <TodoRenderer
                  key={todo.todoId}
                  serial={index + 1}
                  title={todo.title}
                  description={todo.description}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
