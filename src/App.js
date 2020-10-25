import "./App.css";
import { Switch, Route } from "react-router-dom";
import { AuthProvider } from "./components/authProvider/AuthProvider";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Navigation from "./components/navigation/Navigation";
import AccountPageTEST from "./components/accountPage/AccountPageTEST";
function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />
        <Switch>
          <PrivateRoute path="/accountPageTEST" component={AccountPageTEST} />
        </Switch>
      </AuthProvider>
    </>
  );
}

export default App;
