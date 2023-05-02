import { Accessor, Setter, createContext, createSignal, useContext } from 'solid-js';

interface AuthContextProps {
  isLoggedIn: Accessor<boolean>;
  setIsLoggedIn: Setter<boolean>;
  checkLoginStatus: () => void;
  handleLogout: () => void;
  handleLogin: (token:string) => void;
} 

const AuthContext = createContext<AuthContextProps>();

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = createSignal(false);
    
  const checkLoginStatus = () => {
    const isLoggedIn = !!window.sessionStorage.getItem('token');
    setIsLoggedIn(isLoggedIn);
  };
  const handleLogout = () => {
    window.sessionStorage.removeItem('token');
    setIsLoggedIn(false);
  };
  const handleLogin = (token:string) =>  {
    window.sessionStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, checkLoginStatus,  handleLogout, handleLogin}}>
      {props.children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const useAuth = () => useContext(AuthContext)!;