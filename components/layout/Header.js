import { useState, useEffect } from "react";
import Link from "next/link";

import { FaBars, FaArrowRight } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-is-open");
    } else {
      document.body.classList.remove("menu-is-open");
    }
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header__logo">
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="Tatemono" />
          </a>
        </Link>
      </div>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="header__burger">
        {isMenuOpen ? <FaArrowRight /> : <FaBars />}
      </button>
    </header>
  );
}

export default Header;
