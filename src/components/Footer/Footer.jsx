import React from "react";
import "./_footer.scss";

const Footer = () => {
  return (
    <footer>
      <p>All content &copy; JOHNNY {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
