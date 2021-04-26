import React, { Component } from 'react';
import './App.css';
import Displayappcard from './Displayappcard/Displayappcard';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      cards: [],
      genres: '',
      sort: '',
      error: null
    }
  }

  setGenres(genres){
    this.setState({
      genres
    });
  }

  setSort(sort){
    this.setState({
      sort
    });    
  }

  handleSubmit(e){
    e.preventDefault();
    const baseUrl = "http://localhost:8000/apps";
    const params = [];
    if(this.state.genres){
      params.push(`genres=${this.state.genres}`);
    }
    if(this.state.sort){
      params.push(`sort=${this.state.sort}`);
    }
    const query = params.join('&');
    const url = `${baseUrl}?${query}`;

    fetch(url)
    .then(res =>{
      if(!res.ok){
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data =>{
      this.setState({
        cards: data,
        error:null
      });
    })
    .catch(err =>{
      this.setState({
        error: 'Sorry, could not get application cards at this time'
      });
    })
  }

  render(){
    const cards = this.state.cards.map((card, i) =>{
      return <Displayappcard {...card} key={i} />
    });
    return(
      <main className="App">
        <h1>Google Play Apps</h1>
        <div className="search">
          <form onSubmit={e => this.handleSubmit(e)}>
            <div>
            <label htmlFor="genres" class="genresLabel">
              Genres:  
            </label>            
            <select id="genres" name="genres" onChange={e=>this.setGenres(e.target.value)}>
                <option value="">
                  None
                </option>
                <option value="Action">
                  Action
                </option>
                <option value="Puzzle">
                  Puzzle
                </option>
                <option value="Strategy">
                  Strategy
                </option>
                <option value="Casual">
                  Casual
                </option>
                <option value="Arcade">
                  Arcade
                </option>
                <option value="Card">
                  Card
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="sort" class="sortLabel">
              Sort:
              </label>
              <select id="sort" name="sort" onChange={e=>this.setSort(e.target.value)}>
                <option value="">
                  None
                </option>
                <option value="Rating">
                  Rating
                </option>
                <option value="App">
                  App
                </option>
              </select>
            </div>
            <div className="searchButtonContainer">
              <button type="submit" className="searchButton bouncy">Search</button>
            </div>
          </form>
          <div className='App_error'>
            {this.state.error}
            </div>
        </div>
        {cards}
      </main>
    )
  }
}


export default App;
