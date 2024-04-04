import "./App.css";
import NavigationBar from "./NavigationBar/NavigationBar.js";
import "./global.css";
import "./colors.css";
import Profile from "./Profile/Profile.js";
import { getUserInfo } from "./api/getUserInfo.js";
import { getUserFolder } from "./api/getUserFolder.js";
import useAsync from "./api/useAsync.js";
import { useState } from "react";
import { CardList } from "./CardList/CardList.js";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Profile></Profile>
      <CardList></CardList>
    </>
  );
}

export default App;
