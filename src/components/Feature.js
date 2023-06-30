import { Box, Container, Typography, styled } from "@mui/material";
import imageCard1 from "../resourses/images/imageCard1.svg";
import imageCard2 from "../resourses/images/imageCard2.svg";
import imageCard3 from "../resourses/images/imageCard3.svg";
import imageCard4 from "../resourses/images/imageCard4.svg";
import CustomFeature from "./CustomFeature";

let Feature = () => {
  const Carditems = [
    {
      title: "2s to Complete",
      image: imageCard1,
      info: "With the Transaction Cloud Technology, send and receive money break timing wall",
    },
    {
      title: "No Hidden Fees ",
      image: imageCard2,
      info: "Don’t worry about generated fees. Any transaction will clearly analysis and daily reports ",
    },
    {
      title: "Smart Combine",
      image: imageCard3,
      info: "Auto linking your banking account to purchase everything you want, don’t need to put all money in one place",
    },
    {
      title: "Perfect Protection",
      image: imageCard4,
      info: "Monitor transaction process help you prevent the tricks. Provide multiple protection methods",
    },
  ];

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    rowGap: "56px",
    alignItems: "center",
    marginTop: "50px",
    marginBottom: "50px",
  }));

  const CardsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    rowGap: "20px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

  const CardBox = styled(Box)(({ theme }) => ({
    padding: "28px",
    maxWidth: "560px",
    maxHeight: "216px",
    display: "flex",
    flexDirection: "row",
    columnGap: "36px",
    background: "rgba(137, 186, 214, 0.04) ",
    borderRadius: "16px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      maxHeight: "100%",
      columnGap: "20px",
    },
  }));

  const CardInfo = styled(Box)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: "400",
    paddingTop: "24px",
    fontStyle: "normal",
    color: "#000350",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      paddingTop: "15px",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    color: "#1443BD",
    fontSize: "48px",
    fontWeight: "600",
    color: "#000350",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  }));

  const TitleInfo = styled(Typography)(({ theme }) => ({
    fontSize: "26px",
    fontWeight: "600",
    color: "#000350",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      fontWeight: "400",
    },
  }));

  const FeatureInfo = styled(Typography)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    textAlign: "center",
    width: "600px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));

  return (
    <>
      <Container>
        <CustomBox>
          <FeatureInfo>
            <Title>Features Just Peyme Has</Title>
            <Typography sx={{ fontSize: "16px", color: "#1443BD" }}>
              When the life too much things you need more than you have. Let’s
              Peyme help your life to easier with smart payment system
            </Typography>
          </FeatureInfo>
          <CardsBox>
            {Carditems.map((item) => (
              <CustomFeature
                titleInfo={item.title}
                cardInfo={item.info}
                image={item.image}
              />
            ))}
          </CardsBox>
        </CustomBox>
      </Container>
    </>
  );
};

export default Feature;
