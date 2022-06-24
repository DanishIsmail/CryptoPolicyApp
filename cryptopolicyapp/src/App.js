import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Router, Switch, Route, Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/plugins/bootstrap/css/bootstrap.min.css";
import "../src/assets/scss/screen.css";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import Home from "./components/Home";
import Details from "./components/Details";

import AuthSidebar from "./components/auth/AuthSidebar";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import Header from "./components/common/Header";
import Nav from "./components/common/Nav";
import Dashboard from "./components/main/Dashboard";

const App = () => {
  const dispatch = useDispatch();
  // const { isLoggedIn } = useSelector((state) => state?.auth);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);


  return (
    <Router history={history}>
      {isLoggedIn ? (
        <section className="minvh-h">
          <div className="row minvh-h">
            <div className="col-md-5 col-lg-4">
              <AuthSidebar />
            </div>

            <div className="col-md-7 col-lg-8">
              <div className="authcontent-outer">
                <Switch>
                  <Route exact path={["/", "/signin"]} component={Signin} />
                  <Route exact path={"/signin"} component={Signin} />
                  <Route exact path="/signup" component={Signup} />
                  <Redirect to="/signin" />
                </Switch>
              </div>
            </div>

          </div>
        </section>
      ) : (
        <section className="main">
          <div className="row">
          <div className="col-xl-2 col-lg-3 col-sidebar">
            <Nav />
          </div>
          <div className="col-xl-10 col-lg-9 col-main">
            <Header />
          </div>
            <Switch>
              <Route exact path={["/", "/dashboard"]} component={Dashboard} />
              <Route exact path="/details" component={Details} />
              <Redirect to={"/dashboard"} />
            </Switch>
          </div>
        </section>
      )}

    </Router>
  );
};

export default App;
