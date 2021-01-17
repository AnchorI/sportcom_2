import React from 'react';
import Rider from "./rider";
class team extends React.Component{

    constructor(props){
        super(props);

    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <img src="#" alt="logoTeam"/>
                <h2>Team Name</h2>
                <Rider/>
            </div>);

    }


}
export default team;