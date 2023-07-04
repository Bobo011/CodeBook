import { useTitle } from '../hooks/useTitle';
import { useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from '../services/';

export const Login = () => {
  useTitle('Login'); // Custom hook to update the document title
  
  const navigate = useNavigate(); // React Router hook for navigation
  const email = useRef(); // Reference to the email input field
  const password = useRef(); // Reference to the password input field

  async function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const authDetail = {
        email: email.current.value,
        password: password.current.value,
      };
      const data = await login(authDetail); // Call the login service function

      // Check if the login was successful
      data.accessToken ? navigate("/products") : toast.error(data);
    } catch (error) {
      // Display an error toast message if an error occurred
      toast.error(error.message, {
        closeButton: true,
        position: "bottom-center",
        closeOnClick: true,
      });
      console.log(error);
    }
  }

async function handleLoginGuest(){
  email.current.value = 'George@example.com'
  password.current.value = '1234QWas!'
  try {
    const authDetail = {
      email: email.current.value,
      password: password.current.value,
    };
    const data = await login(authDetail); // Call the login service function
  
        // Check if the login was successful
        data.accessToken ? navigate("/products") : toast.error(data);
  } catch (error) {
     // Display an error toast message if an error occurred
     toast.error(error.message, {
      closeButton: true,
      position: "bottom-center",
      closeOnClick: true,
    });
    console.log(error);
  }
 
}

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          Login
        </p>
      </section>
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            ref={email}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="George@example.com"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            ref={password}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log In
        </button>
      </form>
      <button onClick={handleLoginGuest} className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button>
    </main>
  );
};
