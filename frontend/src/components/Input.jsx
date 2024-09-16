import { useState } from "react";
import { useRecoilState } from "recoil";
import { v4 as uuidv4} from "uuid";
import { todosAtom } from "../store/atoms/todoAtom";




function Input({onChange}) {
	return (
		<div>
			<input type="text" placeholder="Enter title" onChange={onChange}/>
		</div>
	)
}

function InputContainer() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [todos, setTodos] = useRecoilState(todosAtom)

return (
		<div className="flex">
			<div>
				Title <Input onChange={(e) => {
					setTitle(e.target.value)
				}}/>
			</div>

			<div>
				Description <Input onChange={(e) => {
					setDescription(e.target.value)
				}}/>
			</div>

			<button onClick={() => {
				setTodos([...todos, {
					todoId: uuidv4(),
					title: title,
					description: description
				}])
			}}>Add</button>

		</div>
	)
}

export function TodoRenderer({serial, title, description, todoId}) {
	const [todos, setTodos] = useRecoilState(todosAtom);
	const todoIdToDelete = todos[serial-1].todoId;

	return (
		<div className="flex">
			<div className="mr-2">{serial}</div>
			<div className="font-bold mr-2">{title}</div>
			<div className="mr-2">{description}</div>
			<div className="mr-2">{todoId}</div>

			<div>
				<button onClick={() => {
					const newArray = [...todos];

					for (let i=0; i<todos.length; i++) {
						if (todos[i].todoId === todoIdToDelete) {
							newArray.splice(i, 1)
						}
					}

					setTodos(newArray)
				}}>Delete this todo</button>
			</div>

		</div>
	)
}

export default InputContainer;