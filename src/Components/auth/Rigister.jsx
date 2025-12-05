import {useState} from "react"

function Rigister() {
 // Using more semantic state names for clarity
 const [lastName, setLastName] = useState("")
 const [firstName, setFirstName] = useState("")
 const [emailOrUsername, setEmailOrUsername] = useState("")
 const [password, setPassword] = useState("") 
 const [confirmPassword, setConfirmPassword] = useState("") 

 const handleSubmit=(e)=>{
    // Prevent default form submission behavior to keep state values for demonstration
    e.preventDefault(); 
    // Add actual validation logic here (e.g., check if passwords match)
    alert("SUCCESSFULLY REGISTERED (UI DEMO)")
    
    // Clear form fields
    setConfirmPassword("")
    setFirstName("")
    setPassword("")
    setLastName("")
    setEmailOrUsername("")
 }
 
  return (
    // 1. Full Gradient BG and No Scroll (min-h-screen ensures it fills viewport)
    <div className="min-h-screen flex items-center justify-center  
        bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 
        p-4">
        
        {/* Registration Card Container - Relative z-index is no longer needed since the background is the container itself. */}
        <div className="w-full mt-20 max-w-md p-6 space-y-6 bg-white bg-opacity-95 rounded-xl shadow-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-3xl">
            
            {/* Title */}
            <h1 className="text-4xl font-extrabold text-center text-gray-800">
                ✨ Create Account
            </h1>
            <p className="text-center text-gray-500">
                Join us today for an amazing experience!
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                
                {/* Name Input (First Name) */}
                <input
                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150" 
                    type="text"
                 placeholder="First Name"
                 value={firstName} // Mapped to name
                 onChange={(e)=>setFirstName(e.target.value)}
                    required
                />
               
                {/* Name Input (Last Name) */}
                <input 
                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
                 onChange={(e)=>setLastName(e.target.value)} // Mapped to submite
                 value={lastName} 
                    type="text"
                  placeholder="Last Name"
                    required
                />
                
                {/* Username/Email Input */}
                <input 
                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150" 
                 type="email" // Changed type to email for better mobile keyboard and validation
                 placeholder="Email Address"
                 value={emailOrUsername} // Mapped to username
                 onChange={(e)=>setEmailOrUsername(e.target.value)}
                    required 
                />
               
                {/* Password Input */}
                <input 
                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150" 
                 type="password"
                 placeholder="Password (min 8 characters)"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                    required
                    minLength={8}
                />
               
                {/* Confirm Password Input */}
                <input 
                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150" 
                 type="password"
                 placeholder="Confirm Password"
                 value={confirmPassword} // Mapped to confirm
                 onChange={(e)=>setConfirmPassword(e.target.value)}
                    required
                />

                {/* Submit Button */}
                <button 
                    type="submit"
                 className="w-full p-3 mt-4 text-lg font-semibold text-white bg-indigo-700 rounded-lg shadow-xl hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 transform hover:scale-[1.01]"
                >
                    Create Account
                </button>
            </form>

            {/* Footer Text */}
            <div className="text-center text-sm text-gray-500 pt-2">
                Already have an account? <a href="#" className="font-medium text-indigo-700 hover:text-indigo-600 transition duration-150">Sign in</a>
            </div>
        </div>
    </div>
  )
}

export default Rigister