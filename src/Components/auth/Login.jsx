import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert("Please enter your username and password");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate processing for this UI demo
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert(`SIGN IN SUCCESSFUL (UI DEMO FOR ${username})`);

      setPassword("");
      setUsername("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center
        bg-gradient-to-tr from-blue-700 via-indigo-700 to-purple-800 p-4"
    >
      <div
        className="w-full max-w-sm p-8 space-y-6
          bg-white bg-opacity-95 rounded-xl shadow-2xl backdrop-blur-sm
          transform transition-all duration-500 hover:shadow-3xl hover:scale-[1.01]"
      >
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          🔒 Welcome Back
        </h1>

        <p className="text-center text-gray-500 text-sm">
          Sign in to continue your journey.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
            type="text"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={isLoading}
          />

          <input
            className="w-full p-3 border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />

          <div className="text-right -mt-2">
            <a
              href="#"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition duration-150"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 mt-2 text-lg font-semibold text-white
              bg-indigo-700 rounded-lg shadow-xl hover:bg-indigo-800
              focus:outline-none focus:ring-4 focus:ring-indigo-500
              focus:ring-opacity-50 transition duration-150
              disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 pt-2">
          Don't have an account?{" "}
          <a
            href="#"
            className="font-medium text-indigo-700 hover:text-indigo-600 transition duration-150"
          >
            Register here
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
