import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import WorkspaceSettingsForm from "./WorkspaceSettingsForm";
import {
  getWorkspaces,
  updateWorkspace,
} from "../../workspaces/actions/workspacesActionCreators";

function WorkspaceSettings() {
  const dispatch = useDispatch();
  const params = useParams();
  const workspaces = useSelector((state) => state.workspaces.workspaces);
  const workspaceId = params.workspaceId;
  const workspace = workspaces.find((item) => item.id === Number(workspaceId));

  function onSubmit(formik) {
    const payload = { workspaceId, values: formik.values };

    dispatch(updateWorkspace(payload, { formik }));
  }

  React.useEffect(() => {
    if (workspaces.length === 0) {
      dispatch(getWorkspaces());
    }
  }, [dispatch, workspaces.length]);

  return (
    <WorkspaceSettingsForm
      name={workspace.name}
      emoji={workspace.emoji}
      onSubmit={onSubmit}
    />
  );
}

export default WorkspaceSettings;
