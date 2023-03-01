import axios from "axios";
import cookie from "cookie";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  console.log("req in api/auth/logout next app", req.body);
  try {
    let response = await axios.post(
      `http://localhost:4000/user/logout`,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(
      "response in logout next app and sending response.data",
      response.data
    );
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        expires: new Date(0),
        sameSite: "strict",
        path: "/",
      })
    );
    res.send(response.data);
  } catch (error) {
    console.log("error in logout next api  post route  ", error.message);
    res.status(404).send({ message: error.message, isError: true });
  }
}
