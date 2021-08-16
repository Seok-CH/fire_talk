import React, { useState } from "react";
import { firebaseInstance, authService } from "firebaseData";
import SignUp from "components/SignUp";

const appNameStyle = {
  fontSize: "25px",
  fontWeight: "500",
  margin: "0 10px",
  position: "relative",
  top: "-10px",
  color: "orange",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
};

const inputStyle = {
  width: "220px",
  height: "40px",
  margin: "10px 0",
  padding: "0 10px",
  borderRadius: "20px",
  border: "1px solid gray",
  outline: "none",
};

const submitStyle = {
  height: "40px",
  backgroundColor: "orange",
  color: "white",
  margin: "10px 0",
  fontWeight: "600",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
};
const textStyle = {
  fontSize: "13px",
  margin: "0 20px",
  color: "orange",
  cursor: "pointer",
};

const socialBoxStyle = {
  margin: "40px 0",
  borderRadius: "20px",
};

const socialTextStyle = {
  margin: "10px 10px",
  textAlign: "center",
  border: "none",
};
const socialButtonStyle = {
  width: "50px",
  height: "50px",
  margin: "5px 10px",
  cursor: "pointer",
  backgroundSize: "cover",
  backgroundColor: "white",
  border: "none",
  borderRadius: "50%",
  boxShadow: "1px 1px 5px gray",
};

const Auth = ({ refreshUser, haveProfile }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isShowing, setIsShowing] = useState(false);

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

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data = await authService.signInWithEmailAndPassword(email, password);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
    refreshUser();
  };

  const onSocialSignIn = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };

  const openModal = () => {
    setIsShowing(true);
  };
  return (
    <div style={{ position: "relative", top: "50px" }}>
      <img
        src="https://img.icons8.com/color/50/000000/google-firebase-console.png"
        alt="firebase"
      />
      <span style={appNameStyle}>FIRE TALK</span>
      <form onSubmit={onSubmit} style={formStyle}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
          style={inputStyle}
          autoComplete="off"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
          style={inputStyle}
          autoComplete="off"
        />
        <input type="submit" value="로그인" style={submitStyle} />
        {error}
      </form>
      <div>
        <span style={textStyle}>비밀번호 찾기</span>
        <span style={textStyle} onClick={openModal}>
          회원가입
        </span>

        <div>
          {isShowing && (
            <SignUp setIsShowing={setIsShowing} refreshUser={refreshUser} />
          )}
        </div>
      </div>
      <div style={socialBoxStyle}>
        <div style={socialTextStyle}>간편하게 SNS 로그인</div>
        <div>
          <button
            onClick={onSocialSignIn}
            name="google"
            style={{
              ...socialButtonStyle,
              backgroundImage:
                "url('https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg')",
            }}
          ></button>
          <button
            onClick={onSocialSignIn}
            name="google"
            style={{
              ...socialButtonStyle,
              backgroundImage:
                "url('https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg')",
              backgroundSize: "cover",
            }}
          ></button>
          <button
            onClick={onSocialSignIn}
            name="github"
            style={{
              ...socialButtonStyle,
              backgroundImage:
                "url('https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg')",
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};
export default Auth;
