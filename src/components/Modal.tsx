import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
  outline: "none",
};

export const ModalApp = ({ title, children, opener, onClose, onOpen }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    onOpen();
  };
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <div>
      <div
        style={{ width: "fit-content", height: "fit-content" }}
        onClick={handleOpen}
      >
        {opener}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <BoxStyle sx={style}>
            <h3 className="flex justify-space-between ">
              {title}{" "}
              <CloseIcon
                onClick={handleClose}
                id="menu-btn"
                sx={{
                  color: "white",
                  //width: "100px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
                className="flex justify-center align-items-center hover-btn"
              />
            </h3>
            <br />
            {children}
          </BoxStyle>
        </Fade>
      </Modal>
    </div>
  );
};

const BoxStyle = styled(Box)`
  background: ${({ theme }) => theme.palette.primary};
  border: 1px solid ${({ theme }) => theme.palette.secondary};
  border-radius: 25px;
  .error {
    color: ${({ theme }) => theme.palette.color4};
    font-size: 0.7rem;
    width: fit-content;
    margin-inline: auto;
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;
