 import { Box, Container, Typography,styled } from "@mui/material";
import Frame from "../resourses/images/Frame.svg";
let Steps = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    // padding: "100px 108px",
    // background: "red",
    // height: "800px",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    columnGap: "120px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0",
      flexDirection: "column",
 
    },
    
  }));
  return (
    <>
      <Container sx={{ marginTop: "100px" }}>
        <CustomBox>
          <Box>
            <img src={Frame} style={{maxWidth:"100%"}} />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "48px" }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", rowGap: "12px" }}
            >
              <Typography
                variant="h1"
                sx={{ fontSize: "30px", fontWeight: "600", color: "#1443BD" }}
              >
                Start Now With 3 Steps
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "16px", color: "#1443BD" }}
              >
                Besome a Peyme customer in the easiest way just simple, fast and
                accurate steps. It won’t take your time to experience{" "}
              </Typography>
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", rowGap: "12px" }}
            >
              <Typography
                variant="h1"
                sx={{ fontSize: "30px", fontWeight: "600", color: "#1443BD" }}
              >
                Step 1: Create Your Account
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "16px", color: "#1443BD" }}
              >
                Besome a Peyme customer in the easiest way just simple, fast and
                accurate steps. It won’t take your time to experience{" "}
              </Typography>
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", rowGap: "12px" }}
            >
              <Typography
                variant="h1"
                sx={{ fontSize: "30px", fontWeight: "600", color: "#1443BD" }}
              >
                Step2: Link Your Cards
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "16px", color: "#1443BD" }}
              >
                Besome a Peyme customer in the easiest way just simple, fast and
                accurate steps. It won’t take your time to experience{" "}
              </Typography>
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", rowGap: "12px" }}
            >
              <Typography
                variant="h1"
                sx={{ fontSize: "30px", fontWeight: "600", color: "#1443BD" }}
              >
                All Done
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "16px", color: "#1443BD" }}
              >
                Besome a Peyme customer in the easiest way just simple, fast and
                accurate steps. It won’t take your time to experience{" "}
              </Typography>
            </Box>
          </Box>
        </CustomBox>
      </Container>
    </>
  );
};

export default Steps;
