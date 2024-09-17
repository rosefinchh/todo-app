/* eslint-disable react/prop-types */
import { useRecoilState } from "recoil";
import { CompletedButton, DeleteButton } from "./Button";
import { todosAtom } from "../store/atoms/todoAtom";

// this renders all of the todos from the todos array
function TodoRenderer({ serial, title, description }) {
  const [todos, setTodos] = useRecoilState(todosAtom);

  // getting todo id to delete the specific todo
  const todoIdToDelete = todos[serial - 1].todoId;
  return (
    // this div contains a single row of serial, title, description, complete button and delete button
    <div className="flex border p-2 mb-3 justify-between shadow-md">
      {/*this div contains serial, title, description  */}
      <div className="flex">
        <div className="mr-2 text-2xl">{serial}</div>
        {/* this div contains title and description but title is stacked upon description */}
        <div>
          <div className="text-2xl">{title}</div>
          <div className="text-md">Description: {description}</div>
        </div>
      </div>

      {/* this div contains the complete and delete button */}
      <div className="flex">
        <div className="mr-2">
          <CompletedButton />
        </div>

        <div>
          <DeleteButton
            onClick={() => {
              const newArray = [...todos];

              for (let i = 0; i < todos.length; i++) {
                if (todos[i].todoId === todoIdToDelete) {
                  newArray.splice(i, 1);
                }
              }

              setTodos(newArray);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoRenderer;
