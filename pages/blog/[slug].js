import Head from "next/head";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";

// components import
import Hero from "../../components/hero/Hero";
import ContentWrapper from "../../components/layout/ContentWrapper";

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Blog post</title>
      </Head>

      <main>
        <Hero image="/images/news-1.jpeg">
          <div className="hero__post-title-wrap">
            <h1 className="hero__post-title">Lorem ipsum Dolor sit met</h1>
            <span>
              Posted on <time dateTime="2021-12-09">9th of December 2021</time>
            </span>
          </div>
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
            <div className="blog-post__content">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                quaerat voluptatem.
              </p>
              <p>
                Ut enim ad minima veniam, quis nostruSed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur?
              </p>
              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                pariatur?m exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                commodi consequatur?
              </p>
              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </div>
          </div>
        </ContentWrapper>
      </main>
    </>
  );
}
