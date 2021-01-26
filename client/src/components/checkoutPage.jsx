import React from 'react'
import Calendary from './calendary';
import { format } from 'date-fns'
import {enGB} from "date-fns/locale";
import {Link} from 'react-router-dom';

class CheckoutPage extends React.Component{
state = {
  dataEnd : null,
    dataStart : null,
};

componentDidMount() {

}
     Up   = (value) => {this.setState({ dataEnd : value}) };
    Down = (value) => {this.setState({ dataStart : value})};



    render() {

    const {dataStart,dataEnd} = this.state;
    const {items} = this.props;
    const {Loaded} = this.props;
    console.log(items);
    return(
        <div>
           <Link to="/"> <button onClick={Loaded.bind(null, true)}>Назад</button></Link>
            <input type='text' placeholder='ФИО'/>
            <input type='Phone' placeholder="Номер телефона"/>
            <input type="Email" placeholder="Email"/>
            <input type='checkbox' value='Viber'/>
            <input type='checkbox' value='WhatsApp'/>
            <input type='checkbox' value='Telegram'/>
            <div className="calendary-container"><Calendary Up={this.Up} Down={this.Down}/></div>
        </div>
        );
    };
};
export default CheckoutPage;