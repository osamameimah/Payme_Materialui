import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Logo from "../resourses/images/Logo.svg";
import CustomButton from "./CustomButton";
import React, { useState } from "react";

const Header = () => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const navItems = [
    { label: "About", link: "#" },
    { label: "Features", link: "#" },
    { label: "Download", link: "#" },
    { label: "Support", link: "#" },
    { label: "Partners", link: "#" },
  ];

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: "30px 0px 0px 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      padding: "10px 0px 30px 0px",
    },
  }));

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    fontWeight: "500",
    color: "#1443BD",
    cursor: "pointer",
    "&:hover": {
      color: "#6750A4",
    },
  }));

  const CustomNav = styled(Box)(({ theme }) => ({
    display: "flex",
    columnGap: "36px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomImg = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (
    <>
      <CustomBox>
        <CustomImg>
          <img src={Logo} alt="Logo" />
        </CustomImg>
        {isMdScreen ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <Menu />
            </IconButton>
            <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
              <List>
                <ListItem button>
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Features" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Download" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Support" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Partners" />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <CustomNav>
            {navItems.map((item) => (
              <NavLink key={item.label}>{item.label}</NavLink>
            ))}
          </CustomNav>
        )}
        <Box sx={{ display: "flex", columnGap: "10px" }}>
          <CustomButton
            backgroundColor="white"
            color="blue"
            buttonText="Sign In"
          />
          <CustomButton
            backgroundColor="blue"
            color="#FFFFFF"
            buttonText="Sign Up"
            border="1px solid blue"
          />
        </Box>
      </CustomBox>
    </>
  );
};

export default Header;
