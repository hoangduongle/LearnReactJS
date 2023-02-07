import "./addStaff.css";

function AddStaff({ props }) {
  return (
    <div className="form-popup">
      <form action="" className="form-container">
        <div className="left">
          <img
            className="avatar"
            src={
              "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/318004607_3295825100734176_5675291227991595834_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jQKb45OgkLsAX_018gV&tn=vMqjf36MtxNlOrCx&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDI5VI0Z700m42ejLmTOT19CMUsL_V3Pr0XbkAsVuNeuA&oe=63E48E92"
            }
            alt=""
          />
        </div>
        <div className="right">
          <label>Mã nhân viên:</label>
          <input type="text" value={"#1111"} />
          <label>
            Tên đăng nhập: <span className="proirity">*</span>
          </label>
          <input type="text" />

          <label>Mật khẩu:</label>
          <input type="password" value={"0000000"} />

          <label>
            Họ và tên: <span className="proirity">*</span>
          </label>
          <input type="text" />

          <label>
            Chức danh: <span className="proirity">*</span>
          </label>
          <input type="text" />

          <label>
            Email: <span className="proirity">*</span>
          </label>
          <input type="text" />

          <label>
            Số điện thoại: <span className="proirity">*</span>
          </label>
          <input type="text" />

          <label>
            Địa chỉ: <span className="proirity">*</span>
          </label>
          <input type="text" />

          <label>Trạng thái: </label>
          <br></br>
          <input className="checkBoxStatus type" type="checkbox" />

          <div style={{ display: "flex", float: "right" }}>
            <button type="submit" className="btn">
              Lưu
            </button>
            <button type="button" className="btn cancel" onclick="closeForm()">
              Huỷ
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddStaff;
