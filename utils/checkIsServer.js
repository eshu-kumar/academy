const fetch = require("isomorphic-fetch");
export default function checkIsServer() {
  let isServer;
  fetch("/")
    .then((res) => {
      if (res.status === 200) {
        isServer = false;
      } else {
        isServer = true;
      }
    })
    .catch(() => {
      isServer = true;
    });

  if (isServer) {
    console.log("The code is running on the server side");
  } else {
    console.log("The code is running on the client side");
  }
  return isServer;
}
