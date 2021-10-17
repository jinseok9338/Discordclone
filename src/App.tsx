import "./App.css";
import MainPage from "./pages/MainPage";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpFormPage from "./pages/SignUpPage";
import { useReducer } from "react";
import { stateReducer } from "./StateManagement/reducer";
import { initialState } from "./StateManagement/state";
import { stateContext } from "./StateManagement/context";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";


const App = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
 

  return (
    <stateContext.Provider value={{ state, dispatch }}>
      <AuthProvider>
      <Router>
        <Switch>
        <ProtectedRoute path='/' exact component={MainPage} />
          <Route path="/Login" component={LoginPage} />
          <Route path="/SignUp" component={SignUpFormPage} />
        </Switch>
      </Router>
       </AuthProvider>
    </stateContext.Provider>
  );
};

export default App;
