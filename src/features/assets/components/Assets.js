import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import constants from "../../../constants";
import { VIEWS } from "../constants";
import Sidebar from "./Sidebar";
import AssetGrid from "./AssetGrid";
import AddAssetButtonGrid from "./AddAssetButtonGrid";
import { getWorkspaces } from "../actions/assetsActionCreators";
import { ParagraphXSmall } from "../../../components/typography";

const Wrapper = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-gap: 1rem;
  @media (min-width: ${constants.BREAKPOINTS.MEDIUM_DEVICES}) {
    grid-template-columns: 1fr 3fr;
  }
`;

const SidebarWrapper = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(128px, 1fr));
  margin-bottom: 1rem;
`;

function Assets() {
  const [search, setSearch] = React.useState("");
  const [view, setView] = React.useState(VIEWS.grid);
  const dispatch = useDispatch();
  const workspaces = useSelector((state) => state.assets.workspaces);

  React.useEffect(() => {
    dispatch(getWorkspaces());
  }, [dispatch]);

  return (
    <Wrapper>
      <SidebarWrapper>
        <Sidebar
          search={search}
          setSearch={setSearch}
          view={view}
          setView={setView}
        />
      </SidebarWrapper>
      <div>
        {workspaces.map((workspace) => {
          return (
            <div key={workspace.id}>
              <ParagraphXSmall>{workspace.name}</ParagraphXSmall>
              <Grid>
                <AddAssetButtonGrid />
                {workspace.assets.map((asset) => {
                  return (
                    <AssetGrid
                      key={asset.tag}
                      tag={asset.tag}
                      description={asset.description}
                      location={asset.location}
                    />
                  );
                })}
              </Grid>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Assets;
