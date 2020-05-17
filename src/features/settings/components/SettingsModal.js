import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Modal } from "@malcodeman/react-modal";

import { NAVIGATION } from "../constants/settingsConstants";

import {
  ParagraphSmall,
  ParagraphXSmall,
} from "../../../components/typography";
import Account from "./Account";
import WorkspaceSettings from "./WorkspaceSettings";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  width: 960px;
  height: calc(100vh - 100px);
  max-height: 690px;
  max-width: calc(100vw - 100px);
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

const SideNavigation = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.colors.contentPrimary};
  background-color: ${(props) => props.active && props.theme.colors.accent};
  &:hover {
    ${(props) =>
      props.active
        ? css`
            background-color: ${(props) => props.theme.colors.accent};
          `
        : css`
            background-color: ${(props) => props.theme.colors.accent}7F;
          `}
  }
  svg {
    margin-right: 0.5rem;
  }
`;

const StyledParagraphXSmall = styled(ParagraphXSmall)`
  padding: 0.5rem 1rem;
  text-transform: uppercase;
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  margin: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

const Main = styled.main`
  padding: 0.5rem 1rem;
`;

function SettingsModal(props) {
  const { isOpen, onClose } = props;
  const [active, setActive] = React.useState(0);

  function renderMain() {
    switch (active) {
      case 0:
      default:
        return <Account />;
      case 1:
        return <p>Notifications</p>;
      case 2:
        return <WorkspaceSettings />;
      case 3:
        return <p>Members</p>;
      case 4:
        return <p>Upgrade</p>;
      case 5:
        return <p>Security</p>;
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Grid>
        <SideNavigation>
          <StyledParagraphXSmall>Me</StyledParagraphXSmall>
          {NAVIGATION.me.map((item) => {
            return (
              <ListItem
                key={item.id}
                active={active === item.id}
                onClick={() => setActive(item.id)}
              >
                <item.icon size={16} />
                <ParagraphSmall>{item.title}</ParagraphSmall>
              </ListItem>
            );
          })}
          <Divider />
          <StyledParagraphXSmall>Workspace</StyledParagraphXSmall>
          {NAVIGATION.workspace.map((item) => {
            return (
              <ListItem
                key={item.id}
                active={active === item.id}
                onClick={() => setActive(item.id)}
              >
                <item.icon size={16} />
                <ParagraphSmall>{item.title}</ParagraphSmall>
              </ListItem>
            );
          })}
          <Divider />
        </SideNavigation>
        <Main>{renderMain()}</Main>
      </Grid>
    </Modal>
  );
}

SettingsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SettingsModal;
