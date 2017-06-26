import React, { Component } from 'react';
import axios from "axios"
import Settings from "../setting.js"
import {
  Link
} from 'react-router-dom'
class Enter extends Component {
  constructor() {
  super()
  this.login = this.login.bind(this)
  }
  login(e){
    e.preventDefault()
    const username = this.username.value
    const password = this.password.value
    console.log(username)
    console.log(password)
    let data = {
      username: this.username.value,
      password: this.password.value
    }
    const self = this
    axios.post(`${Settings.host}/user/signin`,data)
    .then(function(response){
      console.log(response)
      self.props.history.push('/')
    })
    .catch(err => {
      var span = document.createElement("span")
      span.innerHTML="用户名或密码错误"
      span.style.color = "red"
      console.log(span)
      console.log(err.response) // show json data from sever
      var err = document.getElementById('err')
      console.log(err)
      err.appendChild(span)
    })
  }
  render() {
    return (
      <div className="enter">
        <form className="enter-from" onSubmit={this.login}>
          <h1>萌萌宠</h1>
          <div　className="enter-from-box">
            <ladle>用户名:</ladle>
            <input ref={(input) => this.username = input}/>
          </div>
          <div id="err"　className="enter-from-box">
            <ladle>密码:</ladle>
            <input type="password" ref={(input) => this.password = input}/>

          </div>
          <div className="enter-from-box1">
            <button type="password" className="enter-enter">登录</button>
          <Link to={"/enroll"}　className="enter-enroll">注册</Link>
          </div>
          <div className="enroll-from-box2">
            <a　className="enroll-a" >忘记密码</a>
          </div>
        </form>
      </div>
    );
  }
}
export default Enter;
