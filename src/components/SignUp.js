import React, { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { authService } from "firebaseData";

const ModalConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const ModalContent = styled.div`
  width: 50vh;

  padding: 30px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
`;
const ModalHeaderName = styled.h2`
  margin: 0 14px 0 6px;
  padding: 10px;
  color: orange;
`;

const ModalIcon = styled.div`
  border: none;
  height: 10px;
  color: gray;
  &:hover {
    color: black;
  }
  cursor: pointer;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 28vh;
  padding: 10px;
  position: relative;
`;

const ModalInput = styled.input`
  height: 6vh;
  margin: 10px 0;
  border: 1.5px solid rgb(214, 212, 212);
  border-radius: 10px;
  font-size: 2vh;
  font-weight: 400;
  padding: 1vh;
  position: relative;
`;

const ModalInputBtn = styled.button`
  position: relative;
  top: 40px;
  left: -40px;
  width: 326.5px;
  border-radius: 0 0 20px 20px;
  height: 50px;
  border: none;
  &:hover {
    background-color: orange;
    color: white;
  }
  cursor: pointer;
`;

const SignUp = ({ setIsShowing, refreshUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSignUP = async (event) => {
    event.preventDefault();
    try {
      await authService.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }
    refreshUser();
  };

  const offShowing = () => {
    setIsShowing(false);
  };
  return createPortal(
    <ModalConatiner>
      <ModalContent>
        <ModalHeader>
          <img
            src="https://img.icons8.com/color/50/000000/google-firebase-console.png"
            alt="firebase"
          />
          <ModalHeaderName>파이어 토크 가입</ModalHeaderName>
          <ModalIcon>
            <FontAwesomeIcon icon={faTimes} onClick={offShowing} />
          </ModalIcon>
        </ModalHeader>

        <ModalForm onSubmit={onSignUP}>
          <ModalInput
            name="email"
            placeholder="이메일"
            spellcheck="false"
            autocomplete="off"
            onChange={onChange}
          />

          <ModalInput
            name="password"
            type="password"
            placeholder="비밀번호"
            spellcheck="false"
            onChange={onChange}
          />

          <ModalInputBtn type="submit">회원가입</ModalInputBtn>
        </ModalForm>
      </ModalContent>
    </ModalConatiner>,
    document.getElementById("modal")
  );
};

export default SignUp;
