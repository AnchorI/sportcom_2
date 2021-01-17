import React, {Component} from 'react';
import axios from 'axios';
import WorkSpace from "../WorkSpace";

import Rider from '../containers/card';

class App extends Component {

    componentWillMount() {
        const {setRiders} = this.props;
        axios.get('http://localhost:1234/rider/get').then(({data}) => {
           setRiders(data);
        });
    }

    render() {
         const {riders,  isReady} = this.props;
        return(
            <ul>
                {!isReady ? "Загрузка..." :
                    riders.map(rider => (
                        <Rider {...rider}></Rider>
                ))}
            </ul>
        );
    }
}

export default App;