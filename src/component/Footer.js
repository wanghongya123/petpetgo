import React, { Component } from 'react';
import "../css/footer.css"
import "../css/iconfont.css"

import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Link to="/" ><i className="iconfont icon-shouye-shouye"></i><br/>首页</Link>
        <Link to="/indentPage"><i className="iconfont icon-2"></i><br/>订单</Link>
        <Link to="/myPage"><i className="iconfont icon-1"></i><br/>我的</Link>
      </div>
    );
  }
}

export default Footer;
