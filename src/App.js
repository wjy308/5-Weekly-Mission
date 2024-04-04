import "./App.css";
import NavigationBar from "./NavigationBar/NavigationBar.js";
import "./global.css";
import "./colors.css";
import Profile from "./Profile/Profile.js";
import { CardList } from "./CardList/CardList.js";
import Footer from "./Footer/Footer.js";
import SearchBar from "./SearchBar/SearchBar.js";

function App() {
  return (
    <>
      <NavigationBar />
      <Profile />
      <CardList />
      <Footer />
    </>
  );
}

export default App;
