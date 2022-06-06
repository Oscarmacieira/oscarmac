import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export const CarouselApp = () => {
  return (
    <CarouselStyle showIndicators={false} showStatus={false}>
      <div className="img-container">
        <img src="img/testImages/img1.jpg" alt="img" />{" "}
      </div>
      <div className="img-container">
        <img src="img/testImages/img2.jpg" alt="img" />
      </div>
      <div className="img-container">
        <img src="img/testImages/img3.jpg" alt="img" />
      </div>
      <div className="img-container">
        <img src="img/testImages/img3.jpg" alt="img" />
      </div>
      <div className="img-container">
        <img src="img/testImages/img3.jpg" alt="img" />
      </div>
      <div className="img-container">
        <img src="img/testImages/img3.jpg" alt="img" />
      </div>
      <div className="img-container">
        <img src="img/testImages/img3.jpg" alt="img" />
      </div>
      <div className="img-container">
        <img src="img/testImages/img3.jpg" alt="img" />
      </div>
      <div className="img-container">
        <img src="img/testImages/img3.jpg" alt="img" />
      </div>
      <div className="img-container">
        <img src="img/testImages/img3.jpg" alt="img" />
      </div>
      <div className="img-container">
        <img src="img/testImages/img3.jpg" alt="img" />
      </div>
      <div className="img-container">
        <img src="img/testImages/img3.jpg" alt="img" />
      </div>
    </CarouselStyle>
  );
};

const CarouselStyle = styled(Carousel)`
  background-color: ${({ theme }) => theme.palette.color6};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.palette.secondary};

  .carousel .thumb.selected,
  .carousel .thumb:hover {
    border: 2px solid ${({ theme }) => theme.palette.seconary};
  }

  .thumb {
    border: 2px solid ${({ theme }) => theme.palette.primary};
  }

  .thumbs-wrapper {
    background-color: ${({ theme }) => theme.palette.color6};

    li {
      background-color: transparent;
      height: fit-content !important;
      width: fit-content !important;
      border-radius: 10px;
      border-radius: 1px solid red;

      img {
        aspect-ratio: 16/9;
        width: 100px;
        border-radius: 10px;
        background-size: cover;
      }
    }

    .thumb,
    .selected {
      border-radius: 3px solid red !important;
    }
  }

  .slide selected {
    display: flex;
    justify-content: center;
  }
  .img-container {
    width: 100%;
  }
  img {
    border-radius: 20px;

    height: auto;
    aspect-ratio: 16/9;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.color6};
  }
`;
