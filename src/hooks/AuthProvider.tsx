import { useRouter } from "next/router";

import { createContext, useContext, useEffect, useState } from "react";

interface User{
  email: string;
  userType: string;
  token: string;
  name: string;
}

interface AuthContextValue {
  user: any;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    }, []);

  const login = async (username: string, password: string) => {
    try {
      const res = await fetch('https://api.easysports.click/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: username, password: password })
      });

      if (!res.ok) {
        throw new Error('Failed to login');
      }

      const data = await res.json();
      const { token, email, userType, name } = data;

      const user = {
        email: email,
        userType: userType,
        token: token,
        name: name
      }

      setUser(user)
      setIsAuthenticated(true)

      localStorage.setItem('token', token);

      if(user.userType == "Admin"){
        router.push('/parceiros')
      }else{
        router.push('/clientes')
      }


    } catch (error) {
      router.push("/");
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null)
    setIsAuthenticated(false);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
