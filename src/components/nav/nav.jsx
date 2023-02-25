import React from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: gold;
  padding: 16px;

  h1 {
    font-size: 24px;
    margin: 0;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-left: 16px;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <h1>Pokemon App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
