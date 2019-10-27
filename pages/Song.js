import React, {Component} from 'react';
import TriangleU from './Assets/triangleu.png';
import TriangleD from './Assets/triangled.png';


export default class Song extends Component {
    constructor(props){
        super(props);
        this.state = {
            r:Math.floor(Math.random() * 256),
            g:Math.floor(Math.random() * 256),
            b:Math.floor(Math.random() * 256),
            opacityup: 0.2,  
            opacitydown: 0.2,      
        }
        this.voteup = this.voteup.bind(this)
        this.votedown = this.votedown.bind(this)
    }
    
    componentDidMount() {
        console.log(this.state.r, this.state.g, this.state.b);
    } 
    
    voteup(){
        this.setState({
            opacityup: 1,
        })
    };

    votedown(){
        this.setState({
            opacitydown: 1,
        })
    };

    render(){

        var styles = {
            box: {
                display: 'flex',
                flexDirection: 'column',
                width:'22%',
                height:'25%',
            
                margin: '8px',
                padding: '10px',
                position: 'relative',
                background: "rgba(" + this.state.r + "," + this.state.g + "," + this.state.b + ", 0.5",
            },
            h1:{
                fontSize: '140px',
                margin: '0',
                paddingLeft: '5%',
            },
            h2:{
                fontSize: '40px',
                marginTop: '-6%',
                paddingLeft: '15%',
            },
            p:{
                fontSize: '40px',
                margin: '0',
                paddingLeft: '15%',
            },
            button1: {
                background: 'none',
                border: 'none',
                width: '100px',
                height: '100px',
                position: 'absolute',
                top: '10px',
                right:'20px',
            },
            button2: {
                background: 'none',
                border: 'none',
                width: '100px',
                height: '100px',
                position: 'absolute',
                bottom: '10px',
                right: '20px',
            },
            imageup: {
                width: '100px',
                height: '100px',
                opacity: this.state.opacityup,
            },
            imagedown: {
                width: '100px',
                height: '100px',
                opacity: this.state.opacitydown,
            }
            
        };
        return(
            <div style = {styles.box}>
                <h1 style={styles.h1}>{this.props.rank}</h1>
                <h2 style={styles.h2}>{this.props.name}</h2>
                <p style={styles.p}>{this.props.artist}</p>
                <button style={styles.button1} onClick={this.votedown}><img src={TriangleD} alt='triangle down' style={styles.imagedown}/></button>
                <button style={styles.button2} onClick={this.voteup}><img src={TriangleU} alt='triangle up' style={styles.imageup}/></button>
           
            </div>
        )
    }
};




