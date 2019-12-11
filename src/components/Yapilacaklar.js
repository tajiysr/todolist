import React from "react";

const Yapilacaklar = ({ index, keyi, silgec }) => {
  return (
    <div>
      <span>{keyi + 1}- </span>
      {index}
      <button onClick={()=> silgec(index)}>-</button>
    </div>
  );
};

export default Yapilacaklar;
