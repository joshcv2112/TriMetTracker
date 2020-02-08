import React, { Component } from 'react';
import DropdownExampleSearchSelection from './route_options';

class TransitRoutes extends Component {

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
        this.setState({route: data.resultSet.route[0], routeList: routeList, loading: false});
        console.log(data);
    }

    createMAXTable = () => {
        let table  = [];
        for (let i = 0; i < this.state.routeList.length; i++) {
            if (this.state.routeList[i].type === "R")
                table.push(<li key={i}>{this.state.routeList[i].desc}</li>);
        }
        return table;
    }

    createBusTable = () => {
        let table  = [];
        for (let i = 0; i < this.state.routeList.length; i++) {
            if (this.state.routeList[i].type === "B")
                table.push(<li key={i}>{this.state.routeList[i].desc}</li>);
        }
        return table;
    }

    render(){
        return(
                <div>
                    <div>
                        <DropdownExampleSearchSelection />
                    </div>
                    <div>
                    {this.state.loading || !this.state.route ? (
                        <p>LOADING . . .</p>
                    ) : (
                        <div>
                            <div>
                                <h1>TriMet Rail Lines</h1>
                                <ul>
                                    {this.createMAXTable()}
                                </ul>
                            </div>
                            <div>
                                <h1>TriMet BUS Routes</h1>
                                <ul>
                                    {this.createBusTable()}
                                </ul>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
        );
    }
}

 export default TransitRoutes;