import Head from "next/head";

import { gql } from "@apollo/client";
import { client } from "../lib/apollo";

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

      <main>
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
            <HouseCardList />
          </Section>
          <Section>
            <h2 className="text-center uppercase mb-l">Latest news</h2>
            <PostCardList posts={props.posts} />
          </Section>
        </ContentWrapper>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const results = await client.query({
    query: gql`
      query GetHomePageWordpressPosts {
        posts {
          nodes {
            date
            featuredImage {
              node {
                sourceUrl
                id
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
      posts: results.data.posts.nodes
    }
  };
}
