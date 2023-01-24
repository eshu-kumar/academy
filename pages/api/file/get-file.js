import axios from "axios";
import cookie from "cookie";
import { authenticateServerService } from "../../../services/authService";
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return;
  }

  try {
    const user = await authenticateServerService(req);
    console.log("user in get-file api ", user);
    if (user.isError) {
      // Redirect to a "not found" page
      console.error("error in get-file", user.message);
      res.status(500).send(user.message);
      //return;
    } else {
      //CAN ADD ADITIONAL SECURITY BY ENCRYPTING THE COURSE FILE NAMES AND USER NAMES AND KEY WILL REMAIN
      //TO THE NEXT SERVER AND MYSERVER ONCE SENDING COURSE LIST ENCRYPT ALL THE FILE NAMES WITH THE KEY
      //AND ONCE FETCHING FILES DECRYPT THEM IN NEXT SERVER WITH SAME ID USED IN MYSERVER
      //AND SEND ORIGINAL FILE NAME AND USERNAME FROM THE NEXT SERVER
      console.log("query params ", req.query);
      const { file, userEmail } = req.query;
      const { data, headers } = await axios({
        method: "get",
        url: `http://localhost:4000/lecture/get-lecture?file=${file}&&userEmail=${userEmail}`,
        responseType: "stream",
      });
      // set the headers from the response
      Object.entries(headers).forEach(([key, value]) => {
        if (key !== undefined) {
          res.setHeader(key.toLowerCase(), value);
        }
      });
      // pipe the video data to the response
      data.pipe(res);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}
//this is used when you have to receive the data more then 4 mb but now it is not needed because you are using streams for
// export const config = {
//   api: {
//     responseLimit: false,
//   },
// };
