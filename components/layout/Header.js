import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../../public/logo.svg";
import { FaBars, FaArrowRight } from "react-icons/fa";

function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderDark, setIsHeaderDark] = useState(false);

  useEffect(() => {
    // if on page without "hero"
    if (router.pathname.includes("/properties/")) {
      setIsHeaderDark(true);
    } else {
      setIsHeaderDark(false);
    }
  }, [router.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-is-open");
    } else {
      document.body.classList.remove("menu-is-open");
    }
  }, [isMenuOpen]);

  return (
    <header className={`header ${isHeaderDark ? "header--dark" : ""}`}>
      <div className="header__logo-wrap">
        <Link href="/">
          <a>
            <Logo />
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
