import { Button } from './Components/Button';
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from './Components/GlobalStyles/ThemeProvider';
import { Select } from './Components/Select';
import { ButtonAppBar } from './Components/ButtonAppBar';
import { ImageAvatar } from './Components/ImageAvatar';
import { LetterAvatar } from './Components/LetterAvatar/LetterAvatar';



function App() {
  return (    
      <StyledEngineProvider injectFirst>
        <ThemeProvider >
          <ButtonAppBar color='primary' />
          <Button color='primary' variant='contained'>BOTÃO</Button>
          <br/>
          <Select label='Value' value='VALUE' variant='outlined'></Select>
          <ImageAvatar variant='circular' src='https://source.unsplash.com/random/100x100' alt='Avatar'></ImageAvatar>
          <LetterAvatar>YM</LetterAvatar>
        </ThemeProvider>
      </StyledEngineProvider>   
  );
}

export default App;
