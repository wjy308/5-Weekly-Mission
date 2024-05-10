import "../App.css";
import NavigationBar from "../NavigationBar/NavigationBar.js";
import Profile from "../Profile/Profile.js";
import { CardList } from "../CardList/CardList.js";
import Footer from "../Footer/Footer.js";

function Shared() {
  return (
    <>
      <NavigationBar position="sticky" />
      <Profile />
      <CardList />
      <Footer />
    </>
  );
}

export default Shared;
