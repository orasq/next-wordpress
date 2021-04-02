import Link from "next/link";
import Image from "next/image";

function PostCard() {
  return (
    <li className="post-card">
      <Link href="/">
        <a>
          <div className="post-card__image-wrap">
            <Image
              className="post-card__image"
              src="/images/news-1.jpeg"
              layout="fill"
              objectFit="cover"
              alt="..."
            />
          </div>
          <div className="post-card__text">
            <h3>Lorem ipsum Dolor sit met</h3>
            <span>
              Posted on <time datetime="2021-12-09">9th of December 2021</time>
            </span>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostCard;
