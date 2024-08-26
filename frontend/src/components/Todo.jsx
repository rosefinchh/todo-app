import { AddButton } from "./Buttons";
import { useRecoilState } from "recoil";
import { todoAtom, todoDescription, todoTitle } from "../store/atoms/todoAtom";
import { TodoInputs } from "./Input";
import Todorenderer from "./Todorenderer";

let globalId = 0;

function Todo() {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const [title, setTitle] = useRecoilState(todoTitle);
  const [description, setDescription] = useRecoilState(todoDescription);

  return (
    <div className="mt-8 ml-10">
      <TodoInputs
        title={"Title"}
        placeholder={"eg. Play Guitar"}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TodoInputs
        title={"Description"}
        placeholder={"eg. Practice c# scale"}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <AddButton
        onClick={() => {
          setTodos([
            ...todos,
            {
              todoId: globalId++,
              title: title,
              description: description,
            },
          ]);
        }}
      />

      {/* this div shows text if there are no todos */}
      <div>
        {todos.length === 0 ? (
          <div className="text-2xl text-center mt-5 font-semibold italic">
            No todo yet. Add Todo
          </div>
        ) : (
          todos.map((todo, index) => {
            return (
              <Todorenderer
                key={index}
                serialNumber={todo.todoId}
                title={todo.title}
                description={todo.description}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Todo;
