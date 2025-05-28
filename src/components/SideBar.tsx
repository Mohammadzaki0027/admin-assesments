import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import StoreIcon from "@mui/icons-material/Store";
import { NavLink } from "react-router-dom";

const drawerWidth = 250;

const items = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Article", icon: <ArticleIcon />, path: "/article" },
  { text: "Auto dealership", icon: <StoreIcon />, path: "/dealership" },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto", }}>
        <List>
          {items.map((item) => (
            <NavLink
              key={item.text}
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#1976d2" : "inherit",
              })}
            >
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e3f2fd",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </NavLink>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
