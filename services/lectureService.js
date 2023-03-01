import axios from "axios";
export async function createLectureService(formData) {
  const token = await localStorage.getItem("token");
  try {
    let response = await axios.post(
      `http://localhost:4000/lecture/create-lecture`,
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
export async function getLectureListService() {
  //MAKE SURE YOU DO NOT SEND ORGINAL FILE NAMES HERE
  const token = await localStorage.getItem("token");
  try {
    let response = await axios.post(
      `http://localhost:4000/lecture/get-lectures-list`,
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
export async function getLectureInfoService(_id) {
  const token = await localStorage.getItem("token");
  try {
    let response = await axios.post(
      `http://localhost:4000/lecture/get-lecture-info`,
      {
        _id,
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
