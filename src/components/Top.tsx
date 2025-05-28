
import { AppBar, Toolbar, Box, InputBase, IconButton, Avatar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

const TopBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000", boxShadow: 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left side (optional logo or menu button) */}
        <Box sx={{ width: "200px" }}>
          <Typography variant="h6" noWrap>
            Free Shops
          </Typography>
        </Box>

        {/* Center Search */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f0f0f0",
              px: 2,
              borderRadius: 2,
              width: "100%",
              maxWidth: 500,
            }}
          >
            <SearchIcon sx={{ mr: 1 }} />
            <InputBase placeholder="Search…" fullWidth />
          </Box>
        </Box>

        {/* Right side (user profile and notifications) */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton sx={{color: "blue" }}>
            <NotificationsIcon />
          </IconButton>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <Typography variant="body2">Zaki Shaikh</Typography>
            <Typography variant="caption" color="text.secondary">
              Admin
            </Typography>
          </Box>
          <Avatar src="/path/to/profile.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
