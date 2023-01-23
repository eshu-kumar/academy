import axios from "axios";
import getCookieToken from "../utils/getCookieToken";
export async function authenticateService() {
  const token = await localStorage.getItem("token");
  console.log("in the auth user function ");
  try {
    let response = await axios.post(
      `/api/auth/authenticate`,
      { token: token },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(
      "error message in authenticateService function of authservice",
      error.message
    );
    console.log("error in authenticateService function of authservice", error);
    return { isError: true, message: error.message };
  }
}
export async function authenticateServerService(req) {
  const token = await getCookieToken(req);
  console.log("token in authenticateserver service", token);
  try {
    let response = await axios.post(
      `http://localhost:3000/api/auth/authenticate`,
      { token: token },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(
      "error message in authenticateService function of authservice",
      error.message
    );
    console.log("error in authenticateService function of authservice", error);
    return { isError: true, message: error.message };
  }
}
export async function loginService(email, password) {
  console.log("in the login service", email, password);
  try {
    let response = await axios.post(
      `/api/auth/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await localStorage.setItem("token", response.data.token, {
      sameSite: "strict",
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
    return { isError: true, error: error.message };
  }
}
export async function signupService(email, password) {
  try {
    let response = await axios.post(
      `/api/auth/signup`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await localStorage.setItem("token", response.data.token, {
      sameSite: "strict",
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
    return { isError: true, error: error.message };
  }
}
export async function logoutService() {
  const token = await localStorage.getItem("token");
  console.log("in the logout user function ");
  try {
    let response = await axios.post(
      `/api/auth/logout`,
      { token: token },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await localStorage.removeItem("token");
    return response.data;
  } catch (error) {
    console.log(
      "error message in logoutService function of authservice",
      error
    );
    console.log("error in logoutService function of authservice", error);
    return { isError: true, error: error.message };
  }
}
