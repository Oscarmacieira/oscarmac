import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

export const AccordionCustom = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const content = [
    {
      question: "General settings",
      answer:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      question: "General settings",
      answer:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      question: "General settings",
      answer:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
  ];

  return (
    <AccordionStyle>
      {content.map((elem, idx) => {
        return (
          <Accordion
            key={elem.question}
            className="accordion"
            expanded={expanded === `panel${idx + 1}`}
            onChange={handleChange(`panel${idx + 1}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="acc-icon" />}
              aria-controls={`panel${idx + 1}bh-content`}
              id={`panel${idx + 1}bh-header`}
            >
              <Typography>{elem.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{elem.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </AccordionStyle>
  );
};

const AccordionStyle = styled.div`
  width: 600px;
  margin-inline: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  .accordion {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.secondary};
  }
  .acc-icon {
    color: ${({ theme }) => theme.palette.secondary};
    width: 30px;
  }
`;
