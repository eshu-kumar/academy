import axios from "axios";
import checkIsServer from "../utils/checkIsServer";
import getCookieToken from "../utils/getCookieToken";
export async function createCommentService(commentObj) {
  const token = await localStorage.getItem("token");
  let variables = { commentObj };
  const createCommentMutation = `
  mutation CreateComment($commentObj: CommentInput!) {
    createComment(comment: $commentObj) {
      id
      commentor
      comment
    }
  }
`;
  try {
    const response = await axios.post(
      "http://localhost:4000/graphql",
      {
        query: createCommentMutation,
        variables,
      },
      {
        headers: {
          token,
        },
      }
    );
    //console.log(response);
    const comment = response.data.data.createComment;
    if (!comment) {
      throw new Error("Comment could not be added ");
    }
    if (response.isError) {
      throw new Error(response.error);
    }
    return {
      isError: false,
      message: "Comment added successfully",
      comment,
    };
  } catch (err) {
    console.error("error in createCommentService", err);
    return { isError: true, error: err.message };
  }
}
export async function getCommentListService(req) {
  //USE IT AT SERVERSIDEPROPS ONLY IF NEED TO USE IN CLIENT SIDE THEN GIVE CONDITIONS FOR AVAILABLITY OF
  //LOCALSTORAGE AND GET TOKEN FROM THAT
  const token = await getCookieToken(req);
  const commentQuery = ` query {
  comments {
      id
      commentor
      comment
  }
}`;
  try {
    const response = await axios.post(
      "http://localhost:4000/graphql",
      {
        query: commentQuery,
      },
      {
        headers: {
          token,
        },
      }
    );
    //console.log(response);
    const comments = response.data.data.comments;
    if (!comments) {
      throw new Error("Comments could not be fetched ");
    }
    if (response.isError) {
      throw new Error(response.error);
    }
    return {
      isError: false,
      message: "Comments fetched successfully",
      comments,
    };
  } catch (err) {
    console.error("error in getCommentListService", err);
    return { isError: true, error: err.message };
  }
}
