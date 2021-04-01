import Link from "next/link";

import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="Tatemono" />
          </a>
        </Link>
      </div>
      <button className="header__burger">
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
