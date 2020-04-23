import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Workspaces from "./Workspaces";
import SideNavigation from "./SideNavigation";
import constants from "../../constants";

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 48px 1fr;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  @media (min-width: ${constants.BREAKPOINTS.MEDIUM_DEVICES}) {
    grid-template-rows: initial;
    grid-template-columns: 60px 256px 1fr;
  }
`;

const Main = styled.main`
  overflow-x: hidden;
`;

function Layout(props) {
  const { children } = props;

  return (
    <Grid>
      <Workspaces />
      <SideNavigation />
      <Main>{children}</Main>
    </Grid>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
