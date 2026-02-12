import React, { useState } from 'react'
import axios from 'axios';

function Login() {
    const [formLogin, setFormLogin] = useState({
        username: "",
        password: ""
    });

    const hdlChange = (e) => {
        const { name, value } = e.target;
        setFormLogin( prev => ({...prev, [name] : value}));
    }

    const hdlSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('https://dummyjson.com/auth/login', formLogin);
        console.log(res.data);
    }

  const inputStyles = "border bg-blue-50 w-full p-5";

  return (
    <div className="min-h-auto flex justify-center mt-10 p-3 bg-gray-50 rounded-md">
      <form onSubmit={hdlSubmit}
        className="flex flex-col gap-5 border border-gray-200 p-5 rounded-md"
      >
        <h1 className="text-center font-bold italic text-xl">
          {" "}
          Create Account
        </h1>
        <label htmlFor="">
          Username:
          <input
            type="text"
            className={inputStyles}
            name="username"
            value={formLogin.username}
            onChange={hdlChange}
          />
        </label>
        <label htmlFor="">
          Password:
          <input
            type="password"
            className={inputStyles}
            name="password"
            value={formLogin.password}
            onChange={hdlChange}
          />
        </label>
        <button
          type="submit"
          className="bg-purple-200 p-1 m-1 rounded-2xl font-bold hover:bg-emerald-100"
        >
          Log In
        </button>
        {JSON.stringify(formLogin)}
      </form>
    </div>
  );
}

export default Login