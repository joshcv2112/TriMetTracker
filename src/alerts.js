import React, { Component } from 'react';

class Alerts extends Component {

    state = {
        loading: true,
        alertList: null,
    };
    
    async componentDidMount() {
        const url = "https://developer.trimet.org/ws/v2/alerts/appID/5D6544C9A9CD1ED345B3CC22E";
        const response = await fetch(url);
        const data = await response.json();
        const alertList = [];
        data.resultSet.alert.forEach(element => alertList.push(element));
        this.setState({alertList: alertList, loading: false});
    }

    createTable = () => {
        let table  = [];
        for (let i = 0; i < this.state.alertList.length; i++) {
            table.push(<li key={i}>{this.state.alertList[i].desc}</li>);
        }
        return table;
    }

    render(){
        return(
            <div>
                {this.state.loading || !this.state.alertList ? (
                    <p>LOADING . . .</p>
                ) : (
                    <div>
                        <h1>Alerts</h1>
                        <ul>
                            {this.createTable()}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

 export default Alerts;