import styled from "styled-components";

const StyledmodalOpenModal = styled.div`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(85, 239, 196);
  color: rgb(0, 0, 0);
  height: 40px;
  width: 100px;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const StyledmodalOpenModal2 = styled.div`
  cursor: pointer;
  border-radius: 8px;
  color: rgb(214, 48, 49);
  height: 50px;
  width: 200px;
  border: 3px solid rgb(250, 177, 160);
  background-color: rgb(255, 255, 255);
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const StyledmodalContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledmodalContent = styled.div`
  position: absolute;
  padding: 15px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 500px;
  height: 300px;
  z-index: 2;
`;

const StyledButtonDiv = styled.div`
  float: right;
  margin-top: 170px;
`;

const StyledModalCloseButton = styled.button`
  bottom: 0;
  right: 0;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(250, 177, 160);
  color: rgb(214, 48, 49);
  height: 40px;
  width: 100px;
  margin-bottom: 10px;
`;

const StyledModalCheckButton = styled.button`
  bottom: 0;
  right: 0;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(85, 239, 196);
  color: rgb(0, 0, 0);
  height: 40px;
  width: 100px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const StyledDiv = styled.div`
  background-color: red;
`;

export {
  StyledmodalOpenModal,
  StyledmodalContainer,
  StyledmodalContent,
  StyledButtonDiv,
  StyledModalCloseButton,
  StyledModalCheckButton,
  StyledmodalOpenModal2,
  StyledDiv,
};
