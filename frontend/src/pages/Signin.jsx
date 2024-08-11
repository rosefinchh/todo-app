import { Link } from "react-router-dom";
import { SubmitButton } from "../components/Buttons";
import Heading from "../components/Heading";
import Input from "../components/Input";

function Signin() {
  return (
    <div className="flex justify-center">
      <div className="mx-40 w-1/3 mt-20 mb-6 rounded-md border shadow-md pb-10">
        <Heading
          label={"Signin"}
          informationalMessage={
            "Sign in to your account to access all your data"
          }
        />

        {/* div containing all the user input parts */}
        <div className="mt-10 ml-2">
          <Input label={"Email"} placeholder={"eg. johndoe@gmail.com"} />
          <Input label={"Password"} placeholder={"eg. mysecretpassword"} />
        </div>

        {/* div containing the signup button */}
        <div className="flex justify-center mt-10">
          <SubmitButton buttonText={"Sign in"} />
        </div>

        {/* div containing the bottom information */}
        <div className="flex justify-center">
          <p className="font-semibold">
            Don&apos;t have an account ?{" "}
            <span className="hover:underline hover:cursor-pointer">
              <Link to={"/signup"}>Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
