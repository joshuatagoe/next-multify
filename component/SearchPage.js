import React, {Component} from 'react';

class SearchPage extends Component {
    render() {
        return(
            <div>
                <a href='/'>Back</a>
                <button onClick={this.props.addSong}>ADD SONG</button>
                <h1>{this.props.addSong}</h1>
            </div>
        )
    }
}



export default SearchPage;