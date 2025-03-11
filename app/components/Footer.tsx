import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Left Section - Logo & Description */}
        <div>
          <Image src="/images/logo.png" alt="QCI Travels" width={100} height={100} />
          <p className="mt-4 text-sm">
            At QCI Travels and Tourism, our goal is to reduce booking friction and enable users to catch the latest flights without missing out on seats.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="text-gray-500 hover:text-white">
              <FaLinkedinIn size={20} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white">
              <FaTwitter size={20} />
            </Link>
          </div>
        </div>

        {/* Center Sections */}
        <div>
          <h3 className="text-white font-semibold">Company</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">About</Link></li>
            <li><Link href="#" className="hover:text-white">Career</Link></li>
            <li><Link href="#" className="hover:text-white">Blog</Link></li>
            <li><Link href="#" className="hover:text-white">Special Offers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold">Help</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">FAQ</Link></li>
            <li><Link href="#" className="hover:text-white">Help Center</Link></li>
            <li><Link href="#" className="hover:text-white">Insurance</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold">Partners</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">Become an Affiliate</Link></li>
            <li><Link href="#" className="hover:text-white">Become Agent</Link></li>
            <li><Link href="#" className="hover:text-white">Advertise</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        <ul className="flex justify-center space-x-6">
          <li><Link href="#" className="hover:text-white">Terms</Link></li>
          <li><Link href="#" className="hover:text-white">Privacy</Link></li>
          <li><Link href="#" className="hover:text-white">Cookies</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
