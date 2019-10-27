import React from 'react';
import Login from '../component/Login'
import Head from 'next/head';
import fetch from 'isomorphic-unfetch'
import { VERIFY_USER } from '../Events'
import io from 'socket.io-client'

export default class Index extends React.Component {

  constructor(props){

    super(props)
    this.state = {
      inRoom : false
    }
  }

  static async getInitialProps(ctx) {
    const res = await fetch('http://localhost:3000/getUser', {
      headers: {
        cookie: ctx.req.headers.cookie,
      },
    });
 
    const user = await res.text()
    console.log(res.text())
    return { user : user}
  }

  enter(evt){
    evt.preventDefault()
    const { socket } = this.props
    io.emit(VERIFY_USER, this.props.user)
    inRoom = true
    
  }
  

  render(){

    const Button = <div onClick={this.enter}>
      Enter Room
    </div>
    return (
      <>
      { this.state.inRoom ? "egg" : (<div>
        <Head>
        <title>Example of the Authorization Code flow with Spotify</title>
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"/>
      </Head>
      {this.props.user ? Button : <Login/> }
      </div>)
      }
      </>

    );
  }
}
