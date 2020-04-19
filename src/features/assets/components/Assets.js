import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import AssetGrid from "./AssetGrid";
import AddAssetButtonGrid from "./AddAssetButtonGrid";
import { getAssetsByWorkspaceId } from "../actions/assetsActionCreators";
import AddAssetModal from "./AddAssetModal";

const Wrapper = styled.div`
  padding: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(128px, 1fr));
  margin-bottom: 1rem;
`;

function Assets() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets.assets);
  const params = useParams();
  const workspaceId = params.workspaceId;

  function onClose() {
    setIsOpen(false);
  }

  function handleOnClick() {
    setIsOpen(true);
  }

  React.useEffect(() => {
    dispatch(getAssetsByWorkspaceId(workspaceId));
  }, [dispatch, workspaceId]);

  return (
    <Wrapper>
      <Grid>
        <AddAssetButtonGrid onClick={handleOnClick} />
        {assets.map((asset) => {
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
      <AddAssetModal
        isOpen={isOpen}
        onClose={onClose}
        workspaceId={workspaceId}
      />
    </Wrapper>
  );
}

export default Assets;
