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
              title: title,
              description: description,
            },
          ]);
        }}
      />
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

export function TodoRenderer({ serialNumber, title, description }) {
  return (
    <div className="shadow-md m-5 border p-5 w-full">
      <div className="flex">
        <div className="h-fit border-r">
          <div className="text-xl mr-1 p-1 items-center">#{serialNumber}</div>
        </div>
        <div className="flex place-content-between w-[100%] ml-3">
          <div>
            <div className="text-xl text-wrap">{title}</div>
            <div className="text-sm text-wrap">Description: {description}</div>
          </div>
          <div className="flex">
            <div className="mr-2">
              <DeleteButton />
            </div>
            <div>
              <CompleteButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="focus:outline-none text-white bg-purple-700  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700"
    >
      Add todo
    </button>
  );
}

function DeleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="focus:outline-none text-white bg-red-700  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700"
    >
      Delete this todo
    </button>
  );
}

function CompleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="focus:outline-none text-white bg-green-700  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700"
    >
      Mark this todo as completed
    </button>
  );
}

export default Todo;
