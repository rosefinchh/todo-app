function Input({ label, placeholder, onChange }) {
  return (
    <div className="ml-2 mb-2">
      <div className="font-semibold mb-1">{label}</div>

      {label == "Password" ? (
        <input
          onChange={onChange}
          type="password"
          placeholder={placeholder}
          required
          className="border p-1 rounded-sm text-black pr-3 pl-2"
        />
      ) : (
        <input
          onChange={onChange}
          type="text"
          placeholder={placeholder}
          required
          className="border p-1 rounded-sm text-black pr-3 pl-2"
        />
      )}
    </div>
  );
}

export function TodoInputs({ title, placeholder, onChange }) {
  return (
    <>
      <span className="font-semibold">{title}</span>
      <input
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="ml-1 mr-10 border p-2"
      />
    </>
  );
}

export default Input;
