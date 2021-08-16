import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "firebaseData";
import "App.css";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 654px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [haveProfile, setHaveProfile] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });

        if (user.displayName !== null) {
          setHaveProfile(true);
        }
      } else {
        setUserObj(null);
        setHaveProfile(false);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      photoURL: user.photoURL,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <>
      {init ? (
        <Wrapper>
          <AppRouter
            refreshUser={refreshUser}
            isLoggedIn={Boolean(userObj)}
            userObj={userObj}
            haveProfile={haveProfile}
          />
        </Wrapper>
      ) : (
        "Initializing..."
      )}
    </>
  );
}

export default App;
