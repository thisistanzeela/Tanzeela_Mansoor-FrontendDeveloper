// Define the initial state for the counter reducer
const initialState = {
  scrollStarted: false,
};

// Define the counter reducer function, which takes the current state and an action
const counterReducer = (state = initialState, action) => {
  // Use a switch statement to handle different action types
  switch (action.type) {
    // If the action type is 'START_SCROLL', update the state to indicate that scrolling has started
    case 'START_SCROLL':
      return {
        ...state,
        scrollStarted: true,
      };
    // If the action type is 'STOP_SCROLL', update the state to indicate that scrolling has stopped
    case 'STOP_SCROLL':
      return {
        ...state,
        scrollStarted: false,
      };
    // If the action type is not recognized, return the current state
    default:
      return state;
  }
};

// Export the counter reducer function
export default counterReducer;
