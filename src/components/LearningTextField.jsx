import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";

const LearningTextField = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <TextField
        sx={{ margin: "20px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        variant="outlined"
      >
        Name
      </TextField>
      <TextField
        sx={{ margin: "20px" }}
        type="email"
        placeholder="Email"
        variant="standard"
      >
        Email
      </TextField>
      <TextField
        sx={{ margin: "20px" }}
        type="password"
        placeholder="Password"
        variant="filled"
      >
        Password
      </TextField>
      <TextField
        sx={{ margin: "20px" }}
        id="filled-basic"
        label="Filled"
        variant="filled"
      />
      <Typography>{name}</Typography>
    </div>
  );
};

export default LearningTextField;
