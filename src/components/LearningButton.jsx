import { Button } from "@mui/material";
import React from "react";

const LearningButton = () => {
  return (
    <>
      <Button sx={{margin: "20px", border: "1px solid #000"}} color="success" variant="contained">First</Button>
      <Button sx={{margin: "20px", border: "1px solid #000"}} color="error" variant="outlined">Second</Button>
      <Button sx={{margin: "20px", border: "1px solid #000"}} color="info" variant="text">Third</Button>
    </>
  );
};

export default LearningButton;
