import React, { useState } from "react";
import Yapilacaklar from "./Yapilacaklar";

const Welcomepage = ({ isim }) => {
  const [ekle, setEkle] = useState("");
  const [yapilacaklar, setYapilacaklar] = useState(
    JSON.parse(localStorage.getItem("todos"))
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  function silgec(index) {
    console.log(index);
    setYapilacaklar(yapilacaklar.filter(item => index !== item));
  }
  return (
    <div>
      <button
        onClick={() => {
          localStorage.setItem("todos", JSON.stringify(yapilacaklar));
        }}
      >
        Kaydet
      </button>
      <h1>Welcome: {isim}</h1>
      <h3>Yapılacak Ekle</h3>
      <input onChange={e => setEkle(e.target.value)} value={ekle} />
      <button
        onClick={() => {
          setYapilacaklar([...yapilacaklar, ekle]);
          setEkle("");
        }}
      >
        +
      </button>
      <h4>Yapılacaklar</h4>
      {yapilacaklar.map((index, key) => {
        return (
          <Yapilacaklar index={index} key={key} keyi={key} silgec={silgec} />
        );
      })}
    </div>
  );
};

export default Welcomepage;
