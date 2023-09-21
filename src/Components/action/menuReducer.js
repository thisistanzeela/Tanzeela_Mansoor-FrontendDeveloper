// Define the initial state for the menu reducer
const initialState = {
  // Initialize the menu as closed and the overlay as invisible
  isMenuOpen: false,
  isOverlayVisible: false,
};

// Define the menu reducer function, which takes the current state and an action
const menuReducer = (state = initialState, action) => {
  // Use a switch statement to handle different action types
  switch (action.type) {
    // If the action type is 'TOGGLE_MENU', toggle the menu and overlay visibility
    case 'TOGGLE_MENU':
      return {
        ...state,
        // Toggle the state of isMenuOpen and isOverlayVisible
        isMenuOpen: !state.isMenuOpen,
        isOverlayVisible: !state.isOverlayVisible,
      };
    // If the action type is not recognized, return the current state
    default:
      return state;
  }
};

// Export the menu reducer function
export default menuReducer;
