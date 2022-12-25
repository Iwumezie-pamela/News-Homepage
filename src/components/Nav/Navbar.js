import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0rem auto;
  max-width: 800px;
  .nav--logo {
    max-width: 100%;

  }

  @media (max-width: 768px) {
    .nav--logo {
      max-width: 80;
    }
  }
`;

function Navbar() {
  return (
    <Nav>
      <div className="logo">
        <img src="images/logo.svg" alt="logo" className="nav--logo" />
      </div>
      <Burger />
    </Nav>
  );
}

export default Navbar;
