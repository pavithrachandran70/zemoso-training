
import { StyledCell } from "../../theme/styled";

interface Props{

    children:React.ReactNode;
   
   
}
 const CellAtom:React.FC <Props> = ({children}:Props)=>{
    return(
      <StyledCell >
        {children}
      </StyledCell>
    )

}

export default CellAtom;