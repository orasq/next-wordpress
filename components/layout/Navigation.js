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
              <Link href="#no">#1 Lorem</Link>
            </li>
            <li className="navigation__menu-item">
              <Link href="#no">#2 Ipsum</Link>
            </li>
            <li className="navigation__menu-item">
              <Link href="#no">#3 Dolor</Link>
            </li>
            <li className="navigation__menu-item">
              <Link href="#no">#4 Sit Amet</Link>
            </li>
            <li className="navigation__menu-item">
              <Link href="#no">#5 Babilum</Link>
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
