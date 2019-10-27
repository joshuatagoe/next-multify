import React, {Component} from 'react';
import './App.css';
import img from './plus.svg';
import SearchPage from './SearchPage.js';
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
      

      return (
<div>
          </div>
      );
    }
  }



export default App;