// import styled from "@emotion/styled";
import {
  styled,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Typography,
  CardMedia,
} from "@mui/material";
import Image1 from "../resourses/images/ReasonsSection1.svg";
import Image2 from "../resourses/images/ReasonsSection2.svg";
import Image3 from "../resourses/images/ReasonsSection3.svg";
import test from "../resourses/images/test.svg";
import CustomChoose from "./CustomChoose";

let WhyChoose = () => {
  const Carditems = [
    {
      image: Image3,
      title: "Purchase One",
      info: "Every transactions in Peyme is free. You don’t worry about fees. Our profits base your satisfied and ads ",
    },
    {
      image: Image3,
      title: "Free Transactions",
      info: "Every transactions in Peyme is free. You don’t worry about fees. Our profits base your satisfied and ads ",
    },

    {
      image: Image3,
      title: "Private and secure ",
      info: "None of your personcal data is ever collected or stored in our Peyme. Your history transaction just you see  ",
    },
  ];

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    rowGap: "180px",
    // justifyContent: "center",
  }));

  const Title = styled(Typography)(({ theme }) => ({
    color: "#000350",
    fontSize: "48px",
    fontWeight: "600",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "38px",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    // columnGap: "150px",
    justifyContent:"space-between",
     [theme.breakpoints.down("md")]: {
      marginBottom: "0",
      flexDirection: "column",
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
              rowGap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Title>Why you choose us?</Title>

            <Typography
              variant="body2"
              sx={{
                color: "#1443BD",
                fontSize: "16px",
                textAlign: "center",
                maxWidth: "536px",
              }}
            >
              When the life too much things you need more than you have. Let
              Peyme help your life to easier with smart payment system
            </Typography>
          </Box>

          <GuidesBox
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: "180px",
              // background: "blue",
            }}
          >
            {Carditems.map((item) => (
              <CustomChoose
                title={item.title}
                info={item.info}
                image={item.image}
              />
            ))}
          </GuidesBox>
        </CustomBox>
      </Container>
    </>
  );
};

export default WhyChoose;
