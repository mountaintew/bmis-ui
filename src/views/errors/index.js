import {Divider, Stack} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

function Index() {
  return (
    <div
      style={{minWidth: "100", height: "100vh"}}
      className="d-flex justify-content-center align-items-center flex-column bg-dark text-light"
    >
      <Stack
        direction="row"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{bgcolor: "primary.light"}}
          />
        }
        spacing={2}
        sx={{marginBottom: 2}}
      >
        <h2 className="m-0">404</h2>
        <h2>Not Found</h2>
      </Stack>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default Index;
