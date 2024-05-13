import Footer from "@/components/Footer/Footer";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import FolderList from "@/components/FolderList";
import InputAddLink from "@/components/InputAddLink";
import React from "react";

function FolderPage() {
  return (
    <>
      <NavigationBar position="static" />
      <InputAddLink />
      <FolderList />
      <Footer></Footer>
    </>
  );
}
export default FolderPage;
