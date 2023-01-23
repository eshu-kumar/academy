import cookie from "cookie";
export default async function getCookieToken(req) {
  const cookies = await cookie.parse(req.headers.cookie || "");
  // Get the visitor name set in the cookie
  return cookies.token;
}
