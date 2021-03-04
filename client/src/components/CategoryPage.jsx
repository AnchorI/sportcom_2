import axios from "axios";
import {Grid} from "semantic-ui-react";
import Team from "./Team";
import React from "react";
import Back from "../img/back.svg";
import {NavLink} from "react-router-dom";


class CategoryPage extends React.Component{
    componentDidMount() {
        const {setTeam,setRiders} = this.props;
        axios.get('http://localhost:1234/team/get').then(({data})=>{
            setTeam(data);
        });
        axios.get('http://localhost:1234/rider/get').then(({data})=>{
            setRiders(data);
        })
    }


    render() {
        const id = this.props.match.params.id;
        const Id = [id];



        const {isReadyTeam} = this.props;
        let {team} = this.props;

        if(team == null){
            team = [];
        }
        const FiltredTeam = team.filter(e=>Id.find(i=>i === e.category));

        console.log(FiltredTeam);
        return(
            <div className='container_cat'>
                <div className='child'>
                <NavLink  to='/'><img className='min-button' src={Back} alt=""/></NavLink>
                <div className='header'><h1>{id}</h1></div>
                </div>

            <div className='Grid-Container'>

                    {isReadyTeam ? "Идёт загрузка команд..." :
                        FiltredTeam.map(function e (cur,i,team){
                                return <div className='Grid-Children'><Team {...team[i]}></Team></div>;

                        })}
            </div></div>
        );
    }
}
export default CategoryPage
