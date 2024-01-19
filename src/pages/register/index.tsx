import Header from "../components/Header";
import Image from "next/image";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const register = () => {
  const [ad, setad] = useState<string>("");
  const [soyad, setsoyad] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { push } = useRouter();

  const handleLogin = () => {
    //todo burada backende istek gonderilir istek dönen response uzerinden işlem yapılır.Backend servisi hazır değil
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div>
        <Header />
      </div>

      <div
        style={{
          backgroundColor: "#E0F2F1",
          display: "flex",
          flexDirection: "row",
          padding: 14,
          justifyContent: "center",
        }}
      >
        <div>
          <Image
            width={500}
            height={400}
            alt="logo"
            src="/images/FileHandler.2.png"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 14,
            color: "#808080",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "20px", color: "black",textDecoration: 'underline' }}>
            Kayıt olmak için bilgilerinizi giriniz
          </p>

          <br />
          <p>Adınızı Giriniz </p>
          <input
            type="text"
            placeholder=""
            value={ad}
            onChange={(e) => setad(e.target.value)}
          />
          <p>Soyadınızı Giriniz </p>
          <input
            type="text"
            placeholder=""
            value={soyad}
            onChange={(e) => setsoyad(e.target.value)}
          />
          <p>E mail Giriniz </p>
          <input
            type="text"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <p>Şifre Giriniz </p>
          <input
            type="text"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button
            label="Giriş Yap"
            onClick={() => push("home")}
            style={{ backgroundColor: "#80CBC4", color: "white", padding: 8 }}
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          padding: 110,
          justifyContent: "space-around",
          font: "-moz-initial",
          color: "black",
        }}
      >
        <div>
          <Image width={150} height={150} alt="logo" src="/images/logo.png" />
        </div>
      </div>
    </div>
  );
};

export default register;