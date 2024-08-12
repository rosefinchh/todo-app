import { useRecoilState, useRecoilValue } from "recoil";
import { CompleteButton, DeleteButton } from "./Buttons";
import { todoAtom, todoTitle } from "../store/atoms/todoAtom";
import { useEffect } from "react";

export function TodoRenderer({ serialNumber, title, description }) {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const todoTitle = useRecoilValue(todoTitle);

  useEffect(() => {}, []);

  return (
    <div className="shadow-md m-5 border p-5 w-full">
      <div className="flex">
        <div className="h-fit border-r">
          <div className="text-xl mr-1 p-1 items-center">
            #{serialNumber + 1}
          </div>
        </div>
        <div className="flex place-content-between w-[100%] ml-3">
          <div>
            <div className="text-xl text-wrap">{title}</div>
            <div className="text-sm text-wrap">
              Description:{" "}
              {description ? (
                description
              ) : (
                <span className="italic font-semibold">
                  No description provided for this To-do
                </span>
              )}
            </div>
          </div>
          <div className="flex">
            <div className="mr-2">
              <DeleteButton
                onClick={() => {
                  console.log(todos);
                  todos.splice(serialNumber - 1, 1);
                  setTodos([...todos]);
                  console.log(todos);
                }}
              />
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
