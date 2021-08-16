import React from "react";
import styled from "styled-components";

const MemberBoxContainer = styled.div`
  display: flex;

  padding: 10px 10px;
  border-bottom: 1px solid #eee;
`;

const MemberBoxImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const MemberBoxState = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 7px;
`;
const MemberBoxDisplay = styled.h5`
  margin: 2px 0;
  font-weight: 500;
  font-size: 13px;
`;
const MemberBoxStateName = styled.div`
  font-size: 5px;
  color: gray;
`;

const MemberBox = ({ user, handleErrorImage }) => {
  return (
    <MemberBoxContainer>
      <MemberBoxImg src={user.photoURL} onError={handleErrorImage} />
      <MemberBoxState>
        <MemberBoxDisplay>{user.displayName}</MemberBoxDisplay>
        <MemberBoxStateName>{user.userState}</MemberBoxStateName>
      </MemberBoxState>
    </MemberBoxContainer>
  );
};

export default MemberBox;
