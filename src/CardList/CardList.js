import "./CardList.css";
import { useAsync } from "../api/useAsync";
import FolderItem from "./FolderItem";
import SearchBar from "../SearchBar/SearchBar";

export const CardList = () => {
  const { userInfo, userFolder, loading, error } = useAsync();

  // 로딩 중일 때
  if (loading) {
    return <div>Loading...</div>;
  }

  // 에러 발생 시
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // 사용자 정보가 없을 때
  if (!userInfo) {
    return null;
  }
  const folderLinks = Object.keys(userFolder.folder.links);

  return (
    <div className="CardListForm">
      <SearchBar />
      <div className="CardList">
        {folderLinks.map((key) => (
          <div className="CardList-item" key={key}>
            <FolderItem item={userFolder.folder.links[key]} />
          </div>
        ))}
      </div>
    </div>
  );
};
