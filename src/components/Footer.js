import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  padding: 3rem 0 0;

  .footer-img {
    margin-right: 1.5rem;
  }

  .footer-img img {
    max-width: 100%;
  }

  .footer-body h1 {
    color: hsl(233, 8%, 79%);
    font-size: 1.5rem;
    font-weight: 700;
  }

  .footer-body h3 {
    color: hsl(240, 100%, 5%);
    font-size: 0.7rem;
    font-weight: 800;
    margin: 0.5rem 0;
  }

  .footer-body p {
    color: hsl(236, 13%, 42%);
    font-size: 0.6rem;
    font-weight: 400;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    padding: 0;

    .footer-img img {
      max-width: 100px;
    }

    .footer-img {
      margin-bottom: 1rem;
    }

    .footer-body h1 {
      font-size: 1.6rem;
    }

    .footer-body h3 {
      color: hsl(240, 100%, 5%);
      font-size: 1rem;
      white-space: nowrap;
      overflow: hidden;
    }

    .footer-body p {
      font-size: 0.7rem;
      /* margin: 0.5rem 0; */
      line-height: 1.5rem;
    }
  }
`;

function Footer(props) {
  return (
    <StyledFooter>
      <div className="footer-img">
        <img
          src={`${process.env.PUBLIC_URL}/images/${props.img}`}
          alt="footer images"
        />
      </div>

      <div className="footer-body">
        <h1>0{props.number}</h1>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
