import { Box, Button, Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
 
  IconButton,
  Typography, } from "@mui/material";


import Topbar from "../components/Top";

import CustomTable from "../components/CustomeTable";
import React from "react";
import { addArticle, articleEndpoint, deleteArcticleEndpoint } from "../constant/config";
import { backend_url } from "../origin";
import axios from "axios";


const   Article = () => {
const[tableData,setTableData]=React.useState();
const [openModal, setOpenModal] = React.useState(false);
const [title, setTitle] = React.useState("");
const [description, setDescription] = React.useState("");
const [image, setImage] = React.useState<File | null>(null);
const [titleError, setTitleError] = React.useState(false);
const [descriptionError, setDescriptionError] = React.useState(false);
const [imageError, setImageError] = React.useState(false);
const handleOpenModal = () => setOpenModal(true);
const handleCloseModal = () => setOpenModal(false);
  const TOPBAR_HEIGHT = 64;
   const getDealerShipData = async () => {
      try {
        const response = await fetch(`${backend_url}${articleEndpoint}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
  setTableData(data?.data?.docs);
        console.log(data.data.docs);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    React.useEffect(() => {
  getDealerShipData();
    }, []);
 const handleDeleteDealerShip = (id:string) => {

axios.delete(`${backend_url}${deleteArcticleEndpoint}${id}`)
  .then(response => {

    if(response.data.msg==="deleted") {

      getDealerShipData();
    }
  })
  .catch(error => {
    console.error('Error deleting:', error);
  });

  }
const handleSubmit = () => {
  let hasError = false;

  if (!title.trim()) {
    setTitleError(true);
    hasError = true;
  } else {
    setTitleError(false);
  }

  if (!description.trim()) {
    setDescriptionError(true);
    hasError = true;
  } else {
    setDescriptionError(false);
  }

  if (!image) {
    setImageError(true);
    hasError = true;
  } else {
    setImageError(false);
  }

  if (hasError) return;

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  if (image) formData.append("image", image);

  axios.post(`${backend_url}${addArticle}`, formData)
    .then(res => {

      setOpenModal(false);
      setTitle("");
      setDescription("");
      setImage(null);
      getDealerShipData();
    })
    .catch(err => {
      console.error("Error submitting:", err);
    });
};

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f5",p:6 }}>


      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>

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
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
  <Button variant="contained" color="primary" onClick={handleOpenModal}>Add</Button>
</Box>
       <CustomTable tableData={tableData} handleDeleteDealerShip={handleDeleteDealerShip}/>
        </Box>
      </Box>
   <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
  <DialogTitle>Add New Article</DialogTitle>
  <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
    <TextField
      label="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      fullWidth
      error={titleError}
      helperText={titleError ? "Title is required" : ""}
    />
    <TextField
      label="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      multiline
      rows={4}
      fullWidth
      error={descriptionError}
      helperText={descriptionError ? "Description is required" : ""}
    />
    <Button
      variant="outlined"
      component="label"
      color={imageError ? "error" : "primary"}
    >
      Upload Image
      <input
        type="file"
        hidden
        accept="image/*"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            setImage(e.target.files[0]);
            setImageError(false); // Clear error when image selected
          }
        }}
      />
    </Button>
    {image && (
      <Typography variant="body2" color="textSecondary">
        Selected: {image.name}
      </Typography>
    )}
    {imageError && (
      <Typography variant="body2" color="error">
        Image is required
      </Typography>
    )}
  </DialogContent>
  <DialogActions>
    <Button onClick={handleCloseModal}>Cancel</Button>
    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
  </DialogActions>
</Dialog>

    </Box>
  );
};

export default Article;
