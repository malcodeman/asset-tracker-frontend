import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AccountForm from "./AccountForm";
import {
  getMyself,
  updateMyself,
} from "../../users/actions/usersActionCreators";

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
    <AccountForm
      email={myself.email}
      firstName={myself.firstName}
      lastName={myself.lastName}
      company={myself.company}
      onSubmit={onSubmit}
    />
  );
}

export default Account;
