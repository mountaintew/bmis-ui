import React from "react";
import {Link} from "react-router-dom";
import {TITLE} from "../../constants/environment";
import {Container, Typography} from "@mui/material";
import StartSteps from "./StartSteps";

function Start() {
  return (
    <div className="d-flex justify-content-between" style={{height: "100vh"}}>
      <div className="flex-grow-1">
        <Container c sx={{height: "100%"}}>
          <div className="d-flex flex-column justify-content-between h-100">
            <Container sx={{py: 5}}>
              <div>
                <Typography
                  component={Link}
                  to="/"
                  variant="h4"
                  noWrap
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#512DA8",
                    "&:hover": {
                      color: "#7E57C2",
                      transition: "all 0.5s",
                    },
                  }}
                >
                  {TITLE}
                </Typography>
                <Typography variant="h3" sx={{fontWeight: "bold"}}>
                  Get started
                </Typography>
                <Typography sx={{color: "#757575"}}>
                  Fill out the fields provided below to start BMIS in your
                  barangay.
                </Typography>
              </div>
            </Container>
            <Container sx={{py: 5}}>
              <div>
                <StartSteps />
              </div>
            </Container>
            <Container sx={{py: 5}}>
              Already have an account?{" "}
              <Link to="/login" style={{color: "#512DA8"}}>
                Log in here.
              </Link>
            </Container>
          </div>
        </Container>
      </div>
      <div
        style={{backgroundColor: "#512DA8", minWidth: "20vw"}}
        className="h-100 d-none d-md-block"
      ></div>
    </div>
  );
}

export default Start;
