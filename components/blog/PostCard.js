import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function PostCard(props) {
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
              alt="..."
            />
          </motion.div>
          <div className="post-card__text">
            <h3>{props.post.title}</h3>
            <span>
              Posted on <time dateTime="2021-12-09">{props.post.date}</time>
            </span>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostCard;
