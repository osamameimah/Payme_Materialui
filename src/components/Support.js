import { Box, Container, Typography, styled } from "@mui/material";
import Frame2 from "../resourses/images/Frame2.svg";
import CustomButton from "./CustomButton";

let Support = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    columnGap: "188px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  }));

  const CustomTitle = styled(Typography)(({ theme }) => ({
    fontSize: "48px", 
    fontWeight: "600" ,
    [theme.breakpoints.down("md")]: {
      fontSize: "30px", fontWeight: "600" 
    },
  }));

  return (
    <>
      <Container>
        <CustomBox>
          <Box sx={{ display: "flex", flex: "1" }}>
            <img src={Frame2} style={{ maxWidth: "100%" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "12px",
              flex: "1",
              justifyContent: "center",
              color: "#000350",
            }}
          >
            <CustomTitle
              >
              Support
            </CustomTitle>
            <Typography variant="body1">
              From signing up for an account to choosing a payment solution –
              Everyone have an supporter to solves any problems within 24 hours
            </Typography>

            <CustomButton
              backgroundColor="#17275F"
              color="#FFFFFF"
              buttonText="Sign Up Now"
              getStartedBtn={true}
              border="1px solid #17275F"
              padding="10px 24px"
            />
          </Box>
        </CustomBox>
      </Container>
    </>
  );
};

export default Support;
