import React, { Component } from 'react';
import axios from "axios"
import Settings from "../setting.js"
import "./enroll.css"
import {
  Link
} from 'react-router-dom'
class Enroll extends Component {
  handleSubmit(e , props){
    e.preventDefault()
    const username= this.username.value
    const password= this.password.value
    const newpassword= this.newpassword.value
    let data = {
    username: this.username.value,
    password: this.password.value
  }
    if(username ===""){
      alert("用户名不能为空")
    }else if(password.length < "6"){
      alert("密码过于简单")
    }else if(password === newpassword){
      console.log(username)
      console.log(password)
      console.log(newpassword)
      axios.post(`${Settings.host}/user/signup`, data).then(res => {
        console.log('res', res.data.msg)
        this.props.history.push('/')
      }).catch(err => {
        console.log(err.response) // show json data from sever
      })

      axios.get(`${Settings.host}/user/signup`).then(res => {
        console.log()
        this.props.history.push('/')
      }).catch(err => {
        console.log(err.response) // show json data from sever
      })
    }else{
      alert("与密码一致")
    }
  }
  render() {
    return (
      <div className="enroll">
        <form className="enroll-from" onSubmit={this.handleSubmit.bind(this)}>
          <h1>萌萌宠</h1>
          <div　className="enroll-from-box">
            <ladle>用户名:</ladle>
            <input type="text" placeholder="不为空" ref={(input) => this.username = input}/>
          </div>
          <div　className="enroll-from-box">
            <ladle>密码:</ladle>
            <input type="password"　placeholder="不为空，不少于六位" ref={(input) => this.password = input}/>
          </div>
          <div　className="enroll-from-box">
            <ladle>确认密码:</ladle>
            <input type="password"　placeholder="不为空，不少于六位，与密码保持一致" ref={(input) => this.newpassword = input}/>
          </div>
          <div className="enroll-from-box1">
              <button className="enroll-enroll">同意以下协议并注册</button>
              <Link to='/' className="enroll-enroll">取消</Link>
          </div>

          <div className="enroll-from-box2">
            <a　className="enroll-a" >《萌萌宠用户协议》</a>
          </div>
          <div className="enroll-from-box3">©meituan.com  京ICP证070791号  京公网安备11010502025545号</div>
        </form>
      </div>
    );
  }
}
export default Enroll;
