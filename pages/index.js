import React from 'react';
import Login from '../component/Login'
import Head from 'next/head';
import fetch from 'isomorphic-unfetch'
import App from '../component/App'
import { VERIFY_USER } from '../Events'
import io from 'socket.io-client'

export default class Index extends React.Component {

  constructor(props){

    super(props)
    this.state = {
      inRoom : false
    }

    this.enter = this.enter.bind(this)
  }

  static async getInitialProps(ctx) {
    const res = await fetch('http://localhost:3000/getUser');
    const user = await res.text()
    return { user : user.user}
  }

  enter(evt){
    evt.preventDefault()
    //const { socket } = this.props
    //io.emit(VERIFY_USER, this.props.user)
    this.setState({inRoom : true})

  }
  

  render(){

    const Button = <div className='btn btn-primary' onClick={this.enter}>
      Enter Room
    </div>
    console.log(this.props)
    return (
      <>
      { this.state.inRoom ? <App user={this.props.user} />: (<div>
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
