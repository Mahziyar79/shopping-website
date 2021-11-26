import { createContext, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("authState")) || false;
    setAuth(userData);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={auth}>
      <AuthContextDispatcher.Provider value={setAuth}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
