/* eslint-disable react/prop-types */
export function AddButton({ onClick }) {
  return (
    <button
      type="button"
      className="text-white bg-blue-600 hover:bg-blue-800 active:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 h-10"
      onClick={onClick}
    >
      Add
    </button>
  );
}

// this button deletes the to-do
export function DeleteButton({ onClick }) {
  return (
    <button
      type="button"
      className="text-white bg-red-600 hover:bg-red-800 active:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      onClick={onClick}
    >
      Delete this to-do
    </button>
  );
}
export function CompletedButton({ onClick }) {
  return (
    <button
      type="button"
      className="text-white bg-green-600 hover:bg-green-800 active:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      onClick={onClick}
    >
      Mark as completed
    </button>
  );
}
