function Heading({ label, informationalMessage }) {
  return (
    <div className="text-center mt-1 mb-4">
      <div className="text-4xl font-bold">{label}</div>
      <div className="text-xl mt-2 italic">{informationalMessage}</div>
    </div>
  );
}

export default Heading;
