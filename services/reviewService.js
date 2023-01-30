import axios from "axios";
import checkIsServer from "../utils/checkIsServer";
import getCookieToken from "../utils/getCookieToken";
export async function createReviewService(reviewObj) {
  const token = await localStorage.getItem("token");
  let variables = { reviewObj };
  const createReviewMutation = `
  mutation CreateReview($reviewObj: ReviewInput!) {
    createReview(review: $reviewObj) {
      id
      reviewer
      review
    }
  }
`;

  try {
    const response = await axios.post(
      "http://localhost:4000/graphql",
      {
        query: createReviewMutation,
        variables,
      },
      {
        headers: {
          token,
        },
      }
    );
    // console.log(response);
    const review = response.data.data.createReview;
    if (!review) {
      throw new Error("Review could not be added ");
    }
    if (response.isError) {
      throw new Error(response.error);
    }
    return {
      isError: false,
      message: "Review added successfully",
      review,
    };
  } catch (err) {
    console.error("error in createReviewService", err);
    return { isError: true, error: err.message };
  }
}
export async function getReviewListService(req) {
  //USE IT AT SERVERSIDEPROPS ONLY IF NEED TO USE IN CLIENT SIDE THEN GIVE CONDITIONS FOR AVAILABLITY OF
  //LOCALSTORAGE AND GET TOKEN FROM THAT
  const token = await getCookieToken(req);
  const reviewQuery = ` query {
  reviews {
      id
      reviewer
      review
  }
}`;
  try {
    const response = await axios.post(
      "http://localhost:4000/graphql",
      {
        query: reviewQuery,
      },
      {
        headers: {
          token,
        },
      }
    );
    // console.log(response);
    const reviews = response.data.data.reviews;
    if (!reviews) {
      throw new Error("Reviews could not be fetched ");
    }
    if (response.isError) {
      throw new Error(response.error);
    }
    return {
      isError: false,
      message: "Reviews fetched successfully",
      reviews,
    };
  } catch (err) {
    //console.error("error in getReviewListService", err);
    return { isError: true, error: err.message };
  }
}
