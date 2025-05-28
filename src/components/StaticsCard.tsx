import { Card, CardContent, Typography,Grid } from "@mui/material";


export default function StatCard({ title, value, change, positive = false }:any) {
  return (

    <Grid  item xs={12} sm={6} md={3} >
      <Card sx={{ bgcolor: "#fff", height: "100%" }}>
        <CardContent>
          <Typography variant="subtitle2" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h5" sx={{ mt: 1 }}>
            {value}
          </Typography>
          <Typography variant="body2" color={positive ? "green" : "error"}>
            {change} {positive ? "Up from yesterday" : "Down from yesterday"}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
   
  );
}