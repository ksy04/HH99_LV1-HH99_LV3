import React, { useState } from "react";
import { StyledNameInput, StyledPriceInput, StyledResultButton } from "./style";


function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    const inputPrice = event.target.value;

    // 숫자만 추출하여 콤마(,) 추가
    const formattedPrice = inputPrice
      .replace(/[^\d]/g, "") // 숫자가 아닌 문자 제거
      .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 3자리마다 콤마 추가

    setPrice(formattedPrice);
  };

  // 이름 가격 빈 문자열 확인, trim 메서드 공백 제거, 그 후 비어있지 않은지 여부 확인
  const handleButtonClick = () => {
    if (name.trim() !== "" && price.trim() !== "") {
      const alertObject = {
        name: name,
        price: parseFloat(price.replace(/,/g, "")), // 콤마 제거 후 파싱
      };
      // 데이터를 문자열로 표현하여 전송하거나 저장하기 위해서 JSON 문자열로 변환하여 경고 창 출력
      alert(JSON.stringify(alertObject));
    } else {
      alert("이름과 가격을 먼저 입력하세요.");
    }
  };

  return (
    <>
      <h1>Input </h1>
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
