import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dbService, storageService } from "firebaseData";
import styled, { css } from "styled-components";

const ChattyCon = styled.div`
  display: flex;
  margin: 5px 0;
  ${(props) =>
    props.isOwner &&
    css`
      flex-direction: row-reverse;
    `}
`;

const Chatty = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  ${(props) =>
    props.isOwner &&
    css`
      align-items: flex-end;
    `}
`;

const Chatte = styled.span`
  padding: 10px 10px;
  max-width: 200px;
  border-radius: 10px;
  font-size: 10px;
  line-height: 1.5;
  background-color: #eeeeee;

  ${(props) =>
    props.isOwner &&
    css`
      background-color: #facc2e;
    `}
`;

const ChateeImg = styled.img`
  margin: 5px 0;
  object-fit: cover;
  max-width: 250px;
  max-height: 200px;
  border-radius: 20px;
`;

const EditButton = styled.button`
  background: transparent;
  border: none;
  &:hover {
    color: black;
  }
  color: #ccc;
  cursor: pointer;
`;

const Chat = ({ talkObj, isOwner, scrollRef }) => {
  const onDeleteClick = async () => {
    const ok = window.confirm("정말로 지우시겠습니까?");
    if (ok) {
      await dbService.doc(`FireTalk/${talkObj.id}`).delete();
      if (talkObj.attachmentUrl !== "")
        await storageService.refFromURL(talkObj.attachmentUrl).delete();
    }
  };

  return (
    <ChattyCon isOwner={isOwner} ref={scrollRef}>
      <Chatty isOwner={isOwner}>
        <Chatte isOwner={isOwner}>{talkObj.text}</Chatte>

        {talkObj.attachmentUrl && (
          <ChateeImg src={talkObj.attachmentUrl} alt="thumbnail" />
        )}
      </Chatty>
      {isOwner && (
        <EditButton onClick={onDeleteClick}>
          <FontAwesomeIcon icon={faTimes} />
        </EditButton>
      )}
    </ChattyCon>
  );
};

export default Chat;
