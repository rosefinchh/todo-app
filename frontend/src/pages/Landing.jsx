import { useNavigate } from "react-router-dom";

function Landing() {
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

export default Landing;
