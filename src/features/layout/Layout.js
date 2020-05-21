import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import Workspaces from "./Workspaces";
import SideNavigation from "./SideNavigation";
import constants from "../../constants";
import hooks from "../../hooks";

const Grid = styled(animated.div)`
  display: grid;
  grid-template-rows: auto auto 1fr;
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
  const [sidebars, setSidebars] = React.useState(2);
  const isWide = hooks.useMedia(
    `(min-width: ${constants.BREAKPOINTS.MEDIUM_DEVICES})`
  );

  function handleSpring() {
    switch (sidebars) {
      case 0:
        return {
          to: { gridTemplateColumns: "0 0 1fr" },
        };
      case 1:
        return {
          to: { gridTemplateColumns: "0 256px 1fr" },
        };
      case 2:
      default:
        return {
          to: { gridTemplateColumns: "60px 256px 1fr" },
        };
    }
  }

  const style = useSpring({
    native: true,
    ...handleSpring(),
  });

  hooks.useKeyPress("1", () => setSidebars(0));
  hooks.useKeyPress("2", () => setSidebars(1));
  hooks.useKeyPress("3", () => setSidebars(2));

  return (
    <Grid style={isWide ? style : null}>
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
