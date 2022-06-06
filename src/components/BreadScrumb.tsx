import { useParams } from "react-router";
import { URLtoMainCat } from "../utils/utils";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "./branding/Logo";
import { URLtoSubCat } from "./../utils/utils";

export const BreadScrumb = ({ size }) => {
  const params = useParams();

  const mainCategory = params.category || "";
  const subCategory = params.subcategory || "";
  const innersubcategory = params.innersubcategory || "";
  const gig = params.gig || "";
  const breadscrumb = () => {
    return (
      <>
        {size !== "small" && (
          <>
            <Link to="/">
              <div id="logo" className="mt-2">
                {" "}
                <Logo size={50} />
              </div>
            </Link>
            <p id="span">&gt;</p>
          </>
        )}

        <Link to={`/${mainCategory}`}>
          <p className="click">{URLtoMainCat(mainCategory)}</p>
        </Link>
        <p id="span">&gt;</p>
        {innersubcategory && (
          <Link to={`/${mainCategory}/${subCategory}`}>
            <p className="click">{URLtoSubCat(subCategory)}</p>
          </Link>
        )}
        {gig && (
          <>
            <p id="span">&gt;</p>
            <Link to={`/${mainCategory}/${subCategory}/${innersubcategory}`}>
              <p className="click">{URLtoSubCat(innersubcategory)}</p>
            </Link>
          </>
        )}
      </>
    );
  };

  if (size === "small")
    return <BreadScrumbStyleSmall>{breadscrumb()}</BreadScrumbStyleSmall>;
  else return <BreadScrumbStyle>{breadscrumb()}</BreadScrumbStyle>;
};

const BreadScrumbStyle = styled.div`
  display: flex;
  #span {
    color: ${({ theme }) => theme.palette.color4};
  }
  #family {
    font-weight: bold;
    color: ${({ theme }) => theme.palette.color4};
  }
  p {
    padding: 5px 10px;
  }

  #logo {
    animation: 1s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }
  .click {
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary};
    animation: 1s ease-in-out;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.palette.color4};
      cursor: pointer;
    }
  }
`;

const BreadScrumbStyleSmall = styled(BreadScrumbStyle)`
  display: flex;

  font-size: 0.7rem;
`;
