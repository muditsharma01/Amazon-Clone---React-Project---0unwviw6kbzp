import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrorMessage] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    // Perform form validation
    if (name === "") {
      setErrorMessage("Please enter your name");
      return;
    }
    if (email === "") {
      setErrorMessage("Please enter your email");
      return;
    }
    if (password === "") {
      setErrorMessage("Please enter your password");
      return;
    }

    // Register the user and redirect to the home page
    localStorage.setItem("isAuthenticated", true);
    navigate("/home");
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md -my-10">
        <img
          className="-my-24"
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"
          alt=""
        />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleRegister}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="border border-gray-400 py-2 px-4 w-full rounded-md mb-4 before:border border-l-amazon_blue focus-within:border-[#e77600]
                  focus-within:shadow-amazonInput duration-100"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email address"
                  className="border border-gray-400 py-2 px-4 w-full rounded-md mb-4 before:border border-l-amazon_blue focus-within:border-[#e77600]
                  focus-within:shadow-amazonInput duration-100"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                  className="border border-gray-400 py-2 px-4 w-full rounded-md mb-4 before:border border-l-amazon_blue focus-within:border-[#e77600]
                  focus-within:shadow-amazonInput duration-100"
                />
                </div>
                <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmpassword"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                  className="border border-gray-400 py-2 px-4 w-full rounded-md mb-4 before:border border-l-amazon_blue focus-within:border-[#e77600]
                  focus-within:shadow-amazonInput duration-100"
                />
              </div>
            </div>
            <Link to="/"><button
             onClick={()=>alert("Registration Successful")}
             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amazon_yellow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
  Register
</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
