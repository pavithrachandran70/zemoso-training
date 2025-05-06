import {
    Table,
    TableBody,
    TableHead,
    TableRow,
   
  } from "@mui/material";
  import { TABLE_HEADERS,TABLE_DATA,TABLE_TYPOGRAPGHY } from "../../../utils/constants/constants";

  import TableRows from "../../molecules/TableRow";
  import { TableHeadingWrapper,StyledTableHeaderCell ,StyledTableWrapper} from "../../theme/styled";
 import { StyledTableContainer } from "../../theme/styled";
import { Heading } from "../../theme/styled";

  const FullTable: React.FC = () => {
    return (

      <>
      <StyledTableWrapper >

        <TableHeadingWrapper>
        <Heading>  {TABLE_TYPOGRAPGHY}</Heading>
        </TableHeadingWrapper>
  
        <StyledTableContainer >
          <Table>
            <TableHead>
              <TableRow>
              
                {TABLE_HEADERS.map((header) => (
                  <StyledTableHeaderCell key={header}>{header}</StyledTableHeaderCell>
                ))}
             </TableRow>
            </TableHead>
            <TableBody 
            sx={{
              width: '214px',
              height: '48px',
              borderBottomWidth: '1px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'rgba(0, 0, 0, 0.12)', // MUI default divider color
            }}
            >
              {TABLE_DATA.map((row, index) => (
                <TableRows key={index} data={row} />
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer >
        </StyledTableWrapper>
      </>
    );

};

export default FullTable;
  