import React from "react";

function FolderListMenu({ folderList, onFolderClick, selectedFolder }) {
  const handleMenuButtonClick = (folder) => {
    onFolderClick(folder);
  };

  return (
    <>
      {folderList && folderList.data && folderList.data.length > 0 ? (
        <div className="FolderList_list_menu-container">
          <button
            className="FolderList-button"
            onClick={() => handleMenuButtonClick(null)}
          >
            <span>전체</span>
          </button>
          {folderList &&
            folderList.data &&
            folderList.data.map((folder) => (
              <button
                className="FolderList-button"
                key={folder.id}
                onClick={() => handleMenuButtonClick(folder)}
              >
                {folder.name}
              </button>
            ))}
        </div>
      ) : (
        <p>저장된 링크가 없습니다.</p>
      )}
    </>
  );
}

export default FolderListMenu;
