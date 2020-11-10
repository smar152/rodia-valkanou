import Header from "./header.js";
import Navigation from "./navigation.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PageLayout({ pageTitle, pageSubtitle, pageContent }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-3">
          <Navigation currentPageTitle={pageTitle} />
        </div>
        <div className="col-12 col-md-9">
          <h2>{pageTitle}</h2>
          <h6>{pageSubtitle}</h6>
          {pageContent}
        </div>
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
        `}
      </style>
    </div>
  );
}
