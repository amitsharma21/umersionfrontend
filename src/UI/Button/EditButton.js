import React from "react";

import { Button } from "@mui/material";

const EditButton = ({ clicked, value, type }) => {
  return (
    <Button variant="contained" color="primary" type={type} onClick={clicked}>
      {value}
    </Button>
  );
};

export default EditButton;
