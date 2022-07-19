import React, { Component } from "react";
import "../css/index.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";



//components
import Nav from "./Nav";
import apiKey from "../config";
import SearchForm from "./SearchForm";
import PhotoGallery from "./PhotoGallery";


class App extends Component {


  constructor() {
    super();
        this.state = {
          loading: true,
          photos: [],
          travel: [],
          penguins: [],
          flowers: [],
          query: ""
        };
  } 

  componentDidMount() {
    this.performSearch('penguins');
    this.performSearch('flowers');
    this.performSearch();
 
  }
  
/*flickr api endpoint is https://api.flickr.com/services
I went to the flickr api explorer page here https://www.flickr.com/services/api/
and I clicked on the flickr.photos.search in 'photos' in 'API Methods' and got my
url. rest/?method=flickr.photos.search&api_key=${apiKey}&text=fun&per_page=16&format=json&nojsoncallback=1
*/
performSearch = (query = 'travel') => { fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&max_upload_date=07%2F01%2F2022&
    &per_page=16&format=json&nojsoncallback=1`)
    .then(res => res.json())
    .then((data) => {
      if (query === 'travel') {
        this.setState({travel: data.photos.photo, loading: false});
      } else if (query === 'penguins') {
        this.setState({penguins: data.photos.photo, loading: false});
      } else if (query === 'flowers') {
        this.setState({flowers: data.photos.photo, loading: false});
      } else {
        this.setState({
          photos: data.photos.photo,
          loading: false,
          query: query
        });
      }
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
    };


//Route setup so we can switch from different paths
  render () {
    return (
      <BrowserRouter>
        <div className="container">
        <SearchForm onSearch={this.performSearch} />
        <Nav />
          {
              (this.state.loading)
                ? <p>Loading...</p>
                : <Switch>
                    <Route exact path="/" component={ () => <Redirect to="/Travel" /> } />
                    <Route path="/Travel" component={() => <PhotoGallery query="Travel" title="Travel" data={this.state.travel} />} />
                    <Route path="/Penguins" component={() => <PhotoGallery query="Penguins" title="Penguins" data={this.state.penguins} />} />
                    <Route path="/Flowers" component={() => <PhotoGallery query="Flowers" title="Flowers" data={this.state.flowers} />} />
                    <Route path="/:query" component={() => <PhotoGallery query={this.state.query} data={this.state.photos} title= {this.state.query}/>} />
                  </Switch>
          }
        </div>
      </BrowserRouter> 
    )
  }
}

export default App;
