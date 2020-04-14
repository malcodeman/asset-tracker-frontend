import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Input, SIZE } from "../../../components/input";
import {
  ParagraphSmall,
  ParagraphXSmall,
} from "../../../components/typography";
import GridIcon from "../../../icons/Grid";
import ListIcon from "../../../icons/List";
import { VIEWS } from "../constants";
import UsersIcon from "../../../icons/Users";
import PlusIcon from "../../../icons/Plus";
import { addWorkspace } from "../actions/assetsActionCreators";

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.contentPrimary};
  background-color: ${(props) =>
    props.selected ? props.theme.colors.backgroundSecondary : "transparent"};
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 140px);
  overflow: auto;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.contentPrimary};
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  border-radius: ${(props) => props.theme.borders.radius200};
`;

const StyledParagraphXSmall = styled(ParagraphXSmall)`
  text-transform: uppercase;
  padding: 0 0.5rem;
`;

const StyledUsersIcon = styled(UsersIcon)`
  margin-right: 0.5rem;
`;

const StyledPlusIcon = styled(PlusIcon)`
  margin-right: 0.5rem;
`;

function Sidebar(props) {
  const { search, setSearch, view, setView } = props;
  const dispatch = useDispatch();
  const workspaces = useSelector((state) => state.assets.workspaces);

  function handleAddWorkspace() {
    dispatch(addWorkspace());
  }

  return (
    <div>
      <InputWrapper>
        <Input
          placeholder="Find an asset or workspace"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          size={SIZE.compact}
        />
        <IconWrapper
          selected={view === VIEWS.grid}
          onClick={() => setView(VIEWS.grid)}
        >
          <GridIcon />
        </IconWrapper>
        <IconWrapper
          selected={view === VIEWS.list}
          onClick={() => setView(VIEWS.list)}
        >
          <ListIcon />
        </IconWrapper>
      </InputWrapper>
      <List>
        <StyledParagraphXSmall>Workspaces</StyledParagraphXSmall>
        {workspaces.map((item) => (
          <ListItem>
            <StyledUsersIcon />
            <ParagraphSmall>{item.name}</ParagraphSmall>
          </ListItem>
        ))}
        <ListItem onClick={handleAddWorkspace}>
          <StyledPlusIcon />
          <ParagraphSmall>Add a workspace</ParagraphSmall>
        </ListItem>
      </List>
    </div>
  );
}

Sidebar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  view: PropTypes.oneOf([VIEWS.grid, VIEWS.list]),
  setView: PropTypes.func.isRequired,
};

export default Sidebar;
