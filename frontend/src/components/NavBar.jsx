import { Link } from "react-router-dom";

import boot from "../images/boot.png";
import home from "../images/home.png";
import kalender from "../images/kalender.png";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>
        <img src={home} alt="home" />
      </Link>
      <Link to="/gallery">
        <img src={boot} alt="boot" />
      </Link>
      <Link to="/new-reservation">
        <img src={kalender} alt="kalender" />
      </Link>
      <Link to='/add-new-boot'><h1 className="plus" >➕</h1></Link>
    </nav>
  );
};

export default NavBar;
