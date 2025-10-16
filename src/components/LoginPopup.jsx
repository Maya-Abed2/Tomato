import { useState } from "react";
import { assets } from "../assets/assets";

export default function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className=" fixed top-0 left-0  mx-auto w-full h-full z-10 grid bg-[#00000090]">
      <form action="" className="text-[#808080] bg-white flex flex-col gap-6.5  px-7.5 py-6.5 text-lg place-self-center animate-fade animate-duration-500">
        <div className="flex justify-between items-center text-black">
          <h2 className="font-semibold text-2xl">{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt="x"
            onClick={() => {
              setShowLogin(false);
            }}
            className="cursor-pointer w-4"
          />
        </div>
        <div className="flex flex-col gap-5">
          {currentState === "Login" ? (
            ""
          ) : (
            <input type="text" placeholder="Your Name" required  className="outline-none border-1 border-[#c9c9c9] p-2.5 rounded-sm"/>
          )}
          <input type="email" placeholder="Your Email" required  className="outline-none border-1 border-[#c9c9c9] p-2.5 rounded-sm"/>
          <input type="password" placeholder="Password" required className="outline-none border-1 border-[#c9c9c9] p-2.5 rounded-sm" />
        </div>
        <button className="text-white bg-[#FF6347] rounded-sm p-2.5 text-lg cursor-pointer">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="flex items-center gap-2  -mt-4">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")} className="cursor-pointer text-[#ff6347] ml-3">Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrentState("Login")}className="cursor-pointer text-[#ff6347] ml-3">Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}
