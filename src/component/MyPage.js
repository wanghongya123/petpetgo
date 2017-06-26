import React, { Component } from 'react';
import Footer from "./Footer.js"
import Header1 from "./Header1.js"
import "../css/mypage.css"
import { Link } from 'react-router-dom'
class MyPage extends Component {
  render() {
    return (
      <div className="mypage" >
        <Header1/>
        <div className="mypage-main">
          <div className="main-pic">
            <Link to="/enter" className="pic-poto"></Link>
            <p>登录</p>
          </div>
          <div className="main-text">
            <p>客服电话:101-097-77<span>(服务时间: 9:00-20:00)</span></p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default MyPage;
