import React from "react";
import styled from "styled-components";

const Footer = () => {
  const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  `;
  return (
    <FooterWrapper>
      <p>All content &copy; JOHNNY {new Date().getFullYear()}</p>
    </FooterWrapper>
  );
};

export default Footer;
