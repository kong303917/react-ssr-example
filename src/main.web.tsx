import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <header>
      <nav>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/signin">登录</Link></li>
        </ul>
      </nav>
    </header>
    <App />
  </BrowserRouter>, document.querySelector('#app')
)