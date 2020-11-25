import MenuLinks from "./menuLinks.js";
import { useState } from "react";

export default function PhoneNavigation() {
  const [isOpen, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    console.log("close menu");
  };
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <>
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
        className={`drawer col-12 d-md-none  ${
          isOpen ? "active d-flex flex-column" : "d-none"
        }`}
      >
        <MenuLinks closeMenu={closeMenu} />
      </div>
    </>
  );
}
