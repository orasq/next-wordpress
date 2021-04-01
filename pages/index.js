import Head from "next/head";

// components import
import Hero from "../components/hero/Hero";
import ContentWrapper from "../components/layout/ContentWrapper";
import Heading from "../components/layout/Heading";
import Section from "../components/layout/Section";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="pinterest" content="nopin" />.
      </Head>

      <main>
        <Hero />
        <ContentWrapper>
          <Section>
            <Heading headingLevel="h1" centered uppercase>
              Properties in the spotlight
            </Heading>
            <Heading headingLevel="h2">hey subtitle!</Heading>
          </Section>
        </ContentWrapper>
      </main>
    </div>
  );
}
