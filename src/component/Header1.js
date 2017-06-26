import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "../css/header1.css"
class Header1 extends Component {
  render() {
    console.log(this.props.pathname)
    const name= this.props.pathname
    return (
      <div className="Header1">
        <div className="Header1-header">
          <div className="Header1-box">
            <Link to="/"><i className="iconfont icon-guanbi"></i></Link>
            <span>{name==="/indentPage"?"订单":"我的"}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header1;
