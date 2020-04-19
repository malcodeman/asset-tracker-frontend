import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import PlusIcon from "../../icons/Plus";

import {
  addWorkspace,
  getWorkspaces,
} from "../assets/actions/assetsActionCreators";
import constants from "../../constants";

const List = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 0.5rem;
  gap: 1rem;
  border-bottom: ${(props) => props.theme.borders.border200};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  @media (min-width: ${constants.BREAKPOINTS.MEDIUM_DEVICES}) {
    flex-direction: column;
    height: 100%;
    border-right: ${(props) => props.theme.borders.border200};
  }
`;

const ListItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
  border: 2px solid transparent;
  color: ${(props) => props.theme.colors.contentPrimary};
  border-radius: ${(props) => props.theme.borders.radius200};
  &:hover {
    border: 2px solid ${(props) => props.theme.colors.contentPrimary}7F;
  }
  &.active {
    border: 2px solid ${(props) => props.theme.colors.contentPrimary};
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
  border: 2px solid transparent;
  background-color: transparent;
  color: ${(props) => props.theme.colors.contentPrimary};
  border-radius: ${(props) => props.theme.borders.radius200};
  &:hover {
    background-color: ${(props) => props.theme.colors.accent}7F;
  }
`;

function Workspaces() {
  const dispatch = useDispatch();
  const workspaces = useSelector((state) => state.assets.workspaces);

  function handleAddWorkspace() {
    dispatch(addWorkspace());
  }

  React.useEffect(() => {
    dispatch(getWorkspaces());
  }, [dispatch]);

  return (
    <List>
      {workspaces.map((item) => {
        return (
          <ListItem to={`/workspaces/${item.id}`} key={item.id}>
            <span role="img" aria-label="">
              😀
            </span>
          </ListItem>
        );
      })}
      <StyledButton onClick={handleAddWorkspace}>
        <PlusIcon size={20} />
      </StyledButton>
    </List>
  );
}

export default Workspaces;
