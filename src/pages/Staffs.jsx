import React from "react";

import TableStaff from "../components/table/TableStaff";
import axios from "axios";
import { useEffect, useState } from "react";

const staffTableHead = [
  "Mã nhân viên",
  "Tên nhân viên",
  "Chức danh",
  "Trạng thái",
  "Số điện thoại",
  "Hành động",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>#{item.id}</td>
    <td>{item.name}</td>
    <td>{item.role}</td>
    <td>{item.status}</td>
    <td>{item.phone}</td>
    <td></td>
  </tr>
);

const Staffs = () => {
  const [dataStaff, setDataStaff] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://tfsapiv1-env.eba-aagv3rp5.ap-southeast-1.elasticbeanstalk.com/api/accounts`
      )
      .then((res) => {
        setDataStaff(res.data);
      })
      .catch((e) => {
        console.log("Exception", e);
      });
  }, []);

  return (
    <div>
      <div className="toptable">
        <h1 style={{ marginLeft: "30px" }}>Danh sách nhân viên</h1>
        <div className="topnav__right">
          <div className="topnav__right-item">
            <div className="button">Thêm nhân viên +</div>
          </div>
          <div className="topnav__right-item">
            <div className="topnav__search">
              <input type="text" placeholder="" />
              <i className="bx bx-search"></i>
            </div>
          </div>
          <div className="topnav__right-item"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <TableStaff
                limit="6"
                headData={staffTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={dataStaff}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staffs;
