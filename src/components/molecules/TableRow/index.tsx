
import React from "react"
import StatusLabel from "../../atoms/Button";

import CellAtom from "../../atoms/Row";

import { NameCell, StyledTableRow } from "../../theme/styled";

import { StyledTableCell } from "../../theme/styled";


interface RowData{
    
        name:string;
        status:string;
        prenoticeDate:string;
        postnoticeDate:string;
    
}

interface Props{
    data:RowData;
}
const TableRows:React.FC <Props> = ({data})=>{
    return(
      
<StyledTableRow>
   

        <NameCell>{data.name} </NameCell>
        <CellAtom ><StatusLabel label={data.status} /></CellAtom>
        <StyledTableCell>{data.prenoticeDate}</StyledTableCell>
        <StyledTableCell>{data.postnoticeDate}</StyledTableCell>
       
</StyledTableRow>  


    )

}


export default TableRows;






