// Import necessary functions from Redux library
import { createStore, combineReducers } from 'redux';

// Import the menuReducer and counterReducer from their respective files
import menuReducer from '../action/menuReducer';
import counterReducer from '../action/counterReducer';

// Combine multiple reducers into a single rootReducer
const rootReducer = combineReducers({
  // Assign the menuReducer to the 'menu' key in the store's state
  menu: menuReducer,

  // Assign the counterReducer to the 'counters' key in the store's state
  counters: counterReducer,
});

// Create the Redux store by passing the rootReducer to createStore
const store = createStore(rootReducer);

// Export the created store to be used in the application
export default store;
