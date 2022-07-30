import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import PetsIcon from "@mui/icons-material/Pets";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          BAOLOC DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search....." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications color="action" />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/149264761_1873162592839223_5188686004286087758_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=E-ucR0H6j4kAX-urdoY&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT_EcFTjCbo2rfZ57OLRIhlLvCsLEhvIubHBd88iPjlLgw&oe=63049292"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/149264761_1873162592839223_5188686004286087758_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=E-ucR0H6j4kAX-urdoY&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT_EcFTjCbo2rfZ57OLRIhlLvCsLEhvIubHBd88iPjlLgw&oe=63049292"
          />
          <Typography variant="span">Huỳnh Bảo Lộc</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
