import React, { Component } from 'react';
import Link from 'next/link'

class Login extends Component{

    render(){

       return <div>
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

    }

    
}

export default Login