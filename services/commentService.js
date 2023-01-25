import axios from "axios";
export async function createCommentService(comment) {
  const token = await localStorage.getItem("token");
  let gquery = ` mutation addComment($commentObj: CommentInput) {
        createComment(comment:$commentObj) {
            comment
            commentor
          }

    }
    `;
  let variables = {
    commentObj: comment,
  };
  try {
    let response = await fetch(`http://localhost:4000/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify({
        query: gquery,
        // operationName: "addFriend",
        variables,
      }),
    });
    response = await response.json();
    console.log("response OF  graphql request ", response);
    console.log("create comment service result", response);
    return { isError: false, data: response };
  } catch (err) {
    console.error(err);
    console.log(" create comment service error", err);
    return { isError: true, error: err.message };
  }
}
