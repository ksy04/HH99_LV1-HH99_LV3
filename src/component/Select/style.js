import styled from "styled-components";

const StyledDropDown = styled.div`
  width: 400px;
  margin: 10px;
  position: relative;
  user-select: none;
`;

const StyledDropDownBtn = styled.div`
  padding: 10px 10px;
  background-color: #fff;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  font-weight: bold;
  width: 280px;

  border-radius: 10px;
`;

const StyledDropDownContent = styled.div`
  position: absolute;
  top: 110%;
  padding: 0px;
  background: #fff;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  font-weight: 500;
  width: 300px;
  border-radius: 10px;
`;

const StyledDropdownItem = styled.div`
  padding: 5%;
  cursor: pointer;
  transition: all 0.2s;
`;

const Styleddiv = styled.div`
  display: flex;
`;

const Styleddiv2 = styled.div`
  display: flex;
  overflow: hidden;
`;

const Styleddiv3 = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;

  position: relative;
  margin-top: 50px;
  display: flex;
`;

const StyledEntire = styled.div`
  height: 200px;
  position: relative;
  margin-top: 50px;
`;

export {
  StyledDropDown,
  StyledDropDownBtn,
  StyledDropDownContent,
  StyledDropdownItem,
  Styleddiv,
  Styleddiv2,
  Styleddiv3,
  StyledEntire,
};
