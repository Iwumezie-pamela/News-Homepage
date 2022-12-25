import React from "react";
import styled from "styled-components";

const StyledHero = styled.div`
  display: flex;
  margin: 1.5rem auto;
  max-width: 800px;
  gap: 1.5rem;

  .hero-img {
    max-width: 100%;
    height: auto;
  }

  .hero-body {
    display: flex;
    gap: 3rem;
  }

  .hero-title {
    max-width: 250px;
    margin: 1.5rem 0 0;
    font-weight: 800;
    font-size: 2.5rem;
  }

  .hero-sub {
    margin: 1.7rem 0;
  }

  .hero-subtitle {
    color: hsl(236, 13%, 42%);
    font-weight: 400;
    font-size: 0.85rem;
    max-width: 400px;
    line-height: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .hero-btn {
    text-decoration: none;
    background-color: hsl(5, 85%, 63%);
    color: hsl(36, 100%, 99%);
    text-align: center;
    padding: 0.8rem 1.7rem;
    white-space: nowrap;
    overflow: hidden;
    transition: all 0.3s;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.7rem;
    letter-spacing: 2px;
  }

  .hero-btn:hover {
    background-color: hsl(240, 100%, 5%);
  }

  hr {
    border: none;
    height: 1px;
    background-color: hsl(236, 13%, 42%);
  }

  .right--hero {
    background-color: hsl(240, 100%, 5%);
    color: rgb(255, 253, 250);
    padding: 0 1rem 0;
  }

  .right-hero-title {
    color: hsl(35, 77%, 62%);
    padding: 1.5rem 0;
    font-weight: 800;
    font-size: 2rem;
  }

  .hero-h3 {
    color: hsl(36, 100%, 99%);
    margin-bottom: 0.3rem;
    overflow: hidden;
    white-space: nowrap;
  }

  .hero-h3-two {
    color: hsl(36, 100%, 99%);
    margin: 1rem 0 0.3rem;
    overflow: hidden;
    white-space: nowrap;
    transition: all 0.3s;
  }

  .hero-h3-two:hover {
    color: hsl(35, 77%, 62%);
  }

  .hero-h3-three {
    color: hsl(36, 100%, 99%);
    margin: 1rem 0 1rem;
  }

  .right-hero-subtitle {
    color: hsl(236, 13%, 42%);
    font-weight: 400;
    font-size: 0.9rem;
    margin-bottom: 0.7rem;
    line-height: 1.2rem;
  }

  .right-hero-subtitle-last {
    color: hsl(237, 9%, 44%);
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  @media (max-width: 768px) {
    display: block;

    .hero-body {
      display: block;
    }

    .hero-title {
      max-width: 200px;
      font-size: 2rem;
      margin: 0.7rem 0;
    }

    .hero-sub {
      margin: 0;
    }

    .hero-subtitle {
      font-size: 0.8rem;
      margin-bottom: 2rem;
      max-width: 100%;
    }

    .hero-btn {
      padding: 0.8rem 2.3rem;
      font-size: 0.8rem;
      letter-spacing: 3px;
    }

    .right--hero {
      padding: 1rem 1rem;
      margin: 4rem 0 3rem;
    }

    .right-hero-title {
      padding: 1.2rem 0;
      font-size: 1.8rem;
    }

    .hero-h3 {
      color: hsl(36, 100%, 99%);
      margin-bottom: 0.5rem;
    }

    .hero-h3-two {
      color: hsl(36, 100%, 99%);
      margin: 1.5rem 0 0.5rem;
    }

    .hero-h3-three {
      color: hsl(36, 100%, 99%);
      margin: 1.5rem 0 1rem;
    }

    .right-hero-subtitle {
      margin-bottom: 1rem;
      line-height: 1.5rem;
    }

    .right-hero-subtitle-last {
      margin-bottom: 1.2rem;
      line-height: 1rem;
    }
  }
`;
function Hero() {
  return (
    <StyledHero className="hero">
      <div className="left--hero">
        <img src="images/image-web-3-desktop.jpg" alt="" className="hero-img" />
        <div className="hero-body">
          <h1 className="hero-title">The Bright Future of Web 3.0?</h1>

          <div className="hero-sub">
            <p className="hero-subtitle">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people.But is it
              really fulfilling its promise?
            </p>
            <a href="#button" className="hero-btn">
              read more
            </a>
          </div>
        </div>
      </div>

      <div className="right--hero">
        <h2 className="right-hero-title">New</h2>
        <h3 className="hero-h3">Hydrogen VS Electric Cars</h3>
        <p className="right-hero-subtitle">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
        <hr />
        <h3 className="hero-h3-two">The Downsides of AI Artistry</h3>
        <p className="right-hero-subtitle">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        <hr />
        <h3 className="hero-h3-three">Is VC Funding Drying Up?</h3>
        <p className="right-hero-subtitle-last">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </StyledHero>
  );
}

export default Hero;
