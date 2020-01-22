import React, { Component } from 'react';
import Route from './Components/route';

class App extends Component {

  state = {
    loading: true,
    routeList: null,
  };

  async componentDidMount() {
    const url = "https://developer.trimet.org/ws/V1/routeConfig/appID/5D6544C9A9CD1ED345B3CC22E/json/true";
    const response = await fetch(url);
    const data = await response.json();
    const routeList = [];
    const routeDescList = [];
    data.resultSet.route.forEach(element => routeList.push(element));
    data.resultSet.route.forEach(element => routeDescList.push(element.desc));
    this.setState({route: data.resultSet.route[0], routeList: routeList, loading: false});
    console.log(this.state.routeList);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.route ? (<div>Loading...</div>) : 
        (<div>
            <Route routeList={this.state.routeList}/>
          </div>)}
      </div>
   );
  }
}

export default App; 