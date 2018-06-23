import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/footer.js";
import NewsList from "./components/NewsList/NewsList.js";
import Input from "./components/Input/Input.js";
import Thumbnail from "./components/Thumbnail/Thumbnail.js";
import API from "./utils/API.js";
import Col from "./components/Grid/Col.js";
import Row from "./components/Grid/Row.js";
import Container from "./components/Grid/Container.js";

class App extends Component {
  state = {
    news: [],
    newsSearch: "New York Times"
  };

  handleNewSearch = event => {
    const { name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    API.getNews(this.state.newsSearch)
  .then(res => this.setState({news: res.data}))
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Header/>
         
        <Row>
              <form className="col s12">
        
                  <div className="input-field col s6">
                    <i className="material-icons prefix">search</i>
        <Input/>
                    <label for="icon_prefix2">Search News</label>
                      <button className="btn waves-effect waves-light" onClick={() => this.state.handleSubmit} type="submit" name="action">Submit
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
        
              </form>
        </Row>
          
        <Footer/>
      </div>
    );
  }
}

export default App;
