import React from 'react'
import { StaticRouter, Link } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import App from './App'

export function render(req: any) {
  const context = {}
  const html = renderToString( // 导出一个渲染函数，根据请求链接进行分发
    <StaticRouter location={req.url} context={context}>
      <header>
        <nav>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/signin">登录</Link></li>
          </ul>
        </nav>
      </header>
      <App />
    </StaticRouter>
  )
  return [html, context] // 导出context和html渲染结果
}