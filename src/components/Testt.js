import React from "react";

function Testt({ folderList, onFolderClick }) {
  const handleMenuButtonClick = (folderId) => {
    onFolderClick(folderId);
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
          {folderList.data.map((folder) => (
            <button
              className="FolderList-button"
              key={folder.id}
              onClick={() => handleMenuButtonClick(folder.id)}
            >
              {folder.name}
            </button>
          ))}
        </div>
      ) : (
        <p>저장된 폴더가 없습니다.</p>
      )}
    </>
  );
}

// if (Array.isArray(folderInfo)) {
//   // 폴더 정보가 배열인 경우, 바로 렌더링합니다.
//   return (
//     <div className="card-grid-container">
//       {folderInfo.map((item, index) => (
//         <div className="card" key={index}>
//           <h3>{item.title}</h3>
//           <p>{item.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

export default Testt;
