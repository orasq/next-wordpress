import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function PostCard(props) {
  const fullDate = new Date(props.post.date);
  const attributeDate = `${fullDate.getFullYear()}-${
    fullDate.getMonth() + 1
  }-${fullDate.getDate()}`;
  const displayedDate = `${fullDate.getDate()}/${
    fullDate.getMonth() + 1
  }/${fullDate.getFullYear()}`;

  return (
    <li className="post-card">
      <Link href={`/blog/${props.post.slug}`}>
        <a>
          <motion.div className="post-card__image-wrap" layoutId={props.idLayout}>
            <Image
              className="post-card__image"
              src={props.post.featuredImage.node.sourceUrl}
              layout="fill"
              objectFit="cover"
              alt={props.post.featuredImage.node.altText}
            />
          </motion.div>
          <div className="post-card__text">
            <h3>{props.post.title}</h3>
            <span>
              Posted on <time dateTime={attributeDate}>{displayedDate}</time>
            </span>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostCard;
