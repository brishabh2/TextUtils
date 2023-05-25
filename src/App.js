// import './App.css';
import Text from "./Text.js";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Home from "./Home.js";
import signUp from "./signUp.js";
import signIn from "./signIn.js";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signUp" component={signUp} />
        <Route exact path="/signIn" component={signIn} />
        <Route
          exact
          path="/textUtils"
          render={(props) => (
            <Text heading="Enter the text to analyse below" {...props} />
          )}
        />
      </Switch>
    </>
  );
}

export default App;
