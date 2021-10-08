import "./App.css";
import MainPage from "./pages/MainPage";
import { Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import SignUpFormPage from "./pages/SignUpPage";

function App() {
  return (<div>
    <Route path="/Login" component={LoginPage} />
    <Route path="/main" component={MainPage} />
    <Route path="/SignUp" component={SignUpFormPage} />
    </div>
  );
}

export default App;
