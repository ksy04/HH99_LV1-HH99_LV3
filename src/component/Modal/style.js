import styled from "styled-components";

const StyledmodalOpenClose = styled.div`
  cursor: pointer;
`;

const StyledmodalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledmodalContent = styled.div`
  position: absolute;
  background-color: #ffffff;
  width: 300px;
  height: 150px;
  padding: 15px;
`;

export { StyledmodalOpenClose, StyledmodalContainer, StyledmodalContent };
