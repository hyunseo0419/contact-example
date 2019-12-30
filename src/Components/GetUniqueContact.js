import React, { useState } from "react";
import { Contacts } from "./Contacts";
import { Button, Input } from "antd";
import HeadBar from "./HeadBar";

export const GetUniqueContact = () => {
  const [data, setData] = useState();
  const [id, setId] = useState();
  const [showData, setShowData] = useState(false);

  const fetchAllContacts = async num => {
    await fetch(`http://sample.bmaster.kro.kr/contacts/${num}`)
      .then(res => {
        res = res.json();
        return res;
      })
      .then(json => {
        setData(json);
        console.log(data);
      });
  };

  const showAllContacts = async () => {
    await fetchAllContacts(id);
    console.log(data);
    if (showData) {
      setShowData(false);
      setId("");
    } else {
      setShowData(true);
    }
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
          onClick={showAllContacts}
          style={{ float: "left", width: "20%" }}
        >
          {showData === false ? "검색" : "닫기"}
        </Button>
      </div>

      <div style={{ padding: "auto" }}>
        {showData === false ? null : <Contacts data={data} />}
      </div>
    </div>
  );
};
