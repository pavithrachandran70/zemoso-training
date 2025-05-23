import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/components/theme/theme";
import FullTable from "./components/organisms/DataTable";

function App() {
  return (
    <ThemeProvider theme={theme}>
<FullTable/>
    </ThemeProvider>
  );
}

export default App;






