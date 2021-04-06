import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";

// components import
import CharTable from "../../components/houses/CharTable";
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

const staggerTop = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1
    }
  }
};

const staggerBottom = {
  animate: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.1
    }
  }
};

export default function HousePage(props) {
  const router = useRouter();

  console.log(router.asPath);

  const formattedPrice = props.property.acfPropertyInfos.price.toLocaleString("en-US");

  const characteristics = {
    bathrooms: props.property.acfPropertyInfos.bathrooms,
    bedrooms: props.property.acfPropertyInfos.bedrooms,
    garageCapacity: props.property.acfPropertyInfos.garageCapacity,
    livingArea: props.property.acfPropertyInfos.livingArea,
    lotSurfaceArea: props.property.acfPropertyInfos.lotSurfaceArea,
    typeOfProperty: props.property.acfPropertyInfos.typeOfProperty,
    yearOfConstruction: props.property.acfPropertyInfos.yearOfConstruction
  };

  return (
    <>
      <Head>
        <title>{props.property.acfPropertyInfos.location}</title>
      </Head>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={router.asPath}
        exit={{
          opacity: 0,
          transition: {
            duration: 2
          }
        }}
      >
        <ContentWrapper>
          <motion.div initial="initial" animate="animate" className="house-page">
            <div className="house-page__header">
              <div className="house-page__header-image">
                <Image
                  src={props.property.featuredImage.node.sourceUrl}
                  alt={props.property.featuredImage.node.altText}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <motion.div variants={staggerTop} className="house-page__header-info">
                <motion.div variants={fadeInUp} className="house-page__header-info-left">
                  <span>{props.property.acfPropertyInfos.location}</span>
                  {props.property.acfPropertyInfos.typeOfProperty} /{" "}
                  {props.property.acfPropertyInfos.livingArea} m²
                </motion.div>
                <motion.div variants={fadeInUp} className="house-page__header-info-right">
                  € {formattedPrice}
                </motion.div>
              </motion.div>
            </div>

            <motion.div variants={staggerBottom} className="house-page__content">
              <motion.div variants={fadeInUp} className="house-page__content-wrap">
                <h2>Description</h2>
                <div
                  className="house-page__description"
                  dangerouslySetInnerHTML={{ __html: props.property.content }}
                ></div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="house-page__content-wrap house-page__content-wrap--characteristics"
              >
                <h2>Characteristics</h2>
                <CharTable characteristics={characteristics} />
              </motion.div>
            </motion.div>
          </motion.div>
        </ContentWrapper>
      </motion.main>
    </>
  );
}

export async function getStaticPaths() {
  const results = await client.query({
    query: gql`
      query GetWordpressProperties {
        properties {
          nodes {
            id
          }
        }
      }
    `
  });

  return {
    paths: results.data.properties.nodes.map(({ id }) => {
      return { params: { id: id } };
    }),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const result = await client.query({
    query: gql`
      query MyQuery($id: ID!) {
        propertyBy(id: $id) {
          content
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          id
          acfPropertyInfos {
            bathrooms
            bedrooms
            garageCapacity
            livingArea
            location
            lotSurfaceArea
            price
            typeOfProperty
            yearOfConstruction
          }
        }
      }
    `,
    variables: {
      id
    }
  });

  return {
    props: {
      property: result.data.propertyBy
    }
  };
}
