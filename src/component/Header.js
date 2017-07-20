import React, { Component } from 'react';
import { position } from "./Position.js"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Header extends Component {
  componentWillMount(){
    this.props.position
  }
  render() {
    let content = this.props.content
    return (
      <div className="header">
        <a className="position">
          <i className="iconfont icon-dingwei"></i>
          {
              content.city?
                  <span>{content.street}.......</span>
              :content.errorPosition?
                  content.errorPosition
              :'加载中...'
            }
        </a>
        <div className="logo">
          <div className="img"></div>
          <span>萌萌宠</span>
        </div>
        <Link to="/search" className="h-search"><i className="iconfont icon-sousuo-sousuo"></i>搜索</Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  content:state.content
})
export default connect(mapStateToProps,{ position })(Header);
