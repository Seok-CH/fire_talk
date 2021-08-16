import React, { useState } from "react";
import { storageService, dbService } from "firebaseData";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  top: -35px;
  width: 100%;
`;

const ProfileName = styled.h2`
  padding: 10px 0;
  margin: 0;
  border-bottom: 2px solid #eee;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 20px auto 0 auto;
  object-fit: cover;
`;

const ImgLabel = styled.h4`
  text-align: center;
  cursor: pointer;
  margin: 10px;
`;

const InputStyle = styled.input`
  border: none;
  border-bottom: 2px solid gray;
  width: 300px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  color: white;
  background-color: orange;
  border: none;
  border-radius: 20px;
  width: 50px;
  height: 30px;
  font-weight: 500;
  margin-left: 250px;
  cursor: pointer;
`;

const ProfileSettings = ({ refreshUser, userObj, handleErrorImage }) => {
  const [newNickName, setnewNickName] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const [userState, setUserState] = useState("");

  const onPhotoChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    if (theFile) {
      reader.readAsDataURL(theFile);
      reader.onloadend = (finishedEvent) => {
        const {
          currentTarget: { result },
        } = finishedEvent;
        setUserPhoto(result);
      };
    }
  };

  const onNameChange = (event) => {
    const {
      target: { value },
    } = event;
    setnewNickName(value);
  };

  const onStateChange = (event) => {
    const {
      target: { value },
    } = event;
    setUserState(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let userPhotoUrl = "";
    if (userPhoto) {
      const userPhotoRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await userPhotoRef.putString(userPhoto, "data_url");
      userPhotoUrl = await response.ref.getDownloadURL();
    }

    userObj.updateProfile({
      displayName: newNickName,
      photoURL: userPhotoUrl,
    });

    const UserInfo = {
      userState,
      creatorId: userObj.uid,
      photoURL: userPhotoUrl,
      displayName: newNickName,
    };
    await dbService.collection("FireTalk_User").add(UserInfo);

    refreshUser();
    window.location.replace("/");
  };

  return (
    <ProfileContainer>
      <ProfileName>프로필 설정</ProfileName>
      <ProfileImg src={userPhoto} alt="userphoto" onError={handleErrorImage} />
      <form onSubmit={onSubmit}>
        <input
          id="imgFile"
          type="file"
          accept="image/*"
          onChange={onPhotoChange}
          style={{ display: "none" }}
        />
        <label htmlFor="imgFile">
          <ImgLabel>클릭하여 이미지 선택</ImgLabel>
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0px 10px",
            margin: "40px 0",
          }}
        >
          <h5 style={{ margin: "10px 0", color: "orange" }}>닉네임</h5>
          <InputStyle
            type="text"
            placeholder="..."
            onChange={onNameChange}
            value={newNickName}
          />
          <h5 style={{ margin: "10px 0", color: "orange" }}>내 상태</h5>
          <InputStyle
            type="text"
            placeholder="..."
            onChange={onStateChange}
            value={userState}
          />
          <SubmitButton type="submit">완료</SubmitButton>
        </div>
      </form>
    </ProfileContainer>
  );
};

export default ProfileSettings;
