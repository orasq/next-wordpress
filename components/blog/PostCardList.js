import PostCard from "./PostCard";

function PostCardList() {
  return (
    <ul className="post-card-list">
      <PostCard idLayout="post-1" />
      <PostCard idLayout="post-2" />
      <PostCard idLayout="post-3" />
      <PostCard idLayout="post-4" />
    </ul>
  );
}

export default PostCardList;
