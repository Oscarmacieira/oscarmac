import { useEffect, useState } from "react";
import { Wrapper } from "../layout/Wrapper";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  //   const onOptionClicked = (value: any) => () => {
  //     setIsOpen(false);
  //     props.onSelect(value);
  //   };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  });

  return (
    <>
      {/* {isOpen ? <Wrapper onTouchMove={toggling} onClick={toggling} /> : null} */}
      <DropDownContainer
        onMouseEnter={toggling}
        onMouseLeave={toggling}
        onClick={() => setIsOpen(true)}
      >
        <p className="btnNav">EXPLORE</p>

        {isOpen && (
          <>
            <div className={"drop-content"}>
              <Link to="/NFT">
                <p className="drop-info">GRAPHICS & DESIGN</p>
              </Link>
              <hr />
              <Link to="/metaverse">
                <p className="drop-info">PROGRAMMING & TECH</p>
              </Link>

              <hr />
              <Link to="/production">
                <p className="drop-info">Marketing & Writing</p>{" "}
              </Link>
            </div>
          </>
        )}
      </DropDownContainer>
    </>
  );
};

const DropDownContainer = styled.div`
  position: relative;
  padding: 10px;
  .drop-content {
    color: ${({ theme }) => theme.palette.secondary};

    text-align: center;
    position: absolute;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.primary};

    @media (max-width: 768px) {
      position: relative;

      width: 100%;
    }

    .drop-info {
      font-size: 0.8rem;
      cursor: pointer;
      margin: 15px;
      color: ${({ theme }) => theme.palette.secondary};

      &:hover {
        opacity: 0.6;
      }
    }
    hr {
      background-color: ${({ theme }) => theme.palette.secondary};
      height: 1px;
      width: 80%;
      border: none;
    }
  }
`;
