import Head from "next/head";
import Link from "next/link";
import { getPageData, pages } from "../data/pagesData";
import Header from "../Components/header.js";

export default function Home() {
  const pageData = getPageData("home");
  const menuItems = Object.keys(pages).filter(p => p !== "home");
  const { content, title, subtitle } = pageData;
  return (
    <>
      <Head>
        <title>Ροδιά Βαλκάνου - {title}</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-12 content">
            <h2>{title}</h2>
            <h6>{subtitle}</h6>
            {content}
          </div>
        </div>
        <div className="row">
          {menuItems.map((e, index) => (
            <div key={index}>
              <Link as={`/${pages[e].slug}`} href={`/${pages[e].slug}`}>
                <div className={`col mb-2`}>
                  <div className="col">
                    <div className="row">
                      <img
                        src={pages[e].logoSrc}
                        className="img-fluid mr-4 "
                        alt="cube"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div>{pages[e].title}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <style global jsx>
          {`
            html {
              margin-left: calc(100vw - 100%);
            }
            body {
              background-color: #f1f1f1;
              font-family: Verdana, Geneva, sans-serif;
              color: #3e3e3e;
            }
            .container {
              padding-top: 60px;
            }
            h6 {
              font-style: italic;
            }
            .floatingImage {
              float: right;
            }
            .content {
              margin-bottom: 70px;
              padding-left: 0px;
            }
          `}
        </style>
      </div>
    </>
  );
}
