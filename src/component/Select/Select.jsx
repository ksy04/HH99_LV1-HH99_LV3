import React, { useState } from "react";
import { Styleddiv } from "./style";
import { Styleddiv2 } from "./style";
import { Styleddiv3 } from "./style";
import Dropdown from "./Dropdown";
import { AiOutlineCaretDown } from "react-icons/ai";

function Select() {
  const [selectedItem1, setSelectedItem1] = useState("리엑트");
  const [isActive1, setIsActive1] = useState(false);

  const [selectedItem2, setSelectedItem2] = useState("리엑트");
  const [isActive2, setIsActive2] = useState(false);

  const handleDropdownItemClick1 = (item) => {
    setSelectedItem1(item);
    setIsActive1(false);
  };

  const handleDropdownItemClick2 = (item) => {
    setSelectedItem2(item);
    setIsActive2(false);
  };

  const handleDropdownToggle1 = () => {
    setIsActive1(!isActive1);
    setIsActive2(false);
  };

  const handleDropdownToggle2 = () => {
    setIsActive2(!isActive2);
    setIsActive1(false);
  };

  return (
    <>
      <h1>Select</h1>
      <Styleddiv3>
        <Styleddiv>
          <Dropdown 
            selectedItem={selectedItem1}
            isActive={isActive1}
            setIsActive={handleDropdownToggle1}
            items={["React", "자바", "스프링", "리엑트네이티브"]}
            onItemClick={handleDropdownItemClick1}
          />
        </Styleddiv>
        <Styleddiv2>
          <Dropdown
            selectedItem={selectedItem2}
            isActive={isActive2}
            setIsActive={handleDropdownToggle2}
            items={["React", "자바", "스프링", "리엑트네이티브"]}
            onItemClick={handleDropdownItemClick2}
          />
        </Styleddiv2>
      </Styleddiv3>
    </>
  );
}

export default Select;
