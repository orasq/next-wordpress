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
              <Link href="#no">Offer</Link>
            </li>
            <li className="navigation__menu-item">
              <Link href="#no">Projects</Link>
            </li>
            <li className="navigation__menu-item">
              <Link href="#no">Press</Link>
            </li>
            <li className="navigation__menu-item">
              <Link href="#no">About us</Link>
            </li>
            <li className="navigation__menu-item">
              <Link href="#no">Contact</Link>
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
