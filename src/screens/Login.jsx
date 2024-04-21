import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import polygon from "/assets/Polygon.png";

function Login() {
  const [creden, setCreden] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const inputChange = (e) => {
    setCreden({ ...creden, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("#", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: creden.email, password: creden.password }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid Credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail", creden.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-screen h-screen flex">
      <div className="flex justify-between w-[70%] h-[80%] m-auto items-center">
        <div className="hidden md:block text-center">
          <img src={polygon} width={240} alt="" />
          <h1 className="poppins-6 text-[47px] text-[#009ED8] mt-5">CMS</h1>
        </div>
        <div >
          <div className="flex flex-col justify-center items-center gap-5">
          <img src={polygon} width={48} alt="" />
          <h1 className="text-center poppins-6 text-3xl text-[#2B2F38]">
            Log in to your account
          </h1>
          <p className="poppins-4 text-[16px] text-[#667085]">
            Welcome back! Please enter your details.
          </p>
          </div>
          <div className="mb-2 mt-6">
            <label htmlFor="email" className="poppins-5 text-sm text-[#48505E]">
              Email
            </label>
            <input
              required
              type="email"
              className=" px-5 w-full outline-none border rounded-lg poppins-4 h-11"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={inputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              required
              type="password"
              className="  px-5 w-full outline-none border rounded-lg poppins-6 h-11 placeholder:text-3xl items-center"
              name="password"
              id="password"
              placeholder="........"
              onChange={inputChange}
            />
          </div>
          <div className="flex justify-between text-sm mt-5">
            <label for="checkbox" className="flex gap-2 ">
            <input type="checkbox" id="checkbox" />
              Remember me
            </label>
            <div>
              <Link to="#" className="text-[#1366D9] poppins-5">Forgot password</Link>
            </div>
          </div>
          <button
            type="submit"
            className="btn bg-[#1366D9] text-white poppins-5  w-full rounded-lg mt-5"
          >
            
            <Link to="/dashboard" className="">
              Sign in
            </Link>
          </button>
          <button
            type="submit"
            className="btn poppins-5  w-full rounded-lg mt-5 "
          >
            <Link to="/dashboard" className="">
            <FcGoogle className="inline mr-2" size={24}/>
              Sign in with Google
            </Link>
          </button>
          <div class="register-link poppins-4 text-sm flex justify-center gap-1 mt-6">
            <p>
              Don't have an account? 
            </p>
            <p className="text-[#1366D9] poppins-5">
              <Link to="/signup" className="">
               Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
