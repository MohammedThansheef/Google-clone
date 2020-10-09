import React from "react";
import "./Home.css";

import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <a href="https://accounts.google.com/login/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin">
          Gmail
        </a>
        {/* <Link to="/gmail">
          <p>Gmail</p>
        </Link> */}
        <Link to="/images">
          <p>Images</p>
        </Link>
        <AppsIcon className="appicon" />
        <Avatar
          className="avatar"
          src="https://media-exp1.licdn.com/dms/image/C5603AQGF5Tw7u6Rhng/profile-displayphoto-shrink_200_200/0?e=1605744000&v=beta&t=YxXIUU7ZSry22aTHv_yQAkhsaPrawp58CRtXSLV2Qnc"
        />
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__search">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
