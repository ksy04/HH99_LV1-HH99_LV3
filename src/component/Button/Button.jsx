import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { MdOutlineEditNotifications } from "react-icons/md";

import {
  StyledPrimary,
  StyledMedium,
  StyledSmall,
  StyledNegative,
  StyledMediumRed,
  StyledSmallRed,
} from "./style";

function Button() {
  return (
    <>
      <h1>Button</h1>
      <StyledPrimary
        onClick={() => {
          alert("버튼을 만들어 보세요.");
        }}
      >
        Large Primary Button
        <FaAngleRight />
      </StyledPrimary>
      <StyledMedium>Medium</StyledMedium>
      <StyledSmall>Small</StyledSmall>
      <br />
      <br />
      <StyledNegative
        onClick={() => {
          prompt("어렵나요? 쉽나요? 그저 그런가요? 힘내십쇼!");
        }}
      >
        Large Negative Button
        <MdOutlineEditNotifications />
      </StyledNegative>
      <StyledMediumRed>Medium</StyledMediumRed>
      <StyledSmallRed>Small</StyledSmallRed>
    </>
  );
}

export default Button;
