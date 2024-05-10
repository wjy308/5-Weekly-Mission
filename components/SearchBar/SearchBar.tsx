import { SEARCH_ICON } from "./SearchIcon";
import styles from "./SearchBar.module.css";
import React from "react";

function SearchBar() {
  return (
    <div className={`${styles.SearchBar}`}>
      <img
        src={SEARCH_ICON}
        className={`${styles.SearchBar_InputSearch_icon}`}
      ></img>
      <input
        className={`${styles.SearchBar_InputSearch}`}
        placeholder="링크를 검색해 보세요."
      ></input>
    </div>
  );
}

export default SearchBar;
