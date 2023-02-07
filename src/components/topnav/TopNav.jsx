import React from "react";

import "./topnav.css";

import { Link } from "react-router-dom";

import Dropdown from "../dropdown/Dropdown";

import notifications from "../../assets/JsonData/notification.json";


import user_menu from "../../assets/JsonData/user_menus.json";

const curr_user = {
  display_name: "Tú PH",
  image:
    "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/320881319_1206837483523963_2616536678702255853_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IeecMs_ndbsAX-75l-b&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfA2JHqJ4neeezd5-nmM_2IEqKOFwSRXhbDW8qaGgO3Kdw&oe=63E6A2BE",
};

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const Topnav = () => {
  return (
    <div className="topnav">
      <div>
        <h1>Hello, Tus!</h1>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            icon="bx bx-bell"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
          {/* dropdown here */}
        </div>
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <i className="bx bx-chevron-down"></i>
        <div className="topnav__right-item"></div>
      </div>
    </div>
  );
};

export default Topnav;
