import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { registerValidator } from "../utils/register.validator";

// prettify code opt + shift + f
// axios.get() and axios.post()
// response is in json format key .data

function Register() {
  const [formData, setFormData] = useState({
    username: null,
    password: null,
    email: null,
    phone: null,
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const hdlChange = (e) => {
    // console.dir(e.target);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();

    // 1. validate with library
    const validation_results = registerValidator.safeParse(formData);
    if (!validation_results.success) {
      // send form data obj {} to validate with zod
      const { fieldErrors } = validation_results.error.flatten();
      console.log(validation_results.error.flatten());
      console.log(fieldErrors);
      setErrors(fieldErrors);
      return;
    }

    // 2. ready to send data to backend
    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
        // console.log('successful: ', res.data);
        toast.success('Registration successful');
        // window.location.href = '/';
        // not rec as it hard refreshed the page and looses the state of SPA
        navigate('/');
    } catch (error) {
        console.log(error);
        toast.error('Failed to register, please try again later..');
    }

  };

  const inputStyles = "border bg-blue-50 w-full p-5";

  return (
    <div className="min-h-auto flex justify-center mt-10 p-3 bg-gray-50 rounded-md">
      <form
        onSubmit={hdlSubmit}
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
            value={formData.username}
            onChange={hdlChange}
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </label>
        <label htmlFor="">
          Password:
          <input
            type="password"
            className={inputStyles}
            name="password"
            onChange={hdlChange}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </label>
        <label htmlFor="">
          Email:
          <input
            type="text"
            className={inputStyles}
            name="email"
            onChange={hdlChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </label>
        <label htmlFor="">
          Phone:
          <input
            type="text"
            className={inputStyles}
            name="phone"
            onChange={hdlChange}
          />
          {errors.phone && <p className="text-red-500">{errors?.phone}</p>}
        </label>
        <button
          type="submit"
          className="bg-purple-200 p-1 m-1 rounded-2xl font-bold hover:bg-emerald-100"
        >
          Register
        </button>
        {/* {JSON.stringify(formData)} */}
      </form>
    </div>
  );
}

export default Register;
