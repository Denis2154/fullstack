import React, { createContext, useReducer, useContext, useEffect } from "react";

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
  error: null,
};

const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SET_ERROR: 'SET_ERROR',
};

const authReducer = (state, action) => {

  console.log('Action dispatched:', action);

  console.log('Current state:', state);
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
        error: null,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        error: null,
      };
    
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };  

    default:
      return state;
  }
};

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if(token && user) {
         dispatch({
         type: actionTypes.LOGIN,
         payload: { token,
          user: JSON.parse(user)
         },
      });
    } 
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password}),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await response.json();

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      dispatch({
        type: actionTypes.LOGIN,
        payload: {token: data.token, user: data.user},
      });
    } catch (error) {
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: {error: error.message},
      });
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({
      type: actionTypes.LOGOUT
    });
  };
      

  return (
    <AuthContext.Provider 
    value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);


export { useAuth, AuthProvider, actionTypes };