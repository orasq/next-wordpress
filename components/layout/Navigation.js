import Link from "next/link";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__wrap">
        <div className="navigation__top">
          <span className="navigation__title">Menu</span>
          <ul className="navigation__menu">
            <li className="navigation__menu-item">
              <Link href="#no">Menu item 1</Link>
            </li>
            <li className="navigation__menu-item">
              <Link href="#no">Menu item 2</Link>
            </li>
            <li className="navigation__menu-item">
              <Link href="#no">Menu item 3</Link>
            </li>
            <li className="navigation__menu-item">
              <Link href="#no">Menu item 4</Link>
            </li>
            <li className="navigation__menu-item">
              <Link href="#no">Menu item 5</Link>
            </li>
          </ul>
        </div>
        <div className="navigation__bottom">
          <Link href="#no">
            <a>
              <FaFacebookF />
            </a>
          </Link>
          <Link href="#no">
            <a>
              <FaInstagram />
            </a>
          </Link>
          <Link href="#no">
            <a>
              <FaLinkedinIn />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
