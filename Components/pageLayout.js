import Header from './header.js';
import Navigation from './navigation.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PageLayout({ title, subtitle, pageContent }) {
  return (
    <div className="container">
      <div className="row">
        <Header />
        <div className="row">
          <div className="col-2">
            <Navigation />
          </div>
          <div className="col-10">
            <h2>{title}</h2>
            <h6>{subtitle}</h6>
            {pageContent}
          </div>
        </div>
      </div>

      <style global jsx>
        {`
          body {
            background-color: #f1f1f1;
            font-family: Verdana;
          }
          .container {
            padding-top: 60px;
          }
        `}
      </style>
    </div>
  );
}
