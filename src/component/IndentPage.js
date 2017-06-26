import React, { Component } from 'react';
import Header1 from "./Header1.js"
import Footer from "./Footer.js"
import Settings from "../setting.js"
import "../css/indentpage.css"
import axios from "axios"
class IndentPage extends Component {
  constructor(){
    super()
    this.state={
      indentList:[]
    }
  }
  componentWillMount(){
    const self =this
    axios.get(`${Settings.host}/orders`)
    .then(function(response){
      console.log(response)
      console.log(response.data.orders)
      const iList = response.data.orders
      console.log(iList)
      self.setState({indentList:[...iList]})
    })
    .catch(err=>{
        console.log(err)
    })

  }
  render() {
    let list = this.state.indentList.map((item)=>(
      <div>{item.name}</div>
    ))
    console.log(this.props.location.pathname)
    let pathname = this.props.location.pathname
    return (
      <div className="indentpage">
        <Header1 pathname={pathname} />
        <div className="indentpage-main">
            你还没有订单。。。。
            {list}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default IndentPage;
