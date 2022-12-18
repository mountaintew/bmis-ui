import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Button, Container} from "@mui/material";
import ScrollToNav from "../../hooks/useScroll";
import {Link} from "react-router-dom";
import {TITLE} from "../../constants/environment";
import {fontSize} from "@mui/system";

function PageHeader() {
  return (
    <ScrollToNav>
      <AppBar position="fixed">
        <Toolbar>
          <Container className="d-flex justify-content-between align-items-center">
            <Typography variant="h4" noWrap sx={{fontWeight: "bold"}}>
              {TITLE}
            </Typography>
            <div className="d-flex">
              <Button
                variant="contained"
                size="large"
                sx={{
                  mx: 1,
                  color: "white",
                  "&:hover": {color: "white"},
                  textTransform: "none",
                }}
                disableElevation
                component={Link}
                to="/login"
              >
                Login
              </Button>

              <div
                onClick={() => window.location.assign("/register")}
                className="py-2 px-2"
                style={{
                  border: "2px solid #512DA8",
                  borderRadius: "5px",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </div>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </ScrollToNav>
  );
}

export default PageHeader;
