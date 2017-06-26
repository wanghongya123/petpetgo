import React, { Component } from 'react';
import axios from "axios"
import Settings from "../setting.js"
import { Link } from 'react-router-dom'
import "../css/search.css"
class Search extends Component {
  constructor(){
    super();
    this.state={
      list:[]
    }
  }
  handleClick(){
    console.log(1)
    let self = this
    const name = this.text.value
    console.log(name)
    axios.post(`${Settings.host}/shop/search`,{name:name})
    .then(function(response){
    console.log(response.data.shops)
    let shops = response.data.shops
     console.log(shops)
     self.setState({list:[...shops]})
  })
  .catch(err => {
    console.log(err) // show json data from sever
    var span = document.createElement("span")
    span.innerHTML="未找到相关名称..."
    span.style.color = "#ccc";
    console.log(span)
    var err = document.getElementById("err")
    err.appendChild(span)
  })
  }
  handleChange(){
    let self = this
    const key = this.text.value
    console.log(key)
    axios.post(`${Settings.host}/shop/search`,{key:key})
    .then(function(response){
    let shops = response.data.shops
      self.setState({list:[...shops]})
  })
  .catch(err => {
    console.log(err) // show json data from sever
  })

}
  render() {
    let list = this.state.list.map((item)=>(
    <a  className="search-list">{item.name}</a>
    ))
    return (
      <div className="search">
        <div className="search-header">
          <div className="search-box">
            <Link to="/"><i className="iconfont icon-guanbi"></i></Link>
            <span>搜索</span>
          </div>
          <div className="search-box1">
            <span ><i className="iconfont icon-sousuo-sousuo"></i></span>
            <input type="text" className="search-input" ref={(input)=>this.text=input} onChange={this.handleChange.bind(this)}/>
            <div　className="box1-search" onClick={this.handleClick.bind(this)}>搜索</div>
          </div>
        </div>
        <div id="err" className="search-main">
          {list}
        </div>
      </div>
    );
  }
}

export default Search;
