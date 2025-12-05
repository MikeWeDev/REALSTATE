import { TbHomeCheck } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // Imported popular social icons

function Footer() {
  return (
    // 🎨 Use a darker background (e.g., dark blue/gray) for a more premium look
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10 border-b border-gray-700 pb-10">
        {/* === Left Section: Logo & About === */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[300px]">
          <h1 className="text-3xl font-extrabold text-white mb-4">
            <span className="icon flex items-center">
              {/* 💡 Brighter accent color and better size for impact */}
              <TbHomeCheck 
                size={40} 
                className='bg-teal-500 text-gray-900 p-2 rounded-lg' // Changed color and size
              />
              <span className='text-3xl ml-2 tracking-wider'>
                MIKE
              </span>
            </span>
          </h1>
          <p className="text-sm leading-relaxed my-5 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            veritatis obcaecati facilis cupiditate quisquam incidunt saepe cum ex rerum ducimus?
          </p>
          
          {/* 🔗 Social Icons: Using imported react-icons for consistency & color */}
          <div className="social-icons flex space-x-3 mt-6">
            <FaFacebookF className="w-8 h-8 p-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 cursor-pointer" />
            <FaTwitter className="w-8 h-8 p-1.5 rounded-full bg-cyan-400 text-white hover:bg-cyan-500 transition duration-300 cursor-pointer" />
            <FaInstagram className="w-8 h-8 p-1.5 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition duration-300 cursor-pointer" />
            <FaYoutube className="w-8 h-8 p-1.5 rounded-full bg-red-600 text-white hover:bg-red-700 transition duration-300 cursor-pointer" />
          </div>
        </div>

        {/* === Center Section: Useful Links === */}
        <div className="w-1/2 sm:w-1/4 md:w-1/6">
          <h2 className="mb-4 text-xl font-bold text-white uppercase tracking-wider">
            Useful Links
          </h2>
          <div className="links space-y-2">
            {['Home', 'About', 'Men Fashion', 'Women Fashion', 'Accessories', 'Order'].map((link) => (
              // 💅 Added hover effect and smaller text for list items
              <a 
                key={link} 
                href="#" 
                className="block text-sm text-gray-400 hover:text-teal-500 transition duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* === Right Section: Contact === */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[300px]">
          <h2 className="mb-4 text-xl font-bold text-white uppercase tracking-wider">
            Contact Us
          </h2>
          <div className="contact flex flex-col space-y-3">
            {/* 📍 Use list items or consistent paragraphs for clean structure */}
            <p className="text-sm font-medium text-gray-400">
              A.A Ethiopia, 622 Path Plaza 
            </p>
            <p className="text-sm font-medium text-gray-400">
              +25 15 345 12 345
            </p>
            <p className="text-sm font-medium text-gray-400 hover:text-teal-500 transition duration-300">
              mikyasnegash2@gmail.com
            </p>
          </div>
        </div>
      </div>
      
      {/* === Bottom Copyright Bar === */}
      <div className="max-w-7xl mx-auto pt-6">
        <div className="lg:flex justify-between items-center text-sm">
          {/* 📝 Stronger Copyright Text */}
          <p className="text-center lg:text-left text-gray-500 mb-4 lg:mb-0">
            &copy; {new Date().getFullYear()} **MIKE** - All Rights Reserved.
          </p>
          
          {/* 📜 Legal Links with proper spacing and divider */}
          <ul className="flex flex-wrap justify-center space-x-4 text-gray-500">
            {['Terms and Conditions', 'Privacy Policy', 'Disclaimer'].map((link) => (
              <li 
                key={link} 
                className="cursor-pointer hover:text-teal-500 transition duration-300"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;