import React from "react";
import { useSelector } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Layout from "./features/layout/Layout";
import Signup from "./features/auth/components/Signup";
import Signin from "./features/auth/components/Signin";
import Assets from "./features/assets/components/Assets";
import Employees from "./features/employees/components/Employees";
import Vendors from "./features/vendors/components/Vendors";
import Locations from "./features/locations/components/Locations";
import Workspaces from "./features/layout/Workspaces";
import history from "./routing/history";
import themes from "./themes";
import GlobalStyle from "./GlobalStyle";
import hooks from "./hooks";
import constants from "./constants";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const preferredDarkTheme = hooks.usePreferredTheme();
  const theme = useSelector((state) => state.settings.theme);

  function handleTheme() {
    switch (theme.value) {
      case constants.THEMES.LIGHT.value:
        return themes.light;
      case constants.THEMES.DARK.value:
        return themes.dark;
      case constants.THEMES.AUTO.value:
      default:
        return preferredDarkTheme ? themes.dark : themes.light;
    }
  }

  return (
    <ThemeProvider theme={handleTheme}>
      <Router history={history}>
        {isLoggedIn ? (
          <>
            <Route exact path="/" component={Workspaces} />
            <Route path="/workspaces/:workspaceId">
              <Layout>
                <Switch>
                  <Route
                    path="/workspaces/:workspaceId"
                    component={Assets}
                    exact
                  />
                  <Route
                    path="/workspaces/:workspaceId/employees"
                    component={Employees}
                  />
                  <Route
                    path="/workspaces/:workspaceId/vendors"
                    component={Vendors}
                  />
                  <Route
                    path="/workspaces/:workspaceId/locations"
                    component={Locations}
                  />
                </Switch>
              </Layout>
            </Route>
          </>
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
