import React from "react";
import { useHistory } from "react-router";
import { authService } from "firebaseData";

const MyProfile = () => {
  const history = useHistory();

  const onSignOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  return <button onClick={onSignOutClick}>SignOut</button>;
};

export default MyProfile;
