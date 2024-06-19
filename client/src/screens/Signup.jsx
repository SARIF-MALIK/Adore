import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";


const SignUp = () => {
    const [creden, setCreden] = useState({ name: "", email: "", password: "" });
    let navigate = useNavigate();
    const inputChange = (e) => {
        setCreden({ ...creden, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(creden)
        const response = await axios.post("http://localhost:8080/api/v1/user/add-user",
           { email: creden.email, password: creden.password, name: creden.name },
        );
        
        console.log(response);

        if (!response.data.success) {
            alert("Enter valid Credentials");
        }
        if (response.data.success) {
            localStorage.setItem("userEmail", creden.email);
            navigate("/");
        }
    };


    return (
        <form onSubmit={handleSubmit} className="w-screen h-screen flex">
            <div className="flex justify-between w-[70%] h-[80%] m-auto items-center">
                <div className="hidden md:block text-center">
                    {/* <img src="./assets/CMSlogo" width={250} alt="" /> */}
                    <img src="https://cdn-icons-png.flaticon.com/512/5765/5765675.png" width={200} alt="" />
                    <h1 className="poppins-6 text-[30px] text-[#2B2F38]">CMS</h1>
                </div>
                <div className="mr-20" >
                    <div className="flex flex-col justify-center items-center gap-5">
                        <img src="https://cdn-icons-png.flaticon.com/512/5765/5765675.png" width={48} alt="" />
                        <h1 className="text-center poppins-6 text-3xl text-[#2B2F38]">
                            Create an account
                        </h1>
                        <p className="poppins-4 text-[16px] text-[#667085]">
                            Start your 30 days free trial.
                        </p>
                    </div>
                    <div className="mb-2 mt-6">
                        <label htmlFor="name" className="poppins-5 text-sm text-[#48505E] font-medium ">
                            Name*
                        </label>
                        <input
                            required
                            type="name"
                            className=" px-5 w-full outline-none border rounded-lg poppins-4 h-11"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            onChange={inputChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="poppins-5 text-sm text-[#48505E] font-medium">
                            Email*
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
                    <div className="mb-1">
                        <label htmlFor="password" className="form-label poppins-5 text-sm text-[#48505E] font-medium">
                            Password*
                        </label>
                        <input
                            required
                            type="password"
                            className="px-5 w-full outline-none border rounded-lg poppins-4 h-11 "
                            name="password"
                            id="password"
                            placeholder="Create a password"
                            onChange={inputChange}
                        />
                    </div>
                    <div className="flex justify-between text-sm " >
                        {/* <label for="checkbox" className="flex gap-2 ">
                            <input type="checkbox" id="checkbox" />
                            Remember me
                        </label>
                        <div>
                            <Link to="#" className="text-[#1366D9] poppins-5">Forgot password</Link>
                        </div> */}
                        <p className="font-normal text-[#667085]">Must be atleat 8 characters.</p>
                    </div>
                    <button
                        type="submit"
                        className="btn bg-[#1366D9] text-white poppins-5  w-full rounded-md mt-5 p-2"
                    >

                        
                            Get Started
                        
                    </button>
                    <button
                        type="submit"
                        className="btn border-2 p-1 poppins-5 text-sm  w-full rounded-lg mt-3 font-medium text-[#48505E] "
                    >
                        
                            <FcGoogle className="inline mr-2" size={24} />
                            Sign up with Google
                        
                    </button>
                    <div class="register-link poppins-4 text-sm flex justify-center gap-1 mt-5 text-[#667085]">
                        <p>
                            Already have an account?
                        </p>
                        <p className="text-[#0F50AA] poppins-5 font-medium">
                            <Link to="/login" className="">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SignUp