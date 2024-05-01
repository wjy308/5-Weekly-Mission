import { useState, useEffect } from "react";
import { getFolderList, getAllFolderList } from "./getUserFolder";
const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export function useFolderAsync() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [folderList, setFolderList] = useState(null);
  const [allFolderList, setAllFolderList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folderList = await getFolderList();
        const allFolderList = await getAllFolderList();

        setFolderList(folderList);
        setAllFolderList(allFolderList);
        setLoading(false); // 로딩 상태 변경
      } catch (error) {
        // 에러 발생 시 에러 상태 업데이트
        setError(error);
        setLoading(false); // 로딩 상태 변경
      }
    };

    fetchData(); // fetchData 함수 호출
  }, []);

  return { folderList, allFolderList, loading, error }; // 상태를 반환
}
