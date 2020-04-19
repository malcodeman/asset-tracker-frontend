import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Workspaces from "./Workspaces";
import SideNavigation from "./SideNavigation";
import constants from "../../constants";

const Grid = styled.div`
  display: grid;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  @media (min-width: ${constants.BREAKPOINTS.MEDIUM_DEVICES}) {
    grid-template-columns: 48px 256px 1fr;
    height: 100vh;
  }
`;

function Layout(props) {
  const { children } = props;

  return (
    <Grid>
      <Workspaces />
      <SideNavigation />
      <main>{children}</main>
    </Grid>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
