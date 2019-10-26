import React from 'react';
import Link from 'next/link';
import Head from 'next/head';



export default class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: null
    }

  }

  

  render(){
    return (
      <div>
        <Head>
        <title>Example of the Authorization Code flow with Spotify</title>
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"/>
      </Head>

      <h1>This is an example of the Authorization Code flow</h1>
      <Link href="/login">
      <div  className="btn btn-primary">Log in with Spotify</div>
      </Link>
      <style jsx>{`
          #login, #loggedin {
            display: none;
          }
          .text-overflow {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 500px;
          }
          `}
      </style>
    </div>
      
    );
  }
}
