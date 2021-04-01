import Head from "next/head";

// components import
import Hero from "../components/hero/Hero";
import HouseCardList from "../components/houses/HouseCardList";
import PostCardList from "../components/blog/PostCardList";
import ContentWrapper from "../components/layout/ContentWrapper";
import Section from "../components/layout/Section";
import Page from "../components/layout/Page";
import HeroSearch from "../components/hero/HeroSearch";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="pinterest" content="nopin" />.
      </Head>

      <Page>
        <main>
          <Hero>
            <div className="hero__content-wrap">
              <div className="hero__text-wrap">
                <h1 className="hero__title">No. 1 in exclusive properties</h1>
                <p className="hero__subtitle">Since 1988</p>
              </div>
              <HeroSearch />
            </div>
            {/* <div className="hero__post-title-wrap">
            <h1 className="hero__post-title">Lorem ipsum Dolor sit met</h1>
            <span>
              Posted on <time datetime="2021-12-09">9th of December 2021</time>
            </span>
          </div> */}
          </Hero>
          <ContentWrapper>
            <Section>
              <h2 className="text-center uppercase mb-l">Properties in the spotlight</h2>
              <HouseCardList />
            </Section>
            <Section>
              <h2 className="text-center uppercase mb-l">Latest news</h2>
              <PostCardList />
            </Section>
          </ContentWrapper>
        </main>
      </Page>
    </>
  );
}