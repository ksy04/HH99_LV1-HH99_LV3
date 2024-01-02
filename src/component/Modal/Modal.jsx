import React, { useState } from "react";
import {
  StyledmodalOpenClose,
  StyledmodalContainer,
  StyledmodalContent,
} from "./style";

function Modal() {
  const ModalExample = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };
    return (
      <>
        <h1>Modal</h1>
        <StyledmodalOpenClose onClick={openModal}>
          open Modal
        </StyledmodalOpenClose>
        
        <StyledmodalContent>
          <div className="modalContent">
            <p>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
              않아요
            </p>
            <StyledmodalContainer
              onClick={closeModal}
              className="modalCloseButton"
            >
              닫기
            </StyledmodalContainer>
            <StyledmodalContainer className="modalCheckButton">
              확인
            </StyledmodalContainer>
          </div>
        </StyledmodalContent>
      </>
    );
  };
}

export default Modal;
