const authUser = async () => {
  const token = await localStorage.getItem("token");
  console.log("in the auth user function ");
  try {
    let response = await fetch(`http://localhost:4000/user/user-profile`, {
      method: "POST",
      body: JSON.stringify({ token: token }),
      headers: {
        "Content-Type": "application/json",
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
};
module.exports = { authUser };
