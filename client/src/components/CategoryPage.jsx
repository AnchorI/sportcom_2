import axios from "axios";
import {Grid} from "semantic-ui-react";
import Team from "./Team";
import React from "react";


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
                <div className='header'><h1>{id}</h1></div>

            <Grid columns={3} divided>

                <Grid.Row>
                    {isReadyTeam ? "Идёт загрузка команд..." :
                        FiltredTeam.map(function e (cur,i,team){
                                return <Team {...team[i]}></Team>;

                        })}</Grid.Row>
            </Grid></div>
        );
    }
}
export default CategoryPage
