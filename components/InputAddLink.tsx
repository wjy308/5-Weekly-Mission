import styles from "./InputAddLink.module.css";
import { LINK_ICON } from "./LinkIcon";
import React from "react";

function InputAddLink() {
  return (
    <form className={`${styles.InputAddLinkForm}`}>
      <div className={`${styles.InputAddLinkFormContainer}`}>
        <img
          src={LINK_ICON}
          alt="링크 아이콘"
          className={`${styles.LinkIcon}`}
        />
        <input
          className={`${styles.InputAddLinkInput}`}
          placeholder="링크를 추가해 보세요."
        ></input>
        <button className={`btn ${styles.InputAddLinkBtnAdd}`}>추가하기</button>
      </div>
    </form>
  );
}

export default InputAddLink;
