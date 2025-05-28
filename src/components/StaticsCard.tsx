
import { Card, CardContent, Typography } from '@mui/material';

 const StatCard = ({ title, value, change, positive }: any) => (
  <Card sx={{ bgcolor: '#fff', height: '100%', flex: '1 1 150px', m: 1 }}>
    <CardContent>
      <Typography variant="subtitle2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h5" sx={{ mt: 1 }}>
        {value}
      </Typography>
      <Typography variant="body2" color={positive ? 'green' : 'error'}>
        {change} {positive ? 'Up from yesterday' : 'Down from yesterday'}
      </Typography>
    </CardContent>
  </Card>
);


export default StatCard