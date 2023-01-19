import axios from "axios";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  console.log("req in api/auth/login next app", req.body);
  try {
    let response = await axios.post(
      `http://localhost:4000/user/login`,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // return response.data;
    console.log(
      "response in next app and sending response.data",
      response.data
    );
    res.send(response.data);
  } catch (error) {
    console.log("error in login next api  post route  ", error.message);
    res.status(404).send({ message: error.message, isError: true });
  }
}
