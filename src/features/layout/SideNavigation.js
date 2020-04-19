import React from "react";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";

import { ParagraphSmall } from "../../components/typography";
import UsersIcon from "../../icons/Users";
import BoxIcon from "../../icons/Box";
import TruckIcon from "../../icons/Truck";
import MapPinIcon from "../../icons/MapPin";
import constants from "../../constants";

const List = styled.div`
  display: flex;
  border-right: ${(props) => props.theme.borders.border200};
  overflow-x: auto;
  @media (min-width: ${constants.BREAKPOINTS.MEDIUM_DEVICES}) {
    flex-direction: column;
    height: 100%;
  }
`;

const ListItem = styled(NavLink)`
  display: flex;
  align-items: center;
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
  const workspaceId = params.workspaceId;

  return (
    <List>
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
