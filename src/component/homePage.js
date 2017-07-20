import React, { Component } from 'react';
import "../css/homepage.css"
import Header from "./Header.js"
import Footer from "./Footer.js"
import "../css/iconfont.css"
import axios from "axios"
import Settings from "../setting.js"
import {
  Link
} from 'react-router-dom'
class HomePage extends Component {
  constructor(){
    super()
      this.state={
        // list:[],
        list1:[],
        id:''
    }
  }
  componentWillMount(){
    let self = this
    axios.get(`${Settings.host}/shops`)
    .then(function(response){
      console.log(response.data.shops)
      let oldlist1 = response.data.shops
      self.setState({list1:[...oldlist1]})
    })
  }
  render() {
    let newlist1 = this.state.list1.map((item)=>(
      <Link to={`/homePage/${item._id}/listPage`} className="list-newlist" >
          <img className="list-pic" alt="pic" src={require("../img/fandian.jpg")}></img>
          <span>{item.name}</span>
      </Link>
    ))
    return (
      <div className="homepage">
        <Header/>
        <div className="homepage-main">
          <div className="home-banner">
            <img className="home-img" alt="banner" src={require("../img/timg.jpg")}></img>
          </div>
          <div className="home-box">
            <div className="home-box-a">
              <a>
                <img className="home-box-a-img" alt="banner" src={require("../img/timg-dog.jpg")}></img>
              </a>
              <span>萌狗狗</span>
            </div>
            <div className="home-box-a">
              <a>
                <img className="home-box-a-img" alt="banner" src={require("../img/time3.jpg")}></img>
              </a>
              <span>可爱鸟</span>
            </div>
            <div className="home-box-a">
              <a >
                <img className="home-box-a-img" alt="banner" src={require("../img/time2.jpg")}></img>
              </a>
              <span>圆圆鼠</span>
            </div>
            <div className="home-box-a">
              <a >
                <img className="home-box-a-img" alt="banner" src={require("../img/zhu.jpg")}></img>
              </a>
              <span>迷你猪</span>
            </div>
            <div className="home-box-a">
              <a >
                <img className="home-box-a-img" alt="banner" src={require("../img/time6.jpg")}></img>
              </a>
              <span>长耳兔</span>
            </div>
            <div className="home-box-a">
              <a >
                <img className="home-box-a-img" alt="banner" src={require("../img/time4.jpg")}></img>
              </a>
              <span>五彩鱼</span>
            </div>
            <div className="home-box-a">
              <a >
                <img className="home-box-a-img" alt="banner" src={require("../img/timg1.jpg")}></img>
              </a>
              <span>喵星人</span>
            </div>
            <div className="home-box-a">
              <a >
                <img className="home-box-a-img" alt="banner" src={require("../img/time5.jpg")}></img>
              </a>
              <span>高冷宠</span>
            </div>
          </div>
          <div className="home-list">
            <h2>附近商家</h2>
            <div className="list-a">
                <a>销量排行</a>
                <a>销量排行</a>
                <a>销量排行</a>
            </div>
            <div className="list-list">
              {newlist1}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
