
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'About', url: '/about' },
  { id: 3, name: 'Contact', url: '/contact' },
  { id: 4, name: 'Gallery', url: '/gallery' },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-slate-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src="im.jpg" alt="" />
          </div>
          <div className="hidden sm:block">
            <div className="ml-10 flex space-x-4">
              {links.map((link) => (
                <Link
                  key={link.id}
                  to={link.url}
                  className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
