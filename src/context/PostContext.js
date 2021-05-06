import React, { createContext, useEffect, useState } from "react";

import BlogData from "../data/data.json";
export const PostContext = createContext();
export const PostProvider = (props) => {
  const [postsData, setPostsData] = useState([]);
  const [totalPost, setTotalPost] = useState("");
  const fetchData = () => {
    setTotalPost(BlogData["posts-total"]);
    setPostsData(JSON.stringify(BlogData.posts));
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <PostContext.Provider value={{ postsData, setPostsData, totalPost }}>
      {props.children}
    </PostContext.Provider>
  );
};
