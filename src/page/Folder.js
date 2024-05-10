import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";
import FolderList from "../components/FolderList";
import InputAddLink from "../components/InputAddLink";

function Folder() {
  return (
    <>
      <NavigationBar position="static" />
      <InputAddLink />
      <FolderList />
      <Footer></Footer>
    </>
  );
}

export default Folder;
