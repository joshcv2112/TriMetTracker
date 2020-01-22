import React, { Component } from 'react';

class Route extends Component {

    state = {
        loading: true,
        routeList: null,
    };
    
    async componentDidMount() {
        const url = "https://developer.trimet.org/ws/V1/routeConfig/appID/5D6544C9A9CD1ED345B3CC22E/json/true";
        const response = await fetch(url);
        const data = await response.json();
        const routeList = [];
        data.resultSet.route.forEach(element => routeList.push(element));
        //data.resultSet.route.forEach(element => routeDescList.push(element.desc));
        this.setState({route: data.resultSet.route[0], routeList: routeList, loading: false});
        console.log(this.state.routeList);
    }

    createTable = () => {
        let table  = [];
        for (let i = 0; i < this.state.routeList.length; i++) {
            table.push(<li key={i}>{this.state.routeList[i].desc}</li>);
        }
        return table;
    }

    render(){
        return(
            <div>
                {this.state.loading || !this.state.route ? (
                    <p>LOADING . . .</p>
                ) : (
                    <div>
                        <h1>TriMet Routes</h1>
                        <ul>
                            {this.createTable()}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

 export default Route;