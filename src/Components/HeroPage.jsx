import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import SectionOne from "./section/SectionOne";
import SectionTwo from "./section/Main/Main";
import SectionThree from "./section/SectionThree";
import MyProvider from '../Components/Context/MyContext';
import { Link } from 'react-router-dom'; // Import Link

function HeroPage(props) {
  // Destructure props to access specific properties
  const { isMenuOpen, scrollStarted, dispatch } = props;

  // Function to handle scrolling and dispatch relevant actions
  const scrollPage = () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 100 && !scrollStarted) {
      dispatch({ type: "START_SCROLL" });
      // Dispatch other related actions if needed
    } else if (scrollPos < 100 && scrollStarted) {
      dispatch({ type: "STOP_SCROLL" });
      // Dispatch other related actions if needed
    }
  };

  return (
    <>
      {isMenuOpen && <div id="overlay"></div>} {/* Render an overlay if the menu is open */}
      <Header /> {/* Render the Header component */}
      <MobileMenu /> {/* Render the MobileMenu component */}
      <SectionOne /> {/* Render SectionOne */}
      <MyProvider>
        <SectionTwo /> {/* Render SectionTwo wrapped in MyProvider context */}
      </MyProvider>
      <SectionThree /> {/* Render SectionThree */}
      <footer>
        <ul>
          <li>SpaceX &copy; 2022</li> {/* Display copyright information */}
          <li>
            <a href="#">Privacy</a> {/* Display a link to the Privacy page */}
          </li>
          <li>
            <a href="#">Suppliers</a> {/* Display a link to the Suppliers page */}
          </li>
        </ul>
      </footer>
      {/* Link to open WorkInProgress in a new tab */}
      <Link to="/work-in-progress" target="_blank">
    
      </Link>
    </>
  );
}

// Map Redux state to component props
const mapStateToProps = (state) => ({
  isMenuOpen: state.menu.isMenuOpen,
  scrollStarted: state.counters.scrollStarted,
});

// Connect the component to Redux and export it
export default connect(mapStateToProps)(HeroPage);
