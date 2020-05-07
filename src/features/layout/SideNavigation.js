import React from "react";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ParagraphSmall } from "../../components/typography";
import UsersIcon from "../../icons/Users";
import BoxIcon from "../../icons/Box";
import TruckIcon from "../../icons/Truck";
import MapPinIcon from "../../icons/MapPin";
import constants from "../../constants";
import { resetWorkspace } from "../workspaces/actions/workspacesActionCreators";
import Popover from "./Popover";

const List = styled.div`
  display: flex;
  border-bottom: ${(props) => props.theme.borders.border200};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  overflow-x: auto;
  @media (min-width: ${constants.BREAKPOINTS.MEDIUM_DEVICES}) {
    flex-direction: column;
    height: 100%;
    border-right: ${(props) => props.theme.borders.border200};
  }
`;

const ListItem = styled(NavLink)`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.contentPrimary};
  &:hover {
    background-color: ${(props) => props.theme.colors.accent}7F;
  }
  &.active {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

const StyledBoxIcon = styled(BoxIcon)`
  margin-right: 0.5rem;
`;

const StyledUsersIcon = styled(UsersIcon)`
  margin-right: 0.5rem;
`;

const StyledTruckIcon = styled(TruckIcon)`
  margin-right: 0.5rem;
`;

const StyledMapPinIcon = styled(MapPinIcon)`
  margin-right: 0.5rem;
`;

function SideNavigation() {
  const params = useParams();
  const dispatch = useDispatch();
  const workspaceId = params.workspaceId;

  React.useEffect(() => {
    dispatch(resetWorkspace());
  }, [dispatch, workspaceId]);

  return (
    <List>
      <Popover workspaceId={workspaceId} />
      <ListItem to={`/workspaces/${workspaceId}`} exact>
        <StyledBoxIcon />
        <ParagraphSmall>Assets</ParagraphSmall>
      </ListItem>
      <ListItem to={`/workspaces/${workspaceId}/employees`}>
        <StyledUsersIcon />
        <ParagraphSmall>Employees</ParagraphSmall>
      </ListItem>
      <ListItem to={`/workspaces/${workspaceId}/vendors`}>
        <StyledTruckIcon />
        <ParagraphSmall>Vendors</ParagraphSmall>
      </ListItem>
      <ListItem to={`/workspaces/${workspaceId}/locations`}>
        <StyledMapPinIcon />
        <ParagraphSmall>Locations</ParagraphSmall>
      </ListItem>
    </List>
  );
}

export default SideNavigation;
