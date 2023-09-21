import { createContext, useState } from "react";

// Create a new context named "MyContext"
export const MyContext = createContext();

// Define a provider component that will wrap the application and provide context values
const MyProvider = ({ children }) => {
  // State for storing Capsule data
  const [CapsuleData, setCapsuleData] = useState([]);

  // State for storing filtered Capsule data
  const [filteredCapsules, setFilteredCapsules] = useState([]);

  // State for managing modal visibility
  const [modalshow, setmodalshow] = useState(false);

  // State for storing selected data
  const [selectedData, setselectedData] = useState([]);

  return (
    // Provide the defined states and setters as context values
    <MyContext.Provider
      value={{
        CapsuleData,
        setCapsuleData,
        filteredCapsules,
        setFilteredCapsules,
        modalshow,
        setmodalshow,
        selectedData,
        setselectedData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
