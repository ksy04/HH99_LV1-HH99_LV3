import React from "react";
import {
  StyledDropDown,
  StyledDropDownBtn,
  StyledDropDownContent,
  StyledDropdownItem,
  StyledEntire,
  StyledIcon
} from "./style";
import { AiOutlineCaretDown } from "react-icons/ai";

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
          <StyledIcon>
            <AiOutlineCaretDown />
          </StyledIcon>
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
