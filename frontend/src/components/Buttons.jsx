export function AddButton({ onClick }) {
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

export function DeleteButton({ onClick }) {
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

export function CompleteButton({ onClick }) {
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
