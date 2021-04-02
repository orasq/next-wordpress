import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function PostCard(props) {
  return (
    <li className="post-card">
      <Link href={`/blog/${props.idLayout}`}>
        <a>
          <motion.div className="post-card__image-wrap" layoutId={props.idLayout}>
            <Image
              className="post-card__image"
              src="/images/news-1.jpeg"
              layout="fill"
              objectFit="cover"
              alt="..."
            />
          </motion.div>
          <div className="post-card__text">
            <h3>Lorem ipsum Dolor sit met</h3>
            <span>
              Posted on <time dateTime="2021-12-09">9th of December 2021</time>
            </span>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostCard;
