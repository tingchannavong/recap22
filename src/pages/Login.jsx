import React from 'react'

function Login() {
  const inputStyles = "border bg-blue-50 w-full p-5";

  return (
    <div className="min-h-auto flex justify-center mt-10 p-3 bg-gray-50 rounded-md">
      <form
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
          />
        </label>
        <label htmlFor="">
          Password:
          <input
            type="password"
            className={inputStyles}
            name="password"
          />
        </label>
        <button
          type="submit"
          className="bg-purple-200 p-1 m-1 rounded-2xl font-bold hover:bg-emerald-100"
        >
          Log In
        </button>
        {/* {JSON.stringify(formData)} */}
      </form>
    </div>
  );
}

export default Login