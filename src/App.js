import Home from "./pages/home/Home";
import Single from "./pages/singlepage/Single";
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import { Switch, Route } from "react-router-dom";
import Register from "./pages/register/Register";


function App() {
  const isLoggedIn = true;
  return (
    <>
      <TopBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/write" component={isLoggedIn ? Write : Login} />
        <Route path="/single/:id" exact component={Single} />
        <Route path="/settings" exact component={isLoggedIn ? Settings : Login} />
        <Route path="/login" exact component={isLoggedIn ? Home : Login} />
        <Route path="/register" exact component={isLoggedIn ? Home : Register} />
      </Switch>
    </>
  );
}

export default App;
