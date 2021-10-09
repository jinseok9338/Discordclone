import "./App.css";
import MainPage from "./pages/MainPage";
import { Route, Switch, BrowserRouter as Router  } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpFormPage from "./pages/SignUpPage";




function App() {
  

  return (
    <div> 
      <Router>
      <Switch>
        {true && (
          <Route path="/main" component={MainPage} />
        )}
          <>
            <Route path="/Login" component={LoginPage} />
            <Route path="/SignUp" component={SignUpFormPage} />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
