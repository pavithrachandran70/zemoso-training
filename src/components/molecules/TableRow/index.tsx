
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

       const rowValues = [
    { key: "name", value: data.name },
    { key: "status", value: data.status },
    { key: "prenoticeDate", value: data.prenoticeDate },
    { key: "postnoticeDate", value: data.postnoticeDate },
  ];
    
    return(
      
<StyledTableRow>
   

      {rowValues.map(({ key, value }) => {
        if (key === "status") {
          return (
            <CellAtom key={key}>
              <StatusLabel label={value} />
            </CellAtom>
          );
        }

        const CellComponent = key === "name" ? CellAtom : StyledTableCell;

        return <CellComponent key={key}>{value}</CellComponent>;
      })}
       
</StyledTableRow>  


    )

}


export default TableRows;






