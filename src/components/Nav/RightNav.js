import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 0 18px;

  li {
    padding: 18px 8px;
    color: hsl(236, 13%, 42%);
    transition: all 0.25s;
    cursor: pointer;
  }

  li:hover {
    color: hsl(5, 85%, 63%);
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: hsl(36, 100%, 99%);
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 9rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;

    li {
      color: hsl(236, 13%, 42%);
      font-weight: 700;
    }
  }
`;

function RightNav({open}) {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>New</li>
      <li>Popular</li>
      <li>Trending</li>
      <li>Categories</li>
    </Ul>
  );
}

export default RightNav;
