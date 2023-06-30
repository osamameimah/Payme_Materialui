import { Box, Container, Typography, styled } from "@mui/material";
import Brands from "../resourses/images/Brands.svg";
let Brand = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    // padding: "0px 108px",
    display: "flex",
    flexDirection: "column",
    rowGap: "74px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  }));

  const CustomTitle = styled(Typography)(({ theme }) => ({
    width: "442px",
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));

  return (
    <>
      <Container>
        <CustomBox>
          <CustomTitle>
            <Typography
              variant="body1"
              sx={{ color: "#000350", fontSize: "48px", fontWeight: "600" }}
            >
              Partners
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#1443BD", fontSize: "14px", fontWeight: "600" }}
            >
              Powering payments for partners around the world
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#000350", fontSize: "14px" }}
            >
              Our partners create innovative platforms for merchants that trust
              Payme to process their payments.
            </Typography>
          </CustomTitle>

          <Box>
            <img src={Brands} style={{ maxWidth: "100%" }} />
          </Box>
        </CustomBox>
      </Container>
    </>
  );
};

export default Brand;
