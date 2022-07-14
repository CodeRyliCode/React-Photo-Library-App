import React, { Component } from "react";
import "../css/index.css";

//components
import Nav from "./Nav";
import apiKey from "../config";
import SearchForm from "./SearchForm";


class App extends Component {


  constructor() {
    super();
        this.state = {
          photos: []
        }
  } 

  componentDidMount() {
/*flickr api endpoint is https://api.flickr.com/services
I went to the flickr api explorer page here https://www.flickr.com/services/api/
and I clicked on the flickr.photos.search in 'photos' in 'API Methods' and got my
url. rest/?method=flickr.photos.search&api_key=${apiKey}&text=fun&per_page=16&format=json&nojsoncallback=1
*/


    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=travel&max_upload_date=07%2F01%2F2022&
    &per_page=16&format=json&nojsoncallback=1`)
    .then(res => res.json())
    .then(data => {
        this.setState({
          photos: data.photos.photo
        })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }



  render() {
    console.log(this.state.photos)
    return (
      <div className="container">
        <SearchForm />
        <Nav apiKey={apiKey} photos={ {travel: this.state.photos, penguins:this.state.photos, flowers: this.state.photos}}/>



      </div>
    );
  }
}

export default App;
