var express = require('express');
var request = require('request'); // "Request" library
var cors = require('cors');
var fs = require('fs')
const next = require('next')
const dev = process.env.NODE_DEV !== 'production' //true false
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
const SocketManager = require('./SocketManager')
var app = express();
var http = require('http')
var server = http.createServer(app);
var session = require('express-session')
const io = require('socket.io')(server)





var client_id = 'f73c63fa448c49b08855af181fce57a6'; // Your client id
var client_secret = '785996124b04465497f471f8cfd2f53b'; // Your secret
var redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri
var user = null

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
  
  var stateKey = 'spotify_auth_state';
  

 
  nextApp.prepare().then(()=>{
    

    app.use(express.static(__dirname + '/public'))
    .use(cors())
    .use(cookieParser())
    .use(session({secret: 'ssshhhhh',
      resave: true,
        saveUninitialized: false
      }));




    app.get('/login', function(req, res) {
  
        var state = generateRandomString(16);
        console.log(state)
        
        res.cookie(stateKey, state);
      
        // your application requests authorization
        var scope = 'user-read-private user-read-email';
        res.redirect('https://accounts.spotify.com/authorize?' +
          querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
          }));
      });


      app.get('/callback', function(req, res) {
        req.session.test = "boi"
        req.session.eggs = 1;
        console.log(req.session)

        // your application requests refresh and access tokens
        // after checking the state parameter
      
        var code = req.query.code || null;
        var state = req.query.state || null;
        var storedState = req.cookies ? req.cookies[stateKey] : null;
      
        if (state === null || state !== storedState) {
          res.redirect('/#' +
            querystring.stringify({
              error: 'state_mismatch'
            }));
        } else {
          res.clearCookie(stateKey);
          var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
              code: code,
              redirect_uri: redirect_uri,
              grant_type: 'authorization_code'
            },
            headers: {
              'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
          };
      
          request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {
      
              var access_token = body.access_token,
                  refresh_token = body.refresh_token;
              var options = {
                url: 'https://api.spotify.com/v1/me',
                headers: { 'Authorization': 'Bearer ' + access_token },
                json: true
              };

              
      
              // use the access token to access the Spotify Web API
              request.get(options, function(error, response, body) {
                console.log("test3")
                req.session.user = body 
                user = body
                console.log(req.session)
                res.redirect('/')   
               
              });
      
              // we can also pass the token to the browser to make requests from there
             /* res.redirect('/#' +
                querystring.stringify({
                  access_token: access_token,
                  refresh_token: refresh_token
                }));*/
            } else {
              res.redirect('/#' +
                querystring.stringify({
                  error: 'invalid_token'
                }));
            }
          });
        }
      });
      
      app.get('/refresh_token', function(req, res) {
      

        // requesting access token from refresh token
        var refresh_token = req.query.refresh_token;
        var authOptions = {
          url: 'https://accounts.spotify.com/api/token',
          headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
          form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
          },
          json: true
        };
      
        request.post(authOptions, function(error, response, body) {
          if (!error && response.statusCode === 200) {
            var access_token = body.access_token;
            res.send({
              'access_token': access_token
            });
          }
        });
      });
      

    app.get('/getUser', (req,res)=>{
      if(!user){
        console.log(req.session.test + req.session.eggs)
        res.send({user : null})
      }
      else{

        res.send(user)
      }

    })

    app.get('*', (req,res) => {
        return handle(req,res) // for all the react stuff
    })


    server.listen(3000, ()=> {
        console.log("Connected to Port: " + 3000)
    
    })

  })

