import { Link } from "react-router-dom";
import { SubmitButton } from "../components/Button";
import { AuthInput } from "../components/Input";

function Signin() {
  return (
    <div className="flex h-screen w-screen">
      {/* this div contains the signin page */}
      <div className="border rounded-md hover:bg-slate-100 w-screen h-min-fit flex flex-col justify-center items-center mx-96 my-16">
        <div>
          <h2 className="text-4xl font-bold">Signin</h2>
        </div>

        <div className="mt-3">
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
        {/* this div contains the link to signup page */}
        <div className="flex font-semibold">
          <p className="mr-1">Don&apos;t have an account ?</p>{" "}
          <Link to={"/signup"} className="font-bold">
            Signup
          </Link>
        </div>
        {/* this div contains the submit button */}
        <div className="mt-4">
          <SubmitButton onClick={() => {}} buttonName={"Signin"} />
        </div>
      </div>
    </div>
  );
}

export default Signin;
