import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'AI Contests', href: '#contests' },
  { label: 'Courses', href: '#courses' },
  { label: 'Teacher', href: '#teacher' },
  { label: 'Uni Plus', href: '#uniplus' },
  { label: 'Summer Contest', href: '#summer' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-50 w-full bg-[#04236E] shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
    >
      <div className="flex justify-between gap-[14px] items-center w-full px-10 md:px-0 md:w-[90%] mx-auto py-4">
        {/* Logo */}
        <a href="#home">
          <img
            src="https://iamscientist.ai/_next/static/media/logo.d2f1c6f3.png"
            alt="IamScientist logo"
            className="cursor-pointer w-20 h-10 md:w-24 md:h-12 lg:w-28 lg:h-12 2xl:w-44 2xl:h-16"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = 'https://placeholder.co/180x48/FFFFFF/04236E?text=iamscientist.ai'
            }}
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex gap-4 2xl:gap-6 z-20 items-center font-poppins">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`text-sm xl:text-md 2xl:text-lg flex items-center gap-2 whitespace-nowrap font-inter font-semibold cursor-pointer transition-all duration-500 ${
                activeLink === link.label
                  ? '!text-[#6B58FD] font-bold'
                  : 'text-white hover:text-blue-400'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden xl:flex gap-4 z-20 items-center font-poppins">
          <a href="#partner">
            <div className="border border-gray-200 text-sm 2xl:text-lg font-semibold px-6 py-[8px] transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-lg rounded-bl-lg bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] hover:shadow-lg font-poppins leading-snug cursor-pointer">
              Partner with Us
            </div>
          </a>
          <a href="#enroll" id="enroll-btn">
            <div className="border border-gray-200 text-sm 2xl:text-lg font-semibold px-6 py-[8px] transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-lg rounded-bl-lg bg-[#c407b9] hover:shadow-lg font-poppins cursor-pointer">
              Enroll
            </div>
          </a>
          <a href="#login" id="login-btn">
            <div className="border border-gray-200 text-sm 2xl:text-lg font-semibold px-6 py-[8px] transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-lg rounded-bl-lg bg-[#c407b9] hover:shadow-lg font-poppins cursor-pointer">
              Login
            </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-white"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className="xl:hidden bg-[#04236E] border-t border-blue-900 px-6 pb-6">
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => { setActiveLink(link.label); setIsOpen(false) }}
                className={`px-4 py-3 text-base font-semibold rounded-lg transition-all ${
                  activeLink === link.label
                    ? 'text-[#6B58FD]'
                    : 'text-white hover:text-blue-400'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-blue-800 my-2" />
            <a href="#partner" onClick={() => setIsOpen(false)}
              className="text-center px-6 py-3 text-white font-semibold rounded-tr-lg rounded-bl-lg bg-gradient-to-r from-[#2E98FC] to-[#E01CF4]">
              Partner with Us
            </a>
            <a href="#enroll" onClick={() => setIsOpen(false)}
              className="text-center px-6 py-3 text-white font-semibold rounded-tr-lg rounded-bl-lg bg-[#c407b9]">
              Enroll
            </a>
            <a href="#login" onClick={() => setIsOpen(false)}
              className="text-center px-6 py-3 text-white font-semibold rounded-tr-lg rounded-bl-lg bg-[#c407b9]">
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
