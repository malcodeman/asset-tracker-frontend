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
  border-right: ${(props) => props.theme.borders.border200};
  @media (min-width: ${constants.BREAKPOINTS.MEDIUM_DEVICES}) {
    flex-direction: column;
    height: 100%;
  }
`;

const ListItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.contentPrimary};
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &.active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
  border: 0;
  color: ${(props) => props.theme.colors.contentPrimary};
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
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
        <PlusIcon />
      </StyledButton>
    </List>
  );
}

export default Workspaces;
