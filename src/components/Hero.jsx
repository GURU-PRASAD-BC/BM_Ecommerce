import { styled } from "styled-components";
import hero from "../assets/designer1.png";
import hero2 from "../assets/designer3.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Button from "./Button";
import { Link } from "react-router-dom";

const Hero = () => {
  const StyledParagraph = styled.p`
    color: ${(props) => props.theme.textColor};
    letter-spacing: 1px;
    font-size: 20px;
  `;

  const StyledHero = styled.div`
    display: grid;
    align-items: center !important;
    position: relative;
  `;

  const StyledHeading = styled.h1`
    color: ${(props) => props.theme.headingColor};
    font-size: 45px;
    letter-spacing: 0.5px;
  `;

  const StyledDescription = styled.div`
    opacity: 0;
    transition: opacity 1000ms ease-in-out;
  `;

  const ImageContainer = styled.div`
    position: relative;
    opacity: 0;
    transition: opacity 1000ms ease-in-out;

    &::before {
      content: "";
      position: absolute;
      width: 15%;
      height: 75%;
      background-color: ${(props) => props.theme.mainColorLighter};
      bottom: 16px;
      left: 3%;
      border-radius: ${(props) => props.theme.raduis};
    }
  `;

  const StyledImage = styled.img`
    width: 90%;
    transform: translateX(10%);
    border-radius: ${(props) => props.theme.raduis};
  `;

  const StyledImage2 = styled.img`
    position: absolute;
    bottom: 16px;
    left: -40px;
    width: 250px;
    border-radius: ${(props) => props.theme.raduis};
  `;

  // ScrollReveal animation
  useEffect(() => {
    ScrollReveal().reveal(".hero-description", {
      distance: "200px",
      origin: "left",
      opacity: 0,
      duration: 800,
      easing: "ease-in-out",
      beforeReveal: (domEl) => {
        domEl.style.opacity = 1;
      },
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".hero-images", {
      distance: "200px",
      origin: "right",
      opacity: 0,
      duration: 800,
      easing: "ease-in-out",
      beforeReveal: (domEl) => {
        domEl.style.opacity = 1;
      },
    });
  }, []);

  return (
    <StyledHero className="container mb-5">
      <div className="row">
        <StyledDescription className="col mt-5 hero-description">
          <StyledHeading className="pt-5 fw-bold">
            Explore Premium<br />
            Quality
          </StyledHeading>
          <StyledParagraph className="mt-4 lh-lg">
            Upgrade your wardrobe with our exclusive collection of premium garments, crafted with the finest materials and designed to elevate your style. Explore our range of high-quality and stylish pieces, tailored to enhance your everyday look and elevate your lifestyle.
          </StyledParagraph>
          <Link to={'/products'}><Button>Shop Now</Button></Link>
        </StyledDescription>
        <ImageContainer className="col d-lg-block d-none p-3 hero-images">
          <StyledImage src={hero} alt="hero" />
          <StyledImage2 src={hero2} alt="hero-2" />
        </ImageContainer>
      </div>
    </StyledHero>
  );
};

export default Hero;
