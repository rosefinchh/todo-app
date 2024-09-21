import { Link } from "react-router-dom";
import { SubmitButton } from "../components/Button";
import { AuthInput } from "../components/Input";

function Signup() {
  return (
    <div className="flex h-screen w-screen">
      {/* this div contains the signup page */}
      <div className="border rounded-md hover:bg-slate-100 w-screen h-min-fit flex flex-col justify-center items-center mx-96 my-16">
        <div>
          <h2 className="text-4xl font-bold">Signup</h2>
        </div>
        {/* this div contains all the inputs */}
        <div className="mt-3">
          <AuthInput labelName={"Firstname"} placeholder={"eg. John"} />
          <AuthInput labelName={"Lastname"} placeholder={"eg. Doe"} />
          <AuthInput
            labelName={"Email"}
            placeholder={"eg. johndoe@gmail.com"}
          />
          <AuthInput
            type={"password"}
            labelName={"Password"}
            placeholder={"eg. secretpassword"}
          />
        </div>
        {/* this div contains the link to signin page */}
        <div className="flex font-semibold">
          <p className="mr-1">Already an user ?</p>{" "}
          <Link to={"/signin"} className="font-bold">
            Signin
          </Link>
        </div>
        {/* this div contains the submit button */}
        <div className="mt-4">
          <SubmitButton onClick={() => {}} buttonName={"Signup"} />
        </div>
      </div>
    </div>
  );
}

export default Signup;
