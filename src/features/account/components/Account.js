import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import constants from "../../../constants";
import AccountForm from "./AccountForm";
import {
  getMyself,
  updateMyself,
} from "../../users/actions/usersActionCreators";

const Wrapper = styled.div`
  padding: 1rem 0;
  width: 100%;
  max-width: ${constants.BREAKPOINTS.SMALL_DEVICES};
`;

function Account() {
  const dispatch = useDispatch();
  const myself = useSelector((state) => state.users.myself);

  function onSubmit(formik) {
    const payload = { values: formik.values };

    dispatch(updateMyself(payload, { formik }));
  }

  React.useEffect(() => {
    if (myself.email.length === 0) {
      dispatch(getMyself());
    }
  }, [dispatch, myself.email.length]);

  return (
    <Wrapper>
      <AccountForm
        email={myself.email}
        firstName={myself.firstName}
        lastName={myself.lastName}
        company={myself.company}
        onSubmit={onSubmit}
      />
    </Wrapper>
  );
}

export default Account;
