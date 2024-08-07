import { useState } from "react";

function Todo() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todos, setTodos] = useState([]);

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
      Title
      <input
        type="text"
        placeholder="eg. Go to gym"
        className="ml-1 mr-1 border pl-1"
        onChange={(e) => {
          captureTodoTitle(e);
        }}
      />
      Description
      <input
        type="text"
        placeholder="eg. Do pushups today."
        className="ml-1 border pl-1"
        onChange={(e) => {
          captureTodoDescription(e);
        }}
      />
      <button
        className="border p-1 ml-1"
        onClick={() => {
          setTodos([
            ...todos,
            {
              title: title,
              description: description,
            },
          ]);
        }}
      >
        Add Todo
      </button>
      <div>
        {todos.map((todo, index) => {
          return (
            <div className="flex items-center mt-8" key={index}>
              {todos.length === 0 ? (
                "No todo yet. Add todo."
              ) : (
                <TodoRenderer
                  serialNumber={index + 1}
                  title={todo.title}
                  description={todo.description}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TodoRenderer({ serialNumber, title, description }) {
  return (
    <div className="flex items-center text-xl border p-5 w-full mr-8">
      <span className="mr-2 justify-center">{serialNumber}.</span>
      <h1 className="mr-5">{title}</h1>
      <div>
        <h3>{description}</h3>
      </div>
    </div>
  );
}

export default Todo;
