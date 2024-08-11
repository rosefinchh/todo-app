import { Link } from "react-router-dom";
import { SubmitButton } from "../components/Buttons";
import Heading from "../components/Heading";
import Input from "../components/Input";

function Signup() {
  return (
    <div className="h-screen flex justify-center">
      <div className="mx-40 w-1/3 mt-20 mb-6 rounded-md border shadow-md">
        <Heading
          label={"Signup"}
          informationalMessage={"Create a new account to register"}
        />

        {/* div containing all the user input parts */}
        <div className="ml-2">
          <Input label={"First name"} placeholder={"eg. John"} />
          <Input label={"Last name"} placeholder={"eg. Doe"} />
          <Input label={"Email"} placeholder={"eg. johndoe@gmail.com"} />
          <Input label={"Password"} placeholder={"eg. mysecretpassword"} />
        </div>

        {/* div containing the signup button */}
        <div className="flex justify-center mt-10">
          <SubmitButton buttonText={"Sign up"} />
        </div>

        {/* div containing the bottom information */}
        <div className="flex justify-center">
          <p className="font-semibold">
            Already a user ?{" "}
            <span className="hover:underline hover:cursor-pointer">
              <Link to={"/signin"}>Sign in</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
