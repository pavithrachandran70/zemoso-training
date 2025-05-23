
import React from "react";
import MuiChip from "@mui/material/Chip"; // <-- Alias the import

interface Props {
  label: string;
}

const Chip: React.FC<Props> = ({ label }) => {
  return (
    <MuiChip
      label={label}
      variant="filled"
      size="small"
    />
  );
};

export default Chip;


