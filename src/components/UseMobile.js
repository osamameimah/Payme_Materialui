import { Box, Container, Typography, styled } from "@mui/material";
import Mockup from "../resourses/images/Mockup.svg";
import CustomButton from "./CustomButton";

let UseMobile = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    color: "#000350",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      rowGap: "20px",
    },
  }));

  const CustomTitle = styled(Typography)(({ theme }) => ({
    fontSize: "48px",
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  }));
  return (
    <>
      <Container>
        <CustomBox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "12px",
              flex: "1",
              justifyContent: "center",
            }}
          >
            <CustomTitle>Use Peyme In Mobile</CustomTitle>
            <Typography variant="body1">
              We already support in multiple flatform to provide the best
              experiences, allow you to control the flow of currency with no
              more efforts. Let’s make the world easy to life{" "}
            </Typography>
            <Box sx={{ display: "flex", columnGap: "30px" }}>
              <CustomButton
                backgroundColor="white"
                color="#17275F"
                buttonText="Apple Store"
                getStartedBtn={true}
                border="1px solid #17275F"
                padding="10px 24px"
              />

              <CustomButton
                backgroundColor="#17275F"
                color="#FFFFFF"
                buttonText="Google Play"
                getStartedBtn={true}
                border="1px solid #17275F"
                padding="10px 24px"
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", flex: "1" }}>
            <img src={Mockup} style={{ maxWidth: "100%" }} />
          </Box>
        </CustomBox>
      </Container>
    </>
  );
};

export default UseMobile;
