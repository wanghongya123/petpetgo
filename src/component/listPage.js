import React, { Component } from 'react';
import "../css/listpage.css"
import axios from "axios"
import Settings from "../setting.js"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class ListPage extends Component {
  constructor(){
    super()
    this.state={
      name:[],
      catslist:[],
      catlist:[]
    }
  }
  componentWillMount(e){
    const self = this
    const id = this.props.match.params.id
    const catid = this
    axios.get(`${Settings.host}/shops`)
    .then(function(response){
      const shop = response.data.shops.filter((item)=>(item._id===id))
      console.log(shop[0].name)
      const name1 = shop[0].name
      self.setState({name:[...name1]})
      }
    )
    axios.get(`${Settings.host}/shop/${id}/cats`)
    .then(function(response){
      console.log(response.data.cats)
      const catsList = response.data.cats
      self.setState({catslist:[...catsList]})
    })
  }
  handleClick(){
  this.props.history.goBack()
  }
  handleClickCat(e){
    const self = this
    console.log(e.target.id)
    const catlistid = e.target.id
    axios.get(`${Settings.host}/cat/${catlistid}/products`)
    .then(function(response){
      console.log(response.data.products)
      const catlist = response.data.products
      self.setState({catlist:[...catlist]})
    })
  }
  render(){
    const catslist = this.state.catslist.map((item)=>(
      <div  className="list-cats" id={item._id} onClick={this.handleClickCat.bind(this)}>
        {item.name}
      </div>
    ))
    const catlist = this.state.catlist.map((item)=>(
      <div>{item.name}</div>
    ))
    return(
      <div className="listpage">
        <div className="listpage-header">
          <p　className="listpage-return">
            <span className="list-header-return" onClick={this.handleClick.bind(this)}>《</span>
            <span className="list-header-name">{this.state.name}</span>
          </p>
        </div>
        <div className="listpage-top">
          <a>点菜</a>
          <a>评价</a>
          <a>商家</a>
        </div>
        <div className="listpage-main">
          <div className="main-left">
            {catslist}
          </div>
          <div className="main-right">
            {catlist}
          </div>
        </div>
      </div>
    )
  }
}
export default ListPage
