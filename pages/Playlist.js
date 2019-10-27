import React, {Component} from 'react';
import Song from '../component/Song';
import img from './plus.svg';


export default class Playlist extends Component {


    render(){
        var styles = {
            link: {
                width: '5vh',
                padding:'10%',
            },
            playlist: {
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
            }
            

        };


        let songlist = this.props.songs.map((x)=>{
            return(
            <Song 
                name={x.name}
                rank ={x.rank}
                artist={x.artist} 
                number={x.number}
            />
            )


        })

        


        return(
            <div style={styles.playlist}>
                {songlist}
                <a href='/search' style={styles.link}><img src={img} alt='plus' style={styles.link}/></a>
                <button onClick={this.props.addSong}> ADD SONG</button>
            </div>

        )
        
    }
};


