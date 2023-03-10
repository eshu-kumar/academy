import axios from "axios";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  console.log("req in api/auth/signup next app", req.body);
  try {
    let response = await axios.post(
      `http://localhost:4000/user/signup`,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response in api/auth/signup next app", response.data);
    res.send(response.data);
  } catch (error) {
    console.log("error in signup next api  post route  ", error);
    res.status(404).send({ message: error.message, isError: true });
  }
}
