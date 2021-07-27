// Dépendances
import { Redirect, Route, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

// Composants
import { Navbar, Footer } from '../Components';
import { Accueil, Story }  from '../Pages';

const GlobalProvider = createGlobalStyle`
  body {
    background-color: ${(props:any) => props.theme.backgroundColor };
  }
`;

function App() {

  const theme = useSelector((state:any) => state.theme );

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalProvider />
        <Navbar />

        <Switch>
          <Route path="/accueil" component={ Accueil } />
          <Route path="/story" component={ Story } />
          <Route path="/project" render={ () => "<h1>A étiter Project</h1>" }/>
          <Route path="/contact" render={ () => "<h1>A étiter Contact</h1>" }/>
          <Redirect to="/accueil" />
        </Switch>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
