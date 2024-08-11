function Input({ label, placeholder }) {
  return (
    <div className="ml-2 mb-2">
      <div className="font-semibold mb-1">{label}</div>

      {label == "Password" ? (
        <input
          type="password"
          placeholder={placeholder}
          className="border p-1 rounded-sm text-black pr-3 pl-2"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="border p-1 rounded-sm text-black pr-3 pl-2"
        />
      )}
    </div>
  );
}

export default Input;
