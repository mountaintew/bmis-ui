import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import SafetyDividerRoundedIcon from "@mui/icons-material/SafetyDividerRounded";

const iconProps = {color: "primary", fontSize: "large"};

const infos = [
  {
    text: "Digitalized barangay services.",
    icon: <PictureAsPdfRoundedIcon {...iconProps} />,
  },
  {
    text: "Provide barangay real time alerts.",
    icon: <NotificationsActiveRoundedIcon {...iconProps} />,
  },
  {
    text: "E-services via SMS.",
    icon: <SmsRoundedIcon {...iconProps} />,
  },
  {
    text: "Less face-to-face interaction.",
    icon: <SafetyDividerRoundedIcon {...iconProps} />,
  },
];

function InfoItem({info}) {
  const {text, icon} = info || {};

  return (
    <Card sx={{my: 5}}>
      <CardActionArea>
        <CardContent>
          <div className="d-flex align-items-center">
            <div className="px-3">{icon}</div>
            <Typography
              variant="h5"
              component="div"
              color="primary"
              sx={{marginLeft: 1}}
            >
              {text}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function LandingInfo() {
  return (
    <Container
      maxWidth="xxl"
      sx={{
        backgroundColor: "#512DA8",
        color: "white",
      }}
    >
      <Container>
        <div className="px-md-4 py-md-5">
          <Grid container spacing={5}>
            <Grid item sm={12} md={6}>
              <div className="d-flex justify-content-center flex-column h-100">
                <div>
                  <Typography
                    variant="h3"
                    sx={{fontWeight: "bold", marginBottom: "1rem"}}
                  >
                    Why BMIS?
                  </Typography>

                  <Typography variant="h5">
                    In this new normal, physical actions, such as requesting
                    documents in the barangay, expose people to the danger of
                    COVID-19.
                  </Typography>
                  <Typography variant="h5" sx={{marginTop: "2rem"}}>
                    That is why our team developed BMIS to deliver services to
                    its residents to reduce their exposure to the outside world.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
              {infos.map((info, index) => {
                return <InfoItem info={info} key={index} />;
              })}
            </Grid>
          </Grid>
        </div>
      </Container>
    </Container>
  );
}

export default LandingInfo;
