import React from 'react'
import axios from "axios";

import { Button, Input, } from 'semantic-ui-react'
import  {DateRangePicker} from 'rsuite';
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
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <Input type="text" name="name" onChange={this.handleChangeName} />
                        Phone:
                        <Input type="number" name="phone" onChange={this.handleChangePhone}/>
                        Email:
                        <Input type="email" name="email" onChange={this.handleChangeEmail}/>
                    </label>

                    <Button type="submit">Add</Button>

                </form>
                <DateRangePicker
                    onChange={this.handleChangeCalendary}
                    appearance="default"
                    placeholder="Default"
                    style={{ width: 280 }}
                />

            </div>
        )
    }

};
export default CheckoutPage;
