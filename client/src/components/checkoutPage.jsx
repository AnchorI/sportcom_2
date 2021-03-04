import React from 'react'
import axios from "axios";
import Back from '../img/back.svg';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import  {DateRangePicker} from 'rsuite';
import back from "../img/back.svg";
import {NavLink} from "react-router-dom";
class CheckoutPage extends React.Component{


    state = {
        name: '',
        phone: '',
        email: '',
        date: '',
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
    handleChangeCalendary = e =>{
        this.setState({date : e} );
        console.log(e);
    };


    handleSubmit = event => {
        event.preventDefault();
        const {items} = this.state;
        const user = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            date : this.state.date,
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

    };

    render() {
        const { active } = this.state;
        return (
            <div className="Check_Container">
                <div className='Form_Header'>
                    <h4>Оформление заявки</h4>
                </div>
                <Form  onSubmit={this.handleSubmit}>

                        <div className='Doneck'>
                        <label htmlFor='name'> ФИО: </label><div className='form'>
                        <input placeholder="ФИО" type="text" name="name" onChange={this.handleChangeName} /></div>
                        <label htmlFor="phone">Телефон:</label><div>
                        <input type="number"  placeholder="Телефон" name="phone" onChange={this.handleChangePhone}/></div>
                       <label htmlFor="email">Email:</label><div>
                        <input type="email" placeholder="E-mail" name="email" onChange={this.handleChangeEmail}/></div>
                            <label htmlFor="Data">Выберите дату мероприятея</label>
                        <DateRangePicker
                            onChange={this.handleChangeCalendary}
                            appearance="default"
                            placeholder="Выберите дату"
                            style={{ width: 280 }}
                            className='Form_Date_Picker'
                            name='Data'
                        />
                         <Button type="submit">Add</Button></div>

                </Form>


            </div>
        )
    }

};
export default CheckoutPage;
