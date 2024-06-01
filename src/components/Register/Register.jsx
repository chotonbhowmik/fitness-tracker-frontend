import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Navigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  // const navigate = useNavigate();
const axiosPublic = useAxiosPublic();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const displayName = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photoURL = form.get("photo");

    try {
      const result = await createUser(email, password, displayName, photoURL);
const user = { displayName, email, password, photoURL };
      axiosPublic.post("/users", user).then((res) => {
        if (res.data.insertedId) {
           
          toast.success("Registration successful!");
          
        } else if (res.data.message === "user already exists") {
          toast.warn("User already exists!");
        }
      });
      console.log(result.user);
       
      
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleRegister}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              placeholder="******************"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Photo Url
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="photo"
              placeholder="https/****"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <input
              type="submit"
              value="Sign Up"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            />
            <Link to="/login">
              Already Have Account
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Login
              </a>
            </Link>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
