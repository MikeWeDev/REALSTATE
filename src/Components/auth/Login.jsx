import {useState} from "react"

function Login() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault(); // Prevents page reload
    setPassword("");
    setUsername("");
    alert(`SIGN IN SUCCESSFUL (UI DEMO FOR ${username})`)
 }
 
  return (
    // Full-screen container with a rich gradient background
    <div className="min-h-screen flex items-center justify-center 
        bg-gradient-to-tr from-blue-700 via-indigo-700 to-purple-800 
        p-4">
        
        {/* Login Card Container */}
        <div className="w-full max-w-sm p-8 space-y-6 
            bg-white bg-opacity-95 rounded-xl shadow-2xl backdrop-blur-sm 
            transform transition-all duration-500 hover:shadow-3xl hover:scale-[1.01]">
            
            {/* Title */}
            <h1 className="text-3xl font-extrabold text-center text-gray-800">
                🔒 Welcome Back
            </h1>
            <p className="text-center text-gray-500 text-sm">
                Sign in to continue your journey.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" >
                
                {/* Username Input */}
                <input className="w-full p-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
                 type="text" // Changed to 'text' or 'email' for username/email
                  placeholder="Username or Email" 
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                  required
                />
                
                {/* Password Input */}
                <input className="w-full p-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150" 
                 type="password"
                 placeholder="Password"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                  required
                 />
                
                {/* Forgot Password Link */}
                <div className="text-right -mt-2">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition duration-150">
                        Forgot Password?
                    </a>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit"
                 className="w-full p-3 mt-2 text-lg font-semibold text-white 
                    bg-indigo-700 rounded-lg shadow-xl hover:bg-indigo-800 
                    focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 
                    transition duration-150 transform hover:scale-[1.01]"
                >
                    Sign In
                </button>
            </form>
            
            {/* Footer Text */}
            <div className="text-center text-sm text-gray-500 pt-2">
                Don't have an account? <a href="#" className="font-medium text-indigo-700 hover:text-indigo-600 transition duration-150">Register here</a>
            </div>
        </div>
    </div>
  )
}

export default Login