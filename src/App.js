import React, { Component } from 'react';
import './App.css';
import HomePage from "./component/homePage.js"
import Enter from "./component/Enter.js"
import Enroll from "./component/enroll.js"
import { position } from "./component/Position.js"
import IndentPage from "./component/IndentPage.js"
import MyPage from "./component/MyPage.js"
import Search from "./component/search.js"
import ListPage from "./component/listPage.js"
import "./css/iconfont.css"
import store from "./redux/store.js"
import { Provider } from "react-redux"
import { Route, HashRouter } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <HashRouter>
            <div className="App">
              <Route  exact path="/" component={HomePage} />
              <Route  path="/enter" component={Enter} />
              <Route  path="/enroll" component={Enroll} />
              <Route  path="/position" component={position} />
              <Route  path="/search" component={Search} />
              <Route  path="/indentpage" component={IndentPage} />
              <Route  path="/mypage" component={MyPage} />
              <Route  path="/homePage/:id/listPage" component={ListPage} />
            </div>
          </HashRouter>
      </Provider>

    );
  }
}
export default App;
