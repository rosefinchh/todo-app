import { SecondTodoRenderer } from "./Todo";

function Example() {
  return (
    <div className="border shadow-md m-5">
      <div className="flex">
        <div className="border-r">
          <div>serail number</div>
        </div>
        <div className="flex place-content-between w-[100%]">
          <div className="border-r">
            <div>title</div>
            <div>description</div>
          </div>
          <div>
            <div>delete</div>
            <div>add</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Show() {
  return <SecondTodoRenderer />;
}

export default Example;
