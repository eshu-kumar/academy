import axios from "axios";
export async function createCourseService(formData) {
  const token = await localStorage.getItem("token");
  try {
    let response = await axios.post(
      `http://localhost:4000/course/create-course`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
    return { isError: true, error: error.message };
  }
}
export async function getCourseListService() {
  const token = await localStorage.getItem("token");
  try {
    let response = await axios.post(
      `http://localhost:4000/course/get-courses-list`,
      {
        body: {},
      },
      {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
    return { isError: true, error: error.message };
  }
}
