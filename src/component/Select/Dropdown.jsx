import React from "react";
import {
  StyledDropDown,
  StyledDropDownBtn,
  StyledDropDownContent,
  StyledDropdownItem,
} from "./style";

const Dropdown = ({
  selectedItem,
  isActive,
  setIsActive,
  items,
  onItemClick,
}) => {
  return (
    <StyledDropDown>
      <StyledDropDownBtn onClick={() => setIsActive(!isActive)}>
        {selectedItem}
      </StyledDropDownBtn>
      {isActive && (
        <StyledDropDownContent>
          {items.map((item, index) => (
            <StyledDropdownItem key={index} onClick={() => onItemClick(item)}>
              {item}
            </StyledDropdownItem>
          ))}
        </StyledDropDownContent>
      )}
    </StyledDropDown>
  );
};

export default Dropdown;
