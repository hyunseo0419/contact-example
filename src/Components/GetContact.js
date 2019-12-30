import React, { useState } from "react";
import { Contacts } from "./Contacts";
import { Button } from "antd";
import HeadBar from "./HeadBar";

export const GetContact = () => {
  const [data, setData] = useState();
  const [showData, setShowData] = useState(false);

  const fetchAllContacts = async () => {
    await fetch("http://sample.bmaster.kro.kr/contacts")
      .then(res => {
        res = res.json();
        return res;
      })
      .then(json => {
        setData(json.contacts);
      });
  };

  const showAllContacts = async () => {
    await fetchAllContacts();
    console.log(data);
    if (showData) {
      setShowData(false);
    } else {
      setShowData(true);
    }
  };

  return (
    <div>
      <HeadBar />
      <div style={{ textAlign: "center", marginTop: 50, marginBottom: 50 }}>
        <Button onClick={showAllContacts}>
          {showData === false ? "전체 연락처 보기" : "전체 연락처 닫기"}
        </Button>
      </div>
      <div style={{ marginLeft: "7%", marginRight: "7%" }}>
        {showData === false
          ? null
          : data.map((ele, idx) => <Contacts key={idx} data={ele} />)}
      </div>
    </div>
  );
};
