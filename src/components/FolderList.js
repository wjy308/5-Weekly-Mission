import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useFolderAsync } from "../api/useFolderAsync";
import FolderListMenu from "./FolderListMenu";
import "./FolderList.css";
import { CardList } from "../CardList/CardList";
import { FolderCardList } from "./FolderCardList";
function FolderList() {
  const { folderList, allFolderList, loading, error } = useFolderAsync();
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [curFolder, setCurFolder] = useState(null);
  const [folderId, setFolderId] = useState(null);

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder);
    if (folder) {
      setFolderId(folder.id);
    } else {
      setFolderId(null);
    }
  };

  useEffect(() => {
    console.log(selectedFolder);
  }, [selectedFolder][folderId]);

  return (
    <div className="FolderList_container">
      <SearchBar />
      <FolderListMenu
        folderList={folderList}
        onFolderClick={handleFolderClick}
        selectedFolder={selectedFolder}
      />
      <div className="FolderList_list-folderManage-container">
        <p>{selectedFolder ? selectedFolder.name : "전체"}</p>
        {selectedFolder && selectedFolder.name !== "전체" && (
          <>
            <a>공유</a>
            <a>이름 변경</a>
            <a>삭제</a>
          </>
        )}
      </div>
      <FolderCardList folderId={folderId} />
    </div>
  );
}

export default FolderList;
