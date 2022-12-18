import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import { landingLady } from "../../components/Lottie";

function LandingHeader() {
  return (
    <Container>
      <div
        className="d-flex align-items-center justify-content-between px-4"
        style={{ height: "85vh" }}
      >
        <div className="d-flex flex-column">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              maxWidth: "30rem",
              marginBottom: "1rem",
              lineHeight: "1.2em",
            }}
          >
            Your barangay in this new normal.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: "30rem",
              marginBottom: "2rem",
              lineHeight: "1.2em",
              color: "#616161",
            }}
          >
            BMIS is a platform that makes the services of a barangay accessible
            online.
          </Typography>
          <div>
            <Button
              component={Link}
              to="/get-started"
              variant="outlined"
              size="large"
              sx={{ textTransform: "none", fontWeight: "bold" }}
            >
              Get started
            </Button>
          </div>
        </div>
        <div className="d-none d-lg-block">
          <Lottie animationData={landingLady} />
        </div>
      </div>
    </Container>
  );
}

export default LandingHeader;
