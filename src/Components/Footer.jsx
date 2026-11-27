import { TbHomeCheck } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Listings", href: "#listings" },
  { label: "Neighborhood", href: "#neighborhood" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
    bgClass: "bg-blue-600 hover:bg-blue-700",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: FaTwitter,
    bgClass: "bg-cyan-500 hover:bg-cyan-600",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
    bgClass: "bg-pink-600 hover:bg-pink-700",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
    bgClass: "bg-red-600 hover:bg-red-700",
  },
];

const LEGAL_LINKS = [
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 px-6 py-12 text-gray-300"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-10 border-b border-gray-800 pb-10">
        {/* Brand & Socials */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[300px]">
          <a
            href="#home"
            className="inline-flex items-center text-3xl font-extrabold text-white focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a]"
          >
            <TbHomeCheck
              aria-hidden="true"
              size={40}
              className="rounded-lg bg-[#0ca39a] p-2 text-gray-950"
            />
            <span className="ml-2 tracking-wider">MIKE</span>
          </a>

          <p className="my-5 text-sm leading-relaxed text-gray-400">
            We help buyers, sellers, and investors find opportunity in every
            market move with honest advice, local insight, and a smooth path to
            closing.
          </p>

          <ul className="mt-6 flex items-center gap-3" aria-label="Social media links">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 motion-reduce:transition-none ${social.bgClass}`}
                  >
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Useful Links */}
        <div className="w-1/2 sm:w-1/4 md:w-1/6">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Useful Links
          </h2>
          <nav aria-label="Footer navigation">
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-block rounded text-sm text-gray-400 transition duration-300 hover:text-[#0ca39a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] motion-reduce:transition-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[300px]">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Contact Us
          </h2>
          <address className="flex flex-col space-y-3 not-italic text-sm font-medium text-gray-400">
            <span>Addis Ababa, Ethiopia</span>
            <a
              href="tel:+2511534512345"
              className="w-fit rounded transition duration-300 hover:text-[#0ca39a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] motion-reduce:transition-none"
            >
              +251 15 345 12 345
            </a>
            <a
              href="mailto:mikyasnegash2@gmail.com"
              className="w-fit rounded transition duration-300 hover:text-[#0ca39a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] motion-reduce:transition-none"
            >
              mikyasnegash2@gmail.com
            </a>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl pt-6">
        <div className="flex flex-col items-center justify-between gap-4 text-sm lg:flex-row">
          <p className="text-center text-gray-400 lg:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <strong className="font-semibold text-gray-200">MIKE</strong> — All
            Rights Reserved.
          </p>

          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-gray-400">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded transition duration-300 hover:text-[#0ca39a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] motion-reduce:transition-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;