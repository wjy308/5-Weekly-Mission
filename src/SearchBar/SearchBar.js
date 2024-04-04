import { SEARCH_ICON } from "../SearchBar/SearchIcon";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="SearchBar">
      <input
        className="SearchBar-InputSearch"
        placeholder="링크를 검색해 보세요."
      ></input>
      <img src={SEARCH_ICON} className="SearchBar-InputSearch-icon"></img>
    </div>
  );
}

export default SearchBar;
