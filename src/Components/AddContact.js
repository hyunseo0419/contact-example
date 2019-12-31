import React, { useState } from "react";
// import { Contacts } from "./Contacts";
import { Button, Input } from "antd";
import HeadBar from "./HeadBar";

export const AddContact = () => {
  //   const [Data, setData] = useState("");
  const [addData, setaddData] = useState({
    name: "",
    tel: "",
    address: ""
  });

  const postContacts = async obj => {
    await fetch(`http://sample.bmaster.kro.kr/contacts`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("res-->", res);
        res = res.json();
        return res;
      })
      .then(json => {
        console.log("json data-->", json, "+", json.message);
        if (json.status === "success") {
          setaddData({ name: "", tel: "", address: "" });
          return alert(json.message + " , 고유번호는 " + json.no + " 입니다!");
        }
        setaddData({ name: "", tel: "", address: "" });
        return alert(json.message + " , error : " + json.message);
      });
  };

  const addNewContacts = async () => {
    // if (addData.name === "" || addData.tel === "" || addData.address === "") {
    //   alert("모든 값을 정확히 입력해주세요!");
    // }
    console.log("addData-->", addData);
    await postContacts(addData);
  };

  const addName = e => {
    setaddData({ ...addData, name: e.target.value });
  };

  const addTel = e => {
    setaddData({ ...addData, tel: e.target.value });
  };

  const addAddress = e => {
    setaddData({ ...addData, address: e.target.value });
  };

  return (
    <div>
      <HeadBar />
      <div
        style={{
          marginTop: 50,
          marginBottom: 150,
          wth: 500,
          marginRight: "auto",
          marginLeft: "auto",
          textAlign: "center"
        }}
      >
        <div>
          <Input
            placeholder="이름을 입력해주세요."
            onChange={addName}
            style={{ width: "30%" }}
            value={addData.name}
          ></Input>
        </div>
        <div>
          <Input
            placeholder="전화번호를 입력해주세요."
            onChange={addTel}
            style={{ width: "30%" }}
            value={addData.tel}
          ></Input>
        </div>
        <div>
          <Input
            placeholder="주소를 입력해주세요."
            onChange={addAddress}
            style={{ width: "30%" }}
            value={addData.address}
          ></Input>
        </div>
        <Button onClick={addNewContacts} style={{ wth: "20%" }}>
          등록하기
        </Button>
      </div>
    </div>
  );
};
