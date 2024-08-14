import { Link, useNavigate } from "react-router-dom";
import { SubmitButton } from "../components/Buttons";
import Heading from "../components/Heading";
import Input from "../components/Input";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="py-5 mx-40 w-1/3 mt-20 mb-6 rounded-md border shadow-md">
        <Heading
          label={"Signup"}
          informationalMessage={"Create a new account to register"}
        />

        {/* div containing all the user input parts */}
        <div className="ml-2">
          <Input
            label={"First name"}
            placeholder={"eg. John"}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          <Input
            label={"Last name"}
            placeholder={"eg. Doe"}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
          <Input
            label={"Email"}
            placeholder={"eg. johndoe@gmail.com"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            label={"Password"}
            placeholder={"eg. mysecretpassword"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        {/* div containing the signup button */}
        <div className="flex justify-center mt-10">
          <SubmitButton
            buttonText={"Sign up"}
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/user/auth/signup",
                {
                  firstName,
                  lastName,
                  email,
                  password,
                }
              );

              {
                console.log(response);
              }

              {
                response.status === "400"
                  ? navigate("/error/400")
                  : navigate("/dashboard");
              }
            }}
          />
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
