import React, { Component } from 'react';

class Route extends Component {

    createTable = () => {
        let table = []

        for (let j = 0; j < this.props.routeList.length; j++) {
            table.push(<li key={j}>{this.props.routeList[j].desc}</li>)
        }
        return table
    }    

    render(){
        return(
            <ul>
                {this.createTable()}
            </ul>
        );
    }
}

 export default Route;