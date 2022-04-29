import IntrodCodi from "./Components/IntrodCodi";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette:{
    primary: {
      main:'#92ad93'
    },
    secondary:{
      main:'#846347'
    },
    terciary:{
      main:'#e6c1a3'
    },
    black:{
      main:'#000000'
    }
  },
})

function App() {
  return (
    <div>
        <IntrodCodi theme={theme}/>
    </div>
  );
}

export default App;
