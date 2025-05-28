import { Box,  } from "@mui/material";


import Topbar from "../components/Top";

import CustomTable from "../components/CustomeTable";
const tableData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/50',
    title: 'Item One',
    description: 'This is the description for item one.',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/50',
    title: 'Item Two',
    description: 'This is the description for item two.',
  },
];

const   DealerShip = () => {

  const TOPBAR_HEIGHT = 64;
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f5",p:6 }}>
  

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
            p: 2,
            mt: `${TOPBAR_HEIGHT}px`,
          }}
        >
       <CustomTable tableData={tableData}/>
        </Box>
      </Box>
    </Box>
  );
};

export default DealerShip;
