import "./App.css";
import MainPage from "./pages/MainPage";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpFormPage from "./pages/SignUpPage";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";


const App = () => {


  return (
      <AuthProvider>
      <Router>
        <Switch>
        <ProtectedRoute path='/' exact component={MainPage} />
          <Route path="/Login" component={LoginPage} />
          <Route path="/SignUp" component={SignUpFormPage} />
        </Switch>
      </Router>
       </AuthProvider>
  );
};

export default App;
