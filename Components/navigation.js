import Link from "next/link";
import { pages } from "../data/pagesData.js";
import { useState } from "react";

export default function Navigation({ currentPageTitle }) {
  const menuItems = Object.keys(pages).filter(p => p !== "home");

  const [isOpen, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    console.log("close menu");
  };
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const MenuLinks = () => (
    <>
      {menuItems.map((e, index) => (
        <div key={index} onClick={closeMenu}>
          <Link as={`/${pages[e].slug}`} href={`/${pages[e].slug}`}>
            <div
              className={`link mb-2 d-flex flex-row align-items-center  ${
                currentPageTitle === pages[e].title ? "current" : ""
              }`}
            >
              <img
                src={pages[e].logoSrc}
                className="img-fluid mr-4"
                alt="cube"
              />
              <div>{pages[e].title}</div>
            </div>
          </Link>
        </div>
      ))}

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
    </>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <div className="d-none d-md-block pt-3">
        <MenuLinks />
      </div>
      {/* Phone Navigation */}
      <div className="d-block d-md-none pt-3 col-2" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="button"
          style={{
            transform: isOpen ? "rotate(90deg)" : "none",
          }}
          viewBox="0 0 448 512"
        >
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
        </svg>
      </div>
      <div
        className={`drawer col-2 d-md-none  ${
          isOpen ? "active d-flex flex-column" : "d-none"
        }`}
      >
        <MenuLinks />
      </div>
    </>
  );
}
