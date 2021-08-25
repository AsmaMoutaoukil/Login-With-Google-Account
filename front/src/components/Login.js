import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios'
require('dotenv').config()

class Login extends Component {
     handleLogin = googleData => {
       console.log(googleData.profileObj);
       
    //    console.log(googleData.tokenId);
       
      axios.post("http://localhost:3000/login/api/v1/auth/google",
    
      {id_token:googleData.tokenId}
    )
    .then(function (reponse) {
        
        console.log(reponse);
    })
    .catch(function (erreur) {
      
        console.log(erreur);
    });
 
    
     }
      

    render() {
     
        console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
        
        return (
            <div>
    <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Log in with Google"
    onSuccess={this.handleLogin}
 
    cookiePolicy={'single_host_origin'}
/>
            </div>
        );
    }
}

export default Login;
   