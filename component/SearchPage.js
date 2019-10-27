import React, {Component} from 'react';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          results: []
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      async handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
        let token =  this.props.user.user_token
        const url = 'https://api.spotify.com/v1/search?q=' + this.state.value + "&type=track"
        let results = await fetch (url, {
          headers: {
            'Authorization': 'Bearer '+token
          }
        })
        console.log(results)
        results = await results.json()
        this.setState({results : results.body})
      }

      request() {
                }
    
    render() {
      let results = this.state.results.map((x)=>{
        return <div>
          {x}
        </div>
      })
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
          <div className='flexy'>
              {results}
          </div>
          <style jsx>{`
          .flexy {
            display: flex
          }
          
          
          `}</style>
            </div>
        )
    }
}



export default SearchPage;