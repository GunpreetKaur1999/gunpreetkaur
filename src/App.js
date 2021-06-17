//Imports required
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Header from './components/Header/Header'
import Portfolio from './pages/Portfolio/Portfolio'
import Profile from './components/Profile/Profile'
import Resume from './pages/Resume/Resume'
import Footer from './components/Footer/Footer'
import{BrowserRouter as Router,Switch,Route} from "react-router-dom"

//CSS required
import './App.css';



function App() {
  return (
    <div>
      
      <Container>
        <Grid container>

        
        <Grid item xs={12} sm={12} md={4} lg={3} style={{background : "black"}}>
          <Profile />
        </Grid>
        
        
       
        
        <Grid item xs={12} sm={12} md={8} lg={9} style={{background : "red"}}>
          <Header />
          <Router>
            <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <Resume />
            </Route>
            </Switch>
          </Router>
          <Footer />
        </Grid>
        

        </Grid>
      </Container>
        
         
     
    </div>
  );
}

export default App;
