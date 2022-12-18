import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";

const validate = (values) => {
  const errors = {};

  if (!values.brgyId) {
    errors.brgyId = "Required";
  } else if (values.brgyId.length < 32 || values.brgyId.length !== 32) {
    errors.brgyId = "Please input a valid barangay ID";
  }

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

function RegisterForm({ setName }) {
  const [showPassword, setShowPassword] = useState(false);
  function togglePassword() {
    setShowPassword(!showPassword);
  }

  const formik = useFormik({
    initialValues: {
      brgyId: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    setName({
      fname: formik.values.firstName,
      lname: formik.values.lastName,
    });
  }, [formik.values.firstName, formik.values.lastName, setName]);

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          sx={{ my: 1 }}
          required
          id="brgyId"
          name="brgyId"
          label="Barangay ID"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.brgyId}
          error={formik.touched.brgyId && formik.errors.brgyId}
        />
        {formik.touched.brgyId && formik.errors.brgyId ? (
          <Typography sx={{ color: "#EF5350" }}>
            {formik.errors.brgyId}
          </Typography>
        ) : null}

        <TextField
          sx={{ my: 1 }}
          required
          id="firstName"
          name="firstName"
          label="Firstname"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          error={formik.touched.firstName && formik.errors.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <Typography sx={{ color: "#EF5350" }}>
            {formik.errors.firstName}
          </Typography>
        ) : null}

        <TextField
          sx={{ my: 1 }}
          required
          id="lastName"
          name="lastName"
          label="Lastname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          error={formik.touched.lastName && formik.errors.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <Typography sx={{ color: "#EF5350" }}>
            {formik.errors.lastName}
          </Typography>
        ) : null}

        <TextField
          sx={{ my: 1 }}
          required
          id="email"
          name="email"
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <Typography sx={{ color: "#EF5350" }}>
            {formik.errors.email}
          </Typography>
        ) : null}

        <FormControl sx={{ my: 1 }} variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {formik.touched.password && formik.errors.password ? (
          <Typography sx={{ color: "#EF5350" }}>
            {formik.errors.password}
          </Typography>
        ) : null}

        <Box
          sx={{ display: "flex", alignItems: "center", padding: 0, margin: 0 }}
        >
          <Checkbox
            label="Sign up as administrator"
            sx={{ color: "#222222" }}
          />
          Sign up as admin
        </Box>
        <div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              my: 1,
              "&:hover": { color: "white" },
            }}
            disabled={!(formik.isValid && formik.dirty)}
            component={Link}
            to="/dashboard"
          >
            Continue
          </Button>
        </div>
      </Box>
    </>
  );
}

export default RegisterForm;
