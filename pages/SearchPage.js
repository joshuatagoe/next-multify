import React, {Component} from 'react';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'Please write an essay about your favorite DOM element.'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
        fetch ('https://api.spotify.com/v1/search/q=name:' + this.state.value + "&type=track")
      .then(response => console.log(response))
      .then(data => this.setState({ value : data.value}));
      }

      request() {
                }
    
    render() {
        return(
            <div>
                <a href='/'>Back</a>
                <button onClick={this.props.addSong}>ADD SONG</button>
                <h1>{this.props.addSong}</h1>
                <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
      </form>
            </div>
        )
    }
}



export default SearchPage;