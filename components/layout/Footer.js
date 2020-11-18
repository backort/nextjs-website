import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#FAFAFA", padding: "1rem" }}>
      <div className="container mx-auto">
        <img src="/html-logo.png" alt="Logo" width="82" />
        <div className="copyright text-gray-600">
          Copyright © 2020 Васил Василев. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
