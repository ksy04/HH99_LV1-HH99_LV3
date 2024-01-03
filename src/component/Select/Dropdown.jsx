import React from "react";
import {
  StyledDropDown,
  StyledDropDownBtn,
  StyledDropDownContent,
  StyledDropdownItem,
  StyledEntire,
} from "./style";

const Dropdown = ({
  selectedItem,
  isActive,
  setIsActive,
  items,
  onItemClick,
}) => {
  return (
    <StyledEntire>
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
    </StyledEntire>
  );
};

export default Dropdown;
