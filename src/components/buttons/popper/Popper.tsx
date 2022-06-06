import * as React from "react";
import Box from "@mui/material/Box";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { RoundButton } from "../RoundButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { SquareButton } from "../SquareButton";
import { Grid2 } from "../../../layout/grid/Grid2by2";
import { CheckBoxApp } from "../CheckBox";
import { PlainButton } from "../PlainButton";

export const PopperApp = ({ title, children }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const onSave = () => {
    setOpen(false);
  };
  const clearAll = () => {
    setOpen(false);
  };
  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  return (
    <>
      {open && (
        <div
          onClick={() => {
            setOpen(false);
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "transparent",
            zIndex: 2,
          }}
        ></div>
      )}
      <PopperFilterStyle>
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
          sx={{ zIndex: 4 }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <PopperContent onMouseLeave={() => setOpen(false)}>
                <div className="data">{children}</div>
                <hr />
                <div
                  className="flex justify-space-between align-items-center save-data"
                  style={{ width: "100%" }}
                >
                  <h1 className="clear-all" onClick={clearAll}>
                    Clear All
                  </h1>
                  <PlainButton style={{ padding: "5px 20px" }} onClick={onSave}>
                    Save
                  </PlainButton>
                </div>
              </PopperContent>
            </Fade>
          )}
        </Popper>

        <SquareButton
          className={open ? "" : ""}
          style={{ zIndex: open ? 6 : 2 }}
          onClick={handleClick("bottom")}
        >
          {title}
          <ExpandLessIcon
            className="ml-3"
            id={open ? "arrow-down" : ""}
            sx={{ width: 20 }}
          />
        </SquareButton>
      </PopperFilterStyle>
    </>
  );
};

export const PopperFilterStyle = styled.div`
  height: fit-content;
  position: relative;
  #arrow-down {
    transform: rotate(180deg);
  }

  .popper-content {
  }

  .active {
    background-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.primary};
    border: 1.5px solid transparent;
  }
`;

const PopperContent = styled.div`
  margin-top: 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.primary};
  min-width: 230px;
  position: relative;
  z-index: 4;

  border: 1.5px solid ${({ theme }) => theme.palette.secondary};
  .data {
    padding: 20px;
    overflow: scroll;
    max-height: 420px;
    &::-webkit-scrollbar {
      display: none;
    }
    hr {
      height: 1px;
      opacity: 0.5;
      border: 0px;
      background-color: ${({ theme }) => theme.palette.secondary};
      color: ${({ theme }) => theme.palette.secondary};
    }
    h1 {
      margin: 0px;
      margin-bottom: 10px;
      font-size: 0.9rem;
      font-weight: bold;
    }
    p {
      font-size: 0.8rem;
      margin: 0px;
      padding: 0px;
      user-select: none;
    }
  }
  .save-data {
    padding-inline: 20px;
    padding-bottom: 10px;
    .clear-all {
      color: ${({ theme }) => theme.palette.color4};
      text-decoration: underline;
      animation: 1s ease-in-out;
      font-size: 0.7rem;
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }
  hr {
    border: 0px;
    height: 1px;

    background-color: ${({ theme }) => theme.palette.secondary};

    width: 100%;
  }
`;
