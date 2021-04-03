import PostCard from "./PostCard";

function PostCardList(props) {
  return (
    <ul className="post-card-list">
      {props.posts.map(post => {
        return <PostCard key={post.id} post={post} idLayout={`post-${post.id}`} />;
      })}
    </ul>
  );
}

export default PostCardList;
