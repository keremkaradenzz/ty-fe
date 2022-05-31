import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Link to="/" data-testid='home-link'>
          <Tab label="Home"></Tab>
        </Link>

        <Link to="/feedbacks" data-testid='feedbacks-link'>
          <Tab label="Feedbacks"></Tab>
        </Link>
      </Box>
      <hr />
    </Box>
  );
}
