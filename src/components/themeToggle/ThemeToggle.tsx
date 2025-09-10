import React from "react";
import { useTheme } from "../../context/ThemeContext";
import lightIcon from "../../assets/images/Mode -  Light.png"; // белая тема (солнышко)
import darkIcon  from "../../assets/images/Mode -  Dark.png";  // тёмная тема (лунка)
import "./ThemeToggle.css";

const ThemeToggle: React.FC = () => {
  const { theme, toggle } = useTheme();

  const icon   = theme === "dark" ? lightIcon : darkIcon;
  const title  = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      className="theme-icon-btn"
      onClick={toggle}
      aria-label={title}
      title={title}
      type="button"
    >
      <img src={icon} alt="" aria-hidden="true" />
    </button>
  );
};

export default ThemeToggle;
