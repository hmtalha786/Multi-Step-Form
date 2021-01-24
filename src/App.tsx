import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomizedSteppers from "./Components/Stepper";
import { Box, Typography } from "@material-ui/core";

function App() {
  return (
    <div className="FormBg">
      <div className="stepperWrapper">
        <Box pt={2} textAlign="center">
          <h1 className="heading">Sign Up Your User Account</h1>
        </Box>
        <CustomizedSteppers />
      </div>
    </div>
  );
}

export default App;
