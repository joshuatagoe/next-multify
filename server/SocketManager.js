const io = require('./server.js').io
let connectedUsers = {}
let songs = {}
let top = null

module.exports = function(socket){
    console.log("Socket Id: " + socket.id);

    //Verify Username
    socket.on(VERIFY_USER, (nickname,callback)=>{
        if(isUser(connectedUsers, nickname)){
            callback({isUser: true, user:null})
        }
        else{
            callback({isUser: false, user:createUser({name:nickname})})
        }
    })

    //User Connects with Username
    socket.on(USER_CONNECTED, (user)=>{
        connectedUsers = addUser(connectedUsers, user)
        socket.user = user
        socket.emit(VERIFY_USER, user.name, this.setUser)
        console.log(connectedUsers)
    })

    socket.on(SONG_SENT, (user, song)=>{
        if(song.name in song){
            //when user adds a song that already exists, it up votes that song
            socket.emit(VOTEUP, song)
        }
        else{
            song.upvotes = 1
            song.downvotes = 0
            song.totalvotes = song.upvotes - song.downvotes
            songs = addSong(songs, song)  
            socket.emit(SONG_RECEIVED, song)   

        }
    })

    socket.on(SONG_RECEIVED, (song)=>{
        if(!top){
            top = song
        }
    })

    socket.on(VOTEUP, (song)=>{
        

    })

    socket.on(VOTEUP, (song)=>{


    })


    //User disconencts



    //User logouts

}


function addSong(songs, song){
    let newList = Object.assign({}, songs)
    newList[song.name] = song
    return newList


}

function addUser(userList, user){
    let newList = Object.assign({}, userList)
    newList[user.name] = user
    return newList


}

function removeUser(userList, username){
    let newList = Object.assign({}, userList)
    delete newList[username]
    return newList
}

function isUser(userList, username){
    return username in userList

}