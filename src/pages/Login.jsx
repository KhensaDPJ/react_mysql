import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="bg-blue-300 w-full h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold md:text-3xl text-teal-500">login</h1>
      <form
        action=""
        className="flex flex-col w-[90%] h-[30%] bg-white rounded-md items-center justify-center gap-4 max-w-md"
      >
        <input
          required
          type="text"
          placeholder="Username"
          className="border-b-2 w-[70%] h-10 hover:border-blue-400"
        />
        <input
          required
          type="Password"
          placeholder="Password"
          className="border-b-2 w-[70%] h-10 hover:border-blue-400"
        />
        <button className="bg-teal-500 w-[30%] h-[15%] text-white rounded-md hover:shadow-md">
          Login
        </button>
        <p className="text-red-500">This is an error!</p>
        <Link to="/register">
          <span className="hover:text-blue-400">
            Don't you have an account?
          </span>
        </Link>
      </form>
    </div>
  );
};
export default Login;
