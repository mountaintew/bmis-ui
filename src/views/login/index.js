import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { TITLE } from "../../constants/environment";

function Fields() {
  return (
    <div
      className="d-inline-flex flex-column"
      style={{ width: "100%", maxWidth: "40rem" }}
    >
      <TextField label="E-mail" sx={{ my: 1 }} />
      <TextField label="Password" sx={{ my: 1 }} />
      <div
        tag={Link}
        to="/forgot-password"
        className="d-inline "
        style={{ textDecoration: "none" }}
      >
        <Typography
          color="primary"
          sx={{ fontWeight: "bold", textAlign: "right" }}
        >
          Forgot password?
        </Typography>
      </div>

      <Button variant="contained" size="large" sx={{ mt: 5 }}>
        Login
      </Button>
    </div>
  );
}

function Login() {
  return (
    <div className="d-flex justify-content-evenly" style={{ height: "100vh" }}>
      <div className="flex-grow-1">
        <Container maxWidth="xxl" sx={{ height: "100%" }}>
          <div className="d-flex flex-column justify-content-between h-100">
            <Container sx={{ py: 5 }}>
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
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  Login
                </Typography>
              </div>
            </Container>
            <Container sx={{ py: 5 }}>
              <Fields />
            </Container>
            <Container sx={{ py: 5 }}>
              Don't have an account yet?{" "}
              <Link to="/register" style={{ color: "#512DA8" }}>
                Sign up here.
              </Link>
            </Container>
          </div>
        </Container>
      </div>
      <div
        style={{ backgroundColor: "#512DA8", minWidth: "20vw" }}
        className="h-100 d-none d-md-block"
      ></div>
    </div>
  );
}

export default Login;
