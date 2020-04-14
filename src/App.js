import React from "react";
import { useSelector } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Layout from "./features/layout/Layout";
import Signup from "./features/auth/components/Signup";
import Signin from "./features/auth/components/Signin";
import Assets from "./features/assets/components/Assets";
import Account from "./features/account/components/Account";
import Billing from "./features/billing/components/Billing";
import history from "./routing/history";
import themes from "./themes";
import GlobalStyle from "./GlobalStyle";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <ThemeProvider theme={themes.light}>
      <Router history={history}>
        {isLoggedIn ? (
          <Layout>
            <Switch>
              <Route exact path="/" component={Assets} />
              <Route path="/billing" component={Billing} />
              <Route path="/account" component={Account} />
            </Switch>
          </Layout>
        ) : (
          <>
            <Route exact path="/" component={Signup} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
          </>
        )}
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
