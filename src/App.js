import IntrodCodi from "./Components/IntrodCodi";
import { createTheme } from '@mui/material/styles';
import Header from "./Components/Header";
import { useState } from "react";
import MyPrint from "./Components/MyPrint";
import Bescanviar from "./Components/Bescanviar";
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

  const [page,setPage] = useState(1);
  const [greenPoints, setGreenPoints] = useState(0);
  
  return (
    <div>
        <Header greenPoints={greenPoints} theme={theme} page = {page} setPage={setPage}/>
        {page===3 ? <MyPrint/> : page===2 ? <Bescanviar /> :
                    <IntrodCodi greenPoints={greenPoints} setGreenPoints={setGreenPoints} setPage={setPage} theme={theme}/>}
        
    </div>
  );
}

export default App;
