import { Switch, Route } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ContactList from "./Pages/ContactList/ContactList";
import Add from "./Pages/Add/Add";
import Errors from "./Pages/Errors/Errors";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path={["/add", "/edit"]} component={Add} />
        <Route path="/*" component={Errors} />
      </Switch>
    </div>
  );
}

export default App;
