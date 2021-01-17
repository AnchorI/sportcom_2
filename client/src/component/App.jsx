import React, {Component} from 'react';
import axios from 'axios';
import WorkSpace from "../WorkSpace";
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

        return(

            <ul>
                <Filter setFilter={setFilter}/>
                {!isReady ? "Загрузка..." :
                    riders.map(rider => (
                        <Rider {...rider}></Rider>
                ))}

            </ul>

        );
    }
}

export default App;