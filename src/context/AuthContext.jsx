import {
  useState, useEffect, useContext, createContext,
} from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const login = (user) => setUser(user);
  const logout = () => setUser(null);

  useEffect(() => {
    // storing user state
    const temp = JSON.stringify(user);
    localStorage.setItem('username', temp);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

AuthProvider.defaultProps = {
  children: null,
};

export const useAuthContext = () => useContext(AuthContext);
