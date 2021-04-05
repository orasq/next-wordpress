import Head from "next/head";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";

// components import
import CharTable from "../../components/houses/CharTable";
import ContentWrapper from "../../components/layout/ContentWrapper";

export default function HousePage(props) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.main
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ContentWrapper>
          <div className="house-page">
            <div className="house-page__header">
              <div className="house-page__header-image">
                <Image
                  src={props.property.featuredImage.node.sourceUrl}
                  alt={props.property.featuredImage.node.altText}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="house-page__header-info">
                <div className="house-page__header-info-left">
                  <span>{props.property.acfPropertyInfos.location}</span>
                  {props.property.acfPropertyInfos.typeOfProperty} /{" "}
                  {props.property.acfPropertyInfos.livingArea} m²
                </div>
                <div className="house-page__header-info-right">
                  € {props.property.acfPropertyInfos.price}
                </div>
              </div>
            </div>

            <div className="house-page__content">
              <div className="house-page__content-wrap">
                <h2>Description</h2>
                <div
                  className="house-page__description"
                  dangerouslySetInnerHTML={{ __html: props.property.content }}
                ></div>
              </div>
              <div className="house-page__content-wrap house-page__content-wrap--characteristics">
                <h2>Characteristics</h2>
                <CharTable />
              </div>
            </div>
          </div>
        </ContentWrapper>
      </motion.main>
    </AnimatePresence>
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
      return { params: { id } };
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
