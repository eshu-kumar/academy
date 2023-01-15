import axios from "axios";
export async function authUser() {
  const token = await localStorage.getItem("token");
  console.log("in the auth user function ");
  try {
    let response = await fetch(`http://localhost:4000/user/user-profile`, {
      method: "POST",
      body: JSON.stringify({ token: token }),
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    });
    response = await response.json();
    // console.log("data", response.json());
    return {
      isError: response.isError ? true : false,
      data: response ? response : null,
      error: response.isError ? response.message : null,
    };
  } catch (error) {
    console.log("error", error);
    return { isError: true, data: null, error: error };
  }
}
export async function loginService(email, password) {
  console.log("in the login service", email, password);
  try {
    let response = await axios.post(
      `http://localhost:4000/user/login`,
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
      `http://localhost:4000/user/signup`,
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
