import React from "react";
import "./style.css"; 
import logo from "../img/logo.png";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom

// The Header component as a functional component
const Header = () => {
  return (
    <header className="main-header bg-black"> {/*  the header element with classes */}
      <div className="logo"> {/*  logo container */}
        <a href=""> {/* link (with an empty href, consider adding a proper URL) */}
          <img src={logo} alt="SpaceX" /> {/* the logo image with alt text */}
        </a>
      </div>
      <nav className="desktop-main-menu"> {/* a navigation menu */}
        <ul className="flex"> {/* an unordered list */}
          <li className="mr-4">
            <Link to="/work-in-progress">
              Falcon 9
            </Link>
          </li>
          <li>
            <Link to="/work-in-progress">
              Falcon Heavy
            </Link>
          </li>
          <li>
            <Link to="/work-in-progress">
              Dragon
            </Link>
          </li>

          <li>
            <Link to="/work-in-progress">
             Starship
            </Link>
          </li>
          <li>
            <Link to="/work-in-progress">
              Human Spaceflight
            </Link>
          </li>
          <li>
            <Link to="/work-in-progress">
              Rideshare
            </Link>
          </li>
          <li>
            <Link to="/work-in-progress">
              Starlink
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
