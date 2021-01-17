import React from 'react';
import Team from './component/team';

class ridersPage extends React.Component{
    constructor(props){
        super(props);
        this.state =  {
            data : [],
            error : null
        }
    }

    componentDidMount(){

    }

    render() {
        return(
            <div className='team'> {/* Отрисовка команды с райдерами */}
                <Team/>
            </div>
        )
    }

}

export default ridersPage;