import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    // ADD Todo
    case 'ADD_TODO':
      const newState = {
        ...state,
        todos: [...state.todos, action.payload]
      };
      // Log action and new state for debugging
      console.log('Updated State:', newState);
      return newState;

    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.index ? { ...todo, ...action.payload } : todo
        )
      };
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
