import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

const FormHandling = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: 0,
    gender: ""
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "360px",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          name="name"
          sx={{ margin: "20px" }}
          value={inputs.name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
          variant="outlined"
        >
          Name
        </TextField>
        <TextField
          name="email"
          sx={{ margin: "20px" }}
          value={inputs.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          variant="standard"
        >
          Email
        </TextField>
        <TextField
          name="password"
          sx={{ margin: "20px" }}
          value={inputs.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          variant="filled"
        >
          Password
        </TextField>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prev) => ({
                    ...prev,
                    subscribe: !inputs.subscribe,
                  }))
                }
              />
            }
            label="Subscribe to Newsletter"
          />
        </FormGroup>
        <InputLabel>Age</InputLabel>
        <Select
          name="age"
          value={inputs.age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="10">Ten</MenuItem>
          <MenuItem value="20">Twenty</MenuItem>
        </Select>

        <FormControl>
          <FormLabel >Gender</FormLabel>
          <RadioGroup
            name="gender"
            value={inputs.gender}
            onChange={handleChange}
          >
            <FormControlLabel
              name="female"
              value={inputs.gender}
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormHandling;
