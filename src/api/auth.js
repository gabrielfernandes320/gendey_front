import defaultUser from "../utils/default-user";
import { authApi } from "./api";
const TOKEN_KEY = "@gendey/authToken";
const REFRESH_TOKEN_KEY = "@gendey/refreshtokencode";

export async function signIn(email, password) {
  const authInfo = await authApi
    .post("auth/login", {
      Email: email,
      Password: password,
    })
    .then((response) => {
      login(response.data);
      return {
        isOk: true,
        data: defaultUser,
      };
    })
    .catch((error) => {
      logout();
      return {
        isOk: false,
        message: "Erro ao efetuar login",
      };
    });
  console.log(authInfo);
  return authInfo;
}

export async function getUser() {
  try {
    // Send request

    return {
      isOk: true,
      data: defaultUser,
    };
  } catch {
    return {
      isOk: false,
    };
  }
}

export async function createAccount(data) {
  const authInfo = await authApi
    .post("users", data)
    .then((response) => {
      console.log(response);
      return {
        isOk: true,
      };
    })
    .catch((error) => {
      logout();
      return {
        isOk: false,
        message: "Error on account creating",
      };
    });
  console.log(authInfo);
  return authInfo;
}

export async function changePassword(email, recoveryCode) {
  try {
    // Send request
    console.log(email, recoveryCode);

    return {
      isOk: true,
    };
  } catch {
    return {
      isOk: false,
      message: "Failed to change password",
    };
  }
}

export async function resetPassword(email) {
  try {
    // Send request
    console.log(email);

    return {
      isOk: true,
    };
  } catch {
    return {
      isOk: false,
      message: "Failed to reset password",
    };
  }
}

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getRefreshTokenCode = () =>
  localStorage.getItem(REFRESH_TOKEN_KEY);
export const login = (data) => {
  localStorage.setItem(TOKEN_KEY, data.token);
  localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshTokenCode);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};
