import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { dbService } from "firebaseData";
import MemberBox from "components/MemberBox";

const MemberListContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const MemberListName = styled.h2`
  padding: 10px 0;
  margin: 3px 20px;
  border-bottom: 2px solid #eee;
`;

const MemberListBox = styled.div`
  padding: 0px 20px;
  height: 390px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3.5px;
    background-color: #ced4da;

    &:hover {
      background-color: #adb5bd;
    }
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
`;

const MemberMeBox = styled.div`
  display: flex;
  border-radius: 10px;
  height: 90px;
  margin: 5px 20px;
  padding: 5px;
  border: 3px dotted #eee;
`;

const MemberMeImg = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
  border-radius: 50%;
`;

const MemberMeState = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const MemberMeDisplay = styled.h3`
  margin: 2px 0;
`;
const MemberMeStateName = styled.div`
  font-size: 12px;
  color: gray;
`;

const MemberBoxName = styled.h4`
  color: orange;
  margin: 10px 25px;
`;
const MemberList = ({ userObj, handleErrorImage }) => {
  const [userImg, setUserImg] = useState("");
  const [userName, setUserName] = useState("");
  const [userStates, SetUserStates] = useState("");
  const [allUser, SetAllUser] = useState([]);

  const getInfo = async () => {
    await dbService
      .collection("FireTalk_User")
      .where("creatorId", "==", userObj.uid)
      .onSnapshot((snapshot) => {
        const MyInfoData = snapshot.docs.map((doc) => doc.data())[0];
        if (MyInfoData) {
          SetUserStates(MyInfoData.userState);
          setUserName(MyInfoData.displayName);
          setUserImg(MyInfoData.photoURL);
        }
      });
  };

  const getAllInfo = async () => {
    await dbService.collectionGroup("FireTalk_User").onSnapshot((snapshot) => {
      const AllInfoData = snapshot.docs.map((doc) => doc.data());

      SetAllUser(AllInfoData.filter((user) => user.creatorId !== userObj.uid));
    });
  };
  useEffect(() => {
    getInfo();
    getAllInfo();
  }, []);

  return (
    <MemberListContainer>
      <MemberListName>회원</MemberListName>
      <MemberMeBox>
        <MemberMeImg
          src={userImg || userObj.photoURL}
          alt="MeImg"
          onError={handleErrorImage}
        />
        <MemberMeState>
          <MemberMeDisplay>{userName || userObj.displayName}</MemberMeDisplay>
          <MemberMeStateName>{userStates || ""}</MemberMeStateName>
        </MemberMeState>
      </MemberMeBox>
      <MemberBoxName>회원들</MemberBoxName>
      <MemberListBox>
        {allUser.map((user) => {
          return (
            <MemberBox
              key={user.creatorId}
              user={user}
              handleErrorImage={handleErrorImage}
            />
          );
        })}
      </MemberListBox>
    </MemberListContainer>
  );
};

export default MemberList;
