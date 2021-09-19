import react from "react";
import Landing from "./layout/Landing";
import AuthContextProvider from "./contexts/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Auth from "./views/auth";
import NavMenu from "./views/Menu";
import MenuItemOpenPassBook from "./views/MenuItemOpenPassBook";
import MenuItemSendVote from "./views/MenuItemSendVote";
import MenuItemVoteWithdraw from "./views/MenuItemVoteWithdraw";
import MenuItemSearch from "./views/MenuItemSearch";
import MenuItemReport from "./views/MenuItemReport";
import MenuItemRuleChange from "./views/MenuItemRuleChange";
function App() {
  const ProtectedRoute = ({ component: Component, ...rest }) => {
    let isAuthen = localStorage.getItem("islogged");
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthen ? (
            <>
              <Component {...rest} {...props} />
            </>
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
  };

  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/login"
            render={(props) => <Auth {...props} authRoute="login" />}
          />
          <Route
            exact
            path="/register"
            render={(props) => <Auth {...props} authRoute="register" />}
          />
          <ProtectedRoute exact path="/menu" component={NavMenu} />
          <ProtectedRoute exact path="/moso" component={MenuItemOpenPassBook} />
          <ProtectedRoute
            exact
            path="/lapphieugui"
            component={MenuItemSendVote}
          />
          <ProtectedRoute
            exact
            path="/lapphieurut"
            component={MenuItemVoteWithdraw}
          />
          <ProtectedRoute exact path="/tracuuso" component={MenuItemSearch} />
          <ProtectedRoute exact path="/lapbaocao" component={MenuItemReport} />
          <ProtectedRoute
            exact
            path="/thaydoiquydinh"
            component={MenuItemRuleChange}
          />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
