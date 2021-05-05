import React, { useContext, useEffect } from "react";
import { PostContext } from "../context/PostContext";
import striptags from "striptags";
const SinglePost = ({ post }) => {
  const title = post.slug.split("-").join(" ").toUpperCase();
  console.log(post.content[1]);
  return (
    <div className={post.type + " type"}>
      <div className="post-title">{title}</div>
      <div className="post-description">{post.description}</div>
      <div className="post-content">{post.content}</div>
      {post.regular && <div>{post.regular}</div>}
      <div>{post.audio && post.audio}</div>
      <a
        href={`https://en.wikipedia.org/wiki/${post.quoteSource}`}
        className="post-source"
      >
        <div className="post-source">{post.quoteSource}</div>
      </a>
      <div>{post.linkDescription}</div>
      <div>
        {post.conversation &&
          post.conversation.map((e) => {
            return (
              <div className={`conversation-table ${e.name}-table`}>
                <span className={e.name}>{e.name} : </span>{" "}
                <span>{e.phrase}</span>
              </div>
            );
          })}
      </div>
      {post.photo && (
        <div className="post-photo">
          <img src={post.photo} alt="" />{" "}
          <div className="post-caption">{post.photoCaption}</div>
        </div>
      )}
      <div className="post-date">{post.date}</div>
    </div>
  );
};

export default SinglePost;
