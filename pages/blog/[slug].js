import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa";

import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";

// components import
import Hero from "../../components/hero/Hero";
import ContentWrapper from "../../components/layout/ContentWrapper";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.17, 0.67, 0.14, 1]
    }
  }
};

const stagger = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1
    }
  }
};

export default function BlogPost(props) {
  const router = useRouter();

  const fullDate = new Date(props.post.date);
  const attributeDate = `${fullDate.getFullYear()}-${
    fullDate.getMonth() + 1
  }-${fullDate.getDate()}`;
  const displayedDate = `${fullDate.getDate()}/${
    fullDate.getMonth() + 1
  }/${fullDate.getFullYear()}`;
  return (
    <>
      <Head>
        <title>{props.post.title} | Blog</title>
      </Head>

      <motion.main
        key={router.pathname}
        exit={{
          opacity: 0,
          transition: {
            duration: 2
          }
        }}
      >
        <Hero
          idLayout={`post-${props.post.id}`}
          altText={props.post.featuredImage.node.altText}
          image={props.post.featuredImage.node.sourceUrl}
        >
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="hero__post-title-wrap"
          >
            <motion.h1 variants={fadeInUp} className="hero__post-title">
              {props.post.title}
            </motion.h1>
            <motion.span variants={fadeInUp}>
              Posted on <time dateTime={attributeDate}>{displayedDate}</time>
            </motion.span>
          </motion.div>
        </Hero>
        <ContentWrapper narrow>
          <div className="blog-post">
            <Link href="/">
              <a>
                <div className="back-link">
                  <FaAngleLeft />
                  Back to the homepage
                </div>
              </a>
            </Link>
            <div
              className="blog-post__content"
              dangerouslySetInnerHTML={{ __html: props.post.content }}
            />
          </div>
        </ContentWrapper>
      </motion.main>
    </>
  );
}

export async function getStaticPaths() {
  const results = await client.query({
    query: gql`
      query GetWordpressPosts {
        posts {
          nodes {
            slug
          }
        }
      }
    `
  });

  return {
    paths: results.data.posts.nodes.map(({ slug }) => {
      return { params: { slug } };
    }),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const result = await client.query({
    query: gql`
      query GetSinglePostBySlug($slug: String!) {
        postBy(slug: $slug) {
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          title
          date
          id
        }
      }
    `,
    variables: {
      slug
    }
  });

  return {
    props: {
      post: result.data.postBy
    }
  };
}
