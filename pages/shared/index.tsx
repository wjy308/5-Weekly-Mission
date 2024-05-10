import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { CardList } from "@/components/CardList/CardList";
import Footer from "@/components/Footer/Footer";
import React from "react";
import Profile from "@/components/Profile/Profile";

function SharedPage() {
  return (
    <>
      <NavigationBar position="sticky" />
      <Profile />
      <CardList />
      <Footer />
    </>
  );
}

export default SharedPage;
