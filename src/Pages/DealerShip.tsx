import { Box,  } from "@mui/material";


import Topbar from "../components/Top";
import { AutoDealerShipEndPoint, deleteArcticleEndpoint } from "../constant/config.ts";
import CustomTable from "../components/CustomeTable";
import React from "react";
import { backend_url } from "../origin";

import Sidebar from "../components/SideBar.tsx";
import axios from "axios";
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
  const getDealerShipData = async () => {
    try {
      const response = await fetch(`${backend_url}${AutoDealerShipEndPoint}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  React.useEffect(() => {
getDealerShipData();
  }, []);
 const handleDeleteDealerShip = (id:string) => {
console.log("Delete DealerShip with ID:", id);
axios.delete(`${backend_url}${deleteArcticleEndpoint}/${id}`)
  .then(response => {
    console.log('Delete successful:', response.data);
  })
  .catch(error => {
    console.error('Error deleting:', error);
  });

  }
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f5",p:6 }}>
  
<Sidebar/>
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
       <CustomTable tableData={tableData} handleDeleteDealerShip={handleDeleteDealerShip}/>
        </Box>
      </Box>
    </Box>
  );
};

export default DealerShip;
