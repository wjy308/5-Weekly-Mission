import * as S from "./DeleteModalStyled";

function DeleteModal({ linkUrl, onClose }) {
  const handleModalBackgroundClick = () => {
    onClose();
  };
  return (
    <>
      <S.ModalOverlay onClick={handleModalBackgroundClick} />
      <S.Container>
        <S.EixtButton></S.EixtButton>
        <S.Title>링크 삭제</S.Title>
        <S.urlWrapper>
          <S.LinkUrl>{linkUrl}</S.LinkUrl>
        </S.urlWrapper>
        <S.DeleteButton>삭제하기</S.DeleteButton>
      </S.Container>
    </>
  );
}

export default DeleteModal;
