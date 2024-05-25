import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const newState = {
        ...state,
        todos: [...state.todos, action.payload]
      };
      // Log action and new state for debugging
      console.log('Updated State:', newState);
      return newState;
    default:
      return state;
  }
}

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);