//Imports required
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "./components/Header/Header";
import Projects from "./pages/Projects/Projects"
import Profile from "./components/Profile/Profile";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//CSS required
import "./App.css";

function App() {
  return (
    <div>
      <Container maxWidth="lg" className="top_60">
        <Grid container spacing={5} >
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            
          >
            <Profile />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={9}
          > 
            <Router>
              
            <Header />
            <div className="main-content container_shadow">
            <Switch>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>
            </div>

            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
