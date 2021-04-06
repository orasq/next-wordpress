import Head from "next/head";

import { gql } from "@apollo/client";
import { client } from "../lib/apollo";

import { motion } from "framer-motion";

// components import
import Hero from "../components/hero/Hero";
import HouseCardList from "../components/houses/HouseCardList";
import PostCardList from "../components/blog/PostCardList";
import ContentWrapper from "../components/layout/ContentWrapper";
import Section from "../components/layout/Section";
import HeroSearch from "../components/hero/HeroSearch";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <motion.main key="homepage" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Hero image="/images/hero.jpeg">
          <div className="hero__content-wrap">
            <div className="hero__text-wrap">
              <h1 className="hero__title">No. 1 in exclusive properties</h1>
              <p className="hero__subtitle">Since 1988</p>
            </div>
            <HeroSearch />
          </div>
        </Hero>
        <ContentWrapper>
          <Section>
            <h2 className="text-center uppercase mb-l">Properties in the spotlight</h2>
            <HouseCardList properties={props.properties} />
          </Section>
          <Section>
            <h2 className="text-center uppercase mb-l">Latest news</h2>
            <PostCardList posts={props.posts} />
          </Section>
        </ContentWrapper>
      </motion.main>
    </>
  );
}

export async function getStaticProps() {
  const results = await client.query({
    query: gql`
      query GetHomePageData {
        properties {
          nodes {
            acfPropertyInfos {
              livingArea
              location
              price
            }
            id
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
        posts {
          nodes {
            date
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            title
            id
            slug
          }
        }
      }
    `
  });

  return {
    props: {
      properties: results.data.properties.nodes,
      posts: results.data.posts.nodes
    }
  };
}
