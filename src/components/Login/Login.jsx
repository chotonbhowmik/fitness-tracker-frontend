import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signIn, googleSignIn, githubLogin } = useContext(AuthContext);
  // const location = useLocation();
  // const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    try {
      const result = await signIn(email, password);
      console.log(result.user);
      toast.success("Login successful!");
      // navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded">
        <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="email"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="******************"
            />
          </div>
          <div className="mb-6">
            <input
              type="submit"
              value="Sign In"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            />
            <p className="text-xs italic mt-5">
              Do not Have Account
              <Link to="/register">
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                  Register
                </a>
              </Link>
            </p>
          </div>
        </form>
        <div className="flex items-center justify-between mb-4">
          <div className="w-full mx-auto">
            <button
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2"
              onClick={googleSignIn}
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
