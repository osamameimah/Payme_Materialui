// import styled from "@emotion/styled";
import { Box, Container, Typography, styled } from "@mui/material";
import Bunner from "../resourses/images/Banner.svg";
import Header from "./Header";
import CustomButton from "./CustomButton";
let Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "10px",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    color: "#000350",
    fontSize: "35px",
    fontWeight: "bold",
    width: "300px",
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
      width: "100%",
      // backgroundColor:"red"
    },
  }));

  const BoxIcons = styled(Box)(({ theme }) => ({
    display: "flex",
    columnGap: "30px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

const TitleDetails = styled(Typography)(({theme})=>({
  color: "#000350", 
  fontSize: "15px", 
  width: "450px", 
  [theme.breakpoints.down("md")]: {
    width:"100%",
  },

}))

  return (
    <>
      <Container>
        <Header />
        <CustomBox>
          <Box
            sx={{
              display: "flex",
              flex: "1",
              flexDirection: "column",
              rowGap: "20px",
              justifyContent: "center",
              maxWidth: "100%",
            }}
          >
            <Title variant="h1"> Monitor Balance Control Smart Life</Title>
            <TitleDetails
             
            >
              When the life too much things you need more than you have. Lets
              Peyme helpyour life to easier with smart payment system{" "}
            </TitleDetails>

            <BoxIcons>
              <CustomButton
                backgroundColor="white"
                color="#17275F"
                buttonText="Take a trip"
                getStartedBtn={true}
                border="1px solid #17275F"
                padding="10px 24px"
              />

              <CustomButton
                backgroundColor="#17275F"
                color="#FFFFFF"
                buttonText="Get Started"
                getStartedBtn={true}
                border="1px solid #17275F"
                padding="10px 24px"
              />
            </BoxIcons>
          </Box>

          <Box sx={{ display: "flex", flex: "1" }}>
            <img src={Bunner} style={{ maxWidth: "100%" }} />
          </Box>
        </CustomBox>
      </Container>
    </>
  );
};

export default Hero;
