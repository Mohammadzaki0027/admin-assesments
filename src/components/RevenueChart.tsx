import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample data with both sales and profit
const data = Array.from({ length: 30 }, (_, i) => ({
  name: `${i + 1}k`,
  sales: Math.floor(Math.random() * 100),
  profit: Math.floor(Math.random() * 100),
}));

// Custom Legend Renderer
const renderLegend = (props: any) => {
  const { payload } = props;
  return (
    <Box sx={{ display: "flex", gap: 4, mt: 2 }}>
      {payload.map((entry: any, index: number) => (
        <Box key={`item-${index}`} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: entry.color,
            }}
          />
          <Typography variant="body2">{entry.value}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default function RevenueChart() {
  return (
    <Card>
      <CardContent>
      
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend content={renderLegend} />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#2e7d32"
              fill="#81c784"
              name="Sales"
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke="#ef6c00"
              fill="#ffb74d"
              name="Profit"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
