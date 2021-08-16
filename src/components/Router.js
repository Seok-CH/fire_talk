import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "components/Navigation";
import Auth from "routes/Auth";
import ProfileSettings from "routes/ProfileSettings";
import MemberList from "routes/MemberList";
import MyProfile from "routes/MyProfile";
import ChattingPlace from "routes/ChattingPlace";
import News from "routes/News";
import styled from "styled-components";
import userDefaultImg from "img/userDefaultImg.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 650px;
  width: 350px;
  align-items: center;
  box-shadow: 1px 1px 10px gray;
  border-radius: 10px;
`;

const MainView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 100%;
`;

const AppRouter = ({ refreshUser, isLoggedIn, userObj, haveProfile }) => {
  const handleErrorImage = (event) => {
    event.target.src = userDefaultImg;
  };
  return (
    <Container>
      <Router basename={process.env.PUBLIC_URL}>
        <MainView>
          <Switch>
            {isLoggedIn ? (
              haveProfile ? (
                <>
                  <Route exact path="/">
                    <MemberList
                      userObj={userObj}
                      handleErrorImage={handleErrorImage}
                    />
                  </Route>
                  <Route path="/chattingplace">
                    <ChattingPlace userObj={userObj} />
                  </Route>
                  <Route path="/myprofile">
                    <MyProfile userObj={userObj} refreshUser={refreshUser} />
                  </Route>
                  <Route path="/news" userObj={userObj}>
                    <News />
                  </Route>
                </>
              ) : (
                <>
                  <Route path="/">
                    <ProfileSettings
                      userObj={userObj}
                      refreshUser={refreshUser}
                      handleErrorImage={handleErrorImage}
                    />
                  </Route>
                </>
              )
            ) : (
              <Route exact path="/">
                <Auth refreshUser={refreshUser} haveProfile={haveProfile} />
              </Route>
            )}
          </Switch>
        </MainView>
        {isLoggedIn && haveProfile && <Navigation userObj={userObj} />}
      </Router>
    </Container>
  );
};

export default AppRouter;
