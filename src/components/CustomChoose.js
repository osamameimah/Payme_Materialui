import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

let CustomChoose = ({ image, title, info }) => {
  return (
    <>
      <Card sx={{ boxShadow: "none" }}>
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            // height="140"
            image={image}
            style={{ maxWidth: "100%" }}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              variant="body2"
              sx={{
                fontSize: "26px",
                color: "#1443BD",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#1443BD",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              {info}
            </Typography>
          </CardContent>
        </CardActionArea>
       </Card>
    </>
  );
};

export default CustomChoose;
