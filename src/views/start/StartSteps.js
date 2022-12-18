import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import phil from "philippine-location-json-for-geer";
import {useState} from "react";
import {useEffect} from "react";
import {filter} from "lodash";
import md5 from "md5";
import {Visibility, VisibilityOff} from "@mui/icons-material";

export default function StartSteps() {
  const [location, setLocation] = useState({});

  const [formData, setFormData] = useState({});

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [password, setPassword] = useState();
  const [activeStep, setActiveStep] = React.useState(0);
  const {
    regions,
    getProvincesByRegion,
    getCityMunByProvince,
    getBarangayByMun,
  } = phil;

  function togglePass() {
    setIsShowPassword(!isShowPassword);
  }

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  function handleLocationChange(value, type) {
    const {region, district, municipality} = location;

    switch (type) {
      default:
        break;
      case "region":
        setLocation({region: value});
        break;
      case "district":
        setLocation({region: region, district: value});
        break;
      case "municipality":
        setLocation({region: region, district: district, municipality: value});
        break;
      case "barangay":
        setLocation({
          region: region,
          district: district,
          municipality: municipality,
          barangay: value,
        });
        break;
    }
  }

  useEffect(() => {
    setFormData({...formData, location: location});
  }, [location]);

  const {region, district, municipality, barangay} = location || {};

  const steps = [
    {
      label: "Select your Barangay",
      required: barangay,
      content: (
        <>
          <div className="d-flex flex-column">
            <FormControl fullWidth sx={{my: 1}}>
              <InputLabel id="register-region">Select Region</InputLabel>
              <Select
                label="Select Regions"
                onChange={(e) => handleLocationChange(e.target.value, "region")}
                value={region}
              >
                <MenuItem value={null} sx={{color: "#9E9E9E"}}>
                  Select Region
                </MenuItem>
                {regions.map((region, index) => {
                  const {name, reg_code} = region;
                  return (
                    <MenuItem key={index} value={reg_code}>
                      {name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            {!!region && (
              <FormControl fullWidth sx={{my: 1}}>
                <InputLabel id="register-district">Select District</InputLabel>
                <Select
                  label="Select District"
                  placeholder="Select District"
                  onChange={(e) =>
                    handleLocationChange(e.target.value, "district")
                  }
                  value={district}
                >
                  {getProvincesByRegion(region).map((province, index) => {
                    const {name, prov_code} = province || {};
                    return (
                      <MenuItem key={index} value={prov_code}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            )}
            {district && (
              <FormControl fullWidth sx={{my: 1}}>
                <InputLabel id="register-municipality">
                  Select Municipality
                </InputLabel>
                <Select
                  label="Select Municipality"
                  onChange={(e) =>
                    handleLocationChange(e.target.value, "municipality")
                  }
                  value={municipality}
                >
                  {getCityMunByProvince(district).map((district, index) => {
                    const {name, mun_code} = district || {};
                    return (
                      <MenuItem key={index} value={mun_code}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            )}
            {municipality && (
              <FormControl fullWidth sx={{my: 1}}>
                <InputLabel id="register-barangay">Select Barangay</InputLabel>
                <Select
                  label="Select Barangay"
                  onChange={(e) =>
                    handleLocationChange(e.target.value, "barangay")
                  }
                  value={barangay}
                >
                  {getBarangayByMun(municipality).map((barangay, index) => {
                    const {name, brgy_code} = barangay || {};
                    return (
                      <MenuItem key={index} value={brgy_code}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            )}
          </div>
        </>
      ),
    },
    {
      label: "Barangay Details",
      content: (
        <div className="d-flex flex-column">
          <TextField
            required
            label="Barangay ID"
            sx={{my: 1, marginBottom: 3}}
            InputProps={{
              readOnly: true,
              shrink: true,
            }}
            value={md5("barangay" + barangay)}
            disabled
          />
          <TextField required label="Barangay Email" sx={{my: 1}} />

          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>

            <OutlinedInput
              id="password"
              type={isShowPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePass}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {isShowPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
      ),
    },
    {
      label: "Import Data",
    },
  ];

  return (
    <Box sx={{maxWidth: "40rem"}}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => {
          const {label, content, required} = step;

          return (
            <Step key={index}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {label}
              </StepLabel>
              <StepContent>
                <Box sx={{mb: 2}}>
                  <div className="my-2">{content}</div>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{mt: 1, mr: 1}}
                      disabled={!required}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{mt: 1, mr: 1}}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{p: 3}}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{mt: 1, mr: 1}}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
