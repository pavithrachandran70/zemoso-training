// import { LabelWrapper } from "../../theme/styled";

// interface Props {
//   label: string;
// }

// const StatusLabel: React.FC<Props> = ({ label }) => {
//   return <LabelWrapper>{label}</LabelWrapper>;
// };

// export default StatusLabel;

import React from "react";
import Chip from "@mui/material/Chip";

interface Props {
  label: string;
}

const StatusLabel: React.FC<Props> = ({ label }) => {
  return (
    <Chip
      label={label}
      variant="filled" // You can change to "filled" if needed
      size="small"       // Optional: "small" or "medium"
    />
  );
};

export default StatusLabel;

