"use client";

import Image from "next/image";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, FormLabel, RadioGroup, Radio } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Home() {
  const handleSubmit = () => {
    let msg = "you are good to come to the office";
    console.log(value1, value2, value3);
    if (value1 == "no" || value2 == "no" || value3 == "no") {
      msg =
        "You are not cleared to come to the office. An email will be sent to you with further details";
    }
  };

  const [value1, setValue1] = React.useState("yes");
  const [value2, setValue2] = React.useState("yes");
  const [value3, setValue3] = React.useState("yes");

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Image
        src="/ola.jpg"
        width={250}
        height={150}
        alt="Picture of the author"
      />
      <div>
        <Typography component="h1" variant="h5">
          Questionaire
        </Typography>
        <br />
        <br />
        <br />

        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Question 1
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value1}
            onChange={handleChange1}
          >
            <FormControlLabel value="yes" control={<Radio />} label="yes" />
            <FormControlLabel value="no" control={<Radio />} label="no" />
          </RadioGroup>
        </FormControl>
        <br />

        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Question 2
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value2}
            onChange={handleChange2}
          >
            <FormControlLabel value="yes" control={<Radio />} label="yes" />
            <FormControlLabel value="no" control={<Radio />} label="no" />
          </RadioGroup>
        </FormControl>
        <br />

        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Question 3
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value3}
            onChange={handleChange3}
          >
            <FormControlLabel value="yes" control={<Radio />} label="yes" />
            <FormControlLabel value="no" control={<Radio />} label="no" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={() => handleSubmit()}
          sx={{ mt: 3, mb: 2 }}
        >
          submit
        </Button>
      </div>
    </div>
  );
}
