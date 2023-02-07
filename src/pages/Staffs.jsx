import React, { Fragment } from "react";
import TableStaff from "../components/table/TableStaff";
import { useState } from "react";
import { useEffect } from "react";
import staffApi from "../api/staffApi";
import AddStaff from "../components/add-staff/addStaff";

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
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const fetchStaffList = async () => {
      try {
        const respone = await staffApi.getAll();
        setDataStaff(respone);
      } catch (error) {
        console.log("Error at Staffs.jsx", error);
      }
    };
    fetchStaffList();
  }, []);

  return (
    <div>
      {popup ? <AddStaff /> : Fragment}
      <div className="toptable">
        <h1 style={{ marginLeft: "30px" }}>Danh sách nhân viên</h1>
        <div className="topnav__right">
          <div className="topnav__right-item">
            <div className="button" onClick={() => setPopup(!popup)}>
              Thêm nhân viên +
            </div>
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
