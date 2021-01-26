import React from 'react'
import Calendary from './calendary';
import { format } from 'date-fns'
import {enGB} from "date-fns/locale";
import {Link} from 'react-router-dom';
import axios from "axios";

class CheckoutPage extends React.Component{
state = {
  dataEnd : null,
    dataStart : null,
    fio: '1',
    Phone: '1',
    Email: '1',
};

    handleChange = event => {
        this.setState({ fio: event.target.value , Phone: event.target.value, Email: event.target.value},
            // {dataEnd: event.target.value},{dataStart: event.target.value}
            );
    }

    handleSubmit = event => {
        event.preventDefault();

        const masiv = {
            fio: this.state.fio,
            Phone: this.state.Phone,
            Email: this.state.Email
        };



        console.log(masiv);

        axios.post('./public/data/cart.json',masiv,{
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            // withCredentials: false,
            // credentials: 'same-origin',
        })
            .then(res => {
                console.log(masiv);
                console.log(res);
                console.log(res.data);
            })

    }

     Up   = (value) => {this.setState({ dataEnd : value}) };
    Down = (value) => {this.setState({ dataStart : value})};





    render() {

    const {dataStart,dataEnd} = this.state; // Time
    const {items} = this.props; // cart
    const {Loaded} = this.props;
    console.log(items);
    console.log(dataStart,"___",dataEnd);
    return(
        <div>
           <Link to="/"> <button onClick={Loaded.bind(null, true)}>Назад</button></Link>
            <form onSubmit={this.handleSubmit}>
            <input type='name' name="fio" placeholder='ФИО' onChange={this.handleChange}/>
            <input type='Phone' name="Phone" placeholder="Номер телефона" onChange={this.handleChange}/>
            <input type="Email" name="Email" placeholder="Email" onChange={this.handleChange}/>
            <input type='checkbox' value='Viber'/>
            <input type='checkbox' value='WhatsApp'/>
            <input type='checkbox' value='Telegram'/>
            <button type="submit">Add</button>
            <div className="calendary-container"><Calendary Up={this.Up} Down={this.Down}/></div>
            </form>
        </div>
        );
    };
};
export default CheckoutPage;