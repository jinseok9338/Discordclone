import "./App.css";
import MainPage from "./pages/MainPage";
import { Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";

function App() {
  return (<div>
    <Route path="/" component={LoginPage} />
    <Route path="/main" component={MainPage} />
    </div>
  );
}

export default App;
