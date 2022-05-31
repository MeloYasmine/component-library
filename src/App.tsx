import { Button } from './Components/Button';
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from './Components/GlobalStyles/ThemeProvider';
import { Select } from './Components/Select';
import { ButtonAppBar } from './Components/ButtonAppBar';



function App() {
  return (    
      <StyledEngineProvider injectFirst>
        <ThemeProvider >
          <ButtonAppBar color='primary' />
          <Button color='primary' variant='contained'>BOTÃO</Button>
          <br/>
          <Select label='Value' value='VALUE' variant='outlined'></Select>
        </ThemeProvider>
      </StyledEngineProvider>   
  );
}

export default App;
