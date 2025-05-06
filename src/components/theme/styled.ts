import { Box,TableCell,TableRow,TableContainer, Typography } from "@mui/material";
import {  styled } from "@mui/system";
import { Paper } from "@mui/material";

export const TableHeadingWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0%",
  verticalAlign: "middle",
}));

export const StyledCell = styled(TableCell, {
    shouldForwardProp: (prop) => prop !== "highlight",
  })<{ highlight?: boolean }>(({ highlight }) => ({
    ...(highlight && {
      cursor: "pointer",
      color: "#224DFF", 
      "&:hover": {
        color: "#f0f0f0", 
      },
    }),
  }));
  

  export const LabelWrapper = styled("span")(({ theme }) => ({
    backgroundColor: "#f0f0f0", 
    color: theme.palette.primary.main, 
    padding: "4px 12px",
    borderRadius: "5px",
    fontSize: "0.875rem",
    fontWeight: 400,
    display: "inline-block",
    textAlign: "center",
  }));
  
  export const StyledTableHeaderCell = styled(TableCell)(() => ({
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "18px",
    letterSpacing: "0%",
    textTransform: "uppercase",
    background: "#696A6E",
    color: "#696A6E",
    borderBottom: "none",
    backgroundColor:"#F7F8FA",
    
 }));

//full table
export const StyledTableWrapper = styled(Paper)(() => ({
    width: "1056px",
    height: "100vh",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "24px", 
    boxSizing: "border-box",
    overflow: "hidden", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer"
    

  }));

 
 export  const StyledTableRow = styled(TableRow)`
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[200]
  };

   `;


export const NameCell = styled(TableCell)`
  color: #224DFF;
`;


export const StyledTableCell = styled(TableCell)`
  padding-left: 50px;

`;


export const StyledTableContainer = styled(TableContainer) `
  flex: 1,
  overflowY: "auto",

`

 export const Heading = styled(Typography)`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  vertical-align: middle;
  margin-bottom:4px;
`;

