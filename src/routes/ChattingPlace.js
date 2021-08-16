import React, { useState, useEffect, useRef } from "react";
import { dbService, storageService } from "firebaseData";
import { v4 as uuidv4 } from "uuid";
import Chat from "components/Chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowAltCircleUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ChatContainer = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "100%",
};

const ChatName = {
  margin: "3px 20px",
  padding: "10px 0",
  borderBottom: "2px solid #eee",
};

const ChatBox = styled.div`
  padding: 10px 20px;
  height: 500px;
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

const formStyle = {
  width: "100%",
  display: "flex",
};

const inputStyle = {
  width: "270px",
  outline: "none",
  borderRadius: "20px",
  border: "1px solid #ccc",
  padding: "0 10px",
};

const Attach = styled.div`
  position: absolute;
  z-index: 1;

  background: orange;
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 10px;
  bottom: 45px;
  left: 30px;
  box-shadow: 1px 1px 5px gray;
`;

const XButton = styled.button`
  border: none;
  background: transparent;
  color: gray;
  margin: 0 10px;
  &:hover {
    color: black;
  }
  cursor: pointer;
`;

const ChattingPlace = ({ userObj }) => {
  const [talk, setTalk] = useState("");
  const [talks, setTalks] = useState([]);
  const [attachment, setAttachment] = useState("");

  const scrollRef = useRef();

  useEffect(() => {
    const unsubscribe = dbService
      .collection("FireTalk")
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) => {
        const talkArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTalks(talkArray);
        return () => unsubscribe();
      });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }

    const talkObj = {
      text: talk,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("FireTalk").add(talkObj);
    setTalk("");
    setAttachment("");

    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTalk(value);
  };

  const onFileChange = (event) => {
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
        setAttachment(result);
      };
    }
  };

  const onClearAttachment = () => setAttachment(null);

  return (
    <div style={ChatContainer}>
      <h2 style={ChatName}>채팅</h2>
      <ChatBox>
        {talks.map((talk) => (
          <Chat
            scrollRef={scrollRef}
            key={talk.id}
            talkObj={talk}
            isOwner={talk.creatorId === userObj.uid}
          />
        ))}
      </ChatBox>
      {attachment && (
        <Attach>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4
              style={{
                margin: "5px 0",
                background: "orange",
                padding: "5px 20px",
              }}
            >
              사진 첨부하기
            </h4>
            <XButton onClick={onClearAttachment}>
              <FontAwesomeIcon icon={faTimes} />
            </XButton>
          </div>
          <img
            src={attachment}
            style={{
              padding: "5px ",
              background: "white",
              maxHeight: "150px",
              objectFit: "contain",
              textAlign: "left",
            }}
            alt="thumbnail"
          />
        </Attach>
      )}
      <form onSubmit={onSubmit} style={formStyle}>
        <label htmlFor="file">
          <FontAwesomeIcon
            size="2x"
            icon={faPlus}
            style={{
              width: "28px",
              height: "28px",

              color: "orange",
              cursor: "pointer",
              margin: " 0 5px",
            }}
          />
        </label>
        <input
          id="file"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          style={{ display: "none" }}
        />
        <input
          type="text"
          value={talk}
          placeholder="..."
          maxLength="120"
          onChange={onChange}
          style={inputStyle}
          required
        />

        <button
          style={{
            border: "none",
            background: "transparent",
          }}
        >
          <FontAwesomeIcon
            icon={faArrowAltCircleUp}
            size="2x"
            style={{
              color: "orange",
              cursor: "pointer",
            }}
          />
        </button>
      </form>
    </div>
  );
};

export default ChattingPlace;
