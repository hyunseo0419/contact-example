import React, { useState } from "react";
// import { Contacts } from "./Contacts";
import { Button, Input } from "antd";
import HeadBar from "./HeadBar";

export const DeleteContact = () => {
  //   const [Data, setData] = useState("");
  const [id, setId] = useState();

  const fetchDeleteContact = async num => {
    await fetch(`http://sample.bmaster.kro.kr/contacts/${num}`, {
      method: "DELETE",
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
        console.log("json data-->", json);
        if (json.status === "success") {
          setId("");
          return alert(
            json.message + " , 삭제된 고유번호는 " + json.no + " 입니다!"
          );
        }
        setId("");
        return alert(json.message + " 사유 : " + json.message);
      });
  };

  const deleteContacts = async () => {
    if (id === "" || isNaN(id) === true) {
      return alert("고유번호를 정확히 입력해주세요!");
    }
    // console.log("addData-->", addData);
    await fetchDeleteContact(id);
  };

  const getUniqueNumber = e => {
    setId(e.target.value);
  };

  return (
    <div>
      <HeadBar />
      <div
        style={{
          marginTop: 50,
          marginBottom: 150,
          width: 500,
          marginRight: "auto",
          marginLeft: "auto"
        }}
      >
        <Input
          placeholder="고유번호를 입력해주세요."
          onChange={getUniqueNumber}
          style={{ float: "left", width: "80%" }}
          value={id}
        ></Input>
        <Button
          onClick={deleteContacts}
          style={{ float: "left", width: "20%" }}
        >
          삭제하기
        </Button>
      </div>
    </div>
  );
};
