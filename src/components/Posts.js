import React, { useContext } from "react";
import { PostContext } from "../context/PostContext.js";
import SinglePost from "./SinglePost";
import striptags from "striptags";
const Posts = () => {
  const { postsData, setPostsData, totalPost } = useContext(PostContext);
  return (
    <div className="posts-line">
      <div>Total posts: {totalPost}</div>
      {postsData.map((post) => {
        const { type, date, description, slug, conversation } = post;
        const content = [
          striptags(post["quote-text"]),
          striptags(post["link-text"]),
        ];
        const regular = striptags(post["regular-body"]);
        const audio = striptags(post["audio-caption"]);
        const photo = [post["photo-url-400"]];
        const photoCaption = [striptags(post["photo-caption"])];
        const quoteSource = [striptags(post["quote-source"])];
        const linkDescription = striptags(post["link-description"]);
        return (
          <SinglePost
            post={{
              type,
              date,
              description,
              content,
              slug,
              quoteSource,
              photo,
              photoCaption,
              linkDescription,
              conversation,
              regular,
              audio,
            }}
          />
        );
      })}
    </div>
  );
};

export default Posts;
