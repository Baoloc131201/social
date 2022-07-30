import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
];
const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={7} sx={{ justifyContent: "center" }}>
          <Avatar
            alt="Trần Thế Phương"
            src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/279138523_949080645777816_5706722931140884273_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_cHg_wTKKcEAX8qinK7&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT-CEeFZ0DEXZ2RvJOfJIL9Lm4g__nBVx-FoFRqKhdF7zA&oe=62E586A0"
          />
          <Avatar
            alt="Đỗ Tín"
            src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/273659161_2818134565156933_1617165993966584005_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=DGd6miNxbS8AX9nkMzg&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT-G9PAfZA0su3PgKlQYKY4vY76gXffcmxoDX_9WlP5mfg&oe=62E65734"
          />
          <Avatar
            alt="Nguyễn Minh Văn"
            src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/272993416_1585723425138383_7896501224850542873_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FEL8GDpTlH8AX-x3esv&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT_xYhGL-QJUxoouven3aZ9FSsO6EZ3DK2s90x4XoPCXUA&oe=62E51B8A"
          />
          <Avatar
            alt="Nguyễn Văn Giàu"
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/288663764_1028298634483955_1988232027070646404_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jIKJ93TbxioAX-0fAJ_&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT-DPpgDPRx49n1_WMBmTgO6D6zpOIujrYEO3Akl2PAc_g&oe=62E507D8"
          />
          <Avatar
            alt="Đỗ Quỳnh Anh"
            src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.18169-9/12116005_1487269904909089_1495369722806097736_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lQGgGwgkuXQAX-ikEjQ&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT_k1NGwukCBPaf7tKhGocc2B9HzP9JIPGWSD52PBK0xlw&oe=63049EBF"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {itemData.map((item) => {
            return (
              <ImageListItem>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversation
        </Typography>

        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            maxHeight: "200px",
            overflow: "auto",
            position: "relative",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Nguyễn Minh Văn"
                src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/272993416_1585723425138383_7896501224850542873_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FEL8GDpTlH8AX-x3esv&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT_xYhGL-QJUxoouven3aZ9FSsO6EZ3DK2s90x4XoPCXUA&oe=62E51B8A"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
