import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { IUser } from "../types/user";
import { toast } from "react-toastify";

// Define the AuthContext type
type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  login: (email: string, role: string) => void;
  logout: () => void;
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
};

// Provide default values for the AuthContext
const defaultValues: AuthContextType = {
  user: undefined,
  setUser: () => undefined,
  isLoggedIn: false,
  setIsLoggedIn: () => undefined,
  login: () => undefined,
  logout: () => undefined,
};

// Create the AuthContext
export const AuthContext = createContext<AuthContextType>(defaultValues);

// Create a custom hook to use the AuthContext
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};

// AuthContextProvider component
export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<IUser | undefined>(undefined);

  const login = (name: string, role: string) => {
    if (name && role) {
      setUser({ name, role });
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(undefined);
    toast.success("Logged out successfully");
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLoggedIn, setIsLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
