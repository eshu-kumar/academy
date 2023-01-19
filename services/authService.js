import axios from "axios";
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
    return response.data;
  } catch (error) {
    console.log("error", error);
    return { isError: true, error: error.message };
  }
}
