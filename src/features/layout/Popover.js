import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { ChevronDown, LogOut } from "react-feather";
import { StatefulPopover, PLACEMENT } from "@malcodeman/react-popover";
import { useHistory } from "react-router-dom";

import { ParagraphSmall, ParagraphMedium } from "../../components/typography";

import { logout } from "../auth/actions/authActionCreators";

const StyledPopover = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.contentPrimary};
  &:hover {
    background-color: ${(props) => props.theme.colors.accent}7F;
  }
`;

const WorkspaceNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledParagraphSmall = styled(ParagraphMedium)`
  margin-right: 0.25rem;
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 270px;
  max-width: 360px;
  z-index: 1;
  border: ${(props) => props.theme.borders.border200};
  border-radius: ${(props) => props.theme.borders.radius200};
  background-color: ${(props) => props.theme.colors.backgroundTertiary};
`;

const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
  padding: 0.25rem 1rem;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borders.radius200};
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StyledLogOut = styled(LogOut)`
  margin-right: 0.5rem;
`;

function Popover(props) {
  const { workspaceId, openSettings } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const workspaces = useSelector((state) => state.workspaces.workspaces);
  const workspace =
    workspaces.find((item) => item.id === Number(workspaceId)) || {};
  const myself = useSelector((state) => state.users.myself);

  function content({ close }) {
    function handleSettings() {
      openSettings();
      close();
    }

    function handleLogOut() {
      dispatch(logout());
      localStorage.removeItem("token");
      history.push("/");
    }

    return (
      <Overlay>
        <Menu>
          <MenuItem>
            <ParagraphSmall>Administration</ParagraphSmall>
          </MenuItem>
          <MenuItem>
            <ParagraphSmall>Tools</ParagraphSmall>
          </MenuItem>
          <MenuItem onClick={handleSettings}>
            <ParagraphSmall>Settings</ParagraphSmall>
          </MenuItem>
          <MenuItem onClick={handleLogOut}>
            <StyledLogOut size={16} />
            <ParagraphSmall>Log out ({myself.email})</ParagraphSmall>
          </MenuItem>
        </Menu>
      </Overlay>
    );
  }

  return (
    <StatefulPopover content={content} placement={PLACEMENT.BOTTOM}>
      <StyledPopover>
        <WorkspaceNameWrapper>
          <StyledParagraphSmall>{workspace.name}</StyledParagraphSmall>
          <ChevronDown size={16} />
        </WorkspaceNameWrapper>
        <ParagraphSmall>
          {myself.firstName} {myself.lastName}
        </ParagraphSmall>
      </StyledPopover>
    </StatefulPopover>
  );
}

export default Popover;
