import { useState } from "react";
import { AddButton } from "./Buttons";
import { useRecoilState } from "recoil";
import { todoAtom } from "../store/atoms/todoAtom";
import { TodoRenderer } from "./Todorenderer";

let globalId = 0;

function Todo() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const [todos, setTodos] = useRecoilState(todoAtom);

  let title = todoTitle;
  function captureTodoTitle(e) {
    title = setTodoTitle(e.target.value);
  }

  let description = todoDescription;
  function captureTodoDescription(e) {
    description = setTodoDescription(e.target.value);
  }

  return (
    <div className="mt-8 ml-10">
      <span className="font-semibold">Title</span>
      <input
        type="text"
        placeholder="eg. Buy groceries"
        className="ml-1 mr-10 border p-2"
        onChange={(e) => {
          captureTodoTitle(e);
        }}
      />
      <span className="font-semibold">Description</span>
      <input
        type="text"
        placeholder="eg. Buy milk, eggs, bread"
        className="ml-1 mr-10 border p-2"
        onChange={(e) => {
          captureTodoDescription(e);
        }}
      />
      <AddButton
        onClick={() => {
          setTodos([
            ...todos,
            {
              todoId: globalId++,
              title,
              description,
            },
          ]);
        }}
      />
      <div>
        {todos.length === 0 ? (
          <div className="text-2xl text-center mt-5 font-semibold italic">
            No todo yet. Add Todo
          </div>
        ) : (
          todos.map((todo, index) => {
            return (
              <TodoRenderer
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
