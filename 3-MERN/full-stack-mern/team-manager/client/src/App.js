import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import Detail from './views/Detail';
import Update from './views/Update';
import Status from './views/Status';
import './App.css';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const App = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <div className="bg-transparent"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 0,
      }}
    >
      <Container
        sx={{
          display: 'block',
          minWidth: '100%',
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
          p: 1,
        }}
      >
        <div className="nav d-flex align-items-center justify-content-between mx-auto">
          <h3 className="m-3 mb-0 pb-0">Team Manager</h3>
          <IconButton sx={{ m: 3, mb: 0, pb: 0 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
        <BrowserRouter>
          <div className="container mx-auto m-4">
            <Switch>
              <Route exact path='/'>
                <Main />
              </Route>
              <Route exact path='/new'>
                <Create />
              </Route>
              <Route exact path='/:id'>
                <Detail />
              </Route>
              <Route exact path='/update/:id'>
                <Update />
              </Route>
              <Route exact path='/status/game/1'>
                <Status />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}