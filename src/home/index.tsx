import React from 'react'
import { withRouter } from 'react-router-dom'

function SignIn(props: any) {
  return (
    <button onClick={() => props.history.replace('/')}>登录</button>
  )
}

export default withRouter(SignIn)