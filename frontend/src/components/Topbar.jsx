import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="border p-5 mr-5"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Signup page
      </button>
      <button
        className="border p-5"
        onClick={() => {
          navigate("/signin");
        }}
      >
        Signin page
      </button>
    </div>
  );
}
