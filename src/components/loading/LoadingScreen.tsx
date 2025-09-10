import React from "react";
import "./Loading.css";

const LoadingScreen: React.FC = () => {
  return (
    <div className="loader-wrap">
      <div className="spinner" />
      <p>WELCOME TO OUR SITE</p>
    </div>
  );
};

export default LoadingScreen;
