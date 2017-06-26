import React, { Component } from "react"

class ListMainBox1  extends Component{
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
      <div className="list-main-box1">
        <div className="main-left">
          {catslist}
        </div>
        <div className="main-right">
          {catlist}
        </div>
      </div>
    )
  }
}
export default ListMainBox1
