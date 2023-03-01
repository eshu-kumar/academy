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
export async function getCourseListService(type, owner) {
  //MAKE SURE YOU DO NOT SEND ORGINAL FILE NAMES HERE
  let query = { type };
  if (type !== "all") {
    query["owner"] = owner;
  }
  try {
    let response = await axios.post(
      `http://localhost:4000/course/get-courses-list`,
      { query },
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
export async function getCourseInfoService(_id) {
  try {
    let response = await axios.post(
      `http://localhost:4000/course/get-course-info`,
      {
        _id,
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
