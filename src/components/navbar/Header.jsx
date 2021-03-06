import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  };
  return (
    <header>
      <div className="logout-container">
        <span>Logout?</span>
        <button onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </header>
  );
};
export default Header;
