import Link from "next/link";
import { pages } from "../data/pagesData.js";

export default function Navigation({ currentPageTitle }) {
  const menuItems = Object.keys(pages).filter(p => p !== "home");
  console.log(currentPageTitle);
  return (
    <div className="pt-3">
      {menuItems.map((e, index) => (
        <div key={index}>
          <Link as={`/${pages[e].slug}`} href={`/${pages[e].slug}`}>
            <div
              className={`link row mb-2 ${
                currentPageTitle === pages[e].title ? "current" : ""
              }`}
            >
              <div className="col-3">
                <img src={pages[e].logoSrc} className="img-fluid" alt="cube" />
              </div>
              <div className="col-9">{pages[e].title}</div>
            </div>
          </Link>
        </div>
      ))}
      <div className="row">
        <div className="pt-4 col-9">
          <img
            src="https://raw.githubusercontent.com/smar152/rodia-valkanou/master/logo/gray_cube.png"
            className="img-fluid"
            alt="logo"
          />
        </div>
      </div>

      <style jsx>
        {`
          .link {
            cursor: pointer;
          }
          .current {
            font-weight: 600;
          }
        `}
      </style>
    </div>
  );
}
