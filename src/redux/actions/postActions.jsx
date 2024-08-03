const api = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_POSTS_REQUEST" });
    try {
      const response = await fetch(api);
      //console.log("response status", response.status);
      const data = await response.json();
      if (response.status === 200) {
        // console.log("data fetched",data)
        dispatch({ type: "FETCH_POSTS_SUCCESS", payload: data });
      } else {
        //console.log("response not okay")
        throw new Error("Network response was not ok");
        //console.log(error.message);
        // add functionality for this also,
      }
    } catch (error) {
      // console.log("error while fetching", error.message);
      dispatch({ type: "FETCH_POSTS_FAILURE", payload: error.message });
    }
  };
};
