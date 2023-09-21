import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router, Route, and Routes
import store from "./Components/redux/store";
import MyProvider from './Components/Context/MyContext';
import HeroPage from "./Components/HeroPage";
import WorkInProgress from "./Components/section/WorkInProgress"; // Import the WorkInProgress component

function App() {
  return (
    // Provide the Redux store at the top level of the application
    <Provider store={store}>
      <MyProvider>
        {/* Wrap the entire application with the Router component */}
        <Router>
          <div class Name="App">
            {/* Define the routes using the Routes component */}
            <Routes>
              {/* Define a route for the home page */}
              <Route path="/" element={<HeroPage />} />

              {/* Define a route for the WorkInProgress component */}
              <Route path="/work-in-progress" element={<WorkInProgress />} />
            </Routes>
          </div>
        </Router>
      </MyProvider>
    </Provider>
  );
}

export default App;
