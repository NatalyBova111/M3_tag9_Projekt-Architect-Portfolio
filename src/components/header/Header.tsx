import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "../themeToggle/ThemeToggle";
import logoLight from "../../assets/images/Group 11.png";   // чёрная версия
import logoDark  from "../../assets/images/Group 11w.png";  // белая версия
import "./Header.css";

const Header: React.FC = () => {
  const { theme } = useTheme();

  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : undefined; // для .nav a.active в CSS

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Home">
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="Logo"
            className="brand-logo"
          />
        </Link>

        <nav className="nav" aria-label="Main navigation">
          <NavLink to="/" end className={active}>Main</NavLink>
          <NavLink to="/gallery" className={active}>Gallery</NavLink>
          <NavLink to="/projects" className={active}>Projects</NavLink>
          <NavLink to="/certifications" className={active}>Certifications</NavLink>
          <NavLink to="/contact" className={active}>Contacts</NavLink>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
