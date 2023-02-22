import { ArrowRightAltOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignIn = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrorMessage] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();

    // check if email and password match
    if (email === "example@gmail.com" && password === "password123") {
      localStorage.setItem("isAuthenticated", true);
      navigate("/home"); // Redirect to home page after successful sign-in
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md -my-10">
        <img className='-my-24' src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png" alt="" />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSignIn}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>

            {error && <p className="text-red-600">{error}</p>}

            <div>
              <Link to="/"><button className=" mx-20 bg-yellow-400 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
                Sign in with Amazon
              </button></Link>
            </div>
            
            <div className='w-full'>
                <p className='text-sm'>By continuing, you agree to Amazon's<a className='text-blue-400' href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">{" "}Conditions of Use</a>{" "}and
                <a className='text-blue-400' href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy">{" "}Privacy Notice.</a></p>
                <p className='text-sm my-2'><ArrowRightAltOutlined/><a className='hover:text-yellow-500 hover:underline' href="https://www.amazon.in/gp/help/customer/account-issues/ref=ap_login_with_otp_claim_collection?ie=UTF8">Need Help?</a></p>
            </div>
            <div>
                </div>
          </form>
          <div>

          </div>
        </div>
        </div>
        </div>
        );
      };

export default SignIn;
