import React from "react";
import { Card, Avatar } from "antd";

export const Contacts = data => {
  console.log("!!!!!!!!", data);
  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      {data.data.no === undefined ? (
        <div style={{ textAlign: "center" }}>
          존재하지 않는 고유 아이디입니다.
        </div>
      ) : (
        <Card
          size="default"
          title="Contact"
          style={{ float: "left", width: 360 }}
        >
          <div style={{ float: "left", width: "40%" }}>
            <Avatar size={64} src={data.data.photo} />
          </div>
          <div style={{ float: "left", width: "55%" }}>
            <div style={{ fontWeight: "bolder", fontSize: 16 }}>
              {data.data.name}
            </div>
            <div>
              <span style={{ fontWeight: "bolder" }}>Tel : </span>{" "}
              {data.data.tel}
            </div>
            <div>
              <span style={{ fontWeight: "bolder" }}>Address : </span>{" "}
              {data.data.address}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

// {
//     "no": 1577695959076,
//     "name": "aa",
//     "tel": "2312",
//     "address": null,
//     "photo": "http://sample.bmaster.kro.kr/photos/noimage.jpg"
//   }
