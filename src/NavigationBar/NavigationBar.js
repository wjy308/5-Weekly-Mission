import "./NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="NavigationBar">
      <div className="NavigationBar-items">
        <a href="/">
          <img src="../assets/Linkbrary.svg" alt="로고"></img>
        </a>
        <button className="NavigationBar-LoginButton">로그인</button>
        {/* <Profile></Profile> */}
      </div>
    </nav>
  );
}

export default NavigationBar;
