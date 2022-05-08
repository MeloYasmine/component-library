import { Button } from './Components/Button';
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from './Components/GlobalStyles/ThemeProvider';
import { StyledDiv } from './styles';


function App() {
  return (
    
      <StyledEngineProvider injectFirst>
        <ThemeProvider >
          <Button color='primary' variant='contained'>BOTÃO</Button>
        </ThemeProvider>
      </StyledEngineProvider>
   
  );
}

export default App;
