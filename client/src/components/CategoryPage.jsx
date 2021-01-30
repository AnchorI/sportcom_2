import axios from "axios";
import {Grid} from "semantic-ui-react";
import Team from "./Team";
import React from "react";


class CategoryPage extends React.Component{
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
            <Grid columns={3} divided>
                <Grid.Row>
                    {isReadyTeam ? "Идёт загрузка команд..." :
                        FiltredTeam.map(function e (cur,i,team){
                                return <Team {...team[i]}></Team>;

                        })}</Grid.Row>
            </Grid>
        );
    }
}
export default CategoryPage
