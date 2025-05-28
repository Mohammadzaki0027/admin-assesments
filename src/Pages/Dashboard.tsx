import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import Topbar from "../components/Top";
import StatCard from "../components/StaticsCard";
import RevenueChart from "../components/RevenueChart";
import SalesChart from "../components/SalesChart";
const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Dashboard = () => {
  const [salesMonth, setSalesMonth] = useState("January");
  const [revenueMonth, setRevenueMonth] = useState("January");
  const handleMonthSalesChange = (event: any) => {
    // Api call for the selected month can be added here
    // For now, just update the state
    setSalesMonth(event.target.value);
  };
  const handleMonthSRevenueChange = (event: any) => {
    // Api call for the selected month can be added here
    // For now, just update the state
    setRevenueMonth(event.target.value);
  };
  const TOPBAR_HEIGHT = 64;
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#ffffff",p:6 }}>
 

      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        {/* Fixed Topbar */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: TOPBAR_HEIGHT,
            zIndex: (theme) => theme.zIndex.appBar,
            bgcolor: "background.paper",
            boxShadow: 1,
          }}
        >
          <Topbar />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            overflow: "auto",
     padding: 2,
            mt: `${TOPBAR_HEIGHT}px`,
          }}
        >
          {/* Your current content */}
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Grid container spacing={3}>
              {/* StatCards */}
              <Grid item xs={12} sm={6} md={3}>
                <StatCard
                  title="Active Users"
                  value="40,689"
                  change="↑ 8.5%"
                  positive
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatCard
                  title="Total Buyers"
                  value="10,293"
                  change="↑ 1.3%"
                  positive
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatCard
                  title="Total Sellers"
                  value="2,040"
                  change="↑ 1.8%"
                  positive
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatCard title="Total Sales" value="$89,000" change="↓ 4.3%" />
              </Grid>
            </Grid>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 4,
              }}
            >
              {/* Sales Chart Box */}
              <Box
                sx={{ p: 2, borderRadius: 2, bgcolor: "#fff", boxShadow: 1 }}
              >
                {/* Sales Chart Header + Select */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography variant="h6">Sales Details</Typography>
                  <Select
                    value={salesMonth}
                    onChange={handleMonthSalesChange}
                    size="small"
                    sx={{ minWidth: 120 }}
                  >
                    {monthArray.map((month) => (
                      <MenuItem key={month} value={month}>
                        {month}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                <SalesChart month={revenueMonth} />
              </Box>

              {/* Revenue Chart Box */}
              <Box
                sx={{ p: 2, borderRadius: 2, bgcolor: "#fff", boxShadow: 1 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography variant="h6">Revenue Overview</Typography>
                  <Select
                    value={revenueMonth}
                    onChange={handleMonthSRevenueChange}
                    size="small"
                    sx={{ minWidth: 120 }}
                  >
                    {monthArray.map((month) => (
                      <MenuItem key={month} value={month}>
                        {month}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                <RevenueChart month={revenueMonth} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
