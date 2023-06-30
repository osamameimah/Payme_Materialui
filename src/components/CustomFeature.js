import { Box, Typography, styled } from "@mui/material";

let CustomFeature = ({ titleInfo, cardInfo,image }) => {
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

  const CardInfoBox = styled(Box)(({ theme }) => ({
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

  const TitleInfoTypography = styled(Typography)(({ theme }) => ({
    fontSize: "26px",
    fontWeight: "600",
    color: "#000350",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      fontWeight: "400",
    },
  }));

  return (
    <>
      <CardBox>
        <Box
          sx={{
            background: "white",
            padding: "32px",
            borderRadius: "16px",
          }}
        >
          <img src={image} style={{ maxWidth: "100%" }} />
        </Box>
        <Box>
          <TitleInfoTypography>{titleInfo}</TitleInfoTypography>
          <CardInfoBox>{cardInfo}</CardInfoBox>
        </Box>
      </CardBox>
    </>
  );
};

export default CustomFeature;
