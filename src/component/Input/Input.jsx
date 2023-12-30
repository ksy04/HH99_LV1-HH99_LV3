import React, { useState } from "react";
import { StyledNameInput, StyledPriceInput, StyledResultButton } from "./style";

function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleButtonClick = () => {
    if (name.trim() !== "" && price.trim() !== "") {
      const alertObject = {
        name: name,
        price: parseFloat(price),
      };

      alert(JSON.stringify(alertObject));
    } else {
      alert("이름과 가격을 먼저 입력하세요.");
    }
  };

  return (
    <>
      <h1>Input</h1>
      이름:{" "}
      <StyledNameInput type="text" value={name} onChange={handleNameChange} />
      가격:{" "}
      <StyledPriceInput
        type="text"
        value={price}
        onChange={handlePriceChange}
      />
      <StyledResultButton onClick={handleButtonClick}>저장</StyledResultButton>
    </>
  );
}

export default Input;
