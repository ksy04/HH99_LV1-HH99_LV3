import React, { useState } from "react";
import { Styleddiv } from "./style";
import Dropdown from "./Dropdown";

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

  return (
    <>
      <h1>Select</h1>
      <Styleddiv>
        <Dropdown
          selectedItem={selectedItem1}
          setSelectedItem={setSelectedItem1}
          isActive={isActive1}
          setIsActive={setIsActive1}
          items={["React", "자바", "스프링", "리엑트네이티브"]}
          onItemClick={handleDropdownItemClick1}
        />
        <Dropdown
          selectedItem={selectedItem2}
          setSelectedItem={setSelectedItem2}
          isActive={isActive2}
          setIsActive={setIsActive2}
          items={["리엑트", "자바"]}
          onItemClick={handleDropdownItemClick2}
        />
      </Styleddiv>
    </>
  );
}

export default Select;
