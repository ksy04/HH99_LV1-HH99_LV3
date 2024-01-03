import React, { useState } from "react";
import {
  StyledmodalOpenModal,
  StyledmodalContainer,
  StyledmodalContent,
  StyledButtonDiv,
  StyledModalCloseButton,
  StyledModalCheckButton,
  StyledmodalOpenModal2,
} from "./style";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHorizontalModalOpen, setIsHorizontalModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openHorizontalModal = () => {
    setIsHorizontalModalOpen(true);
  };

  const closeHorizontalModal = () => {
    setIsHorizontalModalOpen(false);
  };

  // 모달 클릭 시 닫힘
  const handleModalClick = () => {
    console.log("container click");
    closeModal();
  };

  const handleCloseButtonClick = () => {
    // 닫힘
    closeModal();
  };

  // 닫힘 X
  const handleCheckButtonClick = (e) => {
    e.stopPropagation();
    // 아무 동작이 실행되지 않도록 빈 함수 혹은 필요한 로직을 추가
  };

  const handleCloseHorizontalButtonClick = () => {
    closeHorizontalModal();
  };

  return (
    <>
      <h1>Modal</h1>
      <div style={{ display: "flex" }}>
        <StyledmodalOpenModal onClick={openModal}>
          Open Modal
        </StyledmodalOpenModal>

        <StyledmodalOpenModal2 onClick={openHorizontalModal}>
          Open Horizontal Modal
        </StyledmodalOpenModal2>
      </div>

      {isModalOpen && (
        <StyledmodalContainer onClick={handleModalClick}>
          <StyledmodalContent>
            <p>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히도록
            </p>
            <StyledButtonDiv>
              <StyledModalCloseButton onClick={handleCloseButtonClick}>
                닫기
              </StyledModalCloseButton>
              <StyledModalCheckButton onClick={handleCheckButtonClick}>
                확인
              </StyledModalCheckButton>
            </StyledButtonDiv>
          </StyledmodalContent>
        </StyledmodalContainer>
      )}

      {isHorizontalModalOpen && (
        <StyledmodalContainer onClick={handleCloseHorizontalButtonClick}>
          <StyledmodalContent onClick={handleModalClick}>
            <p>수평으로 나타나는 모달</p>

            <StyledModalCheckButton onClick={handleCloseHorizontalButtonClick}>
              X
            </StyledModalCheckButton>
          </StyledmodalContent>
        </StyledmodalContainer>
      )}
    </>
  );
}

export default Modal;
