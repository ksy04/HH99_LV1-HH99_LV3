import styled from "styled-components";

const StyledPrimary = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: rgb(0, 0, 0);
  height: 50px;
  width: 200px;
  border: 3px solid rgb(85, 239, 196);
  background-color: rgb(255, 255, 255);
  font-weight: 600;
`;

const StyledMedium = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(85, 239, 196);
  color: rgb(0, 0, 0);
  height: 45px;
  width: 130px;
  margin-left: 10px;
`;

const StyledSmall = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(85, 239, 196);
  color: rgb(0, 0, 0);
  height: 40px;
  width: 100px;
  margin-left: 10px;
`;

const StyledNegative = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: rgb(214, 48, 49);
  height: 50px;
  width: 200px;
  border: 3px solid rgb(250, 177, 160);
  background-color: rgb(255, 255, 255);
  font-weight: 600;
`;

const StyledMediumRed = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(250, 177, 160);
  color: rgb(214, 48, 49);
  height: 45px;
  width: 130px;
  margin-left: 10px;
`;

const StyledSmallRed = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(250, 177, 160);
  color: rgb(214, 48, 49);
  height: 40px;
  width: 100px;
  margin-left: 10px;
`;

export {
  StyledPrimary,
  StyledMedium,
  StyledSmall,
  StyledNegative,
  StyledMediumRed,
  StyledSmallRed,
};
