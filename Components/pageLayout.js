import Header from './header.js';
import Navigation from './navigation.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PageLayout({ pageContent }) {
  return (
    <div className="container">
      <div className="row">
        <Header />
        <div className="row">
          <div className="col-2">
            <Navigation />
          </div>
          <div className="col-10">{pageContent}</div>
        </div>
      </div>

      {/* <style jsx>
        {`
          body {
            background-color: #f1f1f1;
          }
        `}
      </style> */}
    </div>
  );
}
