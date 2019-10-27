import React, {Component} from 'react';
import './App.css';
//import img from './plus.svg';
import SearchPage from './SearchPage';
//import { relative } from 'path';
import Playlist from './Playlist';


  class App extends Component {

    constructor(props){
      super(props)
      this.state={
          songs: []

      }
      this.addSong = this.addSong.bind(this)
  } 

    addSong() {
      let RandomNumber = Math.floor(Math.random()*100+1);
      let newSong={
          name: 'Bohemian Rhapsody',
          rank: '1.',
          artist: 'Queen',
          number: RandomNumber, 
      };
      let newarr = this.state.songs
      newarr.push(newSong)
      this.setState({
          songs : newarr
      })
  }


    render() {

      console.log("App Page")
      console.log(this.props)
      return (
      <div>
  <Playlist addSong={this.addSong} songs={this.state.songs}/>
  <SearchPage user={this.props.user} addSong={this.addSong}/>
          </div>
      );
    }
  }



export default App;