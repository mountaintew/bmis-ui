import {Container} from "@mui/material";
import React from "react";

function PageFooter() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container
      maxWidth="xxl"
      sx={{backgroundColor: "#512DA8", color: "#9FA8DA"}}
    >
      <Container>
        <div className="px-md-4 small mb-0 py-5 d-flex">
          <div className="flex-grow-1">
            <div className="d-flex align-items-center">GROUP 11 BSIT 3-3</div>
            <div>For capstone purposes only.</div>
          </div>
          <div>{year}</div>
        </div>
      </Container>
    </Container>
  );
}

export default PageFooter;
