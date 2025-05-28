import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = Array.from({ length: 30 }, (_, i) => ({
  name: `${i + 1}k`,
  value: Math.floor(Math.random() * 100),
}));

export default function SalesChart({month}: { month: string }) {
  return (
    <Card>
      <CardContent>
      
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3f51b5" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
