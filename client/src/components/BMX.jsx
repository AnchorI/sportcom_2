import React from 'react';
import axios from "axios";
import Team from '../components/Team'


class BMX extends React.Component{
    componentDidMount() {
        const {setTeam,setRiders} = this.props;
        axios.get('/data/team.json').then(({data})=>{
            setTeam(data);
        });
        axios.get('/data/riders.json').then(({data})=>{
            setRiders(data);
        })
    }


    render() {
        const {isReadyTeam} = this.props;
        let {team} = this.props;
        if(team == null){
            team = [];
        }
        return(
            <div>
                {isReadyTeam ? "Идёт загрузка команд..." :
                team.map(function e (cur,i,team){
                        if(team[i].category === "2"){
                           return <Team {...team[i]}></Team>
                        }
                })}
            </div>
        );
    }
}
export default BMX;