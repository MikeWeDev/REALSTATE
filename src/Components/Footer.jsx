import { TbHomeCheck } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Listings", href: "#listings" },
  { label: "Neighborhood", href: "#neighborhood" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10 border-b border-gray-700 pb-10">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[300px]">
          <h1 className="text-3xl font-extrabold text-white mb-4">
            <span className="flex items-center">
              <TbHomeCheck
                size={40}
                className="bg-[#0ca39a] text-gray-900 p-2 rounded-lg"
              />
              <span className="text-3xl ml-2 tracking-wider">MIKE</span>
            </span>
          </h1>
          <p className="text-sm leading-relaxed my-5 text-gray-400">
            We help buyers, sellers, and investors find opportunity in every market move with honest advice, local insight, and a smooth path to closing.
          </p>

          <div className="flex space-x-3 mt-6" role="list">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 p-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a]">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-8 h-8 p-1.5 rounded-full bg-cyan-400 text-white hover:bg-cyan-500 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a]">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 p-1.5 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a]">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-8 h-8 p-1.5 rounded-full bg-red-600 text-white hover:bg-red-700 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a]">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="w-1/2 sm:w-1/4 md:w-1/6">
          <h2 className="mb-4 text-xl font-bold text-white uppercase tracking-wider">
            Useful Links
          </h2>
          <div className="space-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-gray-400 hover:text-[#0ca39a] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[300px]">
          <h2 className="mb-4 text-xl font-bold text-white uppercase tracking-wider">
            Contact Us
          </h2>
          <div className="flex flex-col space-y-3">
            <p className="text-sm font-medium text-gray-400">Addis Ababa, Ethiopia</p>
            <a href="tel:+2511534512345" className="text-sm font-medium text-gray-400 hover:text-[#0ca39a] transition duration-300">
              +251 15 345 12 345
            </a>
            <a href="mailto:mikyasnegash2@gmail.com" className="text-sm font-medium text-gray-400 hover:text-[#0ca39a] transition duration-300">
              mikyasnegash2@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6">
        <div className="lg:flex justify-between items-center text-sm">
          <p className="text-center lg:text-left text-gray-500 mb-4 lg:mb-0">
            &copy; {new Date().getFullYear()} <strong className="text-gray-400">MIKE</strong> - All Rights Reserved.
          </p>

          <ul className="flex flex-wrap justify-center space-x-4 text-gray-500">
            {['Terms and Conditions', 'Privacy Policy', 'Disclaimer'].map((link) => (
              <li key={link} className="hover:text-[#0ca39a] transition duration-300">
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