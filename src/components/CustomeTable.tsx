// components/CustomTable.tsx

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,

  Avatar,
  Typography,
  Box,
  Button
} from '@mui/material';




const CustomTable = ({tableData,handleDeleteDealerShip}:any) => {
  
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData?.map((row:any) => (
            <TableRow key={row.id} hover>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                <Avatar src={row.image} alt={row.title} />
              </TableCell>
              <TableCell>
                <Typography variant="body1">{row.title}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" color="text.secondary">
                  {row.description}
                </Typography>
              </TableCell>
              <TableCell>
                <Box display="flex" gap={1}>
    <Button variant="contained" color="success">
  Edit
</Button>
            <Button variant="contained" color="error" onClick={() => handleDeleteDealerShip(row._id)}>
  Delete
</Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
