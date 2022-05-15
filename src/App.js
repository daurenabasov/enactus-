import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Main from "./components/pages/home/Main";
import Auth from "./components/pages/Auth/auth/Auth";
import Register from "./components/pages/Auth/register/Register";



function App() {
  return (
  <Router>
    <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Main/>
          </Route>
    </Switch>
  </Router>
    
  );
}

export default App;
