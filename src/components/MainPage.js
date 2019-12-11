import React, { useState } from "react";
import Welcomepage from "./Welcomepage";

const MainPage = () => {
  const [isim, setIsim] = useState(
    localStorage.getItem("isim") ? localStorage.getItem("isim") : ""
  );
  // const [yas, setYas] = useState(null);
  const [sayfa, setSayfa] = useState(0);
  if (sayfa === 1) {
    return <Welcomepage isim={isim} /*yas={yas}*/ />;
  }
  return (
    <div>
      <h1>Lüfen Bilgilerinizi Giriniz</h1>
      <section className="container form-ysr">
        <form>
          <div className="form-group col-md-12">
            <label>İsim Ve Soyisim:</label>
            <input
              className="form-control"
              onChange={e => setIsim(e.target.value)}
              value={isim}
            />
          </div>
          {/* <div className="form-group col-md-6">
            <label>Yaş:</label>
            <input
              className="form-control"
              onChange={(e) => setYas(e.target.value)}
            />
          </div> */}
        </form>
        <button
          className="btn btn-danger col-md-12"
          onClick={() => {
            setSayfa(1);
            localStorage.setItem("isim", isim);
          }}
        >
          OK
        </button>
      </section>
    </div>
  );
};

export default MainPage;
