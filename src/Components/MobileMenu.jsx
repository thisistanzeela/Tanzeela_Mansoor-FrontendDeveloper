import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileMenu() {
  // Define a state variable 'isOpen' and a function 'setIsOpen' to toggle the menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the 'isOpen' state
  };

  return (
    <>
      {/* Mobile menu toggle button */}
      <button id="menu-btn" className={`hamburger ${isOpen ? 'open' : ''}`} type="button" onClick={toggleMenu}>
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      {/* Mobile menu content (displayed when 'isOpen' is true) */}
      {isOpen && (
        <div id="mobile-menu" className="mobile-main-menu show-menu">
          <ul>
            <li><Link to="/work-in-progress">Mission</Link></li>
            <li><Link to="/work-in-progress">Launches</Link></li>
            <li><Link to="/work-in-progress">Careers</Link></li>
            <li><Link to="/work-in-progress">Updates</Link></li>
            
            {/* Mobile-only menu items */}
            <li className="mobile-only"><Link to="/work-in-progress">Falcon 9</Link></li>
            <li className="mobile-only">
              <Link to="/work-in-progress">Falcon Heavy</Link>
            </li>
            <li className="mobile-only"><Link to="/work-in-progress">Dragon</Link></li>
            <li className="mobile-only"><Link to="/work-in-progress">Starship</Link></li>
            <li className="mobile-only"><Link to="/work-in-progress">Human Spaceflight</Link></li>
            <li className="mobile-only"><Link to="/work-in-progress">Rideshare</Link></li>
            <li className="mobile-only"><Link to="/work-in-progress">Starlink</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileMenu;
