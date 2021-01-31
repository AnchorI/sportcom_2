import React from 'react'
import Calendary from './calendary';
import { format } from 'date-fns'
import {enGB} from "date-fns/locale";
import {Link} from 'react-router-dom';
import Finish from './Finish';
import axios from "axios";
import items from "../containers/CategoryPage";

class CheckoutPage extends React.Component{


    state = {
        name: '',
        phone: '',
        email: '',
        items: this.props,
    };

    handleChangeName = event => {
        this.setState({ name: event.target.value });
    };
    handleChangePhone = event => {
        this.setState({ phone: event.target.value });
    };
    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const {items} = this.state;
        const user = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            items: items.items,

        };
        console.log(user);

        axios.post('http://localhost:1234/cart/create',{...user, ...items},{
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            // withCredentials: false,
            // credentials: 'same-origin',
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChangeName} />
                        Phone:
                        <input type="number" name="phone" onChange={this.handleChangePhone}/>
                        Email:
                        <input type="email" name="email" onChange={this.handleChangeEmail}/>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }

};
export default CheckoutPage;
