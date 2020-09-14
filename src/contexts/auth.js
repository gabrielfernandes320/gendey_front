import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import { authApi } from "../api/api";
import { getUser, signIn as sendSignInRequest, logout } from "../api/auth";

function AuthProvider(props) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    (async function () {
      const result = await getUser();
      if (result.isOk) {
        setUser(result.data);
      }

      setLoading(false);
    })();
  }, []);

  async function validateToken(token) {
    await authApi
      .get("auth/validatetoken", {
        params: {
          token: token,
        },
      })
      .then((response) => {
        setValid(response.data.isValid);
      });
  }

  const signIn = useCallback(async (email, password) => {
    const result = await sendSignInRequest(email, password);
    if (result.isOk) {
      
      setUser(result.data);
    }

    return result;
  }, []);

  const signOut = useCallback(() => {
    logout();
    setUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, loading, setValid, valid, validateToken }}
      {...props}
    />
  );
}

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
