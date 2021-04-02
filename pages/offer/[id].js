import Head from "next/head";
import Image from "next/image";

// components import
import CharTable from "../../components/houses/CharTable";
import ContentWrapper from "../../components/layout/ContentWrapper";

export default function HousePage() {
  return (
    <>
      <Head>
        <title>Blog post</title>
      </Head>

      <main>
        <ContentWrapper>
          <div className="house-page">
            <div className="house-page__header">
              <div className="house-page__header-image">
                <Image src="/images/house-1.jpeg" layout="fill" objectFit="cover" />
              </div>
              <div className="house-page__header-info">
                <div className="house-page__header-info-left">
                  <span>Woluwe-Saint-Pierre</span>
                  House / 500 m²
                </div>
                <div className="house-page__header-info-right">€ 2.150.000</div>
              </div>
            </div>

            <div className="house-page__content">
              <div className="house-page__content-wrap">
                <h2>Description</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                  quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <p>
                  Periam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                  quia consequuntur magni dolores eos qui ratione voluptatem sequi
                </p>
              </div>
              <div className="house-page__content-wrap house-page__content-wrap--char">
                <h2>Characteristics</h2>
                <CharTable />
              </div>
            </div>
          </div>
        </ContentWrapper>
      </main>
    </>
  );
}
