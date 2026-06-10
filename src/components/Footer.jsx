import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-[#1C032F] to-[#0032AB] text-white py-12"
    >
      <div className="w-[90%] lg:w-[85%] 2xl:w-[70%] mx-auto px-4 md:px-10 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Column 1 — Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <a href="#home">
                <img
                  src="https://iamscientist.ai/_next/static/media/logo.d2f1c6f3.png"
                  alt="AI Scientist logo"
                  className="cursor-pointer w-[150px] h-auto"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = 'https://placeholder.co/150x60/FFFFFF/1C032F?text=iamscientist.ai'
                  }}
                />
              </a>
            </div>
            <p className="text-white mt-2 lg:pr-3 w-full md:w-[90%] text-justify font-normal text-base md:text-lg leading-6">
              We offer exciting contests, top courses and hands-on challenges. It's a place where students can learn, compete and grow together.
            </p>
          </div>

          {/* Right side — 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:-ml-24">
            {/* General */}
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4">General</h3>
              <ul className="space-y-2 font-normal text-sm md:text-base">
                <li><a href="#courses" className="hover:text-blue-300 transition-colors">Courses</a></li>
                <li><a href="#contests" className="hover:text-blue-300 transition-colors">Competitions</a></li>
                <li className="whitespace-nowrap">
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    Careers <span className="bg-[rgba(18,123,190,1)] p-1 rounded-md text-xs">(UPCOMING)</span>
                  </a>
                </li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Affiliate Program</a></li>
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4">Important Links</h3>
              <ul className="space-y-2 font-normal text-sm md:text-base">
                <li><a href="#" className="hover:text-blue-300 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Free Tools</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Verify Certificate</a></li>
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4">Contacts</h3>
              <ul className="space-y-2 font-normal text-sm md:text-base">
                <li>167-169 Great Portland Street, 5th Floor, London, England, W1W 5PF</li>
                <li>+923310001900</li>
                <li>
                  <a href="mailto:info@iamscientist.ai" className="text-[#ff40cc] hover:underline">
                    info@iamscientist.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-8 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-normal text-sm md:text-base mb-4 md:mb-0">
              Copyright © 2026, I am Scientist
            </p>
            <div className="flex space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=61567286317086"
                className="hover:cursor-pointer transform transition-transform duration-500 hover:text-gray-100 hover:scale-110"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/i-m-scientist"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer transition-transform ease-in-out duration-500 hover:scale-105"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/i_am__scientist/"
                className="hover:cursor-pointer transition-transform ease-in-out duration-500 hover:scale-105"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
