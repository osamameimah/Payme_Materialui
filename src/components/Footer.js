 import { Box, Container, Divider, Typography,styled } from "@mui/material";
import Logo2 from "../resourses/images/Logo2.svg";
import Img1 from "../resourses/images/img1.svg";
import Img2 from "../resourses/images/img2.svg";
import Img3 from "../resourses/images/img3.svg";
import Img4 from "../resourses/images/img4.svg";
import Img5 from "../resourses/images/img5.svg";
import Img6 from "../resourses/images/img6.svg";
import CustomButton from "./CustomButton";
let Footer = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    rowGap: "80px",
    justifyContent: "center",
    alignItems: "center",
    background: "#1443BD",
    minHeight: "440px",
    width: "100%",
    marginTop: "100px",
 
   }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#FFFFFF",
    fontWeight: "500",
    cursor: "pointer",
    "&:hover": {
      color: "#778899",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    // justifyContent: "space-between",
    columnGap: "40px",
    flexWrap:"wrap", 
    textAlign:"center",
    justifyContent:"center",
    paddingBottom:"15px"
    // [theme.breakpoints.down("md")]: {
    //   flexDirection:"column",
    //   rowGap: "20px",
    //   flexWrap:"wrap"
    //  },
  }));

  const FooterTitle = styled(Typography)(({ theme }) => ({
    fontSize:"20px",
     fontWeight:"700"
  }));

  const CustomColumn = styled(Box)(({ theme }) => ({
    display: "flex",
    // justifyContent: "space-between",
    columnGap: "88px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
      rowGap: "30px",
      marginTop:"20px",
 
    },
  }));



  return (
    <>
       <CustomBox>
       <Container> 

        <CustomColumn
          
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "8px",
              color: "white",
              fontSize: "20px",
            }}
          >
            <FooterTitle>Product</FooterTitle>
            <FooterLink>Desktop Wallet</FooterLink>
            <FooterLink>Mobile Wallet</FooterLink>
            <FooterLink>Trezor Hardware Wallet</FooterLink>
            <FooterLink>Exodus Crypto Apps</FooterLink>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "8px",
              color: "white",
              fontSize: "16px",
            }}
          >
            <FooterTitle>Support</FooterTitle>
            <FooterLink>Support</FooterLink>
            <FooterLink>Knowledge base</FooterLink>
            <FooterLink>Legal Inquiries</FooterLink>
            <FooterLink>Status</FooterLink>
            <FooterLink>Videos</FooterLink>
            <FooterLink>Blog</FooterLink>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "8px",
              color: "white",
              fontSize: "16px",
            }}
          >
            <FooterTitle>Company</FooterTitle>
            <FooterLink>About us</FooterLink>
            <FooterLink>Investors</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Contact Us</FooterLink>
            <FooterLink>Brand guidelines</FooterLink>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "8px",
              color: "white",
              fontSize: "16px",
              // width: "288px",
            }}
          >
            <FooterTitle>Subscribe to Peyme</FooterTitle>
            <Box sx={{display:"flex", flexDirection:"column",rowGap:"30px" }}> 
            <FooterLink>
              Sign up to receive our newsletter with updates about your wallet.
            </FooterLink>
            <CustomButton
                backgroundColor="white"
                color="blue"
                buttonText="Sign Up"
                getStartedBtn={true}
                border="1px solid #17275F"
                padding="10px 24px"
              />
              </Box>
          </Box>
        </CustomColumn>
        <IconBox sx={{maxWidth:"100%",marginTop:"40px"}}>
          <img src={Logo2} style={{ cursor: "pointer" }} />
          <img src={Img1} style={{ cursor: "pointer" }} />
          <img src={Img2} style={{ cursor: "pointer" }} />
          <img src={Img3} style={{ cursor: "pointer" }} />
          <img src={Img4} style={{ cursor: "pointer" }} />
          <img src={Img5} style={{ cursor: "pointer" }} />
        </IconBox>
        </Container>

      </CustomBox>
     </>
  );
};

export default Footer;
