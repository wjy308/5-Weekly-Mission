import { useState, useEffect } from "react";
import { getUserFolder } from "../api/getUserFolder";
import "./CardList.css";
import { SEARCH_ICON } from "./SearchIcon";
import { getElapsedTime } from "../util/getClapsedTime";
import format from "date-fns/format";

function FolderItem({ item }) {
  const createdAd = getElapsedTime(item.createdAt);
  return (
    <a href={item.url}>
      <img className="CardList-item-img" src={item.imageSource}></img>
      <p className="CardList-item-createdAt">{createdAd}</p>
      <div className="CardList-item-description-container">
        <p className="CardList-item-description">{item.description}</p>
      </div>
      <p className="CardList-item-date">
        {format(new Date(item.createdAt), "yyyy. MM. dd")}
      </p>
    </a>
  );
}

export const CardList = () => {
  const [folderData, setFolderData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // getUserInfo 함수 호출
        const folderData = await getUserFolder();
        // 반환된 사용자 정보 업데이트
        setFolderData(folderData);
        setLoading(false); // 로딩 상태 변경
      } catch (error) {
        // 에러 발생 시 에러 상태 업데이트
        setError(error);
        setLoading(false); // 로딩 상태 변경
      }
    };
    fetchData(); // fetchData 함수 호출
  }, []);
  // 로딩 중일 때
  if (loading) {
    return <div>Loading...</div>;
  }

  // 에러 발생 시
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // 사용자 정보가 없을 때
  if (!folderData) {
    return null;
  }
  const folderLinks = Object.keys(folderData.folder.links);

  return (
    <form className="CardListForm">
      <div className="CardList">
        <div className="SearchBar">
          <input
            className="SearchBar-InputSearch"
            placeholder="링크를 검색해 보세요."
          ></input>
          <img src={SEARCH_ICON} className="SearchBar-InputSearch-icon"></img>
        </div>
        {folderLinks.map((key) => (
          <div className="CardList-item" key={key}>
            <FolderItem item={folderData.folder.links[key]} />
          </div>
        ))}
      </div>
    </form>
  );
};
