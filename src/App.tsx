import "./App.css";
import MainPage from "./pages/MainPage";
import { Route, Switch, BrowserRouter as Router  } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpFormPage from "./pages/SignUpPage";
import { useReducer } from "react";
import { stateReducer } from "./StateManagement/reducer";
import { initialState, State } from "./StateManagement/state";
import { stateContext } from "./StateManagement/context";



const App =()=> {
  
  const [state, dispatch] = useReducer(stateReducer, initialState) // Can't use async in useReducer... Shit ... 
  
  return (
    < stateContext.Provider value = {{ state, dispatch }
}>
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
    </stateContext.Provider>
  );
}

export default App;
