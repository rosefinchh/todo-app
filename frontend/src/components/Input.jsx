/* eslint-disable react/prop-types */
import { useState } from "react";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { todosAtom } from "../store/atoms/todoAtom";
import { AddButton } from "./Button";

function Input({ onChange, placeholder }) {
  return (
    <div className="items-center">
      <input
        type="text"
        placeholder={placeholder}
        maxLength={60}
        className="border border-black mr-1 pl-2 rounded-md h-8"
        onChange={onChange}
      />
    </div>
  );
}

function InputContainer() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useRecoilState(todosAtom);

  return (
    <div className="flex mt-5 justify-center border-b pb-2 items-center">
      <div className="flex items-center mr-5">
        <p className="font-semibold text-xl mr-1">Title</p>{" "}
        <Input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder={"eg. Play Guitar"}
        />
      </div>

      <div className="flex items-center">
        <p className="font-semibold text-xl mr-1">Description</p>{" "}
        <Input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder={"eg. Practice c# scale"}
        />
      </div>

      <div className="items-center ml-4">
        <AddButton
          onClick={() => {
            if (title === "") {
              alert("No title is provided for the to-do");
            } else {
              setTodos([
                ...todos,
                {
                  todoId: uuidv4(),
                  title: title,
                  description: description,
                },
              ]);
            }
          }}
        />
      </div>
    </div>
  );
}

export default InputContainer;
