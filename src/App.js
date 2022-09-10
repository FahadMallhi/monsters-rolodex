import './App.css';
import { Component } from 'react';
import Header from './components/header component/Header';
import Search from './components/searching component/search';
import Cardlist from './components/cardlist component/cardlist';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      searched:[]
    };
  }
  getUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(user => this.setState({ items: user,searched:user }))
  }
  componentDidMount() {
    this.getUser();
  }
  search = async (searchValue) => {
    const matched = await this.state.items.filter(value => value.name.toLowerCase().includes(searchValue.toLowerCase())||value.email.toLowerCase().includes(searchValue.toLowerCase()));
    if(searchValue){
     this.setState({searched: matched});
    }else{
      this.setState({searched: this.state.items});
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Search searchData ={this.search} />
          <Cardlist items={this.state.searched} />
        </header>
      </div>
    );
  }
}

export default App;

