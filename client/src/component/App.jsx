import React, {Component} from 'react';
import axios from 'axios';
import Filter from "../containers/Filter";
import Rider from '../containers/card';

class App extends Component {

    componentWillMount() {
        const {setRiders} = this.props;
        axios.get('/data.json').then(({data}) => {
           setRiders(data);
        });
    }

    render() {
         const {riders,  isReady,  setFilter} = this.props;
         let item = [];
         if(riders){
             item = riders.item;
         }
        return(

            <ul>
                <Filter setFilter={setFilter}/>
                {!isReady || !riders ? "Загрузка..." :
                    item.map(rider => (
                        <Rider {...rider}></Rider>
                ))}

            </ul>

        );
    }
}

export default App;